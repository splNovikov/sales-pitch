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
  SyncOutlined,
  AppstoreOutlined,
  TrophyOutlined,
  CarOutlined,
  DollarOutlined,
  ReloadOutlined,
  HistoryOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import hanskonnerLogo from './hanskonner-logo.png';
import ruskonMain1 from './ruskon_main_1.png';
import ruskonMain2 from './ruskon_main_2.png';
import ruskonMain3 from './ruskon_main_3.png';
import ruskonMain4 from './ruskon_main_4.png';
import ruskonMain5 from './ruskon_main_5.png';
import ruskonPdp1 from './ruskon_pdp_1.png';
import ruskonPdp2 from './ruskon_pdp_2.png';
import ruskonPdp3 from './ruskon_pdp_3.png';
import ruskonSubcategory from './ruskon_subcategory.png';
import ruskonProfile1 from './ruskon_profile_1.png';
import ruskonProfile2 from './ruskon_profile_2.png';
import ruskonOrder from './ruskon_order.png';
import ruskonOrders from './ruskon_orders.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Presentation metadata constants
 * These are used both in slides and in presentations.config.ts
 */
export const hanskonnerWebsiteCreatedAt = '2025-11-27T00:00:00Z';
export const hanskonnerWebsiteTitle = 'Hanskonner — сайт';

