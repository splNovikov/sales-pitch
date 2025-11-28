import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
} from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  ShopOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  GlobalOutlined,
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
  ApiOutlined,
  CreditCardOutlined,
  PhoneOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  BuildOutlined,
  TrophyOutlined,
  CodeOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { type SlideData } from '~widgets/slides';
import smzSolutionImage from './solution-image.svg';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for SMZ Solution presentation
 * Our solution: 3 variants with comparison
 */
export const smzSolutionSlides: SlideData[] = [
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
            НАШЕ РЕШЕНИЕ ДЛЯ СМЗ
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Три варианта реализации с красивым дизайном
          </Paragraph>
          <div
            style={{
              marginTop: 'var(--app-spacing-lg)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={smzSolutionImage}
              alt="SMZ Solution Design"
              style={{
                maxWidth: '600px',
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          27.11.2025
        </Text>
      </Space>
    ),
  },
  {
    id: 'solution-variants',
    header: 'Варианты реализации решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <Card>
              <Title level={3} style={{ marginTop: 0 }}>
                <RocketOutlined
                  style={{
                    marginRight: 'var(--app-spacing-xs)',
                    color: 'var(--app-color-primary)',
                  }}
                />
                Вариант 1: Новый шаблон Bitrix
              </Title>
              <Paragraph>
                <Text strong>
                  Разработка нового сайта на более новом шаблоне Bitrix
                </Text>
              </Paragraph>
              <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <div>
                  <Text strong>Сроки:</Text>
                  <Paragraph style={{ margin: '4px 0' }}>
                    3-4 месяца
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Современный дизайн',
                      'Быстрый старт',
                      'Готовый функционал',
                      'Красивая визуализация',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>
                    )}
                  />
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card
              style={{
                backgroundColor: '#e6f7ff',
                border: '2px solid #1890ff',
              }}
            >
              <Tag
                color="blue"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '12px',
                }}
              >
                РЕКОМЕНДУЕТСЯ
              </Tag>
              <Title level={3} style={{ marginTop: 0 }}>
                <ThunderboltOutlined
                  style={{
                    marginRight: 'var(--app-spacing-xs)',
                    color: 'var(--app-color-primary)',
                  }}
                />
                Вариант 2: Кастомный интерфейс
              </Title>
              <Paragraph>
                <Text strong>
                  Пересоздание сайта с кастомным интерфейсом (как РусКон)
                </Text>
              </Paragraph>
              <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <div>
                  <Text strong>Сроки:</Text>
                  <Paragraph style={{ margin: '4px 0' }}>
                    6-8 месяцев
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Дороже, но гораздо круче',
                      'Максимальная гибкость',
                      'Идеальный UX',
                      'Уникальный дизайн',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>
                    )}
                  />
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card style={{ backgroundColor: '#fff1f0', opacity: 0.7 }}>
              <Tag
                color="red"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '12px',
                }}
              >
                НЕ РЕКОМЕНДУЕТСЯ
              </Tag>
              <Title level={3} style={{ marginTop: 0 }}>
                <CloseOutlined
                  style={{
                    marginRight: 'var(--app-spacing-xs)',
                    color: '#ff4d4f',
                  }}
                />
                Вариант 3: Доработка текущего
              </Title>
              <Paragraph>
                <Text strong type="danger">
                  Доработка существующего сайта
                </Text>
              </Paragraph>
              <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <div>
                  <Text strong>Сроки:</Text>
                  <Paragraph style={{ margin: '4px 0' }}>
                    1-2 месяца
                  </Paragraph>
                </div>
                <div>
                  <Text strong type="danger">
                    Проблемы:
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Ограничения старого шаблона',
                      'Технический долг',
                      'Сложность поддержки',
                      'Не рекомендуется',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <Text type="danger">• {item}</Text>
                      </List.Item>
                    )}
                  />
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'variant1-details',
    header: 'Вариант 1: Новый шаблон Bitrix',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Описание решения
          </Title>
          <Paragraph>
            Разработка нового сайта на базе <Text strong>1С-Битрикс</Text> с
            использованием <Text strong>более нового шаблона Bitrix</Text> для
            максимально красивого и функционального дизайна.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Преимущества
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <List
                  size="small"
                  dataSource={[
                    'Современный дизайн шаблона',
                    'Быстрый старт разработки',
                    'Готовый функционал интернет-магазина',
                    'Красивая визуализация товаров',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <List
                  size="small"
                  dataSource={[
                    'Оптимизация под задачи компании',
                    'Интеграция с 1С:УП 8.3',
                    'Многоуровневые цены',
                    'Адаптивная верстка',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Сроки и стоимость
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    3 - 4 месяца
                  </Title>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                    300 000 - 400 000 рублей
                  </Title>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'variant2-details',
    header: 'Вариант 2: Кастомный интерфейс (РЕКОМЕНДУЕТСЯ)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card
          style={{ backgroundColor: '#e6f7ff', border: '2px solid #1890ff' }}
        >
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Описание решения
          </Title>
          <Paragraph>
            Пересоздание сайта с <Text strong>кастомным интерфейсом</Text> (как
            у РусКона). Это <Text strong>дороже, но гораздо гибче и круче</Text>
            . Полностью уникальный дизайн и функционал, заточенный под ваши
            задачи.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Почему это лучший выбор?
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                <Text strong>Максимальная гибкость:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Любой функционал под ваши задачи',
                    'Уникальный дизайн',
                    'Нет ограничений шаблона',
                    'Полная кастомизация',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Идеальный UX:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Интерфейс заточен под ваши процессы',
                    'Максимальное удобство для клиентов',
                    'Современные технологии',
                    'Премиум-качество',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>Долгосрочная инвестиция:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Нет технического долга',
                    'Легко масштабировать',
                    'Простота поддержки',
                    'Конкурентное преимущество',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Пример: РусКон</Text>
                <List
                  size="small"
                  dataSource={[
                    'Эталон в отрасли',
                    'Современный дизайн',
                    'Высокий функционал',
                    'Удобство использования',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
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
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Сроки и стоимость
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    6 - 8 месяцев
                  </Title>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                    От 700 000 (точнее после стадии анализа)
                  </Title>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Рекомендация
          </Title>
          <Paragraph>
            <Text strong>
              Это лучший выбор для долгосрочной перспективы. Дороже, но гораздо
              гибче и круче. Результат будет превосходить конкурентов и
              обеспечит конкурентное преимущество на рынке.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'architecture',
    header: 'Архитектура решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Компоненты системы
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: '1С-Битрикс (CMS)',
                description:
                  'Базовая платформа для управления контентом и интернет-магазином',
                icon: <GlobalOutlined />,
              },
              {
                title: 'Новый шаблон Bitrix / Кастомный интерфейс',
                description:
                  'Современный шаблон или полностью кастомный интерфейс с уникальным дизайном',
                icon: <TrophyOutlined />,
              },
              {
                title: 'Интеграция с 1С:УП 8.3',
                description:
                  'Обмен данными через CommerceML 2.0 или REST-шлюз с защищённым контуром',
                icon: <DatabaseOutlined />,
              },
              {
                title: 'Модуль интернет-магазина',
                description:
                  'Каталог, корзина, оформление заказа, личный кабинет, многоуровневые цены',
                icon: <ShopOutlined />,
              },
              {
                title: 'Модуль формирования счетов',
                description:
                  'Автоматическое создание PDF-счетов и отправка на email',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Система безопасности',
                description:
                  'Защищённый обмен данными, HTTPS, токены, логирование',
                icon: <SafetyOutlined />,
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'functional',
    header: 'Функциональность решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Каталог и поиск
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <List
                  size="small"
                  dataSource={[
                    'Поиск с подсказками по артикулу / названию / характеристикам',
                    'Отображение актуальных остатков из 1С',
                    'Отображение цен с учётом уровня клиента',
                    'Фильтры (тип товара, размеры, ГОСТ и др.)',
                    'Категоризация товаров',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                <Title level={5} style={{ marginTop: 0, fontSize: '14px' }}>
                  Особенности
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Быстрый поиск (≤ 1 сек)',
                    'Умные подсказки',
                    'Фильтрация в реальном времени',
                    'Синхронизация с 1С каждые 5-30 минут',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
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
            <CreditCardOutlined style={{ marginRight: 8 }} />
            Корзина, оформление заказа и личный кабинет
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0, fontSize: '14px' }}>
                  Корзина и оформление
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Добавление товаров в корзину',
                    'Пересчёт сумм с учётом ценового уровня',
                    'Учёт скидок и специальных предложений',
                    'Автоматическое формирование счёта PDF',
                    'Сохранение черновиков заказов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, fontSize: '14px' }}>
                  Личный кабинет и многоуровневые цены
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Многоуровневые цены определяются личным кабинетом',
                    'Розничные цены (B2C)',
                    'Оптовые цены (B2B)',
                    'Дилерские цены',
                    'История заказов с детализацией',
                    'Повторные заказы (быстрое оформление)',
                    'Отслеживание статусов заказов',
                    'Управление профилем и реквизитами',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
    id: 'integration',
    header: 'Интеграция с 1С:УП 8.3',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Механизм обмена данными
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card>
                <Title level={5} style={{ marginTop: 0 }}>
                  <FileTextOutlined
                    style={{
                      marginRight: 8,
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  CommerceML 2.0
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Стандартный формат обмена',
                    'Поддержка в 1С:УП 8.3',
                    'Обмен каталогом, ценами, остатками',
                    'Файловый обмен через защищённый каталог',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <Title level={5} style={{ marginTop: 0 }}>
                  <ApiOutlined
                    style={{
                      marginRight: 8,
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  REST-шлюз (альтернатива)
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'REST API для обмена данными',
                    'Промежуточный сервер-шлюз',
                    'Токены доступа',
                    'Реальное время обновления',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
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
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Регулярность обновления
          </Title>
          <Paragraph>
            Поддержка регулярного обновления остатков и цен:{' '}
            <Text strong>5–30 минут</Text> (настраивается под потребности
            компании).
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Передача данных обратно в 1С
          </Title>
          <Paragraph>
            Опционально: передача выписанных счетов обратно в 1С для
            автоматизации учёта.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'security',
    header: 'Безопасность 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            КРИТИЧЕСКОЕ ТРЕБОВАНИЕ
          </Title>
          <Paragraph style={{ fontSize: '16px', fontStyle: 'italic' }}>
            <Text strong>1С НЕ подключена напрямую к интернету</Text>
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Наше решение: Защищённый контур
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Вариант 1: Промежуточный сервер-шлюз</Text>
                <Paragraph style={{ fontSize: '12px', marginTop: '8px' }}>
                  Отдельный сервер между сайтом и 1С, который обеспечивает
                  безопасный обмен данными
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Вариант 2: Файловый обмен</Text>
                <Paragraph style={{ fontSize: '12px', marginTop: '8px' }}>
                  Обмен через защищённый каталог на файловом сервере с
                  ограниченным доступом
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Вариант 3: API-прослойка с токенами</Text>
                <Paragraph style={{ fontSize: '12px', marginTop: '8px' }}>
                  REST API с токенами доступа и ограничением IP-адресов
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Технические меры безопасности
          </Title>
          <List
            size="small"
            dataSource={[
              'HTTPS для всех соединений',
              'Токены/ключи доступа',
              'Логирование всех запросов',
              'Ограничение частоты синхронизации',
              'Возможность экстренного отключения обмена',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
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
            <FileTextOutlined style={{ marginRight: 8 }} />
            Схема безопасности
          </Title>
          <Paragraph>
            В коммерческом предложении будет приложена{' '}
            <Text strong>детальная схема безопасности</Text> с описанием
            архитектуры обмена данными и всех мер защиты.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'timeline',
    header: 'Сроки реализации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalendarOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Этапы разработки
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Этап 1: Анализ и проектирование (2-3 недели)',
                description:
                  'Изучение требований, проектирование архитектуры, выбор оптимального решения для интеграции с 1С',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Этап 2: Установка и настройка (1-2 недели)',
                description:
                  'Установка 1С-Битрикс, нового шаблона или начало разработки кастомного интерфейса',
                icon: <SettingOutlined />,
              },
              {
                title: 'Этап 3: Интеграция с 1С (2-3 недели)',
                description:
                  'Настройка обмена данными через CommerceML или REST, тестирование синхронизации',
                icon: <DatabaseOutlined />,
              },
              {
                title: 'Этап 4: Разработка функционала (3-4 недели)',
                description:
                  'Доработка каталога, корзины, личного кабинета, модуля формирования счетов',
                icon: <CodeOutlined />,
              },
              {
                title: 'Этап 5: Дизайн и кастомизация (2-3 недели)',
                description:
                  'Настройка дизайна под бренд компании, кастомизация шаблона или разработка уникального интерфейса',
                icon: <TrophyOutlined />,
              },
              {
                title: 'Этап 6: Тестирование и запуск (2 недели)',
                description:
                  'Комплексное тестирование, исправление ошибок, подготовка к запуску',
                icon: <CheckCircleOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Сроки по вариантам
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    3-4 месяца
                  </Title>
                  <Text>Вариант 1: Новый шаблон</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                    6-8 месяцев
                  </Title>
                  <Text>Вариант 2: Кастомный</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#ff4d4f' }}>
                    1-2 месяца
                  </Title>
                  <Text type="danger">Вариант 3: Доработка</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'advantages',
    header: 'Преимущества нашего решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Почему выбирают нас
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <CheckCircleOutlined
                    style={{ color: '#1890ff', fontSize: '24px' }}
                  />
                  <Text strong>Опыт работы с Bitrix</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Глубокое знание платформы и её возможностей
                  </Text>
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
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', fontSize: '24px' }}
                  />
                  <Text strong>Интеграция с 1С</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Опыт настройки безопасного обмена данными
                  </Text>
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
                  <CheckCircleOutlined
                    style={{ color: '#faad14', fontSize: '24px' }}
                  />
                  <Text strong>Красивый дизайн</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Новый шаблон или кастомный интерфейс
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <CheckCircleOutlined
                    style={{ color: '#ff4d4f', fontSize: '24px' }}
                  />
                  <Text strong>Безопасность</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Гарантированная защита данных 1С
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <CheckCircleOutlined
                    style={{ color: '#1890ff', fontSize: '24px' }}
                  />
                  <Text strong>Поддержка</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Техническая поддержка и сопровождение
                  </Text>
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
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', fontSize: '24px' }}
                  />
                  <Text strong>Сроки</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Чёткие сроки и этапы разработки
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
              Благодарю за внимание
            </Title>
            <Divider />
            <Space
              orientation="vertical"
              size="middle"
              style={{ width: '100%' }}
            >
              <Space direction="vertical" size="small">
                <Text strong style={{ fontSize: '18px' }}>
                  Новиков Павел
                </Text>
                <Text type="secondary" style={{ fontSize: '16px' }}>
                  Технический директор компании Проксима
                </Text>
              </Space>
              <Divider style={{ margin: '16px 0' }} />
              <Space size="middle">
                <PhoneOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link
                  href="tel:+79085550606"
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                >
                  8 908 555 0606
                </Link>
              </Space>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
];
