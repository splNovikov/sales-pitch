import { useEffect, useMemo, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { pathKeys } from '~shared/router.ts';

/**
 * Delay before showing the loading overlay to prevent flashing on fast navigations
 */
const LOADING_DELAY_MS = 100;

/**
 * Result of the layout navigation hook
 */
export interface UseLayoutNavigationResult {
  /**
   * Whether navigation is in progress (loading or submitting)
   */
  isNavigating: boolean;

  /**
   * Whether to show the loading overlay (debounced)
   */
  showLoader: boolean;

  /**
   * Context-aware loading message based on destination route
   */
  loadingMessage: string;
}

/**
 * Custom hook to manage layout navigation state and loading indicators
 *
 * Features:
 * - Detects navigation state (loading/submitting)
 * - Debounces loader display to prevent flashing on fast transitions
 * - Provides context-aware loading messages based on destination
 *
 * @returns Navigation state and loading information
 */
export function useLayoutNavigation(): UseLayoutNavigationResult {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  // Consider both 'loading' and 'submitting' states as navigating
  const isNavigating = navigation.state !== 'idle';

  // Debounce loader display to prevent flashing on fast navigations
  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setShowLoader(true);
      }, LOADING_DELAY_MS);

      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }, [isNavigating]);

  // Generate context-aware loading message based on destination
  const loadingMessage = useMemo(() => {
    const destination = navigation.location?.pathname;

    if (!destination) {
      return 'Loading page...';
    }

    if (destination === pathKeys.home) {
      return 'Loading home page...';
    }

    return 'Loading page...';
  }, [navigation.location?.pathname]);

  return {
    isNavigating,
    showLoader,
    loadingMessage,
  };
}
