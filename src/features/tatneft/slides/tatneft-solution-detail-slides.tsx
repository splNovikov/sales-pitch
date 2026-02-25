import { Space, Typography, List, Card } from 'antd';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { tatneftSolutionDetailCreatedAt } from './tatneft-solution-detail.meta';
import tatneftLogo from './Tatneft-Logo.png';
import image1 from './vertopal_be1a70985cad455097d28dbc0e89637b/media/image1.png';
import image2 from './vertopal_be1a70985cad455097d28dbc0e89637b/media/image2.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Tatneft ML solution detail presentation
 * Technical deep-dive: GNN, autoencoder, classifier, use cases
 */
export const tatneftSolutionDetailSlides: SlideData[] = [
  // Slide 1: Intro — архитектура ML‑платформы
  {
    id: 'title',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={tatneftLogo}
          alt="Татнефть"
          style={{ maxWidth: 460, width: '100%', objectFit: 'contain' }}
        />
        <MainTitleSlide
          title="Архитектура ML - решения"
          subtitle="ПАО «Татнефть»"
          createdAt={tatneftSolutionDetailCreatedAt}
        />
      </Space>
    ),
  },

];
