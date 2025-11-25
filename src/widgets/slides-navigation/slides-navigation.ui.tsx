import { Button, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
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
  const progressPercentage = (currentSlide / totalSlides) * 100;

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetSlideIndex = Math.min(
      Math.floor(percentage * totalSlides),
      totalSlides - 1
    );
    onGoToSlide(targetSlideIndex);
  };

  return (
    <div className={styles.navigation}>
      {/* Previous Button */}
      <Button
        className={styles.navButton}
        icon={<LeftOutlined />}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous slide"
      />

      {/* Progress Bar Container */}
      <div className={styles.progressContainer}>
        {/* Progress Bar */}
        <div
          className={styles.progressBar}
          onClick={handleProgressBarClick}
          role="progressbar"
          aria-valuenow={currentSlide}
          aria-valuemin={1}
          aria-valuemax={totalSlides}
          aria-label="Slide progress"
        >
          {/* Progress Fill */}
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Slide Counter */}
      <Text type="secondary" className={styles.slideCounter}>
        {currentSlide} / {totalSlides}
      </Text>

      {/* Next Button */}
      <Button
        className={styles.navButton}
        icon={<RightOutlined />}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
      />
    </div>
  );
}
