import { useState, useEffect, useRef } from 'react';

/**
 * Hook for managing image fade-in animation state
 * Handles smooth fade-in animation when image changes
 * Optimized to only trigger on actual image content changes
 */
export function useImageFadeAnimation(
  image: React.ReactNode,
  animationDelay: number = 50
): boolean {
  const [isVisible, setIsVisible] = useState(true); // Start visible instead of false
  const previousImageRef = useRef<React.ReactNode>(image);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setIsVisible(true);
      previousImageRef.current = image;
      return;
    }

    // Check if image actually changed by comparing references
    const imageChanged = previousImageRef.current !== image;

    if (!imageChanged) {
      // No change, keep visible
      return;
    }

    // Image changed - trigger animation
    previousImageRef.current = image;
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [image, animationDelay]);

  return isVisible;
}
