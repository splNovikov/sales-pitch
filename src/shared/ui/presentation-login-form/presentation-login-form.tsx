'use client';

import { Form, Input, Button, Card, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './presentation-login-form.module.css';

const PRESENTATION_AUTH_KEY_PREFIX = 'presentation-auth-';

/** Secret used to sign tokens (not exported, client-side obscurity only) */
const SECRET = 'xK9#pL2$vN7@mQ4';
/** Token validity: 24 hours */
const TTL_MS = 24 * 60 * 60 * 1000;

function simpleHash(str: string): string {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) + str.charCodeAt(i);
  }
  return (h >>> 0).toString(36);
}

export function getPresentationAuthKey(slug: string): string {
  return `${PRESENTATION_AUTH_KEY_PREFIX}${slug}`;
}

export function isPresentationAuthenticated(slug: string): boolean {
  if (typeof window === 'undefined') return false;
  const key = getPresentationAuthKey(slug);
  const raw = sessionStorage.getItem(key);
  if (!raw) return false;
  const colonIndex = raw.indexOf(':');
  if (colonIndex === -1) {
    sessionStorage.removeItem(key);
    return false;
  }
  const until = Number(raw.slice(0, colonIndex));
  const signature = raw.slice(colonIndex + 1);
  const now = Date.now();
  if (!Number.isFinite(until) || now >= until) {
    sessionStorage.removeItem(key);
    return false;
  }
  const expectedSig = simpleHash(slug + SECRET + String(until));
  if (signature !== expectedSig) {
    sessionStorage.removeItem(key);
    return false;
  }
  return true;
}

export function setPresentationAuthenticated(slug: string): void {
  const until = Date.now() + TTL_MS;
  const signature = simpleHash(slug + SECRET + String(until));
  sessionStorage.setItem(getPresentationAuthKey(slug), `${until}:${signature}`);
}

export interface PresentationLoginFormProps {
  slug: string;
  /** Base64 of "login:password" for this presentation */
  credentialsB64: string;
  title?: string;
  onSuccess: () => void;
  className?: string;
}

export function PresentationLoginForm({
  slug,
  credentialsB64,
  title = 'Доступ к презентации',
  onSuccess,
  className,
}: PresentationLoginFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm<{ username: string; password: string }>();

  const handleFinish = (values: { username: string; password: string }) => {
    setError(null);
    const decoded =
      typeof atob !== 'undefined' ? atob(credentialsB64) : '';
    const colonIndex = decoded.indexOf(':');
    const expectedUser = colonIndex === -1 ? decoded : decoded.slice(0, colonIndex);
    const expectedPass = colonIndex === -1 ? '' : decoded.slice(colonIndex + 1);
    if (
      values.username === expectedUser &&
      values.password === expectedPass
    ) {
      setPresentationAuthenticated(slug);
      onSuccess();
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <Card className={styles.card} title={title}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          size="large"
        >
          <Form.Item
            name="username"
            label="Логин"
            rules={[{ required: true, message: 'Введите логин' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Логин" autoComplete="username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Пароль"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Пароль"
              autoComplete="current-password"
            />
          </Form.Item>
          {error && (
            <Typography.Text type="danger" className={styles.error}>
              {error}
            </Typography.Text>
          )}
          <Form.Item className={styles.submit}>
            <Button type="primary" htmlType="submit" block>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
