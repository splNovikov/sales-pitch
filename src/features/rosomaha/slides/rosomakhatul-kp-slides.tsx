import { Typography, List, Space, Card, Row, Col, Table } from 'antd';
import {
  CheckCircleOutlined,
  RocketOutlined,
  CalendarOutlined,
  ShoppingCartOutlined,
  ApiOutlined,
  UserOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { Roadmap } from '~shared/ui/roadmap';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { rosomakhatulKpCreatedAt } from './rosomakhatul-kp.meta';
import rosomahaLogo from './rosomaha-logo.png';
import demoAccount from './rosomaha-account.png';
import demoCatalog from './rosomaha-catalog.png';
import demoProduct from './rosomaha-product.png';
import demoOrders from './rosomaha-orders.png';
import {ContactsSlide} from "~shared/ui/contacts-slide";

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for ROSOMAKHATUL Commercial Proposal presentation
 * Built by analogy with eksimaKpSlides, but tailored to ROSOMAKHATUL context
 */
export const rosomakhatulKpSlides: SlideData[] = [
  // Slide 1: Title
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        logo={rosomahaLogo}
        logoAlt="РОСОМАХАТУЛ"
        logoMaxWidth={400}
        title="B2B портал для оптовых клиентов"
        createdAt={rosomakhatulKpCreatedAt}
      />
    ),
  },

  // Slide 4: Section Divider - Solution Components
  {
    id: 'solution-components-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Основные компоненты решения"
        subtitle="Стандартный B2B портал с персональными ценами"
        imageIndex={2}
      />
    ),
  },

  // Slide 5: Catalog & Personal Prices
  {
    id: 'catalog-prices',
    header: 'Каталог с персональными ценами',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Title level={5}>Основные возможности</Title>
              <List size="small">
                <List.Item>
                  <LockOutlined style={{ color: '#1890ff', marginRight: 8 }} />{' '}
                  <Text strong>Персональные цены</Text> для каждого клиента
                </List.Item>
                <List.Item>🔍 Поиск по названию и артикулу</List.Item>
                <List.Item>
                  📦 Отображение остатков на складе в реальном времени
                </List.Item>
                <List.Item>🎨 Фильтры по категориям и производителям</List.Item>
                <List.Item>📸 Фото товаров и характеристики</List.Item>
              </List>
            </Col>
            <Col span={12}>
              <Card style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5}>Как это работает</Title>
                <Paragraph style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Каждый оптовый клиент получает свой логин и пароль. После
                  входа он видит <Text strong>только свои цены</Text>, которые
                  настроены администратором в панели управления на основе
                  договора или условий сотрудничества.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
        <FeaturesSlide
          columns={3}
          wrapInCard={false}
          cards={[
            {
              title: 'Каталог товаров',
              items: [
                'Сетка товаров с фото',
                'Быстрый поиск и фильтры',
                'Информация о наличии',
              ],
            },
            {
              title: 'Карточка товара',
              items: [
                'Детальное описание',
                'Галерея изображений',
                'Персональная цена',
              ],
            },
            {
              title: 'Корзина',
              items: [
                'Добавление товаров',
                'Расчёт итоговой суммы',
                'Сохранение черновиков',
              ],
            },
          ]}
        />
      </Space>
    ),
  },

  // Slide 6: Order Management
  {
    id: 'order-management',
    header: 'Управление заказами',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={12}>
          <Card>
            <Title level={4}>
              <ShoppingCartOutlined /> Корзина и оформление
            </Title>
            <List size="small">
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Добавление
                товаров в корзину с указанием количества
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} />{' '}
                Автоматический расчёт итоговой суммы
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Возможность
                сохранить черновик заказа
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Оформление
                заказа без звонка менеджеру
              </List.Item>
            </List>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Title level={4}>
              <ClockCircleOutlined /> История заказов
            </Title>
            <List size="small">
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Полный
                список всех заказов с датами и суммами
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Статусы
                синхронизируются из 1С в реальном времени
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Быстрый
                повторный заказ одним кликом
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Скачивание
                документов (счета, накладные)
              </List.Item>
            </List>
          </Card>
        </Col>
        <Col span={24}>
          <Card style={{ backgroundColor: '#fff7e6' }}>
            <Title level={5}>Оформление заказа</Title>
            <Paragraph style={{ marginBottom: 0 }}>
              📧 Заказ автоматически попадает в 1С, менеджер получает
              уведомление. Клиент видит статус обработки в личном кабинете.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    ),
  },

  // Slide 7: Admin Settings
  {
    id: 'admin-settings',
    header: 'Настройки администратора',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>💰 Управление персональными ценами</Title>
          <List size="small">
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Настройка
              персональных цен для каждого клиента
            </List.Item>
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Групповые
              скидки и брейки цен (зависимость от объёма)
            </List.Item>
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Управление
              доступом: какие товары видит клиент
            </List.Item>
          </List>
        </Card>
        <FeaturesSlide
          columns={3}
          wrapInCard={false}
          cards={[
            {
              title: 'Пользователи',
              items: [
                'Создание аккаунтов для клиентов',
                'Управление правами доступа',
                'Настройка контактов и реквизитов',
              ],
            },
            {
              title: 'Интеграция с 1С',
              items: [
                'Синхронизация каталога и остатков',
                'Автоматическая передача заказов',
                'Обновление статусов в реальном времени',
              ],
            },
            {
              title: 'Уведомления',
              items: [
                'Email‑уведомления о заказах',
                'Напоминания клиентам',
                'Уведомления менеджерам',
              ],
            },
          ]}
        />
      </Space>
    ),
  },

  // Slide 8: Demo Template Section Divider
  {
    id: 'demo-template-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Демо шаблона B2B портала"
        subtitle="Примеры интерфейса из реализованных проектов"
        imageIndex={4}
      />
    ),
  },

  // Slide 9: Demo - Account
  {
    id: 'demo-account',
    header: 'Личный кабинет клиента',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                minHeight: '400px',
              }}
            >
              <ImageWithLoader
                src={demoAccount}
                alt="Личный кабинет клиента"
                style={{
                  maxHeight: 'calc(100vh - 300px)',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <UserOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Данные компании
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Просмотр и редактирование реквизитов компании, контактной
                  информации и данных для выставления счетов
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Контактные данные
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Управление контактными лицами, адресами доставки и способами
                  связи
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <UserOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  Персональный менеджер
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Прямая связь с назначенным менеджером через чат для решения
                  вопросов и консультаций
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Slide 10: Demo - Catalog
  {
    id: 'demo-catalog',
    header: 'Каталог товаров с персональными ценами',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                minHeight: '400px',
              }}
            >
              <ImageWithLoader
                src={demoCatalog}
                alt="Каталог товаров с персональными ценами"
                style={{
                  maxHeight: 'calc(100vh - 300px)',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <LockOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Персональные цены
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Каждый авторизованный клиент видит только свои индивидуальные
                  цены, настроенные администратором
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShoppingCartOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Актуальные остатки
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отображение реального количества товара на складе в режиме
                  реального времени, синхронизация с 1С
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <RocketOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Поиск и фильтрация
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Быстрый поиск по артикулу, названию и фильтрация по
                  категориям, производителям и характеристикам
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#595959' }}
                  />
                  Фото и документация
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Фотографии продукции, сертификаты качества и техническая
                  документация для каждого товара
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Slide 11: Demo - Product Page
  {
    id: 'demo-product',
    header: 'Карточка товара',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '100%',
                height: '100%',
                minHeight: '400px',
                overflow: 'auto',
              }}
            >
              <ImageWithLoader
                src={demoProduct}
                alt="Карточка товара"
                style={{
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <LockOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Персональная цена
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отображение индивидуальной цены для конкретного клиента,
                  настроенной администратором
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Детальная информация
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Полное описание товара, характеристики, артикул, фото и
                  документация для принятия решения о покупке
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShoppingCartOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Добавление в корзину
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Удобное добавление товара в корзину с указанием количества и
                  автоматическим расчётом стоимости
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <RocketOutlined
                    style={{ marginRight: 8, color: '#595959' }}
                  />
                  Остатки на складе
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отображение актуальных остатков товара на складе в реальном
                  времени, синхронизация с 1С
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Slide 12: Demo - Orders History
  {
    id: 'demo-orders',
    header: 'История заказов',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '100%',
                height: '100%',
                minHeight: '400px',
                overflow: 'auto',
              }}
            >
              <ImageWithLoader
                src={demoOrders}
                alt="История заказов"
                style={{
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  История заказов
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Полный список всех заказов с датами, номерами, суммами и
                  детальной информацией по каждому заказу
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CheckCircleOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Отслеживание статусов
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отслеживание статуса заказа в реальном времени: новый, в
                  обработке, собран, в доставке, выполнен. Статусы
                  синхронизируются из 1С
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShoppingCartOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Повторный заказ
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Возможность быстро повторить предыдущий заказ одним кликом,
                  скопировав состав и количество товаров
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#595959' }}
                  />
                  Печать документов
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Скачивание и печать счетов, накладных, актов и других
                  документов по заказам в различных форматах
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Slide 12: Roadmap
  {
    id: 'roadmap',
    header: 'Сроки реализации: ~10–12 недель',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Roadmap
          mode="alternate"
          items={[
            {
              title: 'Фаза 1: Подготовка и архитектура',
              duration: '1–2 недели',
              icon: <CalendarOutlined />,
              color: 'blue',
              description:
                'Уточнение требований к интеграции с 1С. Дизайн структуры данных. Подготовка тестовых данных.',
            },
            {
              title: 'Фаза 2: Frontend — личный кабинет',
              duration: '3–7 недели',
              icon: <UserOutlined />,
              color: 'green',
              description:
                'Разработка каталога с персональными ценами. Корзина и оформление заказа. История заказов и профиль клиента.',
            },
            {
              title: 'Фаза 3: Backend — API и интеграция',
              duration: '5–9 недели',
              icon: <ApiOutlined />,
              color: 'purple',
              description:
                'Разработка API для портала. Настройка синхронизации с 1С (каталог, остатки, заказы). Система управления персональными ценами.',
            },
            {
              title: 'Фаза 4: Интеграция и тестирование',
              duration: '8–10 недели',
              icon: <CheckCircleOutlined />,
              color: 'orange',
              description:
                'Подключение frontend к backend. Тестирование с реальными данными. Обучение администраторов работе с системой.',
            },
            {
              title: 'Фаза 5: Запуск и доработки',
              duration: '11–12 недели',
              icon: <RocketOutlined />,
              color: 'gold',
              description:
                'Пилотный запуск с первыми клиентами. Правки по обратной связи. Подготовка к полному запуску.',
            },
          ]}
        />
        <Text type="secondary" style={{ fontSize: 12 }}>
          * Сроки могут измениться в зависимости от особенностей текущей
          конфигурации 1С или иных факторов
        </Text>
      </Space>
    ),
  },

  // Slide 9: Budget
  {
    id: 'budget',
    header: 'Стоимость проекта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              component: 'Frontend разработка (React)',
              volume: '4–5 недель',
              cost: '110 000 ₽',
            },
            {
              key: '2',
              component: 'Backend API разработка',
              volume: '4–5 недель',
              cost: '100 000 ₽',
            },
            {
              key: '3',
              component: 'Интеграция с 1С',
              volume: '2 недели',
              cost: '50 000 ₽',
            },
            {
              key: '4',
              component: 'Тестирование и QA',
              volume: '1–2 недели',
              cost: '25 000 ₽',
            },
            {
              key: '5',
              component: 'Развертывание и настройка',
              volume: '1 неделя',
              cost: '15 000 ₽',
            },
          ]}
          columns={[
            {
              title: 'Компонент',
              dataIndex: 'component',
              key: 'component',
              width: '50%',
            },
            {
              title: 'Объем',
              dataIndex: 'volume',
              key: 'volume',
              width: '20%',
            },
            {
              title: 'Стоимость',
              dataIndex: 'cost',
              key: 'cost',
              width: '30%',
              render: text => (
                <Text strong style={{ fontSize: '16px' }}>
                  {text}
                </Text>
              ),
            },
          ]}
          pagination={false}
          size="small"
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row style={{ backgroundColor: '#f6ffed' }}>
                <Table.Summary.Cell index={0} colSpan={2}>
                  <Text strong style={{ fontSize: '18px' }}>
                    Итого
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text strong style={{ fontSize: '20px', color: '#52c41a' }}>
                    300 000 ₽
                  </Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={5}>✅ Что включено</Title>
          <List size="small">
            <List.Item>Полный B2B портал с персональными ценами</List.Item>
            <List.Item>
              Интеграция с вашей 1С (синхронизация каталога, остатков, заказов)
            </List.Item>
            <List.Item>
              Панель администратора для управления ценами и клиентами
            </List.Item>
            <List.Item>Дизайн UI/UX — совместно с заказчиком</List.Item>
            <List.Item>Создание документации, обучение вашей команды</List.Item>
          </List>
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
