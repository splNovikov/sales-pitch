/* eslint-disable react-refresh/only-export-components -- SlideData module: local JSX helpers with exported slides array */
import type { ReactNode } from 'react';
import { Space, Typography, List, Card, Tag } from 'antd';
import {
  ApiOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
  BellOutlined,
  CalendarOutlined,
  CarOutlined,
  CloudServerOutlined,
  DisconnectOutlined,
  DollarOutlined,
  FileTextOutlined,
  GlobalOutlined,
  IdcardOutlined,
  LayoutOutlined,
  LineChartOutlined,
  LinkOutlined,
  MobileOutlined,
  PhoneOutlined,
  SafetyOutlined,
  SearchOutlined,
  ShopOutlined,
  TagsOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import type { FeatureCardProps } from '~shared/ui/feature-card';
import { ContentWithSectionsSlide } from '~shared/ui/content-with-sections-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { type SlideData } from '~widgets/slides';
import { bwP2RoadmapCreatedAt } from './bw-p2-roadmap.meta';
import styles from './bw-p2-roadmap-slides.module.css';

const { Title, Paragraph } = Typography;

function RoleChainArrow() {
  return (
    <div className={styles.arrowBetween} aria-hidden>
      <ArrowDownOutlined className={styles.arrowMobile} />
      <ArrowRightOutlined className={styles.arrowDesktop} />
    </div>
  );
}

function RoleCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card size="small" className={styles.roleCard} bordered>
      <div className={styles.roleCardHeader}>
        <span className={styles.roleIcon}>{icon}</span>
        <Title level={5} className={styles.roleCardTitle}>
          {title}
        </Title>
      </div>
      <Paragraph className={styles.roleCardText}>{description}</Paragraph>
    </Card>
  );
}

