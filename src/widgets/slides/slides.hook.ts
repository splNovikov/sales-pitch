import { useState, useEffect, useCallback } from 'react';

export interface SlideData {
  id: string;
  header?: string | React.ReactNode;
  content: React.ReactNode;
}

export interface UseSlidesNavigationResult {
  currentSlideIndex: number;
  currentSlide: SlideData | undefined;
  totalSlides: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleGoToSlide: (index: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

/**
 * Custom hook to manage slides navigation state and keyboard controls
 *
 * Features:
 * - Manages current slide index state
 * - Provides navigation handlers (previous, next, go to slide)
 * - Handles keyboard navigation (ArrowLeft, ArrowRight)
 * - Ignores keyboard events when user is typing in input fields
 *
 * @param slides - Array of slide data
 * @returns Navigation state and handlers
 */
export function useSlidesNavigation(
  slides: SlideData[]
): UseSlidesNavigationResult {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentSlideIndex(prev => {
      const newIndex = Math.max(0, prev - 1);
      // Scroll to top when slide changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return newIndex;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex(prev => {
      const newIndex = Math.min(slides.length - 1, prev + 1);
      // Scroll to top when slide changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return newIndex;
    });
  }, [slides.length]);

  const handleGoToSlide = useCallback((index: number) => {
    setCurrentSlideIndex(index);
    // Scroll to top when slide changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target instanceof HTMLElement && event.target.isContentEditable)
      ) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          handlePrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevious, handleNext]);

  // Scroll to top when slide index changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlideIndex]);

  const currentSlide = slides[currentSlideIndex];
  const canGoPrevious = currentSlideIndex > 0;
  const canGoNext = currentSlideIndex < slides.length - 1;

  return {
    currentSlideIndex,
    currentSlide,
    totalSlides: slides.length,
    handlePrevious,
    handleNext,
    handleGoToSlide,
    canGoPrevious,
    canGoNext,
  };
}
