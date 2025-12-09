import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import hanskonnerLogo from './hanskonner-logo.png';
import styles from './animated-hanskonner-logo.module.css';

export interface AnimatedHanskonnerLogoProps {
  /**
   * Maximum width of the logo
   * @default '500px'
   */
  maxWidth?: string | number;
  /**
   * Animation duration in seconds
   * @default 1.5
   */
  duration?: number;
  /**
   * Enable glow animation
   * @default true
   */
  enableGlow?: boolean;
  /**
   * Enable scale animation
   * @default true
   */
  enableScale?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Alt text for accessibility
   * @default 'HansKonner'
   */
  alt?: string;
}

/**
 * Animated HansKonner logo component using Canvas API and GSAP
 *
 * Renders the logo on a canvas element with smooth animations:
 * - Fade-in effect
 * - Scale animation
 * - Optional glow effect
 */
export function AnimatedHanskonnerLogo({
  maxWidth = '500px',
  duration = 1.5,
  enableGlow = true,
  enableScale = true,
  className,
  alt = 'HansKonner',
}: AnimatedHanskonnerLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create image element
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = hanskonnerLogo;

    img.onload = () => {
      imageRef.current = img;

      // Calculate dimensions maintaining aspect ratio
      const containerWidth =
        container.clientWidth || container.offsetWidth || 500;
      const maxWidthNum =
        typeof maxWidth === 'number' ? maxWidth : parseInt(maxWidth, 10);
      const targetWidth = Math.min(containerWidth || 500, maxWidthNum);
      const aspectRatio = img.width / img.height;
      const targetHeight = targetWidth / aspectRatio;

      // Enable high DPI rendering
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = targetWidth;
      const displayHeight = targetHeight;

      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      ctx.scale(dpr, dpr);

      // Draw image on canvas
      ctx.clearRect(0, 0, displayWidth, displayHeight);
      ctx.drawImage(img, 0, 0, displayWidth, displayHeight);

      setIsLoaded(true);

      // Setup GSAP animations
      const tl = gsap.timeline();

      // Initial state
      gsap.set(canvas, {
        opacity: 0,
        scale: enableScale ? 0.8 : 1,
      });

      // Fade in and scale animation
      tl.to(canvas, {
        opacity: 1,
        scale: 1,
        duration: duration,
        ease: 'power3.out',
      });

      // Simple breathing/pulse animation (subtle scale pulse)
      tl.to(
        canvas,
        {
          scale: 1.05,
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        },
        '-=0.3'
      );

      // Glow animation (continuous pulse)
      if (enableGlow) {
        tl.to(
          canvas,
          {
            filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))',
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          },
          '-=2'
        );
      }
    };

    img.onerror = () => {
      console.error('Failed to load HansKonner logo image');
    };

    // Cleanup
    return () => {
      gsap.killTweensOf(canvas);
    };
  }, [maxWidth, duration, enableGlow, enableScale]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className || ''}`}
      style={{
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
      }}
    >
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-label={alt}
        role="img"
      />
      {!isLoaded && (
        <div className={styles.loading} aria-hidden="true">
          <span className={styles.loadingText}>Loading...</span>
        </div>
      )}
    </div>
  );
}
