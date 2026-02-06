import { useState, memo, useRef, useEffect } from 'react';
import { Spin } from 'antd';

export interface ImageWithLoaderProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  containerStyle?: React.CSSProperties;
}

/**
 * Image component with loading spinner
 * Shows spinner while image is loading
 * Checks if image is already cached on mount to avoid unnecessary loading states
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

  // Check if image is already loaded (cached) on mount
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalHeight !== 0) {
      // Image is already loaded from cache
      setLoading(false);
    }
  }, [src]);

  const handleLoad = () => {
    setLoading(false);
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
