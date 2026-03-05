import { useState, memo, useRef, useEffect, useCallback } from 'react';
import { Spin } from 'antd';

const MIN_SPINNER_MS = 150;

export interface ImageWithLoaderProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  containerStyle?: React.CSSProperties;
}

/**
 * Image component with loading spinner
 * Shows spinner while image is loading
 * Ensures spinner is visible for at least MIN_SPINNER_MS when switching slides
 */
export const ImageWithLoader = memo(function ImageWithLoader({
  src,
  alt,
  style,
  className,
  containerStyle,
}: ImageWithLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const loadStartRef = useRef<number>(Date.now());

  const trySetLoaded = useCallback(() => {
    const elapsed = Date.now() - loadStartRef.current;
    const remaining = Math.max(0, MIN_SPINNER_MS - elapsed);
    if (remaining > 0) {
      setTimeout(() => setLoading(false), remaining);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStartRef.current = Date.now();
  }, [src]);

  // Check if image is already loaded (cached) on mount
  // Defer to next frame so spinner is painted at least once when switching slides
  useEffect(() => {
    const img = imgRef.current;
    const rafId = requestAnimationFrame(() => {
      if (img && img.complete && img.naturalHeight !== 0) {
        trySetLoaded();
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, [src, trySetLoaded]);

  const handleLoad = () => {
    trySetLoaded();
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: loading ? '200px' : 'auto',
        width: '100%',
        height: '100%',
        ...containerStyle,
      }}
    >
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <Spin size="large" />
        </div>
      )}
      {!error && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            ...style,
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
            maxWidth: '100%',
          }}
        />
      )}
      {error && (
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            color: '#999',
          }}
        >
          Не удалось загрузить изображение
        </div>
      )}
    </div>
  );
});
