/**
 * Hook for sending Telegram notifications on presentation events
 * Tracks when user starts and completes a presentation
 */

import { useEffect, useRef } from 'react';
import { notifyPageVisit } from '~shared/lib/telegram';

/**
 * Options for useSlidesNotifications hook
 */
export interface UseSlidesNotificationsOptions {
  /**
   * Presentation slug/identifier (e.g., 'kirov-steklo')
   */
  slug: string;
  /**
   * Current slide index (0-based)
   */
  currentSlideIndex: number;
  /**
   * Total number of slides
   */
  totalSlides: number;
  /**
   * Whether notifications are enabled (default: true)
   */
  enabled?: boolean;
}

/**
 * Hook to send notifications when user starts or completes a presentation
 * @param options - Configuration options
 */
export function useSlidesNotifications(
  options: UseSlidesNotificationsOptions
): void {
  const { slug, currentSlideIndex, totalSlides, enabled = true } = options;

  // Track if notifications were already sent to avoid duplicates
  const startNotificationSent = useRef(false);
  const endNotificationSent = useRef(false);

  // Send notification when user opens first slide
  useEffect(() => {
    if (!enabled || startNotificationSent.current) {
      return;
    }

    // Send for supported presentations
    const supportedSlugs = [
      'kirov-steklo',
      'niteos',
      'niteos-first-turn',
      'hanskonner',
      'smz',
      'smz-brief',
      'smz-solution',
    ];
    if (
      supportedSlugs.includes(slug) &&
      currentSlideIndex === 0 &&
      totalSlides > 0
    ) {
      startNotificationSent.current = true;

      notifyPageVisit(
        `/slides/${slug} - Начало презентации (${totalSlides} слайдов)`,
        {
          silent: true,
        }
      ).catch(error => {
        console.error('Failed to send start notification:', error);
      });
    }
  }, [slug, currentSlideIndex, totalSlides, enabled]);

  // Send notification when user reaches last slide
  useEffect(() => {
    if (!enabled || endNotificationSent.current) {
      return;
    }

    // Send for supported presentations
    const supportedSlugs = [
      'kirov-steklo',
      'niteos',
      'niteos-first-turn',
      'hanskonner',
      'smz',
      'smz-brief',
      'smz-solution',
    ];
    if (
      supportedSlugs.includes(slug) &&
      currentSlideIndex === totalSlides - 1 &&
      totalSlides > 0
    ) {
      endNotificationSent.current = true;

      notifyPageVisit(
        `/slides/${slug} - Завершение презентации (просмотрено ${totalSlides} слайдов)`,
        {
          silent: true,
        }
      ).catch(error => {
        console.error('Failed to send end notification:', error);
      });
    }
  }, [slug, currentSlideIndex, totalSlides, enabled]);
}
