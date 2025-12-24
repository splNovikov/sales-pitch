import { Typography, Card, Space, List, Row, Col, Tag, Divider } from 'antd';
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
import cameoLogo from '~features/cameohotel/slides/cameo-logo.png';
import { cameohotelVariantsCreatedAt } from '~features/cameohotel/slides/cameohotel-variants.meta.ts';

const { Title, Paragraph, Text, Link } = Typography;

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
              subtitle: '«вот по-моему неплохой сайт, у них тоже отель и апарты»',
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
    id: 'solution-variants-tech',
    header: 'Технологический стек',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            Все варианты реализуются на едином технологическом стеке:
          </Paragraph>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <CodeOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Фронтенд
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Next.js + React + TypeScript',
                    'Современный стек для высокой производительности',
                    'Отличная SEO-оптимизация из коробки',
                    'Быстрая загрузка и отличный UX',
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
                  <DatabaseOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Бэкенд и система бронирования
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Travelline остаётся основной системой',
                    'Без миграции данных и рисков',
                    'Интеграция через API',
                    'Все бронирования обрабатываются как сейчас',
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
          <Card size="small" type="inner">
            <Paragraph>
              <BulbOutlined style={{ marginRight: 8 }} />
              <Text strong>Почему этот стек:</Text> Сочетание современного
              фронтенда (Next.js) с проверенной системой бронирования
              (Travelline) даёт оптимальный баланс между производительностью,
              SEO и надёжностью бизнес-процессов.
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'solution-variant-1-basic',
    header: 'Вариант 1: Базовый',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <RocketOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Суть варианта
            </Title>
            <Paragraph>
              Копирование текущей структуры сайта в новом современном дизайне.
              Структура страниц остаётся такой же, как сейчас, но визуально сайт
              полностью обновляется.
            </Paragraph>
          </Card>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <CheckCircleOutlined
                    style={{ color: 'green', marginRight: 8 }}
                  />
                  Что входит:
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Современный дизайн всех страниц',
                    'Адаптивная вёрстка (мобильная версия)',
                    'Интеграция с Travelline',
                    'Сохранение текущей структуры сайта',
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
                  <BulbOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Подход к дизайну
                </Title>
                <Paragraph>
                  Дизайн разрабатывает команда разработчиков. Пожелания Татьяны
                  учитываются, но реализуется по принципу{' '}
                  <Text strong>рационального, ненагруженного интерфейса</Text> —
                  простота поддержки и скорость реализации в приоритете.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'solution-variant-2-advanced',
    header: 'Вариант 2: Продвинутый ⭐ РЕКОМЕНДУЕМЫЙ',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner" style={{ borderColor: '#52c41a' }}>
            <Space>
              <Tag
                color="green"
                style={{ fontSize: '16px', padding: '4px 12px' }}
              >
                ⭐ РЕКОМЕНДУЕМЫЙ
              </Tag>
              <Text strong style={{ fontSize: 'var(--app-font-size-lg)' }}>
                Оптимальный баланс качества и инвестиций
              </Text>
            </Space>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <ThunderboltOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Что включает (Вариант 1 +):
            </Title>
            <List
              size="large"
              dataSource={[
                'Всё из Базового варианта',
                'Совместная проработка структуры сайта с Татьяной',
                'Оптимизированная структура = лучшее SEO (логичная навигация, правильные посадочные страницы под запросы)',
                'Интеграция с отзывами Яндекса: блоки отзывов в ключевых местах сайта',
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
          <Card size="small" type="inner">
            <Title level={4}>
              <StarOutlined style={{ color: 'gold', marginRight: 8 }} />
              Почему рекомендуем:
            </Title>
            <List
              size="small"
              dataSource={[
                'Реструктуризация даёт реальный SEO-эффект (больше органического трафика)',
                'Отзывы Яндекса повышают доверие и конверсию',
                'Совместная проработка структуры = сайт точно под задачи бизнеса',
                'Оптимальное соотношение инвестиций и результата',
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
    id: 'solution-variant-3-premium',
    header: 'Вариант 3: Премиум',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <StarOutlined style={{ color: 'gold', marginRight: 8 }} />
              Что включает (Вариант 2 +):
            </Title>
            <List
              size="large"
              dataSource={[
                'Всё из Продвинутого варианта',
                'Выделенная команда дизайнеров',
                'Полноценный дизайн-процесс: бриф, макеты в Figma, согласование',
                'Pixel-perfect реализация по утверждённым макетам',
                'Глубокая проработка визуала и фирменного стиля',
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
          <Card size="small" type="inner">
            <Title level={4}>
              <RocketOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Процесс работы:
            </Title>
            <List
              size="small"
              dataSource={[
                'Этап 1: Команда дизайнеров создаёт дизайн-макеты (бриф, исследование, макеты в Figma)',
                'Этап 2: Согласование дизайна с Татьяной (итерации по пожеланиям)',
                'Этап 3: Разработка сайта по утверждённым макетам (pixel-perfect)',
                'Этап 4: Интеграции (Travelline, отзывы Яндекса) в стиле дизайна',
              ]}
              renderItem={(item, index) => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Space>
                    <Tag color="blue">{index + 1}</Tag>
                    <Text>{item}</Text>
                  </Space>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Paragraph>
              <BulbOutlined style={{ marginRight: 8 }} />
              <Text strong>Результат:</Text> Сайт с профессиональным дизайном,
              который конкурирует по визуалу с лучшими отельными сайтами.
              Максимальный визуальный эффект и UX-качество.
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'solution-variants-summary',
    header: 'Что общее во всех вариантах',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            Независимо от выбранного варианта, все решения включают:
          </Paragraph>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <ApiOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Интеграция Travelline
                </Title>
                <Text>
                  Полная интеграция с системой бронирования. Поиск номеров,
                  отображение цен, кнопки бронирования — всё работает через
                  Travelline API.
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <MobileOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Адаптивный дизайн
                </Title>
                <Text>
                  Полноценная мобильная версия для смартфонов и планшетов.
                  Удобное бронирование с любого устройства.
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" type="inner">
                <Title level={4}>
                  <GlobalOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Современный стек
                </Title>
                <Text>
                  Next.js + React + TypeScript обеспечивают высокую
                  производительность, SEO-оптимизацию и удобство поддержки.
                </Text>
              </Card>
            </Col>
          </Row>
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
            variant: 'green',
          },
          {
            name: 'Ситяков Артём',
            role: 'Руководитель отдела маркетинга',
            phone: '+7 927 110 84 88',
            email: 'a.sityakov@proxima.ooo',
            websiteLabel: 'proxima24.ru',
            variant: 'blue',
          },
        ]}
      />
    ),
  },
];
