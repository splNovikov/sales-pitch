import { Layout, Typography, Flex } from 'antd';
import { SlidesNavigation } from '../slides-navigation';
import styles from './slide.module.css';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

interface SlideProps {
  slide: {
    id: string;
    header?: string;
    content: React.ReactNode;
  };
  companySlug: string;
  slideNumber: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export function Slide({
  slide,
  companySlug,
  slideNumber,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  canGoPrevious,
  canGoNext,
}: SlideProps) {
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

      {/* Footer */}
      <Footer className={styles.footer}>
        <Flex
          justify="space-between"
          align="center"
          className={styles.footerContent}
        >
          {/* Company Logo */}
          <div className={styles.companyLogo}>
            <Text type="secondary" className={styles.companyName}>
              {companySlug}
            </Text>
          </div>

          {/* Slides Navigation */}
          <SlidesNavigation
            currentSlide={slideNumber}
            totalSlides={totalSlides}
            onPrevious={onPrevious}
            onNext={onNext}
            onGoToSlide={onGoToSlide}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
          />
        </Flex>
      </Footer>
    </Layout>
  );
}
