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
  Button,
} from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { brausCreatedAt } from './braus.meta';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { useTelegramNotification } from '~shared/lib/telegram/use-telegram-notification';
import brausLogo from './braus-logo.png';
import exampleImage from './example.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Button component that sends Telegram notification when clicked
 */
function DemoButtonWithNotification() {
  const { send } = useTelegramNotification({ silent: true });

  const handleClick = async () => {
    await send({
      page: '/slides/braus - Кнопка "Открыть демо-версию" нажата',
      fullUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      timestamp: new Date().toISOString(),
      userAgent:
        typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      referer: typeof document !== 'undefined' ? document.referrer : undefined,
    });
  };

  return (
    <Button
      type="primary"
      size="large"
      icon={<GlobalOutlined />}
      href="https://braus-poc.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        height: 48,
        fontSize: 16,
        fontWeight: 600,
        padding: '0 32px',
      }}
    >
      Открыть демо-версию
    </Button>
  );
}

export const brausSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title=""
        description=""
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
        imageIndex={3}
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
    id: 'about-braus-title',
    header: undefined,
    content: (
      <SectionTitleSlide title="О BRAUS" imageIndex={0} imageAlt="BRAUS" />
    ),
  },
  {
    id: 'about-braus',
    header: 'О BRAUS',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Paragraph style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 0 }}>
            Перед подготовкой предложения мы изучили ваш бизнес и текущий сайт{' '}
            <Link
              href="https://zakaz-braus.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text strong>zakaz-braus.ru</Text>
            </Link>
            . Мы понимаем вашу специфику и видим возможности для развития.
          </Paragraph>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                Ваш бизнес
              </Title>
              <List
                dataSource={[
                  'Сегмент: Обувная косметика, стельки и аксессуары',
                  'Работающий сайт с установленной клиентской базой',
                  'E‑commerce модель: прямая продажа потребителям',
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
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Ваша цель
              </Title>
              <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                Вы хотите обновить сайт и получить «новое видение» — улучшить
                пользовательский опыт, скорость работы, мобильную версию и
                возможности для маркетинга.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
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
    id: 'solutions-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Варианты решений"
        subtitle="Три подхода к обновлению сайта BRAUS с разным уровнем гибкости, сроками и инвестициями"
        imageIndex={4}
        imageAlt="Варианты решений"
      />
    ),
  },
  {
    id: 'all-variants',
    header: 'Три варианта решений',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          {/* Вариант 1 */}
          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Space style={{ marginBottom: 8 }}>
                <Title level={4} style={{ marginTop: 0, marginBottom: 0 }}>
                  Вариант 1: С нуля
                </Title>
                <Tag color="green" style={{ fontSize: 12 }}>
                  Рекомендуем
                </Tag>
              </Space>
              <Paragraph style={{ fontSize: 14, marginBottom: 12 }}>
                Полная переразработка с нуля на современном стеке
              </Paragraph>
              <Divider style={{ margin: '8px 0' }} />
              <Title level={5} style={{ marginTop: 0, fontSize: 13 }}>
                Технологии
              </Title>
              <List
                size="small"
                dataSource={[
                  'Фронтенд: React, Next.js',
                  'Бэкенд: Node.js, NestJS',
                  'База данных: PostgreSQL',
                  'Облачные сервисы',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: 12 }}>• {item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Title level={5} style={{ marginTop: 0, fontSize: 13 }}>
                Результат
              </Title>
              <List
                size="small"
                dataSource={[
                  'Скорость < 1.5 сек',
                  'Идеальный мобильный интерфейс',
                  '100% настройка под задачи',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <RocketOutlined
                      style={{ color: '#52c41a', marginRight: 4, fontSize: 12 }}
                    />
                    <Text style={{ fontSize: 12 }}>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Space direction="vertical" size={4} style={{ width: '100%' }}>
                <Text style={{ fontSize: 12 }}>
                  <Text strong>Срок:</Text> 3–4 недели
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text strong>Стоимость:</Text> от 150 000 ₽
                </Text>
                <Text style={{ fontSize: 11, color: '#8c8c8c' }}>
                  после согласования требований
                </Text>
              </Space>
            </Card>
          </Col>
          {/* Вариант 2 */}
          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Title level={4} style={{ marginTop: 0 }}>
                Вариант 2: Шаблон
              </Title>
              <Paragraph style={{ fontSize: 14, marginBottom: 12 }}>
                Шаблонное решение на готовой платформе
              </Paragraph>
              <Divider style={{ margin: '8px 0' }} />
              <Title level={5} style={{ marginTop: 0, fontSize: 13 }}>
                Платформа
              </Title>
              <List
                size="small"
                dataSource={[
                  '1С‑Битрикс',
                  'Готовый шаблон',
                  'Модули и плагины',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: 12 }}>• {item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Title level={5} style={{ marginTop: 0, fontSize: 13 }}>
                Результат
              </Title>
              <List
                size="small"
                dataSource={[
                  'Скорость ~2–2.5 сек',
                  'Хорошая мобильная версия',
                  'Экономия в 3–4 раза',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <RocketOutlined
                      style={{ color: '#52c41a', marginRight: 4, fontSize: 12 }}
                    />
                    <Text style={{ fontSize: 12 }}>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Space direction="vertical" size={4} style={{ width: '100%' }}>
                <Text style={{ fontSize: 12 }}>
                  <Text strong>Срок:</Text> 2–3 недели
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text strong>Стоимость:</Text> от 200 000 ₽
                </Text>
                <Text style={{ fontSize: 11, color: '#8c8c8c' }}>
                  без учета лицензий, после согласования требований
                </Text>
              </Space>
            </Card>
          </Col>
          {/* Вариант 3 */}
          <Col xs={24} md={8}>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Title level={4} style={{ marginTop: 0 }}>
                Вариант 3: Уникальный шаблон
              </Title>
              <Paragraph style={{ fontSize: 14, marginBottom: 12 }}>
                Гибрид: платформа + уникальный шаблон
              </Paragraph>
              <Divider style={{ margin: '8px 0' }} />
              <Title level={5} style={{ marginTop: 0, fontSize: 13 }}>
                Технологии
              </Title>
              <List
                size="small"
                dataSource={[
                  '1С‑Битрикс + дополнительная разработка',
                  'Уникальный шаблон',
                  'Индивидуальная архитектура',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: 12 }}>• {item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Title level={5} style={{ marginTop: 0, fontSize: 13 }}>
                Результат
              </Title>
              <List
                size="small"
                dataSource={[
                  'Скорость ~1.5–2 сек',
                  'Высококачественный мобильный интерфейс',
                  'Уникальный дизайн',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <RocketOutlined
                      style={{ color: '#52c41a', marginRight: 4, fontSize: 12 }}
                    />
                    <Text style={{ fontSize: 12 }}>{item}</Text>
                  </List.Item>
                )}
              />
              <Divider style={{ margin: '8px 0' }} />
              <Space direction="vertical" size={4} style={{ width: '100%' }}>
                <Text style={{ fontSize: 12 }}>
                  <Text strong>Срок:</Text> 4–5 недель
                </Text>
                <Text style={{ fontSize: 12 }}>
                  <Text strong>Стоимость:</Text> от 350 000 ₽
                </Text>
                <Text style={{ fontSize: 11, color: '#8c8c8c' }}>
                  без учета лицензий, после согласования требований
                </Text>
              </Space>
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
                v1: '3–4 недели',
                v2: '2–3 недели',
                v3: '4–5 недель',
              },
              {
                key: '2',
                parameter: 'Стоимость',
                v1: 'от 150K ₽',
                v2: 'от 200K ₽ (без лицензий)',
                v3: 'от 350K ₽ (без лицензий)',
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
            ]}
            columns={[
              {
                title: 'Параметр',
                dataIndex: 'parameter',
                key: 'parameter',
                width: '28%',
              },
              {
                title: 'Вариант 1 (С нуля)',
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
    id: 'recommendation-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Рекомендация"
        subtitle="Наше предложение для BRAUS"
        imageIndex={5}
        imageAlt="Рекомендация"
      />
    ),
  },
  {
    id: 'recommendation',
    header: 'Рекомендация: Вариант 1 (С нуля)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Мы уже подготовили видение реализации
          </Title>
          <Paragraph style={{ fontSize: 16, marginBottom: 16 }}>
            Мы проработали концепцию нового сайта BRAUS и готовы показать вам
            наше видение того, как может выглядеть обновленный сайт.
          </Paragraph>
          <Card
            style={{
              backgroundColor: '#e6f7ff',
              border: '2px solid #1890ff',
              marginBottom: 16,
            }}
          >
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <Text strong style={{ fontSize: 16, display: 'block' }}>
                Посмотрите пример реализации
              </Text>
              <DemoButtonWithNotification />
              <Text type="secondary" style={{ fontSize: 12, display: 'block' }}>
                https://braus-poc.vercel.app/
              </Text>
            </Space>
          </Card>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <img
                src={exampleImage}
                alt="Пример реализации сайта BRAUS"
                style={{
                  width: '100%',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              />
            </Col>
            <Col xs={24} md={12}>
              <Title level={4} style={{ marginTop: 0 }}>
                Почему именно Вариант 1
              </Title>
              <List
                dataSource={[
                  'Современный стек технологий обеспечивает высокую производительность и скорость загрузки.',
                  'Срок 3–4 недели позволяет быстро получить результат без долгого ожидания.',
                  'Стоимость от 150K ₽ после согласования требований — оптимальное соотношение цена/качество.',
                  'Полная кастомизация под задачи BRAUS с возможностью дальнейшего развития.',
                  'Мы уже показали наше видение — можно сразу приступать к реализации.',
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
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'next-steps-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Следующие шаги"
        subtitle="Как мы двигаемся дальше"
        imageIndex={6}
        imageAlt="Следующие шаги"
      />
    ),
  },
  {
    id: 'next-steps',
    header: 'Следующие шаги',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            Как мы двигаемся дальше
          </Title>
          <List
            dataSource={[
              'Согласуем подход к реализации и выбранный вариант решения',
              'Выясняем все требования и анализируем текущую инфраструктуру (что уже есть и что нужно учесть)',
              'Подготавливаем точное коммерческое предложение с финальными сроками и стоимостью',
              'Заключаем договор и согласовываем детали сотрудничества',
              'Приступаем к разработке и реализации проекта',
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
    content: <ContactsSlide contacts={['Pasha', 'Artem']} />,
  },
];
