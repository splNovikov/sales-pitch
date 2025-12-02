/**
 * Date formatting utilities
 */

/**
 * Format ISO date string to DD.MM.YYYY format for display in slides
 * @param isoDate - ISO date string (e.g., '2025-11-27T00:00:00Z')
 * @returns Formatted date string (e.g., '27.11.2025')
 */
export function formatDateForSlide(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
