import { Card, Col, Row, Space, Typography } from 'antd';
import { LinkOutlined, RocketOutlined, ShopOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { huchEntecCreatedAt } from './huch-entec.meta';

const { Title, Paragraph, Link } = Typography;

export const huchEntecSlides: SlideData[] = [
  // 1. Title Slide
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Huch EnTEC"
        subtitle="Портфолио наших решений"
        description="Примеры реализованных проектов и возможности для вашего бизнеса"
        createdAt={huchEntecCreatedAt}
      />
    ),
  },

  // 2. Introduction Section
  {
    id: 'intro-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="О компании Проксима"
        subtitle="Мы создаем современные веб-решения для B2B компаний"
        imageIndex={0}
      />
    ),
  },

  // 3. What We Do
  {
    id: 'what-we-do',
    header: 'Наши компетенции',
    content: (
      <FeaturesSlide
        columns={2}
        animated
        cards={[
          {
            title: 'Корпоративные сайты и лендинги',
            items: [
              '✅ Современный дизайн и UX/UI',
              '✅ Адаптивная верстка для всех устройств',
              '✅ Высокая скорость загрузки',
              '✅ SEO-оптимизация',
              '✅ Интеграция с CMS для самостоятельного управления контентом',
            ],
            emoji: 'sparkles',
            iconColor: 'blue',
          },
          {
            title: 'B2B порталы и личные кабинеты',
            items: [
              '✅ Каталоги продукции с фильтрацией',
              '✅ Личные кабинеты клиентов и дилеров',
              '✅ Система заказов и управления',
              '✅ Интеграция с 1С и CRM',
              '✅ Аналитика и отчеты',
            ],
            emoji: 'chart',
            iconColor: 'green',
          },
          {
            title: 'Специализированные решения',
            items: [
              '✅ Системы управления производством',
              '✅ Интерактивные демо и визуализация',
              '✅ Калькуляторы и конфигураторы',
              '✅ Автоматизация бизнес-процессов',
              '✅ API и интеграции с внешними системами',
            ],
            emoji: 'wrench',
            iconColor: 'purple',
          },
          {
            title: 'Поддержка и развитие',
            items: [
              '✅ Техническая поддержка',
              '✅ Доработка функционала',
              '✅ Обновление дизайна',
              '✅ Оптимизация производительности',
              '✅ Обучение работе с системой',
            ],
            emoji: 'rocket',
            iconColor: 'orange',
          },
        ]}
      />
    ),
  },

  // 4. Portfolio Section
  {
    id: 'portfolio-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Портфолио проектов"
        subtitle="Реализованные решения для разных отраслей"
        imageIndex={1}
      />
    ),
  },

  // 5. Projects Overview (Combined)
  {
    id: 'projects-overview',
    header: 'Наши проекты',
    content: (
      <Row gutter={[16, 16]}>
        {/* AS-LED Project */}
        <Col span={12}>
          <Card
            hoverable
            style={{
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {/* Placeholder for preview */}
              <div
                style={{
                  width: '100%',
                  height: 120,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                [Preview placeholder]
              </div>
              <Title level={4} style={{ color: 'white', margin: 0, fontSize: 18 }}>
                AS-LED — 80 000 ₽
              </Title>
              <Paragraph style={{ color: 'white', margin: 0, fontSize: 13 }}>
                Платформа управления LED-экранами
              </Paragraph>
              <ul style={{ color: 'white', fontSize: 12, margin: 0, paddingLeft: 16 }}>
                <li>Анализ конкурентов</li>
                <li>Современный лендинг</li>
                <li>Калькулятор стоимости</li>
                <li>Демо-версия платформы</li>
              </ul>
              <Link
                href="https://as-led-poc-qc2d.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', fontSize: 12 }}
              >
                <LinkOutlined /> Открыть демо
              </Link>
            </Space>
          </Card>
        </Col>

        {/* Hanskonner Project */}
        <Col span={12}>
          <Card
            hoverable
            style={{
              height: '100%',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              border: 'none',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {/* Placeholder for preview */}
              <div
                style={{
                  width: '100%',
                  height: 120,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                [Preview placeholder]
              </div>
              <Title level={4} style={{ color: 'white', margin: 0, fontSize: 18 }}>
                Hanskonner — 65 000 ₽
              </Title>
              <Paragraph style={{ color: 'white', margin: 0, fontSize: 13 }}>
                Корпоративный сайт и стратегия
              </Paragraph>
              <ul style={{ color: 'white', fontSize: 12, margin: 0, paddingLeft: 16 }}>
                <li>Анализ бизнеса и стратегия</li>
                <li>Корпоративный сайт</li>
                <li>Каталог продукции</li>
                <li>Интеграция с CMS</li>
              </ul>
              <Link
                href="https://hanskonner-reborn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', fontSize: 12 }}
              >
                <LinkOutlined /> Открыть демо
              </Link>
            </Space>
          </Card>
        </Col>

        {/* Rosomaha Project */}
        <Col span={12}>
          <Card
            hoverable
            style={{
              height: '100%',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              border: 'none',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {/* Placeholder for preview */}
              <div
                style={{
                  width: '100%',
                  height: 120,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                [Preview placeholder]
              </div>
              <Title level={4} style={{ color: 'white', margin: 0, fontSize: 18 }}>
                РОСОМАХАТУЛ — 20 000 ₽
              </Title>
              <Paragraph style={{ color: 'white', margin: 0, fontSize: 13 }}>
                B2B портал для оптовиков
              </Paragraph>
              <ul style={{ color: 'white', fontSize: 12, margin: 0, paddingLeft: 16 }}>
                <li>Личный кабинет клиента</li>
                <li>Каталог с остатками</li>
                <li>Система заказов</li>
                <li>Интеграция с 1С</li>
              </ul>
              <Link
                href="https://fresh-producer-face.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', fontSize: 12 }}
              >
                <LinkOutlined /> Открыть демо
              </Link>
            </Space>
          </Card>
        </Col>

        {/* Flix Project */}
        <Col span={12}>
          <Card
            hoverable
            style={{
              height: '100%',
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              border: 'none',
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              {/* Placeholder for preview */}
              <div
                style={{
                  width: '100%',
                  height: 120,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                [Preview placeholder]
              </div>
              <Title level={4} style={{ color: 'white', margin: 0, fontSize: 18 }}>
                НПП ФЛИКС — 150 000 ₽
              </Title>
              <Paragraph style={{ color: 'white', margin: 0, fontSize: 13 }}>
                Корпоративный сайт производителя RF-компонентов
              </Paragraph>
              <ul style={{ color: 'white', fontSize: 12, margin: 0, paddingLeft: 16 }}>
                <li>Корпоративный сайт</li>
                <li>Каталог продукции</li>
                <li>Описание услуг</li>
                <li>Технические возможности</li>
              </ul>
              <Link
                href="https://flix-02-mvp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', fontSize: 12 }}
              >
                <LinkOutlined /> Открыть демо
              </Link>
            </Space>
          </Card>
        </Col>
      </Row>
    ),
  },

  // 9. Benefits Section
  {
    id: 'benefits-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Почему работать с нами выгодно"
        subtitle="Наши преимущества и подход к работе"
        imageIndex={2}
      />
    ),
  },

  // 10. Our Advantages
  {
    id: 'our-advantages',
    header: 'Наши преимущества',
    content: (
      <FeaturesSlide
        columns={2}
        animated
        cards={[
          {
            title: 'Опыт в B2B сегменте',
            subtitle: 'Мы понимаем специфику B2B бизнеса и его требования',
            items: [
              '✅ Реализованные B2B порталы',
              '✅ Интеграции с 1С и CRM',
              '✅ Системы для оптовых продаж',
              '✅ Автоматизация бизнес-процессов',
            ],
            emoji: 'target',
            iconColor: 'blue',
          },
          {
            title: 'Современные технологии',
            subtitle: 'Используем передовые технологии для надежных решений',
            items: [
              '✅ React, TypeScript, Next.js',
              '✅ Node.js, PostgreSQL',
              '✅ Микросервисная архитектура',
              '✅ CI/CD и автоматизация',
            ],
            emoji: 'rocket',
            iconColor: 'purple',
          },
          {
            title: 'Полный цикл разработки',
            subtitle: 'От аналитики до поддержки — делаем всё сами',
            items: [
              '✅ Анализ и проектирование',
              '✅ UX/UI дизайн',
              '✅ Разработка и тестирование',
              '✅ Внедрение и обучение',
              '✅ Техническая поддержка',
            ],
            emoji: 'wrench',
            iconColor: 'green',
          },
          {
            title: 'Гибкий подход',
            subtitle: 'Адаптируемся под ваши требования и бюджет',
            items: [
              '✅ Итеративная разработка',
              '✅ Регулярная демонстрация результатов',
              '✅ Быстрая реакция на изменения',
              '✅ Разные тарифные планы',
            ],
            emoji: 'star',
            iconColor: 'orange',
          },
        ]}
      />
    ),
  },

  // 11. What We Can Do for Huch EnTEC
  {
    id: 'for-huch-entec',
    header: 'Что мы можем сделать для Huch EnTEC',
    content: (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ background: '#f6f9fc' }}>
          <Space direction="vertical" align="center" style={{ width: '100%' }}>
            <Title level={3} style={{ margin: 0 }}>
              Возможные направления сотрудничества
            </Title>
            <Paragraph style={{ fontSize: 16, textAlign: 'center', maxWidth: 800, margin: '16px 0 0 0' }}>
              На основе нашего опыта мы можем предложить различные решения для развития вашего бизнеса
            </Paragraph>
          </Space>
        </Card>

        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Card
              hoverable
              style={{
                height: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
              }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <RocketOutlined style={{ fontSize: 40, color: 'white' }} />
                <Title level={4} style={{ color: 'white', margin: 0 }}>
                  Корпоративный сайт
                </Title>
                <ul style={{ margin: 0, paddingLeft: 20, color: 'white' }}>
                  <li>Современный дизайн</li>
                  <li>Каталог продукции</li>
                  <li>Портфолио проектов</li>
                  <li>Интеграция с CMS</li>
                  <li>Многоязычность (DE/EN/RU)</li>
                </ul>
              </Space>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              style={{
                height: '100%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                border: 'none',
              }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <ShopOutlined style={{ fontSize: 40, color: 'white' }} />
                <Title level={4} style={{ color: 'white', margin: 0 }}>
                  B2B портал
                </Title>
                <ul style={{ margin: 0, paddingLeft: 20, color: 'white' }}>
                  <li>Личные кабинеты клиентов</li>
                  <li>Система заказов</li>
                  <li>Интеграция с ERP/CRM</li>
                  <li>Управление дилерами</li>
                  <li>Аналитика и отчеты</li>
                </ul>
              </Space>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              style={{
                height: '100%',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                border: 'none',
              }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <ThunderboltOutlined style={{ fontSize: 40, color: 'white' }} />
                <Title level={4} style={{ color: 'white', margin: 0 }}>
                  Конфигуратор/Калькулятор
                </Title>
                <ul style={{ margin: 0, paddingLeft: 20, color: 'white' }}>
                  <li>Интерактивный подбор решений</li>
                  <li>Расчет стоимости</li>
                  <li>3D визуализация</li>
                  <li>Генерация коммерческих предложений</li>
                  <li>Интеграция с CRM</li>
                </ul>
              </Space>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              style={{
                height: '100%',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                color: 'white',
                border: 'none',
              }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <RocketOutlined style={{ fontSize: 40, color: 'white' }} />
                <Title level={4} style={{ color: 'white', margin: 0 }}>
                  Специализированные решения
                </Title>
                <ul style={{ margin: 0, paddingLeft: 20, color: 'white' }}>
                  <li>Системы мониторинга</li>
                  <li>Диспетчерские панели</li>
                  <li>Автоматизация производства</li>
                  <li>IoT интеграции</li>
                  <li>Мобильные приложения</li>
                </ul>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },

  // 12. Next Steps
  {
    id: 'next-steps',
    header: 'Следующие шаги',
    content: (
      <FeaturesSlide
        columns={3}
        animated
        cards={[
          {
            title: '1. Знакомство',
            items: [
              'Встреча с командой',
              'Обсуждение ваших задач',
              'Демонстрация портфолио',
              'Ответы на вопросы',
            ],
            emoji: 'lightbulb',
            iconColor: 'blue',
          },
          {
            title: '2. Анализ и предложение',
            items: [
              'Анализ текущей ситуации',
              'Проработка технического решения',
              'Оценка сроков и стоимости',
              'Коммерческое предложение',
            ],
            emoji: 'target',
            iconColor: 'purple',
          },
          {
            title: '3. Разработка',
            items: [
              'Подписание договора',
              'Начало работы над проектом',
              'Регулярные демонстрации',
              'Запуск и поддержка',
            ],
            emoji: 'rocket',
            iconColor: 'green',
          },
        ]}
      />
    ),
  },

  // 13. Contacts
  {
    id: 'contacts',
    header: 'Контакты',
    content: <ContactsSlide contacts={['Pasha', 'Artem']} />,
  },
];
