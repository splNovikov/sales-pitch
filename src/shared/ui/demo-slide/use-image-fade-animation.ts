import { useState, useEffect } from 'react';

/**
 * Hook for managing image fade-in animation state
 * Handles smooth fade-in animation when image changes
 * Similar to useFeatureCardAnimation but optimized for images
 */
export function useImageFadeAnimation(
  image: React.ReactNode,
  animationDelay: number = 50
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset to invisible state when image changes
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [image, animationDelay]);

  return isVisible;
}
