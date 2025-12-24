import { useState, useEffect } from 'react';

/**
 * Hook for managing feature card animation state
 * Handles fade-in animation with delay
 * Resets animation state when animated prop changes to ensure animation plays on every slide transition
 */
export function useFeatureCardAnimation(
  animated: boolean,
  animationDelay: number
): boolean {
  // Always start with false when animated is true to ensure animation plays
  const [isVisible, setIsVisible] = useState(!animated);

  useEffect(() => {
    if (animated) {
      // Reset to invisible state when animated becomes true
      setIsVisible(false);

      const timer = setTimeout(() => {
        setIsVisible(true);
      }, animationDelay);

      return () => clearTimeout(timer);
    } else {
      // If not animated, show immediately
      setIsVisible(true);
    }
  }, [animated, animationDelay]);

  return isVisible;
}
