import { Card, Typography } from 'antd';
import Logo from '~shared/ui/logo';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <Card>
      <Title level={1}>
        Добро пожаловать в <Logo />
      </Title>
      <Paragraph>Мы делаем этот Айтишный мир... Проще...</Paragraph>
    </Card>
  );
}