const roadmapStripItems: RoadmapItem[] = [
  {
    title: 'Шаг 1 — Пилот',
    description:
      'Своя система бронирования: календарь, поиск, прайсы, доступ агентов к ТС; бронь и уведомления.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Шаг 2 — Повседневная работа',
    description:
      'Ежедневная работа в продукте: подписка, отчёты, расширение правил календаря и каналов агента.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Шаг 3 — Клиенты и интеграции',
    description:
      'CRM и связь с внешними системами поверх уже работающего контура брони.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Шаг 4 — Экосистема',
    description:
      'Отраслевые каталоги и сообщество, мобильные клиенты после стабильного ядра.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Шаг 5 — Масштаб',
    description:
      'Несколько регионов и валют, надёжность и оплата на зрелом продукте.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const PHASE_1_GOAL =
  'Создать независимую от сторонних платформ (Google, Contentful и аналогов как обязательной основы продукта) систему бронирования с собственным календарём и логикой брони, поиском и фильтрацией транспорта для агентов, прайс-листами и сопоставлением агентов с доступными им транспортными средствами.';

const phase1PilotCards: Omit<
  FeatureCardProps,
  'animated' | 'animationDelay'
>[] = [
  {
    title: 'Профили и роли',
    icon: <IdcardOutlined />,
    iconColor: 'purple',
    size: 'small',
    items: [
      'Профили компаний и роли (собственник / агент): вход в продукт, контакты — в системе видно, кто с кем работает.',
    ],
    style: { backgroundColor: '#f9f0ff' },
  },
  {
    title: 'Каталог, календарь, цены',
    icon: <ThunderboltOutlined />,
    iconColor: 'orange',
    size: 'small',
    items: [
      'Каталог транспорта, встроенный календарь доступности и цены — ядро пилота: единая картина слотов и стоимости без обязательной опоры на внешние сервисы вроде Google или Contentful; исключение двойных броней на одни и те же даты.',
    ],
    style: { backgroundColor: '#fff7e6' },
  },
  {
    title: 'Поиск и фильтрация',
    icon: <SearchOutlined />,
    iconColor: 'blue',
    size: 'small',
    items: ['Поиск и фильтрация транспортных средств в интерфейсе агента.'],
    style: { backgroundColor: '#e6f7ff' },
  },
  {
    title: 'Прайсы и доступ к парку',
    icon: <TagsOutlined />,
    iconColor: 'cyan',
    size: 'small',
    items: [
      'Прайс-листы и настройка доступа: какие единицы парка какому агенту видны и доступны для брони.',
    ],
    style: { backgroundColor: '#e6fffb' },
  },
  {
    title: 'Бронь и уведомления',
    icon: <BellOutlined />,
    iconColor: 'red',
    size: 'small',
    items: [
      'Оформление и подтверждение брони в системе; уведомления по ключевым событиям (в том числе письма).',
    ],
    style: { backgroundColor: '#fff2f0' },
  },
];

const phase2Cards: Omit<FeatureCardProps, 'animated' | 'animationDelay'>[] = [
  {
    title: 'Разделы и отчёты',
    icon: <LayoutOutlined />,
    iconColor: 'purple',
    size: 'small',
    items: [
      'Разделы для постоянной работы: продажи, базовые отчёты, настройки — поверх уже заведённого из пилота каталога, календаря и бронирования.',
    ],
    style: { backgroundColor: '#f9f0ff' },
  },
  {
    title: 'Календарь и цены',
    icon: <CalendarOutlined />,
    iconColor: 'orange',
    size: 'small',
    items: [
      'Расширение календаря и цен: сезоны, выходные, дополнительные правила — эволюция после базового контура пилота.',
    ],
    style: { backgroundColor: '#fff7e6' },
  },
  {
    title: 'Каналы агента',
    icon: <LinkOutlined />,
    iconColor: 'blue',
    size: 'small',
    items: [
      'Форма или виджет бронирования для сайта и других каналов агента — подключение к уже существующей в продукте логике брони.',
    ],
    style: { backgroundColor: '#e6f7ff' },
  },
  {
    title: 'Монетизация',
    icon: <DollarOutlined />,
    iconColor: 'cyan',
    size: 'small',
    items: ['Подписка за пользование платформой.'],
    style: { backgroundColor: '#e6fffb' },
  },
];

const phase3Cards: Omit<FeatureCardProps, 'animated' | 'animationDelay'>[] = [
  {
    title: 'CRM и история',
    icon: <TeamOutlined />,
    iconColor: 'purple',
    size: 'small',
    items: ['Учёт клиентов и сделок (CRM), история бронирований.'],
    style: { backgroundColor: '#f9f0ff' },
  },
  {
    title: 'Документы и рефералы',
    icon: <FileTextOutlined />,
    iconColor: 'orange',
    size: 'small',
    items: ['Документы по сделкам, реферальные программы по согласованию.'],
    style: { backgroundColor: '#fff7e6' },
  },
  {
    title: 'Внешние системы',
    icon: <ApiOutlined />,
    iconColor: 'blue',
    size: 'small',
    items: [
      'Обмен данными с внешними системами; синхронизация с внешними календарями (отдельно от встроенного календаря пилота).',
    ],
    style: { backgroundColor: '#e6f7ff' },
  },
];

const phase4Cards: Omit<FeatureCardProps, 'animated' | 'animationDelay'>[] = [
  {
    title: 'Отраслевые каталоги',
    icon: <ShopOutlined />,
    iconColor: 'purple',
    size: 'small',
    items: [
      'Отраслевые и сетевые каталоги (участники рынка), а не только внутренний каталог ТС и агентов из пилота.',
    ],
    style: { backgroundColor: '#f9f0ff' },
  },
  {
    title: 'Сообщество и мобильные',
    icon: <MobileOutlined />,
    iconColor: 'orange',
    size: 'small',
    items: ['Сообщество (форум, обмен опытом), мобильные приложения.'],
    style: { backgroundColor: '#fff7e6' },
  },
  {
    title: 'Аналитика',
    icon: <LineChartOutlined />,
    iconColor: 'cyan',
    size: 'small',
    items: ['Расширенная аналитика.'],
    style: { backgroundColor: '#e6fffb' },
  },
];

const phase5Cards: Omit<FeatureCardProps, 'animated' | 'animationDelay'>[] = [
  {
    title: 'Регионы и языки',
    icon: <GlobalOutlined />,
    iconColor: 'purple',
    size: 'small',
    items: ['Несколько регионов и языков, корректные часовые пояса и валюты.'],
    style: { backgroundColor: '#f9f0ff' },
  },
  {
    title: 'Надёжность',
    icon: <CloudServerOutlined />,
    iconColor: 'blue',
    size: 'small',
    items: ['Надёжность: резервные копии, мониторинг работы системы.'],
    style: { backgroundColor: '#e6f7ff' },
  },
  {
    title: 'Безопасность и оплата',
    icon: <SafetyOutlined />,
    iconColor: 'red',
    size: 'small',
    items: ['Безопасность, оплата тарифов и модулей.'],
    style: { backgroundColor: '#fff2f0' },
  },
];

function phaseFeatureColumns(count: number): 1 | 2 | 3 | 4 {
  if (count >= 5) {
    return 3;
  }
  if (count === 4) {
    return 2;
  }
  if (count === 3) {
    return 3;
  }
  if (count === 2) {
    return 2;
  }
  return 1;
}

/**
 * Единый макет слайдов этапов (как «Шаг 1 — Пилот»): лид, сетка FeatureCard, опционально «не делаем».
 */
function BwP2PhaseSlide({
  docTag,
  docTagColor = 'processing',
  goal,
  cards,
  notYet,
}: {
  docTag: string;
  docTagColor?: string;
  goal: string;
  cards: Omit<FeatureCardProps, 'animated' | 'animationDelay'>[];
  notYet?: string[];
}) {
  const showNotYet = notYet != null && notYet.length > 0;
  const columns = phaseFeatureColumns(cards.length);

  return (
    <ConstrainedContent>
      <Space orientation="vertical" size="small" style={{ width: '100%' }}>
        <div className={styles.phaseLeadBlock}>
          <Tag color={docTagColor} className={styles.phaseTag}>
            {docTag}
          </Tag>
          <Title level={5} className={styles.phaseGoalHeading}>
            Цель этапа
          </Title>
          <Paragraph className={styles.phaseGoalText}>{goal}</Paragraph>
        </div>
        <div>
          <Title level={5} className={styles.phaseDeliverablesTitle}>
            Что появляется
          </Title>
          <div className={styles.phaseFeatureGrid}>
            <FeaturesSlide
              wrapInCard={false}
              columns={columns}
              animated
              baseAnimationDelay={120}
              gutter={8}
              verticalGap={8}
              cards={cards}
            />
          </div>
        </div>
        {showNotYet && (
          <div className={styles.phaseNotYetBlock}>
            <Title level={5} className={styles.phaseNotYetTitle}>
              На этом шаге сознательно не делаем
            </Title>
            <List
              size="small"
              dataSource={notYet}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </div>
        )}
      </Space>
    </ConstrainedContent>
  );
}

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
          title="BW — Изделие номер 2"
          createdAt={bwP2RoadmapCreatedAt}
        />
      </Space>
    ),
  },

  {
    id: 'problem',
    header: 'Какая проблема на рынке',
    content: (
      <ConstrainedContent>
        <ContentWithSectionsSlide
          topSection={
            <Paragraph className={styles.problemLead}>
              У агентов и собственников транспорта{' '}
              <strong>нет одной общей программы</strong> для броней и цен. Всё
              держится в голове, в таблицах и переписках.
            </Paragraph>
          }
        >
          <FeaturesSlide
            wrapInCard={false}
            columns={3}
            animated
            baseAnimationDelay={420}
            gutter={20}
            verticalGap={20}
            cards={[
              {
                title: 'Данные разъезжаются',
                icon: <DisconnectOutlined />,
                iconColor: 'orange',
                size: 'large',
                items: ['Данные на разных площадках не совпадают'],
                emoji: 'chart',
                style: { backgroundColor: '#fff7e6' },
              },
              {
                title: 'Бронь «вручную»',
                icon: <PhoneOutlined />,
                iconColor: 'blue',
                size: 'large',
                items: ['Подтверждение брони — звонки и чаты'],
                emoji: 'wrench',
                style: { backgroundColor: '#e6f7ff' },
              },
              {
                title: 'Риск двойной брони',
                icon: <CalendarOutlined />,
                iconColor: 'red',
                size: 'large',
                items: ['Риск двух броней на одни и те же даты'],
                emoji: 'target',
                style: { backgroundColor: '#fff2f0' },
              },
            ]}
          />
        </ContentWithSectionsSlide>
      </ConstrainedContent>
    ),
  },

  {
    id: 'product-one-liner',
    header: 'Что предлагаем одной фразой',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <div className={styles.leadBlock}>
            <Title level={4} className={styles.leadTitle}>
              Одна веб-платформа для броней и цен: собственник, агент и клиент
              видят согласованную картину — без «пустой брони», когда клиент
              записался, а владелец техники не в курсе.
            </Title>
            <Paragraph className={styles.leadSubtitle}>
              Три стороны — в одной системе. Кто что делает:
            </Paragraph>
          </div>

          <div className={styles.roleChain}>
            <RoleCard
              icon={<ShopOutlined />}
              title="Клиент"
              description="Выбирает технику и время на сайте или в приложении агента."
            />
            <RoleChainArrow />
            <RoleCard
              icon={<TeamOutlined />}
              title="Агент"
              description="Продаёт бронь и согласует её с собственником — всё в той же программе."
            />
            <RoleChainArrow />
            <RoleCard
              icon={<CarOutlined />}
              title="Собственник"
              description="Задаёт календарь и цены; одна и та же дата не продаётся дважды."
            />
          </div>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'roles',
    header: 'Три роли',
    content: (
      <ConstrainedContent>
        <ContentWithSectionsSlide
          topSection={
            <Paragraph className={styles.problemLead}>
              В цепочке брони участвуют <strong>три стороны</strong> —
              собственник техники, агент и клиент. Ниже — кто за что отвечает.
            </Paragraph>
          }
        >
          <FeaturesSlide
            wrapInCard={false}
            columns={3}
            animated
            baseAnimationDelay={420}
            gutter={20}
            verticalGap={20}
            cards={[
              {
                title: 'Собственник',
                icon: <CarOutlined />,
                iconColor: 'purple',
                size: 'large',
                items: ['Владеет техникой, задаёт цены и свободные даты'],
                emoji: 'sparkles',
                style: { backgroundColor: '#f9f0ff' },
              },
              {
                title: 'Агент',
                icon: <TeamOutlined />,
                iconColor: 'blue',
                size: 'large',
                items: [
                  'Продаёт бронь клиенту и работает с собственником по правилам договора',
                ],
                emoji: 'star',
                style: { backgroundColor: '#e6f7ff' },
              },
              {
                title: 'Клиент',
                icon: <ShopOutlined />,
                iconColor: 'cyan',
                size: 'large',
                items: ['Бронирует через площадку агента'],
                emoji: 'rocket',
                style: { backgroundColor: '#e6fffb' },
              },
            ]}
          />
        </ContentWithSectionsSlide>
      </ConstrainedContent>
    ),
  },

  {
    id: 'product-logic-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={1} title="Как будем развивать продукт" />
    ),
  },

  {
    id: 'roadmap-overview',
    header: 'Вся дорожная карта одним взглядом',
    content: (
      <Roadmap items={roadmapStripItems} mode="alternate" maxWidth={1200} />
    ),
  },

  {
    id: 'phases-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={2} title="Этапы внедрения" />,
  },

  {
    id: 'phase-1',
    header: 'Шаг 1 — Пилот',
    content: (
      <BwP2PhaseSlide
        docTag="MVP / Pilot"
        docTagColor="processing"
        goal={PHASE_1_GOAL}
        cards={phase1PilotCards}
      />
    ),
  },

  {
    id: 'phase-2',
    header: 'Шаг 2 — Повседневная работа',
    content: (
      <BwP2PhaseSlide
        docTag="версия 1.0"
        docTagColor="blue"
        goal="На базе пилота сделать продукт ежедневным рабочим инструментом: стабильная эксплуатация, монетизация и UX разделов, развитие правил календаря и цен и каналов агента — без повторного «создания с нуля» ядра бронирования."
        cards={phase2Cards}
        notYet={[
          'Полноценный CRM и воронка продаж внутри продукта (это шаг 3)',
          'Маркетплейс исполнителей',
        ]}
      />
    ),
  },

  {
    id: 'phase-3',
    header: 'Шаг 3 — Клиенты и интеграции',
    content: (
      <BwP2PhaseSlide
        docTag="версия 2.0"
        docTagColor="success"
        goal="После устойчивого контура брони из пилота и шага 2 — ввести клиентскую базу и сделки, а также обмен данными с внешними программами, не подменяя собственное ядро календаря и бронирования."
        cards={phase3Cards}
        notYet={[]}
      />
    ),
  },

  {
    id: 'phase-4',
    header: 'Шаг 4 — Экосистема',
    content: (
      <BwP2PhaseSlide
        docTag="версия 3.0"
        docTagColor="warning"
        goal="На стабильно работающем ядре — расширить охват рынка: отраслевые и сетевые каталоги, сообщество, мобильные приложения, углублённая аналитика."
        cards={phase4Cards}
        notYet={[
          'Этот шаг — только после того, как базовый продукт стабильно используют и окупается',
        ]}
      />
    ),
  },

  {
    id: 'phase-5',
    header: 'Шаг 5 — Масштаб и зрелость',
    content: (
      <BwP2PhaseSlide
        docTag="полное решение"
        docTagColor="purple"
        goal="На зрелом продукте — вывести платформу на мультирегиональную работу: языки и валюты, промышленная надёжность и прозрачная оплата тарифов."
        cards={phase5Cards}
        notYet={[]}
      />
    ),
  },
];
