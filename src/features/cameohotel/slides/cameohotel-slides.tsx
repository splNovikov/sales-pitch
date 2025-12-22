import {
  Typography,
  Card,
  Space,
  List,
  Row,
  Col,
  Tag,
  Table,
  Divider,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseOutlined,
  RocketOutlined,
  MobileOutlined,
  ShoppingOutlined,
  GlobalOutlined,
  StarOutlined,
  PhoneOutlined,
  ApiOutlined,
  PictureOutlined,
  SettingOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  FileTextOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  ThunderboltOutlined,
  UserOutlined,
  PlayCircleOutlined,
  SearchOutlined,
  CodeOutlined,
  BgColorsOutlined,
  EyeOutlined,
  InfoCircleOutlined,
  BulbOutlined,
  ShopOutlined,
  VideoCameraOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { cameohotelCreatedAt } from './cameohotel.meta';

const { Title, Paragraph, Text, Link } = Typography;

// Roadmap для Варианта 1: Bitrix
const bitrixRoadmapItems: RoadmapItem[] = [
  {
    title: 'Настройка Bitrix, выбор и адаптация темы',
    description:
      'Развёртывание на Bitrix24.Cloud или собственном хостинге, SSL сертификат, выбор темы под задачи отельного сайта',
    duration: '1-2 недели',
    icon: <SettingOutlined />,
    color: 'blue',
  },
  {
    title: 'Разработка и кастомизация дизайна',
    description:
      'Адаптация темы под фирменную идентичность, мобильная версия, современный интерфейс',
    duration: '3-4 недели',
    icon: <BgColorsOutlined />,
    color: 'cyan',
  },
  {
    title: 'Интеграция Travelline и Яндекс Отзывов',
    description:
      'Настройка поиска номеров, отображение цен, кнопка бронирования, импорт и кастомное отображение отзывов',
    duration: '5-6 недели',
    icon: <ApiOutlined />,
    color: 'green',
  },
  {
    title: 'Наполнение контентом',
    description:
      'Использование текущих материалов, наполнение страниц, галерей, форм',
    duration: '7 неделя',
    icon: <FileTextOutlined />,
    color: 'orange',
  },
  {
    title: 'Тестирование и оптимизация',
    description:
      'QA тестирование, оптимизация скорости загрузки, проверка всех браузеров и устройств',
    duration: '8 неделя',
    icon: <SafetyOutlined />,
    color: 'purple',
  },
  {
    title: 'Запуск и настройка',
    description:
      'Миграция с текущего сайта, запуск в production, настройка DNS и сертификатов',
    duration: '9 неделя',
    icon: <PlayCircleOutlined />,
    color: 'green',
  },
];

// Roadmap для Варианта 2: Next.js без дизайнера
const nextjsWithoutDesignerRoadmapItems: RoadmapItem[] = [
  {
    title: 'Дизайн и проектирование UI/UX',
    description:
      'Анализ конкурентов, создание макета разработчиком, проектирование интерфейса',
    duration: '1-2 недели',
    icon: <EyeOutlined />,
    color: 'blue',
  },
  {
    title: 'Разработка фронтенда',
    description:
      'Компоненты, страницы, стили, формы бронирования, галереи, блоки отзывов',
    duration: '3-8 недели',
    icon: <CodeOutlined />,
    color: 'cyan',
  },
  {
    title: 'Интеграция Travelline и Яндекс Отзывов',
    description:
      'API интеграция, поиск номеров, динамические цены, кастомное отображение отзывов',
    duration: '9-10 недели',
    icon: <ApiOutlined />,
    color: 'green',
  },
  {
    title: 'Тестирование и оптимизация',
    description:
      'QA тестирование, Lighthouse оптимизация, анализ скорости загрузки, тестирование интеграций',
    duration: '11 неделя',
    icon: <SafetyOutlined />,
    color: 'orange',
  },
  {
    title: 'Запуск и мониторинг',
    description:
      'Развёртывание на Vercel, настройка CI/CD, запуск в production, мониторинг',
    duration: '12 неделя',
    icon: <PlayCircleOutlined />,
    color: 'green',
  },
];

// Roadmap для Варианта 3: Next.js с профессиональным дизайном
const nextjsWithDesignerRoadmapItems: RoadmapItem[] = [
  {
    title: 'Дизайн (анализ, макет, согласование)',
    description:
      'Анализ конкурентов, UX research, создание дизайн-макета в Figma, Design System, итерации',
    duration: '1-3 недели',
    icon: <PictureOutlined />,
    color: 'blue',
  },
  {
    title: 'Разработка фронтенда',
    description:
      'Pixel-perfect верстка по дизайну, компоненты, страницы, анимации',
    duration: '4-10 недели',
    icon: <CodeOutlined />,
    color: 'cyan',
  },
  {
    title: 'Интеграции и доработки',
    description:
      'Travelline, Яндекс Отзывы, Google Maps, Analytics, стилизация под дизайн',
    duration: '11-12 недели',
    icon: <ApiOutlined />,
    color: 'green',
  },
  {
    title: 'Тестирование и оптимизация',
    description:
      'Профессиональное QA, кроссбраузерность, Lighthouse оптимизация, тестирование интеграций',
    duration: '13 неделя',
    icon: <SafetyOutlined />,
    color: 'orange',
  },
  {
    title: 'Запуск и мониторинг',
    description:
      'Развёртывание на Vercel, настройка CI/CD, запуск, мониторинг первых дней',
    duration: '14 неделя',
    icon: <PlayCircleOutlined />,
    color: 'green',
  },
];

// Данные для сравнительной таблицы
const comparisonTableColumns = [
  {
    title: 'Критерий',
    dataIndex: 'criterion',
    key: 'criterion',
    width: 200,
  },
  {
    title: 'Вариант 1\nBitrix CMS\n95K',
    dataIndex: 'variant1',
    key: 'variant1',
    width: 150,
    render: (text: React.ReactNode) => (
      <div style={{ whiteSpace: 'pre-line' }}>{text}</div>
    ),
  },
  {
    title: 'Вариант 2\nNext.js\n105K',
    dataIndex: 'variant2',
    key: 'variant2',
    width: 150,
    render: (text: React.ReactNode) => (
      <div style={{ whiteSpace: 'pre-line' }}>{text}</div>
    ),
  },
  {
    title: 'Вариант 3\nNext.js + Дизайн\n155K',
    dataIndex: 'variant3',
    key: 'variant3',
    width: 150,
    render: (text: React.ReactNode) => (
      <div style={{ whiteSpace: 'pre-line' }}>{text}</div>
    ),
  },
];

const comparisonTableData = [
  {
    key: '1',
    criterion: 'Стоимость',
    variant1: '95 000 ₽',
    variant2: '105 000 ₽',
    variant3: '155 000 ₽',
  },
  {
    key: '2',
    criterion: 'Сроки',
    variant1: '2 месяца',
    variant2: '3 месяца',
    variant3: '3.5 месяца',
  },
  {
    key: '3',
    criterion: 'Тип решения',
    variant1: 'CMS платформа',
    variant2: 'Собственный код',
    variant3: 'Собственный код',
  },
  {
    key: '4',
    criterion: 'Дизайн качество',
    variant1: 'Средний (шаблонный)',
    variant2: 'Хороший (разработчик)',
    variant3: 'Отличный (дизайнер)',
  },
  {
    key: '5',
    criterion: 'Управление контентом',
    variant1: <Tag color="green">Легко (без разработчика)</Tag>,
    variant2: <Tag color="orange">Требуется разработчик</Tag>,
    variant3: <Tag color="orange">Требуется разработчик</Tag>,
  },
  {
    key: '6',
    criterion: 'Гибкость и кастомизация',
    variant1: <Tag color="orange">Ограниченная</Tag>,
    variant2: <Tag color="green">Полная</Tag>,
    variant3: <Tag color="green">Полная</Tag>,
  },
  {
    key: '7',
    criterion: 'Производительность',
    variant1: <Tag color="default">Средняя</Tag>,
    variant2: <Tag color="green">Высокая</Tag>,
    variant3: <Tag color="green">Высокая</Tag>,
  },
  {
    key: '8',
    criterion: 'Собственный код',
    variant1: <CloseOutlined style={{ color: 'red' }} />,
    variant2: <CheckCircleOutlined style={{ color: 'green' }} />,
    variant3: <CheckCircleOutlined style={{ color: 'green' }} />,
  },
  {
    key: '9',
    criterion: 'Лицензионные платежи',
    variant1: <Tag color="red">Да (5K+/месяц)</Tag>,
    variant2: <Tag color="green">Нет</Tag>,
    variant3: <Tag color="green">Нет</Tag>,
  },
  {
    key: '10',
    criterion: 'Поддержка после запуска',
    variant1: '3 месяца',
    variant2: '1 месяц',
    variant3: '3 месяца',
  },
];

export const cameohotelSlides: SlideData[] = [
  // Главный слайд
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Cameo Hotel"
        subtitle="Редизайн сайта отеля и апартаментов"
        description="Полный редизайн веб-сайта с целью осовременить визуальное представление бренда, обеспечить полную адаптивность и интегрировать систему управления бронированиями"
        createdAt={cameohotelCreatedAt}
        location="cameohotel.ru"
      />
    ),
  },

  // Контекст и исходные данные
  {
    id: 'context',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Контекст и исходные данные"
        subtitle="Клиент, объект и входные данные"
        imageIndex={0}
      />
    ),
  },
  {
    id: 'context-client',
    header: 'Клиент и объект',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Space direction="vertical" size="middle">
                  <Title level={4}>
                    <UserOutlined
                      style={{
                        color: 'var(--app-color-primary)',
                        marginRight: 8,
                      }}
                    />
                    Клиент
                  </Title>
                  <Text strong>Татьяна</Text>
                  <Text type="secondary">
                    Статус лида: хорошо квалифицированный, заинтересована в
                    работе, но чувствительна к бюджету
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Space direction="vertical" size="middle">
                  <Title level={4}>
                    <ShopOutlined
                      style={{
                        color: 'var(--app-color-primary)',
                        marginRight: 8,
                      }}
                    />
                    Объект
                  </Title>
                  <Text strong>Cameo Hotel</Text>
                  <Text>(отель + апартаменты)</Text>
                  <Divider style={{ margin: '8px 0' }} />
                  <Text>
                    <GlobalOutlined style={{ marginRight: 4 }} />
                    Домен:{' '}
                    <Link href="https://www.cameohotel.ru/" target="_blank">
                      cameohotel.ru
                    </Link>
                  </Text>
                  <Text>
                    <DatabaseOutlined style={{ marginRight: 4 }} />
                    Система бронирования: Travelline
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
          <Card size="small" type="inner">
            <Title level={4}>
              <InfoCircleOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Текущее состояние сайта
            </Title>
            <List
              size="small"
              dataSource={[
                'Устаревший визуально',
                'Неудобный по UX',
                'Слабая работа с отзывами',
                'Слабая главная страница',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <CloseOutlined style={{ color: 'orange', marginRight: 8 }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'context-timeline-budget',
    header: 'Сроки и бюджет',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Space direction="vertical" size="middle">
                  <Title level={4}>
                    <CalendarOutlined
                      style={{
                        color: 'var(--app-color-primary)',
                        marginRight: 8,
                      }}
                    />
                    Сроки
                  </Title>
                  <Text strong>Желаемый срок:</Text>
                  <Text>до середины апреля 2026</Text>
                  <Text type="secondary">(4–5 месяцев на реализацию)</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Space direction="vertical" size="middle">
                  <Title level={4}>
                    <DollarCircleOutlined
                      style={{
                        color: 'var(--app-color-primary)',
                        marginRight: 8,
                      }}
                    />
                    Бюджет
                  </Title>
                  <Text strong>Рыночные предложения:</Text>
                  <Text>150 000 – 200 000 ₽</Text>
                  <Divider style={{ margin: '8px 0' }} />
                  <Text strong>Психологическая планка:</Text>
                  <Text>~100 000 ₽</Text>
                </Space>
              </Card>
            </Col>
          </Row>
          <Card size="small" type="inner">
            <Paragraph>
              <BulbOutlined style={{ marginRight: 8 }} />
              Есть знакомый-разработчик, предлагающий существенно более низкий
              ценник, но это вызывает сомнения по качеству
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },

  // Цели проекта
  {
    id: 'project-goals-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Цели проекта"
        subtitle="Что мы хотим достичь"
        imageIndex={1}
      />
    ),
  },
  {
    id: 'project-goals-detailed',
    header: 'Основные цели редизайна',
    content: (
      <Card>
        <List
          size="large"
          dataSource={[
            'Осовременить сайт, сохранив узнаваемость бренда (цвета, логотип, шрифты)',
            'Сделать удобную мобильную версию (адаптивный дизайн, mobile-first)',
            'Усилить конверсию в бронирование через главную страницу и удобную структуру',
            'Интегрировать отзывы (в том числе из Яндекса) в общем стиле сайта',
            'Сохранить и развить связку с Travelline, не создавая свою CRM/систему бронирования',
            'Повысить привлекательность сайта визуально (галереи, возможно видео, современный UI)',
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <Space>
                <Tag color="blue">{index + 1}</Tag>
                <CheckCircleOutlined
                  style={{ color: 'var(--app-color-primary)' }}
                />
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    ),
  },

  // Выявленные требования
  {
    id: 'requirements',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Выявленные требования"
        subtitle="Детальные требования с созвона"
        imageIndex={2}
      />
    ),
  },
  {
    id: 'requirements-design',
    header: 'Дизайн и брендирование',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <CheckCircleOutlined style={{ color: 'green', marginRight: 8 }} />
              Оставить:
            </Title>
            <List
              size="small"
              dataSource={[
                'Базовую цветовую палитру',
                'Логотип',
                'Шрифты (или их аккуратные аналоги для web)',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <RocketOutlined style={{ color: 'blue', marginRight: 8 }} />
              При этом:
            </Title>
            <List
              size="small"
              dataSource={[
                'Полностью осовременить визуал',
                'Перерисовать всё в рамках нового дизайн-макета',
                'Сделать сайт визуально ближе к современным отельным сайтам-конкурентам',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'requirements-mobile-structure',
    header: 'Мобильная версия и структура',
    content: (
      <Card>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Title level={4}>
                <MobileOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Мобильная версия
              </Title>
              <List
                size="small"
                dataSource={[
                  'Полноценная адаптивность для смартфонов и планшетов',
                  'Удобное бронирование и навигация с телефона',
                  'Основной канал у туристов — мобильные устройства',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <CheckCircleOutlined
                      style={{ color: 'green', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Title level={4}>
                <GlobalOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Структура сайта
              </Title>
              <Paragraph>
                Сейчас лендос играет роль разводящей страницы (отель /
                апартаменты)
              </Paragraph>
              <Paragraph>
                <Text strong>Позиция клиента:</Text> не настаивает на жёстком
                разделении отеля и апартов, готова к оптимизации структуры, если
                так станет удобнее пользователю.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'requirements-integrations',
    header: 'Интеграции и системы',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <ApiOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Интеграция с отзывами
            </Title>
            <List
              size="small"
              dataSource={[
                'Интеграция с Яндекс Отзывами',
                'Вывод отзывов в стиле сайта (не стандартный виджет)',
                'Блоки отзывов на ключевых страницах',
                'Визуально аккуратная интеграция (карточки, слайдер, рейтинг)',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <StarOutlined style={{ color: 'gold', marginRight: 8 }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <DatabaseOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Travelline
            </Title>
            <Paragraph>
              Собственной CRM нет, всё обработка идет через{' '}
              <Text strong>Travelline</Text>
            </Paragraph>
            <List
              size="small"
              dataSource={[
                'Бронирование',
                'Управление номерами и ценами',
                'Администрирование загрузки',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <CheckCircleOutlined
                    style={{ color: 'green', marginRight: 8 }}
                  />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
            <Paragraph style={{ marginTop: 'var(--app-spacing-md)' }}>
              <Text strong>Важно:</Text> Сайт должен поддерживать и усиливать
              связку с Travelline, а не заменять её.
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },

  // Рекомендации от разработчика
  {
    id: 'recommendations',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Рекомендации от разработчика Татьяны"
        subtitle="Внешний инсайт по UX/UI и структуре"
        imageIndex={3}
      />
    ),
  },
  {
    id: 'recommendations-assessment',
    header: 'Оценка текущего сайта',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <List
              size="large"
              dataSource={[
                'Дизайн сильно устарел — нужен новый макет, частичная косметика не спасёт',
                'UX слабый — мало презентации, мало визуала, слабая роль главной страницы',
                'Главная страница сейчас — в основном навигация, а не "главный продающий экран"',
                'SEO-потенциал высок, видимость можно сильно улучшить с дополнительными работами',
              ]}
              renderItem={item => (
                <List.Item>
                  <Space>
                    <InfoCircleOutlined
                      style={{ color: 'var(--app-color-primary)' }}
                    />
                    <Text>{item}</Text>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'recommendations-homepage',
    header: 'Главная страница (как должна работать)',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph>
            Сделать главную <Text strong>самостоятельной и продающей</Text>, не
            просто навигацией:
          </Paragraph>
          <List
            size="large"
            dataSource={[
              'Блок бронирования (без лишних переходов)',
              'Галереи (общий визуал отеля/апартов)',
              'Блоки отзывов',
              'Основные преимущества и УТП',
              'Краткая информация об объектах',
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <CheckCircleOutlined
                    style={{ color: 'var(--app-color-primary)' }}
                  />
                  <Text>{item}</Text>
                </Space>
              </List.Item>
            )}
          />
        </Space>
      </Card>
    ),
  },
  {
    id: 'recommendations-pages-reviews',
    header: 'Внутренние страницы и отзывы',
    content: (
      <Card>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Title level={4}>
                <PictureOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Внутренние страницы
              </Title>
              <Paragraph>
                Шаблоны строить с приоритетом на <Text strong>галереи</Text>:
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Интерьер',
                  'Экстерьер',
                  'Окружение и достопримечательности',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Paragraph>
                Рекомендация подготовить{' '}
                <Text strong>небольшие профессиональные видео-презентации</Text>
                :
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Общее видео по объекту',
                  'Возможно отдельно по отелю и по апартаментам',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <VideoCameraOutlined
                      style={{
                        color: 'var(--app-color-primary)',
                        marginRight: 8,
                      }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Title level={4}>
                <StarOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Отзывы
              </Title>
              <Paragraph>
                Уйти от формата отдельной страницы «Отзывы» — в таком виде они
                работают слабо
              </Paragraph>
              <Paragraph>
                <Text strong>Вместо этого:</Text>
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Распределенные блоки отзывов на основных страницах',
                  'Выборка по локациям/объектам (для конкретного адреса – свои отзывы)',
                  'Собирать отзывы с разных площадок: Яндекс, другие OTA',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <CheckCircleOutlined
                      style={{ color: 'green', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Примеры сайтов
  {
    id: 'references',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Примеры сайтов"
        subtitle="Референсы, которые нравятся клиенту"
        imageIndex={4}
      />
    ),
  },
  {
    id: 'references-list',
    header: 'Референсы для вдохновения',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <Link href="https://kristoff.ru/" target="_blank">
                Kristoff — kristoff.ru
              </Link>
            </Title>
            <Text type="secondary">
              «вот по-моему неплохой сайт, у них тоже отель и апарты»
            </Text>
            <List
              size="small"
              dataSource={[
                'Общий бренд + несколько объектов (отель / апарты) под одним именем',
                'На главной — понятная структура, сразу виден формат размещения',
                'Есть акцент на контакты, адреса и бронирование',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <Link href="https://sonata-spb.com/ru-ru/" target="_blank">
                Sonata — sonata-spb.com
              </Link>
            </Title>
            <Text type="secondary">«визуально приятный сайт»</Text>
            <List
              size="small"
              dataSource={[
                'Чистый, аккуратный визуал',
                'Понятное описание отеля, блоки с номерами',
                'Спецпредложения/тарифы оформлены как отдельные информационные блоки',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <Link href="https://statskijsovetnik.ru/" target="_blank">
                Статский Советник — statskijsovetnik.ru
              </Link>
            </Title>
            <Text type="secondary">
              «конкурент близкий наш, тоже с разными адресами»
            </Text>
            <List
              size="small"
              dataSource={[
                'Несколько отелей/апартаментов под единым брендом',
                'Удобный выбор локации/объекта',
                'Структура подходит под модель «несколько адресов внутри одной сети»',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Divider />
          <Paragraph>
            <Text strong>Дополнительные референсы:</Text> apartpage.ru,{' '}
            arbat-house.com, gornyi-dom.ru, unoapart.ru
          </Paragraph>
          <Paragraph>
            <Text strong>Общие черты:</Text> современный, чистый дизайн; много
            визуала (фото, иногда видео); акцент на бронирование и удобство
            пользователя
          </Paragraph>
        </Space>
      </Card>
    ),
  },

  // Предлагаемая концепция
  {
    id: 'concept',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Предлагаемая концепция нового сайта"
        subtitle="Общие принципы и структура"
        imageIndex={5}
      />
    ),
  },
  {
    id: 'concept-principles',
    header: 'Общие принципы',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <List
            size="large"
            dataSource={[
              'Сохранить узнаваемость бренда (цвета, лого, шрифты), при этом полностью обновить UI/UX',
              'Сайт воспринимается как единый бренд с несколькими объектами (отель/апарты/адреса)',
              'Главная страница — основной продающий экран',
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <CheckCircleOutlined
                    style={{ color: 'var(--app-color-primary)' }}
                  />
                  <Text>{item}</Text>
                </Space>
              </List.Item>
            )}
          />
          <Card size="small" type="inner">
            <Title level={4}>Главная страница включает:</Title>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <List
                  size="small"
                  dataSource={[
                    'Блок бронирования + выбор объекта',
                    'Общая презентация',
                    'Галерея',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Col>
              <Col xs={24} sm={12}>
                <List
                  size="small"
                  dataSource={[
                    'Отзывы',
                    'Краткая информация об объектах',
                    'Блок преимуществ',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'concept-structure',
    header: 'Структура страниц',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <GlobalOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Главная страница
            </Title>
            <List
              size="small"
              dataSource={[
                'Хедер: бренд + меню + CTA «Забронировать»',
                'Первый экран: фон-фото/видео, форма бронирования (Travelline), выбор объекта',
                'Блок «О нас / о Cameo Hotel»',
                'Блоки по объектам: Отель / Апартаменты (карточки с адресами)',
                'Галерея (общие виды)',
                'Блок отзывов (из Яндекса и др. — кастомный стиль)',
                'Блок преимуществ (локация, сервис, парковка, завтраки и т.д.)',
                'Контакты + карта',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <ShopOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Страница объекта (Отель / Апартаменты)
            </Title>
            <List
              size="small"
              dataSource={[
                'Детальная информация',
                'Галереи (интерьер/экстерьер)',
                'Блок отзывов по конкретной локации',
                'Форма/кнопки бронирования (Travelline)',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <FileTextOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Дополнительные разделы (опционально)
            </Title>
            <List
              size="small"
              dataSource={[
                'Акции/спецпредложения',
                'О районе / как добраться',
                'Вопросы-ответы (FAQ)',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'concept-technical',
    header: 'Технические моменты',
    content: (
      <Card>
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <Card size="small" type="inner">
              <Title level={4}>
                <CodeOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Фронтенд
              </Title>
              <Text>
                Адаптивный (React + Tailwind / либо классический стек)
              </Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card size="small" type="inner">
              <Title level={4}>
                <ApiOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Travelline
              </Title>
              <Text>Виджет/iframe/форма + стилизация под сайт</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card size="small" type="inner">
              <Title level={4}>
                <StarOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Яндекс Отзывы
              </Title>
              <Text>Через API, с кастомной подачей</Text>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Card size="small" type="inner">
          <Title level={4}>
            <SearchOutlined
              style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
            />
            SEO
          </Title>
          <Text>Подготовка к SEO: структура, семантика, скорость</Text>
        </Card>
      </Card>
    ),
  },

  // Бюджет и сложность
  {
    id: 'budget',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Бюджет и сложность"
        subtitle="Черновая оценка для аргументации"
        imageIndex={6}
      />
    ),
  },
  {
    id: 'budget-main',
    header: 'Основной функционал',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Table
            columns={[
              {
                title: 'Позиция',
                dataIndex: 'position',
                key: 'position',
                width: 250,
              },
              {
                title: 'Стоимость',
                dataIndex: 'cost',
                key: 'cost',
                width: 150,
              },
            ]}
            dataSource={[
              {
                key: '1',
                position: 'Дизайн-макет',
                cost: '15–20К',
              },
              {
                key: '2',
                position: 'Верстка + фронтенд (адаптивный)',
                cost: '30–40К',
              },
              {
                key: '3',
                position: 'Интеграция Travelline',
                cost: '10–15К',
              },
              {
                key: '4',
                position: 'Интеграция Яндекс Отзывов',
                cost: '8–12К',
              },
              {
                key: '5',
                position: 'Галереи, медиакомпоненты',
                cost: '5–8К',
              },
              {
                key: '6',
                position: 'Тестирование, оптимизация, запуск',
                cost: '10–15К',
              },
            ]}
            pagination={false}
            size="small"
            summary={() => {
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого базовый диапазон:</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text strong>≈ 88–108К</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
          <Card size="small" type="inner">
            <Paragraph>
              <Text type="secondary">
                (без учета видеопроизводства и активного SEO-продвижения)
              </Text>
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'budget-additional',
    header: 'Дополнительно (по желанию клиента)',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <List
            size="large"
            dataSource={[
              'Видеосъёмка и монтаж: +20–50К',
              'Комплексное SEO / работа с поведенческими факторами: +30–50К',
              'Контент-менеджмент (тексты, наполнение): +10–15К',
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <DollarCircleOutlined
                    style={{ color: 'var(--app-color-primary)' }}
                  />
                  <Text>{item}</Text>
                </Space>
              </List.Item>
            )}
          />
          <Card size="small" type="inner">
            <Paragraph>
              <BulbOutlined style={{ marginRight: 8 }} />
              <Text strong>Важно:</Text> Бюджет порядка{' '}
              <Text strong>100К+</Text> объективно объясняется объемом работ
              (дизайн, адаптив, интеграции, UX).
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },

  // Ключевые тезисы
  {
    id: 'key-points',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Ключевые тезисы"
        subtitle="Основные моменты для презентации"
        imageIndex={7}
      />
    ),
  },
  {
    id: 'key-points-list',
    header: 'Главные идеи проекта',
    content: (
      <Card>
        <List
          size="large"
          dataSource={[
            'Не косметический ремонт, а полный редизайн, при сохранении фирменного стиля',
            'Главная страница становится продающей, с упором на бронирование и презентацию объекта',
            'Мобильная версия — приоритет, под поведение современных гостей',
            'Отзывы интегрированы в структуру сайта, а не спрятаны в отдельный раздел',
            'Travelline остаётся ядром бронирований, сайт — современная витрина и интерфейс для гостей',
            'Бюджет порядка 100К+ объективно объясняется объемом работ (дизайн, адаптив, интеграции, UX)',
            'В перспективе можно усилить сайт за счёт видео и SEO, но это уже следующий шаг',
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <Space>
                <Tag color="blue">{index + 1}</Tag>
                <BulbOutlined style={{ color: 'gold' }} />
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    ),
  },

  // Описание проекта
  {
    id: 'project-description',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Описание проекта"
        subtitle="Цели и задачи редизайна"
        imageIndex={8}
      />
    ),
  },
  {
    id: 'project-goals',
    header: 'Цели проекта',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            Требуется полный редизайн веб-сайта отеля и апартаментов{' '}
            <Text strong>Cameo Hotel</Text> с целью:
          </Paragraph>
          <List
            size="large"
            dataSource={[
              'Осовременить визуальное представление бренда',
              'Обеспечить полную адаптивность под мобильные устройства',
              'Интегрировать систему управления бронированиями (Travelline)',
              'Встроить отзывы из Яндекс.Карт в общий стиль сайта',
              'Создать удобную и продающую главную страницу',
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <CheckCircleOutlined
                    style={{ color: 'var(--app-color-primary)' }}
                  />
                  <Text>{item}</Text>
                </Space>
              </List.Item>
            )}
          />
          <Row gutter={16} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Space direction="vertical" size="small">
                  <GlobalOutlined style={{ fontSize: 24 }} />
                  <Text strong>Домен</Text>
                  <Link href="https://www.cameohotel.ru/" target="_blank">
                    cameohotel.ru
                  </Link>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Space direction="vertical" size="small">
                  <ClockCircleOutlined style={{ fontSize: 24 }} />
                  <Text strong>Срок реализации</Text>
                  <Text>до 15 апреля 2026</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },

  // Базовые требования
  {
    id: 'basic-requirements',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Базовые требования"
        subtitle="Что входит и что не входит в предложение"
        imageIndex={9}
      />
    ),
  },
  {
    id: 'what-included',
    header: 'Что входит в предложение',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={3}>
            <CheckCircleOutlined
              style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
            />
            Функциональность:
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <List
                size="small"
                dataSource={[
                  'Полный редизайн сайта',
                  'Сохранение фирменной идентичности',
                  'Адаптивный мобильный дизайн',
                  'Главная страница с блоком бронирования',
                  'Страницы объектов (Отель и Апартаменты)',
                  'Интеграция с Travelline',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '8px 0' }}>
                    <CheckCircleOutlined
                      style={{ color: 'green', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} md={12}>
              <List
                size="small"
                dataSource={[
                  'Интеграция с Яндекс Отзывами',
                  'Блоки отзывов на ключевых страницах',
                  'Контакты и карта',
                  'Тестирование на разных устройствах',
                  'Оптимизация производительности',
                  'Развёртывание и запуск сайта',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '8px 0' }}>
                    <CheckCircleOutlined
                      style={{ color: 'green', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
          <Divider />
          <Title level={3}>
            <TeamOutlined
              style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
            />
            Поддержка:
          </Title>
          <Paragraph>
            Техническая поддержка после запуска (разные сроки по вариантам)
          </Paragraph>
        </Space>
      </Card>
    ),
  },
  {
    id: 'what-not-included',
    header: 'Что НЕ входит',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <List
            size="large"
            dataSource={[
              'Видеосъёмка и видеопроизводство',
              'Создание фотографий и изображений',
              'Написание текстов и описаний (используются текущие материалы)',
              'Формирование и размещение отзывов на площадках',
              'Долгосрочное SEO-продвижение и поведенческие факторы',
              'Контент-маркетинг и наполнение сайта',
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <CloseOutlined style={{ color: 'red' }} />
                  <Text>{item}</Text>
                </Space>
              </List.Item>
            )}
          />
        </Space>
      </Card>
    ),
  },

  // Вариант 1: Bitrix
  {
    id: 'variant-1-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Вариант 1: Bitrix CMS"
        subtitle="95 000 ₽"
        imageIndex={0}
      />
    ),
  },
  {
    id: 'variant-1-description',
    header: 'Описание решения',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            <Text strong>Bitrix24</Text> — мощная российская CMS и система
            управления, разработанная специально для российского рынка. Идеальна
            для отельных сайтов благодаря встроенным инструментам управления
            контентом и интеграциям.
          </Paragraph>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <CheckCircleOutlined
                    style={{ color: 'green', marginRight: 8 }}
                  />
                  Преимущества:
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Быстрая реализация — готовые компоненты',
                    'Легкое управление — не нужен разработчик',
                    'Встроенные интеграции',
                    'Русская локализация',
                    'CRM и учёт',
                    'Масштабируемость',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <CloseOutlined style={{ color: 'orange', marginRight: 8 }} />
                  Ограничения:
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Дизайн может быть "шаблонным"',
                    'Требуется лицензия (от 5K/месяц)',
                    'Привязка к платформе',
                    'Может быть избыточным для чистого сайта',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'variant-1-roadmap',
    header: 'Дорожная карта (2 месяца)',
    content: (
      <Card>
        <Roadmap items={bitrixRoadmapItems} mode="alternate" />
      </Card>
    ),
  },
  {
    id: 'variant-1-recommended',
    header: 'Рекомендуется если:',
    content: (
      <Card>
        <List
          size="large"
          dataSource={[
            'Нужна система, которая будет развиваться',
            'Важна простота управления контентом для владельца',
            'Планируется использовать CRM функции Bitrix',
            'Готовы платить ежемесячную лицензию за платформу',
            'Нужна локализованная под Россию система',
          ]}
          renderItem={item => (
            <List.Item>
              <Space>
                <CheckCircleOutlined
                  style={{ color: 'var(--app-color-primary)' }}
                />
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    ),
  },

  // Вариант 2: Next.js без дизайнера
  {
    id: 'variant-2-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Вариант 2: Next.js без дизайнера"
        subtitle="105 000 ₽"
        imageIndex={1}
      />
    ),
  },
  {
    id: 'variant-2-description',
    header: 'Описание решения',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            <Text strong>Next.js</Text> — современный фреймворк на базе React
            для создания высокопроизводительных веб-приложений. Дизайн
            разрабатывается разработчиком на основе анализа современных отельных
            сайтов и сохранения узнаваемости бренда Cameo Hotel.
          </Paragraph>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <CheckCircleOutlined
                    style={{ color: 'green', marginRight: 8 }}
                  />
                  Преимущества:
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Собственный код — не привязан к платформе',
                    'Высокая производительность',
                    'Гибкость — любые функции',
                    'Масштабируемость',
                    'Modern tech stack',
                    'Нет лицензионных платежей',
                    'SEO-friendly',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <CloseOutlined style={{ color: 'orange', marginRight: 8 }} />
                  Ограничения:
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Дизайн разработчиком (не так красив)',
                    'Требуется разработчик для изменений',
                    'Больше времени на разработку',
                    'Нужен веб-разработчик для поддержки',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'variant-2-roadmap',
    header: 'Дорожная карта (3 месяца)',
    content: (
      <Card>
        <Roadmap items={nextjsWithoutDesignerRoadmapItems} mode="alternate" />
      </Card>
    ),
  },
  {
    id: 'variant-2-recommended',
    header: 'Рекомендуется если:',
    content: (
      <Card>
        <List
          size="large"
          dataSource={[
            'Хотите собственный, уникальный код',
            'Важна максимальная гибкость и масштабируемость',
            'Не хотите платить за лицензию CMS',
            'В команде есть разработчик для поддержки',
            'Планируете развивать сайт в будущем',
          ]}
          renderItem={item => (
            <List.Item>
              <Space>
                <CheckCircleOutlined
                  style={{ color: 'var(--app-color-primary)' }}
                />
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    ),
  },

  // Вариант 3: Next.js с дизайнером (РЕКОМЕНДУЕМЫЙ)
  {
    id: 'variant-3-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Вариант 3: Next.js с профессиональным дизайном"
        subtitle="155 000 ₽ ⭐ РЕКОМЕНДУЕМЫЙ"
        imageIndex={2}
      />
    ),
  },
  {
    id: 'variant-3-description',
    header: 'Описание решения',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            <Text strong>Полный цикл разработки</Text> с привлечением
            профессиональных UI/UX дизайнеров, созданием дизайн-макета в Figma и
            последующей профессиональной версткой на Next.js.
          </Paragraph>
          <Row gutter={16}>
            <Col xs={24}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <StarOutlined style={{ color: 'gold', marginRight: 8 }} />
                  Что получится:
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Сайт, который конкурирует по красоте с лучшими отельными сайтами',
                    'Быстрый, производительный сайт',
                    'Идеальная мобильная версия',
                    'Все интеграции работают гладко',
                    'Оптимизирован для SEO и конверсии',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: 'green', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'variant-3-roadmap',
    header: 'Дорожная карта (3.5 месяца)',
    content: (
      <Card>
        <Roadmap items={nextjsWithDesignerRoadmapItems} mode="alternate" />
      </Card>
    ),
  },
  {
    id: 'variant-3-recommended',
    header: 'Рекомендуется если:',
    content: (
      <Card>
        <List
          size="large"
          dataSource={[
            'Хотите лучший результат',
            'Важна красота и удобство (первое впечатление = конверсия)',
            'Готовы инвестировать в качество',
            'Сайт — лицо вашего бизнеса',
            'Планируете развивать сайт на базе дизайна',
          ]}
          renderItem={item => (
            <List.Item>
              <Space>
                <StarOutlined style={{ color: 'gold' }} />
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
        <Divider />
        <Paragraph>
          <Text strong>ROI:</Text> Хороший дизайн повышает конверсию на 15-30%,
          что окупает инвестицию за первый сезон.
        </Paragraph>
      </Card>
    ),
  },

  // Сравнительная таблица
  {
    id: 'comparison',
    header: undefined,
    content: <SectionTitleSlide title="Сравнительная таблица" imageIndex={3} />,
  },
  {
    id: 'comparison-table',
    header: 'Сравнение вариантов',
    content: (
      <Card>
        <Table
          columns={comparisonTableColumns}
          dataSource={comparisonTableData}
          pagination={false}
          scroll={{ x: true }}
          size="small"
        />
      </Card>
    ),
  },

  // Рекомендация
  {
    id: 'recommendation',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Рекомендация"
        subtitle="Вариант 3 (Next.js с профессиональным дизайном) — 155 000 ₽"
        imageIndex={4}
      />
    ),
  },
  {
    id: 'recommendation-reasons',
    header: 'Почему это лучший выбор:',
    content: (
      <Card>
        <List
          size="large"
          dataSource={[
            'Качество — сайт будет конкурировать с лучшими отельными сайтами по красоте и удобству',
            'Долгосрочность — инвестиция окупится через увеличение бронирований (красивый сайт = выше конверсия)',
            'Собственный код — полный контроль, нет лицензионных платежей, легко масштабировать',
            'Design System — база для будущего развития сайта',
            'Производительность — быстрый, оптимизированный сайт улучшает SEO и пользовательский опыт',
            'Поддержка — 3 месяца после запуска (оптимизация, багфиксы, консультации)',
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <Space>
                <Tag color="blue">{index + 1}</Tag>
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    ),
  },

  // Требования от клиента
  {
    id: 'client-requirements',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Требования от клиента"
        subtitle="Что нужно для старта проекта"
        imageIndex={5}
      />
    ),
  },
  {
    id: 'client-requirements-list',
    header: 'Для всех вариантов:',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <List
            size="large"
            dataSource={[
              'Доступ к текущему сайту (FTP, админ-панель, пароли)',
              'Логотип в исходнике (AI, EPS, SVG или высококачественный PNG)',
              'Цветовая палитра или брендбук (если есть)',
              'Доступ к системе Travelline (API ключи, реквизиты)',
              'Доступ к профилю на Яндекс.Картах (если есть)',
              'Текущие описания отеля и апартаментов (для наполнения)',
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <FileTextOutlined
                    style={{ color: 'var(--app-color-primary)' }}
                  />
                  <Text>{item}</Text>
                </Space>
              </List.Item>
            )}
          />
          <Divider />
          <Title level={4}>Дополнительно для Варианта 1 (Bitrix):</Title>
          <List
            size="small"
            dataSource={[
              'Согласие на использование Bitrix Cloud (с ежемесячной лицензией)',
              'Согласие на платежи за модули и расширения (если потребуются)',
            ]}
            renderItem={item => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
          <Title level={4}>Дополнительно для Варианта 3 (с дизайнером):</Title>
          <List
            size="small"
            dataSource={[
              'Обсуждение дизайна (2-3 звонка с дизайнером на этапе разработки)',
              'Согласование дизайн-макета перед разработкой',
            ]}
            renderItem={item => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Space>
      </Card>
    ),
  },

  // График проекта
  {
    id: 'timeline',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="График проекта"
        subtitle="Все варианты укладываются в дедлайн до 15 апреля 2026"
        imageIndex={6}
      />
    ),
  },
  {
    id: 'timeline-details',
    header: 'Сроки реализации',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Card
                size="small"
                title={
                  <Space>
                    <Tag color="blue">Вариант 1</Tag>
                    <Text strong>2 месяца</Text>
                  </Space>
                }
              >
                <Paragraph>
                  Декабрь 2025 – Февраль 2026
                  <br />
                  Быстрая реализация на готовой платформе
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                title={
                  <Space>
                    <Tag color="cyan">Вариант 2</Tag>
                    <Text strong>3 месяца</Text>
                  </Space>
                }
              >
                <Paragraph>
                  Декабрь 2025 – Март 2026
                  <br />
                  Разработка с дизайном от разработчика
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                title={
                  <Space>
                    <Tag color="green">Вариант 3</Tag>
                    <Text strong>3.5 месяца</Text>
                  </Space>
                }
              >
                <Paragraph>
                  Декабрь 2025 – Март 2026
                  <br />
                  Полный цикл с профессиональным дизайном
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },

  // Почему выбрать нас
  {
    id: 'why-us',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Почему выбрать нас?"
        subtitle="Наши преимущества"
        imageIndex={7}
      />
    ),
  },
  {
    id: 'why-us-list',
    header: 'Преимущества сотрудничества',
    content: (
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <RocketOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Опыт
                </Title>
                <Text>
                  Опыт с отельными сайтами — знаем специфику (Travelline,
                  отзывы, сезонность)
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <ShoppingOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Выбор
                </Title>
                <Text>
                  Три варианта реализации — от экономного CMS до премиумного со
                  своим дизайнером
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <BgColorsOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Бренд
                </Title>
                <Text>
                  Сохранение бренда — обновим визуал, но узнаваемость останется
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <ClockCircleOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Сроки
                </Title>
                <Text>
                  Реальные сроки — не обещаем невозможное, всё просчитано на
                  практике
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <ThunderboltOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Полный цикл
                </Title>
                <Text>
                  Дизайн (если нужен), разработка, интеграции, запуск, поддержка
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <CodeOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Технологии
                </Title>
                <Text>
                  Современные технологии — React, TypeScript, Next.js, Tailwind
                  CSS
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Процесс сотрудничества
  {
    id: 'process',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Процесс сотрудничества"
        subtitle="От обсуждения до поддержки"
        imageIndex={8}
      />
    ),
  },
  {
    id: 'process-steps',
    header: 'Этапы работы',
    content: (
      <Card>
        <AnimatedSteps
          direction="vertical"
          stepInterval={2500}
          items={[
            {
              title: 'Шаг 1: Обсуждение требований',
              description:
                '1-2 часа звонок — уточнение функционала и требований, выбор варианта реализации, ответы на вопросы',
              icon: <PhoneOutlined />,
            },
            {
              title: 'Шаг 2: Подписание договора и авансовый платёж',
              description:
                'Договор с четкими условиями, авансовый платёж (обычно 30-50%), старт проекта',
              icon: <FileTextOutlined />,
            },
            {
              title: 'Шаг 3: Разработка и коммуникация',
              description:
                'Еженедельные обновления о прогрессе, доступ к тестовому сайту, обсуждение дизайна и функционала',
              icon: <CodeOutlined />,
            },
            {
              title: 'Шаг 4: Тестирование и доработки',
              description:
                'Предзапуск на тестовом сервере, QA тестирование, ваша проверка и замечания, исправление проблем',
              icon: <SafetyOutlined />,
            },
            {
              title: 'Шаг 5: Запуск',
              description:
                'Миграция с текущего сайта, запуск в production, настройка DNS и сертификатов, мониторинг первых дней',
              icon: <PlayCircleOutlined />,
            },
            {
              title: 'Шаг 6: Поддержка',
              description:
                'Техническая поддержка (1-3 месяца в зависимости от варианта), исправление багов, оптимизация, консультации',
              icon: <TeamOutlined />,
            },
          ]}
        />
      </Card>
    ),
  },

  // FAQ
  {
    id: 'faq',
    header: undefined,
    content: (
      <SectionTitleSlide title="Часто задаваемые вопросы" imageIndex={9} />
    ),
  },
  {
    id: 'faq-list',
    header: 'Ответы на популярные вопросы',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <GlobalOutlined style={{ marginRight: 8 }} />
              Что будет с текущим сайтом?
            </Title>
            <Paragraph>
              Мы можем либо полностью заменить его (рекомендуем), либо временно
              разместить на поддомене для тестирования.
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <TeamOutlined style={{ marginRight: 8 }} />
              Кто будет поддерживать сайт после запуска?
            </Title>
            <Paragraph>
              Первое время мы (согласно договору). Затем вы можете нанять свою
              команду разработчиков или продолжать с нами (услуга поддержки).
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <CodeOutlined style={{ marginRight: 8 }} />
              Что если потребуются дополнительные функции?
            </Title>
            <Paragraph>
              Во время разработки можно уточнять и добавлять функции (в рамках
              бюджета). После запуска — платная услуга.
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <ShoppingOutlined style={{ marginRight: 8 }} />
              Будет ли сайт готов к мобильным платежам?
            </Title>
            <Paragraph>
              Да, все варианты поддерживают интеграцию платежных систем (Stripe,
              Яндекс.Касса, 2Checkout и др.).
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <SearchOutlined style={{ marginRight: 8 }} />
              Нужна ли мне SEO оптимизация после запуска?
            </Title>
            <Paragraph>
              Все варианты включают базовую SEO оптимизацию. Для агрессивного
              продвижения нужны дополнительные услуги (отдельно).
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <ApiOutlined style={{ marginRight: 8 }} />
              Можно ли интегрировать другие сервисы (WhatsApp, Telegram и т.д.)?
            </Title>
            <Paragraph>
              Да, для Next.js варианты это просто. Для Bitrix — может
              потребоваться дополнительная разработка.
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },

  // Контакты
  {
    id: 'contacts',
    header: undefined,
    content: <SectionTitleSlide title="Контактная информация" imageIndex={0} />,
  },
  {
    id: 'contacts-list',
    header: undefined,
    content: (
      <ContactsSlide
        contacts={[
          {
            name: 'Татьяна',
            role: 'Клиент (Cameo Hotel)',
            phone: '+7 (XXX) XXX-XX-XX',
            email: 'info@cameohotel.ru',
            websiteLabel: 'www.cameohotel.ru',
            variant: 'green',
            size: 'lg',
          },
        ]}
      />
    ),
  },
];
