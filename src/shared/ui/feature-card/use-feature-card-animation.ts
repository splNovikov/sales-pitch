import { useState, useEffect } from 'react';

/**
 * Hook for managing feature card animation state
 * Handles fade-in animation with delay
 */
export function useFeatureCardAnimation(
  animated: boolean,
  animationDelay: number
): boolean {
  const [isVisible, setIsVisible] = useState(!animated);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, animationDelay);

      return () => clearTimeout(timer);
    }
  }, [animated, animationDelay]);

  return isVisible;
}
