/**
 * Central configuration for all presentations
 * Single source of truth for presentation metadata
 */

/**
 * Presentation metadata
 */
export interface PresentationMeta {
  /**
   * Unique slug identifier (e.g., 'niteos', 'kirov-steklo')
   */
  slug: string;
  /**
   * Human-readable title
   */
  title: string;
  /**
   * Optional description
   */
  description?: string;
  /**
   * Whether to send notifications for this presentation (default: true)
   */
  notificationsEnabled?: boolean;
  /**
   * Whether to show this presentation on /sityakoff page (default: true)
   */
  showOnSityakoff?: boolean;
}

/**
 * All available presentations with their metadata
 */
export const presentations: PresentationMeta[] = [
  {
    slug: 'kirov-steklo',
    title: 'Киров-Стекло — автоматизация заказов',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'niteos',
    title: 'Niteos — основная презентация',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'niteos-first-turn',
    title: 'Niteos — первый заход',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'hanskonner',
    title: 'Hanskonner — стратегия',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'hanskonner-website',
    title: 'Hanskonner — сайт',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'smz',
    title: 'СМЗ — полная презентация',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'smz-brief',
    title: 'СМЗ — краткий бриф',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'smz-solution',
    title: 'СМЗ — решение',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'proxima',
    title: 'Proxima — кейс',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
];

/**
 * Array of all presentation slugs
 */
export const presentationSlugs = presentations.map(p => p.slug);

/**
 * Get presentation metadata by slug
 */
export function getPresentationBySlug(
  slug: string
): PresentationMeta | undefined {
  return presentations.find(p => p.slug === slug);
}

/**
 * Get all presentations with notifications enabled
 */
export function getPresentationsWithNotifications(): PresentationMeta[] {
  return presentations.filter(p => p.notificationsEnabled !== false);
}

/**
 * Get all presentations visible on /sityakoff page
 */
export function getVisiblePresentations(): PresentationMeta[] {
  return presentations.filter(p => p.showOnSityakoff !== false);
}
