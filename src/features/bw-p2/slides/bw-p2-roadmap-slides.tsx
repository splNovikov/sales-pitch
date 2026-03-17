import { Space, Typography, List, Card, Table } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { FileText, Target, Award } from 'lucide-react';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { bwP2RoadmapCreatedAt } from './bw-p2-roadmap.meta';

const { Title, Paragraph, Text } = Typography;

const iconStyle = {
  width: 16,
  height: 16,
  color: 'var(--ant-color-text-secondary)',
  flexShrink: 0,
  display: 'block',
} as const;

const iconWrapStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: 1,
} as const;

const productLogicItems: RoadmapItem[] = [
  {
    title: 'Доказать операционный контур',
    description:
      'Проверить основной сценарий «собственник — агент — бронирование» на реальных пользователях.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Сделать продукт коммерчески пригодным',
    description:
      'Регулярная работа нескольких компаний, ежедневное использование.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Расширить до CRM и интеграций',
    description: 'Подключение CRM, команд продаж, интеграционная платформа.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Экосистема и сетевой эффект',
    description:
      'Мультирегиональность, мобильные приложения, расширенная монетизация.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const mvpScopeItems: RoadmapItem[] = [
  {
    title: 'Аутентификация и компания',
    description:
      'Регистрация, вход по email/password, базовый профиль компании и пользователя.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Ролевая модель',
    description:
      'Собственник, агент, комбинированная роль на базе единой учётной записи.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'ТС и календарь',
    description:
      'Карточка ТС, фото, статусы; доступно, забронировано, недоступно; дневной и периодный сценарии.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Ценообразование и контракты',
    description:
      'Базовая цена, валюта, переопределение цены на дату; назначение агенту доступа к ТС, период действия.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Бронирование и API',
    description:
      'Создание брони, проверка доступности, блокировка дат; точки доступа API для ТС, доступность, цены, бронирования.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Уведомления и аудит',
    description:
      'Email по новой брони, изменению статуса; логирование изменений броней и доступов.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const release10ScopeItems: RoadmapItem[] = [
  {
    title: 'Интерфейс и флот',
    description:
      'Единая навигация: Собственный флот, Продажи, Аналитика, Настройки; разделение собственных ТС и по агентскому доступу.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Календарь и ценообразование',
    description:
      'Массовое редактирование, повторяющиеся правила, визуализация цены; сезонность, выходные/будни, скидки.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Виджет и подписки',
    description:
      'JavaScript-виджет для площадок агентов; базовые тарифы для собственников и агентов.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Аналитика и безопасность',
    description:
      'Загрузка ТС, брони по агентам, часы по ТС; API-ключи с уровнями доступа, политики безопасности.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
];

const release20ScopeItems: RoadmapItem[] = [
  {
    title: 'CRM и клиенты',
    description:
      'Сделки, работа менеджеров, коммуникации; база клиентов, история бронирований, поиск.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Реферальная программа',
    description:
      'Коды, скидки, отслеживание реферальных связей, интеграция с Telegram/API.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Документы и интеграции',
    description:
      'Хранение документов по ТС, пилотам, контрактам; подключение внешних CRM, Google Calendar / Outlook.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Монетизация и аналитика',
    description:
      'Зрелая тарификация, платные интеграции, магазин интеграций; отчёты по клиентам, менеджерам, каналам.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const release30ScopeItems: RoadmapItem[] = [
  {
    title: 'Каталоги и экосистема',
    description:
      'Каталоги собственников, агентов, ТС; исполнители: гиды, фотографы, кейтеринг.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Репутация и сообщество',
    description:
      'Рейтинги, отзывы, оценки; форум, обмен опытом, отраслевые механики.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Мобильные приложения и аналитика',
    description:
      'Нативные приложения iOS и Android; прогнозирование спроса, панели производительности.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Расширение монетизации',
    description:
      'Платные модули, расширенные функции, новые модели тарификации.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const fullSolutionItems: RoadmapItem[] = [
  {
    title: 'География и локализация',
    description:
      'Мультирегиональное развертывание, локализация данных, маршрутизация по регионам; мультиязычность помимо RU/EN.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Валюты и часовые пояса',
    description:
      'Мультивалютность, правила отображения и конвертации; корректная модель часовых поясов.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Масштабирование и надёжность',
    description:
      'Без состояния, реплики чтения, кэш, CDN, автомасштабирование; резервное копирование, план аварийного восстановления, CI/CD.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Безопасность и API-платформа',
    description:
      'Шифрование, двухфакторная аутентификация, соответствие требованиям; версионирование API, экосистема вебхуков.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Биллинг и PWA',
    description:
      'Учёт тарифов, подписок, платных модулей; бесшовная работа веб, PWA и нативных приложений.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const architectureItems: RoadmapItem[] = [
  {
    title: 'Мультиязычность и мультивалютность',
    description:
      'Структура, готовая к мультиязычности; мультивалютная модель данных с первого дня.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Время и сущности',
    description:
      'Хранение времени в UTC с учётом часового пояса; единые сущности для собственника, агента и клиента.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Расширяемость и аудит',
    description:
      'Расширяемая карточка ТС; история изменений и аудит; гибкая модель доступов.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'API и интеграции',
    description:
      'Подход API-first; API-ключи и интеграционный слой; модель подписок и флаги функций.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Готовность к росту',
    description:
      'Запрет двойного бронирования; готовность к CRM и клиентскому кабинету.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const deliverySequenceItems: RoadmapItem[] = [
  {
    title: 'MVP / Pilot',
    description: 'Проверка продуктового ядра на реальных бронированиях.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Release 1.0',
    description:
      'Доведение операционного контура до коммерчески пригодного уровня.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Release 2.0',
    description:
      'Подключение CRM и интеграций как драйверов удержания и роста.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Release 3.0',
    description: 'Формирование сетевого эффекта и рыночной экосистемы.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Полное решение / Масштабирование',
    description:
      'Международный масштаб, зрелая архитектура и расширенная монетизация.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

export const bwP2RoadmapSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MainTitleSlide
          title="BW — Изделие номер 2. Дорожная карта"
          subtitle="От MVP до полноценной платформы бронирования ТС через агентов"
          createdAt={bwP2RoadmapCreatedAt}
        />
      </Space>
    ),
  },

  {
    id: 'context-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={0} title="Контекст продукта" />,
  },

  {
    id: 'problem',
    header: 'Проблема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Рынок аренды ТС не имеет единого инструмента
            </Title>
            <Paragraph style={{ marginBottom: 12 }}>
              Агенты вынуждены использовать разрозненные инструменты и ручное
              управление:
            </Paragraph>
            <List size="small">
              <List.Item>Электронные таблицы, старые системы брони</List.Item>
              <List.Item>Ручное управление доступностью и стоимостью</List.Item>
              <List.Item>
                Несинхронизированные данные между площадками
              </List.Item>
              <List.Item>
                Ручные запросы подтверждения через чат/звонок, дублирование
                информации по каждой брони для трёх сторон
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'key-value',
    header: 'Ключевая ценность',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Бронирование с подтверждением агентом
            </Title>
            <Paragraph style={{ marginBottom: 12 }}>
              Платформа обеспечивает{' '}
              <Text strong>
                взаимодействие между клиентом и собственником через агентов
              </Text>
              . Агент подтверждает доступность ТС у собственника — исключается
              ситуация «клиент забронировал, собственник не видел, клиент
              приехал — никого нет».
            </Paragraph>
            <List size="small">
              <List.Item>
                Единый контур «собственник — агент — бронирование» без ручной
                синхронизации
              </List.Item>
              <List.Item>Запрет двойного бронирования</List.Item>
              <List.Item>
                Собственник может выступать агентом для своих ТС
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'roles',
    header: 'Роли',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Собственник
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Владелец ТС, управляет доступностью и ценообразованием, получает
              информацию о бронях. Может выступать агентом для своих ТС.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Агент
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Получает доступ к ТС через контракты с собственниками, размещает
              на своих площадках, управляет бронями, получает комиссию.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Клиент
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Конечный пользователь, бронирует ТС через площадку агента.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'product-logic-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={1} title="Продуктовая логика развития" />
    ),
  },

  {
    id: 'product-logic',
    header: 'Продуктовая логика развития',
    content: (
      <Roadmap items={productLogicItems} mode="alternate" maxWidth={1200} />
    ),
  },

  {
    id: 'summary-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={2} title="Сводная дорожная карта" />
    ),
  },

  {
    id: 'summary-table',
    header: 'Сводная дорожная карта',
    content: (
      <ConstrainedContent>
        <Card>
          <Table
            size="small"
            pagination={false}
            scroll={{ x: 1200 }}
            dataSource={[
              {
                key: '1',
                stage: 'MVP / Pilot',
                goal: 'Проверить основной сценарий «собственник — агент — бронирование» на реальных пользователях',
                includes:
                  'Веб-платформа, ТС, календарь, ценообразование, контракты, бронирование, email, аутентификация, API',
                excludes:
                  'CRM, мобильные приложения, рейтинги, полноценные платежи, сообщество',
              },
              {
                key: '2',
                stage: 'Release 1.0',
                goal: 'Операционно устойчивый продукт для коммерческого использования',
                includes:
                  'Единый интерфейс, виджет, расширенный календарь, аналитика, подписки',
                excludes:
                  'Полноценная CRM, реферальный кабинет, площадка исполнителей',
              },
              {
                key: '3',
                stage: 'Release 2.0',
                goal: 'CRM-платформа для команд продаж и операционки',
                includes:
                  'CRM, база клиентов, интеграции, реферальная программа, документы, магазин интеграций',
                excludes: 'Социальные механики, зрелая система репутации',
              },
              {
                key: '4',
                stage: 'Release 3.0',
                goal: 'Экосистема и сетевой эффект',
                includes:
                  'Каталоги, поиск, исполнители, рейтинги, отзывы, мобильные приложения',
                excludes: 'Корпоративные функции глубокой кастомизации',
              },
              {
                key: '5',
                stage: 'Полное решение',
                goal: 'Международный масштаб, зрелая платформенная модель',
                includes:
                  'Мультирегиональность, мультивалютность, биллинг, наблюдаемость, SLA, масштабирование',
                excludes: 'Эксперименты, не влияющие на удержание',
              },
            ]}
            columns={[
              { title: 'Этап', dataIndex: 'stage', key: 'stage', width: 120 },
              { title: 'Цель', dataIndex: 'goal', key: 'goal', width: 220 },
              {
                title: 'Что появится',
                dataIndex: 'includes',
                key: 'includes',
                width: 280,
              },
              {
                title: 'Что не включаем',
                dataIndex: 'excludes',
                key: 'excludes',
                width: 220,
              },
            ]}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  {
    id: 'mvp-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={3} title="Этап 1. MVP / Pilot" />,
  },

  {
    id: 'mvp-explainer',
    header: 'MVP: цель и результат',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space size="small" align="center" style={iconWrapStyle}>
                <FileText {...iconStyle} />
                Цель
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Подтвердить, что платформа решает главную проблему: собственник и
              агент работают в едином контуре без ручной синхронизации и без
              двойных броней.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space size="small" align="center" style={iconWrapStyle}>
                <Target {...iconStyle} />
                Бизнес-результат
              </Space>
            </Title>
            <List size="small">
              <List.Item>
                1–3 собственника и 1–2 агента в одной системе
              </List.Item>
              <List.Item>
                Минимум один стабильный сценарий получения броней через агента
              </List.Item>
              <List.Item>
                Бронь создаётся, подтверждается, отображается в календаре, без
                конфликтов
              </List.Item>
              <List.Item>
                Данные по ТС, доступности и цене — через интерфейс и API
              </List.Item>
            </List>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space size="small" align="center" style={iconWrapStyle}>
                <Award {...iconStyle} />
                Критерии готовности
              </Space>
            </Title>
            <List size="small">
              <List.Item>
                Не менее 2 активных собственников, 3+ ТС у каждого
              </List.Item>
              <List.Item>Не менее 1 активного агента, 2+ контрактов</List.Item>
              <List.Item>Не менее 10 успешных броней за первый месяц</List.Item>
              <List.Item>
                0 критических ошибок, 0 двойных броней, время ответа &lt; 2 сек
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'mvp-scope',
    header: 'MVP: объём работ',
    content: <Roadmap items={mvpScopeItems} mode="alternate" maxWidth={1200} />,
  },

  {
    id: 'mvp-risks',
    header: 'MVP: риски',
    content: (
      <ConstrainedContent>
        <Card>
          <List
            size="small"
            dataSource={[
              'Недооценка сложности календаря и конфликтов бронирования',
              'Попытка преждевременно включить CRM и платежные сценарии',
              'Отсутствие нормальной модели доступов',
              'Ручные процессы вокруг подтверждения брони останутся вне системы',
            ]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  {
    id: 'release10-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={4} title="Этап 2. Release 1.0" />,
  },

  {
    id: 'release10-explainer',
    header: 'Release 1.0: цель',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              Сделать продукт не просто пилотным инструментом, а{' '}
              <Text strong>основной операционной системой</Text> для
              собственников и агентов. Продукт становится удобным для ежедневной
              работы.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Критерии завершения
            </Title>
            <List size="small">
              <List.Item>
                Пилотные клиенты регулярно работают в системе без возврата в
                таблицы
              </List.Item>
              <List.Item>
                Виджет и API используются на внешних площадках
              </List.Item>
              <List.Item>Подписочная модель начинает применяться</List.Item>
              <List.Item>
                Базовая аналитика влияет на операционные решения
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'release10-scope',
    header: 'Release 1.0: объём работ',
    content: (
      <Roadmap items={release10ScopeItems} mode="alternate" maxWidth={1200} />
    ),
  },

  {
    id: 'release20-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={5} title="Этап 3. Release 2.0" />,
  },

  {
    id: 'release20-explainer',
    header: 'Release 2.0: цель',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              Превратить продукт из системы бронирования в{' '}
              <Text strong>полноценную CRM-платформу</Text> для участников
              рынка. Продукт удерживает не только собственников и агентов, но и
              внутренние команды продаж.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Критерии завершения
            </Title>
            <List size="small">
              <List.Item>
                Клиенты ведут значимую часть клиентской работы внутри платформы
              </List.Item>
              <List.Item>
                Импорт данных из внешних систем используется в реальных
                внедрениях
              </List.Item>
              <List.Item>
                Интеграции становятся частью коммерческого предложения
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'release20-scope',
    header: 'Release 2.0: объём работ',
    content: (
      <Roadmap items={release20ScopeItems} mode="alternate" maxWidth={1200} />
    ),
  },

  {
    id: 'release30-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={6} title="Этап 4. Release 3.0" />,
  },

  {
    id: 'release30-explainer',
    header: 'Release 3.0: цель и ограничения',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 12 }}>
              Построить <Text strong>сетевой эффект</Text> и расширить продукт
              до отраслевой экосистемы. Платформа становится точкой притяжения
              рынка.
            </Paragraph>
            <Title level={5} style={{ marginTop: 0 }}>
              Запускать только после:
            </Title>
            <List size="small">
              <List.Item>
                Подтверждено продукт-рыночное соответствие на ядре продукта
              </List.Item>
              <List.Item>Внедрения идут повторяемо</List.Item>
              <List.Item>
                Стабильная экономика пилотов и первых коммерческих клиентов
              </List.Item>
              <List.Item>Операционная часть и CRM работают устойчиво</List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'release30-scope',
    header: 'Release 3.0: объём работ',
    content: (
      <Roadmap items={release30ScopeItems} mode="alternate" maxWidth={1200} />
    ),
  },

  {
    id: 'full-solution-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={7}
        title="Этап 5. Полное решение / Масштабирование"
      />
    ),
  },

  {
    id: 'full-solution-explainer',
    header: 'Полное решение: целевое состояние',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <List size="small">
              <List.Item>
                Единая платформа для собственников, агентов и исполнителей
              </List.Item>
              <List.Item>
                Единая модель данных по ТС, бронированиям, контрактам, клиентам
              </List.Item>
              <List.Item>Полноценный веб-продукт плюс мобильный слой</List.Item>
              <List.Item>
                CRM, каталоги, аналитика, подписки и интеграции в одном контуре
              </List.Item>
              <List.Item>
                Архитектура для расширения по рынкам, ролям и бизнес-моделям
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'full-solution-scope',
    header: 'Полное решение: объём работ',
    content: (
      <Roadmap items={fullSolutionItems} mode="alternate" maxWidth={1200} />
    ),
  },

  {
    id: 'architecture-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={8} title="Что закладываем с первого дня" />
    ),
  },

  {
    id: 'architecture',
    header: 'Архитектурные основы',
    content: (
      <ConstrainedContent>
        <Roadmap items={architectureItems} mode="alternate" maxWidth={1200} />
      </ConstrainedContent>
    ),
  },

  {
    id: 'priorities',
    header: 'Приоритеты по фазам',
    content: (
      <ConstrainedContent>
        <Card>
          <Table
            size="small"
            pagination={false}
            scroll={{ x: 900 }}
            dataSource={[
              {
                key: '1',
                area: 'Календарь и бронь',
                mvp: 'высокий',
                r10: 'высокий',
                r20: 'высокий',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '2',
                area: 'Контракты и доступы',
                mvp: 'высокий',
                r10: 'высокий',
                r20: 'высокий',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '3',
                area: 'API и интеграции',
                mvp: 'высокий',
                r10: 'высокий',
                r20: 'высокий',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '4',
                area: 'Виджет',
                mvp: 'низкий',
                r10: 'высокий',
                r20: 'высокий',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '5',
                area: 'Подписки и биллинг',
                mvp: 'низкий',
                r10: 'средний',
                r20: 'высокий',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '6',
                area: 'CRM',
                mvp: 'нет',
                r10: 'низкий',
                r20: 'высокий',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '7',
                area: 'Реферальная программа',
                mvp: 'нет',
                r10: 'низкий',
                r20: 'средний',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '8',
                area: 'Сообщество / рейтинги',
                mvp: 'нет',
                r10: 'нет',
                r20: 'низкий',
                r30: 'высокий',
                full: 'высокий',
              },
              {
                key: '9',
                area: 'Мобильные приложения',
                mvp: 'нет',
                r10: 'нет',
                r20: 'низкий',
                r30: 'средний',
                full: 'высокий',
              },
              {
                key: '10',
                area: 'Мультирегиональность',
                mvp: 'архитектурная закладка',
                r10: 'средний',
                r20: 'высокий',
                r30: 'высокий',
                full: 'высокий',
              },
            ]}
            columns={[
              {
                title: 'Направление',
                dataIndex: 'area',
                key: 'area',
                width: 180,
              },
              { title: 'MVP', dataIndex: 'mvp', key: 'mvp', width: 90 },
              { title: '1.0', dataIndex: 'r10', key: 'r10', width: 70 },
              { title: '2.0', dataIndex: 'r20', key: 'r20', width: 70 },
              { title: '3.0', dataIndex: 'r30', key: 'r30', width: 70 },
              { title: 'Все', dataIndex: 'full', key: 'full', width: 70 },
            ]}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  {
    id: 'delivery-sequence',
    header: 'Рекомендуемая последовательность выпуска',
    content: (
      <Roadmap items={deliverySequenceItems} mode="alternate" maxWidth={1200} />
    ),
  },

  {
    id: 'summary-exec-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={9} title="Краткое резюме" />,
  },

  {
    id: 'executive-summary',
    header: 'Краткое резюме',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 12 }}>
              Продукт запускается как{' '}
              <Text strong>
                веб-платформа для подтверждаемого бронирования через агента
              </Text>
              , а не как «ещё одну CRM» или «просто каталог ТС».
            </Paragraph>
            <List size="small">
              <List.Item>
                <Text strong>MVP</Text> — доказать надёжность ядра: карточка ТС,
                календарь, ценообразование, контракты, бронь, API и уведомления.
              </List.Item>
              <List.Item>
                <Text strong>1.0</Text> — операционно пригодная и монетизируемая
                система.
              </List.Item>
              <List.Item>
                <Text strong>2.0</Text> — CRM-платформа.
              </List.Item>
              <List.Item>
                <Text strong>3.0</Text> — экосистема и сетевой эффект.
              </List.Item>
              <List.Item>
                <Text strong>Полное решение</Text> — мультирегиональный и
                масштабируемый уровень, соответствующий целям ТЗ.
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'thank-you',
    header: undefined,
    content: <MainTitleSlide title="Благодарим за внимание" />,
  },
];
