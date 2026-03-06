import { Space, Typography, Divider } from 'antd';
import type { ReactNode } from 'react';
import { memo } from 'react';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import styles from './section-title-slide.module.css';

// Import section title images
import sectionImage1 from './images/section-title/section-01.jpg';
import sectionImage2 from './images/section-title/section-02.jpg';
import sectionImage3 from './images/section-title/section-03.jpg';
import sectionImage4 from './images/section-title/section-04.jpg';
import sectionImage5 from './images/section-title/section-05.jpg';
import sectionImage6 from './images/section-title/section-06.jpg';
import sectionImage7 from './images/section-title/section-07.jpg';
import sectionImage8 from './images/section-title/section-08.jpg';
import sectionImage9 from './images/section-title/section-09.jpg';
import sectionImage10 from './images/section-title/section-10.jpg';
import sectionImage11 from './images/section-title/section-11.jpg';
import sectionImage12 from './images/section-title/section-12.jpg';
import sectionImage13 from './images/section-title/section-13.jpg';
import sectionImage14 from './images/section-title/section-14.jpg';
import sectionImage15 from './images/section-title/section-15.jpg';
import sectionImage16 from './images/section-title/section-16.jpg';
import sectionImage17 from './images/section-title/section-17.jpg';

const { Title, Paragraph } = Typography;

/**
 * Default pool of section title images
 * Can be overridden via imagePool prop
 */
const DEFAULT_SECTION_IMAGES: string[] = [
  sectionImage1,
  sectionImage2,
  sectionImage3,
  sectionImage4,
  sectionImage5,
  sectionImage6,
  sectionImage7,
  sectionImage8,
  sectionImage9,
  sectionImage10,
  sectionImage11,
  sectionImage12,
  sectionImage13,
  sectionImage14,
  sectionImage15,
  sectionImage16,
  sectionImage17,
];

// Style constants to avoid recreating objects on every render
const IMAGE_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const IMAGE_CONTAINER_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

export interface SectionTitleSlideProps {
  /**
   * Main title text
   */
  title: string;
  /**
   * Optional subtitle text (displayed in italic below divider)
   * Can be a string or ReactNode for custom formatting (e.g., links)
   */
  subtitle?: string | ReactNode;
  /**
   * Optional image on the left side (for split layout)
   * Can be either a direct image source URL or use imageIndex with imagePool
   */
  imageSrc?: string;
  /**
   * Optional image alt text
   */
  imageAlt?: string;
  /**
   * Optional index to select image from imagePool
   * If provided, imageSrc will be ignored and image will be selected from imagePool
   */
  imageIndex?: number;
  /**
   * Optional pool of images to choose from when imageIndex is provided
   */
  imagePool?: string[];
}

/**
 * Reusable component for section title slides (intermediate/second-level titles)
 * Used to separate major sections within a presentation
 * Style matches intermediate title slides pattern from other presentations
 */
export const SectionTitleSlide = memo(function SectionTitleSlide({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageIndex,
  imagePool,
}: SectionTitleSlideProps) {
  // Determine which image to use
  let finalImageSrc: string | undefined = imageSrc;

  if (imageIndex !== undefined) {
    // Use image from pool (custom or default) if imageIndex is provided
    const pool = imagePool || DEFAULT_SECTION_IMAGES;
    if (pool.length > 0) {
      const index = imageIndex % pool.length;
      finalImageSrc = pool[index];
    }
  }

  if (finalImageSrc) {
    // Split layout: image on the left, title block on the right
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <ImageWithLoader
            src={finalImageSrc}
            alt={imageAlt ?? title}
            style={IMAGE_STYLE}
            containerStyle={IMAGE_CONTAINER_STYLE}
          />
        </div>
        <div className={styles.contentContainer}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <Title level={1} className={styles.title}>
              {title}
            </Title>
            {subtitle && (
              <>
                <Divider className={styles.divider} />
                <Paragraph className={styles.subtitle}>{subtitle}</Paragraph>
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
      <Title level={1} className={styles.centeredTitle}>
        {title}
      </Title>
      {subtitle && (
        <>
          <Divider className={styles.centeredDivider} />
          <Paragraph className={styles.centeredSubtitle}>{subtitle}</Paragraph>
        </>
      )}
    </Space>
  );
});
