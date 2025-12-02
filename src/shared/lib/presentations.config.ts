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
    description: 'Система автоматического распознавания и управления заказами',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'niteos',
    title: 'Niteos — основная презентация',
    description: 'Полная презентация решения для Niteos',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'niteos-first-turn',
    title: 'Niteos — первый заход',
    description: 'Краткая презентация для первого знакомства',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'hanskonner',
    title: 'Hanskonner — стратегия',
    description: 'Стратегическая презентация для Hanskonner',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'hanskonner-website',
    title: 'Hanskonner — сайт',
    description: 'Презентация веб-сайта Hanskonner',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'smz',
    title: 'СМЗ — полная презентация',
    description: 'Полная презентация решения для СМЗ',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'smz-brief',
    title: 'СМЗ — краткий бриф',
    description: 'Краткий бриф для СМЗ',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'smz-solution',
    title: 'СМЗ — решение',
    description: 'Презентация решения для СМЗ',
    notificationsEnabled: true,
    showOnSityakoff: true,
  },
  {
    slug: 'proxima',
    title: 'Proxima — кейс',
    description: 'Кейс-стади для Proxima',
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
