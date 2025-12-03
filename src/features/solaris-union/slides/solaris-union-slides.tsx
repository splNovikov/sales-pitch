import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Descriptions,
} from 'antd';
import {
  MobileOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  DatabaseOutlined,
  ApiOutlined,
  UserOutlined,
  TeamOutlined,
  FileTextOutlined,
  CloudOutlined,
  ClockCircleOutlined,
  CodeOutlined,
  MessageOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  WarningOutlined,
  CloseOutlined,
  GlobalOutlined,
  LinkOutlined,
  SyncOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import Logo from '~shared/ui/logo';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { solarisUnionCreatedAt } from './solaris-union.meta';
import ozon1 from './ozon_1.PNG';
import ozon2 from './ozon_2.PNG';
import wallet from './wallet.PNG';
import begu from './begu.PNG';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for Solaris Union MVP presentation
 * Основные требования и положения ТЗ
 */
export const solarisUnionSlides: SlideData[] = [
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
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <Logo size="xl" fillColor="var(--app-color-primary)" />
          <Title level={1} style={{ marginTop: 'var(--app-spacing-md)' }}>
            Solaris Union
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Генеалогическое древо — MVP
          </Paragraph>
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              opacity: 0.6,
              marginTop: 'auto',
            }}
          >
            {formatDateForSlide(solarisUnionCreatedAt)}
          </Text>
        </Space>
      </Space>
    ),
  },
  {
    id: 'main-requirements',
    header: 'Основные требования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Сроки разработки
          </Title>
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Жёсткий срок">
              <Tag
                color="red"
                style={{ fontSize: '14px', padding: '4px 12px' }}
              >
                2 недели
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Цель MVP">
              Собрать и обкатать основной пользовательский сценарий: установка →
              регистрация → добавление родственников → визуализация
              генеалогического древа
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MobileOutlined style={{ marginRight: 8 }} />
            Платформы
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f5ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <MobileOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Мобильное приложение</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    iOS / Android
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f5ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <CloudOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Backend API</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    REST API для мобильного приложения
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
    id: 'mvp-functionality',
    header: 'Функционал MVP',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Frontend (мобильное приложение)
          </Title>
          <List
            size="small"
            dataSource={[
              'Onboarding (2-3 экрана) с объяснением ценности продукта',
              'Регистрация и авторизация (email + пароль)',
              'Главный экран "Моё древо" с визуализацией',
              'Экран "Человек" с карточкой (имя, дата рождения, пол, фото, описание)',
              'Добавление родственников с указанием типа связи',
              'Импорт из адресной книги устройства',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined style={{ marginRight: 8 }} />
            Backend
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ApiOutlined style={{ marginRight: 8 }} />
                    Auth & User
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Регистрация/авторизация',
                      'JWT токены',
                      'Профиль пользователя',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          • {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <TeamOutlined style={{ marginRight: 8 }} />
                    Person & FamilyTree
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'CRUD для Person',
                      'Типы связей (parent, child, spouse)',
                      'Family UID для каждого человека',
                      'Импорт из контактов',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          • {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Вне рамок MVP (будущие этапы)
          </Title>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            AI-архивариус, реставрация фото, интеграции с соцсетями, голосовые
            капсулы, социальная лента, корпоративные модули, биллинг
          </Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'platform-comparison',
    header: 'Telegram Mini App vs Нативное приложение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderColor: '#ff4d4f',
                borderWidth: 2,
              }}
            >
              <Title level={4} style={{ marginTop: 0, color: '#ff4d4f' }}>
                <MobileOutlined style={{ marginRight: 8 }} />
                Нативное приложение (iOS/Android)
              </Title>
              <List
                size="small"
                dataSource={[
                  'Требует отдельной разработки для iOS и Android',
                  'Длительная разработка и тестирование',
                  'Процесс установки — барьер для пользователей',
                  'Высокая стоимость разработки',
                  'Необходимость публикации в App Store и Google Play',
                ]}
                renderItem={item => (
                  <List.Item
                    style={{ padding: '8px 0', justifyContent: 'flex-start' }}
                  >
                    <CloseOutlined
                      style={{ color: '#ff4d4f', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderColor: '#52c41a',
                borderWidth: 2,
                backgroundColor: '#f6ffed',
              }}
            >
              <Title level={4} style={{ marginTop: 0, color: '#52c41a' }}>
                <MessageOutlined style={{ marginRight: 8 }} />
                Telegram Mini App
              </Title>
              <List
                size="small"
                dataSource={[
                  'Одна кодовая база для всех платформ',
                  'Быстрая разработка и запуск',
                  'Не требует установки — сразу в Telegram',
                  'Значительно дешевле в разработке',
                  'Мгновенная публикация без модерации',
                ]}
                renderItem={item => (
                  <List.Item
                    style={{ padding: '8px 0', justifyContent: 'flex-start' }}
                  >
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
      </Space>
    ),
  },
  {
    id: 'telegram-advantages',
    header: 'Преимущества Telegram Mini App',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Ключевые преимущества
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <DollarOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Быстрее и дешевле</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Значительно сокращает время и стоимость разработки
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
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
                  <Text strong>Все платформы сразу</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    iOS, Android, Desktop — одна кодовая база
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <SyncOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>UI/UX как нативное</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    На 99% ощущается как полноценное приложение
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Аудитория Telegram в России
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Space
                orientation="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Tag
                  color="green"
                  style={{ fontSize: '16px', padding: '8px 16px' }}
                >
                  100+ миллионов пользователей
                </Tag>
                <Text>
                  <Text strong>2/3 граждан России</Text> зарегистрированы в
                  Telegram — это упрощает доступ к приложению
                </Text>
              </Space>
            </Col>
            <Col xs={24} sm={12}>
              <Space
                orientation="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <List
                  size="small"
                  dataSource={[
                    'Упрощённая регистрация через Telegram',
                    'Не нужна установка приложения',
                    'Импорт контактов — базовый функционал Telegram',
                    'Сокращается воронка конверсии',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text type="secondary" style={{ fontSize: '13px' }}>
                        {item}
                      </Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Col>
          </Row>
        </Card>

        <Card>
          <Title level={5} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ marginRight: 8, color: '#faad14' }} />
            Установка приложения — барьер для пользователей
          </Title>
          <Paragraph
            type="secondary"
            style={{ fontSize: '13px', marginBottom: 0 }}
          >
            Процесс регистрации отбрасывает самое большое количество
            пользователей по статистике. Telegram Mini App устраняет этот барьер
            — пользователь просто открывает приложение прямо в Telegram, где уже
            авторизован.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'deadline-reality',
    header: 'Реальность сроков: 2 недели',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Что реально успеть за 2 недели?
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card
                size="small"
                style={{
                  borderColor: '#ff4d4f',
                  borderWidth: 2,
                  height: '100%',
                }}
              >
                <Title level={5} style={{ marginTop: 0, color: '#ff4d4f' }}>
                  <CloseOutlined style={{ marginRight: 8 }} />
                  Нативное приложение
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Разработка для iOS',
                    'Разработка для Android',
                    'Тестирование на разных устройствах',
                    'Процедура публикации в сторы',
                    'Модерация (до нескольких недель)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        ❌ {item}
                      </Text>
                    </List.Item>
                  )}
                />
                <Divider style={{ margin: '12px 0' }} />
                <Text strong style={{ color: '#ff4d4f' }}>
                  За 2 недели — <Text underline>невозможно</Text>
                </Text>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                size="small"
                style={{
                  borderColor: '#52c41a',
                  borderWidth: 2,
                  backgroundColor: '#f6ffed',
                  height: '100%',
                }}
              >
                <Title level={5} style={{ marginTop: 0, color: '#52c41a' }}>
                  <CheckCircleOutlined style={{ marginRight: 8 }} />
                  Telegram Mini App
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Разработка одной кодовой базы',
                    'Поддержка всех платформ автоматически',
                    'Быстрое тестирование',
                    'Мгновенная публикация',
                    'Без модерации',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        ✅ {item}
                      </Text>
                    </List.Item>
                  )}
                />
                <Divider style={{ margin: '12px 0' }} />
                <Text strong style={{ color: '#52c41a' }}>
                  За 2 недели —{' '}
                  <Text underline>реально, если сильно постараться</Text>
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ marginRight: 8, color: '#52c41a' }} />
            Всё из ТЗ реализуемо в Mini App
          </Title>
          <Paragraph style={{ marginBottom: 12 }}>
            Все функции, описанные в техническом задании, можно реализовать на
            основе Telegram Mini App без каких-либо ограничений:
          </Paragraph>
          <Row gutter={[8, 8]}>
            <Col xs={24} sm={12} md={8}>
              <Tag color="blue" style={{ margin: '4px' }}>
                Onboarding и авторизация
              </Tag>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Tag color="blue" style={{ margin: '4px' }}>
                Генеалогическое древо
              </Tag>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Tag color="blue" style={{ margin: '4px' }}>
                Добавление родственников
              </Tag>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Tag color="blue" style={{ margin: '4px' }}>
                Импорт контактов
              </Tag>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Tag color="blue" style={{ margin: '4px' }}>
                Загрузка фото
              </Tag>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Tag color="blue" style={{ margin: '4px' }}>
                Профили пользователей
              </Tag>
            </Col>
          </Row>
          <Paragraph
            type="secondary"
            style={{ fontSize: '13px', marginTop: 12, marginBottom: 0 }}
          >
            Импорт контактов в Telegram реализован проще и удобнее, чем в
            нативном приложении — это базовый функционал платформы.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'telegram-examples-intro',
    header: 'Примеры Telegram Mini App',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f0f5ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <EyeOutlined style={{ marginRight: 8 }} />
            Реальные примеры успешных Mini App
          </Title>
          <Paragraph>
            Telegram Mini App уже используются крупными компаниями для создания
            полнофункциональных приложений. Вот примеры, которые демонстрируют
            возможности платформы:
          </Paragraph>
        </Card>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <MessageOutlined style={{ marginRight: 8 }} />
                Ozon Fresh
              </Title>
              <Space
                orientation="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Link
                  href="https://t.me/ozonfresh_zakaz_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px' }}
                >
                  <LinkOutlined style={{ marginRight: 8 }} />
                  t.me/ozonfresh_zakaz_bot
                </Link>
                <Paragraph
                  type="secondary"
                  style={{ marginBottom: 0, fontSize: '13px' }}
                >
                  Маркетплейс Ozon использует Mini App для продажи продуктов.
                  Полнофункциональный интерфейс с каталогом и оплатой.
                </Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <MessageOutlined style={{ marginRight: 8 }} />
                Wallet
              </Title>
              <Space
                orientation="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Link
                  href="https://t.me/wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px' }}
                >
                  <LinkOutlined style={{ marginRight: 8 }} />
                  t.me/wallet
                </Link>
                <Paragraph
                  type="secondary"
                  style={{ marginBottom: 0, fontSize: '13px' }}
                >
                  Криптовалютный кошелёк от Telegram. Платёжный инструмент с
                  полноценным интерфейсом для управления активами.
                </Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <MessageOutlined style={{ marginRight: 8 }} />
                Begy App
              </Title>
              <Space
                orientation="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Link
                  href="https://t.me/BegyApp_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px' }}
                >
                  <LinkOutlined style={{ marginRight: 8 }} />
                  t.me/BegyApp_bot
                </Link>
                <Paragraph
                  type="secondary"
                  style={{ marginBottom: 0, fontSize: '13px' }}
                >
                  Социальное приложение с полнофункциональным интерфейсом.
                  Демонстрирует возможности Mini App для сложных приложений.
                </Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'ozon-examples',
    header: 'Ozon Fresh — пример Telegram Mini App',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Paragraph style={{ marginBottom: 12, fontSize: '14px' }}>
          Как видно на скриншотах, Mini App Ozon Fresh предоставляет полноценный
          интерфейс для заказа продуктов:
        </Paragraph>
        <Row gutter={[12, 12]}>
          <Col xs={24} md={12}>
            <Card size="small" bordered style={{ padding: '8px' }}>
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong style={{ fontSize: '13px' }}>
                  Главный экран с каталогом
                </Text>
                <div style={{ overflow: 'hidden', borderRadius: 6 }}>
                  <img
                    src={ozon1}
                    alt="Ozon Fresh Mini App - главный экран"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '55vh',
                      objectFit: 'contain',
                      display: 'block',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" bordered style={{ padding: '8px' }}>
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong style={{ fontSize: '13px' }}>
                  Интерфейс выбора товаров
                </Text>
                <div style={{ overflow: 'hidden', borderRadius: 6 }}>
                  <img
                    src={ozon2}
                    alt="Ozon Fresh Mini App - выбор товаров"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '55vh',
                      objectFit: 'contain',
                      display: 'block',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              </Space>
            </Card>
          </Col>
        </Row>

        <Row gutter={[12, 12]}>
          <Col xs={24} md={16}>
            <Card
              size="small"
              style={{ backgroundColor: '#f6ffed', padding: '12px' }}
            >
              <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                <CheckCircleOutlined
                  style={{ marginRight: 8, color: '#52c41a' }}
                />
                Что демонстрирует этот пример
              </Title>
              <List
                size="small"
                dataSource={[
                  'Полноценный UI/UX как в нативном приложении',
                  'Сложные интерфейсы с каталогом и выбором товаров',
                  'Интеграция с платежными системами',
                  'Работа на всех платформах (iOS, Android, Desktop)',
                  'Мгновенный доступ без установки',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <CheckCircleOutlined
                      style={{
                        color: '#52c41a',
                        marginRight: 8,
                        fontSize: '12px',
                      }}
                    />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {item}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card size="small" style={{ padding: '12px', height: '100%' }}>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong style={{ fontSize: '13px' }}>
                  Попробовать пример:
                </Text>
                <Link
                  href="https://t.me/ozonfresh_zakaz_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '13px', wordBreak: 'break-all' }}
                >
                  <LinkOutlined style={{ marginRight: 6 }} />
                  t.me/ozonfresh_zakaz_bot
                </Link>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'wallet-examples',
    header: 'Wallet — пример Telegram Mini App',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Paragraph style={{ marginBottom: 12, fontSize: '14px' }}>
          Wallet — криптовалютный кошелёк от Telegram с полнофункциональным
          интерфейсом для управления активами и проведения транзакций:
        </Paragraph>
        <Row gutter={[12, 12]} justify="center">
          <Col xs={24} md={16}>
            <Card size="small" bordered style={{ padding: '8px' }}>
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <Text strong style={{ fontSize: '13px' }}>
                  Интерфейс кошелька Wallet
                </Text>
                <div style={{ overflow: 'hidden', borderRadius: 6 }}>
                  <img
                    src={wallet}
                    alt="Wallet Mini App - интерфейс кошелька"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '55vh',
                      objectFit: 'contain',
                      display: 'block',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              </Space>
            </Card>
          </Col>
        </Row>

        <Row gutter={[12, 12]}>
          <Col xs={24} md={16}>
            <Card
              size="small"
              style={{ backgroundColor: '#f6ffed', padding: '12px' }}
            >
              <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                <CheckCircleOutlined
                  style={{ marginRight: 8, color: '#52c41a' }}
                />
                Что демонстрирует этот пример
              </Title>
              <List
                size="small"
                dataSource={[
                  'Сложные финансовые интерфейсы в Mini App',
                  'Безопасная работа с криптовалютами',
                  'Интеграция с блокчейном и платежными системами',
                  'Профессиональный UI/UX на уровне нативных приложений',
                  'Доступность на всех платформах без установки',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <CheckCircleOutlined
                      style={{
                        color: '#52c41a',
                        marginRight: 8,
                        fontSize: '12px',
                      }}
                    />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {item}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card size="small" style={{ padding: '12px', height: '100%' }}>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong style={{ fontSize: '13px' }}>
                  Попробовать пример:
                </Text>
                <Link
                  href="https://t.me/wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '13px', wordBreak: 'break-all' }}
                >
                  <LinkOutlined style={{ marginRight: 6 }} />
                  t.me/wallet
                </Link>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'begy-examples',
    header: 'Begy App — пример Telegram Mini App',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Paragraph style={{ marginBottom: 12, fontSize: '14px' }}>
          Begy App — социальное приложение с полнофункциональным интерфейсом,
          демонстрирующее возможности Mini App для сложных социальных платформ:
        </Paragraph>
        <Row gutter={[12, 12]} justify="center">
          <Col xs={24} md={16}>
            <Card size="small" bordered style={{ padding: '8px' }}>
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <Text strong style={{ fontSize: '13px' }}>
                  Интерфейс Begy App
                </Text>
                <div style={{ overflow: 'hidden', borderRadius: 6 }}>
                  <img
                    src={begu}
                    alt="Begy App Mini App - интерфейс приложения"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '55vh',
                      objectFit: 'contain',
                      display: 'block',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              </Space>
            </Card>
          </Col>
        </Row>

        <Row gutter={[12, 12]}>
          <Col xs={24} md={16}>
            <Card
              size="small"
              style={{ backgroundColor: '#f6ffed', padding: '12px' }}
            >
              <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                <CheckCircleOutlined
                  style={{ marginRight: 8, color: '#52c41a' }}
                />
                Что демонстрирует этот пример
              </Title>
              <List
                size="small"
                dataSource={[
                  'Социальные функции в Mini App',
                  'Сложная навигация и множество экранов',
                  'Профессиональный дизайн интерфейса',
                  'Работа с пользовательскими данными',
                  'Интеграция социальных функций и профилей',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <CheckCircleOutlined
                      style={{
                        color: '#52c41a',
                        marginRight: 8,
                        fontSize: '12px',
                      }}
                    />
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {item}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card size="small" style={{ padding: '12px', height: '100%' }}>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong style={{ fontSize: '13px' }}>
                  Попробовать пример:
                </Text>
                <Link
                  href="https://t.me/BegyApp_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '13px', wordBreak: 'break-all' }}
                >
                  <LinkOutlined style={{ marginRight: 6 }} />
                  t.me/BegyApp_bot
                </Link>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'conclusion',
    header: 'Заключение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Почему Telegram Mini App для Solaris Union?
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#ffffff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ThunderboltOutlined style={{ marginRight: 8 }} />
                    Технические преимущества
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Быстрая разработка (2 недели реальны)',
                      'Одна кодовая база для всех платформ',
                      'Все функции из ТЗ реализуемы',
                      'UI/UX на 99% как нативное приложение',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <CheckCircleOutlined
                          style={{ color: '#52c41a', marginRight: 8 }}
                        />
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#ffffff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <UserOutlined style={{ marginRight: 8 }} />
                    Бизнес-преимущества
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      '100+ млн пользователей Telegram в России',
                      'Упрощённая регистрация и вход',
                      'Нет барьера установки приложения',
                      'Дешевле в разработке и поддержке',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <CheckCircleOutlined
                          style={{ color: '#52c41a', marginRight: 8 }}
                        />
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Paragraph style={{ marginBottom: 0, fontSize: '16px' }}>
            <Text strong>
              Telegram Mini App — оптимальное решение для проекта Solaris Union
              в условиях жёстких сроков и необходимости охватить максимальную
              аудиторию.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
