import { Typography, Space, Card, Row, Col, List } from 'antd';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { tatneftKpCreatedAt } from './tatneft-kp.meta';
import tatneftLogo from './Tatneft-Logo.png';

const { Title, Text } = Typography;

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

  // Slide 2: Problem statement (two-level structure)
  {
    id: 'problem-statement',
    header: undefined,
    content: (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <SectionTitleSlide
          title="Проблематика текущего процесса обработки аварийных сигналов"
          subtitle="Рост количества аварийных сигналов и ограниченные ресурсы оперативного персонала усложняют обеспечение требуемого уровня промышленной безопасности."
        />

        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>Операционный уровень</Title>
              <List
                size="small"
                dataSource={[
                  'Высокая нагрузка на диспетчеров и дежурный персонал при пиковых потоках сигналов.',
                  'Ручная фильтрация ложных и малозначимых сигналов, большой объём рутинных операций.',
                  'Сильная зависимость качества реакции от человеческого фактора и опыта конкретных сотрудников.',
                  'Ограниченные возможности последующего разбора инцидентов и обучения на случаях (case-based).',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>Технологический уровень</Title>
              <List
                size="small"
                dataSource={[
                  'Разрозненные источники данных и отсутствие единого контура обработки аварийных сигналов.',
                  'Нет унифицированной модели приоритизации сигналов по критичности, объектам и влиянию на производственный процесс.',
                  'Ограниченная трассируемость: сложно восстановить полную последовательность событий при расследовании аварийных ситуаций.',
                  'Недостаточно инструментов аналитики и визуализации для выявления трендов и повторяющихся сценариев.',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
];

