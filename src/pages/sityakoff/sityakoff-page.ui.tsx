import { Card, List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { getVisiblePresentations } from '~shared/lib/presentations.config';

const { Title, Paragraph } = Typography;

/**
 * Page displaying all available presentations with links
 * Accessible at /sityakoff
 */
export default function SityakoffPage() {
  const visiblePresentations = getVisiblePresentations();

  return (
    <Card>
      <Title level={1}>Презентации Sityakoff</Title>
      <Paragraph>
        Здесь собраны все доступные презентации. Кликните на название, чтобы
        открыть нужную презентацию.
      </Paragraph>

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
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
