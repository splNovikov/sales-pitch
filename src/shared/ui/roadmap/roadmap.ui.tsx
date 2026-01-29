import { Timeline, Card, Tag, Space, Typography } from 'antd';
import type { ReactNode } from 'react';
import styles from './roadmap.module.css';

const { Text } = Typography;

export interface RoadmapSubStep {
  title: string;
  /** Start date (from phase schedule) */
  start?: string;
  /** End date */
  end?: string;
  /** Result / deliverable */
  result?: string;
}

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
  /**
   * Optional cost in rubles
   */
  cost?: number;
  /**
   * Optional sub-steps (e.g. phase schedule items from docs).
   */
  subSteps?: RoadmapSubStep[];
  /**
   * Mark stage as completed (passed). Renders as grey/semi-transparent "past" stage.
   */
  completed?: boolean;
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
        {items.map((item, index) => {
          const isCompleted = item.completed === true;
          return (
            <Timeline.Item
              key={index}
              dot={item.icon}
              color={isCompleted ? 'gray' : (item.color || 'blue')}
            >
              <Card
                size="small"
                className={`${styles.roadmapCard} ${isCompleted ? styles.roadmapCardCompleted : ''}`}
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
                    <Space wrap>
                      {item.duration && (
                        <Tag color={isCompleted ? 'default' : (item.color || 'blue')}>
                          {item.duration}
                        </Tag>
                      )}
                      {item.status && <Tag color="default">{item.status}</Tag>}
                    </Space>
                  </Space>
                {item.description && (
                  <Text type="secondary" style={{ fontSize: '14px' }}>
                    {item.description}
                  </Text>
                )}
                {item.subSteps && item.subSteps.length > 0 && (
                  <ul className={styles.subStepsList}>
                    {item.subSteps.map((sub, i) => (
                      <li key={i} className={styles.subStepItem}>
                        <span className={styles.subStepTitle}>{sub.title}</span>
                        {(sub.start || sub.end || sub.result) && (
                          <span className={styles.subStepMeta}>
                            {(sub.start || sub.end) && (
                              <> ({[sub.start, sub.end].filter(Boolean).join(' – ')})</>
                            )}
                            {sub.result && <> → {sub.result}</>}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </Space>
            </Card>
          </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
}
