import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <Card style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Title level={1}>Добро пожаловать в ПРОКСИМА</Title>
      <Paragraph>Мы делаем этот Айтишный мир... Проще...</Paragraph>
    </Card>
  );
}
