import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Table,
} from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  DollarOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { brausCreatedAt } from './braus.meta';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import brausLogo from './braus-logo.png';

const { Title, Paragraph, Text, Link } = Typography;

export const brausSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="BRAUS"
        subtitle="Новое видение сайта"
        description="Три варианта обновления сайта BRAUS."
        logo={brausLogo}
        logoAlt="BRAUS"
        logoMaxWidth={320}
        createdAt={brausCreatedAt}
      />
    ),
  },
  {
    id: 'about-proxima-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="О Proxima"
        subtitle="Кто мы и почему можем быть полезны BRAUS"
        imageIndex={1}
        imageAlt="Proxima"
      />
    ),
  },
  {
    id: 'about-proxima',
    header: 'Proxima',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Кто мы и почему можем быть полезны BRAUS
          </Title>
          <Paragraph style={{ fontSize: 16, lineHeight: 1.7 }}>
            Proxima — команда с фокусом на e‑commerce и B2B‑решения. Мы помогаем
            компаниям превращать сайт из «визитки» в работающий инструмент
            продаж и маркетинга.
          </Paragraph>
          <List
            dataSource={[
              '15+ лет в веб‑разработке',
              '50+ реализованных e‑commerce проектов',
              'Фокус на производительности и мобильном опыте',
              'Опыт интеграций: CRM, платежи, аналитика, маркетинг',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
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
  {
    id: 'about-braus',
    header: 'О BRAUS — что мы знаем',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Исходная информация о BRAUS
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <List
                header={<Text strong>Ключевые факты</Text>}
                dataSource={[
                  'Сегмент: Обувная косметика, стельки и аксессуары',
                  'Текущий статус: Работающий сайт zakaz-braus.ru',
                  'Бизнес‑модель: E‑commerce, прямая продажа потребителям',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>Основная проблема</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Есть функционирующий сайт, но BRAUS хочет обновления и «новое
                  видение» — по UX, скорости, мобильности и возможностям
                  маркетинга.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'current-site-analysis',
    header: 'Анализ текущего сайта BRAUS',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Сильные стороны
              </Title>
              <List
                dataSource={[
                  'Функционирующая платформа',
                  'Установленная клиентская база',
                  'Каталог товаров и система распродаж',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
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
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Возможности для улучшения
              </Title>
              <List
                dataSource={[
                  'Конверсия корзины и пользовательский опыт',
                  'Мобильная оптимизация',
                  'Скорость загрузки страниц',
                  'SEO и видимость в поиске',
                  'Интеграция аналитики и персонализации',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <WarningOutlined
                      style={{ color: '#faad14', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'variant-1-intro',
    header: 'Вариант 1: Clean Code Solution',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Вариант 1: Clean Code Solution
          </Title>
          <Paragraph style={{ fontSize: 16 }}>
            Полная переразработка сайта с нуля на современном стеке с упором на
            чистую архитектуру, производительность и масштабируемость.
          </Paragraph>
          <List
            dataSource={[
              'Полная переразработка с нуля на современном стеке',
              'Чистая архитектура и лучшие практики разработки',
              'Максимальная производительность и масштабируемость',
              'Полная гибкость в функциональности и интеграциях',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
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
  {
    id: 'variant-1-tech-result',
    header: 'Вариант 1: Технологии и результат',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                Технологический стек
              </Title>
              <Paragraph style={{ marginBottom: 4 }}>
                <Text strong>Frontend:</Text> React + TypeScript + Next.js
              </Paragraph>
              <Paragraph style={{ marginBottom: 4 }}>
                <Text strong>Backend:</Text> Node.js + NestJS
              </Paragraph>
              <Paragraph style={{ marginBottom: 4 }}>
                <Text strong>Database:</Text> PostgreSQL
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Text strong>Hosting:</Text> Google Cloud / AWS
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Что получает BRAUS
              </Title>
              <List
                dataSource={[
                  'Скорость загрузки &lt; 1.5 секунды',
                  'Идеальный мобильный UX',
                  'Готовность к масштабированию и высоким нагрузкам',
                  '100% кастомизация под бизнес BRAUS',
                  'Интеграции с CRM, аналитикой и маркетинг‑инструментами',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <RocketOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'variant-1-timeline-cost',
    header: 'Вариант 1: Сроки и инвестиции',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                Таймлайн
              </Title>
              <List
                dataSource={[
                  'Проектирование & UX/UI: 3–4 недели',
                  'Разработка: 8–10 недель',
                  'Тестирование & Launch: 2 недели',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Text strong>Итого: 13–16 недель</Text>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Инвестиции
              </Title>
              <List
                dataSource={[
                  'Разработка: 800 000 – 1 200 000 ₽',
                  'Дизайн: 150 000 – 250 000 ₽',
                  'Deployment & поддержка (3 месяца): 100 000 ₽',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <DollarOutlined
                      style={{ color: '#faad14', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Text strong>Итого: ~1 100 000 – 1 550 000 ₽</Text>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'variant-2-intro',
    header: 'Вариант 2: Template‑Based Solution',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Вариант 2: Template‑Based Solution
          </Title>
          <Paragraph style={{ fontSize: 16 }}>
            Шаблонное решение на основе готовой платформы (например,
            1C‑Битрикс), с быстрым запуском и оптимальным соотношением
            цена/качество.
          </Paragraph>
          <List
            dataSource={[
              'Использование готового шаблона (1С‑Битрикс, Opencart или аналог)',
              'Проверенная временем функциональность',
              'Быстрое внедрение и понятный стек поддержки',
              'Хороший баланс между ценой и качеством',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
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
  {
    id: 'variant-2-tech-result',
    header: 'Вариант 2: Платформа и результат',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                Платформа
              </Title>
              <Paragraph style={{ marginBottom: 4 }}>
                <Text strong>Платформа:</Text> 1С‑Битрикс (рекомендуем) или
                Opencart
              </Paragraph>
              <Paragraph style={{ marginBottom: 4 }}>
                <Text strong>Дизайн:</Text> Кастомизация готового шаблона
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                <Text strong>Интеграции:</Text> Подключаемые модули и плагины
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Что получает BRAUS
              </Title>
              <List
                dataSource={[
                  'Скорость загрузки ~2–2.5 секунды',
                  'Хорошая мобильная адаптация',
                  'Лёгкое расширение функциональности за счёт модулей',
                  'Экономия в 3–4 раза относительно полностью кастомной разработки',
                  'Поддержка платформы + возможность поддержки с нашей стороны',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <RocketOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'variant-2-timeline-cost',
    header: 'Вариант 2: Сроки и инвестиции',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                Таймлайн
              </Title>
              <List
                dataSource={[
                  'Выбор платформы и базовая настройка: 1–2 недели',
                  'Дизайн и адаптация шаблона: 2–3 недели',
                  'Наполнение контентом: 1–2 недели',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Text strong>Итого: 4–7 недель</Text>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Инвестиции
              </Title>
              <List
                dataSource={[
                  'Лицензия шаблона: 60 000 – 150 000 ₽',
                  'Настройка и адаптация: 50 000 – 100 000 ₽',
                  'Миграция данных: 30 000 – 50 000 ₽',
                  'Наполнение контентом: 50 000 – 80 000 ₽',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <DollarOutlined
                      style={{ color: '#faad14', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Text strong>Итого: ~200 000 – 380 000 ₽</Text>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'variant-3-intro',
    header: 'Вариант 3: Custom Template Solution',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Вариант 3: Custom Template Solution
          </Title>
          <Paragraph style={{ fontSize: 16 }}>
            Гибридный подход: используем надёжную платформу, но создаём
            уникальный шаблон и архитектуру под задачи BRAUS.
          </Paragraph>
          <List
            dataSource={[
              'Гибрид: опора на платформу, но с собственным шаблоном',
              'Уникальный дизайн с сохранением проверенной функциональности',
              'Средний баланс между сложностью и инвестициями',
              'Возможность дальнейшей переразработки и масштабирования',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
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
  {
    id: 'variant-3-tech-result',
    header: 'Вариант 3: Технологии и результат',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                Технологический подход
              </Title>
              <List
                dataSource={[
                  'Основа: 1С‑Битрикс + кастомные модули',
                  'Альтернатива: React‑based e‑commerce (по типу Shopify)',
                  'Дизайн: собственный уникальный шаблон',
                  'Интеграции: кастомная архитектура под задачи BRAUS',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Что получает BRAUS
              </Title>
              <List
                dataSource={[
                  'Скорость загрузки ~1.5–2 секунды',
                  'Premium Mobile UX',
                  'Уникальный дизайн и визуальное отличие от конкурентов',
                  'Хорошая масштабируемость на базе надёжной платформы',
                  'Сочетание надёжности платформы и гибкости кастомной разработки',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <RocketOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'variant-3-timeline-cost',
    header: 'Вариант 3: Сроки и инвестиции',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                Таймлайн
              </Title>
              <List
                dataSource={[
                  'UX/UI дизайн: 2–3 недели',
                  'Разработка кастомного модуля / шаблона: 4–6 недель',
                  'Интеграция и адаптация: 2–3 недели',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Text strong>Итого: 8–12 недель</Text>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Инвестиции
              </Title>
              <List
                dataSource={[
                  'Дизайн & UX/UI: 100 000 – 200 000 ₽',
                  'Кастомная разработка: 300 000 – 500 000 ₽',
                  'Интеграции и оптимизация: 80 000 – 150 000 ₽',
                  'Наполнение контентом: 50 000 – 80 000 ₽',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <DollarOutlined
                      style={{ color: '#faad14', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Text strong>Итого: ~530 000 – 930 000 ₽</Text>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'comparison-table',
    header: 'Сравнение трёх вариантов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Сравнительная таблица
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                parameter: 'Срок',
                v1: '13–16 недель',
                v2: '4–7 недель',
                v3: '8–12 недель',
              },
              {
                key: '2',
                parameter: 'Стоимость',
                v1: '1.1–1.5M ₽',
                v2: '200–380K ₽',
                v3: '530–930K ₽',
              },
              {
                key: '3',
                parameter: 'Уникальность',
                v1: '100%',
                v2: '30%',
                v3: '70%',
              },
              {
                key: '4',
                parameter: 'Масштабируемость',
                v1: 'Отличная',
                v2: 'Хорошая',
                v3: 'Хорошая',
              },
              {
                key: '5',
                parameter: 'Скорость',
                v1: 'Максимальная',
                v2: 'Хорошая',
                v3: 'Очень хорошая',
              },
              {
                key: '6',
                parameter: 'Поддержка',
                v1: 'Наша компания',
                v2: 'Платформа + мы',
                v3: 'Платформа + мы',
              },
              {
                key: '7',
                parameter: 'Риск',
                v1: 'Минимальный',
                v2: 'Минимальный',
                v3: 'Низкий',
              },
              {
                key: '8',
                parameter: 'ROI',
                v1: 'Долгосрочный',
                v2: 'Быстрый',
                v3: 'Средний',
              },
            ]}
            columns={[
              {
                title: 'Параметр',
                dataIndex: 'parameter',
                key: 'parameter',
                width: '28%',
              },
              {
                title: 'Вариант 1 (Clean Code)',
                dataIndex: 'v1',
                key: 'v1',
                width: '24%',
              },
              {
                title: 'Вариант 2 (Template)',
                dataIndex: 'v2',
                key: 'v2',
                width: '24%',
              },
              {
                title: 'Вариант 3 (Custom)',
                dataIndex: 'v3',
                key: 'v3',
                width: '24%',
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'always-included',
    header: 'Что входит в каждый вариант',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Всегда включено
              </Title>
              <List
                dataSource={[
                  'UX/UI дизайн (или адаптация)',
                  'Интеграция каталога товаров',
                  'Корзина и оформление заказа',
                  'Платежные шлюзы (Яндекс.Касса, Сбербанк)',
                  'Email‑уведомления',
                  'Google Analytics и Яндекс.Метрика',
                  'SSL‑сертификат',
                  'Базовая оптимизация производительности',
                  'Миграция текущих товаров (если возможно)',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
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
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                По отдельному согласованию
              </Title>
              <List
                dataSource={[
                  'CRM‑система',
                  'Мобильное приложение',
                  'Видео‑каталог',
                  'Расширенная SEO‑оптимизация',
                  'Email‑маркетинг и автоматизация',
                  'BI и продвинутая аналитика',
                  'A/B‑тестирование',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <WarningOutlined
                      style={{ color: '#faad14', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'recommendation',
    header: 'Рекомендация: Вариант 3 (Custom Template)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card
          style={{
            background:
              'linear-gradient(135deg, #237804 0%, #52c41a 40%, #95de64 100%)',
            color: 'white',
          }}
        >
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <Title
              level={3}
              style={{ marginTop: 0, marginBottom: 8, color: 'white' }}
            >
              Рекомендуем Вариант 3 (Custom Template Solution)
            </Title>
            <Tag
              color="gold"
              style={{
                alignSelf: 'center',
                fontSize: 14,
                padding: '4px 14px',
                fontWeight: 600,
              }}
            >
              Оптимальное соотношение цена / результат
            </Tag>
          </Space>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Почему именно Вариант 3
          </Title>
          <List
            dataSource={[
              'У BRAUS уже есть работающий сайт — можно опираться на существующую базу и не «ломать всё до основания».',
              'Нужно «новое видение», но без экстремального бюджета уровня полного переписывания.',
              'Срок 8–12 недель комфортнее, чем 13–16 недель для полного кастома.',
              'Стоимость 530–930K ₽ ощутимо ниже, чем 1M+ ₽ для полноценного Clean Code, при этом сохраняется уникальный дизайн.',
              'Под капотом — надёжная платформа, которую можно развивать и масштабировать в будущем.',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '6px 0' }}>
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
  {
    id: 'next-steps',
    header: 'Следующие шаги',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Как мы можем двигаться дальше
          </Title>
          <List
            dataSource={[
              'Детальный аудит текущего сайта (1–2 недели)',
              'Подготовка UX/UI‑концепции нового дизайна (1–2 недели) с презентацией',
              'Согласование объёма работ и окончательного таймлайна',
              'Старт разработки выбранного варианта',
            ]}
            renderItem={(item, index) => (
              <List.Item style={{ padding: '6px 0' }}>
                <Tag color="blue" style={{ marginRight: 8 }}>
                  Шаг {index + 1}
                </Tag>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Контакты Proxima',
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          padding: '8px 0',
        }}
      >
        <Card style={{ maxWidth: 800, width: '100%' }}>
          <Space orientation="vertical" size="small" style={{ width: '100%' }}>
            <Title
              level={3}
              style={{ textAlign: 'center', marginTop: 0, marginBottom: 8 }}
            >
              Свяжитесь с нами, чтобы обсудить проект BRAUS
            </Title>
            <Divider style={{ margin: '8px 0' }} />
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                  <UserOutlined style={{ marginRight: 8 }} />
                  Proxima
                </Title>
                <Text type="secondary" style={{ fontSize: 13 }}>
                  Команда по разработке e‑commerce решений
                </Text>
                <Divider style={{ margin: '8px 0' }} />
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Space size="small">
                    <MailOutlined
                      style={{
                        fontSize: 16,
                        color: 'var(--app-color-primary)',
                      }}
                    />
                    <Link
                      href="mailto:hello@proxima.ru"
                      style={{ fontSize: 15 }}
                    >
                      hello@proxima.ru
                    </Link>
                  </Space>
                  <Space size="small">
                    <PhoneOutlined
                      style={{
                        fontSize: 16,
                        color: 'var(--app-color-primary)',
                      }}
                    />
                    <Text style={{ fontSize: 15 }}>+7 (XXX) XXX‑XX‑XX</Text>
                  </Space>
                  <Space size="small">
                    <GlobalOutlined
                      style={{
                        fontSize: 16,
                        color: 'var(--app-color-primary)',
                      }}
                    />
                    <Link
                      href="https://proxima.ru"
                      target="_blank"
                      style={{ fontSize: 15 }}
                    >
                      proxima.ru
                    </Link>
                  </Space>
                </Space>
              </Space>
            </Card>
          </Space>
        </Card>
      </Space>
    ),
  },
];
