import { Card, Space, Typography } from 'antd';
import { CheckCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './todo-card.module.css';

const { Title, Paragraph } = Typography;

export interface TodoCardProps {
  /** Заголовок пункта todo */
  title: string;
  /** Описание или произвольный контент под заголовком */
  description?: string | ReactNode;
  /** Статус: pending — к выполнению, done — выполнено */
  status?: 'pending' | 'done';
  /** Дополнительный класс для обёртки */
  className?: string;
}

export function TodoCard({
  title,
  description,
  status = 'pending',
  className,
}: TodoCardProps) {
  const StatusIcon =
    status === 'done' ? CheckCircleOutlined : MinusCircleOutlined;

  return (
    <Card
      className={clsx(
        styles.todoCard,
        status === 'pending' && styles.pending,
        status === 'done' && styles.done,
        className
      )}
      size="small"
    >
      <Space align="start" size="small" style={{ width: '100%' }}>
        <StatusIcon
          className={styles.icon}
          style={{
            color:
              status === 'done'
                ? 'var(--ant-color-success)'
                : 'var(--ant-color-warning)',
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <Title level={5} style={{ marginTop: 0, marginBottom: description ? 8 : 0 }}>
            todo: {title}
          </Title>
          {description != null &&
            (typeof description === 'string' ? (
              <Paragraph
                type={status === 'done' ? 'secondary' : undefined}
                style={{ marginBottom: 0 }}
              >
                {description}
              </Paragraph>
            ) : (
              description
            ))}
        </div>
      </Space>
    </Card>
  );
}
