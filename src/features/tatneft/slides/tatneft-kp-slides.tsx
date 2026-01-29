import { Space, Typography, List, Card } from 'antd';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { tatneftKpCreatedAt } from './tatneft-kp.meta';
import tatneftLogo from './Tatneft-Logo.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Tatneft commercial proposal
 * Focus: автоматизация анализа аварийных сигналов
 */
export const tatneftKpSlides: SlideData[] = [
  // Slide 1: Title
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
          title="Автоматизация анализа поступающих аварийных сигналов с объектов"
          subtitle="Коммерческое предложение для ПАО «Татнефть»"
          createdAt={tatneftKpCreatedAt}
        />
      </Space>
    ),
  },

  // Slide 2: Section title — problem statement
  {
    id: 'problem-statement',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={0}
        title="Постановка задачи"
      />
    ),
  },

  // Slide 3: Масштаб, причины ложных тревог и текущий процесс
  {
    id: 'problem-scale-and-process',
    header: 'Масштаб и текущий процесс',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Масштаб</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>~60 000 аварийных сигналов в неделю</Text>
          </Paragraph>
        </Card>
        <Card>
          <Title level={4}>Ложные тревоги и процесс</Title>
          <List size="small">
            <List.Item>Неверные уставки — 40%</List.Item>
            <List.Item>Изменение режимов работы — 25%</List.Item>
            <List.Item>Износ оборудования — 20%</List.Item>
            <List.Item>Выведенное оборудование — 15%</List.Item>
            <List.Item>
              Ручной анализ сигналов и трендов,{' '}
              <Text strong>несколько часов на один объект</Text>
            </List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 4: Потребности Татнефти (Anomaly Detection)
  {
    id: 'tatneft-needs',
    header: 'Потребность',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Опережающее реагирование</Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Требуется система{' '}
            <Text strong>предупредительного обнаружения аномалий (Anomaly Detection)</Text>, которая
            функционирует в режиме опережающего реагирования.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4}>До инцидента, не после</Title>
          <Paragraph style={{ marginBottom: 12 }}>
            Выявлять совокупность факторов, способных привести к срабатыванию сигналов, и
            своевременно рекомендовать корректирующие действия операторам, предотвращая инциденты
            до их возникновения.
          </Paragraph>
          <List size="small">
            <List.Item>Раннее выявление факторов риска до срабатывания аварийных сигналов</List.Item>
            <List.Item>Рекомендации по корректирующим действиям для операторов</List.Item>
            <List.Item>Режим опережающего реагирования вместо реактивного разбора после инцидента</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },
];
