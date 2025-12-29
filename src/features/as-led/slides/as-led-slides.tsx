import { Card, Col, Row, Space, Table, Typography } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { DemoSlide } from '~shared/ui/demo-slide';
import { asLedCreatedAt } from './as-led.meta';

const { Title, Paragraph, Text, Link } = Typography;

export const asLedSlides: SlideData[] = [
  // 1. Title Slide
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="AS-LED"
        description="Конкурентный анализ: Веб-ресурсы LED-экранов"
        subtitle="Современная платформа управления LED-экранами"
        createdAt={asLedCreatedAt}
        location="Санкт-Петербург"
      />
    ),
  },

  // 2. Introduction Section
  {
    id: 'intro-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Конкурентный анализ"
        subtitle="Сравнительный анализ веб-платформ конкурентов с точки зрения дизайна, функциональности, UX и инновационности"
        imageIndex={0}
      />
    ),
  },

  // 3. Competitor 1 - EKRANIKA.RU
  {
    id: 'competitor-ekranika',
    header: 'EKRANIKA.RU',
    content: (
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ margin: 0 }}>
              Обзор веб-ресурса
            </Title>
            <Link
              href="https://ekranika.ru/montazh-svetodiodnykh-ekranov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkOutlined /> https://ekranika.ru/montazh-svetodiodnykh-ekranov/
            </Link>
          </Space>
        </Card>
        <FeaturesSlide
          columns={3}
          animated
          cards={[
            {
              title: 'Дизайн и визуализация',
              emoji: 'palette',
              iconColor: 'orange',
              items: [
                '❌ Статичный, корпоративный вид',
                '❌ Стандартная цветовая схема',
                '❌ Неживые изображения продуктов',
                '❌ Нет интерактивных элементов',
                '⚠️ Мобильная адаптация: базовая',
              ],
            },
            {
              title: 'Функциональность',
              emoji: 'wrench',
              iconColor: 'blue',
              items: [
                '📄 Описание услуг и характеристик',
                '📋 Статичная информация',
                '❌ Нет демонстрации работы системы',
                '❌ Нет интерактивных калькуляторов',
                '❌ Нет 3D-визуализации',
              ],
            },
            {
              title: 'Ключевые проблемы',
              emoji: 'target',
              iconColor: 'red',
              items: [
                '❌ Традиционный корпоративный сайт',
                '❌ Нет интерактивности',
                '❌ Нет демонстрации возможностей',
                '❌ Сложный путь к принятию решения',
                '❌ Не показывает реальную ценность',
              ],
              footer: (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #f0f0f0' }}>
                  <Text strong>Оценка: </Text>
                  <Text type="warning" strong style={{ fontSize: 16 }}>
                    ⭐ 2/5
                  </Text>
                  <div style={{ marginTop: 4 }}>
                    <Text type="secondary" style={{ fontSize: 13 }}>
                      Информационный сайт, ничего больше
                    </Text>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Space>
    ),
  },

  // 4. Competitor 2 - APEX-LED.RU
  {
    id: 'competitor-apex',
    header: 'APEX-LED.RU',
    content: (
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ margin: 0 }}>
              Обзор веб-ресурса
            </Title>
            <Link href="https://apex-led.ru/o-nas/" target="_blank" rel="noopener noreferrer">
              <LinkOutlined /> https://apex-led.ru/o-nas/
            </Link>
          </Space>
        </Card>
        <FeaturesSlide
          columns={3}
          animated
          cards={[
            {
              title: 'Дизайн и визуализация',
              emoji: 'palette',
              iconColor: 'orange',
              items: [
                '⚠️ Простой, минималистичный дизайн',
                '⚠️ Стандартная цветовая схема',
                '❌ Мало визуальных элементов',
                '❌ Небольшое количество изображений',
                '⚠️ Мобильная адаптация: минимальная',
              ],
            },
            {
              title: 'Функциональность',
              emoji: 'wrench',
              iconColor: 'blue',
              items: [
                '📄 Описание компании и опыта',
                '📄 Информация об услугах',
                '❌ Нет демонстрации функционала',
                '❌ Нет технического портала',
                '❌ Нет отслеживания статуса',
              ],
            },
            {
              title: 'Ключевые проблемы',
              emoji: 'target',
              iconColor: 'red',
              items: [
                '❌ Очень минимальный веб-ресурс',
                '❌ Не использует потенциал интернета',
                '❌ Нет возможности показать качество',
                '❌ Скучный и неинтересный дизайн',
                '❌ Не продает, а только информирует',
              ],
              footer: (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #f0f0f0' }}>
                  <Text strong>Оценка: </Text>
                  <Text type="danger" strong style={{ fontSize: 16 }}>
                    ⭐ 1.5/5
                  </Text>
                  <div style={{ marginTop: 4 }}>
                    <Text type="secondary" style={{ fontSize: 13 }}>
                      Визитная карточка, недостаточно для продаж
                    </Text>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Space>
    ),
  },

  // 5. Competitor 3 - INDIKOTRADE.RU
  {
    id: 'competitor-indikotrade',
    header: 'INDIKOTRADE.RU',
    content: (
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ margin: 0 }}>
              Обзор веб-ресурса
            </Title>
            <Link
              href="https://indikotrade.ru/services/ustanovka-videoekranov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkOutlined /> https://indikotrade.ru/services/ustanovka-videoekranov/
            </Link>
          </Space>
        </Card>
        <FeaturesSlide
          columns={3}
          animated
          cards={[
            {
              title: 'Дизайн и визуализация',
              emoji: 'palette',
              iconColor: 'orange',
              items: [
                '⚠️ Современный, но стандартный дизайн',
                '✅ Цветные фотографии проектов',
                '✅ Визуальное отображение услуг',
                '✅ Мобильная адаптация: хорошая',
              ],
            },
            {
              title: 'Функциональность',
              emoji: 'wrench',
              iconColor: 'blue',
              items: [
                '📄 Полное описание услуг',
                '📚 Галерея проектов',
                '⚠️ Фильтрация по категориям',
                '❌ Нет интерактивной демонстрации',
                '❌ Нет системы управления',
              ],
            },
            {
              title: 'Ключевые проблемы',
              emoji: 'target',
              iconColor: 'red',
              items: [
                '❌ Портфолио-ориентированный сайт',
                '❌ Нет демонстрации технологии',
                '❌ Невозможно понять, как работает',
                '❌ Нет интерактивности',
                '❌ Длительный процесс продаж',
              ],
              footer: (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #f0f0f0' }}>
                  <Text strong>Оценка: </Text>
                  <Text type="warning" strong style={{ fontSize: 16 }}>
                    ⭐ 3/5
                  </Text>
                  <div style={{ marginTop: 4 }}>
                    <Text type="secondary" style={{ fontSize: 13 }}>
                      Хороший информационный сайт, но не интерактивный
                    </Text>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Space>
    ),
  },

  // 6. Comparison Table Section
  {
    id: 'comparison-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Сравнительный анализ"
        subtitle="Детальное сравнение веб-ресурсов конкурентов"
        imageIndex={1}
      />
    ),
  },

  // 7. Comparison Table
  {
    id: 'comparison-table',
    header: 'Сравнительная таблица',
    content: (
      <Card>
        <Table
          dataSource={[
            {
              key: 'type',
              criterion: 'Тип ресурса',
              ekranika: 'Сайт-визитка',
              apex: 'Сайт-визитка',
              indikotrade: 'Сайт-портфолио',
            },
            {
              key: 'design',
              criterion: 'Дизайн',
              ekranika: '❌ Скучный',
              apex: '❌ Минимальный',
              indikotrade: '⚠️ Хороший',
            },
            {
              key: 'interactive',
              criterion: 'Интерактивность',
              ekranika: '❌ Нет',
              apex: '❌ Нет',
              indikotrade: '⚠️ Минимальная',
            },
            {
              key: 'demo',
              criterion: 'Демонстрация',
              ekranika: '❌ Нет',
              apex: '❌ Нет',
              indikotrade: '⚠️ Портфолио',
            },
            {
              key: 'ux',
              criterion: 'UX/UI',
              ekranika: '❌ Плохо',
              apex: '❌ Плохо',
              indikotrade: '⚠️ Хорошо',
            },
            {
              key: 'mobile',
              criterion: 'Мобильность',
              ekranika: '⚠️ Базовая',
              apex: '⚠️ Минимальная',
              indikotrade: '✅ Хорошая',
            },
            {
              key: 'functionality',
              criterion: 'Функциональность',
              ekranika: '❌ Информация',
              apex: '❌ Информация',
              indikotrade: '⚠️ Информация',
            },
            {
              key: 'trial',
              criterion: 'Пробный доступ',
              ekranika: '❌ Нет',
              apex: '❌ Нет',
              indikotrade: '❌ Нет',
            },
            {
              key: 'analytics',
              criterion: 'Аналитика',
              ekranika: '❌ Нет',
              apex: '❌ Нет',
              indikotrade: '❌ Нет',
            },
            {
              key: 'api',
              criterion: 'API/Интеграции',
              ekranika: '❌ Нет',
              apex: '❌ Нет',
              indikotrade: '❌ Нет',
            },
          ]}
          columns={[
            {
              title: 'Критерий',
              dataIndex: 'criterion',
              key: 'criterion',
              width: '25%',
              render: (text) => <Text strong>{text}</Text>,
            },
            {
              title: 'EKRANIKA',
              dataIndex: 'ekranika',
              key: 'ekranika',
              width: '25%',
            },
            {
              title: 'APEX-LED',
              dataIndex: 'apex',
              key: 'apex',
              width: '25%',
            },
            {
              title: 'INDIKOTRADE',
              dataIndex: 'indikotrade',
              key: 'indikotrade',
              width: '25%',
            },
          ]}
          pagination={false}
          size="small"
        />
      </Card>
    ),
  },

  // 8. AS-LED Landing Page Section
  {
    id: 'asled-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Лендинг AS-LED"
        subtitle="Почему наш веб-сайт лучше, чем у конкурентов"
        imageIndex={2}
      />
    ),
  },

  // 9. Landing Page Features
  {
    id: 'asled-features',
    header: 'Особенности нашего лендинга',
    content: (
      <FeaturesSlide
        columns={3}
        animated
        cards={[
          {
            title: 'Современный дизайн',
            items: [
              '✅ Минималистичный и чистый интерфейс',
              '✅ Профессиональная типографика',
              '✅ Адаптивный дизайн для всех устройств',
              '✅ Быстрая загрузка страниц',
            ],
            emoji: 'sparkles',
          },
          {
            title: 'Удобная навигация',
            items: [
              '✅ Интуитивная структура меню',
              '✅ Понятные категории продукции',
              '✅ Быстрый поиск информации',
              '✅ Логичное расположение элементов',
            ],
            emoji: 'target',
          },
          {
            title: 'Полная информация',
            items: [
              '✅ Детальные характеристики продуктов',
              '✅ Фотографии и видео экранов',
              '✅ Примеры реализованных проектов',
              '✅ Прозрачные цены и условия',
            ],
            emoji: 'chart',
          },
          {
            title: 'Интерактивность',
            items: [
              '✅ Онлайн-калькулятор стоимости',
              '✅ Форма быстрого запроса',
              '✅ Онлайн-чат с консультантом',
              '✅ Возможность заказать обратный звонок',
            ],
            emoji: 'rocket',
          },
          {
            title: 'Полезный контент',
            items: [
              '✅ Статьи и руководства',
              '✅ Ответы на частые вопросы (FAQ)',
              '✅ Кейсы и примеры использования',
              '✅ Новости и обновления',
            ],
            emoji: 'lightbulb',
          },
          {
            title: 'Удобство для клиента',
            items: [
              '✅ Простая форма заявки',
              '✅ Несколько способов связи',
              '✅ Быстрая обратная связь',
              '✅ Скачивание каталогов и прайсов',
            ],
            emoji: 'star',
          },
        ]}
      />
    ),
  },

  // 10. Key Landing Page Advantages
  {
    id: 'key-advantages',
    header: 'Преимущества нашего лендинга',
    content: (
      <FeaturesSlide
        columns={2}
        animated
        cards={[
          {
            title: 'Вся информация онлайн',
            subtitle: 'Конкуренты: нужно звонить и спрашивать. Мы: вся информация доступна на сайте.',
            items: [
              '❌ Конкуренты: "Позвоните, мы вам расскажем"',
              '✅ Мы: детальные характеристики, цены, кейсы',
              '✅ Клиент изучает продукцию в удобное время',
              '✅ Экономия времени для клиента и менеджера',
            ],
            emoji: 'target',
            iconColor: 'blue',
          },
          {
            title: 'Современный UX/UI',
            subtitle: 'Профессиональный дизайн создает доверие и улучшает конверсию.',
            items: [
              '❌ Конкуренты: устаревший дизайн, плохая навигация',
              '✅ Мы: современный интерфейс и типографика',
              '✅ Адаптивность под все устройства',
              '✅ Быстрая загрузка и отзывчивость',
            ],
            emoji: 'star',
            iconColor: 'green',
          },
          {
            title: 'Интерактивные инструменты',
            subtitle: 'Калькуляторы, формы, онлайн-чат — все для удобства клиента.',
            items: [
              '❌ Конкуренты: статичные сайты без взаимодействия',
              '✅ Мы: калькулятор стоимости, быстрые формы',
              '✅ Онлайн-чат для мгновенных ответов',
              '✅ Возможность скачать каталоги и прайсы',
            ],
            emoji: 'chart',
            iconColor: 'purple',
          },
          {
            title: 'Доверие и конверсия',
            subtitle: 'Качественный лендинг повышает доверие и увеличивает заявки.',
            items: [
              '❌ Конкуренты: низкое доверие из-за плохого сайта',
              '✅ Мы: профессиональный вид = серьезная компания',
              '✅ Кейсы и портфолио убеждают клиента',
              '✅ Удобные формы увеличивают конверсию',
            ],
            emoji: 'wrench',
            iconColor: 'cyan',
          },
        ]}
      />
    ),
  },

  // 11. Landing Page Comparison
  {
    id: 'positioning',
    header: 'Сравнение лендингов',
    content: (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Card
                size="small"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                }}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>
                    Лендинги конкурентов
                  </Title>
                  <Paragraph style={{ color: 'white', margin: 0, fontSize: 16 }}>
                    Типичные проблемы:
                  </Paragraph>
                  <Card
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      borderLeft: '4px solid white',
                    }}
                  >
                    <Text strong style={{ color: 'white', fontSize: 18 }}>
                      Сайты-визитки без полезной информации
                    </Text>
                  </Card>
                  <ul style={{ margin: 0, paddingLeft: 20, color: 'white' }}>
                    <li>
                      <Text style={{ color: 'white' }}>❌ Устаревший дизайн и структура</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>❌ Минимум информации о продуктах</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>❌ Нет интерактивных элементов</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>❌ Плохая мобильная адаптация</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>❌ Нужно звонить для получения информации</Text>
                    </li>
                  </ul>
                </Space>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                size="small"
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  border: 'none',
                }}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>
                    Лендинг AS-LED
                  </Title>
                  <Paragraph style={{ color: 'white', margin: 0, fontSize: 16 }}>
                    Наши преимущества:
                  </Paragraph>
                  <Card
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      borderLeft: '4px solid white',
                    }}
                  >
                    <Text strong style={{ color: 'white', fontSize: 18 }}>
                      Современный лендинг с полной информацией
                    </Text>
                  </Card>
                  <ul style={{ margin: 0, paddingLeft: 20, color: 'white' }}>
                    <li>
                      <Text style={{ color: 'white' }}>✅ Современный UX/UI дизайн</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>✅ Детальная информация о продуктах</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>✅ Калькуляторы, формы, онлайн-чат</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>✅ Отличная мобильная адаптация</Text>
                    </li>
                    <li>
                      <Text style={{ color: 'white' }}>✅ Вся информация доступна онлайн</Text>
                    </li>
                  </ul>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card style={{ background: '#f6f9fc' }}>
          <Space direction="vertical" align="center" style={{ width: '100%' }}>
            <Title level={3} style={{ margin: 0 }}>
              Качество лендинга = качество компании
            </Title>
            <Paragraph style={{ fontSize: 18, textAlign: 'center', maxWidth: 800, margin: '16px 0 0 0' }}>
              Современный лендинг показывает, что компания идет в ногу со временем. Клиенты доверяют компаниям с
              профессиональным веб-сайтом и получают информацию быстрее.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    ),
  },

  // 12. DELETED


  // 13. Demo Slide
  {
    id: 'demo',
    header: 'Попробуйте прямо сейчас',
    content: (
      <DemoSlide
        image={
          <div
            style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            AS-LED Platform Demo
          </div>
        }
        demoUrl="https://as-led-poc-qc2d.vercel.app/"
        buttonText="Открыть демо"
        presentationSlug="as-led"
        wrapInCard
      />
    ),
  },

  // 14. Pricing Section
  {
    id: 'pricing-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Стоимость лендинга"
        subtitle="Три варианта на выбор в зависимости от ваших потребностей"
        imageIndex={3}
      />
    ),
  },

  // 15. Pricing Options
  {
    id: 'pricing',
    header: 'Тарифные планы',
    content: (
      <FeaturesSlide
        columns={3}
        animated
        cards={[
          {
            title: 'Basic',
            subtitle: '100 000 ₽',
            emoji: 'lightbulb',
            iconColor: 'blue',
            items: [
              '✅ Современный дизайн',
              '✅ Адаптивная верстка',
              '✅ Базовые разделы (о компании, продукция, контакты)',
              '✅ Форма обратной связи',
              '✅ Интеграция с соцсетями',
              '✅ SEO-оптимизация (базовая)',
              '✅ Хостинг на 1 год',
            ],
            footer: (
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #f0f0f0', textAlign: 'center' }}>
                <Text strong style={{ fontSize: 16, color: '#1890ff' }}>
                  Подходит для старта
                </Text>
              </div>
            ),
          },
          {
            title: 'Advanced',
            subtitle: '150 000 - 200 000 ₽',
            emoji: 'rocket',
            iconColor: 'purple',
            items: [
              '✅ Всё из Basic +',
              '✅ Расширенные разделы (портфолио, кейсы, блог)',
              '✅ Калькулятор стоимости',
              '✅ Онлайн-чат',
              '✅ Интеграция с CRM',
              '✅ Расширенная аналитика',
              '✅ SEO-оптимизация (продвинутая)',
              '✅ Email-рассылка',
            ],
            footer: (
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #f0f0f0', textAlign: 'center' }}>
                <Text strong style={{ fontSize: 16, color: '#722ed1' }}>
                  Рекомендуем
                </Text>
              </div>
            ),
          },
          {
            title: 'Pro',
            subtitle: 'от 200 000 ₽',
            emoji: 'star',
            iconColor: 'gold',
            items: [
              '✅ Всё из Advanced +',
              '✅ Индивидуальный дизайн',
              '✅ Сложные интеграции (API)',
              '✅ Личный кабинет клиента',
              '✅ Многоязычность',
              '✅ A/B тестирование',
              '✅ Приоритетная поддержка',
              '✅ Обучение команды',
              '✅ Дополнительные функции под заказ',
            ],
            footer: (
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #f0f0f0', textAlign: 'center' }}>
                <Text strong style={{ fontSize: 16, color: '#faad14' }}>
                  Максимум возможностей
                </Text>
              </div>
            ),
          },
        ]}
      />
    ),
  },

  // 16. Contacts
  {
    id: 'contacts',
    header: 'Контакты',
    content: <ContactsSlide contacts={['Pasha', 'Artem']} />,
  },
];
