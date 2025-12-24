import { Typography, Card, Tag, Divider } from 'antd';
import {
  CheckCircleOutlined,
  RocketOutlined,
  GlobalOutlined,
  StarOutlined,
  ApiOutlined,
  MobileOutlined,
  DatabaseOutlined,
  CodeOutlined,
  ThunderboltOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { ContentWithSectionsSlide } from '~shared/ui/content-with-sections-slide';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { DemoSlide } from '~shared/ui/demo-slide';
import cameoLogo from '~features/cameohotel/slides/cameo-logo.png';
import variant1Image from '~features/cameohotel/slides/variant1.png';
import variant2Image from '~features/cameohotel/slides/variant2.png';
import variant3Image from '~features/cameohotel/slides/variant3.png';
import variant4Image from '~features/cameohotel/slides/variant4.png';
import { cameohotelVariantsCreatedAt } from '~features/cameohotel/slides/cameohotel-variants.meta.ts';

const { Paragraph, Text, Link } = Typography;

export const cameohotelVariantsSlides: SlideData[] = [
  // Главный слайд
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title=""
        subtitle="Варианты реализации осовременивания сайта"
        logo={cameoLogo}
        logoAlt="Cameo Hotel"
        logoMaxWidth={320}
        createdAt={cameohotelVariantsCreatedAt}
        location="cameohotel.ru"
      />
    ),
  },

  // Цели проекта
  {
    id: 'project-goals-title',
    header: undefined,
    content: (
      <SectionTitleSlide title="Цели проекта" subtitle="" imageIndex={1} />
    ),
  },
  {
    id: 'project-goals-detailed',
    header: 'Основные цели редизайна',
    content: (
      <Card>
        <AnimatedSteps
          direction="vertical"
          stepInterval={2500}
          items={[
            {
              title: 'Осовременить сайт, сохранив узнаваемость бренда',
              description: 'Цвета, логотип, шрифты',
              icon: <CheckCircleOutlined />,
            },
            {
              title: 'Сделать удобную мобильную версию',
              description: 'Адаптивный дизайн, mobile-first',
              icon: <CheckCircleOutlined />,
            },
            {
              title: 'Усилить конверсию в бронирование',
              description: 'Через главную страницу и удобную структуру',
              icon: <CheckCircleOutlined />,
            },
            {
              title: 'Интегрировать отзывы',
              description: 'В том числе из Яндекса в общем стиле сайта',
              icon: <CheckCircleOutlined />,
            },
            {
              title: 'Сохранить и развить связку с Travelline',
              description: 'Не создавая свою CRM/систему бронирования',
              icon: <CheckCircleOutlined />,
            },
            {
              title: 'Повысить привлекательность сайта визуально',
              description: 'Галереи, возможно видео, современный UI',
              icon: <CheckCircleOutlined />,
            },
          ]}
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
        subtitle=""
        imageIndex={2}
      />
    ),
  },
  {
    id: 'requirements-design-mobile',
    header: 'Дизайн, брендирование, мобильная версия и структура',
    content: (
      <FeaturesSlide
        cards={[
          {
            title: 'Оставить:',
            icon: <CheckCircleOutlined />,
            iconColor: 'green',
            emoji: 'sparkles',
            items: [
              'Базовую цветовую палитру',
              'Логотип',
              'Шрифты (или их аккуратные аналоги для web)',
            ],
          },
          {
            title: 'При этом:',
            icon: <RocketOutlined />,
            iconColor: 'primary',
            emoji: 'rocket',
            items: [
              'Полностью осовременить визуал',
              'Перерисовать всё в рамках нового дизайн-макета',
              'Сделать сайт визуально ближе к современным отельным сайтам-конкурентам',
            ],
          },
          {
            title: 'Мобильная версия',
            icon: <MobileOutlined />,
            iconColor: 'primary',
            emoji: 'target',
            items: [
              'Полноценная адаптивность для смартфонов и планшетов',
              'Удобное бронирование и навигация с телефона',
              'Основной канал у туристов — мобильные устройства',
            ],
          },
          {
            title: 'Структура сайта',
            icon: <GlobalOutlined />,
            iconColor: 'primary',
            emoji: 'lightbulb',
            items: [
              'Сейчас лендос играет роль разводящей страницы (отель / апартаменты)',
              'Позиция Татьяны: не настаивает на жёстком разделении отеля и апартов, готова к оптимизации структуры, если так станет удобнее пользователю.',
            ],
          },
        ]}
        columns={2}
        animated
        baseAnimationDelay={100}
        gutter={16}
        verticalGap={16}
        wrapInCard
      />
    ),
  },
  {
    id: 'requirements-integrations',
    header: 'Интеграции и системы',
    content: (
      <FeaturesSlide
        cards={[
          {
            title: 'Интеграция с отзывами',
            icon: <ApiOutlined />,
            iconColor: 'primary',
            emoji: 'star',
            items: [
              'Интеграция с Яндекс Отзывами',
              'Вывод отзывов в стиле сайта (не стандартный виджет)',
              'Блоки отзывов на ключевых страницах',
              'Визуально аккуратная интеграция (карточки, слайдер, рейтинг)',
            ],
          },
          {
            title: 'Travelline',
            subtitle: 'Собственной CRM нет, всё обработка идет черезTravelline',
            icon: <DatabaseOutlined />,
            iconColor: 'primary',
            emoji: 'rocket',
            items: [
              'Бронирование',
              'Управление номерами и ценами',
              'Администрирование загрузки',
            ],
            footer: (
              <Paragraph style={{ margin: 0 }}>
                <Text strong>Важно:</Text> Сайт должен поддерживать и усиливать
                связку с Travelline, а не заменять её.
              </Paragraph>
            ),
          },
        ]}
        columns={1}
        animated
        baseAnimationDelay={200}
        gutter={16}
        verticalGap={16}
        wrapInCard={false}
      />
    ),
  },

  // Примеры сайтов
  {
    id: 'references',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Примеры сайтов"
        subtitle="Референсы, которые нравятся Татьяне"
        imageIndex={4}
      />
    ),
  },
  {
    id: 'references-list',
    header: 'Референсы для вдохновения',
    content: (
      <ContentWithSectionsSlide
        bottomSection={
          <>
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
          </>
        }
        wrapInCard={false}
      >
        <FeaturesSlide
          cards={[
            {
              title: (
                <Link href="https://kristoff.ru/" target="_blank">
                  Kristoff — kristoff.ru
                </Link>
              ),
              subtitle:
                '«вот по-моему неплохой сайт, у них тоже отель и апарты»',
              icon: <GlobalOutlined />,
              iconColor: 'primary',
              emoji: 'star',
              items: [
                'Общий бренд + несколько объектов (отель / апарты) под одним именем',
                'На главной — понятная структура, сразу виден формат размещения',
                'Есть акцент на контакты, адреса и бронирование',
              ],
            },
            {
              title: (
                <Link href="https://sonata-spb.com/ru-ru/" target="_blank">
                  Sonata — sonata-spb.com
                </Link>
              ),
              subtitle: '«визуально приятный сайт»',
              icon: <GlobalOutlined />,
              iconColor: 'primary',
              emoji: 'palette',
              items: [
                'Чистый, аккуратный визуал',
                'Понятное описание отеля, блоки с номерами',
                'Спецпредложения/тарифы оформлены как отдельные информационные блоки',
              ],
            },
            {
              title: (
                <Link href="https://statskijsovetnik.ru/" target="_blank">
                  Статский Советник — statskijsovetnik.ru
                </Link>
              ),
              subtitle: '«конкурент близкий наш, тоже с разными адресами»',
              icon: <GlobalOutlined />,
              iconColor: 'primary',
              emoji: 'target',
              items: [
                'Несколько отелей/апартаментов под единым брендом',
                'Удобный выбор локации/объекта',
                'Структура подходит под модель «несколько адресов внутри одной сети»',
              ],
            },
          ]}
          columns={3}
          animated
          baseAnimationDelay={100}
          gutter={16}
          verticalGap={16}
          wrapInCard={false}
        />
      </ContentWithSectionsSlide>
    ),
  },

  // Варианты решения
  {
    id: 'solution-variants-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Варианты решения"
        subtitle="Три подхода к осовремениванию сайта на Next.js + Travelline"
        imageIndex={5}
      />
    ),
  },

  {
    id: 'solution-variants-all',
    header: 'Варианты решения',
    content: (
      <FeaturesSlide
        cards={[
          {
            title: 'Вариант 1: Базовый',
            subtitle:
              'Копирование текущей структуры сайта в новом современном дизайне. Структура страниц остаётся такой же, как сейчас, но визуально сайт полностью обновляется.',
            icon: <RocketOutlined />,
            iconColor: 'primary',
            emoji: 'rocket',
            items: [
              'Современный дизайн всех страниц',
              'Адаптивная вёрстка (мобильная версия)',
              'Интеграция с Travelline',
              'Сохранение текущей структуры сайта',
            ],
            footer: (
              <Paragraph
                style={{ margin: 0, fontSize: 'var(--app-font-size-sm)' }}
              >
                <Text type="secondary">
                  Дизайн разрабатывает команда разработчиков. Пожелания Татьяны
                  учитываются, но реализуется по принципу{' '}
                  <Text strong>рационального, ненагруженного интерфейса</Text> —
                  простота поддержки и скорость реализации в приоритете.
                </Text>
              </Paragraph>
            ),
          },
          {
            title: (
              <>
                Вариант 2: Продвинутый{' '}
                <Tag color="green" style={{ marginLeft: 8 }}>
                  ⭐ РЕКОМЕНДУЕМЫЙ
                </Tag>
              </>
            ),
            subtitle: 'Оптимальный баланс качества и инвестиций',
            icon: <ThunderboltOutlined />,
            iconColor: 'primary',
            emoji: 'star',
            items: [
              'Всё из Базового варианта',
              'Совместная проработка структуры сайта с Татьяной',
              'Оптимизированная структура = лучшее SEO (логичная навигация, правильные посадочные страницы под запросы)',
              'Интеграция с отзывами Яндекса: блоки отзывов в ключевых местах сайта',
            ],
            footer: (
              <Paragraph
                style={{ margin: 0, fontSize: 'var(--app-font-size-sm)' }}
              >
                <Text type="secondary">
                  <Text strong>Почему рекомендуем:</Text> Реструктуризация даёт
                  реальный SEO-эффект, отзывы Яндекса повышают доверие и
                  конверсию, совместная проработка структуры = сайт точно под
                  задачи бизнеса. Оптимальное соотношение инвестиций и
                  результата.
                </Text>
              </Paragraph>
            ),
          },
          {
            title: 'Вариант 3: Премиум',
            subtitle:
              'Всё из Продвинутого варианта + выделенная команда дизайнеров и полноценный дизайн-процесс',
            icon: <StarOutlined />,
            iconColor: 'gold',
            emoji: 'palette',
            items: [
              'Всё из Продвинутого варианта',
              'Выделенная команда дизайнеров',
              'Полноценный дизайн-процесс: бриф, макеты в Figma, согласование',
              'Pixel-perfect реализация по утверждённым макетам',
              'Глубокая проработка визуала и фирменного стиля',
            ],
            footer: (
              <Paragraph
                style={{ margin: 0, fontSize: 'var(--app-font-size-sm)' }}
              >
                <Text type="secondary">
                  <Text strong>Результат:</Text> Сайт с профессиональным
                  дизайном, который конкурирует по визуалу с лучшими отельными
                  сайтами. Максимальный визуальный эффект и UX-качество.
                </Text>
              </Paragraph>
            ),
          },
        ]}
        columns={3}
        animated
        baseAnimationDelay={100}
        gutter={16}
        verticalGap={16}
        wrapInCard={false}
      />
    ),
  },



  // Примеры реализации
  {
    id: 'implementation-examples-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Примеры реализации"
        subtitle="Шаблоны, демонстрирующие наши возможности"
        imageIndex={6}
      />
    ),
  },
  {
    id: 'implementation-example-1',
    header: 'Пример реализации 1',
    content: (
      <DemoSlide
        image={<img src={variant1Image} alt="Вариант 1 - Реализованный сайт" />}
        demoUrl="https://cameo-poc.vercel.app/"
        buttonText="Посмотреть демо"
        presentationSlug="cameohotel-variants"
        wrapInCard
      />
    ),
  },
  {
    id: 'implementation-example-2',
    header: 'Пример реализации 2',
    content: (
      <DemoSlide
        image={<img src={variant2Image} alt="Вариант 2" />}
        wrapInCard
      />
    ),
  },
  {
    id: 'implementation-example-3',
    header: 'Пример реализации 3',
    content: (
      <DemoSlide
        image={<img src={variant3Image} alt="Вариант 3" />}
        wrapInCard
      />
    ),
  },
  {
    id: 'implementation-example-4',
    header: 'Пример реализации 4',
    content: (
      <DemoSlide
        image={<img src={variant4Image} alt="Вариант 4" />}
        wrapInCard
      />
    ),
  },

  // Технические детали
  {
    id: 'technical-details-title',
    header: undefined,
    content: (
        <SectionTitleSlide
            title="Технические детали"
            subtitle="Технологический стек и общие характеристики всех вариантов"
            imageIndex={7}
        />
    ),
  },

  {
    id: 'solution-variants-tech',
    header: 'Технологический стек',
    content: (
        <ContentWithSectionsSlide
            topSection={
              <Paragraph style={{ fontSize: 'var(--app-font-size-base)' }}>
                Все варианты реализуются на едином технологическом стеке:
              </Paragraph>
            }
            bottomSection={
              <Card size="small" type="inner">
                <Paragraph>
                  <BulbOutlined style={{ marginRight: 8 }} />
                  <Text strong>Почему этот стек:</Text> Сочетание современного
                  фронтенда (Next.js) с проверенной системой бронирования
                  (Travelline) даёт оптимальный баланс между производительностью,
                  SEO и надёжностью бизнес-процессов.
                </Paragraph>
              </Card>
            }
            wrapInCard={false}
        >
          <FeaturesSlide
              cards={[
                {
                  title: 'Фронтенд',
                  icon: <CodeOutlined />,
                  iconColor: 'primary',
                  emoji: 'rocket',
                  items: [
                    'Next.js + React + TypeScript',
                    'Современный стек для высокой производительности',
                    'Отличная SEO-оптимизация из коробки',
                    'Быстрая загрузка и отличный UX',
                  ],
                },
                {
                  title: 'Бэкенд и система бронирования',
                  icon: <DatabaseOutlined />,
                  iconColor: 'primary',
                  emoji: 'wrench',
                  items: [
                    'Travelline остаётся основной системой',
                    'Без миграции данных и рисков',
                    'Интеграция через API',
                    'Все бронирования обрабатываются как сейчас',
                  ],
                },
              ]}
              columns={2}
              animated
              baseAnimationDelay={100}
              gutter={16}
              verticalGap={16}
              wrapInCard={false}
          />
        </ContentWithSectionsSlide>
    ),
  },

  {
    id: 'solution-variants-summary',
    header: 'Что общее во всех вариантах',
    content: (
        <ContentWithSectionsSlide
            topSection={
              <Paragraph style={{ fontSize: 'var(--app-font-size-base)' }}>
                Независимо от выбранного варианта, все решения включают:
              </Paragraph>
            }
            wrapInCard={false}
        >
          <FeaturesSlide
              cards={[
                {
                  title: 'Интеграция Travelline',
                  icon: <ApiOutlined />,
                  iconColor: 'primary',
                  emoji: 'wrench',
                  items: [
                    'Полная интеграция с системой бронирования',
                    'Поиск номеров, отображение цен, кнопки бронирования',
                    'Всё работает через Travelline API',
                  ],
                },
                {
                  title: 'Адаптивный дизайн',
                  icon: <MobileOutlined />,
                  iconColor: 'primary',
                  emoji: 'target',
                  items: [
                    'Полноценная мобильная версия для смартфонов и планшетов',
                    'Удобное бронирование с любого устройства',
                  ],
                },
                {
                  title: 'Современный стек',
                  icon: <GlobalOutlined />,
                  iconColor: 'primary',
                  emoji: 'rocket',
                  items: [
                    'Next.js + React + TypeScript',
                    'Высокая производительность',
                    'SEO-оптимизация и удобство поддержки',
                  ],
                },
              ]}
              columns={3}
              animated
              baseAnimationDelay={100}
              gutter={16}
              verticalGap={16}
              wrapInCard={false}
          />
        </ContentWithSectionsSlide>
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
    header: 'Контакты',
    content: (
      <ContactsSlide
        contacts={[
          {
            name: 'Новиков Павел',
            role: 'Технический директор',
            phone: '+7 908 555 0606',
            email: 'p.novikov@proxima.ooo',
            websiteLabel: 'proxima24.ru',
            variant: 'neutral',
          },
          {
            name: 'Ситяков Артём',
            role: 'Руководитель отдела маркетинга',
            phone: '+7 927 110 84 88',
            email: 'a.sityakov@proxima.ooo',
            websiteLabel: 'proxima24.ru',
            variant: 'neutral',
          },
        ]}
      />
    ),
  },
];
