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
  UserOutlined,
  MailOutlined,
  GlobalOutlined,
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
          01.12.2025
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
                  <Tag color="orange">ОБОЗНАЧЕНА НОВАЯ</Tag>
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
                  <Tag color="orange">ОБОЗНАЧЕНА НОВАЯ</Tag>
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
                  <Tag color="orange">ОБОЗНАЧЕНА НОВАЯ</Tag>
                  <Text strong>Распределение расчетов</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    40 т.р./мес на диспетчеризацию
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
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'new-questions',
    header: 'Дополнительные вопросы',
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
            После первого предложения были выявлены дополнительные проблемы,
            которые можно решить с помощью сервиса автоматизации:
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
                      'Аналитика качества распределения',
                      'Алгоритмическое распределение (приоритет)',
                      'Приоритизация по важности и срочности',
                      'Учет загрузки и компетенций менеджеров',
                      'AI агент — где алгоритм не справляется',
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
                      'Автоматический анализ "теплоты" контакта',
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
    header: 'Решение: Сервис автоматизации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Комплексное решение
          </Title>
          <Paragraph>
            Сервис автоматизации решает все выявленные проблемы, используя
            алгоритмические решения в приоритете. Где алгоритм не справляется —
            подключаем AI агента.
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
                    'Аналитика качества распределения',
                    'Алгоритмическое распределение (приоритет)',
                    'Учет компетенций и загрузки',
                    'AI агент — где алгоритм не справляется',
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
                    'Анализ "теплоты" контакта',
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
    id: 'requests-distribution-detail',
    header: 'Сервис распределения заявок',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TagOutlined style={{ marginRight: 8 }} />
            Как сейчас обрабатываются заявки (As-Is)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Основные проблемы:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Распределение через рандомайзер без логики',
                      'Аналитика качества выполняется вручную в таблицах',
                      'Нет прозрачных критериев, кому и почему ушла заявка',
                      'Сложно понять, где теряется время и качество',
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
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Последствия для компании:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Неравномерная загрузка специалистов',
                      'Сложные заявки могут уходить неподходящим исполнителям',
                      'Повторные перекидывания заявки между сотрудниками',
                      'Рост сроков обработки и потеря доверия к процессу',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <WarningOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
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
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Как будет работать сервис распределения заявок (To-Be)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Шаг 1 — Аналитика распределения:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Сбор истории распределения по всем каналам',
                      'Метрики по времени реакции, количеству перекидок, загрузке',
                      'Выявление узких мест и типовых ошибок распределения',
                      'Формирование базы для алгоритмики',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
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
                  <Text strong>Шаг 2 — Алгоритмическое распределение:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Правила распределения по типу заявки и сложности',
                      'Учет компетенций и текущей загрузки исполнителей',
                      'Приоритизация срочных и стратегически важных запросов',
                      'Прозрачные критерии: видно, почему заявка ушла именно туда',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Шаг 3 — Подключение AI агента точечно:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'AI агент разбирает нетиповые или неполные заявки',
                      'Помогает классифицировать сложные запросы',
                      'Предлагает рекомендацию по распределению при низкой уверенности алгоритма',
                      'Все решения можно просмотреть и скорректировать вручную',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Что видит команда:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Дашборд с очередями по исполнителям и статусами заявок',
                      'Понятные причины, почему заявка попала к конкретному человеку',
                      'Сигналы о перегрузке отдельных исполнителей',
                      'Отчеты для руководства по качеству распределения',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
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
    id: 'calculations-service-detail',
    header: 'Сервис распределения светотехнических расчетов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalculatorOutlined style={{ marginRight: 8 }} />
            Как сейчас распределяются расчеты (As-Is)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Организация процесса:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Дополнительные 40 т.р./мес за диспетчеризацию',
                      'Ручное распределение задач по расчетам',
                      'Опора на личное знание загрузки исполнителей',
                      'Сложно отследить историю, кто и что делал',
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
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Риски для компании:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Отсутствие приоритизации по сложности и срокам',
                      'Невозможно быстро перераспределить нагрузку',
                      'Часть расчетов может задерживаться без прозрачной причины',
                      'Нет базы знаний по типовым расчетам и решениям',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <WarningOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
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
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Как будет работать сервис распределения расчетов (To-Be)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Шаг 1 — Классификация расчета:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Определение типа объекта и области применения',
                      'Оценка сложности по набору входных параметров',
                      'Разделение задач на типовые и нетиповые',
                      'Сохранение шаблонов для повторяющихся сценариев',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
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
                  <Text strong>Шаг 2 — Алгоритмическое распределение:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Учет квалификации специалистов по типам объектов',
                      'Распределение с учетом текущей загрузки и сроков',
                      'Приоритет срочных и критичных расчетов',
                      'Автоматическое формирование очереди задач',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Шаг 3 — Подключение AI агента:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Подсказки по выбору оптимальных типовых решений',
                      'Анализ нетиповых задач на основе базы знаний',
                      'Рекомендации по уточнению исходных данных',
                      'Поддержка при разборе сложных проектов',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Что видит команда:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Единую очередь расчетов с приоритетами и сроками',
                      'Статус каждой задачи и ответственного исполнителя',
                      'Понимание, где теряется время и почему',
                      'Экономию 40 т.р./мес за счет отказа от ручной диспетчеризации',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
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
    id: 'funnel-solution-detail',
    header: 'Работа с воронкой: подход без прозвонов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Как обычно работают с воронкой на рынке
          </Title>
          <Paragraph>
            На рынке для «разогрева» воронки часто используют сервисы дозвона и
            робо-звонки. Формально задача решается — но метод устаревший и
            воспринимается как навязчивый.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Существующие решения по дозвонам:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Автообзвоны и робо-звонки по базе',
                      'Скрипты колл-центров с массовыми звонками',
                      'Попытки «вернуть интерес» через серию телефонных контактов',
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
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Почему это устаревший метод:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Телефонный канал часто воспринимается как навязчивый',
                      'Сложно встроиться в контекст предыдущего общения',
                      'Низкая персонализация и высокий «шум» для команды',
                      'Не учитывается, как контакт привык коммуницировать',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <WarningOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
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
            <SendOutlined style={{ marginRight: 8 }} />
            Наш подход: сервис работает в том же канале, откуда пришёл контакт
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Анализ активности контакта',
                description:
                  'Система анализирует, откуда пришёл контакт (WhatsApp, Telegram, email, сайт) и когда было последнее взаимодействие',
                icon: <BarChartOutlined />,
              },
              {
                title: 'Определение "теплоты" контакта',
                description:
                  'Автоматическая оценка вероятности закрытия сделки на основе данных',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Выбор канала связи',
                description:
                  'Сервис выбирает тот же канал, в котором был исходный диалог: если общение шло в Telegram/WhatsApp — продолжение там же',
                icon: <MessageOutlined />,
              },
              {
                title: 'Генерация персонализированного сообщения',
                description:
                  'Система создает персональное сообщение с учетом истории и контекста диалога в выбранном канале',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Предложение дополнительной скидки',
                description:
                  'Для "теплых" контактов автоматически предлагается дополнительная скидка',
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
    id: 'technical-specification',
    header: 'Техническое задание',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined
              style={{ marginRight: 8, color: '#1890ff' }}
            />
            Составление ТЗ
          </Title>
          <Paragraph>
            Техническое задание будет составлено совместно с Артуром Айратовичем
            на основе детального анализа текущих процессов и требований компании.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Процесс составления ТЗ
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Анализ текущих процессов',
                description:
                  'Изучение существующих бизнес-процессов, выявление узких мест и возможностей оптимизации',
                icon: <BarChartOutlined />,
              },
              {
                title: 'Определение требований',
                description:
                  'Совместное определение функциональных и нефункциональных требований к системе',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Проектирование решения',
                description:
                  'Разработка архитектуры решения с приоритетом на алгоритмические методы',
                icon: <SettingOutlined />,
              },
              {
                title: 'Определение точек подключения AI',
                description:
                  'Выявление задач, где алгоритмические методы не справляются и требуется AI агент',
                icon: <RobotOutlined />,
              },
              {
                title: 'Согласование ТЗ',
                description:
                  'Финальное согласование технического задания с Артуром Айратовичем',
                icon: <CheckCircleOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Преимущества совместной работы
          </Title>
          <List
            size="small"
            dataSource={[
              'Точное понимание потребностей компании',
              'Учет специфики бизнес-процессов НИТЕОС',
              'Оптимальный баланс алгоритмических решений и AI',
              'Реалистичные сроки и бюджет',
              'Максимальная эффективность решения',
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
    id: 'contacts',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
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
];
