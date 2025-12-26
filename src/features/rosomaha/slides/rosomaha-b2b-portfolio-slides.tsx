import { Typography, List, Space, Card, Row, Col, Tag, Statistic } from 'antd';
import {
  ShopOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  BuildOutlined,
  ThunderboltOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  ApiOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { DemoSlide } from '~shared/ui/demo-slide';
import { ContentWithSectionsSlide } from '~shared/ui/content-with-sections-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { rosomahaB2BPortfolioCreatedAt } from './rosomaha-b2b-portfolio.meta';
import rosomahaLogo from './rosomaha-logo.png';
import ruskonProfileExample from './01_profile.png';
import ruskonCatalog from './02_catalog.png';
import ruskonOrderSetup from './03_order_setup.png';
import ruskonOrders from './04_orders.png';
import ruskonHelp from './05_help.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for ROSOMAKHATUL B2B portfolio presentation
 * Focus on our experience in creating B2B portals
 */
export const rosomahaB2BPortfolioSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        subtitle="B2B портал"
        description="Реализованные решения для оптовых клиентов и дилеров"
        logo={rosomahaLogo}
        logoAlt="РОСОМАХАТУЛ"
        logoMaxWidth={400}
        createdAt={rosomahaB2BPortfolioCreatedAt}
        location="Москва"
      />
    ),
  },
  {
    id: 'our-expertise',
    header: 'Опыт Проксима в разработке B2B порталов',
    content: (
      <ContentWithSectionsSlide>
        <FeaturesSlide
          cards={[
            {
              title: 'Личные кабинеты для оптовиков',
              icon: <ShopOutlined />,
              iconColor: 'blue',
              items: [
                'Профили клиентов с реквизитами',
                'История заказов и платежей',
                'Персональные скидки',
                'Управление контактами',
              ],
              emoji: 'sparkles',
              style: { backgroundColor: '#e6f7ff' },
            },
            {
              title: 'Каталоги и заказы',
              icon: <RocketOutlined />,
              iconColor: 'green',
              items: [
                'Каталог с остатками на складе',
                'Оптовые цены',
                'Корзина и оформление заказов',
                'Отслеживание статусов',
              ],
              emoji: 'rocket',
              style: { backgroundColor: '#f6ffed' },
            },
            {
              title: 'Интеграции',
              icon: <ApiOutlined />,
              iconColor: 'orange',
              items: [
                'Интеграция с 1С: УТ',
                'Синхронизация остатков и цен',
                'Автоматизация заказов',
                'Интеграция с CRM',
              ],
              emoji: 'wrench',
              style: { backgroundColor: '#fff7e6' },
            },
            {
              title: 'Дополнительно',
              icon: <ThunderboltOutlined />,
              iconColor: 'purple',
              items: [
                'Уведомления (Email/SMS)',
                'Печать документов',
                'Аналитика и отчеты',
                'Мобильная версия',
              ],
              emoji: 'star',
              style: { backgroundColor: '#f0f0f0' },
            },
          ]}
          columns={2}
          animated={true}
          baseAnimationDelay={100}
        />
      </ContentWithSectionsSlide>
    ),
  },
  {
    id: 'portfolio-example-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Пример из портфолио"
        subtitle="Реализованный нами B2B портал для оптовых клиентов (кейс Рускон)"
        imageIndex={1}
        imageAlt="B2B портал Рускон"
      />
    ),
  },
  {
    id: 'ruskon-profile-example',
    header: 'Профиль оптового клиента',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={ruskonProfileExample}
            alt="Пример профиля оптового клиента"
            style={{
              maxHeight: 'calc(100vh - 300px)',
              width: 'auto',
              height: 'auto',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          />
        }
        wrapInCard={false}
        presentationSlug="rosomakhatul-b2b-portfolio"
      />
    ),
  },
  {
    id: 'ruskon-profile-description',
    header: undefined,
    content: (
      <Card style={{ backgroundColor: '#f6ffed' }}>
        <Paragraph style={{ marginBottom: 0, textAlign: 'center' }}>
          <Text strong>
            Детальный профиль клиента: контакты, реквизиты компании, история
            заказов, статусы платежей и персональные настройки.
          </Text>
        </Paragraph>
      </Card>
    ),
  },
  {
    id: 'ruskon-catalog',
    header: 'Каталог товаров',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={ruskonCatalog}
            alt="Каталог товаров"
            style={{
              maxHeight: 'calc(100vh - 300px)',
              width: 'auto',
              height: 'auto',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          />
        }
        wrapInCard={false}
        presentationSlug="rosomakhatul-b2b-portfolio"
      />
    ),
  },
  {
    id: 'ruskon-catalog-description',
    header: undefined,
    content: (
      <Card style={{ backgroundColor: '#e6f7ff' }}>
        <Paragraph style={{ marginBottom: 0, textAlign: 'center' }}>
          <Text strong>
            Каталог с актуальными остатками, оптовыми ценами, фото продукции и
            возможностью быстрого поиска и фильтрации.
          </Text>
        </Paragraph>
      </Card>
    ),
  },
  {
    id: 'ruskon-order-setup',
    header: 'Оформление заказа',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={ruskonOrderSetup}
            alt="Оформление заказа"
            style={{
              maxWidth: '100%',
              width: 'auto',
              height: 'auto',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          />
        }
        wrapInCard={false}
        presentationSlug="rosomakhatul-b2b-portfolio"
      />
    ),
  },
  {
    id: 'ruskon-order-setup-description',
    header: undefined,
    content: (
      <Card style={{ backgroundColor: '#fff7e6' }}>
        <Paragraph style={{ marginBottom: 0, textAlign: 'center' }}>
          <Text strong>
            Удобное оформление заказа с расчетом стоимости, выбором способа
            доставки и возможностью сохранения черновиков.
          </Text>
        </Paragraph>
      </Card>
    ),
  },
  {
    id: 'ruskon-orders',
    header: 'Управление заказами',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={ruskonOrders}
            alt="Список заказов"
            style={{
              maxWidth: '100%',
              width: 'auto',
              height: 'auto',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          />
        }
        wrapInCard={false}
        presentationSlug="rosomakhatul-b2b-portfolio"
      />
    ),
  },
  {
    id: 'ruskon-orders-description',
    header: undefined,
    content: (
      <Card style={{ backgroundColor: '#f0f0f0' }}>
        <Paragraph style={{ marginBottom: 0, textAlign: 'center' }}>
          <Text strong>
            Полная история заказов с отслеживанием статусов, историей платежей и
            возможностью повторного заказа.
          </Text>
        </Paragraph>
      </Card>
    ),
  },
  {
    id: 'ruskon-help',
    header: 'Справочная информация',
    content: (
      <DemoSlide
        image={
          <ImageWithLoader
            src={ruskonHelp}
            alt="Раздел помощи"
            style={{
              maxHeight: 'calc(100vh - 300px)',
              width: 'auto',
              height: 'auto',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          />
        }
        wrapInCard={false}
        presentationSlug="rosomakhatul-b2b-portfolio"
      />
    ),
  },
  {
    id: 'ruskon-help-description',
    header: undefined,
    content: (
      <Card style={{ backgroundColor: '#f6ffed' }}>
        <Paragraph style={{ marginBottom: 0, textAlign: 'center' }}>
          <Text strong>
            Встроенная справочная система для помощи клиентам в работе с
            порталом.
          </Text>
        </Paragraph>
      </Card>
    ),
  },
  {
    id: 'benefits-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Преимущества для вашего бизнеса"
        subtitle="Что получит РОСОМАХАТУЛ от B2B портала"
        imageIndex={2}
        imageAlt="Преимущества"
      />
    ),
  },
  {
    id: 'benefits',
    header: 'Преимущества B2B портала',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Statistic
                title="Снижение нагрузки на менеджеров"
                value={25}
                suffix="%"
                prefix={<UserOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
              <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
                <Text>
                  Клиенты самостоятельно оформляют заказы, проверяют остатки и
                  статусы
                </Text>
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#e6f7ff' }}>
              <Statistic
                title="Рост продаж"
                value={15}
                suffix="%"
                prefix={<RocketOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
              <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
                <Text>
                  Удобный доступ к каталогу 24/7 увеличивает частоту заказов
                </Text>
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Statistic
                title="Сокращение ошибок"
                value={90}
                suffix="%"
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#faad14' }}
              />
              <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
                <Text>Автоматизация исключает ручной ввод и пересортицу</Text>
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f0f0f0' }}>
              <Statistic
                title="Экономия времени"
                value={40}
                suffix="%"
                prefix={<ClockCircleOutlined />}
                valueStyle={{ color: '#595959' }}
              />
              <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
                <Text>
                  Меньше звонков и уточнений, больше автоматизации процессов
                </Text>
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'implementation-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Этапы реализации"
        subtitle="Как мы создаем B2B портал для вашей компании"
        imageIndex={3}
        imageAlt="Этапы реализации"
      />
    ),
  },
  {
    id: 'implementation-phases',
    header: 'Этапы реализации',
    content: (
      <ContentWithSectionsSlide>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <ClockCircleOutlined style={{ marginRight: 8 }} />
              Фаза 1: Подготовка (1-2 недели)
            </Title>
            <List
              dataSource={[
                'Встреча с ключевыми лицами и сбор требований',
                'Анализ текущих систем (1С, CRM, ERP)',
                'Дизайн и прототипирование интерфейса',
                'Техническое задание и план реализации',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '8px 0' }}>
                  <CheckCircleOutlined
                    style={{ color: '#1890ff', marginRight: 12, fontSize: 16 }}
                  />
                  <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item}
                  </Text>
                </List.Item>
              )}
            />
          </Card>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <BuildOutlined style={{ marginRight: 8 }} />
              Фаза 2: Разработка MVP (3-4 недели)
            </Title>
            <FeaturesSlide
              cards={[
                {
                  title: 'Минимальный функционал',
                  icon: <RocketOutlined />,
                  iconColor: 'green',
                  items: [
                    'Каталог товаров с остатками',
                    'Личный кабинет клиента',
                    'Корзина и оформление заказа',
                    'История заказов',
                    'Базовые уведомления',
                  ],
                  emoji: 'rocket',
                  style: { backgroundColor: '#f6ffed' },
                },
              ]}
              columns={1}
              wrapInCard={false}
            />
          </Card>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <RocketOutlined style={{ marginRight: 8 }} />
              Фаза 3: Разработка и внедрение (1-3 месяца)
            </Title>
            <List
              dataSource={[
                'Разработка backend (3-4 недели)',
                'Разработка frontend (3-4 недели)',
                'Интеграция с 1С и другими системами',
                'Тестирование и QA (2 недели)',
                'Обучение пользователей (1 неделя)',
                'Запуск в production',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '8px 0' }}>
                  <ClockCircleOutlined
                    style={{ color: '#52c41a', marginRight: 12, fontSize: 16 }}
                  />
                  <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item}
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </Space>
      </ContentWithSectionsSlide>
    ),
  },
  {
    id: 'next-steps-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Следующие шаги"
        subtitle="Как начать работу над B2B порталом"
        imageIndex={4}
        imageAlt="Следующие шаги"
      />
    ),
  },
  {
    id: 'next-steps',
    header: 'Что дальше?',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            План действий
          </Title>
          <List
            dataSource={[
              'Встреча для обсуждения требований и целей',
              'Подготовка технического задания',
              'Предложение с детальным планом и сроками',
              'Согласование бюджета и начало работы',
            ]}
            renderItem={(item, index) => (
              <List.Item style={{ padding: '8px 0' }}>
                <Space>
                  <Tag
                    color="blue"
                    style={{ minWidth: '30px', textAlign: 'center' }}
                  >
                    {index + 1}
                  </Tag>
                  <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item}
                  </Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Paragraph style={{ textAlign: 'center' }}>
            <Text strong>
              Готовы обсудить детали? Свяжитесь с нами для консультации и
              подготовки индивидуального предложения.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
