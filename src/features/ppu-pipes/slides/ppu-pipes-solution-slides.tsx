import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  ShopOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  FileTextOutlined,
  ApiOutlined,
  PhoneOutlined,
  MailOutlined,
  BuildOutlined,
  TrophyOutlined,
  CodeOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  CalculatorOutlined,
  EyeOutlined,
  BarChartOutlined,
  MobileOutlined,
  CloudOutlined,
} from '@ant-design/icons';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { ppuPipesSolutionCreatedAt } from './ppu-pipes-solution.meta';
// Импортируем изображения Рускона из папки hanskonner
import ruskonMain1 from '../../hanskonner/slides/ruskon_main_1.png';
import ruskonSubcategory from '../../hanskonner/slides/ruskon_subcategory.png';
import ruskonProfile1 from '../../hanskonner/slides/ruskon_profile_1.png';
import ruskonOrder from '../../hanskonner/slides/ruskon_order.png';
import ruskonPdp1 from '~features/hanskonner/slides/ruskon_pdp_1.png';

const { Title, Paragraph, Text, Link } = Typography;

export const ppuPipesSolutionSlides: SlideData[] = [
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
            Сбор требований для разработки B2B интернет-магазина
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
          {formatDateForSlide(ppuPipesSolutionCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'about-us',
    header: 'О нас',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Кто мы
          </Title>
          <Paragraph>
            <Text strong>Проксима</Text> — IT-компания, специализирующаяся на
            разработке современных веб-приложений, мобильных решений и платформ
            для автоматизации бизнес-процессов.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Наша специализация
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
                  <Text strong>Веб-разработка</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Современные веб-приложения и платформы
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
                  <MobileOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Мобильные решения</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Мобильные приложения и PWA
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
                  <DatabaseOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Интеграции</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Интеграция с 1С, CRM и другими системами
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
                  <CloudOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Облачные решения</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Масштабируемые облачные платформы
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
                  <ApiOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>API и микросервисы</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    RESTful API и микросервисная архитектура
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
                  <BarChartOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Аналитика</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    BI-решения и дашборды
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
    id: 'resources-analysis',
    header: 'Анализ предоставленных ресурсов',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Space
            orientation="vertical"
            size="small"
            style={{ width: '100%', marginBottom: '12px' }}
          >
            <Title level={4} style={{ marginTop: 0, marginBottom: 0 }}>
              <EyeOutlined
                style={{
                  marginRight: 8,
                  color: 'var(--app-color-primary)',
                  fontSize: '20px',
                }}
              />
              Что объединяет все предоставленные сайты
            </Title>
            <Paragraph
              style={{
                fontSize: '14px',
                marginBottom: 0,
                color: 'var(--app-color-text-secondary)',
              }}
            >
              Мы проанализировали примеры сайтов, которые Вы предоставили, и
              выявили общие паттерны и требования, которые важны для Вашего
              бизнеса.
            </Paragraph>
          </Space>

          <Divider style={{ margin: '12px 0' }} />

          <Row gutter={[16, 12]}>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                  height: '100%',
                }}
                bodyStyle={{ padding: '12px' }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '16px',
                    }}
                  >
                    <ShopOutlined
                      style={{
                        marginRight: 8,
                        color: '#52c41a',
                        fontSize: '16px',
                      }}
                    />
                    Каталог
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Обширные каталоги с большим количеством позиций',
                      'Детальная информация по каждой позиции',
                      'Структурированная категоризация',
                      'Множественные характеристики товаров',
                      'Фильтрация по характеристикам товаров',
                      'Актуальные цены и остатки из 1С',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{
                          padding: '4px 0',
                          borderBottom: 'none',
                        }}
                      >
                        <CheckCircleOutlined
                          style={{
                            color: '#52c41a',
                            marginRight: 8,
                            fontSize: '12px',
                          }}
                        />
                        <Text style={{ fontSize: '13px', lineHeight: '1.5' }}>
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
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
                bodyStyle={{ padding: '12px' }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '16px',
                    }}
                  >
                    <UserOutlined
                      style={{
                        marginRight: 8,
                        color: '#1890ff',
                        fontSize: '16px',
                      }}
                    />
                    Личный кабинет
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Многоуровневые цены',
                      'Просмотр истории заказов',
                      'Оформление оптового заказа',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{
                          padding: '4px 0',
                          borderBottom: 'none',
                        }}
                      >
                        <CheckCircleOutlined
                          style={{
                            color: '#1890ff',
                            marginRight: 8,
                            fontSize: '12px',
                          }}
                        />
                        <Text style={{ fontSize: '13px', lineHeight: '1.5' }}>
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
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
                bodyStyle={{ padding: '12px' }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '16px',
                    }}
                  >
                    <CalculatorOutlined
                      style={{
                        marginRight: 8,
                        color: '#faad14',
                        fontSize: '16px',
                      }}
                    />
                    Калькуляторы и формы
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Калькулятор сроков доставки по России/СНГ',
                      'Формы заявок с обратным звонком',
                      'Функция "купить в 1 клик"',
                      'Расчёт стоимости доставки',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{
                          padding: '4px 0',
                          borderBottom: 'none',
                        }}
                      >
                        <CheckCircleOutlined
                          style={{
                            color: '#faad14',
                            marginRight: 8,
                            fontSize: '12px',
                          }}
                        />
                        <Text style={{ fontSize: '13px', lineHeight: '1.5' }}>
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f9f0ff',
                  border: '1px solid #d3adf7',
                  height: '100%',
                }}
                bodyStyle={{ padding: '12px' }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '16px',
                    }}
                  >
                    <ApiOutlined
                      style={{
                        marginRight: 8,
                        color: '#722ed1',
                        fontSize: '16px',
                      }}
                    />
                    Интеграция с 1С и CRM
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Выгрузка товаров (изображение, название, характеристики)',
                      'Актуальные остатки',
                      'Актуальные цены',
                      'Экспорт заказов с сайта',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{
                          padding: '4px 0',
                          borderBottom: 'none',
                        }}
                      >
                        <CheckCircleOutlined
                          style={{
                            color: '#722ed1',
                            marginRight: 8,
                            fontSize: '12px',
                          }}
                        />
                        <Text style={{ fontSize: '13px', lineHeight: '1.5' }}>
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
      </Space>
    ),
  },
  {
    id: 'key-conclusions',
    header: 'Ключевые выводы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Что объединяет все проанализированные сайты
          </Title>
          <List
            size="default"
            dataSource={[
              'Все сайты ориентированы на B2B-аудиторию (строительные компании, ЖКХ, промышленные предприятия)',
              'Обязательны продвинутые фильтры для работы с большим каталогом',
              'Обязательна интеграция с 1С',
              'Требуется личный кабинет для работы с постоянными клиентами',
              'Требуется удобная работа с ценами, остатками и оформлением заказов',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
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
    id: 'solution-variants',
    header: 'Варианты реализации решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card>
              <Title level={3} style={{ marginTop: 0 }}>
                <RocketOutlined
                  style={{
                    marginRight: 'var(--app-spacing-xs)',
                    color: 'var(--app-color-primary)',
                  }}
                />
                Вариант 1: Сайт на шаблоне
              </Title>
              <Paragraph>
                <Text strong>
                  Разработка сайта на современном шаблоне Аспро
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
                  <Paragraph style={{ margin: '4px 0' }}>2-3 месяца</Paragraph>
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
                      'Экономия на дизайне и вёрстке',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>
                    )}
                  />
                </div>
                <Card
                  size="small"
                  style={{
                    backgroundColor: '#fff7e6',
                    border: '1px solid #ffd591',
                    marginTop: '8px',
                  }}
                  bodyStyle={{ padding: '12px' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Text strong style={{ fontSize: '14px', display: 'block' }}>
                      Ценовая вилка:
                    </Text>
                    <Text
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#fa8c16',
                      }}
                    >
                      300 000 - 700 000 руб.
                    </Text>
                  </Space>
                </Card>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
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
                <Text strong>Пересоздание сайта с кастомным интерфейсом</Text>
              </Paragraph>
              <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <div>
                  <Text strong>Сроки:</Text>
                  <Paragraph style={{ margin: '4px 0' }}>6-8 месяцев</Paragraph>
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
                      'Любые виды доп. интеграций',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>
                    )}
                  />
                </div>
                <Card
                  size="small"
                  style={{
                    backgroundColor: '#fff7e6',
                    border: '1px solid #ffd591',
                    marginTop: '8px',
                  }}
                  bodyStyle={{ padding: '12px' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Text strong style={{ fontSize: '14px', display: 'block' }}>
                      Ценовая вилка:
                    </Text>
                    <Text
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#fa8c16',
                      }}
                    >
                      от 700 000 руб.
                    </Text>
                  </Space>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },

  {
    id: 'architecture',
    header: 'Подход к реализации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Шаги разработки
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Анализ и проектирование',
                description:
                  'Изучение требований, проектирование архитектуры, выбор оптимального решения для интеграции с системой учёта, анализ каталога',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Развёртывание 1С-Битрикс (CMS)',
                description:
                  'Базовая платформа для управления контентом и интернет-магазином',
                icon: <GlobalOutlined />,
              },
              {
                title: 'Разработка интерфейса (Шаблон или Кастом)',
                description:
                  'Полностью кастомный интерфейс с уникальным дизайном, заточенный под большой каталог',
                icon: <TrophyOutlined />,
              },
              {
                title: 'Наведение порядка в системе учета',
                description:
                  'Структурирование карточек товаров, настройка справочников, унификация данных для корректной работы интеграции и отображения на сайте',
                icon: <DatabaseOutlined />,
              },
              {
                title: 'Интеграция с системой учёта',
                description:
                  'Обмен данными через CommerceML 2.0 или REST-шлюз с системой учёта',
                icon: <DatabaseOutlined />,
              },
              {
                title: 'Модуль интернет-магазина',
                description:
                  'Каталог с фильтрами (диаметр, оболочка ПЭ/ОЦ, толщина), корзина, оформление заказа, личный кабинет, многоуровневые цены',
                icon: <ShopOutlined />,
              },
              {
                title: 'Тестирование и запуск',
                description:
                  'Комплексное тестирование, исправление ошибок, подготовка к запуску',
                icon: <CheckCircleOutlined />,
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'ruskon-intro',
    header: 'Похожий кейс: Рускон',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Space
            orientation="vertical"
            size="middle"
            style={{ width: '100%', marginBottom: '16px' }}
          >
            <Title level={4} style={{ marginTop: 0 }}>
              <TeamOutlined style={{ marginRight: 8 }} />
              Почему мы решили показать этот кейс
            </Title>
            <Paragraph style={{ fontSize: '14px', marginBottom: 12 }}>
              Перед тем, как рассказать о возможностях для Вашей компании, мы
              хотим показать Вам реальный пример работы с похожим проектом.
            </Paragraph>
            <Card
              size="small"
              style={{
                backgroundColor: '#e6f7ff',
                border: '1px solid #1890ff',
              }}
            >
              <Title level={5} style={{ marginTop: 0, color: '#1890ff' }}>
                <CheckCircleOutlined style={{ marginRight: 8 }} />
                Кейс Рускон — максимально похож на Ваш
              </Title>
              <Paragraph style={{ marginBottom: 0, fontSize: '14px' }}>
                Мы специально выбрали этот проект, потому что он решает те же
                задачи, что и проект для Вашей компании: большой каталог
                товаров, работа с B2B клиентами, интеграции с системами учёта
                учёта, калькуляторы и формы заявок. Это поможет Вам увидеть, как
                наши решения работают в похожей ситуации.
              </Paragraph>
            </Card>
          </Space>

          <Divider style={{ margin: '12px 0' }} />

          <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Что мы сделали
          </Title>
          <Row gutter={[16, 12]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong style={{ fontSize: '15px' }}>
                    <ShopOutlined style={{ marginRight: 8 }} />
                    Каталог товаров
                  </Text>
                  <Paragraph
                    style={{ marginTop: 6, marginBottom: 0, fontSize: '13px' }}
                  >
                    Создали структурированный каталог с детальными
                    характеристиками, фотографиями, фильтрами и поиском для
                    удобной работы с большим ассортиментом товаров.
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
                  <Text strong style={{ fontSize: '15px' }}>
                    <UserOutlined style={{ marginRight: 8 }} />
                    Личные кабинеты клиентов
                  </Text>
                  <Paragraph
                    style={{ marginTop: 6, marginBottom: 0, fontSize: '13px' }}
                  >
                    Реализовали систему персональных кабинетов с индивидуальными
                    ценами, историей заказов и доступом к документации и
                    сертификатам.
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
                  <Text strong style={{ fontSize: '15px' }}>
                    <ApiOutlined style={{ marginRight: 8 }} />
                    Интеграции
                  </Text>
                  <Paragraph
                    style={{ marginTop: 6, marginBottom: 0, fontSize: '13px' }}
                  >
                    Настроили синхронизацию с системой учёта, интеграцию со
                    складом для отображения наличия в реальном времени и
                    автоматическую обработку заказов.
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
                  <Text strong style={{ fontSize: '15px' }}>
                    <SearchOutlined style={{ marginRight: 8 }} />
                    Умный поиск и фильтры
                  </Text>
                  <Paragraph
                    style={{ marginTop: 6, marginBottom: 0, fontSize: '13px' }}
                  >
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
    header: '',
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
    id: 'ruskon-subcategory',
    header: '',
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
    id: 'ruskon-pdp-1',
    header: '',
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
    id: 'ruskon-profile',
    header: '',
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
              src={ruskonProfile1}
              alt="Рускон - Личный кабинет"
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
    id: 'ruskon-order',
    header: '',
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
              src={ruskonOrder}
              alt="Рускон - Оформление заказа"
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
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={24}>
                <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Text strong style={{ fontSize: '18px' }}>
                      Новиков Павел
                    </Text>
                    <Text type="secondary" style={{ fontSize: '16px' }}>
                      Технический директор
                    </Text>
                    <Divider style={{ margin: '12px 0' }} />
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
                          8 908 555 0606
                        </Link>
                      </Space>
                      <Link
                        href="mailto:p.novikov@proxima.ooo"
                        style={{ fontSize: '15px' }}
                      >
                        p.novikov@proxima.ooo
                      </Link>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={24}>
                <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Text strong style={{ fontSize: '18px' }}>
                      Ситяков Артём
                    </Text>
                    <Text type="secondary" style={{ fontSize: '16px' }}>
                      Руководитель отдела маркетинга
                    </Text>
                    <Divider style={{ margin: '12px 0' }} />
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
