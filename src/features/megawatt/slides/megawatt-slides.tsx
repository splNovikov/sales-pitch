import { Typography, List, Space, Card, Row, Col, Divider } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { DemoSlide } from '~shared/ui/demo-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { megawattCreatedAt, megawattTemplateUrl } from './megawatt.meta';
import logoMegawatt from './logo-mega-watt.png';
import megaIndexPreview from './mega-index.png';

const { Title, Paragraph, Text } = Typography;

export const megawattSlides: SlideData[] = [
  // Титульный слайд
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        subtitle="Производитель блочно-модульных котельных и теплоэнергетического оборудования"
        logo={logoMegawatt}
        logoAlt="Мегаватт"
        createdAt={megawattCreatedAt}
      />
    ),
  },

  // Блок: презентация шаблона
  {
    id: 'template-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Презентация шаблона"
        subtitle="Ключевые экраны сверстанного шаблона сайта"
        imageIndex={0}
        imageAlt="Презентация шаблона"
      />
    ),
  },
  {
    id: 'template-demo',
    header: 'Перейти на шаблон',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={megaIndexPreview}
            alt="Шаблон сайта Мегаватт"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'contain',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            }}
          />
        }
        demoUrl={megawattTemplateUrl}
        buttonText="Перейти на шаблон"
        presentationSlug="megawatt"
        wrapInCard
      />
    ),
  },

  // Блок: варианты стоимости
  {
    id: 'pricing-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Варианты стоимости"
        subtitle="Три варианта на выбор — под ключ"
        imageIndex={2}
        imageAlt="Варианты стоимости"
      />
    ),
  },
  {
    id: 'pricing-tiers',
    header: 'Стоимость',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                backgroundColor: '#ffffff',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title
                  level={4}
                  style={{ marginTop: 0, marginBottom: 4, color: '#595959' }}
                >
                  Вариант 1 — 100&nbsp;000&nbsp;₽
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-sm)' }}
                >
                  Главная страница по макету, доведение до production и базовая
                  настройка.
                </Text>
                <List
                  size="small"
                  style={{ textAlign: 'left', margin: '12px 0 0' }}
                  dataSource={[
                    'Главная страница в стиле макета',
                    'Адаптивная вёрстка',
                    'Базовая оптимизация под SEO',
                    'Сдача проекта под ключ',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                backgroundColor: '#e6f7ff',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong type="secondary" style={{ fontSize: 12 }}>
                  ПРИОРИТЕТНЫЙ ВАРИАНТ
                </Text>
                <Title
                  level={4}
                  style={{ marginTop: 0, marginBottom: 4, color: '#1890ff' }}
                >
                  Вариант 2 — 120&nbsp;000&nbsp;₽
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-sm)' }}
                >
                  Всё из первого варианта плюс дополнительные страницы и формы
                  по вашим пожеланиям.
                </Text>
                <List
                  size="small"
                  style={{ textAlign: 'left', margin: '12px 0 0' }}
                  dataSource={[
                    'Всё из варианта 1',
                    'Частичное обновление дизайна по пожеланиям',
                    'Детальные страницы (каталог, услуги)',
                    'Страница контактов',
                    'Формы обратной связи',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#1890ff', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                backgroundColor: '#ffffff',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title
                  level={4}
                  style={{ marginTop: 0, marginBottom: 4, color: '#595959' }}
                >
                  Вариант 3 — 150&nbsp;000&nbsp;₽
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-sm)' }}
                >
                  Максимальный набор: всё из второго варианта плюс расширенный
                  функционал и возможность управлять контентом.
                </Text>
                <List
                  size="small"
                  style={{ textAlign: 'left', margin: '12px 0 0' }}
                  dataSource={[
                    'Всё из варианта 2',
                    'Расширенный функционал и разделы',
                    'Интеграция с CMS для управления контентом',
                    'Независимость от разработчиков в правках текстов и материалов',
                    'Готовность к дальнейшему развитию сайта',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
        </Row>

        <Divider />
        <Paragraph
          style={{
            marginBottom: 0,
            fontSize: 'var(--app-font-size-md)',
            color: '#595959',
          }}
        >
          <Text>
            Готовы обсудить детали и ответить на все вопросы. Свяжитесь с нами
            для уточнения сроков и условий работы.
          </Text>
        </Paragraph>
      </Space>
    ),
  },

  // Блок: контакты
  {
    id: 'contacts-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Контакты"
        subtitle="Свяжитесь с нами для обсуждения проекта"
        imageIndex={4}
        imageAlt="Контакты"
      />
    ),
  },
  {
    id: 'contacts-content',
    header: undefined,
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <ContactsSlide contacts={['Pasha', 'Artem']} />
      </Space>
    ),
  },
];
