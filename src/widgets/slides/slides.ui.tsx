import { Slide } from '~widgets/slide';
import { useSlidesNavigation, type SlideData } from './slides.hook';

interface SlidesProps {
  slides: SlideData[];
  companySlug: string;
}

export function Slides({ slides, companySlug }: SlidesProps) {
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
  );
}
