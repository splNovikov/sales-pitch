import { useState, useEffect } from 'react';

/**
 * Hook for managing contacts slide animation state
 * Handles staggered fade-in animation for multiple contact cards
 * Similar to useFeatureCardAnimation but for multiple items
 */
export function useContactsAnimation(
  animated: boolean,
  itemCount: number,
  baseAnimationDelay: number = 150
): Set<number> {
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(
    new Set(animated ? [] : Array.from({ length: itemCount }, (_, i) => i))
  );

  useEffect(() => {
    if (!animated) {
      return;
    }

    setVisibleIndices(new Set());

    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let index = 0; index < itemCount; index++) {
      const timer = setTimeout(() => {
        setVisibleIndices(prev => new Set([...prev, index]));
      }, index * baseAnimationDelay);
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [animated, itemCount, baseAnimationDelay]);

  return visibleIndices;
}
