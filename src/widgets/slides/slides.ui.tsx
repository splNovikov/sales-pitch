import { Layout } from 'antd';
import { Slide } from '~widgets/slide';
import { useSlidesNavigation } from './slides.hook';
import styles from './slides.module.css';

const { Content } = Layout;

interface SlidesProps {
  companySlug: string;
}

// TODO: Replace with actual slides data structure
interface SlideData {
  id: string;
  header?: string;
  content: React.ReactNode;
}

// Temporary mock data - will be replaced with actual data loading
const mockSlides: SlideData[] = [
  {
    id: '1',
    header: 'Welcome',
    content: <div>Slide 1 Content</div>,
  },
  {
    id: '2',
    header: 'Overview',
    content: <div>Slide 2 Content</div>,
  },
  {
    id: '3',
    header: 'Conclusion',
    content: <div>Slide 3 Content</div>,
  },
];

export function Slides({ companySlug }: SlidesProps) {
  const slides = mockSlides; // TODO: Load slides based on companySlug

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
        <Slide
          slide={currentSlide}
          companySlug={companySlug}
          slideNumber={currentSlideIndex + 1}
          totalSlides={totalSlides}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onGoToSlide={handleGoToSlide}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />
      </Content>
    </Layout>
  );
}
