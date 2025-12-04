import { Timeline, Card, Tag, Space, Typography } from 'antd';
import type { ReactNode } from 'react';
import styles from './roadmap.module.css';

const { Text } = Typography;

export interface RoadmapItem {
  /**
   * Title of the roadmap item
   */
  title: string;
  /**
   * Description or details
   */
  description?: string;
  /**
   * Duration or time estimate
   */
  duration?: string;
  /**
   * Optional icon
   */
  icon?: ReactNode;
  /**
   * Optional color tag
   */
  color?: string;
  /**
   * Optional status tag
   */
  status?: string;
}

export interface RoadmapProps {
  /**
   * Array of roadmap items
   */
  items: RoadmapItem[];
  /**
   * Timeline mode: 'left' | 'right' | 'alternate'
   * @default 'alternate'
   */
  mode?: 'left' | 'right' | 'alternate';
  /**
   * Whether to show pending items
   * @default true
   */
  pending?: boolean | ReactNode;
}

/**
 * Roadmap component for displaying project timeline
 * 
 * Displays a visual timeline of project stages with descriptions,
 * durations, and optional icons.
 */
export function Roadmap({
  items,
  mode = 'alternate',
  pending = false,
}: RoadmapProps) {
  return (
    <div className={styles.roadmap}>
      <Timeline mode={mode} pending={pending}>
        {items.map((item, index) => (
          <Timeline.Item
            key={index}
            dot={item.icon}
            color={item.color || 'blue'}
          >
            <Card
              size="small"
              className={styles.roadmapCard}
              style={{
                marginBottom: 'var(--app-spacing-sm)',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Space
                  style={{ width: '100%', justifyContent: 'space-between' }}
                  wrap
                >
                  <Text strong style={{ fontSize: '16px' }}>
                    {item.title}
                  </Text>
                  {item.duration && (
                    <Tag color={item.color || 'blue'}>{item.duration}</Tag>
                  )}
                  {item.status && (
                    <Tag color="default">{item.status}</Tag>
                  )}
                </Space>
                {item.description && (
                  <Text type="secondary" style={{ fontSize: '14px' }}>
                    {item.description}
                  </Text>
                )}
              </Space>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

