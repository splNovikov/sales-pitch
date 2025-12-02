import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Table,
  Descriptions,
} from 'antd';
import {
  DollarOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  PhoneOutlined,
  FileTextOutlined,
  SettingOutlined,
  CloseOutlined,
  TagOutlined,
  TrophyOutlined,
  SafetyOutlined,
  WarningTwoTone,
  MessageOutlined,
  RobotOutlined,
  ClockCircleOutlined,
  FunnelPlotOutlined,
  CalculatorOutlined,
  SendOutlined,
  CheckCircleTwoTone,
} from '@ant-design/icons';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { type SlideData } from '~widgets/slides';
import niteosLogo from './niteos.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Advanced slides data for Niteos presentation
 * Focused on solving extended problems: request distribution, funnel management, and calculation distribution
 */
export const niteosAdvancedSlides: SlideData[] = [
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
          <a
            href="https://niteos.ru"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--app-spacing-md)',
            }}
          >
            <img
              src={niteosLogo}
              alt="НИТЕОС"
              style={{
                maxWidth: '300px',
                height: 'auto',
                display: 'block',
              }}
            />
          </a>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Расширенное решение для автоматизации бизнес-процессов
          </Paragraph>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            Умное распределение заявок • Управление воронкой • Автоматизация
            расчетов
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
          28.11.2025
        </Text>
      </Space>
    ),
  },
  {
    id: 'critical-pains',
    header: 'Критичные боли компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningTwoTone twoToneColor="#ff4d4f" style={{ marginRight: 8 }} />
            Выявленные проблемы
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="red">КРИТИЧНО</Tag>
                  <Text strong>Боль #1: Качество заявок</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Двухуровневая система с человеческим фактором
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
                  <Tag color="red">КРИТИЧНО</Tag>
                  <Text strong>Боль #2: Разрозненные таблицы</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Нет единой базы данных
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
                  <Tag color="red">НОВАЯ ПРОБЛЕМА</Tag>
                  <Text strong>Распределение заявок</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Рандомайзер вместо умного распределения
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
                  <Tag color="red">НОВАЯ ПРОБЛЕМА</Tag>
                  <Text strong>Зависшие сделки в воронке</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Копятся на стадиях, нет системы работы
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
                  <Tag color="red">НОВАЯ ПРОБЛЕМА</Tag>
                  <Text strong>Распределение расчетов</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    40 т.р./мес на диспетчеризацию
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Финансовое воздействие
          </Title>
          <List
            size="small"
            dataSource={[
              'Падение выручки на -11% (23.8 млн руб.)',
              'Потеря крупных контрактов (15 млн руб.)',
              '40 т.р./мес на диспетчеризацию расчетов (480 т.р./год)',
              'Потеря клиентов из-за качества обработки',
              'Зависшие сделки в воронке теряют актуальность',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'new-questions',
    header: 'Новые вопросы от заказчика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MessageOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Вопросы от Артура Айратовича
          </Title>
          <Paragraph>
            После первого предложения заказчик выявил дополнительные проблемы,
            которые можно решить с помощью ИИ ассистента:
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TagOutlined style={{ marginRight: 8 }} />
            Проблема #1: Распределение заявок
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Текущая ситуация:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Распределение через рандомайзер',
                      'Аналитику качества проводят вручную',
                      'Нет понимания эффективности распределения',
                      'Невозможно оптимизировать процесс',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <CloseOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
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
                  <Text strong>Нужное решение:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Умное распределение на основе ИИ',
                      'Автоматическая аналитика качества',
                      'Приоритизация по важности и срочности',
                      'Учет загрузки и компетенций менеджеров',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
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
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FunnelPlotOutlined style={{ marginRight: 8 }} />
            Проблема #2: Зависшие сделки в воронке
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Текущая ситуация:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Копятся сделки на стадиях воронки',
                      'Нет системы работы с "холодными" сделками',
                      'Неизвестно, актуально ли сотрудничество',
                      'Нет автоматизации напоминаний',
                      'Упускаются возможности дополнительных скидок',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <CloseOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
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
                  <Text strong>Нужное решение:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Автоматический анализ "теплоты" клиента',
                      'Умные напоминания через предпочитаемый канал',
                      'Определение актуальности сотрудничества',
                      'Предложения дополнительных скидок',
                      'Подсветка менеджеру обратной связи',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
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
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalculatorOutlined style={{ marginRight: 8 }} />
            Проблема #3: Распределение светотехнических расчетов
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Текущая ситуация:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Доплата за диспетчеризацию: 40 т.р./мес',
                      'Ручное распределение расчетов',
                      'Нет учета загрузки специалистов',
                      'Нет приоритизации по сложности',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <CloseOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
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
                  <Text strong>Нужное решение:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Автоматическое распределение расчетов',
                      'Учет загрузки и компетенций',
                      'Приоритизация по сложности',
                      'Экономия 40 т.р./мес (480 т.р./год)',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
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
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'solution-overview',
    header: 'Решение: ИИ ассистент для комплексной автоматизации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RobotOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Комплексное решение
          </Title>
          <Paragraph>
            ИИ ассистент решает все выявленные проблемы, используя умные
            алгоритмы вместо ручной работы и рандомайзеров.
          </Paragraph>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <TagOutlined
                  style={{
                    fontSize: '32px',
                    color: 'var(--app-color-primary)',
                    marginBottom: 8,
                  }}
                />
                <Title level={5} style={{ marginTop: 0 }}>
                  Умное распределение заявок
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Анализ типа и сложности заявки',
                    'Учет компетенций менеджеров',
                    'Приоритизация по важности',
                    'Автоматическая аналитика качества',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <FunnelPlotOutlined
                  style={{
                    fontSize: '32px',
                    color: 'var(--app-color-primary)',
                    marginBottom: 8,
                  }}
                />
                <Title level={5} style={{ marginTop: 0 }}>
                  Управление воронкой
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Анализ "теплоты" клиента',
                    'Умные напоминания (не прозвоны)',
                    'Определение актуальности',
                    'Предложения скидок',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <CalculatorOutlined
                  style={{
                    fontSize: '32px',
                    color: 'var(--app-color-primary)',
                    marginBottom: 8,
                  }}
                />
                <Title level={5} style={{ marginTop: 0 }}>
                  Автоматизация расчетов
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Автоматическое распределение',
                    'Учет загрузки специалистов',
                    'Приоритизация по сложности',
                    'Экономия 40 т.р./мес',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'funnel-solution-detail',
    header: 'Работа с воронкой: Умный подход (без прозвонов)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Почему не прозвоны через ИИ?
          </Title>
          <Paragraph>
            Для прозвонов лучше использовать существующие решения. Мы предлагаем
            более эффективный подход:
          </Paragraph>
          <List
            size="small"
            dataSource={[
              'Прозвоны через ИИ — не наш фокус (используйте готовые решения)',
              'Более эффективно: прощупать теплоту клиента через его предпочитаемый канал',
              'Если клиент звонил — попробовать связаться через WhatsApp/Telegram',
              'Если писал в Telegram — напомнить через Telegram',
              'Персонализированный подход повышает отклик',
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
            <SendOutlined style={{ marginRight: 8 }} />
            Как работает умная работа с воронкой
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Анализ активности клиента',
                description:
                  'ИИ анализирует историю взаимодействий, последний контакт, активность на сайте',
                icon: <BarChartOutlined />,
              },
              {
                title: 'Определение "теплоты" клиента',
                description:
                  'Автоматическая оценка вероятности закрытия сделки на основе данных',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Выбор канала связи',
                description:
                  'Автоматический выбор предпочитаемого канала: WhatsApp, Telegram, Email, SMS',
                icon: <MessageOutlined />,
              },
              {
                title: 'Генерация персонализированного сообщения',
                description:
                  'ИИ создает персональное сообщение с учетом истории и контекста',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Предложение дополнительной скидки',
                description:
                  'Для "теплых" клиентов автоматически предлагается дополнительная скидка',
                icon: <TagOutlined />,
              },
              {
                title: 'Подсветка менеджеру',
                description:
                  'Менеджер получает уведомление с обратной связью и рекомендациями',
                icon: <CheckCircleOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Преимущества подхода
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Выше отклик:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  +40-60%
                </Title>
                <Text type="secondary">
                  По сравнению с холодными прозвонами
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Возврат сделок:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  3-5%
                </Title>
                <Text type="secondary">От зависших сделок в воронке</Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'variant-b',
    header: 'Вариант B: Оптимальный план (РЕКОМЕНДУЕТСЯ)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8, color: '#1890ff' }} />
            Рекомендуемый вариант
          </Title>
          <Paragraph>
            Оптимальный баланс между инвестициями и результатами. Решает все
            выявленные проблемы.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Что входит в план
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>1. Умное распределение заявок</Text>
                <List
                  size="small"
                  dataSource={[
                    'ИИ-анализ типа и сложности заявки',
                    'Учет компетенций и загрузки менеджеров',
                    'Автоматическая аналитика качества',
                    'Приоритизация по важности и срочности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>2. Управление воронкой</Text>
                <List
                  size="small"
                  dataSource={[
                    'Анализ "теплоты" клиента',
                    'Умные напоминания через предпочитаемый канал',
                    'Определение актуальности сотрудничества',
                    'Предложения дополнительных скидок',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>3. Автоматизация расчетов</Text>
                <List
                  size="small"
                  dataSource={[
                    'Автоматическое распределение светотехнических расчетов',
                    'Учет загрузки и компетенций специалистов',
                    'Приоритизация по сложности',
                    'Экономия 40 т.р./мес на диспетчеризации',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>4. CRM и интеграция</Text>
                <List
                  size="small"
                  dataSource={[
                    'Единая CRM система',
                    'Интеграция всех систем',
                    'Единая база данных',
                    'Аналитика в реальном времени',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
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
            <DollarOutlined style={{ marginRight: 8 }} />
            Финансовые показатели
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Инвестиция:</Text>
                <Title level={3} style={{ margin: '8px 0' }}>
                  1.2-1.5 млн руб.
                </Title>
                <Text type="secondary">Разработка и внедрение</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Экономия на диспетчеризации:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  480 т.р./год
                </Title>
                <Text type="secondary">40 т.р./мес × 12 месяцев</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Возврат клиентов:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  +5-7 млн руб./год
                </Title>
                <Text type="secondary">7-10% выручки</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Возврат зависших сделок:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  +2-3 млн руб./год
                </Title>
                <Text type="secondary">3-5% от воронки</Text>
              </Card>
            </Col>
            <Col xs={24}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>ROI:</Text>
                <Title level={2} style={{ margin: '8px 0', color: '#1890ff' }}>
                  400-500%
                </Title>
                <Text type="secondary">В первый год</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Сроки внедрения
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Этап 1: Умное распределение заявок">
              2-3 месяца
            </Descriptions.Item>
            <Descriptions.Item label="Этап 2: Управление воронкой">
              2-3 месяца
            </Descriptions.Item>
            <Descriptions.Item label="Этап 3: Автоматизация расчетов">
              2-3 месяца
            </Descriptions.Item>
            <Descriptions.Item label="Этап 4: Интеграция и тестирование">
              3-4 месяца
            </Descriptions.Item>
            <Descriptions.Item label="Общий срок">
              <Text strong>12-14 месяцев</Text>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'comparison-variants',
    header: 'Сравнение вариантов решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Варианты решения
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                variant: 'Вариант A: Минимальный',
                features: 'Только распределение заявок',
                investment: '600 тыс. руб.',
                time: '3-4 месяца',
                roi: '300-400%',
                solves: 'Частично',
                status: 'warning',
              },
              {
                key: '2',
                variant: 'Вариант B: Оптимальный (РЕКОМЕНДУЕТСЯ)',
                features: 'Распределение + Воронка + Расчеты + CRM',
                investment: '1.2-1.5 млн руб.',
                time: '12-14 месяцев',
                roi: '400-500%',
                solves: 'Все проблемы',
                status: 'success',
              },
              {
                key: '3',
                variant: 'Вариант C: Максимальный',
                features: 'Все из B + Полная цифровая трансформация',
                investment: '2.5+ млн руб.',
                time: '18+ месяцев',
                roi: '240-300%',
                solves: 'Все + избыточно',
                status: 'default',
              },
            ]}
            columns={[
              {
                title: 'Вариант',
                dataIndex: 'variant',
                key: 'variant',
                render: (text, record) => (
                  <Space>
                    {record.status === 'success' && (
                      <Tag color="green">РЕКОМЕНДУЕТСЯ</Tag>
                    )}
                    <Text strong={record.status === 'success'}>{text}</Text>
                  </Space>
                ),
              },
              {
                title: 'Функционал',
                dataIndex: 'features',
                key: 'features',
              },
              {
                title: 'Инвестиция',
                dataIndex: 'investment',
                key: 'investment',
                align: 'center',
              },
              {
                title: 'Срок',
                dataIndex: 'time',
                key: 'time',
                align: 'center',
              },
              {
                title: 'ROI',
                dataIndex: 'roi',
                key: 'roi',
                align: 'center',
                render: (roi, record) => <Tag color={record.status}>{roi}</Tag>,
              },
              {
                title: 'Решает проблемы',
                dataIndex: 'solves',
                key: 'solves',
                align: 'center',
              },
            ]}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{ marginRight: 8 }}
            />
            Почему Вариант B оптимален?
          </Title>
          <List
            size="small"
            dataSource={[
              'Решает все выявленные проблемы компании',
              'Оптимальный баланс инвестиций и результатов',
              'Высокий ROI (400-500%) в первый год',
              'Экономия 480 т.р./год на диспетчеризации',
              'Возврат клиентов и зависших сделок',
              'Реалистичные сроки внедрения (12-14 месяцев)',
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
      </Space>
    ),
  },
  {
    id: 'expected-results',
    header: 'Ожидаемые результаты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Ключевые улучшения
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  -50%
                </Title>
                <Text>Ошибки распределения</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Вместо рандомайзера
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  480 т.р./год
                </Title>
                <Text>Экономия на диспетчеризации</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Автоматизация расчетов
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  +3-5%
                </Title>
                <Text>Возврат зависших сделок</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Умная работа с воронкой
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  +40-60%
                </Title>
                <Text>Отклик на напоминания</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Персонализированный подход
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  +7-10%
                </Title>
                <Text>Возврат клиентов</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    5-7 млн руб./год
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  400-500%
                </Title>
                <Text>ROI</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    В первый год
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Дополнительные преимущества
          </Title>
          <List
            size="small"
            dataSource={[
              'Автоматическая аналитика качества распределения (вместо ручной)',
              'Умное определение "теплоты" клиента без прозвонов',
              'Персонализированные напоминания через предпочитаемый канал',
              'Автоматическое предложение дополнительных скидок',
              'Подсветка менеджеру обратной связи и рекомендаций',
              'Снижение нагрузки на сотрудников на 30-40%',
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
      </Space>
    ),
  },
  {
    id: 'next-steps',
    header: 'Следующие шаги',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            План внедрения
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Этап 1: Анализ и проектирование (2-3 недели)',
                description:
                  'Детальный анализ текущих процессов, проектирование ИИ-модулей, определение требований',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Этап 2: Умное распределение заявок (2-3 месяца)',
                description:
                  'Разработка и внедрение ИИ-модуля для умного распределения заявок с аналитикой',
                icon: <TagOutlined />,
              },
              {
                title: 'Этап 3: Управление воронкой (2-3 месяца)',
                description:
                  'Разработка системы анализа "теплоты" клиента и умных напоминаний',
                icon: <FunnelPlotOutlined />,
              },
              {
                title: 'Этап 4: Автоматизация расчетов (2-3 месяца)',
                description:
                  'Разработка автоматического распределения светотехнических расчетов',
                icon: <CalculatorOutlined />,
              },
              {
                title: 'Этап 5: Интеграция и тестирование (3-4 месяца)',
                description:
                  'Интеграция всех модулей, тестирование, настройка, обучение сотрудников',
                icon: <SettingOutlined />,
              },
              {
                title: 'Этап 6: Запуск и мониторинг',
                description:
                  'Запуск системы, мониторинг метрик, доработка по обратной связи',
                icon: <BarChartOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Гарантии и поддержка
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Гарантии:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Точность распределения: 95%+',
                    'Экономия на диспетчеризации: 40 т.р./мес',
                    'Если результаты ниже обещанных — доработка бесплатно',
                    'Постоянный мониторинг качества',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Поддержка:</Text>
                <List
                  size="small"
                  dataSource={[
                    '3 месяца бесплатной поддержки',
                    'Настройка ИИ-модулей на новых данных',
                    'Техническая поддержка 24/7',
                    'Обучение сотрудников',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
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
