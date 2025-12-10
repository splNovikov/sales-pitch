import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Alert,
} from 'antd';
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  DatabaseOutlined,
  DollarOutlined,
  LinkOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  MobileOutlined,
  FileTextOutlined,
  UserOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { saratovupakovkaCreatedAt } from './saratovupakovka.meta';
import example68 from './68.png';
import example98 from './98.png';

const { Title, Paragraph, Text, Link } = Typography;

export const saratovupakovkaSlides: SlideData[] = [
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
          size="middle"
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <Title
            level={1}
            style={{
              fontSize: '48px',
              fontWeight: 700,
              background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--app-spacing-md)',
            }}
          >
            Саратовупаковка
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Решение для онлайн-продаж
          </Paragraph>
          <Text
            type="secondary"
            style={{
              fontSize: 'var(--app-font-size-lg)',
            }}
          >
            Простой функциональный сайт для вашего бизнеса
          </Text>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          {formatDateForSlide(saratovupakovkaCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'problem',
    header: 'Проблема',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <ExclamationCircleOutlined
              style={{ marginRight: 8, color: '#ff4d4f' }}
            />
            Текущая ситуация
          </Title>
          <List
            size="large"
            dataSource={[
              {
                icon: <ShopOutlined style={{ color: '#ff4d4f' }} />,
                text: 'Нет онлайн представления товаров',
                description:
                  'Потенциальные клиенты не видят, что вы предлагаете',
              },
              {
                icon: <MailOutlined style={{ color: '#ff4d4f' }} />,
                text: 'Нет централизованного канала получения заказов',
                description: 'Заказы приходят разрозненно, сложно отслеживать',
              },
            ]}
            renderItem={item => (
              <List.Item
                style={{
                  padding: '16px 0',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                <Space size="middle" style={{ width: '100%' }}>
                  <div style={{ fontSize: '24px' }}>{item.icon}</div>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ flex: 1 }}
                  >
                    <Text strong style={{ fontSize: '16px' }}>
                      {item.text}
                    </Text>
                    <Text type="secondary">{item.description}</Text>
                  </Space>
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Alert
          message="Результат"
          description="Упущенные возможности продаж и потеря потенциальных клиентов"
          type="warning"
          showIcon
        />
      </Space>
    ),
  },
  {
    id: 'solution',
    header: 'Решение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <ThunderboltOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Простой функциональный сайт, который:
          </Title>
          <List
            size="large"
            dataSource={[
              {
                icon: <ShopOutlined style={{ color: '#52c41a' }} />,
                text: 'Показывает ваш каталог товаров',
              },
              {
                icon: <ShoppingCartOutlined style={{ color: '#52c41a' }} />,
                text: 'Позволяет клиентам оставить заказ',
              },
              {
                icon: <MailOutlined style={{ color: '#52c41a' }} />,
                text: 'Автоматически отправляет заказ вам на почту',
              },
              {
                icon: <PhoneOutlined style={{ color: '#52c41a' }} />,
                text: 'Собирает контакты (с номером телефона)',
              },
              {
                icon: <DatabaseOutlined style={{ color: '#52c41a' }} />,
                text: 'Готов к интеграции с вашей 1С',
              },
            ]}
            renderItem={item => (
              <List.Item
                style={{
                  padding: '12px 0',
                  borderBottom: 'none',
                }}
              >
                <Space size="middle">
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', fontSize: '20px' }}
                  />
                  <div style={{ fontSize: '20px' }}>{item.icon}</div>
                  <Text style={{ fontSize: '16px' }}>{item.text}</Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'concept',
    header: 'Концепция',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0, textAlign: 'center' }}>
            Минимум лишнего — максимум результата
          </Title>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffe58f',
                  height: '100%',
                }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">НЕТ</Tag>
                  <Text strong>Сложных платежей</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Оплата согласовывается отдельно
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffe58f',
                  height: '100%',
                }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">НЕТ</Tag>
                  <Text strong>Личных кабинетов</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Не нужны для B2B
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffe58f',
                  height: '100%',
                }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">НЕТ</Tag>
                  <Text strong>Сложного дизайна</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Важен результат
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                  height: '100%',
                }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">ЕСТЬ</Tag>
                  <Text strong>Все, что действительно работает</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Только необходимое
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
    id: 'implementation',
    header: 'Варианты реализации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <SettingOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Готовый шаблон Aspro (быстро, доступно)
          </Title>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Alert
              message="Демонстрационная версия доступна сейчас, настройка — 2 недели"
              type="info"
              showIcon
            />
            <Card
              size="small"
              style={{
                backgroundColor: '#f6ffed',
                border: '1px solid #b7eb8f',
              }}
            >
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ marginRight: 8, color: '#52c41a' }}
                />
                Шаблон Aspro включает всё необходимое:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Каталог товаров с фильтрацией и поиском',
                  'Детальная страница товара с полной информацией',
                  'Корзина для формирования заказа',
                  'Все необходимые функции для полноценной работы',
                ]}
                renderItem={item => (
                  <List.Item
                    style={{
                      padding: '4px 0',
                      borderBottom: 'none',
                    }}
                  >
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
            <Alert
              message="Критически важно: нормальная работа с 1С"
              description="Шаблон Aspro уже содержит каталог, детальную страницу и корзину. Главное — обеспечить корректную интеграцию и синхронизацию с вашей системой 1С для автоматического обновления каталога, цен и остатков. Без нормальной работы с 1С сайт не сможет эффективно функционировать."
              type="warning"
              showIcon
            />
            <Card
              size="small"
              style={{
                backgroundColor: '#e6f7ff',
                border: '1px solid #91d5ff',
              }}
            >
              <Space orientation="vertical" size="small">
                <Text strong>Цена: базовый уровень</Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Оптимальное соотношение цена/качество
                </Text>
              </Space>
            </Card>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'investment',
    header: 'Инвестиция',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card
              style={{
                height: '100%',
                backgroundColor: '#f6ffed',
                border: '1px solid #b7eb8f',
              }}
            >
              <Space
                orientation="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <DollarOutlined
                  style={{ fontSize: '48px', color: '#52c41a' }}
                />
                <Title level={3} style={{ marginTop: 0 }}>
                  Простой вариант
                </Title>
                <Title
                  level={2}
                  style={{
                    margin: 0,
                    color: '#52c41a',
                    fontWeight: 700,
                  }}
                >
                  от 68k
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Каталог товаров',
                    'Форма заказа',
                    'Отправка на email',
                    'Сбор контактов',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        justifyContent: 'center',
                        borderBottom: 'none',
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
          <Col xs={24} md={12}>
            <Card
              style={{
                height: '100%',
                backgroundColor: '#e6f7ff',
                border: '1px solid #91d5ff',
              }}
            >
              <Space
                orientation="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <DatabaseOutlined
                  style={{ fontSize: '48px', color: '#1890ff' }}
                />
                <Title level={3} style={{ marginTop: 0 }}>
                  С интеграцией 1С
                </Title>
                <Title
                  level={2}
                  style={{
                    margin: 0,
                    color: '#1890ff',
                    fontWeight: 700,
                  }}
                >
                  от 98k
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Все из простого варианта',
                    'Синхронизация с 1С',
                    'Автоматическое обновление',
                    'Управление остатками',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        justifyContent: 'center',
                        borderBottom: 'none',
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
        </Row>
        <Alert
          message="Разница в цене = сложность 1С интеграции"
          description="Стоимость зависит от версии 1С, объема данных и требований к синхронизации"
          type="info"
          showIcon
        />
      </Space>
    ),
  },
  {
    id: 'examples',
    header: 'Примеры',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <LinkOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Демонстрационная версия шаблона Aspro
          </Title>
          <Paragraph>
            <Text>
              Шаблон Aspro уже содержит все необходимые компоненты для
              полноценной работы интернет-магазина:
            </Text>
          </Paragraph>
          <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                  height: '100%',
                }}
              >
                <Space orientation="vertical" size="small">
                  <ShopOutlined
                    style={{ fontSize: '24px', color: '#1890ff' }}
                  />
                  <Text strong>Каталог товаров</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    С фильтрацией и поиском — всё готово
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                  height: '100%',
                }}
              >
                <Space orientation="vertical" size="small">
                  <FileTextOutlined
                    style={{ fontSize: '24px', color: '#1890ff' }}
                  />
                  <Text strong>Детальная страница</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Полная информация о товаре — встроена
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                  height: '100%',
                }}
              >
                <Space orientation="vertical" size="small">
                  <ShoppingCartOutlined
                    style={{ fontSize: '24px', color: '#1890ff' }}
                  />
                  <Text strong>Корзина</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Формирование заказа — уже есть
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffd591',
                  height: '100%',
                }}
              >
                <Space orientation="vertical" size="small">
                  <DatabaseOutlined
                    style={{ fontSize: '24px', color: '#fa8c16' }}
                  />
                  <Text strong>Интеграция с 1С</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Критически важно: нормальная работа
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
          <Alert
            message="Главное требование: нормальная работа с 1С"
            description={
              <Text>
                Каталог, детальная страница и корзина уже есть в шаблоне Aspro.
                Ключевой момент — обеспечить корректную интеграцию и
                синхронизацию с вашей системой 1С. Без нормальной работы с 1С
                сайт не сможет автоматически обновлять каталог, цены и остатки,
                что критично для эффективной работы.
              </Text>
            }
            type="warning"
            showIcon
            style={{ marginTop: '16px' }}
          />
          <Alert
            message="Демонстрационная версия"
            description={
              <Text>
                Демонстрационная версия будет доступна после уточнения
                требований. Особое внимание уделим настройке интеграции с 1С.
              </Text>
            }
            type="info"
            showIcon
            style={{ marginTop: '16px' }}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'example-68',
    header: 'Пример реализации на Aspro: от 68 000 ₽',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            orientation="vertical"
            size="large"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <img
              src={example68}
              alt="Пример сайта на Aspro за 68 тыс руб"
              style={{
                width: '100%',
                maxWidth: '1200px',
                height: 'auto',
                objectFit: 'contain',
                margin: '0 auto',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            />
            <Space orientation="vertical" size="small">
              <Text strong style={{ fontSize: '18px' }}>
                Пример реализованного сайта на Aspro
              </Text>
              <Tag
                color="blue"
                style={{ fontSize: '16px', padding: '6px 16px' }}
              >
                Стоимость: 68 000 ₽
              </Tag>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'example-98',
    header: 'Пример реализации на Aspro: от 98 000 ₽',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            orientation="vertical"
            size="large"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <img
              src={example98}
              alt="Пример сайта на Aspro за 98 тыс руб"
              style={{
                width: '100%',
                maxWidth: '1200px',
                height: 'auto',
                objectFit: 'contain',
                margin: '0 auto',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            />
            <Space orientation="vertical" size="small">
              <Text strong style={{ fontSize: '18px' }}>
                Пример реализованного сайта на Aspro
              </Text>
              <Tag
                color="green"
                style={{ fontSize: '16px', padding: '6px 16px' }}
              >
                Стоимость: 98 000 ₽
              </Tag>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'critical-clarifications',
    header: 'Критические уточнения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Alert
          message="Перед расчетом бюджета"
          description="Эти вопросы помогут точно определить стоимость и сроки реализации"
          type="warning"
          showIcon
          style={{ marginBottom: '24px' }}
        />

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            1️⃣ 1С СИСТЕМА
          </Title>
          <List
            size="small"
            dataSource={[
              'Какая версия 1С у вас? (Управление торговлей, УХ, Предприятие 8?)',
              'Есть ли уже товары, цены, остатки в 1С?',
              'Заполнены ли карточки товаров подробно (описание, фото)?',
              'Нужна ли синхронизация в реальном времени или периодическая выгрузка?',
            ]}
            renderItem={item => (
              <List.Item
                style={{
                  padding: '8px 0',
                  borderBottom: 'none',
                }}
              >
                <Text>☐ {item}</Text>
              </List.Item>
            )}
          />
        </Card>

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            2️⃣ КАТАЛОГ ТОВАРОВ
          </Title>
          <List
            size="small"
            dataSource={[
              'Сколько товаров планируете выставить? (100? 1000? 10000?)',
              'Нужны ли фильтры/сортировка или просто список?',
              'Каждый товар имеет несколько вариантов/артикулов?',
            ]}
            renderItem={item => (
              <List.Item
                style={{
                  padding: '8px 0',
                  borderBottom: 'none',
                }}
              >
                <Text>☐ {item}</Text>
              </List.Item>
            )}
          />
        </Card>

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShoppingCartOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            3️⃣ ЗАКАЗЫ
          </Title>
          <List
            size="small"
            dataSource={[
              'Формат заказа: минимум (просто название товара + количество)?',
              'Нужна корзина или просто форма заказа?',
              'На какой email приходят заказы?',
            ]}
            renderItem={item => (
              <List.Item
                style={{
                  padding: '8px 0',
                  borderBottom: 'none',
                }}
              >
                <Text>☐ {item}</Text>
              </List.Item>
            )}
          />
        </Card>

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MobileOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            4️⃣ ДИЗАЙН & ФУНКЦИОНАЛ
          </Title>
          <List
            size="small"
            dataSource={[
              'Нужен красивый дизайн или функциональность важнее?',
              'Нужна ли авторизация/регистрация или просто форма?',
              'Какой мобильный трафик ожидаете?',
            ]}
            renderItem={item => (
              <List.Item
                style={{
                  padding: '8px 0',
                  borderBottom: 'none',
                }}
              >
                <Text>☐ {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Давайте обсудим Ваш проект',
    content: (
      <Space
        orientation="vertical"
        size="middle"
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          padding: '8px 0',
        }}
      >
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#f6ffed', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Новиков Павел
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Технический директор
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79085550606"
                          style={{ fontSize: '15px' }}
                        >
                          +7 908 555 0606
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:p.novikov@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          p.novikov@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#fff7e6', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Ситяков Артём
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Руководитель отдела маркетинга
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79271108488"
                          style={{ fontSize: '15px' }}
                        >
                          +7 927 110 84 88
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:a.sityakov@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          a.sityakov@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#f6ffed', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Киселёв Евгений
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Руководитель проектов
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79232864072"
                          style={{ fontSize: '15px' }}
                        >
                          +7 923 286 4072
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:e.kiselev@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          e.kiselev@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
      </Space>
    ),
  },
];
