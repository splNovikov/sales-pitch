import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import {
  GlobalOutlined,
  RocketOutlined,
  CodeOutlined,
  DatabaseOutlined,
  MobileOutlined,
  ApiOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  ShopOutlined,
  BarChartOutlined,
  SettingOutlined,
  BuildOutlined,
  SafetyOutlined,
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
  ControlOutlined,
  LockOutlined,
  SyncOutlined,
  DashboardOutlined,
  FolderOutlined,
  AppstoreOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import hanskonnerLogo from './hanskonner-logo.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for HansKonner website development presentation
 * Презентация о веб-разработке для HansKonner
 * Фокус на объяснении процесса разработки и двух вариантах: Битрикс vs Кастомный фронтенд
 */
export const hanskonnerWebsiteSlides: SlideData[] = [
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
          <img
            src={hanskonnerLogo}
            alt="HansKonner"
            style={{
              maxWidth: '500px',
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <Title level={2} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            Современные веб-решения для B2B
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginBottom: 0,
              color: '#595959',
            }}
          >
            Как мы создаём сайты, которые работают на Ваш бизнес
          </Paragraph>
        </Space>
      </Space>
    ),
  },
  {
    id: 'understanding-business',
    header: 'Мы понимаем Ваш бизнес',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            HansKonner — профессиональный инструмент
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Ваша специфика:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'B2B клиенты и дилерская сеть',
                      'Большой каталог инструментов',
                      'Профессиональные пользователи',
                      'Сложные технические характеристики',
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
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Ваши потребности:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Единый каталог для всех брендов',
                      'Личные кабинеты для дилеров',
                      'Интеграция с ERP системами',
                      'Удобный поиск по характеристикам',
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
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Мы понимаем Вашу специфику
          </Title>
          <Paragraph>
            Работа с инструментами требует особого подхода: большие каталоги,
            сложные технические характеристики, работа с дилерской сетью,
            интеграции со складом и учётными системами. Мы имеем опыт создания
            подобных решений и знаем, как сделать сайт, который действительно
            поможет Вашему бизнесу.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'how-we-build',
    header: 'Как мы создаём сайты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Процесс разработки
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2000}
            items={[
              {
                title: 'Исследование и планирование',
                description:
                  'Изучаем Ваш бизнес, потребности клиентов, анализируем конкурентов',
                icon: <SearchOutlined />,
              },
              {
                title: 'Проектирование',
                description:
                  'Создаём структуру сайта, пользовательские сценарии, проектируем интерфейсы',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Дизайн',
                description:
                  'Разрабатываем визуальную концепцию, отражающую Вашу марку и ценности',
                icon: <AppstoreOutlined />,
              },
              {
                title: 'Разработка',
                description:
                  'Строим функциональный сайт с учётом всех Ваших требований и интеграций',
                icon: <CodeOutlined />,
              },
              {
                title: 'Тестирование и запуск',
                description:
                  'Проверяем всё на ошибки, оптимизируем производительность, запускаем',
                icon: <SafetyOutlined />,
              },
              {
                title: 'Поддержка и развитие',
                description:
                  'Помогаем развивать сайт, добавлять функции, следим за актуальностью',
                icon: <SyncOutlined />,
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'what-includes',
    header: 'Что входит в разработку',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Компоненты разработки
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <CodeOutlined
                    style={{
                      fontSize: '32px',
                      color: '#1890ff',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>Фронтенд</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Интерфейс, который видят Ваши клиенты и дилеры
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <DatabaseOutlined
                    style={{
                      fontSize: '32px',
                      color: '#52c41a',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>Бэкенд</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Логика работы, управление данными, интеграции
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <ApiOutlined
                    style={{
                      fontSize: '32px',
                      color: '#faad14',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>Интеграции</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Подключение к Вашим системам (1С, CRM, склад и т.д.)
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <MobileOutlined
                    style={{
                      fontSize: '32px',
                      color: '#1890ff',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>Адаптивность</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Идеальная работа на всех устройствах
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'two-approaches',
    header: 'Два пути к успешному сайту',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ textAlign: 'center', marginTop: 0 }}>
            Как выбрать правильный подход?
          </Title>
          <Paragraph style={{ textAlign: 'center', fontSize: '16px' }}>
            Для каждого проекта есть оптимальное решение. Выбор зависит от Ваших
            задач, масштаба и планов на будущее.
          </Paragraph>
        </Card>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                border: '2px solid #1890ff',
                backgroundColor: '#e6f7ff',
              }}
            >
              <Space
                orientation="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <AppstoreOutlined
                    style={{ fontSize: '48px', color: '#1890ff' }}
                  />
                  <Title level={3} style={{ marginTop: 16, marginBottom: 8 }}>
                    Битрикс (Аспро)
                  </Title>
                  <Tag
                    color="blue"
                    style={{ fontSize: '14px', padding: '4px 12px' }}
                  >
                    Готовая платформа
                  </Tag>
                </div>
                <Paragraph style={{ textAlign: 'center' }}>
                  Мощная система на базе готовой платформы с огромным набором
                  функций из коробки
                </Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                border: '3px solid #52c41a',
                backgroundColor: '#f6ffed',
                boxShadow: '0 4px 12px rgba(82, 196, 26, 0.2)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -12,
                  right: 16,
                  zIndex: 1,
                }}
              >
                <Tag
                  color="success"
                  style={{
                    fontSize: '12px',
                    padding: '4px 12px',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(82, 196, 26, 0.3)',
                  }}
                >
                  ⭐ Рекомендуем
                </Tag>
              </div>
              <Space
                orientation="vertical"
                size="large"
                style={{ width: '100%' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <CodeOutlined
                    style={{ fontSize: '56px', color: '#52c41a' }}
                  />
                  <Title level={3} style={{ marginTop: 16, marginBottom: 8 }}>
                    Кастомный фронтенд
                  </Title>
                  <Tag
                    color="success"
                    style={{
                      fontSize: '16px',
                      padding: '6px 16px',
                      fontWeight: 'bold',
                    }}
                  >
                    Гибкое решение
                  </Tag>
                </div>
                <Paragraph
                  style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  Полностью индивидуальное решение, созданное специально под
                  Ваши задачи
                </Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'bitrix-advantages',
    header: 'Битрикс (Аспро) — когда это идеально',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Преимущества для B2B бизнеса
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ShopOutlined style={{ marginRight: 8 }} />
                    Готовая e-commerce функциональность
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Корзина и оформление заказов',
                      'Управление каталогом товаров',
                      'Система скидок и промокодов',
                      'Разные типы цен для B2B',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <UserOutlined style={{ marginRight: 8 }} />
                    Личные кабинеты из коробки
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Разные типы пользователей',
                      'Персональные прайс-листы',
                      'История заказов',
                      'Управление профилем',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <SyncOutlined style={{ marginRight: 8 }} />
                    Интеграции из коробки
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Готовые модули для 1С',
                      'Интеграция с платежными системами',
                      'Подключение CRM',
                      'Синхронизация склада',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <SettingOutlined style={{ marginRight: 8 }} />
                    Удобное управление контентом
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Редактирование без программиста',
                      'Множество готовых шаблонов',
                      'Визуальный редактор',
                      'SEO инструменты',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Когда выбирать Битрикс
          </Title>
          <List
            size="large"
            dataSource={[
              'Нужна быстрая запуск интернет-магазина',
              'Требуется стандартный набор функций e-commerce',
              'Важна возможность самостоятельного обновления контента',
              'Есть готовые интеграции, которые нужны (1С, платежи)',
              'Планируется активная работа с каталогом товаров',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{
                    color: '#52c41a',
                    marginRight: 12,
                    fontSize: '18px',
                  }}
                />
                <Text style={{ fontSize: '16px' }}>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'custom-advantages',
    header: 'Кастомный фронтенд — идеальное решение для HansKonner',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Преимущества для B2B бизнеса
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ThunderboltOutlined style={{ marginRight: 8 }} />
                    Полная гибкость и контроль
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Любая логика работы',
                      'Уникальный дизайн',
                      'Индивидуальные функции',
                      'Нет ограничений платформы',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <RocketOutlined style={{ marginRight: 8 }} />
                    Максимальная производительность
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Быстрая загрузка страниц',
                      'Оптимизация под задачи',
                      'Минимальный вес кода',
                      'Современные технологии',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ApiOutlined style={{ marginRight: 8 }} />
                    Легкая интеграция
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Подключение любых API',
                      'Гибкая архитектура',
                      'Современные стандарты',
                      'Простое масштабирование',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ControlOutlined style={{ marginRight: 8 }} />
                    Уникальный пользовательский опыт
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Специфичные для Вашего бизнеса',
                      'Интуитивный интерфейс',
                      'Продвинутая фильтрация',
                      'Интерактивные элементы',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card
          style={{ backgroundColor: '#f6ffed', border: '2px solid #52c41a' }}
        >
          <Title level={4} style={{ marginTop: 0, color: '#52c41a' }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Почему кастомный фронтенд идеален для HansKonner
          </Title>
          <List
            size="large"
            dataSource={[
              'Большой каталог инструментов требует продвинутой системы фильтрации',
              'Работа с дилерами нуждается в индивидуальных кабинетах и логике',
              'Технические характеристики требуют специальной визуализации',
              'Интеграции с ERP, складом и 1С должны быть бесшовными',
              'Профессиональный бренд заслуживает уникального интерфейса',
              'Масштабирование и добавление новых брендов без ограничений платформы',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{
                    color: '#52c41a',
                    marginRight: 12,
                    fontSize: '20px',
                  }}
                />
                <Text strong style={{ fontSize: '16px' }}>
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
    id: 'comparison',
    header: 'Сравнение подходов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ textAlign: 'center', marginTop: 0 }}>
            Что выбрать для HansKonner?
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                title={
                  <Space>
                    <AppstoreOutlined style={{ color: '#1890ff' }} />
                    <Text strong>Битрикс (Аспро)</Text>
                  </Space>
                }
                style={{ height: '100%' }}
              >
                <Space
                  orientation="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <List
                    size="small"
                    dataSource={[
                      '✓ Быстрый запуск интернет-магазина',
                      '✓ Готовая работа с каталогом',
                      '✓ Личные кабинеты дилеров',
                      '✓ Интеграция с 1С из коробки',
                      '✓ Управление контентом без программиста',
                      '✓ Множество готовых модулей',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0', border: 'none' }}>
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
                  <Divider style={{ margin: '8px 0' }} />
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Идеально, если нужен быстрый запуск с проверенными функциями
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                title={
                  <Space>
                    <CodeOutlined
                      style={{ color: '#52c41a', fontSize: '24px' }}
                    />
                    <Text strong style={{ fontSize: '18px' }}>
                      Кастомный фронтенд
                    </Text>
                    <Tag color="success" style={{ marginLeft: 8 }}>
                      Рекомендуем
                    </Tag>
                  </Space>
                }
                style={{
                  height: '100%',
                  border: '2px solid #52c41a',
                  backgroundColor: '#f6ffed',
                }}
              >
                <Space
                  orientation="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <List
                    size="small"
                    dataSource={[
                      '✓ Полная кастомизация под задачи',
                      '✓ Максимальная производительность',
                      '✓ Уникальный пользовательский опыт',
                      '✓ Гибкая интеграция с любыми системами',
                      '✓ Полный контроль над функциональностью',
                      '✓ Современные технологии',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0', border: 'none' }}>
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
                  <Divider style={{ margin: '8px 0' }} />
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Идеально, если нужен уникальный продукт с полным контролем
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card
          style={{ backgroundColor: '#f6ffed', border: '2px solid #52c41a' }}
        >
          <Title level={5} style={{ marginTop: 0, color: '#52c41a' }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Рекомендация для HansKonner
          </Title>
          <Paragraph style={{ marginBottom: 0, fontSize: '16px' }}>
            <Text strong>
              Для Вашего бизнеса мы рекомендуем кастомный фронтенд.
            </Text>
            <br />
            <br />
            Учитывая Вашу специфику — большой каталог инструментов, работу с
            дилерской сетью, необходимость сложных фильтров и интеграций —
            именно кастомный фронтенд даст Вам максимальную гибкость,
            производительность и возможность создать уникальный пользовательский
            опыт, который выделит HansKonner среди конкурентов.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'features-for-hanskonner',
    header: 'Что мы можем сделать для HansKonner',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Функции для B2B клиентов
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <UserOutlined
                    style={{ fontSize: '24px', color: '#1890ff' }}
                  />
                  <Text strong>Личные кабинеты дилеров</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Персональные прайс-листы',
                      'История заказов',
                      'Управление квотами',
                      'Доступ к маркетинговым материалам',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text style={{ fontSize: '12px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <SearchOutlined
                    style={{ fontSize: '24px', color: '#52c41a' }}
                  />
                  <Text strong>Умный поиск и фильтры</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Поиск по всем характеристикам',
                      'Множественная фильтрация',
                      'Сравнение товаров',
                      'Рекомендации по совместимости',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text style={{ fontSize: '12px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <ShoppingCartOutlined
                    style={{ fontSize: '24px', color: '#faad14' }}
                  />
                  <Text strong>B2B заказы</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Крупные заказы',
                      'Отложенные заказы',
                      'Работа со счетами',
                      'Отслеживание статусов',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text style={{ fontSize: '12px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <ApiOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                  <Text strong>Интеграции</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Синхронизация с 1С',
                      'Подключение склада',
                      'Интеграция с CRM',
                      'Связь с ERP системами',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text style={{ fontSize: '12px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <BarChartOutlined
                    style={{ fontSize: '24px', color: '#52c41a' }}
                  />
                  <Text strong>Аналитика</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Поведение пользователей',
                      'Популярные товары',
                      'Конверсия в заказы',
                      'Эффективность каналов',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text style={{ fontSize: '12px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <MobileOutlined
                    style={{ fontSize: '24px', color: '#faad14' }}
                  />
                  <Text strong>Мобильная версия</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Адаптивный дизайн',
                      'Быстрая загрузка',
                      'Удобная навигация',
                      'Оформление с мобильного',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0' }}>
                        <Text style={{ fontSize: '12px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'additional-features',
    header: 'Дополнительные возможности',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Что еще мы можем предложить
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{ backgroundColor: '#e6f7ff', height: '100%' }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <FolderOutlined
                    style={{
                      fontSize: '32px',
                      color: '#1890ff',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>Объединение каталогов</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Единый каталог для всех Ваших брендов (HansKonner, Sturm) с
                    удобной навигацией и фильтрацией
                  </Paragraph>
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
                  <LockOutlined
                    style={{
                      fontSize: '32px',
                      color: '#52c41a',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>Безопасность</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Защита данных, безопасные платежи, контроль доступа для
                    разных типов пользователей
                  </Paragraph>
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
                  <GlobalOutlined
                    style={{
                      fontSize: '32px',
                      color: '#faad14',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>SEO оптимизация</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Улучшение видимости в поисковых системах, правильная
                    структура, быстрая индексация
                  </Paragraph>
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
                  <DashboardOutlined
                    style={{
                      fontSize: '32px',
                      color: '#52c41a',
                      marginBottom: 8,
                    }}
                  />
                  <Text strong>Администрирование</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Удобная панель управления для обновления каталога, работы с
                    заказами, аналитики
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'our-process',
    header: 'Как мы работаем',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Процесс сотрудничества
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="default"
            stepInterval={2000}
            items={[
              {
                title: 'Знакомство и анализ',
                description:
                  'Изучаем Ваш бизнес, обсуждаем задачи, анализируем текущее состояние',
                icon: <TeamOutlined />,
              },
              {
                title: 'Техническое предложение',
                description:
                  'Подготавливаем детальное предложение с описанием решения, сроков, этапов',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Согласование и планирование',
                description:
                  'Уточняем детали, согласовываем подход, формируем план работы',
                icon: <SettingOutlined />,
              },
              {
                title: 'Разработка',
                description:
                  'Регулярные демо, обратная связь на каждом этапе, гибкая работа с изменениями',
                icon: <CodeOutlined />,
              },
              {
                title: 'Запуск',
                description:
                  'Тестирование, обучение команды, запуск проекта в работу',
                icon: <RocketOutlined />,
              },
              {
                title: 'Поддержка',
                description:
                  'Постоянная поддержка, развитие, добавление функций',
                icon: <SyncOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Наши принципы работы
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text strong>Прозрачность</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Регулярные отчёты, понятные этапы, открытое общение
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <CheckCircleOutlined
                  style={{ color: '#1890ff', marginRight: 8 }}
                />
                <Text strong>Гибкость</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Адаптация под Ваши потребности, возможность изменений в
                  процессе
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <CheckCircleOutlined
                  style={{ color: '#faad14', marginRight: 8 }}
                />
                <Text strong>Качество</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Современные технологии, чистый код, тестирование, надёжность
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text strong>Партнёрство</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Долгосрочное сотрудничество, понимание Вашего бизнеса,
                  развитие вместе
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'why-us',
    header: 'Почему мы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Наши преимущества
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <CodeOutlined
                    style={{ fontSize: '32px', color: '#1890ff' }}
                  />
                  <Text strong>Опыт</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Создали множество успешных проектов для B2B клиентов
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <BuildOutlined
                    style={{ fontSize: '32px', color: '#52c41a' }}
                  />
                  <Text strong>Технологии</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Используем современный стек и лучшие практики
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <TeamOutlined
                    style={{ fontSize: '32px', color: '#faad14' }}
                  />
                  <Text strong>Команда</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Профессионалы с глубокой экспертизой в веб-разработке
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <ApiOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
                  <Text strong>Интеграции</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Опыт работы с 1С, CRM, ERP и другими системами
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <SafetyOutlined
                    style={{ fontSize: '32px', color: '#52c41a' }}
                  />
                  <Text strong>Надёжность</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Стабильная работа, безопасность, поддержка
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <ThunderboltOutlined
                    style={{ fontSize: '32px', color: '#faad14' }}
                  />
                  <Text strong>Результат</Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Фокусируемся на бизнес-результате, а не только на
                    технологиях
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Мы понимаем специфику Вашего бизнеса
          </Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Работа с инструментами требует особого подхода: большие каталоги,
            сложные характеристики, работа с дилерами, интеграции со складом и
            учётными системами. Мы имеем опыт создания подобных решений и
            понимаем, что важно для Вашего бизнеса.
          </Paragraph>
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
        <Card style={{ maxWidth: '800px', width: '100%' }}>
          <Space orientation="vertical" size="small" style={{ width: '100%' }}>
            <Title
              level={3}
              style={{ textAlign: 'center', marginTop: 0, marginBottom: 8 }}
            >
              Свяжитесь с нами
            </Title>
            <Divider style={{ margin: '8px 0' }} />
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
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
                  Технический директор компании Проксима
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
                    <Link href="tel:+79085550606" style={{ fontSize: '15px' }}>
                      8 908 555 0606
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
                      href="mailto:pnovikov@proxima.systems"
                      style={{ fontSize: '15px' }}
                    >
                      pnovikov@proxima.systems
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
                      href="https://proxima.systems"
                      target="_blank"
                      style={{ fontSize: '15px' }}
                    >
                      proxima.systems
                    </Link>
                  </Space>
                </Space>
              </Space>
            </Card>
            <Card
              size="small"
              style={{ backgroundColor: '#e6f7ff', marginTop: 8 }}
            >
              <Paragraph
                style={{
                  marginBottom: 0,
                  textAlign: 'center',
                  fontSize: '14px',
                }}
              >
                <Text strong>
                  Готовы обсудить, как мы можем помочь Вашему бизнесу
                </Text>
              </Paragraph>
              <Paragraph
                style={{
                  marginTop: 4,
                  marginBottom: 0,
                  textAlign: 'center',
                  fontSize: '13px',
                }}
              >
                <Text type="secondary">
                  Предложим оптимальное решение и расскажем подробнее о процессе
                  работы
                </Text>
              </Paragraph>
            </Card>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'thank-you',
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
        <Card style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Title level={1} style={{ marginTop: 0, marginBottom: 0 }}>
              Благодарим за внимание
            </Title>
            <Divider />
            <Space
              orientation="vertical"
              size="middle"
              style={{ width: '100%' }}
            >
              <img
                src={hanskonnerLogo}
                alt="HansKonner"
                style={{
                  maxWidth: '200px',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <Paragraph
                style={{
                  fontSize: 'var(--app-font-size-lg)',
                  marginBottom: 0,
                }}
              >
                Готовы обсудить создание современного сайта для HansKonner
              </Paragraph>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
];
