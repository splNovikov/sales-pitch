import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Button,
  Alert,
} from 'antd';
import {
  RocketOutlined,
  GlobalOutlined,
  TeamOutlined,
  CodeOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  LinkOutlined,
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
  BuildOutlined,
  ThunderboltOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { senixWebsiteCreatedAt } from './senix-website.meta';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { useTelegramNotification } from '~shared/lib/telegram/use-telegram-notification';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import senixExampleImage from './senix-example.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Button component that sends Telegram notification when clicked
 */
function DemoButtonWithNotification() {
  const { send } = useTelegramNotification({ silent: true });

  const handleClick = async () => {
    await send({
      page: '/slides/senix-website - Кнопка "Открыть пример сайта" нажата',
      fullUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      timestamp: new Date().toISOString(),
      userAgent:
        typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      referer: typeof document !== 'undefined' ? document.referrer : undefined,
    });
  };

  return (
    <Button
      type="primary"
      size="large"
      icon={<LinkOutlined />}
      href="https://senix-poc.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        height: '60px',
        fontSize: '20px',
        fontWeight: 700,
        padding: '0 48px',
        background:
          'linear-gradient(135deg, var(--app-color-primary) 0%, var(--app-gradient-end) 100%)',
        border: 'none',
        boxShadow: '0 8px 24px rgba(24, 144, 255, 0.4)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(24, 144, 255, 0.5)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(24, 144, 255, 0.4)';
      }}
    >
      Открыть пример сайта
      <ArrowRightOutlined style={{ marginLeft: 12 }} />
    </Button>
  );
}

/**
 * Slides data for SENIX website proposal presentation
 * Focus: We can make their website significantly better and affordably
 */
