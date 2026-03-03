import {
  Space,
  Typography,
  Card,
  Table,
  Row,
  Col,
  Statistic,
  Progress,
} from 'antd';
import {
  CheckCircleOutlined,
  CodeOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ApiOutlined,
  ExperimentOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { FeatureCard } from '~shared/ui/feature-card';
import { DemoSlide } from '~shared/ui/demo-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { izmetallaKpCreatedAt } from './izmetalla-kp.meta';
import izmetallaLogo from './logo-izmetalla.png';
import izmetalla1 from './izmetalla_1.png';
import izmetalla2 from './izmetalla_2.png';
import izmetalla4 from './izmetalla_4.png';
import izmetalla5 from './izmetalla_5.png';

const { Paragraph, Text } = Typography;

const DEMO_URL = 'https://metalbrands.vercel.app/';

const OTHER_WORKS_ROADMAP: RoadmapItem[] = [
  {
    title: 'Базовая СЕО-оптимизация',
    duration: 'Этап 2',
    color: 'blue',
    icon: <SearchOutlined />,
    description: '25 000 ₽',
  },
  {
    title: 'Интеграция с Битрикс',
    duration: 'Этап 2',
    color: 'purple',
    icon: <ApiOutlined />,
    description: '180 000 ₽',
  },
  {
    title: 'Корзина, оформление заказа, отправка заявки',
    duration: 'Этап 3',
    color: 'green',
    icon: <ShoppingCartOutlined />,
    description: '120 000 ₽',
  },
  {
    title: 'Тестирование и стабилизация',
    duration: 'Этап 4',
    color: 'orange',
    icon: <ExperimentOutlined />,
    description: '30 000 ₽',
  },
  {
    title: 'Приёмка и обучение',
    duration: 'Этап 5',
    color: 'gold',
    icon: <TeamOutlined />,
    description: 'Бесплатно',
    completed: true,
  },
];

/**
 * Slides data for Izmetalla commercial proposal
 */
export const izmetallaKpSlides: SlideData[] = [
  // Slide 1: Title
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        logo={izmetallaLogo}
        logoAlt="Изметалла"
        logoMaxWidth={400}
        subtitle="Коммерческое предложение"
        createdAt={izmetallaKpCreatedAt}
      />
    ),
  },

  // Slide 2: Template presentation — section title
  {
    id: 'template-section',
    header: undefined,
    content: <SectionTitleSlide title="Презентация шаблона" imageIndex={0} />,
  },

  // Slide 3: Template screenshot 1
  {
    id: 'template-screenshot-1',
    header: 'Презентация шаблона',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={izmetalla1}
            alt="Из Металла — главная"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100vh - 200px)',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            containerStyle={{ minHeight: '300px' }}
          />
        }
        demoUrl={DEMO_URL}
        buttonText="Открыть сайт"
        presentationSlug="izmetalla-kp"
        wrapInCard
      />
    ),
  },

  // Slide 4: Template screenshot 2
  {
    id: 'template-screenshot-2',
    header: 'Презентация шаблона',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={izmetalla2}
            alt="Из Металла — каталог"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100vh - 200px)',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            containerStyle={{ minHeight: '300px' }}
          />
        }
        demoUrl={DEMO_URL}
        buttonText="Открыть сайт"
        presentationSlug="izmetalla-kp"
        wrapInCard
      />
    ),
  },

  // Slide 5: Template screenshot 4
  {
    id: 'template-screenshot-4',
    header: 'Презентация шаблона',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={izmetalla4}
            alt="Из Металла — карточка товара"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100vh - 200px)',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            containerStyle={{ minHeight: '300px' }}
          />
        }
        demoUrl={DEMO_URL}
        buttonText="Открыть сайт"
        presentationSlug="izmetalla-kp"
        wrapInCard
      />
    ),
  },

  // Slide 6: Template screenshot 5
  {
    id: 'template-screenshot-5',
    header: 'Презентация шаблона',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={izmetalla5}
            alt="Из Металла — контакты"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100vh - 200px)',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            containerStyle={{ minHeight: '300px' }}
          />
        }
        demoUrl={DEMO_URL}
        buttonText="Открыть сайт"
        presentationSlug="izmetalla-kp"
        wrapInCard
      />
    ),
  },

  // Slide 7: KP pre-title
  {
    id: 'kp-pre-title',
    header: undefined,
    content: (
      <SectionTitleSlide title="Коммерческое предложение" imageIndex={1} />
    ),
  },

  // Slide 6: Frontend rendering and integration
  {
    id: 'frontend-integration',
    header: 'Отрисовка шаблона',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <Card>
                <Statistic
                  title="Осталось работ"
                  value={30}
                  suffix="000 ₽"
                  prefix={<CodeOutlined />}
                  valueStyle={{
                    color: 'var(--app-color-primary)',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                  }}
                />
                <Paragraph
                  type="secondary"
                  style={{ marginTop: 8, marginBottom: 0 }}
                >
                  Полный объём — 150 000 ₽, 80% уже выполнено
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card>
                <Text strong style={{ display: 'block', marginBottom: 12 }}>
                  Прогресс
                </Text>
                <Progress
                  percent={80}
                  strokeColor="var(--app-color-primary)"
                  showInfo
                />
                <Text
                  type="secondary"
                  style={{ display: 'block', marginTop: 16 }}
                >
                  Осталось: правки, доработки, адаптивная вёрстка
                </Text>
              </Card>
            </Col>
          </Row>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 7: Other works
  {
    id: 'other-works',
    header: 'Остальные работы',
    content: (
      <ConstrainedContent>
        <Roadmap items={OTHER_WORKS_ROADMAP} mode="alternate" maxWidth={900} />
      </ConstrainedContent>
    ),
  },

  // Slide 8: Total KP (without deep SEO)
  {
    id: 'total-kp',
    header: 'Общая КП (без углублённого СЕО)',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Card>
            <Statistic
              title="Итого по проекту"
              value={385}
              suffix="000 ₽"
              prefix={<CheckCircleOutlined />}
              valueStyle={{
                color: 'var(--app-color-primary)',
                fontSize: 'clamp(36px, 6vw, 56px)',
              }}
            />
            <Paragraph
              type="secondary"
              style={{ marginTop: 8, marginBottom: 0 }}
            >
              Без углублённой СЕО-оптимизации
            </Paragraph>
          </Card>
          <Card size="small">
            <Table
              size="small"
              pagination={false}
              dataSource={[
                { key: '1', block: 'Фронтенд (остаток)', cost: '30 000 ₽' },
                { key: '2', block: 'Базовая СЕО', cost: '25 000 ₽' },
                { key: '3', block: 'Бекенд и интеграция', cost: '180 000 ₽' },
                { key: '4', block: 'Корзина, заказ', cost: '120 000 ₽' },
                { key: '5', block: 'Тестирование', cost: '30 000 ₽' },
                { key: '6', block: 'Приёмка', cost: 'Бесплатно' },
              ]}
              columns={[
                { title: 'Блок', dataIndex: 'block', key: 'block' },
                {
                  title: 'Стоимость',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 120,
                  align: 'right',
                  render: (v: string) => (
                    <Text strong={v !== '0' && v !== 'Бесплатно'}>{v}</Text>
                  ),
                },
              ]}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 9: SEO collaboration (deep SEO)
  {
    id: 'seo-collaboration',
    header: 'Сотрудничество по углублённому СЕО',
    content: (
      <ConstrainedContent>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <FeatureCard
              title="Старт"
              subtitle="100 000 ₽"
              items={[
                'Аудит текущего состояния',
                'Настройка семантики и структуры',
                'Передача рекомендаций',
              ]}
              emoji="rocket"
              iconColor="blue"
            />
          </Col>
          <Col xs={24} md={12}>
            <FeatureCard
              title="Сопровождение"
              subtitle="75 000 ₽ / мес"
              items={[
                'Мониторинг позиций',
                'Регулярная оптимизация',
                'Контент-аналитика',
              ]}
              emoji="chart"
              iconColor="green"
            />
          </Col>
        </Row>
      </ConstrainedContent>
    ),
  },

  // Slide 10: Final
  {
    id: 'thank-you',
    header: undefined,
    content: <MainTitleSlide title="Благодарим за внимание" />,
  },
];
