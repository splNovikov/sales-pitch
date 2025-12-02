import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import { getVisiblePresentations } from '~shared/lib/presentations.config';

export default function SityakoffPage() {
  const visiblePresentations = getVisiblePresentations();

  return (
    <Card>
      <List
        itemLayout="vertical"
        dataSource={visiblePresentations}
        renderItem={item => (
          <List.Item key={item.slug}>
            <List.Item.Meta
              title={
                <Link to={`/slides/${item.slug}`}>
                  {item.title} ({item.slug})
                </Link>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
