import { Layout } from 'antd';
import { Slide } from '~widgets/slide';
import { SlidesFooter } from '~widgets/slides-footer';
import { useSlidesNavigation, type SlideData } from './slides.hook';
import styles from './slides.module.css';

const { Content } = Layout;

interface SlidesProps {
  slides: SlideData[];
}

export function Slides({ slides }: SlidesProps) {
  const {
    currentSlide,
    currentSlideIndex,
    totalSlides,
    handlePrevious,
    handleNext,
    handleGoToSlide,
    canGoPrevious,
    canGoNext,
  } = useSlidesNavigation(slides);

  if (!currentSlide) {
    return null;
  }

  return (
    <Layout className={styles.slides}>
      <Content className={styles.slidesContent}>
        <Slide slide={currentSlide} />
      </Content>
      <SlidesFooter
        currentSlide={currentSlideIndex + 1}
        totalSlides={totalSlides}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onGoToSlide={handleGoToSlide}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
      />
    </Layout>
  );
}