export const senixWebsiteSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="SENIX"
        subtitle="Предложение по разработке современного сайта"
        description="Создадим сайт, который работает на ваш бизнес"
        createdAt={senixWebsiteCreatedAt}
        location="Москва"
      />
    ),
  },
  {
    id: 'section-about-proxima',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="О Проксима"
        subtitle="Специализируемся на B2B решениях"
        imageIndex={0}
      />
    ),
  },
  {
    id: 'about-proxima',
    header: 'О Проксима',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Кто мы
          </Title>
          <Paragraph>
            <Text strong>Проксима</Text> — IT-компания, специализирующаяся на
            разработке современных веб-приложений и платформ для{' '}
            <Text strong>B2B бизнеса</Text>.
          </Paragraph>
          <Paragraph>
            Мы понимаем специфику работы с корпоративными клиентами и создаём
            решения, которые помогают компаниям масштабироваться и увеличивать
            продажи.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Наша специализация в B2B
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <CodeOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Корпоративные сайты</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Для B2B компаний и дистрибьюторов
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <GlobalOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Интеграции</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    С маркетплейсами и CRM системами
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <TeamOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>B2B порталы</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Для дилеров и партнёров
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'section-problems',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Проблематика SENIX"
        subtitle="Текущее состояние онлайн-присутствия"
        imageIndex={1}
      />
    ),
  },
  {
    id: 'senix-problems',
    header: 'Проблематика SENIX',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ marginRight: 8, color: '#faad14' }} />
            Веб-ресурсы SENIX
          </Title>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <div>
              <Text strong>1. Официальный сайт (Россия):</Text>
              <br />
              <Link
                href="https://senixtool.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkOutlined style={{ marginRight: 4 }} />
                https://senixtool.ru
              </Link>
              <List
                size="small"
                style={{ marginTop: '8px', marginBottom: 0 }}
                dataSource={[
                  'Множество страниц помечены как "в разработке"',
                  'Неполный каталог товаров',
                  'Каталог доступен только для скачивания в PDF',
                  'Нет полноценного интернет-магазина',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {item}
                    </Text>
                  </List.Item>
                )}
              />
            </div>
            <Divider style={{ margin: '12px 0' }} />
            <div>
              <Text strong>2. Фирменный магазин:</Text>
              <br />
              <Link
                href="https://senix-rus.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkOutlined style={{ marginRight: 4 }} />
                https://senix-rus.ru
              </Link>
            </div>
            <Divider style={{ margin: '12px 0' }} />
            <div>
              <Text strong>3. Международный сайт:</Text>
              <br />
              <Link
                href="https://senixtools.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkOutlined style={{ marginRight: 4 }} />
                https://senixtools.com
              </Link>
            </div>
            <Divider style={{ margin: '12px 0' }} />
            <div>
              <Text strong>4. Корпоративный сайт:</Text>
              <br />
              <Link
                href="https://www.senix.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkOutlined style={{ marginRight: 4 }} />
                https://www.senix.co
              </Link>
            </div>
          </Space>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Другие каналы
          </Title>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <div>
              <Text strong>OZON (основной канал продаж):</Text>
              <br />
              <Link
                href="https://www.ozon.ru/seller/senix-1342609/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkOutlined style={{ marginRight: 4 }} />
                https://www.ozon.ru/seller/senix-1342609/
              </Link>
              <br />
              <Text type="secondary">
                Рейтинг: 4,8 из 5 звезд • Более 10,000 заказов • Более 4,000
                отзывов
              </Text>
            </div>
            <Divider style={{ margin: '8px 0' }} />
            <div>
              <Text strong>Telegram канал:</Text>
              <br />
              <Link
                href="https://t.me/senix_rus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkOutlined style={{ marginRight: 4 }} />
                @senix_rus (3,090+ подписчиков)
              </Link>
            </div>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'section-solution',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Наше решение"
        subtitle="Без конструкторов — профессиональная разработка"
        imageIndex={2}
      />
    ),
  },
  {
    id: 'our-solution',
    header: 'Наше решение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Мы создаём сайты, которые работают на ваш бизнес
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-base)' }}>
            <Text strong>Без конструкторов</Text> — профессиональная разработка
            с нуля, учитывающая специфику вашего бизнеса.
          </Paragraph>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <ThunderboltOutlined
                  style={{
                    fontSize: '40px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Title level={4} style={{ margin: 0 }}>
                  Быстро
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-base)' }}
                >
                  Современные технологии и оптимизированные процессы разработки
                  позволяют запустить сайт в короткие сроки
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <CheckCircleOutlined
                  style={{
                    fontSize: '40px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Title level={4} style={{ margin: 0 }}>
                  Чётко
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-base)' }}
                >
                  Понятная структура, удобная навигация, логичная подача
                  информации для ваших клиентов
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <EyeOutlined
                  style={{
                    fontSize: '40px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Title level={4} style={{ margin: 0 }}>
                  Красиво
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-base)' }}
                >
                  Современный дизайн, который отражает качество вашего бренда и
                  вызывает доверие у клиентов
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Что вы получите:
          </Title>
          <List
            size="small"
            dataSource={[
              'Полноценный каталог товаров с фильтрацией и поиском',
              'Интеграция с OZON и другими маркетплейсами',
              'Адаптивный дизайн для всех устройств',
              'Система управления контентом (CMS)',
              'Оптимизация для поисковых систем (SEO)',
              'Быстрая загрузка и отличная производительность',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Alert
          message="Доступная цена"
          description="Мы предлагаем профессиональную разработку по разумной цене, без переплат за ненужный функционал."
          type="info"
          showIcon
        />
      </Space>
    ),
  },
  {
    id: 'section-example',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Пример нашей работы"
        subtitle="Посмотрите, что мы можем сделать"
        imageIndex={3}
      />
    ),
  },
  {
    id: 'example-website',
    header: 'Пример нашей работы',
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          height: '100%',
          padding: '40px',
        }}
      >
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f5f5f5',
              }}
            >
              <ImageWithLoader
                src={senixExampleImage}
                alt="Пример сайта SENIX"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '500px',
                  objectFit: 'contain',
                }}
                containerStyle={{
                  width: '100%',
                  padding: '20px',
                }}
              />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Space
                direction="vertical"
                size="large"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <Title level={2} style={{ marginTop: 0, marginBottom: 0 }}>
                  Посмотрите пример сайта, который мы создали
                </Title>
                <Paragraph
                  style={{
                    fontSize: 'var(--app-font-size-lg)',
                    marginBottom: 0,
                  }}
                >
                  Это реальный проект для B2B компании, демонстрирующий наш
                  подход к разработке: профессионально, быстро и с фокусом на
                  результат.
                </Paragraph>
                <Divider style={{ margin: '24px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <DemoButtonWithNotification />
                </div>
                <Paragraph
                  type="secondary"
                  style={{ marginTop: '16px', marginBottom: 0 }}
                >
                  Современный дизайн • Быстрая загрузка • Адаптивная верстка
                </Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'section-next-steps',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Что дальше?"
        subtitle="Следующие шаги"
        imageIndex={4}
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
            Процесс работы
          </Title>
          <List
            size="large"
            dataSource={[
              {
                title: '1. Обсуждение требований',
                description:
                  'Встреча для понимания ваших потребностей и целей проекта',
              },
              {
                title: '2. Техническое предложение',
                description: 'Подробное описание решения, сроков и стоимости',
              },
              {
                title: '3. Разработка',
                description:
                  'Создание сайта с регулярными демонстрациями прогресса',
              },
              {
                title: '4. Запуск и поддержка',
                description:
                  'Запуск сайта, обучение работе с системой и техническая поддержка',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Text strong>{item.title}</Text>}
                  description={<Text type="secondary">{item.description}</Text>}
                />
              </List.Item>
            )}
          />
        </Card>
        <Alert
          message="Готовы начать?"
          description="Свяжитесь с нами, чтобы обсудить детали проекта и получить персональное предложение."
          type="success"
          showIcon
        />
      </Space>
    ),
  },
  {
    id: 'section-contacts',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Контакты"
        subtitle="Свяжитесь с нами"
        imageIndex={5}
      />
    ),
  },
  {
    id: 'contacts',
    header: 'Контакты',
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
        <Card style={{ maxWidth: '500px', width: '100%' }}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <Title level={3} style={{ marginTop: 0 }}>
              Проксима
            </Title>
            <Divider />
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <PhoneOutlined style={{ marginRight: 8, fontSize: '18px' }} />
                <Text strong>Телефон:</Text>
                <br />
                <Link href="tel:+79271108488">+7 927 110 84 88</Link>
              </div>
              <div>
                <MailOutlined style={{ marginRight: 8, fontSize: '18px' }} />
                <Text strong>Email:</Text>
                <br />
                <Link href="mailto:a.sityakov@proxima.ooo">
                  a.sityakov@proxima.ooo
                </Link>
              </div>
              <div>
                <GlobalOutlined style={{ marginRight: 8, fontSize: '18px' }} />
                <Text strong>Сайт:</Text>
                <br />
                <Link href="https://proxima24.ru/" target="_blank">
                  proxima24.ru
                </Link>
              </div>
            </Space>
            <Divider />
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              Мы готовы обсудить ваш проект и предложить оптимальное решение
            </Paragraph>
          </Space>
        </Card>
      </Space>
    ),
  },
];
