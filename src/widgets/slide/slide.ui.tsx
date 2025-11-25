import { Layout, Typography } from 'antd';
import styles from './slide.module.css';

const { Header, Content } = Layout;
const { Title } = Typography;

interface SlideProps {
  slide: {
    id: string;
    header?: string;
    content: React.ReactNode;
  };
}

export function Slide({ slide }: SlideProps) {
  return (
    <Layout className={styles.slide}>
      {/* Header */}
      {slide.header && (
        <Header className={styles.header}>
          <Title level={1} className={styles.headerTitle}>
            {slide.header}
          </Title>
        </Header>
      )}

      {/* Content */}
      <Content className={styles.content}>{slide.content}</Content>
    </Layout>
  );
}