/**
 * Slides data for HansKonner website development presentation
 * Презентация о веб-разработке для HansKonner
 * Фокус на объяснении процесса разработки и двух вариантах: Шаблонный vs Кастомный фронтенд
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
                    Шаблонный фронтенд
                  </Title>
                  <Tag
                    color="blue"
                    style={{ fontSize: '14px', padding: '4px 12px' }}
                  >
                    Готовая платформа
                  </Tag>
                  <div style={{ marginTop: 8 }}>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Шаблон 1С-Битрикс: Аспро
                    </Text>
                  </div>
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
    header: 'Шаблонный фронтенд — когда это идеально',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Основные преимущества
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
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Стандартный набор функций для интернет-магазина: корзина,
                    каталог, базовые личные кабинеты. Подходит для типовых
                    задач.
                  </Paragraph>
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
                    <SettingOutlined style={{ marginRight: 8 }} />
                    Быстрый старт
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Возможность запустить сайт за короткий срок с готовыми
                    шаблонами и базовыми настройками без глубокой кастомизации.
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Когда это действительно подходит
          </Title>
          <List
            size="large"
            dataSource={[
              'Нужен быстрый запуск стандартного интернет-магазина',
              'Требуется базовый набор функций без специфических требований',
              'Важна возможность самостоятельного обновления контента без программистов',
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
        <Card
          style={{ backgroundColor: '#fff7e6', border: '1px solid #faad14' }}
        >
          <Title level={5} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Важно понимать
          </Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Шаблонный фронтенд имеет ограничения по кастомизации и не подходит
            для сложных B2B-задач, уникальной логики работы с дилерами и
            продвинутых интеграций. Для профессиональных решений, как у
            HansKonner, лучше выбрать кастомный фронтенд.
          </Paragraph>
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
      </Space>
    ),
  },
  {
    id: 'why-custom-for-hanskonner',
    header: 'Почему кастомный фронтенд идеален для HansKonner',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card
          style={{ backgroundColor: '#f6ffed', border: '2px solid #52c41a' }}
        >
          <Title level={4} style={{ marginTop: 0, color: '#52c41a' }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Кастомный фронтенд — идеальное решение для Вашего бизнеса
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Индивидуальный подход
          </Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Кастомный фронтенд позволяет создать решение, полностью
            адаптированное под специфику Вашего бизнеса. Мы не ограничены
            рамками готовых шаблонов и можем реализовать любую логику работы с
            каталогом, дилерами и интеграциями, необходимую для эффективной
            работы HansKonner.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-intro',
    header: 'Похожий кейс: Рускон',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Почему мы решили показать этот кейс
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
            Перед тем, как рассказать о возможностях для HansKonner, мы хотим
            показать Вам реальный пример работы с похожим проектом.
          </Paragraph>
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '1px solid #1890ff',
              marginTop: 16,
            }}
          >
            <Title level={5} style={{ marginTop: 0, color: '#1890ff' }}>
              <CheckCircleOutlined style={{ marginRight: 8 }} />
              Кейс Рускон — максимально похож на Ваш
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Мы специально выбрали этот проект, потому что он решает те же
              задачи, что и проект для HansKonner: большой каталог инструментов,
              работа с дилерами, интеграции, B2B функционал. Это поможет Вам
              увидеть, как наши решения работают в похожей ситуации.
            </Paragraph>
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-about',
    header: 'О проекте Рускон',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Что мы сделали
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong style={{ fontSize: '16px' }}>
                    <ShopOutlined style={{ marginRight: 8 }} />
                    Каталог инструментов
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Создали структурированный каталог с детальными
                    характеристиками, фотографиями, фильтрами и поиском для
                    удобной работы с большим ассортиментом инструментов.
                  </Paragraph>
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
                  <Text strong style={{ fontSize: '16px' }}>
                    <UserOutlined style={{ marginRight: 8 }} />
                    Личные кабинеты дилеров
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Реализовали систему персональных кабинетов с индивидуальными
                    ценами, квотами, историей заказов и доступом к маркетинговым
                    материалам.
                  </Paragraph>
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
                  <Text strong style={{ fontSize: '16px' }}>
                    <ApiOutlined style={{ marginRight: 8 }} />
                    Интеграции
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Настроили синхронизацию с 1С, интеграцию со складом для
                    отображения наличия в реальном времени и автоматическую
                    обработку заказов.
                  </Paragraph>
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
                  <Text strong style={{ fontSize: '16px' }}>
                    <SearchOutlined style={{ marginRight: 8 }} />
                    Умный поиск
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Внедрили продвинутую систему поиска с множественной
                    фильтрацией по характеристикам, сравнением товаров и
                    рекомендациями.
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
    id: 'ruskon-main-1',
    header: 'Рускон: Главная страница',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonMain1}
              alt="Рускон - Главная страница 1"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-main-2',
    header: 'Рускон: Главная страница',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonMain2}
              alt="Рускон - Главная страница 2"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-main-3',
    header: 'Рускон: Главная страница',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonMain3}
              alt="Рускон - Главная страница 3"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-main-4',
    header: 'Рускон: Главная страница',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonMain4}
              alt="Рускон - Главная страница 4"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-main-5',
    header: 'Рускон: Главная страница',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonMain5}
              alt="Рускон - Главная страница 5"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-pdp-1',
    header: 'Рускон: Страница товара',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonPdp1}
              alt="Рускон - Страница товара 1"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-pdp-2',
    header: 'Рускон: Страница товара',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonPdp2}
              alt="Рускон - Страница товара 2"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-pdp-3',
    header: 'Рускон: Страница товара',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonPdp3}
              alt="Рускон - Страница товара 3"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-subcategory',
    header: 'Рускон: Подкатегория',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Card style={{ textAlign: 'center' }}>
            <img
              src={ruskonSubcategory}
              alt="Рускон - Подкатегория"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
            />
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-showcase-1',
    header: 'Личный кабинет B2B: Профиль',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <UserOutlined style={{ marginRight: 8 }} />
                Личный кабинет дилера: Профиль
              </Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
                Профессиональная реализация профиля дилера с персональными
                настройками, индивидуальными ценами и полным контролем над
                данными
              </Paragraph>
            </Card>
            <Card style={{ textAlign: 'center' }}>
              <img
                src={ruskonProfile1}
                alt="Личный кабинет B2B - Профиль"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                }}
              />
            </Card>
            <Card
              style={{
                backgroundColor: '#f6ffed',
                border: '1px solid #52c41a',
              }}
            >
              <Row gutter={[16, 8]}>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'Индивидуальные настройки профиля',
                      'Персональные цены для дилера',
                      'Управление контактными данными',
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
                </Col>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'Удобный и интуитивный интерфейс',
                      'Профессиональный уровень реализации',
                      'Интеграция с учетными системами',
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
                </Col>
              </Row>
            </Card>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-showcase-2',
    header: 'Личный кабинет B2B: Профиль (продолжение)',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <UserOutlined style={{ marginRight: 8 }} />
                Дополнительные возможности профиля
              </Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
                Расширенные функции профиля дилера: управление квотами,
                настройками доступа и детальная информация для эффективной
                работы
              </Paragraph>
            </Card>
            <Card style={{ textAlign: 'center' }}>
              <img
                src={ruskonProfile2}
                alt="Личный кабинет B2B - Профиль (продолжение)"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                }}
              />
            </Card>
            <Card
              style={{
                backgroundColor: '#e6f7ff',
                border: '1px solid #1890ff',
              }}
            >
              <Row gutter={[16, 8]}>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'Управление квотами и лимитами',
                      'Настройки прав доступа',
                      'Детальная информация о дилере',
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
                </Col>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'История взаимодействий',
                      'Полный контроль над данными',
                      'Гибкость настроек под потребности',
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
                </Col>
              </Row>
            </Card>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-showcase-orders',
    header: 'Личный кабинет B2B: Заказы',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <ShoppingCartOutlined style={{ marginRight: 8 }} />
                Список всех заказов
              </Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
                Удобное управление всеми заказами: фильтрация, поиск, сортировка
                и быстрый доступ к детальной информации по каждому заказу
              </Paragraph>
            </Card>
            <Card style={{ textAlign: 'center' }}>
              <img
                src={ruskonOrders}
                alt="Личный кабинет B2B - Заказы"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                }}
              />
            </Card>
            <Card
              style={{
                backgroundColor: '#f6ffed',
                border: '1px solid #52c41a',
              }}
            >
              <Row gutter={[16, 8]}>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'История всех заказов в одном месте',
                      'Фильтрация и поиск по заказам',
                      'Отображение статусов в реальном времени',
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
                </Col>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'Сортировка по различным параметрам',
                      'Быстрый доступ к деталям заказа',
                      'Понятный и удобный интерфейс',
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
                </Col>
              </Row>
            </Card>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-showcase-order',
    header: 'Личный кабинет B2B: Детализация заказа',
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
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <FileTextOutlined style={{ marginRight: 8 }} />
                Детальная информация о заказе
              </Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
                Полная детализация заказа: состав товаров, статусы, документы и
                отслеживание выполнения — всё в одном месте для удобной работы
                дилера
              </Paragraph>
            </Card>
            <Card style={{ textAlign: 'center' }}>
              <img
                src={ruskonOrder}
                alt="Личный кабинет B2B - Детализация заказа"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                }}
              />
            </Card>
            <Card
              style={{
                backgroundColor: '#fff7e6',
                border: '1px solid #faad14',
              }}
            >
              <Row gutter={[16, 8]}>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'Полная детализация состава заказа',
                      'Статусы выполнения в реальном времени',
                      'Информация о документах и счетах',
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
                </Col>
                <Col xs={24} sm={12}>
                  <List
                    size="small"
                    dataSource={[
                      'Отслеживание этапов выполнения',
                      'Удобный интерфейс для работы',
                      'Интеграция с учетными системами',
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
                </Col>
              </Row>
            </Card>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-advantages',
    header: 'В чём крутость кейса Рускон',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Ключевые возможности реализованы
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #1890ff',
                  height: '100%',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <DatabaseOutlined
                    style={{ fontSize: '32px', color: '#1890ff' }}
                  />
                  <Text strong style={{ fontSize: '16px', display: 'block' }}>
                    Синхронизация остатков
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    По множеству складов в реальном времени с автоматическим
                    обновлением доступности товаров
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f6ffed',
                  border: '1px solid #52c41a',
                  height: '100%',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <CarOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
                  <Text strong style={{ fontSize: '16px', display: 'block' }}>
                    Управление доставкой
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Полноценная система доставки с выбором способа, расчётом
                    стоимости и отслеживанием статусов
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#fff7e6',
                  border: '1px solid #faad14',
                  height: '100%',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <DollarOutlined
                    style={{ fontSize: '32px', color: '#faad14' }}
                  />
                  <Text strong style={{ fontSize: '16px', display: 'block' }}>
                    Многоуровневые цены
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Гибкая система цен для разных категорий дилеров с
                    автоматическим применением персональных условий
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #1890ff',
                  height: '100%',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <HistoryOutlined
                    style={{ fontSize: '32px', color: '#1890ff' }}
                  />
                  <Text strong style={{ fontSize: '16px', display: 'block' }}>
                    История заказов
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Полная история всех заказов с возможностью просмотра
                    деталей, статусов и документов по каждому заказу
                  </Paragraph>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f6ffed',
                  border: '1px solid #52c41a',
                  height: '100%',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <ReloadOutlined
                    style={{ fontSize: '32px', color: '#52c41a' }}
                  />
                  <Text strong style={{ fontSize: '16px', display: 'block' }}>
                    Повтор заказа
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    Удобная функция повторного заказа из истории с возможностью
                    корректировки количества и состава
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card
          style={{ backgroundColor: '#e6f7ff', border: '1px solid #1890ff' }}
        >
          <Title level={5} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Почему это важно
          </Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Все эти функции реализованы на практике и работают в реальном
            проекте Рускон. Это не обещания — это проверенные решения, которые
            мы можем применить и для Вашего проекта HansKonner.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'ruskon-similarity',
    header: 'Почему Рускон похож на HansKonner',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Ключевые сходства
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f6ffed',
                  border: '1px solid #52c41a',
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: '#52c41a',
                    fontSize: '24px',
                    marginBottom: 8,
                  }}
                />
                <Text strong style={{ fontSize: '16px', display: 'block' }}>
                  Большой каталог инструментов
                </Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Оба проекта требуют работы с обширным каталогом товаров,
                  множеством характеристик и вариантов комплектации.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #1890ff',
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: '#1890ff',
                    fontSize: '24px',
                    marginBottom: 8,
                  }}
                />
                <Text strong style={{ fontSize: '16px', display: 'block' }}>
                  Работа с дилерами
                </Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Система персональных кабинетов, индивидуальные цены, квоты и
                  управление отношениями с дилерами — одинаково важны для обоих
                  проектов.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#fff7e6',
                  border: '1px solid #faad14',
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: '#faad14',
                    fontSize: '24px',
                    marginBottom: 8,
                  }}
                />
                <Text strong style={{ fontSize: '16px', display: 'block' }}>
                  Интеграции с 1С и складом
                </Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Оба проекта нуждаются в синхронизации данных с учётными
                  системами, складами и автоматизации процессов B2B.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f6ffed',
                  border: '1px solid #52c41a',
                }}
              >
                <CheckCircleOutlined
                  style={{
                    color: '#52c41a',
                    fontSize: '24px',
                    marginBottom: 8,
                  }}
                />
                <Text strong style={{ fontSize: '16px', display: 'block' }}>
                  B2B фокус
                </Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Основная аудитория — профессиональные клиенты, которым нужны
                  крупные заказы, работа со счетами и специальные условия.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Почему это важно
          </Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Опыт работы с похожим проектом означает, что мы уже понимаем
            специфику Вашего бизнеса и знаем, какие решения действительно
            работают. Мы не экспериментируем — мы применяем проверенные подходы
            к Вашим задачам.
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
            <Card
              size="small"
              style={{ backgroundColor: '#fff7e6', marginTop: 8 }}
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
                    <Link href="tel:+79271108488" style={{ fontSize: '15px' }}>
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
