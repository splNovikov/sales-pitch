import { Card, Button, Row, Col } from 'antd';
import { GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useTelegramNotification } from '~shared/lib/telegram/use-telegram-notification';
import { useImageFadeAnimation } from './use-image-fade-animation';
import clsx from 'clsx';
import styles from './demo-slide.module.css';

export interface DemoSlideProps {
  /**
   * Demo screenshot/image
   */
  image: ReactNode;
  /**
   * URL to view the demo
   */
  demoUrl?: string;
  /**
   * Button text (default: 'Посмотреть демо')
   */
  buttonText?: string;
  /**
   * Optional wrapper card around all content
   */
  wrapInCard?: boolean;
  /**
   * Presentation slug for notification tracking (optional)
   * If not provided, will use generic path
   */
  presentationSlug?: string;
}

/**
 * Slide component for displaying demo examples with screenshot and link
 * Used to showcase implementation examples and templates
 * When demoUrl is provided, image and button are displayed side by side
 * Button click sends Telegram notification
 */
export function DemoSlide({
  image,
  demoUrl,
  buttonText = 'Посмотреть демо',
  wrapInCard = true,
  presentationSlug,
}: DemoSlideProps) {
  const { send } = useTelegramNotification({ silent: true });
  const isImageVisible = useImageFadeAnimation(image);

  const handleButtonClick = useCallback(async (): Promise<void> => {
    if (!demoUrl) {
      return;
    }

    const pagePath = presentationSlug
      ? `/slides/${presentationSlug} - Кнопка "Посмотреть демо" нажата: ${demoUrl}`
      : `Демо: ${demoUrl}`;

    try {
      await send({
        page: pagePath,
        fullUrl:
          typeof window !== 'undefined' ? window.location.href : undefined,
        timestamp: new Date().toISOString(),
        userAgent:
          typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        referer:
          typeof document !== 'undefined' ? document.referrer : undefined,
      });
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  }, [demoUrl, presentationSlug, send]);

  const imageContainerClassName = useMemo(
    () =>
      clsx(styles.imageContainer, {
        [styles.imageVisible]: isImageVisible,
        [styles.imageHidden]: !isImageVisible,
      }),
    [isImageVisible]
  );

  const content = demoUrl ? (
    <Row gutter={[24, 24]} align="middle" className={styles.row}>
      <Col xs={24} md={16} className={styles.imageCol}>
        <div className={imageContainerClassName}>{image}</div>
      </Col>
      <Col xs={24} md={8} className={styles.buttonCol}>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            size="large"
            icon={<GlobalOutlined />}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            block
            onClick={handleButtonClick}
          >
            {buttonText}
            <ArrowRightOutlined />
          </Button>
        </div>
      </Col>
    </Row>
  ) : (
    <div className={styles.container}>
      <div className={imageContainerClassName}>{image}</div>
    </div>
  );

  if (wrapInCard) {
    return <Card>{content}</Card>;
  }

  return content;
}
