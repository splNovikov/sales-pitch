import { useEffect } from 'react';
import { theme } from 'antd';
import { THEME_COLORS, SPACING, TYPOGRAPHY } from './theme.config';

const { useToken } = theme;

/**
 * Converts hex color to RGB object
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Component that sets CSS variables based on Ant Design theme tokens
 * This allows CSS modules to use theme colors via CSS variables
 */
export function ThemeCSSVariables() {
  const { token } = useToken();

  useEffect(() => {
    const root = document.documentElement;

    // Primary colors
    root.style.setProperty('--app-color-primary', THEME_COLORS.colorPrimary);
    // Convert hex to rgba for hover state
    const primaryRgb = hexToRgb(THEME_COLORS.colorPrimary);
    if (primaryRgb) {
      root.style.setProperty(
        '--app-color-primary-hover',
        `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.6)`
      );
    }

    // Border colors
    root.style.setProperty('--app-color-border', token.colorBorder);
    root.style.setProperty('--app-color-border-secondary', token.colorBorderSecondary);

    // Text colors
    root.style.setProperty('--app-color-text', token.colorText);
    root.style.setProperty('--app-color-text-secondary', token.colorTextSecondary);
    root.style.setProperty('--app-color-text-heading', token.colorTextHeading);

    // Background colors
    root.style.setProperty('--app-color-bg', token.colorBgContainer);
    root.style.setProperty('--app-color-bg-secondary', token.colorBgElevated);

    // Spacing
    root.style.setProperty('--app-spacing-xs', SPACING.xs);
    root.style.setProperty('--app-spacing-sm', SPACING.sm);
    root.style.setProperty('--app-spacing-md', SPACING.md);
    root.style.setProperty('--app-spacing-lg', SPACING.lg);
    root.style.setProperty('--app-spacing-xl', SPACING.xl);
    root.style.setProperty('--app-spacing-xxl', SPACING.xxl);
    root.style.setProperty('--app-spacing-none', SPACING.none);

    // Typography
    root.style.setProperty('--app-font-size-xs', TYPOGRAPHY.fontSizeXs);
    root.style.setProperty('--app-font-size-sm', TYPOGRAPHY.fontSizeSm);
    root.style.setProperty('--app-font-size-base', TYPOGRAPHY.fontSizeBase);
    root.style.setProperty('--app-font-size-lg', TYPOGRAPHY.fontSizeLg);
    root.style.setProperty('--app-font-size-xl', TYPOGRAPHY.fontSizeXl);
    root.style.setProperty('--app-font-size-2xl', TYPOGRAPHY.fontSize2xl);
    root.style.setProperty('--app-font-size-3xl', TYPOGRAPHY.fontSize3xl);
    root.style.setProperty('--app-font-size-4xl', TYPOGRAPHY.fontSize4xl);
  }, [token]);

  return null;
}

