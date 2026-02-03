import {
  Typography,
  List,
  Space,
  Card,
  Row,
  Col,
  Tag,
  Table,
} from 'antd';
import {
  ShopOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  UserOutlined,
  BuildOutlined,
  ThunderboltOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  BarChartOutlined,
  ApiOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { aquastrongB2BCabinetCreatedAt } from './aquastrong-b2b-cabinet.meta';
import aquastrongLogo from './mobile-aquastrong-logo.svg';
import ruskonProfileExample from './01_profile.png';
import ruskonCatalog from './02_catalog.png';
import ruskonOrderSetup from './03_order_setup.png';
import ruskonOrders from './04_orders.png';
import ruskonHelp from './05_help.png';
import { ContactsSlide } from '~shared/ui/contacts-slide';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Aquastrong B2B cabinet development presentation.
 * Structure by analogy with eksima-b2b-cabinet, content adapted for pumps and distribution.
 */
export const aquastrongB2BCabinetSlides: SlideData[] = [
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
            href="https://aquastrongpump.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--app-spacing-md)',
            }}
          >
            <img
              src={aquastrongLogo}
              alt="Aquastrong"
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
          {formatDateForSlide(aquastrongB2BCabinetCreatedAt)} • Москва
        </Text>
      </Space>
    ),
  },
  {
    id: 'key-needs',
    header: 'Потребности компании',
    content: (
      <Space
        orientation="vertical"
        size="small"
        style={{ width: '100%', maxHeight: 'calc(100vh - 140px)', overflow: 'hidden' }}
      >
        <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
          <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
            <RocketOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Критические потребности (Карина Алексеевна)
          </Title>
          <List
            size="small"
            dataSource={[
              'Остатки — в каталоге и для дилеров.',
              'Выдача — первые места в поиске, «чтоб работал сам на себя».',
              'Дилерский кабинет — каталог, цены, заказы, документы.',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '2px 0', borderBlockEnd: 'none' }}>
                <CheckCircleOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text style={{ fontSize: '13px' }}>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card size="small" style={{ backgroundColor: '#f5f5f5', padding: '8px 12px' }}>
          <Text style={{ fontSize: '12px' }}>
            <Text strong>Конкурент: </Text>
            <a href="https://cnp-rus.ru/" target="_blank" rel="noopener noreferrer">
              cnp-rus.ru
            </a>
          </Text>
        </Card>
        <Card size="small">
          <Title level={5} style={{ marginTop: 0, marginBottom: 6 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            MVP
          </Title>
          <Row gutter={[8, 8]}>
            <Col xs={12} md={6}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong style={{ fontSize: '12px' }}>
                  <ShopOutlined style={{ marginRight: 4 }} /> Каталог
                </Text>
                <List
                  size="small"
                  dataSource={['Остатки', 'Цены', 'Документы']}
                  renderItem={item => (
                    <List.Item style={{ padding: '1px 0' }}>
                      <Text style={{ fontSize: '11px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong style={{ fontSize: '12px' }}>
                  <UserOutlined style={{ marginRight: 4 }} /> ЛК
                </Text>
                <List
                  size="small"
                  dataSource={['Авторизация', 'Заказы', 'Реквизиты']}
                  renderItem={item => (
                    <List.Item style={{ padding: '1px 0' }}>
                      <Text style={{ fontSize: '11px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong style={{ fontSize: '12px' }}>
                  <CreditCardOutlined style={{ marginRight: 4 }} /> Заказ
                </Text>
                <List
                  size="small"
                  dataSource={['Корзина', 'Скидки', 'Доставка']}
                  renderItem={item => (
                    <List.Item style={{ padding: '1px 0' }}>
                      <Text style={{ fontSize: '11px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong style={{ fontSize: '12px' }}>
                  <FileTextOutlined style={{ marginRight: 4 }} /> Заказы
                </Text>
                <List
                  size="small"
                  dataSource={['Статус', 'Платежи', 'Печать']}
                  renderItem={item => (
                    <List.Item style={{ padding: '1px 0' }}>
                      <Text style={{ fontSize: '11px' }}>• {item}</Text>
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
                    'Рекомендации по совместимому оборудованию',
                    'Прогноз затрат и запасных частей',
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
                    'Планирование заказов под проекты',
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
                purpose: 'Синхронизация остатков, цен и заказов по насосам',
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
              заказов и статусы) планируется реализовать и в B2B кабинете
              Aquastrong.
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
              'Сбор требований и описание функционала под насосы',
              'Анализ текущих систем (1C, CRM, ERP)',
              'Проверка финансовой состояния компании',
              'Дизайн и прототипирование (2 недели)',
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
                    'Каталог насосов с остатками',
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
          </Row>
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
              'Какой текущий объем оптовых поставок насосов в месяц?',
              'Сколько активных B2B клиентов и дистрибьюторов?',
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

  {
    id: 'final',
    header: 'Контакты',
    content: <ContactsSlide contacts={['Pasha', 'Artem']} />,
  },

];
