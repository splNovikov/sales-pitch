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
  RocketOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  UserOutlined,
  TeamOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  BuildOutlined,
  ApiOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  CalendarOutlined,
  TrophyOutlined,
  CreditCardOutlined,
  ShopOutlined,
  FileTextOutlined,
  CodeOutlined,
  CloudOutlined,
  SettingOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { targetPitchCreatedAt } from './target-pitch.meta';
import { Roadmap } from '~shared/ui/roadmap';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for TargetPitch.ai presentation
 * Based on documentation in features/target-pitch/docs/TargetPitch-Complete.md
 */
export const targetPitchSlides: SlideData[] = [
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
            TargetPitch.ai
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            AI-powered platform для автоматизации создания персонализированных
            презентаций за минуты
          </Paragraph>
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              opacity: 0.6,
              marginTop: 'auto',
            }}
          >
            {formatDateForSlide(targetPitchCreatedAt)}
          </Text>
        </Space>
      </Space>
    ),
  },
  {
    id: 'target-audience',
    header: 'Целевая аудитория',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Основные персоны для MVP
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  PRIMARY
                </Tag>
                <Title level={5} style={{ marginTop: 0 }}>
                  Представители по развитию продаж (SDR)
                </Title>
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="Профиль">
                    Sales professionals в B2B компаниях, ищущие new leads
                  </Descriptions.Item>
                  <Descriptions.Item label="Боль">
                    Готовят 10-20 питчей в неделю, каждый вручную
                  </Descriptions.Item>
                  <Descriptions.Item label="Готовность платить">
                    $30-100/месяц (бюджет ограничен)
                  </Descriptions.Item>
                  <Descriptions.Item label="Использование">
                    5-10 презентаций в неделю
                  </Descriptions.Item>
                  <Descriptions.Item label="Предпочтение LLM">
                    Claude (reasoning), GPT-4o (speed)
                  </Descriptions.Item>
                  <Descriptions.Item label="Вероятность конверсии">
                    <Tag color="green">ВЫСОКАЯ</Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  PRIMARY
                </Tag>
                <Title level={5} style={{ marginTop: 0 }}>
                  Менеджеры по работе с клиентами (AE)
                </Title>
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="Профиль">
                    Опытные продажники с 5-15 летним стажем, large deals
                  </Descriptions.Item>
                  <Descriptions.Item label="Боль">
                    Нужны кастомные deck'и для каждого prospect
                  </Descriptions.Item>
                  <Descriptions.Item label="Готовность платить">
                    $100-300/месяц
                  </Descriptions.Item>
                  <Descriptions.Item label="Использование">
                    20-30 презентаций в месяц
                  </Descriptions.Item>
                  <Descriptions.Item label="Вероятность конверсии">
                    <Tag color="orange">СРЕДНЕ-ВЫСОКАЯ</Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  PRIMARY
                </Tag>
                <Title level={5} style={{ marginTop: 0 }}>
                  Инженерные менеджеры и технические лидеры
                </Title>
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="Профиль">
                    Engineering leaders presenting to teams, stakeholders
                  </Descriptions.Item>
                  <Descriptions.Item label="Боль">
                    Нужны быстрые presentations, время вместо кодирования
                  </Descriptions.Item>
                  <Descriptions.Item label="Готовность платить">
                    $50-150/месяц (компания платит)
                  </Descriptions.Item>
                  <Descriptions.Item label="Использование">
                    3-8 презентаций в месяц (high complexity)
                  </Descriptions.Item>
                  <Descriptions.Item label="Предпочтение LLM">
                    Claude (technical), Mistral (code examples)
                  </Descriptions.Item>
                  <Descriptions.Item label="Вероятность конверсии">
                    <Tag color="green">ВЫСОКАЯ</Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  PRIMARY
                </Tag>
                <Title level={5} style={{ marginTop: 0 }}>
                  Продуктовые менеджеры
                </Title>
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="Профиль">
                    Product leaders presenting roadmaps, strategies
                  </Descriptions.Item>
                  <Descriptions.Item label="Боль">
                    Быстро нужны presentations для stakeholders, board, teams
                  </Descriptions.Item>
                  <Descriptions.Item label="Готовность платить">
                    $75-200/месяц (компания платит)
                  </Descriptions.Item>
                  <Descriptions.Item label="Использование">
                    5-15 презентаций в месяц
                  </Descriptions.Item>
                  <Descriptions.Item label="Вероятность конверсии">
                    <Tag color="orange">СРЕДНЕ-ВЫСОКАЯ</Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Tag color="default" style={{ marginBottom: 8 }}>
                  SECONDARY
                </Tag>
                <Title level={5} style={{ marginTop: 0 }}>
                  Менеджеры по развитию бизнеса (BDM)
                </Title>
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="Профиль">
                    Corporate development, strategic partnerships
                  </Descriptions.Item>
                  <Descriptions.Item label="Боль">
                    Нужны presentations для partnership proposals
                  </Descriptions.Item>
                  <Descriptions.Item label="Готовность платить">
                    $200-500/месяц
                  </Descriptions.Item>
                  <Descriptions.Item label="Использование">
                    3-5 презентаций в неделю
                  </Descriptions.Item>
                  <Descriptions.Item label="Вероятность конверсии">
                    <Tag color="default">СРЕДНЯЯ</Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Tag color="default" style={{ marginBottom: 8 }}>
                  SECONDARY
                </Tag>
                <Title level={5} style={{ marginTop: 0 }}>
                  Основатели и предприниматели
                </Title>
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="Профиль">
                    Founders preparing investor pitches
                  </Descriptions.Item>
                  <Descriptions.Item label="Боль">
                    Нужна быстрая, professional дека
                  </Descriptions.Item>
                  <Descriptions.Item label="Готовность платить">
                    $50-200/месяц (периодичная)
                  </Descriptions.Item>
                  <Descriptions.Item label="Использование">
                    Burst pattern перед fundraising
                  </Descriptions.Item>
                  <Descriptions.Item label="Вероятность конверсии">
                    <Tag color="default">СРЕДНЯЯ</Tag>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'product-vision',
    header: 'Видение продукта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Что мы строим
          </Title>
          <Paragraph>
            Платформа, которая за счет AI (перепродажа токенов + динамическая
            маршрутизация LLM) автоматизирует создание высококачественных
            презентаций
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            Как это работает
          </Title>
          <List
            size="small"
            dataSource={[
              'Сбор контекста от пользователя через простую форму',
              'Анализ типа презентации (sales/technical/strategic/team)',
              'Выбор оптимальной LLM в зависимости от типа',
              'Отправка контекста в выбранный LLM (OpenAI, Claude, Mistral)',
              'Парсинг структурированного ответа и заполнение React-компонентов',
              'Публикация готовой презентации на брендированный поддомен',
              'Опциональное обогащение контента OSINT-данными (платный апсел)',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Множественные контексты пользователя
          </Title>
          <Paragraph>
            <Text strong>Важная особенность:</Text> У одного пользователя может
            быть несколько контекстов и айдентик для разных целей
          </Paragraph>
          <List
            size="small"
            dataSource={[
              '🏢 От имени основной компании',
              '👔 От имени личного бренда',
              '💼 От имени партнерской компании',
              '🎨 От имени бренда жены/партнера',
              '📦 От имени дочернего проекта',
              '🔄 Быстрое переключение между контекстами при создании',
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
          <Divider style={{ margin: '12px 0' }} />
          <Text type="secondary" style={{ fontSize: '12px' }}>
            💡 Монетизация: До 2 айдентик - бесплатно, более 2 - Pro план
          </Text>
        </Card>
      </Space>
    ),
  },

  {
    id: 'ui-interface',
    header: 'Визуальный интерфейс',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Простой и интуитивный дизайн
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#1890ff', marginRight: 8 }}
                  />
                  Целевая страница
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Hero-секция: "Презентации за 5 минут"',
                    'Демо-видео (30 секунд)',
                    'Боли и решения по персонам',
                    'Как это работает (3 шага)',
                    'Прайсинг (Free + токены)',
                    'FAQ и социальные доказательства',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Форма создания
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Минималистичный дизайн',
                    'Без регистрации (email опционально)',
                    '3 простых шага',
                    'Валидация в реальном времени',
                    'Прогресс-бар',
                    'Подсказки и примеры',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#faad14', marginRight: 8 }}
                  />
                  Просмотр презентации
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Полноэкранный режим',
                    'Навигация стрелками/клавиатурой',
                    'Брендирование (логотип, цвета)',
                    'Адаптивный дизайн',
                    'Быстрый экспорт PDF',
                    'QR-код для мобильных',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f9f0ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#722ed1', marginRight: 8 }}
                  />
                  Технологии UI
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Next.js (SSR/SSG)',
                    'Tailwind CSS + CSS-in-JS',
                    'Ant Design компоненты',
                    'Swiper.js для навигации',
                    'React Hook Form',
                    'Zod валидация',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
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
    id: 'key-features',
    header: 'Ключевая функциональность',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Основные возможности
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <RocketOutlined
                    style={{ color: '#1890ff', marginRight: 8 }}
                  />
                  Быстрая генерация
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '5-10 минут от идеи до готовой презентации',
                    'Асинхронная обработка (30-60 сек)',
                    'Прогресс в реальном времени',
                    'Уведомления о готовности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <UserOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                  Персонализация
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Анализ контекста и аудитории',
                    'Динамический выбор LLM модели',
                    'Адаптация под тип презентации',
                    'Брендирование под компанию',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <TrophyOutlined
                    style={{ color: '#faad14', marginRight: 8 }}
                  />
                  Качество контента
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Профессиональная структура',
                    'Продающий контент',
                    'Релевантные примеры',
                    'Оптимизация под задачу',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <ShopOutlined style={{ color: '#722ed1', marginRight: 8 }} />
                  Публикация и шаринг
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Публичные URL (брендированный поддомен)',
                    'Мгновенный экспорт PDF',
                    'QR-код для быстрого доступа',
                    'Аналитика просмотров',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Типы презентаций
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  SALES
                </Tag>
                <Text strong>Продажные питчи</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '11px' }}>
                  Для SDR, AE, BDM
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Tag color="green" style={{ marginBottom: 8 }}>
                  TECHNICAL
                </Tag>
                <Text strong>Технические</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '11px' }}>
                  Для инженеров, техлидов
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Tag color="orange" style={{ marginBottom: 8 }}>
                  STRATEGIC
                </Tag>
                <Text strong>Стратегические</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '11px' }}>
                  Для PM, founders
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Tag color="purple" style={{ marginBottom: 8 }}>
                  TEAM
                </Tag>
                <Text strong>Командные</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '11px' }}>
                  Standup, обновления
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'simple-form',
    header: 'Простая форма для продавана',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Максимально понятный интерфейс
          </Title>
          <Paragraph>
            Форма создана специально для продавцов, которым не нужно разбираться
            в сложных настройках. Все просто и интуитивно.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Минимальный набор полей
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Обязательные поля
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '🌐 Ссылка на сайт клиента',
                    '📝 Описание тематики',
                    '🎯 Что хочет от клиента',
                    '💼 Выбор контекста/айдентики',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <ThunderboltOutlined
                    style={{ color: '#faad14', marginRight: 8 }}
                  />
                  Опциональные поля
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '🔢 ИНН клиента (для OSINT)',
                    '🏢 Название компании клиента',
                    '📊 Стадия продаж',
                    '💰 Бюджет проекта',
                    '⏰ Срочность',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
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
            Онбординг пользователя
          </Title>
          <List
            size="small"
            dataSource={[
              'Сбор данных о пользователе при первом входе',
              'Указание своего сайта (автосбор айдентики)',
              'Загрузка логотипа и выбор цветовой схемы',
              'Создание первого контекста/бренда',
              'Настройка базовой информации о компании',
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
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Интерактивный процесс с уточняющими вопросами
          </Title>
          <Paragraph>
            <Text strong>Снижение порога входа:</Text> Система задает уточняющие
            вопросы в процессе создания, чтобы собрать максимум информации без
            перегрузки формы
          </Paragraph>
          <List
            size="small"
            dataSource={[
              '💬 ИИ анализирует введенные данные',
              '❓ Задает уточняющие вопросы по мере необходимости',
              '🎯 Помогает уточнить детали для лучшей персонализации',
              '⚡ Пользователь отвечает на вопросы, не заполняя длинную форму',
              '✅ Результат: качественная презентация при минимальных усилиях',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'personal-cabinet',
    header: 'Личный кабинет',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Управление презентациями
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <FileTextOutlined
                    style={{ color: '#1890ff', marginRight: 8 }}
                  />
                  История презентаций
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Список всех созданных презентаций',
                    'Фильтры по дате, клиенту, типу',
                    'Поиск по названию клиента',
                    'Статистика просмотров',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <SettingOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Действия с презентациями
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Просмотр и редактирование',
                    'Дублирование для нового клиента',
                    'Экспорт в PDF',
                    'Удаление и архивация',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Аналитика и метрики
          </Title>
          <List
            size="small"
            dataSource={[
              'Количество просмотров каждой презентации',
              'Время просмотра',
              'Скачивания PDF',
              'Переходы по ссылкам',
              'Конверсия (если интегрировано с CRM)',
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
    id: 'branding-identity',
    header: 'Айдентика и множественные контексты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Обязательная айдентика
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Элементы айдентики
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '🎨 Логотип компании',
                    '🌈 Цветовая схема',
                    '📝 Название компании',
                    '📧 Контактная информация',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <ThunderboltOutlined
                    style={{ color: '#1890ff', marginRight: 8 }}
                  />
                  Автосбор с сайта
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Указание своего сайта при онбординге',
                    'Автоматический сбор логотипа',
                    'Извлечение цветовой схемы',
                    'Получение контактных данных',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Множественные контексты
          </Title>
          <Paragraph>
            Пользователь может иметь несколько айдентик и контекстов для разных
            целей:
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <UserOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                  Примеры контекстов
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '🏢 От имени основной компании',
                    '👔 От имени личного бренда',
                    '💼 От имени партнерской компании',
                    '🎨 От имени бренда жены/партнера',
                    '📦 От имени дочернего проекта',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CreditCardOutlined
                    style={{ color: '#faad14', marginRight: 8 }}
                  />
                  Монетизация
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '✅ До 2 айдентик - бесплатно',
                    '💎 Более 2 айдентик - Pro план',
                    '🚀 Enterprise - неограниченно',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
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
            Настройка контекстов
          </Title>
          <List
            size="small"
            dataSource={[
              'Создание нового контекста/бренда',
              'Загрузка логотипа и настройка цветов',
              'Указание названия и контактов',
              'Выбор контекста при создании презентации',
              'Быстрое переключение между контекстами',
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
    id: 'osint-functionality',
    header: 'OSINT функционал',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined style={{ marginRight: 8 }} />
            Полное досье на организацию
          </Title>
          <Paragraph>
            Система автоматически собирает открытые данные о компании клиента
            для создания максимально персонализированной и продающей презентации
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Источники данных
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <FileTextOutlined
                    style={{ color: '#1890ff', marginRight: 8 }}
                  />
                  По ИНН клиента
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '📊 Данные из САБИ (СПАРК)',
                    '🏢 Юридическая информация',
                    '💰 Финансовые показатели',
                    '📈 История компании',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <UserOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                  По названию компании
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '👔 Учредители и ЛПР',
                    '📋 Структура управления',
                    '🔍 Ключевые лица',
                    '💼 Роли и ответственность',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <ShopOutlined style={{ color: '#faad14', marginRight: 8 }} />
                  Отзывы и репутация
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '⭐ Отзывы с Яндекс.Карт',
                    '📍 Отзывы с 2ГИС',
                    '💬 Общественное мнение',
                    '📊 Рейтинги и оценки',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <ApiOutlined style={{ color: '#722ed1', marginRight: 8 }} />
                  Дополнительные источники
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '🌐 Веб-скрапинг сайта',
                    '📰 Публикации в СМИ',
                    '🔗 Социальные сети',
                    '📈 Аналитика рынка',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Использование данных
          </Title>
          <List
            size="small"
            dataSource={[
              'Выявление реальных потребностей компании',
              'Анализ болевых точек из отзывов',
              'Персонализация под ЛПР',
              'Упоминание конкретных фактов о компании',
              'Создание максимально релевантного контента',
              'Повышение конверсии за счет персонализации',
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
            <TrophyOutlined style={{ marginRight: 8 }} />
            Преимущества OSINT
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Экономия времени:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  2-3 часа
                </Title>
                <Text type="secondary">
                  На ручной сбор информации о клиенте
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Рост конверсии:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  +30-50%
                </Title>
                <Text type="secondary">
                  За счет персонализации и релевантности
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'osint-use-case',
    header: 'Пример использования OSINT',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ marginRight: 8 }} />
            Сценарий использования
          </Title>
          <Paragraph>
            <Text strong>Сценарий:</Text> SDR указывает ИНН клиента в форме
            создания презентации
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Пошаговый процесс
          </Title>
          <List
            size="small"
            dataSource={[
              'Система получает данные из САБИ по ИНН',
              'Определяет учредителей и ключевых лиц',
              'Собирает отзывы с Яндекс.Карт и 2ГИС',
              'Анализирует болевые точки из отзывов',
              'ИИ создает презентацию, адресованную конкретному ЛПР',
              'Упоминает реальные проблемы компании из отзывов',
              'Предлагает решение, релевантное их ситуации',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Результат
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Персонализация
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Презентация адресована конкретному ЛПР',
                    'Упоминаются реальные факты о компании',
                    'Решаются конкретные болевые точки',
                    'Используются данные из отзывов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <TrophyOutlined
                    style={{ color: '#1890ff', marginRight: 8 }}
                  />
                  Эффективность
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Экономия 2-3 часов на исследование',
                    'Рост конверсии на 30-50%',
                    'Повышение релевантности контента',
                    'Улучшение качества продаж',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
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
    id: 'llm-routing',
    header: 'Динамическая маршрутизация LLM',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            КЛЮЧЕВАЯ ИННОВАЦИЯ
          </Title>
          <Paragraph>
            Система автоматически выбирает оптимальную LLM модель в зависимости
            от типа и сложности контента
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Дерево решений
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Tag color="blue">ПРОДАЖНЫЙ ПИТЧ</Tag>
                <List
                  size="small"
                  dataSource={[
                    'Простой + Срочно → GPT-4o',
                    'Средний + Стандарт → Claude 3.5 Sonnet',
                    'Сложный + Качество → Claude 3 Opus',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Tag color="green">ТЕХНИЧЕСКИЙ</Tag>
                <List
                  size="small"
                  dataSource={[
                    'Архитектура → Claude 3 Opus',
                    'Дорожная карта → GPT-4o',
                    'Примеры кода → Mistral Large',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Сравнение провайдеров LLM
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                provider: 'OpenAI GPT-4o',
                cost: '$2.50 вх / $10 исх',
                quality: 'Отлично',
                speed: 'Очень быстро',
                bestFor: 'Продажи (быстро), обновления команды',
              },
              {
                key: '2',
                provider: 'Claude 3.5 Sonnet',
                cost: '$3 вх / $15 исх',
                quality: 'Отлично',
                speed: 'Быстро',
                bestFor: 'Техническое, убеждение',
              },
              {
                key: '3',
                provider: 'Claude 3 Opus',
                cost: '$3 вх / $15 исх',
                quality: 'Лучший в классе',
                speed: 'Средне',
                bestFor: 'Сложное, стратегическое',
              },
              {
                key: '4',
                provider: 'Mistral Large',
                cost: '$2 вх / $6 исх',
                quality: 'Хорошо',
                speed: 'Очень быстро',
                bestFor: 'Примеры кода, экономичность',
              },
            ]}
            columns={[
              {
                title: 'Провайдер',
                dataIndex: 'provider',
                key: 'provider',
              },
              {
                title: 'Лучше для',
                dataIndex: 'bestFor',
                key: 'bestFor',
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'monetization',
    header: 'Стратегия монетизации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Три параллельных потока доходов
          </Title>
          <Paragraph>
            TargetPitch.ai поддерживает три монетизации, работающие вместе
          </Paragraph>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Card size="small">
              <Tag color="green" style={{ marginBottom: 8 }}>
                Tier 1
              </Tag>
              <Title level={5} style={{ marginTop: 0 }}>
                Бесплатный
              </Title>
              <List
                size="small"
                dataSource={[
                  '1 презентация/месяц',
                  'Стандартная форма',
                  'Хранение 30 дней',
                  'Без регистрации',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
              <Text type="secondary" style={{ fontSize: '11px' }}>
                Цель: Активация, сарафанное радио
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
              <Tag color="blue" style={{ marginBottom: 8 }}>
                Tier 2
              </Tag>
              <Title level={5} style={{ marginTop: 0 }}>
                На основе токенов
              </Title>
              <List
                size="small"
                dataSource={[
                  '$5 → 15K токенов',
                  '$25 → 100K токенов',
                  '$99 → 500K токенов',
                  'Оплата по факту использования',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
              <Text type="secondary" style={{ fontSize: '11px' }}>
                Цель: Индивидуальные пользователи и малый бизнес
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
              <Tag color="gold" style={{ marginBottom: 8 }}>
                Tier 3
              </Tag>
              <Title level={5} style={{ marginTop: 0 }}>
                Корпоративная подписка
              </Title>
              <List
                size="small"
                dataSource={[
                  'Team Starter: $99/месяц',
                  'Team Professional: $299/месяц',
                  'Enterprise: Индивидуальная цена',
                  'Неограниченные презентации',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
              <Text type="secondary" style={{ fontSize: '11px' }}>
                Цель: Команды и предприятия
              </Text>
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Модель доходов (прогноз на 12 месяц)
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                stream: 'Индивидуальный (на основе токенов)',
                users: '500 MAU',
                paid: '10 платных пользователей',
                revenue: '$250/месяц',
              },
              {
                key: '2',
                stream: 'Корпоративный (подписка)',
                users: '5 аккаунтов',
                paid: 'Микс: Starter + Pro + Enterprise',
                revenue: '$5,696/месяц',
              },
              {
                key: '3',
                stream: 'Общий MRR',
                users: '',
                paid: '',
                revenue: '$5,946/месяц',
              },
            ]}
            columns={[
              {
                title: 'Поток доходов',
                dataIndex: 'stream',
                key: 'stream',
              },
              {
                title: 'Доход',
                dataIndex: 'revenue',
                key: 'revenue',
                align: 'right',
                render: (text, record) => (
                  <Text strong={record.key === '3'}>{text}</Text>
                ),
              },
            ]}
          />
          <Divider style={{ margin: '12px 0' }} />
          <Text type="secondary" style={{ fontSize: '12px' }}>
            КЛЮЧЕВОЕ ПОНИМАНИЕ: Корпоративный уровень = только 1% пользователей,
            но генерирует 95% дохода
          </Text>
        </Card>
      </Space>
    ),
  },

  {
    id: 'technical-architecture',
    header: 'Основная техническая архитектура',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CodeOutlined style={{ marginRight: 8 }} />
                Фронтенд стек
              </Title>
              <List
                size="small"
                dataSource={[
                  'Next.js (SSR/SSG)',
                  'Swiper.js (navigation)',
                  'Tailwind CSS + CSS-in-JS',
                  'React Hook Form + Zod',
                  'Vercel deployment',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <DatabaseOutlined style={{ marginRight: 8 }} />
                Бэкенд стек
              </Title>
              <List
                size="small"
                dataSource={[
                  'Node.js + Express/NestJS',
                  'PostgreSQL (Railway)',
                  'Redis (cache)',
                  'Bull (job queue)',
                  'DigitalOcean Spaces (S3)',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CloudOutlined style={{ marginRight: 8 }} />
            Обзор инфраструктуры
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Домен">
              <Text strong>targetpitch.ai</Text>
              <br />
              <Text type="secondary" style={{ fontSize: '11px' }}>
                Доступен к приобретению за 21 000 ₽ на reg.ru
              </Text>
            </Descriptions.Item>
            <Descriptions.Item label="Фронтенд">
              Vercel (автодеплой из Git)
            </Descriptions.Item>
            <Descriptions.Item label="Бэкенд">
              Railway (Node.js + PostgreSQL + Redis)
            </Descriptions.Item>
            <Descriptions.Item label="Хранилище">
              DigitalOcean Spaces (S3-совместимый)
            </Descriptions.Item>
            <Descriptions.Item label="Мониторинг">
              Sentry (отслеживание ошибок)
            </Descriptions.Item>
            <Descriptions.Item label="Ориентировочная стоимость">
              <Text strong>$60-80/месяц для MVP</Text>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'technical-implementation',
    header: 'Техническая реализация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Архитектура под капотом
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <ApiOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                  Frontend: React/Next.js
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Готовый набор компонентов для слайдов',
                    'Специфицированные React-компоненты',
                    'SSR/SSG для быстрой загрузки',
                    'Динамический рендеринг презентаций',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <ThunderboltOutlined
                    style={{ color: '#722ed1', marginRight: 8 }}
                  />
                  ИИ-агент
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Анализ проблематики клиента',
                    'Заполнение React-компонентов данными',
                    'Оптимизация под продажи',
                    'Персонализация контента',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text style={{ fontSize: '12px' }}>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CloudOutlined style={{ marginRight: 8 }} />
            Процесс генерации
          </Title>
          <List
            size="small"
            dataSource={[
              'Пользователь заполняет простую форму',
              'Система собирает данные из онбординга',
              'ИИ-агент анализирует введенные данные',
              'ИИ задает уточняющие вопросы (если нужно)',
              'Пользователь отвечает на вопросы',
              'ИИ-агент анализирует полный контекст и проблематику',
              'ИИ заполняет React-компоненты структурированными данными',
              'Готовая презентация публикуется на поддомен',
              'URL: {client-name-slug}.targetpitch.ai/{presentation-slug}',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Преимущества подхода
          </Title>
          <List
            size="small"
            dataSource={[
              '✅ Готовые компоненты = быстрая разработка',
              '✅ React = гибкость и расширяемость',
              '✅ ИИ заполняет компоненты = качественный контент',
              '✅ Поддомен с именем клиента = персонализация',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'mvp-scope',
    header: 'Область MVP (Фаза 1: 6-8 недель)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ marginRight: 8 }} />В области ✅
          </Title>
          <List
            size="small"
            dataSource={[
              'Целевая страница (кастомный Next.js)',
              'Простая форма (без регистрации)',
              'Интеграция LLM с динамической маршрутизацией',
              'Рендерер презентаций на React',
              'Опубликованные презентации (публичные URL)',
              'Экспорт PDF (html2canvas)',
              'Покупка токенов (Yookassa)',
              'Аналитика (базовая)',
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
            <WarningOutlined style={{ marginRight: 8 }} />
            Вне области ❌ (Фаза 2+)
          </Title>
          <List
            size="small"
            dataSource={[
              'Аутентификация пользователей и полная панель управления',
              'История презентаций / редактирование',
              'Интеграция OSINT',
              'Telegram Mini App / Бот',
              'Интеграции CRM',
              'Профессиональная генерация PDF (Puppeteer)',
              'White-label',
              'Пользовательские шаблоны',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CloseOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'roadmap',
    header: 'Дорожная карта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Roadmap
          items={[
            {
              title: 'Фаза 1: Запуск MVP',
              description:
                'Целевая страница + Форма + Маршрутизация LLM, Публикация презентаций + Экспорт PDF, Покупка токенов (Yookassa), Набор бета-пользователей. Успех: 50-100 презентаций, $500-1000 MRR',
              duration: 'Недели 1-8',
              icon: <RocketOutlined />,
              color: 'blue',
            },
            {
              title: 'Фаза 2: Панель управления и авторизация',
              description:
                'Аутентификация пользователей (email-first), Панель управления: история презентаций, Редактирование презентаций, OSINT базовая (продажные презентации). Успех: 30%+ повторное использование, $2-3K MRR',
              duration: 'Недели 9-16',
              icon: <SettingOutlined />,
              color: 'green',
            },
            {
              title: 'Фаза 3-5: Масштабирование',
              description:
                'Telegram Mini App & Бот, Интеграции CRM (HubSpot, Salesforce), Маркетплейс шаблонов, White-label для агентств, Корпоративные функции. Успех: $20-50K MRR, 2000+ активных пользователей',
              duration: 'Недели 17-32+',
              icon: <ThunderboltOutlined />,
              color: 'orange',
            },
          ]}
          mode="alternate"
        />
      </Space>
    ),
  },
  {
    id: 'user-journey',
    header: 'Путь пользователя (MVP)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Поток
          </Title>
          <List
            size="small"
            dataSource={[
              'Переход на targetpitch.ai (домен доступен к приобретению)',
              'Чтение hero + демо + цены',
              'Клик "Попробовать бесплатно"',
              'Заполнение формы (1-2 минуты)',
              'Клик "Сгенерировать"',
              '[БЭКЕНД] Асинхронная задача (30-60 сек)',
              'Перенаправление на презентацию',
              'Пользователь видит презентацию с действиями',
              'Пользователь делится ссылкой или скачивает PDF',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            Бэкенд процесс
          </Title>
          <List
            size="small"
            dataSource={[
              'Анализ типа + контекста',
              'Маршрутизация к оптимальной LLM (GPT-4o или Claude)',
              'Построение персонализированного промпта',
              'Вызов LLM (стрим, списание токенов)',
              'Парсинг JSON',
              'Рендеринг React компонентов',
              'Публикация на {client-name-slug}.targetpitch.ai/{presentation-slug}',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'go-to-market',
    header: 'Стратегия выхода на рынок',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalendarOutlined style={{ marginRight: 8 }} />
            Фаза 1: Целевая страница + Бета (Недели 1-4)
          </Title>
          <List
            size="small"
            dataSource={[
              'Целевая страница (кастомный Next.js)',
              'Набор бета-тестеров (30-50 пользователей)',
              'Каналы: LinkedIn, Tech Slack, Habr, Telegram',
              'Стимул: Бесплатные токены на 1 месяц',
              'Успех: 30+ набрано, 50+ презентаций, NPS > 40',
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
            <BarChartOutlined style={{ marginRight: 8 }} />
            Фаза 2: Платный запуск + Яндекс.Директ (Недели 5-8)
          </Title>
          <List
            size="small"
            dataSource={[
              'Кампания Яндекс.Директ ($500-1000/месяц)',
              'Ключевые слова: "генератор презентаций AI", "создать презентацию быстро"',
              'Цель конверсии: 5-10% заполнение формы → презентация',
              'Ожидаемый CTR: 3-5%',
              'Органический рост: Блог, Habr, Twitter/X',
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
    id: 'success-metrics',
    header: 'Метрики успеха (MVP)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <UserOutlined style={{ marginRight: 8 }} />
                Привлечение
              </Title>
              <List
                size="small"
                dataSource={[
                  'Трафик на целевую страницу: 2K-3K/неделю',
                  'Конверсия целевой страницы: > 10%',
                  'Завершение формы: > 80%',
                  'CAC: < $15',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <ThunderboltOutlined style={{ marginRight: 8 }} />
                Активация
              </Title>
              <List
                size="small"
                dataSource={[
                  'Время до первой: < 10 минут',
                  'Успешность генерации: > 95%',
                  'Время генерации: < 90 секунд',
                  'Удовлетворенность пользователей: > 4.5/5',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <DollarOutlined style={{ marginRight: 8 }} />
                Монетизация
              </Title>
              <List
                size="small"
                dataSource={[
                  'Бесплатный → платный: 2-5%',
                  'MRR неделя 8: $500-1000',
                  'Средний расход токенов: $20-40/месяц',
                  'Окупаемость CAC: < 90 дней',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <TrophyOutlined style={{ marginRight: 8 }} />
                Качество
              </Title>
              <List
                size="small"
                dataSource={[
                  'Релевантность контента LLM: > 4/5',
                  'Профессионализм: > 4.5/5',
                  'Частота ошибок: < 2%',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
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
    id: 'risks',
    header: 'Риски и смягчение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ marginRight: 8 }} />
            Ключевые риски
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                risk: 'Несогласованность качества LLM',
                impact: 'Плохие презентации вредят бренду',
                likelihood: 'Средний',
                mitigation:
                  'Инженерия промптов, цикл обратной связи, A/B тестирование',
              },
              {
                key: '2',
                risk: 'Превышение стоимости токенов',
                impact: 'Эрозия маржи',
                likelihood: 'Средний',
                mitigation: 'Мониторинг стоимости по моделям, кэширование',
              },
              {
                key: '3',
                risk: 'Неэффективность Яндекс.Директ',
                impact: 'CAC слишком высокий',
                likelihood: 'Средний',
                mitigation:
                  'Тестирование ключевых слов, A/B тесты целевой страницы',
              },
              {
                key: '4',
                risk: 'Медленное принятие рынком',
                impact: 'Недостаточно пользователей',
                likelihood: 'Средний',
                mitigation:
                  'Тестирование других персон, корректировка сообщений',
              },
            ]}
            columns={[
              {
                title: 'Риск',
                dataIndex: 'risk',
                key: 'risk',
              },
              {
                title: 'Смягчение',
                dataIndex: 'mitigation',
                key: 'mitigation',
              },
            ]}
          />
        </Card>
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
            Ключевые выводы
          </Title>
          <List
            size="small"
            dataSource={[
              'AI-powered платформа для автоматизации создания презентаций',
              'Три монетизации: Бесплатный + Токены + Корпоративный',
              'Динамическая маршрутизация LLM для оптимизации качества',
              'Российский рынок как стартовая точка',
              'MVP: 6-8 недель, $60-80/месяц инфраструктура',
              'Цель: $5-10K MRR к концу года',
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
];
