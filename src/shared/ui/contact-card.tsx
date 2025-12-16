import { Card, Space, Typography, Divider } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Title, Text, Link } = Typography;

export interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  websiteLabel?: string;
  /**
   * Visual style variant for background color
   */
  variant?: 'green' | 'blue' | 'orange' | 'gray' | 'neutral';
  /**
   * Size preset for paddings and typography
   */
  size?: 'sm' | 'md' | 'lg';
}

export function ContactCard({
  name,
  role,
  phone,
  email,
  websiteLabel,
  variant = 'green',
  size = 'md',
}: ContactCardProps) {
  const backgroundColorMap: Record<
    NonNullable<ContactCardProps['variant']>,
    string
  > = {
    green: '#f6ffed',
    blue: '#e6f7ff',
    orange: '#fff7e6',
    gray: '#f5f5f5',
    neutral: '#ffffff',
  };

  const roleFontSizeMap: Record<
    NonNullable<ContactCardProps['size']>,
    number
  > = {
    sm: 12,
    md: 13,
    lg: 14,
  };

  const textFontSizeMap: Record<
    NonNullable<ContactCardProps['size']>,
    number
  > = {
    sm: 14,
    md: 15,
    lg: 16,
  };

  const titleLevelMap: Record<
    NonNullable<ContactCardProps['size']>,
    3 | 4 | 5
  > = {
    sm: 5,
    md: 5,
    lg: 4,
  };

  const normalizedPhoneHref = `tel:${phone.replace(/[\s()-]/g, '')}`;
  const normalizedEmailHref = `mailto:${email}`;
  const normalizedWebsiteHref =
    websiteLabel && websiteLabel.trim().length > 0
      ? websiteLabel.startsWith('http')
        ? websiteLabel
        : `https://${websiteLabel.replace(/^\/*/, '')}`
      : undefined;

  return (
    <Card
      size="small"
      style={{
        backgroundColor: backgroundColorMap[variant],
        height: '100%',
      }}
    >
      <Space orientation="vertical" size="small" style={{ width: '100%' }}>
        <Title
          level={titleLevelMap[size]}
          style={{ marginTop: 0, marginBottom: 4 }}
        >
          <UserOutlined style={{ marginRight: 8 }} />
          {name}
        </Title>
        <Text type="secondary" style={{ fontSize: roleFontSizeMap[size] }}>
          {role}
        </Text>
        <Divider style={{ margin: '8px 0' }} />
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Space size="small">
            <PhoneOutlined
              style={{
                fontSize: size === 'lg' ? 18 : 16,
                color: 'var(--app-color-primary)',
              }}
            />
            <Link
              href={normalizedPhoneHref}
              style={{ fontSize: textFontSizeMap[size] }}
            >
              {phone}
            </Link>
          </Space>
          <Space size="small">
            <MailOutlined
              style={{
                fontSize: size === 'lg' ? 18 : 16,
                color: 'var(--app-color-primary)',
              }}
            />
            <Link
              href={normalizedEmailHref}
              style={{ fontSize: textFontSizeMap[size] }}
            >
              {email}
            </Link>
          </Space>
          {normalizedWebsiteHref && websiteLabel ? (
            <Space size="small">
              <GlobalOutlined
                style={{
                  fontSize: size === 'lg' ? 18 : 16,
                  color: 'var(--app-color-primary)',
                }}
              />
              <Link
                href={normalizedWebsiteHref}
                target="_blank"
                style={{ fontSize: 15 }}
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
