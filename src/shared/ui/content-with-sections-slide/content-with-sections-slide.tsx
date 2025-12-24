import { type ReactNode } from 'react';
import { Card } from 'antd';
import clsx from 'clsx';
import styles from './content-with-sections-slide.module.css';

export interface ContentWithSectionsSlideProps {
  /**
   * Main content (usually FeaturesSlide or other components)
   */
  children: ReactNode;
  /**
   * Optional top section content
   */
  topSection?: ReactNode;
  /**
   * Optional bottom section content
   */
  bottomSection?: ReactNode;
  /**
   * Optional wrapper card around all content
   */
  wrapInCard?: boolean;
  /**
   * Additional className for the container
   */
  className?: string;
}

/**
 * Slide component that wraps content with optional top and bottom sections
 * Useful for extending FeaturesSlide with additional custom content
 */
export function ContentWithSectionsSlide({
  children,
  topSection,
  bottomSection,
  wrapInCard = true,
  className,
}: ContentWithSectionsSlideProps) {
  const content = (
    <div className={clsx(styles.container, className)}>
      {topSection && (
        <div className={styles.topSection}>{topSection}</div>
      )}
      <div className={styles.mainContent}>{children}</div>
      {bottomSection && (
        <div className={styles.bottomSection}>{bottomSection}</div>
      )}
    </div>
  );

  if (wrapInCard) {
    return <Card>{content}</Card>;
  }

  return content;
}
