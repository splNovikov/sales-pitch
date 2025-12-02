import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import { getVisiblePresentations } from '~shared/lib/presentations.config';

export default function SityakoffPage() {
  const visiblePresentations = getVisiblePresentations();

  return (
    <Card>
      <List
        size="small"
        dataSource={visiblePresentations}
        renderItem={item => (
          <List.Item key={item.slug}>
            <Link to={`/slides/${item.slug}`}>{item.title}</Link>
          </List.Item>
        )}
      />
    </Card>
  );
}
