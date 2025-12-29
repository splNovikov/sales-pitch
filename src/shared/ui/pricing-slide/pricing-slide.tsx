import { useMemo, type ReactNode } from 'react';
import { Card, Row, Col } from 'antd';
import clsx from 'clsx';
import { FeatureCard, type FeatureCardEmoji, type FeatureCardIconColor } from '~shared/ui/feature-card';
import styles from './pricing-slide.module.css';

export interface PricingTier {
  /**
   * Name of the pricing tier (e.g., "Basic", "Pro")
   */
  name: string;
  /**
   * Price of the tier (e.g., "75 000 ₽", "от 200 000 ₽")
   */
  price: string;
  /**
   * Optional label badge (e.g., "Recommended", "Most Popular")
   */
  label?: string;
  /**
   * Label background color (hex or CSS color)
   */
  labelBg?: string;
  /**
   * Label text color (hex or CSS color)
   */
  labelColor?: string;
  /**
   * List of features included in this tier
   */
  features: string[];
  /**
   * Emoji to display
   */
  emoji?: FeatureCardEmoji;
  /**
   * Icon color variant
   */
  iconColor?: FeatureCardIconColor;
  /**
   * Whether this tier is highlighted/recommended
   */
  highlighted?: boolean;
  /**
   * Custom footer content
   */
  footer?: ReactNode;
}

export interface PricingSlideProps {
  /**
   * Array of pricing tiers to display
   */
  tiers: PricingTier[];
  /**
   * Number of columns in the grid (default: 3)
   */
  columns?: 1 | 2 | 3 | 4;
  /**
   * Whether to animate card appearance
   */
  animated?: boolean;
  /**
   * Base animation delay in milliseconds (default: 100)
   */
  baseAnimationDelay?: number;
  /**
   * Gap between cards horizontally (default: 16)
   */
  gutter?: number;
  /**
   * Vertical spacing between cards (default: 16)
   */
  verticalGap?: number;
  /**
   * Optional wrapper card around all pricing tiers
   */
  wrapInCard?: boolean;
}

/**
 * Component for displaying pricing tiers in a grid layout
 * Built on top of FeatureCard for consistency
 */
export function PricingSlide({
  tiers,
  columns = 3,
  animated = true,
  baseAnimationDelay = 100,
  gutter = 16,
  verticalGap = 16,
  wrapInCard = true,
}: PricingSlideProps) {
  const colSpan = useMemo(() => 24 / columns, [columns]);

  const content = (
    <Row gutter={[gutter, verticalGap]} align="stretch">
      {tiers.map((tier, index) => {
        // Build title with optional label badge
        const title = tier.label ? (
          <div>
            <div>{tier.name}</div>
            <div
              style={{
                display: 'inline-block',
                marginTop: 8,
                padding: '4px 12px',
                background: tier.labelBg || '#f0f0f0',
                color: tier.labelColor || '#000000',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              {tier.label}
            </div>
          </div>
        ) : (
          tier.name
        );

        return (
          <Col
            key={`${tier.name}-${index}`}
            xs={24}
            md={colSpan}
            className={styles.col}
          >
            <FeatureCard
              title={title}
              subtitle={tier.price}
              items={tier.features}
              emoji={tier.emoji}
              iconColor={tier.iconColor}
              footer={tier.footer}
              animated={animated}
              animationDelay={animated ? index * baseAnimationDelay : 0}
              className={clsx(styles.cardWrapper, tier.highlighted && styles.highlighted)}
            />
          </Col>
        );
      })}
    </Row>
  );

  if (wrapInCard) {
    return <Card>{content}</Card>;
  }

  return content;
}
