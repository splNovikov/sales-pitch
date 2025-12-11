import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  ShopOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  GlobalOutlined,
  FileTextOutlined,
  SettingOutlined,
  ApiOutlined,
  CreditCardOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  BuildOutlined,
  TrophyOutlined,
  CodeOutlined,
  CloseOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  CalculatorOutlined,
  FileProtectOutlined,
  EyeOutlined,
  BulbOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { ppuPipesSolutionCreatedAt } from './ppu-pipes-solution.meta';
// Импортируем изображения Рускона из папки hanskonner
import ruskonMain1 from '../../hanskonner/slides/ruskon_main_1.png';
import ruskonMain2 from '../../hanskonner/slides/ruskon_main_2.png';
import ruskonMain3 from '../../hanskonner/slides/ruskon_main_3.png';
import ruskonSubcategory from '../../hanskonner/slides/ruskon_subcategory.png';
import ruskonProfile1 from '../../hanskonner/slides/ruskon_profile_1.png';
import ruskonOrder from '../../hanskonner/slides/ruskon_order.png';

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
            НАШЕ РЕШЕНИЕ ДЛЯ ПРОИЗВОДСТВА И ПРОДАЖИ ТРУБ В ППУ-ИЗОЛЯЦИИ
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
    id: 'resources-analysis',
    header: 'Анализ предоставленных ресурсов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EyeOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Что объединяет все предоставленные сайты
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
            Мы проанализировали примеры сайтов, которые Вы предоставили, и
            выявили общие паттерны и требования, которые важны для Вашего
            бизнеса.
          </Paragraph>
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
                    Обширные каталоги
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Каталоги от 48 000 позиций',
                      'Детальная информация по каждой позиции',
                      'Структурированная категоризация',
                      'Множественные характеристики товаров',
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
                    <SearchOutlined style={{ marginRight: 8 }} />
                    Продвинутые фильтры
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Фильтры по диаметру труб',
                      'Фильтры по типу оболочки (ПЭ, ОЦ)',
                      'Фильтры по толщине изоляции',
                      'Фильтры по ГОСТ 30732-2020',
                      'Фильтры по цене с НДС',
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
                    <CalculatorOutlined style={{ marginRight: 8 }} />
                    Калькуляторы и формы
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Калькулятор сроков доставки по России/СНГ',
                      'Формы заявок с обратным звонком',
                      'Функция "купить в 1 клик"',
                      'Расчёт стоимости доставки',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                        <CheckCircleOutlined
                          style={{
                            color: '#faad14',
                            marginRight: 8,
                            fontSize: '12px',
                          }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
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
                  <Text strong style={{ fontSize: '16px' }}>
                    <FileProtectOutlined style={{ marginRight: 8 }} />
                    Документация и сертификаты
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Сертификаты ГОСТ 30732-2020',
                      'Подтверждение качества продукции',
                      'Раздел FAQ с ответами на вопросы',
                      'Информация о логистике и оплате',
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
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Ключевые выводы
          </Title>
          <List
            size="default"
            dataSource={[
              'Все сайты ориентированы на B2B-аудиторию (строительные компании, ЖКХ, промышленные предприятия)',
              'Обязательны продвинутые фильтры для работы с большим каталогом (48 000+ позиций)',
              'Важна автоматизация процессов: калькуляторы, формы, интеграции',
              'Необходимо подтверждение качества через сертификаты ГОСТ 30732-2020',
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
    id: 'what-you-want',
    header: 'Что Вы хотите увидеть в итоге',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card
          style={{ backgroundColor: '#e6f7ff', border: '2px solid #1890ff' }}
        >
          <Title level={4} style={{ marginTop: 0 }}>
            <BulbOutlined style={{ marginRight: 8, color: '#1890ff' }} />
            На основе анализа предоставленных ресурсов мы понимаем, что Вам
            нужно:
          </Title>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title level={5} style={{ marginTop: 0 }}>
                  <UserOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Для B2B клиентов:
                </Title>
                <List
                  size="default"
                  dataSource={[
                    'Удобный каталог с быстрым поиском',
                    'Многоуровневые цены (розничные, оптовые)',
                    'Личные кабинеты для постоянных клиентов',
                    'Быстрое оформление заказов',
                    'История заказов и повторные заказы',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title level={5} style={{ marginTop: 0 }}>
                  <ThunderboltOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Для эффективной работы:
                </Title>
                <List
                  size="default"
                  dataSource={[
                    'Интеграция с 1С для синхронизации остатков и цен',
                    'Автоматическое формирование счетов',
                    'Калькуляторы для расчёта доставки',
                    'Обработка заявок через формы',
                    'Поддержка оплаты по 44/223-ФЗ',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Paragraph style={{ marginBottom: 0, fontSize: '16px' }}>
            <Text strong>
              Все эти функции мы учтём при разработке решения для Вашей компании
              и реализуем их с учётом специфики работы с трубами в ППУ-изоляции
              и Вашей B2B-аудитории.
            </Text>
          </Paragraph>
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
                  <Paragraph style={{ margin: '4px 0' }}>3-4 месяца</Paragraph>
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
                  <Paragraph style={{ margin: '4px 0' }}>1-2 месяца</Paragraph>
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
            Перед тем, как рассказать о возможностях для Вашей компании, мы
            хотим показать Вам реальный пример работы с похожим проектом.
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
              задачи, что и проект для Вашей компании: большой каталог товаров
              (48 000+ позиций), работа с B2B клиентами, интеграции с системами
              учёта, калькуляторы и формы заявок. Это поможет Вам увидеть, как
              наши решения работают в похожей ситуации.
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
                    Каталог товаров
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
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
                  <Text strong style={{ fontSize: '16px' }}>
                    <UserOutlined style={{ marginRight: 8 }} />
                    Личные кабинеты клиентов
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
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
                    Умный поиск и фильтры
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
    header: 'Рускон: Каталог с фильтрами',
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
              alt="Рускон - Каталог"
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
    header: 'Рускон: Подкатегория с фильтрами',
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
    id: 'ruskon-profile',
    header: 'Рускон: Личный кабинет',
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
    header: 'Рускон: Оформление заказа',
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
            задачи: каталог 48 000+ позиций, фильтры по диаметру, оболочке (ПЭ,
            ОЦ), толщине, калькуляторы доставки, формы заявок и сертификаты ГОСТ
            30732-2020.
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
                title: 'Кастомный интерфейс',
                description:
                  'Полностью кастомный интерфейс с уникальным дизайном, заточенный под каталог 48 000+ позиций',
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
                  'Каталог с фильтрами (диаметр, оболочка ПЭ/ОЦ, толщина), корзина, оформление заказа, личный кабинет, многоуровневые цены',
                icon: <ShopOutlined />,
              },
              {
                title: 'Калькуляторы и формы',
                description:
                  'Калькулятор сроков доставки по России/СНГ, формы заявок с обратным звонком, "купить в 1 клик"',
                icon: <CalculatorOutlined />,
              },
              {
                title: 'Модуль сертификатов',
                description:
                  'Отображение сертификатов ГОСТ 30732-2020, подтверждение качества продукции',
                icon: <FileProtectOutlined />,
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
                    'Каталог от 48 000 позиций труб в ППУ-изоляции',
                    'Поиск с подсказками по артикулу / названию / характеристикам',
                    'Фильтры по диаметру, оболочке (ПЭ, ОЦ), толщине изоляции',
                    'Фильтры по ГОСТ 30732-2020 и другим стандартам',
                    'Отображение актуальных остатков из 1С',
                    'Отображение цен с учётом уровня клиента (с НДС)',
                    'Категоризация по типам: тепловые сети, водоснабжение, магистрали',
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
                    'Поддержка больших каталогов (48 000+ позиций)',
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
            <CalculatorOutlined style={{ marginRight: 8 }} />
            Калькуляторы и формы заявок
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0, fontSize: '14px' }}>
                  Калькулятор доставки
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Расчёт сроков доставки по России',
                    'Расчёт сроков доставки по СНГ',
                    'Учёт типа транспорта (еврофуры, контейнеры)',
                    'Автоматический расчёт стоимости доставки',
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
                  Формы заявок
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Форма обратного звонка',
                    'Форма "купить в 1 клик"',
                    'Форма заявки на расчёт',
                    'Интеграция с CRM для обработки заявок',
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
                    'Поддержка оплаты: предоплата, отсрочка по 44/223-ФЗ',
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
                    'Цены для строительных компаний',
                    'Цены для ЖКХ',
                    'Цены для промышленных предприятий',
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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileProtectOutlined style={{ marginRight: 8 }} />
            Сертификаты и документация
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0, fontSize: '14px' }}>
                  Сертификаты ГОСТ
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Отображение сертификатов ГОСТ 30732-2020',
                    'Подтверждение качества продукции',
                    'Доступ к сертификатам в карточке товара',
                    'Скачивание сертификатов в PDF',
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
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, fontSize: '14px' }}>
                  Раздел FAQ
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Ответы на вопросы о размерах',
                    'Информация об изоляции',
                    'Вопросы по оплате (предоплата/отсрочка)',
                    'Информация о логистике (еврофуры, контейнеры)',
                    'Вопросы по ГОСТ 30732-2020',
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
                <Title level={5} style={{ marginTop: 0 }}>
                  <FileTextOutlined
                    style={{
                      marginRight: 8,
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  Файловый обмен (CommerceML 2.0)
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Стандартный механизм обмена',
                    'Поддержка в 1С:УП 8.3',
                    'Обмен каталогом, ценами, остатками',
                    'Файловый обмен через защищённый каталог',
                    'Надёжный и проверенный способ',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Наша рекомендация
          </Title>
          <Paragraph>
            <Text strong>
              Рекомендуем стандартный механизм обмена через файловый обмен
              (CommerceML 2.0). Это надёжный, проверенный способ, который
              обеспечивает безопасный обмен данными через защищённый каталог без
              прямого подключения 1С к интернету.
            </Text>
          </Paragraph>
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
    id: 'product-cards-structure',
    header: 'Структура карточек товаров в 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card
          style={{ backgroundColor: '#e6f7ff', border: '2px solid #1890ff' }}
        >
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8, color: '#1890ff' }} />
            Почему это важно?
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
            <Text strong>
              Для корректной интеграции и отображения каталога на сайте очень
              важно понимать, как структурированы карточки товаров в Вашей 1С.
              Это определяет, какие данные мы сможем синхронизировать и как
              красиво их представить на сайте.
            </Text>
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Что нам нужно знать о структуре карточек в 1С
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
                    Основная информация о товаре
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Как хранятся названия товаров?',
                      'Есть ли артикулы и коды производителя?',
                      'Как организованы категории и подкатегории?',
                      'Есть ли описания товаров в 1С?',
                      'Как хранятся изображения товаров?',
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
                    <SearchOutlined style={{ marginRight: 8 }} />
                    Характеристики для фильтров
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Как хранятся диаметры труб?',
                      'Где указан тип оболочки (ПЭ, ОЦ)?',
                      'Как фиксируется толщина изоляции?',
                      'Есть ли информация о ГОСТ 30732-2020?',
                      'Как хранятся другие технические параметры?',
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
                    <CreditCardOutlined style={{ marginRight: 8 }} />
                    Цены и остатки
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Как организованы многоуровневые цены?',
                      'Есть ли цены с НДС и без НДС?',
                      'Как хранятся остатки на складах?',
                      'Есть ли резервирование товаров?',
                      'Как обновляются цены и остатки?',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                        <CheckCircleOutlined
                          style={{
                            color: '#faad14',
                            marginRight: 8,
                            fontSize: '12px',
                          }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
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
                  <Text strong style={{ fontSize: '16px' }}>
                    <FileProtectOutlined style={{ marginRight: 8 }} />
                    Дополнительная информация
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Есть ли сертификаты ГОСТ в 1С?',
                      'Как хранятся документы качества?',
                      'Есть ли информация о доставке?',
                      'Как организованы единицы измерения?',
                      'Есть ли связанные товары/комплекты?',
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
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <BulbOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Что это даёт нам?
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 16 }}>
            Понимание структуры карточек товаров в 1С позволяет нам:
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#ffffff' }}>
                <List
                  size="small"
                  dataSource={[
                    'Правильно настроить синхронизацию данных',
                    'Корректно отобразить все характеристики на сайте',
                    'Реализовать фильтры по нужным параметрам',
                    'Обеспечить точное отображение цен и остатков',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#ffffff' }}>
                <List
                  size="small"
                  dataSource={[
                    'Избежать потери данных при синхронизации',
                    'Оптимизировать процесс обмена информацией',
                    'Создать удобный поиск по характеристикам',
                    'Обеспечить актуальность информации на сайте',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
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
            <SettingOutlined style={{ marginRight: 8 }} />
            На этапе анализа мы изучим:
          </Title>
          <List
            size="default"
            dataSource={[
              'Структуру справочника "Номенклатура" в Вашей 1С:УП 8.3',
              'Как организованы характеристики товаров (реквизиты, дополнительные реквизиты)',
              'Структуру цен и типов цен в системе',
              'Как ведётся учёт остатков (склады, партии)',
              'Наличие и формат изображений товаров',
              'Структуру категорий и групп товаров',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Paragraph style={{ marginBottom: 0, fontSize: '16px' }}>
            <Text strong>
              Это позволит нам создать максимально точную и удобную интеграцию,
              которая будет работать с Вашей реальной структурой данных в 1С и
              не потребует переделки существующих процессов учёта.
            </Text>
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
                  'Изучение требований, проектирование архитектуры, выбор оптимального решения для интеграции с 1С, анализ каталога 48 000+ позиций',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Этап 2: Установка и настройка (1-2 недели)',
                description:
                  'Установка 1С-Битрикс, начало разработки кастомного интерфейса',
                icon: <SettingOutlined />,
              },
              {
                title: 'Этап 3: Интеграция с 1С (2-3 недели)',
                description:
                  'Настройка обмена данными через CommerceML или REST, тестирование синхронизации каталога, цен и остатков',
                icon: <DatabaseOutlined />,
              },
              {
                title: 'Этап 4: Разработка функционала (3-4 недели)',
                description:
                  'Доработка каталога с фильтрами (диаметр, оболочка, толщина), корзины, калькуляторов доставки, личного кабинета, модуля формирования счетов, раздела сертификатов ГОСТ',
                icon: <CodeOutlined />,
              },
              {
                title: 'Этап 5: Дизайн и кастомизация (2-3 недели)',
                description:
                  'Разработка уникального интерфейса под бренд компании, кастомизация под специфику ППУ-труб',
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
              <Col xs={24} sm={12}>
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
                      Технический директор компании Проксима
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
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
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
