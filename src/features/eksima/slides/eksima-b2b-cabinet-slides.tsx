import {
  Typography,
  List,
  Space,
  Card,
  Row,
  Col,
  Tag,
  Table,
  Statistic,
} from 'antd';
import {
  ShopOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  UserOutlined,
  GlobalOutlined,
  BuildOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  BarChartOutlined,
  ApiOutlined,
  CodeOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { eksimaB2BCabinetCreatedAt } from './eksima-b2b-cabinet.meta';
import eksimaLogo from './img.png';
import ruskonProfileExample from './01_profile.png';
import ruskonCatalog from './02_catalog.png';
import ruskonOrderSetup from './03_order_setup.png';
import ruskonOrders from './04_orders.png';
import ruskonHelp from './05_help.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for EKSIMA B2B cabinet development presentation
 * Based on eksimaAnalysisSlides with focused content for B2B cabinet
 */
export const eksimaB2BCabinetSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Space
          orientation="vertical"
          size="large"
          style={{ textAlign: 'center', maxWidth: '900px' }}
        >
          <a
            href="https://www.plitka-eksima.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--app-spacing-md)',
            }}
          >
            <img
              src={eksimaLogo}
              alt="EKSIMA"
              style={{
                maxWidth: '400px',
                height: 'auto',
                display: 'block',
                cursor: 'pointer',
              }}
            />
          </a>
          <Title level={2} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            Разработка B2B кабинета для оптовых покупателей
          </Title>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          {formatDateForSlide(eksimaB2BCabinetCreatedAt)} • Санкт-Петербург
        </Text>
      </Space>
    ),
  },
  {
    id: 'company-portrait',
    header: 'Портрет компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            direction="horizontal"
            size="middle"
            style={{ marginBottom: 16, alignItems: 'center' }}
          >
            <a
              href="https://www.plitka-eksima.ru/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
              }}
            >
              <img
                src={eksimaLogo}
                alt="EKSIMA"
                style={{
                  maxWidth: '120px',
                  height: 'auto',
                  display: 'block',
                  cursor: 'pointer',
                }}
              />
            </a>
            <Title level={4} style={{ marginTop: 0, marginBottom: 0 }}>
              О компании EKSIMA
            </Title>
          </Space>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            <Text strong>EKSIMA</Text> – керамическая студия и оптовый поставщик
            керамической плитки и керамогранита, функционирующая на российском
            рынке строительных материалов с <Text strong>2006 года</Text>.
          </Paragraph>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Компания позиционирует себя как{' '}
            <Text strong>
              представитель крупнейших российских производителей керамического
              гранита и плитки
            </Text>
            , предоставляя как оптовые, так и розничные услуги.
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Statistic
                title="Годы на рынке"
                value={19}
                suffix="лет"
                prefix={<TrophyOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={24} sm={12}>
              <Statistic
                title="Основной фокус"
                value="B2B"
                suffix="оптовые продажи"
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Целевая аудитория
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>B2B сегмент (70-80% выручки)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Строительные компании и подрядчики',
                    'Дизайнеры интерьера',
                    'Архитектурные бюро',
                    'Оптовые торговцы',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#1890ff', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>B2C сегмент (20-30% выручки)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Частные лица',
                    'Домовладельцы',
                    'Строители-любители',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#faad14', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'key-needs',
    header: 'Потребности компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Критическая потребность
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            <Text strong>
              Инструментарий для оптовых покупателей (B2B кабинет)
            </Text>
          </Paragraph>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Заказчик явно выразил потребность в инструментарии для оптовых
            покупателей. Это является основной целью сотрудничества.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Минимальный набор функций (MVP)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <ShopOutlined style={{ marginRight: 8 }} />
                  Каталог товаров
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Артикул и наименование',
                    'Остатки на складе',
                    'Оптовые цены (с брейками)',
                    'Фото продукции',
                    'Сертификаты и документация',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <UserOutlined style={{ marginRight: 8 }} />
                  Личный кабинет
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Регистрация и авторизация',
                    'История заказов',
                    'Корзина и сохраненные товары',
                    'Персональные скидки',
                    'Реквизиты компании-покупателя',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <CreditCardOutlined style={{ marginRight: 8 }} />
                  Оформление заказа
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Добавление товаров в корзину',
                    'Расчет стоимости со скидками',
                    'Выбор способа доставки',
                    'Сохранение черновиков',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <FileTextOutlined style={{ marginRight: 8 }} />
                  Управление заказами
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Просмотр статуса заказа',
                    'История платежей',
                    'Печать документов',
                    'Уведомления о статусе',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'extended-features',
    header: 'Расширенный функционал',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Дополнительные возможности
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>
                  <BarChartOutlined style={{ marginRight: 8 }} />
                  Аналитика для оптовиков
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Сравнение цен по объемам закупок',
                    'Рекомендации по совместимым товарам',
                    'Прогноз затрат',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#1890ff', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <RocketOutlined style={{ marginRight: 8 }} />
                  Управление поставками
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Отслеживание доставки в реальном времени',
                    'Планирование заказов',
                    'Автоматические уведомления',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Интеграции
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                system: '1С: УТ 11',
                priority: 'Высокий',
                purpose: 'Синхронизация товарных остатков, цен и заказов',
              },
              {
                key: '2',
                system: 'CRM Битрикс24 (возможная интеграция)',
                priority: 'Средний',
                purpose: 'Управление лидами и сделками B2B клиентов',
              },
            ]}
            columns={[
              {
                title: 'Система',
                dataIndex: 'system',
                key: 'system',
              },
              {
                title: 'Приоритет',
                dataIndex: 'priority',
                key: 'priority',
                render: (priority: string) => {
                  const color = priority === 'Высокий' ? 'red' : 'orange';
                  return <Tag color={color}>{priority}</Tag>;
                },
              },
              {
                title: 'Назначение',
                dataIndex: 'purpose',
                key: 'purpose',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'portfolio-example-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Пример личного кабинета из портфолио"
        subtitle="Реализованный нами профиль оптового клиента (кейс Рускон)"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
        imageAlt="Абстрактное изображение интерфейса"
      />
    ),
  },
  {
    id: 'ruskon-profile-example',
    header: 'Пример профиля оптового клиента (кейc Рускон)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '8px 0',
          }}
        >
          <ImageWithLoader
            src={ruskonProfileExample}
            alt="Пример профиля оптового клиента (Рускон)"
            style={{
              maxHeight: 'calc(100vh - 300px)',
              width: 'auto',
              height: 'auto',
              borderRadius: 8,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            }}
          />
        </div>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>
              Такой же уровень детализации профиля (контакты, реквизиты, история
              заказов и статусы) планируется реализовать и в B2B кабинете EKSIMA.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-catalog',
    header: 'Каталог',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '8px 0',
          }}
        >
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
        </div>
      </Space>
    ),
  },
  {
    id: 'ruskon-order-setup',
    header: 'Оформление заказа',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            padding: '8px 0',
            overflow: 'auto',
          }}
        >
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
        </div>
      </Space>
    ),
  },
  {
    id: 'ruskon-orders',
    header: 'Заказы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            padding: '8px 0',
            overflow: 'auto',
          }}
        >
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
        </div>
      </Space>
    ),
  },
  {
    id: 'ruskon-help',
    header: 'Помощь',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '8px 0',
          }}
        >
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
        </div>
      </Space>
    ),
  },
  {
    id: 'implementation-phases-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Этапы реализации проекта"
        imageSrc="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop"
        imageAlt="Список задач и этапов проекта"
      />
    ),
  },
  {
    id: 'implementation-phases',
    header: 'Этапы реализации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Фаза 1: Подготовка (Неделя 1-2)
          </Title>
          <List
            dataSource={[
              'Встреча с ключевыми лицами (ГД, руководитель продаж, CFO)',
              'Сбор требований и детальное описание функционала',
              'Анализ текущих систем (1C, CRM, ERP)',
              'Проверка финансовой состояния компании',
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
            Фаза 2: Разработка концепции (Неделя 3-4)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>MVP (Минимально жизнеспособный продукт)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Каталог товаров с остатками',
                    'Личный кабинет',
                    'Корзина и оформление заказа',
                    'История заказов',
                    'Уведомления (Email/SMS)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>First Enhancement</Text>
                <List
                  size="small"
                  dataSource={[
                    'Оптовые скидки по объемам',
                    'Интеграция с 1C',
                    'Система платежей',
                    'Отчеты для администратора',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Фаза 3: Разработка и внедрение (1-3 месяца)
          </Title>
          <List
            dataSource={[
              'Дизайн и прототипирование (2 недели)',
              'Разработка backend (3-4 недели)',
              'Разработка frontend (3-4 недели)',
              'Тестирование и QA (2 недели)',
              'Миграция и интеграции (1-2 недели)',
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
    ),
  },
  {
    id: 'technologies',
    header: 'Рекомендуемые технологии',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Технологический стек
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>
                  <CodeOutlined style={{ marginRight: 8 }} />
                  Backend
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Node.js + Express (быстрая разработка)',
                    'PostgreSQL (надежная БД)',
                    'Redis (кэширование)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#1890ff', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <ThunderboltOutlined style={{ marginRight: 8 }} />
                  Frontend
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'React или Vue.js',
                    'Next.js для SEO оптимизации',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>
                  <BuildOutlined style={{ marginRight: 8 }} />
                  DevOps
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Docker / Kubernetes (масштабируемость)',
                    'CI/CD (GitHub Actions или GitLab CI)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#faad14', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <GlobalOutlined style={{ marginRight: 8 }} />
                  Hosting
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Google Cloud / AWS / DigitalOcean',
                    'CDN для статики (CloudFlare)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#595959', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },

  {
    id: 'key-questions',
    header: 'Контрольные вопросы для встречи',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Вопросы для уточнения
          </Title>
          <List
            dataSource={[
              'Какой текущий объем оптовых заказов в месяц?',
              'Сколько активных B2B клиентов?',
              'Какой процент заказов может быть автоматизирован через систему?',
              'Есть ли текущая 1C или ERP система?',
              'Какие платежные системы предпочтут клиенты?',
              'Какой язык программирования предпочитает команда (для поддержки)?',
              'Какой бюджет выделен на проект?',
              'Какие сроки реализации критичны?',
              'Кто будет основным контактом на стороне клиента?',
              'Какие KPI будут учитывать успех проекта?',
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
      </Space>
    ),
  },
];
