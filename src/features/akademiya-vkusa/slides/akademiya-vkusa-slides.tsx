import { Typography, List, Space, Card, Row, Col, Divider, Tag } from 'antd';
import {
  CheckCircleOutlined,
  RocketOutlined,
  ApiOutlined,
  TrophyOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { PricingSlide } from '~shared/ui/pricing-slide';
import { Roadmap } from '~shared/ui/roadmap';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { akademiyaVkusaCreatedAt } from './akademiya-vkusa.meta';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Академия вкуса Commercial Proposal presentation
 * Based on akademiya-vkusa-brief.md
 */
export const akademiyaVkusaSlides: SlideData[] = [
  // Slide 1: Title
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Академия вкуса"
        subtitle="Кейтеринг, услуги питания"
        createdAt={akademiyaVkusaCreatedAt}
      />
    ),
  },

  // Slide 3: Project Goals
  {
    id: 'goals-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Цели проекта"
        subtitle="Бизнес-задачи и ожидания"
        imageIndex={2}
        imageAlt="Цели проекта"
      />
    ),
  },
  {
    id: 'goals',
    header: 'Бизнес-задачи',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <FeaturesSlide
          cards={[
            {
              title: 'Поиск новых клиентов',
              items: [
                'Привлечение целевой аудитории',
                'Расширение клиентской базы',
              ],
              emoji: 'target',
              iconColor: 'blue',
            },
            {
              title: 'Реклама товара',
              items: ['Презентация услуг', 'Демонстрация блюд и мероприятий'],
              emoji: 'sparkles',
              iconColor: 'orange',
            },
            {
              title: 'Увеличение объемов продаж',
              items: ['Рост конверсии', 'Улучшение показателей'],
              emoji: 'chart',
              iconColor: 'green',
            },
            {
              title: 'Информационная поддержка',
              items: ['Актуальная информация', 'Быстрая обратная связь'],
              emoji: 'lightbulb',
              iconColor: 'purple',
            },
            {
              title: 'Благоприятный имидж',
              items: ['Современный образ', 'Профессиональная репутация'],
              emoji: 'star',
              iconColor: 'gold',
            },
          ]}
          columns={2}
          animated
        />
        <Card>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text>
              Клиент выбирает заказ на сайте, оставляет свои контактные данные,
              а оформление и уточнение деталей происходят после связи с
              менеджером.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 4: Design Concept
  {
    id: 'design-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Концепция дизайна"
        subtitle="Стилистика и баланс контента"
        imageIndex={3}
        imageAlt="Концепция дизайна"
      />
    ),
  },
  {
    id: 'design-concept',
    header: 'Стилистика и контент',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>Стилистика</Title>
              <List
                size="small"
                dataSource={['Модный', 'Минималистичный', 'На белом фоне']}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>Баланс контента</Title>
              <List
                size="small"
                dataSource={[
                  'Графика: минимальные детали',
                  'Фотографии: максимум (блюда, мероприятия)',
                  'Текст: минимум, кроме описания организации',
                  'Функционал: удобство использования — приоритет',
                ]}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4}>
            <PictureOutlined /> Референсы
          </Title>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text>
              Ориентиры по дизайну и функционалу:{' '}
              <a href="https://gurman-box.ru" target="_blank" rel="noreferrer">
                gurman-box.ru
              </a>
              ,{' '}
              <a href="https://eatcatering.ru" target="_blank" rel="noreferrer">
                eatcatering.ru
              </a>
              ,{' '}
              <a href="https://m-catering.ru" target="_blank" rel="noreferrer">
                m-catering.ru
              </a>
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 6: Technical Solution
  {
    id: 'technical-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Техническое решение"
        subtitle="Архитектура и технологии"
        imageIndex={5}
        imageAlt="Техническое решение"
      />
    ),
  },
  {
    id: 'technical-solution',
    header: 'Архитектура',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>
                <RocketOutlined /> Frontend
              </Title>
              <Paragraph>
                <Text strong>Next.js</Text>
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Оптимальное SEO',
                  'Высокая производительность',
                  'Современный стек технологий',
                ]}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>
                <ApiOutlined /> Интеграция с iiko
              </Title>
              <Paragraph>
                <Tag color="green">Обязательная</Tag>
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Источник данных о блюдах и услугах',
                  'Учтено в стоимости',
                ]}
                renderItem={item => (
                  <List.Item>
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={4}>CMS (на выбор)</Title>
          <Paragraph style={{ marginBottom: 16 }}>
            <Text type="secondary">
              CMS — система управления контентом, которая позволяет вам
              управлять и модерировать контент сайта самостоятельно.
            </Text>
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>Strapi</Text>
                <br />
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Open-source headless CMS
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>1С-Битрикс</Text>
                <br />
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Российская разработка
                </Text>
              </Card>
            </Col>
          </Row>
          <Divider />
          <Title level={5}>Управление контентом</Title>
          <List
            size="small"
            dataSource={[
              'Загрузка фотографий',
              'Публикация новостей',
              'Обновление меню',
              'Редактирование описаний',
            ]}
            renderItem={item => (
              <List.Item>
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

  // Slide 7: Development Process
  {
    id: 'process-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Процесс разработки"
        subtitle="Подход с использованием ИИ"
        imageIndex={6}
        imageAlt="Процесс разработки"
      />
    ),
  },
  {
    id: 'development-process',
    header: 'Этапы разработки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Roadmap
          mode="alternate"
          items={[
            {
              title: 'Этап 1: Прототипирование',
              duration: '1-2 недели',
              icon: <RocketOutlined />,
              color: 'blue',
              description:
                'Генерация базовой структуры сайта с помощью ИИ. Согласование основной концепции.',
            },
            {
              title: 'Этап 2: Итеративная доработка',
              duration: '3-4 недели',
              icon: <TrophyOutlined />,
              color: 'green',
              description:
                '3 итерации совместной работы. Корректировка дизайна, настройка функционала, оптимизация UX.',
            },
            {
              title: 'Этап 3: Перенос на Next.js',
              duration: '2-3 недели',
              icon: <ApiOutlined />,
              color: 'purple',
              description:
                'Адаптация под production. Интеграция с CMS (система управления контентом). Подключение iiko API. Оптимизация производительности.',
            },
          ]}
        />
      </Space>
    ),
  },

  // Slide 8: Pricing
  {
    id: 'pricing-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Коммерческое предложение"
        subtitle="Стоимость разработки"
        imageIndex={7}
        imageAlt="Стоимость"
      />
    ),
  },
  {
    id: 'pricing',
    header: 'Стоимость',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <PricingSlide
          tiers={[
            {
              name: 'Базовая стоимость',
              price: 'от 150 000 ₽',
              features: [
                'Дизайн по референсам',
                'Адаптивная верстка',
                'Интеграция с iiko',
                'Настройка выбранной CMS (система управления контентом)',
                'Обучение персонала пользованию CMS',
                'Форма обратной связи',
                'Базовая оптимизация',
              ],
              emoji: 'sparkles',
              iconColor: 'blue',
            },
            {
              name: 'Кастомный дизайн',
              price: 'от 150 000 ₽',
              features: [
                'Дизайн с дизайнерами',
                'Уникальное визуальное решение',
                'Адаптивная верстка',
                'Интеграция с iiko',
                'Настройка выбранной CMS (система управления контентом)',
                'Форма обратной связи',
                'Базовая оптимизация',
              ],
              emoji: 'palette',
              iconColor: 'purple',
            },
            {
              name: 'SEO-оптимизация',
              price: '≈ 150 000 ₽',
              label: 'Опционально',
              labelBg: '#fff7e6',
              labelColor: '#d46b08',
              features: [
                'Расширенная SEO-оптимизация',
                'Дополнительные интеграции',
                'Расширенная аналитика',
                'Поддержка после запуска',
              ],
              emoji: 'chart',
              iconColor: 'orange',
            },
          ]}
          columns={3}
          animated
        />
        <Divider />
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text>
              Готовы обсудить детали и ответить на все вопросы. Свяжитесь с нами
              для уточнения сроков и условий работы.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 12: Contacts
  {
    id: 'contacts-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Контакты"
        subtitle="Свяжитесь с нами для обсуждения проекта"
        imageIndex={1}
        imageAlt="Контакты"
      />
    ),
  },
  {
    id: 'contacts-content',
    header: undefined,
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <ContactsSlide contacts={['Pasha', 'Artem', 'Yula']} />
      </Space>
    ),
  },
];
