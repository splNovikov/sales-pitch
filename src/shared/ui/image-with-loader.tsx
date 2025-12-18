import { useState } from 'react';
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
 */
export function ImageWithLoader({
  src,
  alt,
  style,
  className,
  containerStyle,
}: ImageWithLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
}
