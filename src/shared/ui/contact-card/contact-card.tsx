import { Card, Space, Typography, Divider } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useMemo } from 'react';
import clsx from 'clsx';
import styles from './contact-card.module.css';

const { Title, Text, Link } = Typography;

export interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  websiteLabel?: string;
  /**
   * Optional contact photo/image
   */
  photo?: string;
  /**
   * Visual style variant for background color
   */
  variant?: 'green' | 'blue' | 'orange' | 'gray' | 'neutral';
  /**
   * Size preset for paddings and typography
   */
  size?: 'sm' | 'md' | 'lg';
}

// Constants for size mapping
const ROLE_FONT_SIZE_MAP = {
  sm: 12,
  md: 13,
  lg: 14,
} as const;

const TITLE_LEVEL_MAP = {
  sm: 5,
  md: 5,
  lg: 4,
} as const;

export function ContactCard({
  name,
  role,
  phone,
  email,
  websiteLabel,
  photo,
  variant = 'green',
  size = 'md',
}: ContactCardProps) {
  const cardClassName = useMemo(
    () =>
      clsx(styles.card, {
        [styles.variantGreen]: variant === 'green',
        [styles.variantBlue]: variant === 'blue',
        [styles.variantOrange]: variant === 'orange',
        [styles.variantGray]: variant === 'gray',
        [styles.variantNeutral]: variant === 'neutral',
      }),
    [variant]
  );

  const photoClassName = useMemo(
    () =>
      clsx(styles.photo, {
        [styles.photoSmall]: size === 'sm',
        [styles.photoMedium]: size === 'md',
        [styles.photoLarge]: size === 'lg',
      }),
    [size]
  );

  const iconClassName = useMemo(
    () =>
      clsx(styles.icon, {
        [styles.iconSmall]: size === 'sm',
        [styles.iconMedium]: size === 'md',
        [styles.iconLarge]: size === 'lg',
      }),
    [size]
  );

  const iconItemClassName = useMemo(
    () =>
      clsx(styles.iconItem, {
        [styles.iconItemSmall]: size === 'sm',
        [styles.iconItemMedium]: size === 'md',
        [styles.iconItemLarge]: size === 'lg',
      }),
    [size]
  );

  const linkClassName = useMemo(
    () =>
      clsx(styles.link, {
        [styles.linkSmall]: size === 'sm',
        [styles.linkMedium]: size === 'md',
        [styles.linkLarge]: size === 'lg',
      }),
    [size]
  );

  const normalizedPhoneHref = useMemo(
    () => `tel:${phone.replace(/[\s()-]/g, '')}`,
    [phone]
  );
  const normalizedEmailHref = useMemo(() => `mailto:${email}`, [email]);
  const normalizedWebsiteHref = useMemo(
    () =>
      websiteLabel && websiteLabel.trim().length > 0
        ? websiteLabel.startsWith('http')
          ? websiteLabel
          : `https://${websiteLabel.replace(/^\/*/, '')}`
        : undefined,
    [websiteLabel]
  );

  return (
    <Card size="small" className={cardClassName}>
      <Space orientation="vertical" size="small" className={styles.content}>
        <div className={styles.header}>
          {photo ? (
            <img src={photo} alt={name} className={photoClassName} />
          ) : (
            <UserOutlined className={iconClassName} />
          )}
          <Title level={TITLE_LEVEL_MAP[size]} className={styles.title}>
            {name}
          </Title>
        </div>
        <Text
          type="secondary"
          className={styles.role}
          style={{ fontSize: ROLE_FONT_SIZE_MAP[size] }}
        >
          {role}
        </Text>
        <Divider className={styles.divider} />
        <Space
          direction="vertical"
          size="small"
          className={styles.contactsList}
        >
          <Space size="small" className={styles.contactItem}>
            <PhoneOutlined className={iconItemClassName} />
            <Link href={normalizedPhoneHref} className={linkClassName}>
              {phone}
            </Link>
          </Space>
          <Space size="small" className={styles.contactItem}>
            <MailOutlined className={iconItemClassName} />
            <Link href={normalizedEmailHref} className={linkClassName}>
              {email}
            </Link>
          </Space>
          {normalizedWebsiteHref && websiteLabel ? (
            <Space size="small" className={styles.contactItem}>
              <GlobalOutlined className={iconItemClassName} />
              <Link
                href={normalizedWebsiteHref}
                target="_blank"
                className={styles.websiteLink}
              >
                {websiteLabel}
              </Link>
            </Space>
          ) : null}
        </Space>
      </Space>
    </Card>
  );
}
