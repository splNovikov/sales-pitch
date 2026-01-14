import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { huchEntecCreatedAt } from './huch-entec.meta';
import asLedPreview from './as-led.png';
import hanskonnerPreview from './hanskonner.png';
import rosomahaPreview from './rosomaha.png';
import flixPreview from './flix.png';

const { Title, Paragraph } = Typography;

export const huchEntecSlides: SlideData[] = [
  // 1. Title Slide
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Huch EnTEC"
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
      <SectionTitleSlide title="Похожие решения из портфолио" imageIndex={1} />
    ),
  },

  // 5. Projects Overview (Combined)
  {
    id: 'projects-overview',
    header: 'Похожие решения',
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
            <Space orientation="vertical">
              <Space orientation="horizontal">
                <a
                  href="https://as-led-poc-qc2d.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={asLedPreview}
                    alt="AS-LED preview"
                    style={{
                      width: 300,
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 8,
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  />
                </a>
                <Space orientation="vertical">
                  <Title
                    level={4}
                    style={{ color: 'white', margin: 0, fontSize: 18 }}
                  >
                    AS-LED — 80 000 ₽
                  </Title>
                  <Paragraph
                    style={{ color: 'white', margin: 0, fontSize: 13 }}
                  >
                    Платформа управления LED-экранами
                  </Paragraph>
                  <ul
                    style={{
                      color: 'white',
                      fontSize: 12,
                      margin: 0,
                      paddingLeft: 16,
                    }}
                  >
                    <li>Анализ конкурентов</li>
                    <li>Современный лендинг</li>
                    <li>Калькулятор стоимости</li>
                    <li>Демо-версия платформы</li>
                  </ul>
                </Space>
              </Space>
              <Button
                type="primary"
                ghost
                icon={<LinkOutlined />}
                href="https://as-led-poc-qc2d.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Открыть демо
              </Button>
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
            <Space orientation="vertical">
              <Space orientation="horizontal">
                <a
                  href="https://hanskonner-reborn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={hanskonnerPreview}
                    alt="Hanskonner preview"
                    style={{
                      width: 300,
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 8,
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  />
                </a>
                <Space orientation="vertical">
                  <Title
                    level={4}
                    style={{ color: 'white', margin: 0, fontSize: 18 }}
                  >
                    Hanskonner — 65 000 ₽
                  </Title>
                  <Paragraph
                    style={{ color: 'white', margin: 0, fontSize: 13 }}
                  >
                    Корпоративный сайт и стратегия
                  </Paragraph>
                  <ul
                    style={{
                      color: 'white',
                      fontSize: 12,
                      margin: 0,
                      paddingLeft: 16,
                    }}
                  >
                    <li>Анализ бизнеса и стратегия</li>
                    <li>Корпоративный сайт</li>
                    <li>Каталог продукции</li>
                    <li>Интеграция с CMS</li>
                  </ul>
                </Space>
              </Space>
              <Button
                type="primary"
                ghost
                icon={<LinkOutlined />}
                href="https://hanskonner-reborn.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Открыть демо
              </Button>
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
            <Space orientation="vertical">
              <Space orientation="horizontal">
                <a
                  href="https://fresh-producer-face.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={rosomahaPreview}
                    alt="Rosomaha preview"
                    style={{
                      width: 300,
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 8,
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  />
                </a>
                <Space orientation="vertical">
                  <Title
                    level={4}
                    style={{ color: 'white', margin: 0, fontSize: 18 }}
                  >
                    РОСОМАХАТУЛ — 20 000 ₽
                  </Title>
                  <Paragraph
                    style={{ color: 'white', margin: 0, fontSize: 13 }}
                  >
                    B2B портал для оптовиков
                  </Paragraph>
                  <ul
                    style={{
                      color: 'white',
                      fontSize: 12,
                      margin: 0,
                      paddingLeft: 16,
                    }}
                  >
                    <li>Личный кабинет клиента</li>
                    <li>Каталог с остатками</li>
                    <li>Система заказов</li>
                    <li>Интеграция с 1С</li>
                  </ul>
                </Space>
              </Space>
              <Button
                type="primary"
                ghost
                icon={<LinkOutlined />}
                href="https://fresh-producer-face.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Открыть демо
              </Button>
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
            <Space orientation="vertical">
              <Space orientation="horizontal">
                <a
                  href="https://flix-02-mvp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={flixPreview}
                    alt="Flix preview"
                    style={{
                      width: 300,
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 8,
                      cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  />
                </a>
                <Space orientation="vertical">
                  <Title
                    level={4}
                    style={{ color: 'white', margin: 0, fontSize: 18 }}
                  >
                    НПП ФЛИКС — 150 000 ₽
                  </Title>
                  <Paragraph
                    style={{ color: 'white', margin: 0, fontSize: 13 }}
                  >
                    Корпоративный сайт производителя RF-компонентов
                  </Paragraph>
                  <ul
                    style={{
                      color: 'white',
                      fontSize: 12,
                      margin: 0,
                      paddingLeft: 16,
                    }}
                  >
                    <li>Корпоративный сайт</li>
                    <li>Каталог продукции</li>
                    <li>Описание услуг</li>
                    <li>Технические возможности</li>
                  </ul>
                </Space>
              </Space>
              <Button
                type="primary"
                ghost
                icon={<LinkOutlined />}
                href="https://flix-02-mvp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Открыть демо
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    ),
  },

  // Контакты
  {
    id: 'contacts',
    header: undefined,
    content: <SectionTitleSlide title="Контактная информация" imageIndex={5} />,
  },
  {
    id: 'contacts',
    header: 'Контакты',
    content: <ContactsSlide contacts={['Pasha', 'Artem']} />,
  },
];
