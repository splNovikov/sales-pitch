import { Space, Typography, Divider } from 'antd';
import { ImageWithLoader } from './image-with-loader';

const { Title, Paragraph } = Typography;

export interface SectionTitleSlideProps {
  /**
   * Main title text
   */
  title: string;
  /**
   * Optional subtitle text (displayed in italic below divider)
   */
  subtitle?: string;
  /**
   * Optional image on the left side (for split layout)
   */
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * Reusable component for section title slides (intermediate/second-level titles)
 * Used to separate major sections within a presentation
 * Style matches intermediate title slides pattern from other presentations
 */
export function SectionTitleSlide({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: SectionTitleSlideProps) {
  if (imageSrc) {
    // Split layout: image on the left, title block on the right
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            flexBasis: '33%',
            maxWidth: '33%',
            overflow: 'hidden',
          }}
        >
          <ImageWithLoader
            src={imageSrc}
            alt={imageAlt ?? title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            containerStyle={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <Title level={1} style={{ marginBottom: 0 }}>
              {title}
            </Title>
            {subtitle && (
              <>
                <Divider
                  style={{ margin: 'var(--app-spacing-lg) auto', width: 200 }}
                />
                <Paragraph
                  style={{
                    fontSize: 'var(--app-font-size-lg)',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  {subtitle}
                </Paragraph>
              </>
            )}
          </Space>
        </div>
      </div>
    );
  }

  // Fallback: centered title slide (no image)
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
      <Title level={1} style={{ textAlign: 'center', marginBottom: 0 }}>
        {title}
      </Title>
      {subtitle && (
        <>
          <Divider
            style={{ margin: 'var(--app-spacing-lg) 0', width: '200px' }}
          />
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            {subtitle}
          </Paragraph>
        </>
      )}
    </Space>
  );
}

