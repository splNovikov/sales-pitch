import { useMemo, type ReactNode } from 'react';
import { Card, Typography, List } from 'antd';
import type { CardProps } from 'antd';
import clsx from 'clsx';
import { useFeatureCardAnimation } from './use-feature-card-animation';
import styles from './feature-card.module.css';

const { Title } = Typography;

/**
 * Emoji type mapping for FeatureCard
 */
export const FEATURE_CARD_EMOJI_MAP = {
  sparkles: '✨',
  target: '🎯',
  rocket: '🚀',
  lightbulb: '💡',
  star: '⭐',
  palette: '🎨',
  wrench: '🔧',
  chart: '📈',
} as const;

export type FeatureCardEmoji =
  | 'sparkles'
  | 'target'
  | 'rocket'
  | 'lightbulb'
  | 'star'
  | 'palette'
  | 'wrench'
  | 'chart';

/**
 * Icon color variants for FeatureCard title icon
 */
export const FEATURE_CARD_ICON_COLOR_MAP = {
  primary: 'var(--app-color-primary)',
  green: 'green',
  blue: 'blue',
  orange: 'orange',
  purple: 'purple',
  red: 'red',
  gold: 'gold',
  cyan: 'cyan',
} as const;

export type FeatureCardIconColor =
  | 'primary'
  | 'green'
  | 'blue'
  | 'orange'
  | 'purple'
  | 'red'
  | 'gold'
  | 'cyan';

export interface FeatureCardProps
  extends Omit<CardProps, 'title' | 'children' | 'size'> {
  /**
   * Card title text or ReactNode (e.g., Link component)
   */
  title?: string | ReactNode;
  /**
   * Optional subtitle text displayed below title
   */
  subtitle?: string;
  /**
   * Optional footer content displayed at the bottom of the card
   */
  footer?: ReactNode;
  /**
   * Optional icon to display before title
   */
  icon?: ReactNode;
  /**
   * Icon color variant (applied to icon style)
   */
  iconColor?: FeatureCardIconColor;
  /**
   * Array of text items to display in the list
   */
  items: string[];
  /**
   * Emoji to use for all list items in this card (one of 8 variants)
   */
  emoji?: FeatureCardEmoji;
  /**
   * Whether to animate card appearance
   */
  animated?: boolean;
  /**
   * Animation delay in milliseconds (for staggered animations)
   */
  animationDelay?: number;
  /**
   * Card size variant - affects title level and spacing
   */
  size?: 'large' | 'medium' | 'small';
}

/**
 * Reusable feature card component with consistent styling
 * Supports optional fade-in animation
 */
// Constants for size mapping
const TITLE_LEVEL_MAP = {
  large: 3,
  medium: 4,
  small: 5,
} as const;

export function FeatureCard({
  title,
  subtitle,
  footer,
  icon,
  iconColor,
  items,
  emoji,
  animated = false,
  animationDelay = 0,
  size = 'medium',
  className,
  ...cardProps
}: FeatureCardProps) {
  const isVisible = useFeatureCardAnimation(animated, animationDelay);

  // Memoize computed values
  const titleLevel = useMemo(() => TITLE_LEVEL_MAP[size], [size]);
  const titleClassName = useMemo(
    () =>
      clsx(styles.title, {
        [styles.titleLarge]: size === 'large',
        [styles.titleMedium]: size === 'medium',
        [styles.titleSmall]: size === 'small',
      }),
    [size]
  );

  const iconClassName = useMemo(
    () =>
      clsx(styles.iconWrapper, {
        [styles.iconPrimary]: iconColor === 'primary',
        [styles.iconGreen]: iconColor === 'green',
        [styles.iconBlue]: iconColor === 'blue',
        [styles.iconOrange]: iconColor === 'orange',
        [styles.iconPurple]: iconColor === 'purple',
        [styles.iconRed]: iconColor === 'red',
        [styles.iconGold]: iconColor === 'gold',
        [styles.iconCyan]: iconColor === 'cyan',
      }),
    [iconColor]
  );

  const wrapperClassName = useMemo(
    () =>
      clsx({
        [styles.cardWrapper]: animated,
        [styles.cardWrapperAnimated]: animated && !isVisible,
        [styles.cardWrapperVisible]: animated && isVisible,
      }),
    [animated, isVisible]
  );

  return (
    <div className={wrapperClassName}>
      <Card
        size="small"
        type="inner"
        {...cardProps}
        className={className}
        style={cardProps.style}
      >
      {title && (
        <Title level={titleLevel} className={titleClassName}>
          {icon && <span className={iconClassName}>{icon}</span>}
          {title}
        </Title>
      )}
      {subtitle && (
        <Typography.Text type="secondary" className={styles.subtitle}>
          {subtitle}
        </Typography.Text>
      )}
      <List
        size="small"
        dataSource={items}
        renderItem={item => (
          <List.Item className={styles.listItem}>
            <Typography.Text>
              {emoji && (
                <span className={styles.emoji}>
                  {FEATURE_CARD_EMOJI_MAP[emoji]}
                </span>
              )}
              {item}
            </Typography.Text>
          </List.Item>
        )}
      />
      {footer && <div className={styles.footer}>{footer}</div>}
      </Card>
    </div>
  );
}
