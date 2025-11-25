import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import kirovStekloImg from './img.png';
import {
  MessageOutlined,
  ThunderboltOutlined,
  SettingOutlined,
  LinkOutlined,
  BarChartOutlined,
  RocketOutlined,
  ApiOutlined,
  CodeOutlined,
  FormOutlined,
  UserOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  ShopOutlined,
  WarningOutlined,
  CheckOutlined,
  CloseOutlined,
  MailOutlined,
  GlobalOutlined,
  SearchOutlined,
  MergeCellsOutlined,
  DatabaseOutlined,
  WarningTwoTone,
  CheckCircleTwoTone,
  TeamOutlined,
  SafetyOutlined,
  DeploymentUnitOutlined,
  BookOutlined,
  UserSwitchOutlined,
  ExperimentOutlined,
  CheckCircleOutlined as CheckCircleOutlinedIcon,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for Kirov Steklo presentation
 * Based on documentation in features/kirov-steklo/docs
 */
export const kirovStekloSlides: SlideData[] = [
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
            href="https://kirovsteklo.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--app-spacing-md)',
            }}
          >
            <img
              src={kirovStekloImg}
              alt="Кировстекло"
              style={{
                maxWidth: '400px',
                height: 'auto',
              }}
            />
          </a>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Производство зеркал и стекол под индивидуальные размеры
          </Paragraph>
          <Link
            href="https://kirovsteklo.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--app-font-size-lg)',
              fontWeight: 500,
            }}
          >
            kirovsteklo.ru
          </Link>
        </Space>
      </Space>
    ),
  },
  {
    id: 'problem',
    header: 'Проблематика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <List
            size="large"
            dataSource={[
              {
                title: 'Заявки приходят в разрозненном виде',
                description:
                  'Заявки поступают в свободной форме (текст, голос, фото). Нет цели жестко формализировать заявку на входе, чтобы не снижать количество заявок. Требуется гибкая система распознавания и обработки неформализованных заявок',
              },
              {
                title: 'Отсутствие централизованной IT-системы',
                description:
                  'Весь учет ведется в электронных таблицах. Нет единой системы управления производством. Электронные таблицы не справляются с масштабом операций',
              },
              {
                title: 'Проблемы с Битрикс24',
                description:
                  'Система используется, но не выполняет основные задачи. Плохо справляется с отслеживанием статусов заявок. Не обеспечивает контроль прохождения производственного цикла',
              },
              {
                title: 'Отсутствие прозрачности процессов',
                description:
                  'Руководство не имеет четкого представления о производственных процессах. Нет возможности оперативного мониторинга. Сложно контролировать загрузку производства',
              },
              {
                title: 'Разрозненные каналы коммуникации',
                description:
                  'Множество каналов приема заявок не интегрированы между собой. Отсутствует единая точка входа для заказов. Нет автоматизированного информирования',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Text strong>{item.title}</Text>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </Space>
    ),
  },
  {
    id: 'goal',
    header: 'Главная цель',
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
        <Title
          level={2}
          style={{
            textAlign: 'center',
            fontWeight: 400,
            maxWidth: '800px',
            margin: 0,
          }}
        >
          Создание единой IT-системы для полного цикла управления заказами от
          приема заявки до выдачи готовой продукции
        </Title>
      </Space>
    ),
  },
  {
    id: 'solution-overview',
    header: 'Верхнеуровневая архитектура решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <MessageOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                1. Каналы приема заявок
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Веб-форма, Email, Telegram, WhatsApp, Avito, ВКонтакте
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <ThunderboltOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                2. Распознавание и обработка
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Интеллектуальное распознавание неформализованных заявок
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <SettingOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                3. Управление производством
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Производственные карточки, отслеживание этапов, статусы
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <LinkOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                4. Интеграции
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Платежные системы, автоматическое информирование
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <BarChartOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                5. Аналитика
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Мониторинг процессов, отчетность для руководства
              </Paragraph>
            </Card>
          </Col>
        </Row>
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
                Вариант 1: Bitrix-центричное
              </Title>
              <Paragraph>
                <Text strong>
                  Максимальное использование возможностей Битрикс24
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
                    2-3.5 месяца до MVP
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Быстрый старт',
                      'Минимальная разработка',
                      'Единая экосистема',
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
            <Card>
              <Title level={3} style={{ marginTop: 0 }}>
                <ApiOutlined
                  style={{
                    marginRight: 'var(--app-spacing-xs)',
                    color: 'var(--app-color-primary)',
                  }}
                />
                Вариант 2: Гибридное
              </Title>
              <Paragraph>
                <Text strong>
                  Битрикс как backend/CRM, специализированный frontend
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
                    6-8.5 месяцев до MVP
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'UX оптимизация',
                      'Гибкость',
                      'Современный стек',
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
            <Card>
              <Title level={3} style={{ marginTop: 0 }}>
                <CodeOutlined
                  style={{
                    marginRight: 'var(--app-spacing-xs)',
                    color: 'var(--app-color-primary)',
                  }}
                />
                Вариант 3: Независимое
              </Title>
              <Paragraph>
                <Text strong>Полностью кастомная разработка без Битрикс</Text>
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
                    9-11.5 месяцев до MVP
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Полная кастомизация',
                      'Независимость',
                      'Идеальный UX',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>
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
    id: 'demo-title',
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
        <Title level={1} style={{ textAlign: 'center', marginBottom: 0 }}>
          Демонстрация сценария
        </Title>
        <Divider
          style={{ margin: 'var(--app-spacing-lg) 0', width: '200px' }}
        />
        <Paragraph
          style={{
            fontSize: 'var(--app-font-size-xl)',
            textAlign: 'center',
            maxWidth: '800px',
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          "Прием заявки и создание заказа"
        </Paragraph>
        <Paragraph
          style={{ marginTop: 'var(--app-spacing-lg)', marginBottom: 0 }}
        >
          <Text type="secondary" italic>
            На примере каждого из решений
          </Text>
        </Paragraph>
      </Space>
    ),
  },
  {
    id: 'order-problem',
    header: 'Проблема: Прием заявки и создание заказа',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Title level={3}>Сейчас (без системы):</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title level={4} style={{ marginTop: 0 }}>
                  <WarningOutlined
                    style={{ color: '#ff4d4f', marginRight: 8 }}
                  />
                  Разрозненные каналы
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Заявки из разных мест: сайт, email, Telegram, WhatsApp, звонки',
                    'Нет единой точки входа',
                    'Заявки часто теряются или записываются дважды',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
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
                <Title level={4} style={{ marginTop: 0 }}>
                  <WarningOutlined
                    style={{ color: '#ff4d4f', marginRight: 8 }}
                  />
                  Ручная работа
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Менеджер вручную записывает всё в таблицы Excel',
                    'Нет единого образца технического задания',
                    'Невозможно посмотреть историю переписки',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
        </Row>
        <Divider size="small" />
        <Title level={3}>После внедрения системы:</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title level={4} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Интеллектуальная обработка
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Валидация только критичных полей',
                    'ИИ анализирует и дозаполняет заявку',
                    'Подготовка структурированной заявки для оператора',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
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
                <Title level={4} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Автоматизация и прозрачность
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Все заявки собираются в единой системе',
                    'Вся история общения сохраняется',
                    'Мгновенное обновление статусов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
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
    id: 'order-process-overview',
    header: 'Процесс: От заявки до производства',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Клиент заполняет форму',
                description:
                  'Указывает основные параметры, система валидирует только критичные поля',
                icon: <FormOutlined />,
              },
              {
                title: 'Интеллектуальная обработка заявки',
                description:
                  'Система ИИ анализирует данные, извлекает параметры и дозаполняет недостающую информацию',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Подготовка структурированной заявки',
                description:
                  'Формирование полной заявки с техническими параметрами, готовой для обработки оператором',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'Менеджер обрабатывает заявку',
                description:
                  'Проверяет подготовленные данные, рассчитывает стоимость, создает КП (минимум вопросов к клиенту)',
                icon: <UserOutlined />,
              },
              {
                title: 'Согласование и оплата',
                description:
                  'Отправка КП, выставление счета, подтверждение оплаты',
                icon: <CreditCardOutlined />,
              },
              {
                title: 'Создание производственной карточки',
                description:
                  'Автоматическое создание карточки для производства',
                icon: <ShopOutlined />,
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'order-step1-client',
    header: 'Шаг 1: Клиент заполняет форму на сайте',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FormOutlined style={{ marginRight: 8 }} />
            Работа с обоими сегментами клиентов:
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue" style={{ marginBottom: 8 }}>
                    B2C - Частные лица
                  </Tag>
                  <List
                    size="small"
                    dataSource={[
                      'Веб-форма на сайте',
                      'Мессенджеры (Telegram, WhatsApp)',
                      'Голосовой ввод',
                      'Фото эскизов',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
                  <Tag color="green" style={{ marginBottom: 8 }}>
                    B2B - Компании
                  </Tag>
                  <List
                    size="small"
                    dataSource={[
                      'Личный кабинет',
                      'Email-заявки',
                      'API интеграция',
                      'Массовые заказы',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
            <FormOutlined style={{ marginRight: 8 }} />
            Упрощенный процесс заполнения:
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Валидация критичных полей:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Контактные данные клиента',
                      'Тип изделия (зеркало/стекло)',
                      'Базовые размеры',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
                  <Text strong>ИИ-помощь в дозаполнении:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Автоматическое определение формы',
                      'Распознавание параметров обработки',
                      'Предложение дополнительных опций',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
            Процесс обработки:
          </Title>
          <Paragraph>
            Система валидирует только самые необходимые поля для создания
            заявки. Остальные параметры система анализирует с помощью технологий
            искусственного интеллекта и предлагает клиенту варианты
            дозаполнения. При успешной обработке создается заявка и отправляются
            уведомления участникам процесса.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'order-ai-processing',
    header: 'Интеллектуальная обработка заявки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Анализ и подготовка заявки системой ИИ:
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Анализ поступившей информации',
                description:
                  'Система анализирует все предоставленные клиентом данные, включая текстовые описания, изображения и контекстные указания',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Извлечение структурированных параметров',
                description:
                  'Автоматическое распознавание размеров, формы, типа обработки и дополнительных опций из неформализованного текста',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Дозаполнение недостающих данных',
                description:
                  'Система предлагает клиенту варианты заполнения недостающих полей на основе контекста и типовых решений',
                icon: <FormOutlined />,
              },
              {
                title: 'Подготовка структурированной заявки',
                description:
                  'Формирование полной производственной карточки с техническими параметрами, готовой для обработки оператором',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'Обнаружение и дедупликация клиента',
                description:
                  'Автоматический поиск существующего клиента в базе данных по контактным данным для предотвращения создания дубликатов',
                icon: <SearchOutlined />,
              },
            ]}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Результат для оператора:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Заявка содержит максимально полную информацию',
                  'Минимальное количество вопросов к клиенту',
                  'Готовые технические параметры для расчета',
                  'Структурированные данные для производства',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <BarChartOutlined
                  style={{ color: '#1890ff', marginRight: 8 }}
                />
                Преимущества:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Сокращение времени обработки заявки',
                  'Повышение качества технических заданий',
                  'Снижение количества ошибок',
                  'Улучшение клиентского опыта',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
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
    id: 'order-client-deduplication',
    header: 'Решение проблемы дедупликации клиентов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningTwoTone twoToneColor="#ff4d4f" style={{ marginRight: 8 }} />
            Критическая проблема:
          </Title>
          <Paragraph>
            Один и тот же клиент может обратиться через разные каналы: веб-сайт,
            Авито, Telegram, WhatsApp, email. Без системы дедупликации это
            приводит к созданию дубликатов записей в базе данных, что нарушает
            целостность данных и усложняет работу менеджеров.
          </Paragraph>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Пример проблемы:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Клиент заказал через Авито',
                      'Тот же клиент написал в Telegram',
                      'Созданы 2 записи в базе',
                      'История заказов разрознена',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
                  <Text strong>Наше решение:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Автоматический поиск существующего клиента',
                      'Объединение записей при обнаружении',
                      'Единая история всех заказов',
                      'Прозрачность для менеджера',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
            <DatabaseOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Механизм обнаружения и дедупликации:
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Нормализация контактных данных',
                description:
                  'Система нормализует телефонные номера (убирает пробелы, скобки, приводит к единому формату) и email адреса для точного сравнения',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Многоуровневый поиск совпадений',
                description:
                  'Поиск по телефону, email, ФИО с использованием алгоритмов нечеткого сравнения для учета опечаток и вариаций написания',
                icon: <SearchOutlined />,
              },
              {
                title: 'ИИ-анализ похожести записей',
                description:
                  'Использование технологий машинного обучения для определения вероятности того, что две записи относятся к одному клиенту',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Автоматическое объединение или предложение',
                description:
                  'При высокой уверенности система автоматически объединяет записи. При сомнениях предлагает менеджеру подтвердить объединение',
                icon: <MergeCellsOutlined />,
              },
            ]}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleTwoTone
                  twoToneColor="#52c41a"
                  style={{ marginRight: 8 }}
                />
                Критерии поиска:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Телефонный номер (основной критерий)',
                  'Email адрес',
                  'ФИО с учетом опечаток',
                  'Адрес доставки (для B2C)',
                  'Название компании (для B2B)',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleTwoTone
                  twoToneColor="#52c41a"
                  style={{ marginRight: 8 }}
                />
                Результат:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Единая запись клиента в базе',
                  'Полная история всех заказов',
                  'Все каналы связи в одном месте',
                  'Точная аналитика по клиентам',
                  'Нет дубликатов и путаницы',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Пример работы:
          </Title>
          <Card
            size="small"
            style={{ backgroundColor: '#f5f5f5', marginTop: 8 }}
          >
            <Space
              orientation="vertical"
              size="small"
              style={{ width: '100%' }}
            >
              <div>
                <Text strong>Новая заявка:</Text> Иван Иванов, +7 (999)
                123-45-67 (через Авито)
              </div>
              <div>
                <Text strong>Поиск в базе:</Text> Найдена запись "Иванов И.И.",
                +79991234567 (Telegram)
              </div>
              <div>
                <Text strong>Результат:</Text>{' '}
                <Tag color="green">Автоматически объединено</Tag> - заявка
                привязана к существующему клиенту
              </div>
            </Space>
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'order-step2-manager',
    header: 'Шаг 2: Менеджер обрабатывает заявку',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Заявка подготовлена системой ИИ:
          </Title>
          <Paragraph>
            Благодаря интеллектуальной обработке заявка поступает к менеджеру
            уже структурированной и содержащей максимально полную информацию.
            Система проанализировала все данные, извлекла параметры и
            подготовила техническое задание, что минимизирует необходимость
            дополнительных уточнений у клиента.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Действия менеджера:
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Открывает подготовленную заявку',
                description:
                  'Получает структурированную заявку с техническими параметрами, извлеченными системой ИИ',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Проверяет корректность данных',
                description:
                  'Проводит финальную проверку подготовленных данных, при необходимости уточняет детали у клиента',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'Рассчитывает стоимость',
                description:
                  'Использует встроенный калькулятор системы на основе подготовленных параметров',
                icon: <CalculatorOutlined />,
              },
              {
                title: 'Создает коммерческое предложение',
                description:
                  'Генерирует КП с учетом всех технических параметров, определенных системой',
                icon: <FileTextOutlined />,
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'order-step3-payment',
    header: 'Шаг 3: Согласование и оплата',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CreditCardOutlined style={{ marginRight: 8 }} />
            Процесс оплаты:
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Менеджер создает КП',
                description:
                  'Система автоматически формирует коммерческое предложение',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Отправка КП клиенту',
                description: 'На email, WhatsApp или Telegram',
                icon: <MailOutlined />,
              },
              {
                title: 'Согласование',
                description:
                  'Клиент подтверждает условия или запрашивает изменения',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'Выставление счета',
                description: 'Менеджер выставляет счет в системе',
                icon: <CreditCardOutlined />,
              },
              {
                title: 'Оплата',
                description:
                  'Клиент оплачивает через банковское приложение или по счету',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'Подтверждение оплаты',
                description:
                  'Система автоматически получает подтверждение от банка',
                icon: <ThunderboltOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Paragraph>
            <Text strong>После оплаты:</Text> Система автоматически создает
            производственную карточку и уведомляет менеджера о готовности к
            запуску в производство.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'order-step4-production-card',
    header: 'Шаг 4: Создание производственной карточки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Автоматическое создание карточки для обоих сегментов:
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <div>
                    <Tag color="blue" style={{ marginBottom: 8 }}>
                      B2C - Частные лица
                    </Tag>
                  </div>
                  <div>
                    <Text strong>Источник заявки:</Text> Веб-форма, мессенджеры
                  </div>
                  <div>
                    <Text strong>Клиент:</Text> Физическое лицо
                  </div>
                  <div>
                    <Text strong>Оплата:</Text> Банковская карта, онлайн
                  </div>
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
                  <div>
                    <Tag color="green" style={{ marginBottom: 8 }}>
                      B2B - Компании
                    </Tag>
                  </div>
                  <div>
                    <Text strong>Источник заявки:</Text> Личный кабинет, email
                  </div>
                  <div>
                    <Text strong>Клиент:</Text> Юридическое лицо
                  </div>
                  <div>
                    <Text strong>Оплата:</Text> Счет для юр. лица
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Структура производственной карточки:
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Информация о заказе:</Text>
                  <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
                    <div>• Номер заказа</div>
                    <div>• Клиент (ФИО / Компания)</div>
                    <div>• Контакты</div>
                    <div>• Дата создания</div>
                    <div>• Менеджер</div>
                  </div>
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
                  <Text strong>Технические параметры:</Text>
                  <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
                    <div>• Тип и форма изделия</div>
                    <div>• Размеры и толщина</div>
                    <div>• Обработка кромки</div>
                    <div>• Дополнительные операции</div>
                    <div>• Сроки изготовления</div>
                    <div>• Статус оплаты</div>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Что происходит автоматически:
          </Title>
          <List
            size="small"
            dataSource={[
              'Система создает карточку сразу после подтверждения оплаты',
              'Все технические параметры переносятся из обработанной заявки',
              'Автоматически рассчитываются сроки изготовления',
              'Карточка готова для запуска в производство',
              'Уведомления отправляются менеджеру и клиенту',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'order-variant1-bitrix',
    header: 'Реализация: Вариант 1 - Битрикс24',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Как это работает:
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Форма на сайте отправляет данные в Битрикс24',
                description: 'Автоматическая интеграция через API',
                icon: <GlobalOutlined />,
              },
              {
                title: 'Битрикс создает заявку (лид)',
                description: 'Автоматическое создание карточки клиента',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Система назначает ответственного менеджера',
                description: 'По правилам или вручную',
                icon: <UserOutlined />,
              },
              {
                title: 'Уведомления менеджеру и клиенту',
                description: 'Email и push-уведомления',
                icon: <MailOutlined />,
              },
              {
                title: 'Вся информация в единой базе',
                description: 'История, переписка, документы',
                icon: <FileTextOutlined />,
              },
            ]}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                Преимущества:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Быстрый запуск (2-3 месяца)',
                  'Всё в одной системе',
                  'Готовая поддержка',
                  'Стандартный интерфейс',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CloseOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                Особенности:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Интерфейс может быть избыточным',
                  'Высокая стоимость лицензий',
                  'Сложно менять под себя',
                  'Требует мощный сервер',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
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
    id: 'order-variant2-hybrid',
    header: 'Реализация: Вариант 2 - Гибридное решение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Как это работает:
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Форма отправляет данные на наш сервер',
                description: 'Собственный API для приема заявок',
                icon: <GlobalOutlined />,
              },
              {
                title: 'Сервер проверяет и сохраняет в две базы',
                description: 'В свою БД и в Битрикс/Odoo',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Система рассылает уведомления',
                description: 'Всем участникам процесса',
                icon: <MailOutlined />,
              },
              {
                title: 'Менеджер работает в удобном интерфейсе',
                description: 'Современный UI, заточенный под задачи',
                icon: <UserOutlined />,
              },
            ]}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                Преимущества:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Удобный интерфейс для каждой роли',
                  'Можно использовать бесплатный Odoo',
                  'Легко добавлять новые функции',
                  'Современный дизайн',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CloseOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                Особенности:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Дольше разработка (6-8 месяцев)',
                  'Нужно поддерживать две системы',
                  'Сложнее в настройке',
                  'Требует хороших разработчиков',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
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
    id: 'order-variant3-custom',
    header: 'Реализация: Вариант 3 - Полностью своя система',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Как это работает:
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Форма отправляет данные в вашу систему',
                description: 'Полный контроль над процессом и данными',
                icon: <GlobalOutlined />,
              },
              {
                title: 'Система проверяет и сохраняет данные',
                description: 'Собственная база данных с полной безопасностью',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'Автоматически создает номер заказа',
                description: 'Уникальная нумерация по вашим бизнес-правилам',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Проверяет наличие клиента в базе',
                description: 'Интеллектуальное связывание с полной историей',
                icon: <UserOutlined />,
              },
              {
                title: 'Рассылает уведомления по выбранным каналам',
                description:
                  'SMS, Telegram, WhatsApp, Email - все в одном месте',
                icon: <MailOutlined />,
              },
              {
                title: 'Назначает менеджера автоматически',
                description: 'Умное распределение нагрузки по вашим правилам',
                icon: <UserOutlined />,
              },
            ]}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: 'var(--ant-color-success)', marginRight: 8 }}
                />
                Ключевые преимущества:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Полностью заточено под ваши бизнес-процессы',
                  'Нет зависимости от внешних лицензий',
                  'Мгновенные изменения под новые требования',
                  'Максимальная производительность системы',
                  'Полный контроль над данными и безопасностью',
                  'Масштабируемость без ограничений',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <ThunderboltOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Дополнительные возможности:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Интеграция с любыми внешними системами',
                  'Кастомная аналитика и отчетность',
                  'Автоматизация сложных бизнес-процессов',
                  'Мобильные приложения под ваши нужды',
                  'Расширяемость функционала без ограничений',
                  'Долгосрочная инвестиция в развитие',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined
              style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
            />
            Результат:
          </Title>
          <Paragraph>
            Полностью кастомное решение, которое растет вместе с вашим бизнесом.
            Система разрабатывается с учетом всех ваших уникальных процессов и
            требований, обеспечивая максимальную эффективность и гибкость на
            долгосрочную перспективу.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'order-results',
    header: 'Результаты внедрения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                Было (без системы):
              </Title>
              <List
                size="small"
                dataSource={[
                  {
                    icon: <ClockCircleOutlined />,
                    text: 'Время обработки заявки: 2-3 часа',
                  },
                  {
                    icon: <CloseCircleOutlined />,
                    text: 'Потеря заявок: ~15%',
                  },
                  {
                    icon: <FileTextOutlined />,
                    text: 'Ошибки в техзадании: ~20%',
                  },
                  {
                    icon: <BarChartOutlined />,
                    text: 'Руководитель не видит процесс',
                  },
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Space>
                      {item.icon}
                      <Text>{item.text}</Text>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Стало (с системой):
              </Title>
              <List
                size="small"
                dataSource={[
                  {
                    icon: <ThunderboltOutlined />,
                    text: 'Время обработки: 15-30 минут',
                  },
                  {
                    icon: <CheckCircleOutlined />,
                    text: 'Потеря заявок: 0%',
                  },
                  {
                    icon: <FileTextOutlined />,
                    text: 'Ошибки в техзадании: меньше 5%',
                  },
                  {
                    icon: <BarChartOutlined />,
                    text: 'Полная прозрачность для руководства',
                  },
                  {
                    icon: <DollarOutlined />,
                    text: 'Больше заказов переходят в оплату: +25%',
                  },
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Space>
                      {item.icon}
                      <Text>{item.text}</Text>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Ключевые улучшения:
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                    -85%
                  </Title>
                  <Text>Время обработки заявки</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                    -100%
                  </Title>
                  <Text>Потеря заявок</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                    +25%
                  </Title>
                  <Text>Конверсия в оплату</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'approach',
    header: 'Наш подход к разработке',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Профессиональная методология работы:
          </Title>
          <Paragraph>
            Мы серьезно подходим к каждому проекту. Наша команда использует
            проверенные методологии и лучшие практики индустрии, обеспечивая
            качественный результат на всех этапах разработки.
          </Paragraph>
        </Card>
        <Card>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Анализ и дизайн',
                description:
                  'Глубокий анализ бизнес-процессов, проектирование архитектуры решения и создание детального дизайна системы',
                icon: <ExperimentOutlined />,
              },
              {
                title: 'Архитектура (параллельно)',
                description:
                  'Одновременно с дизайном наши архитекторы проектируют масштабируемую и надежную архитектуру решения',
                icon: <DeploymentUnitOutlined />,
              },
              {
                title: 'Разработка',
                description:
                  'Основная фаза разработки с применением современных технологий и лучших практик программирования',
                icon: <CodeOutlined />,
              },
              {
                title: 'Тестирование',
                description:
                  'Комплексное тестирование функциональности, производительности и безопасности системы',
                icon: <CheckCircleOutlinedIcon />,
              },
              {
                title: 'Выкатка на продакшн',
                description:
                  'Безопасный и контролируемый деплой на production-окружение с минимальным простоем',
                icon: <RocketOutlined />,
              },
              {
                title: 'Документация',
                description:
                  'Написание полной технической и пользовательской документации для поддержки и развития системы',
                icon: <BookOutlined />,
              },
              {
                title: 'Обучение пользователей',
                description:
                  'Проведение обучения для всех пользователей системы с практическими примерами и поддержкой',
                icon: <UserSwitchOutlined />,
              },
              {
                title: 'Поддержка и развитие',
                description:
                  'Непрерывная техническая поддержка, мониторинг работы системы и развитие функционала',
                icon: <SafetyOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            DevOps-поддержка на всех этапах:
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>На протяжении всего проекта:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Настройка CI/CD процессов',
                      'Мониторинг инфраструктуры',
                      'Обеспечение безопасности',
                      'Оптимизация производительности',
                      'Резервное копирование',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
                  <Text strong>Опытные специалисты:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Автоматизация деплоя',
                      'Настройка мониторинга',
                      'Управление конфигурациями',
                      'Обеспечение отказоустойчивости',
                      'Оптимизация ресурсов',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
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
            <CheckCircleOutlinedIcon
              style={{ color: 'var(--ant-color-success)', marginRight: 8 }}
            />
            Гарантии качества:
          </Title>
          <Paragraph>
            На каждом этапе мы обеспечиваем высокое качество работы. Наша
            команда использует code review, автоматизированное тестирование,
            непрерывную интеграцию и развертывание, что гарантирует стабильность
            и надежность создаваемого решения.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
