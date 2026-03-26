import { memo } from 'react';
import { Typography } from 'antd';
import styles from './platon-slide-placeholders.module.css';

const { Paragraph } = Typography;

const DEFAULT_PLACEHOLDER_TEXT = 'todo: добавить картинку';

export interface PlatonImagePlaceholderProps {
  /** Подпись в рамке (по умолчанию — напоминание вставить изображение). */
  text?: string;
}

/**
 * Dashed frame for future screenshots or diagrams (Platon deck).
 */
export const PlatonImagePlaceholder = memo(function PlatonImagePlaceholder({
  text = DEFAULT_PLACEHOLDER_TEXT,
}: PlatonImagePlaceholderProps) {
  return (
    <div className={styles.placeholder}>
      <Paragraph className={styles.placeholderMuted}>{text}</Paragraph>
    </div>
  );
});
