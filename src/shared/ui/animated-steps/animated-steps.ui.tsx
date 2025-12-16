import { useState, useEffect, useRef, useMemo } from 'react';
import { Steps, type StepsProps } from 'antd';
import styles from './animated-steps.module.css';

export interface AnimatedStepsProps extends Omit<StepsProps, 'current'> {
  /**
   * Step switching interval in milliseconds
   * @default 2000
   */
  stepInterval?: number;
  /**
   * Automatically start animation on mount
   * @default true
   */
  autoStart?: boolean;
  /**
   * Stop animation on last step
   * @default true
   */
  stopOnLast?: boolean;
}

/**
 * Steps component with automatic step switching
 *
 * Automatically switches active step at specified intervals,
 * creating dynamic process animation.
 */
export function AnimatedSteps({
  items = [],
  stepInterval = 2000,
  autoStart = true,
  stopOnLast = true,
  ...restProps
}: AnimatedStepsProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(autoStart);
  const itemsRef = useRef(items);
  const isMountedRef = useRef(true);
  const itemsLength = items?.length || 0;

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  // Track mount status
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isRunning || !items || itemsLength === 0 || !isMountedRef.current) {
      return;
    }

    const interval = setInterval(() => {
      if (!isMountedRef.current) {
        return;
      }

      setCurrentStep(prev => {
        if (!isMountedRef.current) {
          return prev;
        }

        const nextStep = prev + 1;
        const currentItemsLength = itemsRef.current?.length || itemsLength;

        if (nextStep >= currentItemsLength && stopOnLast) {
          setIsRunning(false);
          return prev;
        }

        return nextStep >= currentItemsLength ? 0 : nextStep;
      });
    }, stepInterval);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, itemsLength, stepInterval, stopOnLast]);

  // Reset state when items change or component remounts
  useEffect(() => {
    if (!isMountedRef.current) {
      return;
    }
    setCurrentStep(0);
    setIsRunning(autoStart);
  }, [itemsLength, autoStart]);

  // Memoize items to prevent unnecessary re-renders
  const memoizedItems = useMemo(() => {
    return items.map((item, index) => ({
      ...item,
      className: `${item.className || ''} ${styles.stepItem} ${
        index === currentStep ? styles.stepItemActive : ''
      }`.trim(),
    }));
  }, [items, currentStep]);

  return (
    <div className={styles.animatedSteps}>
      <Steps {...restProps} current={currentStep} items={memoizedItems} />
    </div>
  );
}
