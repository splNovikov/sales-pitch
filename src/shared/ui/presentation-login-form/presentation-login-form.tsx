'use client';

import { Form, Input, Button, Card, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './presentation-login-form.module.css';

const PRESENTATION_AUTH_KEY_PREFIX = 'presentation-auth-';

/** Hardcoded credentials for protected presentations (demo only) */
const HARDCODED_CREDENTIALS = {
  username: 'admin',
  password: 'tatneft2025',
} as const;

export function getPresentationAuthKey(slug: string): string {
  return `${PRESENTATION_AUTH_KEY_PREFIX}${slug}`;
}

export function isPresentationAuthenticated(slug: string): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(getPresentationAuthKey(slug)) === 'true';
}

export function setPresentationAuthenticated(slug: string): void {
  sessionStorage.setItem(getPresentationAuthKey(slug), 'true');
}

export interface PresentationLoginFormProps {
  slug: string;
  title?: string;
  onSuccess: () => void;
  className?: string;
}

export function PresentationLoginForm({
  slug,
  title = 'Доступ к презентации',
  onSuccess,
  className,
}: PresentationLoginFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [form] = Form.useForm<{ username: string; password: string }>();

  const handleFinish = (values: { username: string; password: string }) => {
    setError(null);
    if (
      values.username === HARDCODED_CREDENTIALS.username &&
      values.password === HARDCODED_CREDENTIALS.password
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
