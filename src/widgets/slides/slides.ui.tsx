import { useState } from 'react';
import { Layout } from 'antd';
import { Slide } from './slide';
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = mockSlides; // TODO: Load slides based on companySlug

  const handlePrevious = () => {
    setCurrentSlideIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex(prev => Math.min(slides.length - 1, prev + 1));
  };

  const handleGoToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <Layout className={styles.slides}>
      <Content className={styles.slidesContent}>
        <Slide
          slide={currentSlide}
          companySlug={companySlug}
          slideNumber={currentSlideIndex + 1}
          totalSlides={slides.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onGoToSlide={handleGoToSlide}
          canGoPrevious={currentSlideIndex > 0}
          canGoNext={currentSlideIndex < slides.length - 1}
        />
      </Content>
    </Layout>
  );
}
