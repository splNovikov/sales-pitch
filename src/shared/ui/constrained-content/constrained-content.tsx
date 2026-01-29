import type { ReactNode } from 'react';

export interface ConstrainedContentProps {
  /**
   * Max width (px) of the container; content is centered when constrained.
   * @default 1200
   */
  maxWidth?: number;
  children: ReactNode;
}

/**
 * Wraps content in a centered container with optional max width.
 * Use for slide content (Cards, tables, etc.) to keep consistent width and alignment.
 */
export function ConstrainedContent({
  maxWidth = 1200,
  children,
}: ConstrainedContentProps) {
  return (
    <div
      style={{
        maxWidth,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}
