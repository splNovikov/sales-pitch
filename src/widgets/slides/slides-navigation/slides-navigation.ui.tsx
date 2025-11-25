import { Button, Space, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import styles from './slides-navigation.module.css';

const { Text } = Typography;

interface SlidesNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export function SlidesNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  canGoPrevious,
  canGoNext,
}: SlidesNavigationProps) {
  return (
    <Space className={styles.navigation} size="middle" align="center">
      {/* Previous Button */}
      <Button
        icon={<LeftOutlined />}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous slide"
      />

      {/* Slide Indicators */}
      <Space className={styles.indicators} size="small">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={clsx(
              styles.indicator,
              index === currentSlide - 1 && styles.indicatorActive
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide - 1 ? 'true' : 'false'}
          />
        ))}
      </Space>

      {/* Slide Counter */}
      <Text type="secondary" className={styles.slideCounter}>
        {currentSlide} / {totalSlides}
      </Text>

      {/* Next Button */}
      <Button
        icon={<RightOutlined />}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
      />
    </Space>
  );
}
