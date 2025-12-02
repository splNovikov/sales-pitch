import { Card, List, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import {
  getVisiblePresentations,
  isPresentationNew,
} from '~shared/lib/presentations.config';

export default function VisibilityPage() {
  const visiblePresentations = getVisiblePresentations();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card>
      <List
        size="small"
        dataSource={visiblePresentations}
        renderItem={item => {
          const isNew = isPresentationNew(item.createdAt);
          return (
            <List.Item key={item.slug}>
              <Space>
                <Link to={`/slides/${item.slug}`}>{item.title}</Link>
                {isNew && (
                  <Tag
                    color="red"
                    style={{
                      fontWeight: 'bold',
                      fontSize: '12px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    NEW
                  </Tag>
                )}
                <span style={{ color: '#8c8c8c', fontSize: '12px' }}>
                  {formatDate(item.createdAt)}
                </span>
              </Space>
            </List.Item>
          );
        }}
      />
    </Card>
  );
}
