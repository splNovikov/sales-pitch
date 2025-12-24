import { useMemo } from 'react';
import { Card, Row, Col } from 'antd';
import clsx from 'clsx';
import { FeatureCard, type FeatureCardProps } from '~shared/ui/feature-card';
import styles from './features-slide.module.css';

export interface FeaturesSlideProps {
  /**
   * Array of feature cards to display
   */
  cards: Omit<FeatureCardProps, 'animated' | 'animationDelay'>[];
  /**
   * Number of columns in the grid (default: 2)
   */
  columns?: 1 | 2 | 3 | 4;
  /**
   * Whether to animate card appearance
   */
  animated?: boolean;
  /**
   * Base animation delay in milliseconds (default: 100)
   * Each card will have delay = baseDelay * index
   */
  baseAnimationDelay?: number;
  /**
   * Gap between cards horizontally (default: 16)
   */
  gutter?: number;
  /**
   * Vertical spacing between cards in the same column (default: 16)
   */
  verticalGap?: number;
  /**
   * Optional wrapper card around all features
   */
  wrapInCard?: boolean;
}

/**
 * Component that combines multiple FeatureCard components in a grid layout
 * Automatically handles animation delays and responsive columns
 */
export function FeaturesSlide({
  cards,
  columns = 2,
  animated = false,
  baseAnimationDelay = 100,
  gutter = 16,
  verticalGap = 16,
  wrapInCard = true,
}: FeaturesSlideProps) {
  // Calculate column spans for responsive grid (mobile-first: xs=24, md=calculated)
  const colSpan = useMemo(() => 24 / columns, [columns]);

  const content = (
    <Row gutter={[gutter, verticalGap]} align="stretch">
      {cards.map((cardProps, index) => (
        <Col
          key={`${cardProps.title}-${index}`}
          xs={24}
          md={colSpan}
          className={styles.col}
        >
          <FeatureCard
            {...cardProps}
            animated={animated}
            animationDelay={animated ? index * baseAnimationDelay : 0}
            className={clsx(styles.cardWrapper, cardProps.className)}
          />
        </Col>
      ))}
    </Row>
  );

  if (wrapInCard) {
    return <Card>{content}</Card>;
  }

  return content;
}
