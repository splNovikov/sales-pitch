import { Layout, Flex } from 'antd';
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
      </Flex>
    </Footer>
  );
}
