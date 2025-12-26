import { Space, Typography } from 'antd';
import { formatDateForSlide } from '~shared/lib/date.utils';

const { Title, Paragraph, Text } = Typography;

export interface MainTitleSlideProps {
  /**
   * Main title text (displayed with gradient)
   */
  title?: string;
  /**
   * Optional subtitle (displayed as Title level 2)
   */
  subtitle?: string;
  /**
   * Optional description paragraph
   */
  description?: string;
  /**
   * Optional logo image source
   */
  logo?: string;
  /**
   * Optional logo alt text
   */
  logoAlt?: string;
  /**
   * Optional max width for logo (default: 200px)
   */
  logoMaxWidth?: number;
  /**
   * Date when presentation was created (ISO string format)
   * Will be formatted and displayed at the bottom
   */
  createdAt: string;
  /**
   * Optional location text (displayed after date)
   */
  location?: string;
}

/**
 * Reusable component for main title slides (first slide of presentation)
 * Clean, simple design with gradient title, optional subtitle, description, logo and date
 */
export function MainTitleSlide({
  title,
  subtitle,
  description,
  logo,
  logoAlt,
  logoMaxWidth = 200,
  createdAt,
  location,
}: MainTitleSlideProps) {
  return (
    <Space
      orientation="vertical"
      size="large"
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Space
        orientation="vertical"
        size="large"
        style={{ textAlign: 'center', maxWidth: '900px' }}
      >
        {logo && (
          <img
            src={logo}
            alt={logoAlt ?? title}
            style={{
              maxWidth: logoMaxWidth,
              width: '100%',
              objectFit: 'contain',
              marginBottom: 0,
            }}
          />
        )}
        <Title
          level={1}
          style={{
            fontSize: '48px',
            fontWeight: 700,
            background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: subtitle
              ? 'var(--app-spacing-md)'
              : 'var(--app-spacing-lg)',
          }}
        >
          {title}
        </Title>
        {subtitle && (
          <Title level={2} style={{ marginTop: 0 }}>
            {subtitle}
          </Title>
        )}
        {description && (
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginBottom: 0,
              color: '#595959',
            }}
          >
            {description}
          </Paragraph>
        )}
      </Space>
      <Text
        type="secondary"
        style={{
          fontSize: '11px',
          opacity: 0.6,
          marginTop: 'auto',
        }}
      >
        {formatDateForSlide(createdAt)}
        {location && ` • ${location}`}
      </Text>
    </Space>
  );
}
