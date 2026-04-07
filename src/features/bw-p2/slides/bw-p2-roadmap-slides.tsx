/* eslint-disable react-refresh/only-export-components -- SlideData module: local JSX helpers with exported slides array */
import type { ReactNode } from 'react';
import { Space, Typography, List, Card } from 'antd';
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CarOutlined,
  DisconnectOutlined,
  PhoneOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { ContentWithSectionsSlide } from '~shared/ui/content-with-sections-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { type SlideData } from '~widgets/slides';
import { bwP2RoadmapCreatedAt } from './bw-p2-roadmap.meta';
import styles from './bw-p2-roadmap-slides.module.css';

const { Title, Paragraph, Text } = Typography;

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
    description: 'Проверка на реальных бронированиях.',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Шаг 2 — Повседневная работа',
    description: 'Удобный продукт для продаж и учёта.',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Шаг 3 — Клиенты и интеграции',
    description: 'CRM и обмен данными с другими системами.',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Шаг 4 — Экосистема',
    description: 'Каталоги, сообщество, мобильные приложения.',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Шаг 5 — Масштаб',
    description: 'Несколько стран, надёжность, оплата подписки.',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

function PhaseIntro({
  stepTitle,
  docLabel,
  goal,
  gains,
  notYet,
}: {
  stepTitle?: string;
  docLabel?: string;
  goal: string;
  gains: string[];
  notYet: string[];
}) {
  return (
    <ConstrainedContent>
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Title level={4} style={{ marginTop: 0, marginBottom: 8 }}>
            {stepTitle}
          </Title>
          <Text type="secondary" style={{ fontSize: 13 }}>
            Как в техническом задании: {docLabel}
          </Text>
        </div>
        <Card>
          <Paragraph
            style={{ marginBottom: 12, fontSize: 'var(--app-font-size-md)' }}
          >
            <Text strong>Цель этапа: </Text>
            {goal}
          </Paragraph>
          <Title level={5} style={{ marginTop: 0 }}>
            Что появляется
          </Title>
          <List
            size="small"
            dataSource={gains}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <Title level={5} style={{ marginTop: 16 }}>
            На этом шаге сознательно не делаем
          </Title>
          <List
            size="small"
            dataSource={notYet}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </Card>
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
      <PhaseIntro
        docLabel="MVP / Pilot"
        goal="Проверить на практике, что собственник и агент реально работают в одной программе без двойных броней."
        gains={[
          'Вход в систему, профили компаний',
          'Карточки транспорта, календарь, цены, договорённости с агентом (контракт)',
          'Создание и подтверждение брони, письма о событиях',
          'Обмен данными с сайтами (интерфейс для подключения)',
        ]}
        notYet={[
          'Отдельные мобильные приложения из магазина',
          'Полноценный учёт клиентов и сделок (CRM)',
          'Встроенная оплата между участниками',
        ]}
      />
    ),
  },

  {
    id: 'phase-2',
    header: 'Шаг 2 — Повседневная работа',
    content: (
      <PhaseIntro
        docLabel="версия 1.0"
        goal="Сделать продукт основным рабочим инструментом: не только для теста, а для постоянных продаж и учёта."
        gains={[
          'Удобные разделы: свой парк техники, продажи, отчёты, настройки',
          'Форма бронирования для сайта агента, расширенный календарь и цены (сезоны, выходные)',
          'Подписка за пользование платформой, базовые отчёты',
        ]}
        notYet={[
          'Полный учёт клиентов и воронка продаж внутри продукта',
          'Маркетплейс исполнителей',
        ]}
      />
    ),
  },

  {
    id: 'phase-3',
    header: 'Шаг 3 — Клиенты и интеграции',
    content: (
      <PhaseIntro
        docLabel="версия 2.0"
        goal="Перейти от чистого бронирования к работе с клиентской базой и связи с внешними программами."
        gains={[
          'Учёт клиентов и сделок (CRM), история бронирований',
          'Документы по сделкам, реферальные программы по согласованию',
          'Подключение внешних систем и календарей',
        ]}
        notYet={[
          'Сообщества и отраслевые «ярмарки» на платформе как отдельный продукт',
        ]}
      />
    ),
  },

  {
    id: 'phase-4',
    header: 'Шаг 4 — Экосистема',
    content: (
      <PhaseIntro
        docLabel="версия 3.0"
        goal="Собрать вокруг платформы больше участников рынка: каталоги, исполнители, мобильные приложения."
        gains={[
          'Каталоги собственников, агентов и техники',
          'Сообщество (форум, обмен опытом), мобильные приложения',
          'Расширенная аналитика',
        ]}
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
      <PhaseIntro
        docLabel="полное решение"
        goal="Вывести платформу на работу в нескольких странах и валютах с высокой надёжностью и прозрачной оплатой подписки."
        gains={[
          'Несколько регионов и языков, корректные часовые пояса и валюты',
          'Надёжность, резервные копии, мониторинг работы системы',
          'Безопасность, оплата тарифов и модулей',
        ]}
        notYet={[
          'Опытные функции «на будущее», не влияющие на удержание пользователей',
        ]}
      />
    ),
  },
];
