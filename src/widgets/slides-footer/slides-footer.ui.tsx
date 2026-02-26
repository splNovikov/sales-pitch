import { useState } from 'react';
import { Button, Flex, Layout } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import Logo from '~shared/ui/logo';
import { SlidesNavigation } from '../slides-navigation';
import styles from './slides-footer.module.css';

const { Footer } = Layout;

interface SlidesFooterProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export function SlidesFooter({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  canGoPrevious,
  canGoNext,
}: SlidesFooterProps) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  if (!isVisible) {
    return (
      <div className={styles.floatingToggle}>
        <Button
          type="text"
          icon={<UpOutlined />}
          onClick={toggleVisibility}
          className={styles.toggleButton}
          aria-label="Показать футер"
        />
      </div>
    );
  }

  return (
    <Footer className={styles.footer}>
      <Flex
        justify="space-between"
        align="center"
        className={styles.footerContent}
      >
        {/* Company Logo */}
        <div className={styles.companyLogo}>
          <Logo size="xs" />
        </div>

        {/* Slides Navigation */}
        <SlidesNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrevious={onPrevious}
          onNext={onNext}
          onGoToSlide={onGoToSlide}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />

        {/* Toggle: hide footer */}
        <div className={styles.toggleWrapper}>
          <Button
            type="text"
            icon={<DownOutlined />}
            onClick={toggleVisibility}
            className={styles.toggleButton}
            aria-label="Скрыть футер"
          />
        </div>
      </Flex>
    </Footer>
  );
}
