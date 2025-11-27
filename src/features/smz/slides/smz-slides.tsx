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
  Descriptions,
} from 'antd';
import {
  UserOutlined,
  DollarOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
  ShopOutlined,
  CloseOutlined,
  SafetyOutlined,
  WarningTwoTone,
  ApiOutlined,
  CodeOutlined,
  BuildOutlined,
  TrophyOutlined,
  CreditCardOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for SMZ (Сиверский Метизный Завод) presentation
 * Based on documentation in features/smz/docs
 */
export const smzSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Space
          orientation="vertical"
          size="middle"
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <Title
            level={1}
            style={{
              fontSize: '48px',
              fontWeight: 700,
              background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--app-spacing-md)',
            }}
          >
            СИВЕРСКИЙ МЕТИЗНЫЙ ЗАВОД
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Производство и продажа фитингов для водоснабжения
          </Paragraph>
          <Link
            href="https://smz-spb.ru"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--app-font-size-lg)',
              fontWeight: 600,
            }}
          >
            smz-spb.ru
          </Link>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          27.11.2025
        </Text>
      </Space>
    ),
  },
  {
    id: 'company-info',
    header: 'Основная информация о компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Базовые реквизиты
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Официальное название">
              ООО «Сиверский Метизный Завод»
            </Descriptions.Item>
            <Descriptions.Item label="ИНН">4719018854</Descriptions.Item>
            <Descriptions.Item label="КПП">470501001</Descriptions.Item>
            <Descriptions.Item label="ОГРН">1024702083779</Descriptions.Item>
            <Descriptions.Item label="Дата регистрации">
              25 февраля 2000 года
            </Descriptions.Item>
            <Descriptions.Item label="Адрес">
              Ленинградская область, Гатчинский муниципальный район, городской
              поселок Сиверский, улица Заводская, дом 9, 188330
            </Descriptions.Item>
            <Descriptions.Item label="Телефон">
              <Link href="tel:+79214207794">+7 (921) 420-77-94</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              <Link href="mailto:3@smz-spb.ru">3@smz-spb.ru</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Веб-сайт">
              <Link href="https://smz-spb.ru" target="_blank">
                https://smz-spb.ru
              </Link>
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Контактное лицо
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="ФИО">
              <Text strong>Екатерина</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Должность">Менеджер</Descriptions.Item>
            <Descriptions.Item label="Город">Санкт-Петербург</Descriptions.Item>
            <Descriptions.Item label="Генеральный директор">
              Мина Юрий Андреевич
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'financials',
    header: 'Финансовые показатели',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Основные показатели (2023–2024)
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                indicator: 'Выручка',
                value2023: '1 183 268 000 ₽',
                value2024: '1 170 399 000 ₽',
                dynamics: '-1,1%',
                status: 'error',
              },
              {
                key: '2',
                indicator: 'Прибыль (чистая)',
                value2023: '234 565 000 ₽',
                value2024: '183 443 000 ₽',
                dynamics: '-21,8%',
                status: 'error',
              },
              {
                key: '3',
                indicator: 'Рентабельность',
                value2023: '19,8%',
                value2024: '15,7%',
                dynamics: 'Снижение',
                status: 'error',
              },
              {
                key: '4',
                indicator: 'Численность сотрудников',
                value2023: '92',
                value2024: '92',
                dynamics: 'Стабильно',
                status: 'default',
              },
            ]}
            columns={[
              {
                title: 'Показатель',
                dataIndex: 'indicator',
                key: 'indicator',
              },
              {
                title: '2023',
                dataIndex: 'value2023',
                key: 'value2023',
                align: 'right',
                render: value => <Text>{value}</Text>,
              },
              {
                title: '2024',
                dataIndex: 'value2024',
                key: 'value2024',
                align: 'right',
                render: value => <Text strong>{value}</Text>,
              },
              {
                title: 'Динамика',
                dataIndex: 'dynamics',
                key: 'dynamics',
                align: 'center',
                render: (dynamics, record) => (
                  <Tag color={record.status}>{dynamics}</Tag>
                ),
              },
            ]}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                Проблемы
              </Title>
              <List
                size="small"
                dataSource={[
                  'Снижение прибыли на 21,8%',
                  'Падение рентабельности',
                  'Низкий рейтинг: 2,1 ⭐ на Яндекс.Картах',
                  'Проблемы с качеством продукции',
                ]}
                renderItem={item => (
                  <List.Item
                    style={{ padding: '4px 0', justifyContent: 'flex-start' }}
                  >
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Позитивные сигналы
              </Title>
              <List
                size="small"
                dataSource={[
                  'Стабильная выручка ~1,2 млрд ₽',
                  '25+ лет на рынке',
                  'Широкий ассортимент продукции',
                  'Выручка на сотрудника: ~13 млн ₽/год',
                ]}
                renderItem={item => (
                  <List.Item
                    style={{ padding: '4px 0', justifyContent: 'flex-start' }}
                  >
                    <Text>• {item}</Text>
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
    id: 'business-areas',
    header: 'Сфера деятельности и продукция',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Основной вид деятельности
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="ОКВЭД">
              24.34 — Производство проволоки методом холодного волочения
            </Descriptions.Item>
            <Descriptions.Item label="Специализация">
              Производство и торговля металлоизделиями с акцентом на фитинги для
              водоснабжения, проволоку, сетки и крепеж
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Основная продукция
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Проволока</Text>
                <div style={{ marginTop: 8, fontSize: '12px' }}>
                  <div>• Вязальная (ГОСТ 3282-74)</div>
                  <div>• Сварочная (СВ08Г2С)</div>
                  <div>• Омедненная, фехраль</div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Фитинги и трубопровод</Text>
                <div style={{ marginTop: 8, fontSize: '12px' }}>
                  <div>• Фитинги ПЭ-100 литые</div>
                  <div>• Отводы, тройники, заглушки</div>
                  <div>• Фланцы, задвижки, вентили</div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Сетки</Text>
                <div style={{ marginTop: 8, fontSize: '12px' }}>
                  <div>• Сварная арматурная</div>
                  <div>• Рабица, тканая</div>
                  <div>• Штукатурная сварная</div>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Крепеж</Text>
                <div style={{ marginTop: 8, fontSize: '12px' }}>
                  <div>• Болты, гайки, шайбы</div>
                  <div>• Гвозди, саморезы</div>
                  <div>• Шпильки</div>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Ключевое достижение
          </Title>
          <Paragraph>
            Завод производит фитинги больших диаметров (75–400 мм), которые{' '}
            <Text strong>ранее импортировались из Европы и Китая</Text>. Это
            позволило{' '}
            <Text strong>
              снизить себестоимость на внутреннем рынке более чем в 2 раза
            </Text>
            .
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'history-achievements',
    header: 'История и достижения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />О компании
          </Title>
          <Paragraph>
            <Text strong>Сиверский Метизный Завод</Text> — стабильное
            производство с <Text strong>25-летней историей</Text> (с 2000 года),
            хорошей репутацией и широким ассортиментом. Компания работает с
            крупными системными заказчиками.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Основные достижения
          </Title>
          <List
            size="small"
            dataSource={[
              '2020 год: Награда "Лучшая компания Ленинградской области"',
              'Включение в Федеральный реестр "Всероссийская книга Почета"',
              'Первый производитель фитингов ПЭ-100 больших диаметров (75–400 мм)',
              'Замещение импорта и снижение цен на 50%+',
              'Признание как надежного партнера',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
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
    id: 'pain-points-overview',
    header: 'Критичные проблемы компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningTwoTone twoToneColor="#ff4d4f" style={{ marginRight: 8 }} />
            Выявленные проблемы
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="red">КРИТИЧНО</Tag>
                  <Text strong>Проблема #1: Низкий рейтинг</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    2,1 ⭐ на Яндекс.Картах (41 отзыв)
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="red">КРИТИЧНО</Tag>
                  <Text strong>Проблема #2: Отсутствие онлайн-заказов</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Сайт не автоматизирован
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">ВАЖНО</Tag>
                  <Text strong>Проблема #3: Проблемы с качеством</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Жалобы на несоответствие ГОСТам
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="red">КРИТИЧНО</Tag>
                  <Text strong>Проблема #4: Нет быстрого ответа</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Перегруженность менеджеров
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Финансовое воздействие
          </Title>
          <List
            size="small"
            dataSource={[
              'Снижение прибыли на 21,8% (с 234,5 до 183,4 млн руб.)',
              'Теряет новых клиентов из интернета',
              'Клиенты уходят к конкурентам',
              'Рекламации и возвраты увеличивают расходы',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'reviews-analysis',
    header: 'Анализ отзывов клиентов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Сводная статистика по отзывам
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                platform: 'Яндекс.Карты',
                rating: '2,1 ⭐',
                reviews: 41,
                status: 'error',
              },
              {
                key: '2',
                platform: '2GIS',
                rating: '1,4 ⭐',
                reviews: 1,
                status: 'error',
              },
              {
                key: '3',
                platform: 'Stroyportal.ru',
                rating: '—',
                reviews: 0,
                status: 'default',
              },
            ]}
            columns={[
              {
                title: 'Платформа',
                dataIndex: 'platform',
                key: 'platform',
              },
              {
                title: 'Рейтинг',
                dataIndex: 'rating',
                key: 'rating',
                align: 'center',
                render: (rating, record) => (
                  <Tag color={record.status}>{rating}</Tag>
                ),
              },
              {
                title: 'Отзывов',
                dataIndex: 'reviews',
                key: 'reviews',
                align: 'center',
              },
            ]}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                Основные жалобы
              </Title>
              <List
                size="small"
                dataSource={[
                  'Качество продукции (несоответствие ГОСТам)',
                  'Сроки доставки (задержки с отгрузкой)',
                  'Качество обслуживания (медленные ответы)',
                  'Цены (завышенные по сравнению с конкурентами)',
                  'Состояние товара (ржавчина, дефекты)',
                ]}
                renderItem={item => (
                  <List.Item
                    style={{ padding: '4px 0', justifyContent: 'flex-start' }}
                  >
                    <CloseOutlined
                      style={{ color: '#ff4d4f', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Положительные отзывы
              </Title>
              <List
                size="small"
                dataSource={[
                  'Надежность поставок (работают 10+ лет)',
                  'Хорошие менеджеры (Екатерина, Юрий Борисович)',
                  'Быстрая загрузка',
                  'Хороший ассортимент',
                  'Удобное расположение склада в СПб',
                ]}
                renderItem={item => (
                  <List.Item
                    style={{ padding: '4px 0', justifyContent: 'flex-start' }}
                  >
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
      </Space>
    ),
  },
  {
    id: 'current-needs',
    header: 'Текущие потребности',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Явные потребности (из брифа)
          </Title>
          <List
            size="small"
            dataSource={[
              {
                title: 'Интеграция с 1С:УП 8.3',
                description:
                  'Реальный отпечаток остатков, синхронизация цен и скидок, передача данных заказов',
              },
              {
                title: 'B2B + B2C модель',
                description:
                  'Разные ценовые уровни (розница, опт, дилеры), личные кабинеты с историей',
              },
              {
                title: 'Автоматизация счетов',
                description:
                  'Генерация счета PDF, автоматическая отправка на email',
              },
              {
                title: 'Безопасность 1С',
                description:
                  'Обмен только через защищенный контур, запрет прямого доступа интернета',
              },
              {
                title: 'Удобство поиска',
                description:
                  'Фильтры по характеристикам, поиск по артикулу, отображение остатков',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Text strong>{item.title}</Text>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Критические скрытые потребности (из отзывов)
          </Title>
          <List
            size="small"
            dataSource={[
              'Система контроля качества перед отгрузкой',
              'Ускорение обработки заказов (автоматизация)',
              'Система рекламаций и возвратов',
              'Прозрачность цен (видимость цен заранее)',
              'Система рейтингов и отзывов',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'goal',
    header: 'Главная цель',
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: 'center',
            fontWeight: 400,
            maxWidth: '800px',
            margin: 0,
          }}
        >
          Автоматизация торговли через сайт Bitrix с интеграцией 1С:УП 8.3 и
          формированием счетов для увеличения продаж и улучшения клиентского
          опыта
        </Title>
      </Space>
    ),
  },
  {
    id: 'solution-variants',
    header: 'Варианты реализации решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Вариант А: Разработка нового сайта на Bitrix с нуля
          </Title>
          <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
          <Space orientation="vertical" size="small" style={{ width: '100%' }}>
            <div>
              <Text strong>Сроки:</Text>
              <Paragraph style={{ margin: '4px 0' }}>
                3–6 месяцев до MVP
              </Paragraph>
            </div>
            <div>
              <Text strong>Ключевые преимущества:</Text>
              <List
                size="small"
                dataSource={[
                  'Полный контроль над архитектурой',
                  'Современная структура',
                  'Оптимизация под задачи',
                  'Нет ограничений старого шаблона',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>
                )}
              />
            </div>
          </Space>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Вариант Б: Доработка текущего сайта на Bitrix
          </Title>
          <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
          <Space orientation="vertical" size="small" style={{ width: '100%' }}>
            <div>
              <Text strong>Сроки:</Text>
              <Paragraph style={{ margin: '4px 0' }}>
                1–2 месяца до MVP
              </Paragraph>
            </div>
            <div>
              <Text strong>Ключевые преимущества:</Text>
              <List
                size="small"
                dataSource={[
                  'Быстрее запуск',
                  'Ниже стоимость',
                  'Сохранение текущего дизайна',
                  'Минимальные изменения',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>
                )}
              />
            </div>
          </Space>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Обязательный предварительный этап
          </Title>
          <Paragraph>Исполнитель должен провести:</Paragraph>
          <List
            size="small"
            dataSource={[
              'Аудит текущего шаблона',
              'Проверку совместимости с обменом CommerceML',
              'Оценку скорости и архитектуры',
              'Оценку стоимости адаптации против разработки с нуля',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'solution-overview',
    header: 'Верхнеуровневая архитектура решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Основной функционал
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <GlobalOutlined
                    style={{ marginRight: 'var(--app-spacing-xs)' }}
                  />
                  1. Каталог и поиск
                </Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  Поиск с подсказками, отображение остатков и цен, несколько
                  ценовых уровней, фильтры
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <CreditCardOutlined
                    style={{ marginRight: 'var(--app-spacing-xs)' }}
                  />
                  2. Корзина и заказ
                </Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  Добавление позиций, пересчёт сумм, учёт ценового уровня,
                  автоматическое формирование счёта PDF
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <DatabaseOutlined
                    style={{ marginRight: 'var(--app-spacing-xs)' }}
                  />
                  3. Интеграция с 1С
                </Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  Обмен остатками и ценами, регулярное обновление (5–30 минут),
                  передача счетов обратно в 1С
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <MailOutlined
                    style={{ marginRight: 'var(--app-spacing-xs)' }}
                  />
                  4. Отправка счёта
                </Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  Автоматическая отправка на email клиента, копия менеджеру,
                  сохранение в админке
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <UserOutlined
                    style={{ marginRight: 'var(--app-spacing-xs)' }}
                  />
                  5. Личный кабинет
                </Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  История заказов, повторные заказы, статусы, управление
                  профилем
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <SafetyOutlined
                    style={{ marginRight: 'var(--app-spacing-xs)' }}
                  />
                  6. Безопасность
                </Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  Защищённый контур обмена, HTTPS, токены, логирование,
                  ограничение частоты синхронизации
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'integration-security',
    header: 'Требования к безопасности 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            КРИТИЧЕСКОЕ ТРЕБОВАНИЕ
          </Title>
          <Paragraph style={{ fontSize: '16px', fontStyle: 'italic' }}>
            <Text strong>1С НЕ подключена напрямую к интернету</Text>
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <List
            size="small"
            dataSource={[
              '❌ Запрещено прямое внешнее подключение к базе',
              '❌ Запрещена передача логинов/паролей 1С сторонним системам',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Обмен должен идти через защищённый слой
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Варианты реализации:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Промежуточный сервер-шлюз',
                    'Файловый обмен через защищённый каталог',
                    'API-прослойка с токенами',
                    'Ограничение IP-доступа',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Технические меры:</Text>
                <List
                  size="small"
                  dataSource={[
                    'HTTPS для всех соединений',
                    'Токены/ключи доступа',
                    'Логирование всех запросов',
                    'Ограничение частоты синхронизации',
                    'Возможность экстренного отключения обмена',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
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
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Обязательное требование к исполнителю
          </Title>
          <Paragraph>
            Исполнитель обязан в коммерческом предложении приложить{' '}
            <Text strong>схему безопасности</Text> с описанием архитектуры
            обмена данными.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'integration-options',
    header: 'Варианты интеграции с 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Механизмы обмена данными
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <FileTextOutlined
                    style={{
                      marginRight: 8,
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  CommerceML 2.0
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Стандартный формат обмена',
                    'Поддержка в 1С:УП 8.3',
                    'Обмен каталогом, ценами, остатками',
                    'Файловый обмен через защищённый каталог',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <ApiOutlined
                    style={{
                      marginRight: 8,
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  REST-шлюз
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'REST API для обмена данными',
                    'Промежуточный сервер-шлюз',
                    'Токены доступа',
                    'Реальное время обновления',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <Title level={4} style={{ marginTop: 0 }}>
                  <DatabaseOutlined
                    style={{
                      marginRight: 8,
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  Файловый обмен
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Обмен через защищённый каталог',
                    'Регулярная синхронизация',
                    'Простота реализации',
                    'Высокая безопасность',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Регулярность обновления
          </Title>
          <Paragraph>
            Поддержка регулярного обновления остатков и цен:{' '}
            <Text strong>5–30 минут</Text> (обсуждается с заказчиком).
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'functional-requirements',
    header: 'Функциональные требования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Каталог и поиск
          </Title>
          <List
            size="small"
            dataSource={[
              'Поиск с подсказками по артикулу / названию / характеристикам',
              'Отображение актуальных остатков и цен',
              'Поддержка нескольких ценовых уровней (розница, опт, дилеры)',
              'Фильтры (тип товара, размеры, ГОСТ и др.)',
              'Категоризация товаров',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CreditCardOutlined style={{ marginRight: 8 }} />
            Корзина и оформление заказа
          </Title>
          <List
            size="small"
            dataSource={[
              'Добавление нужных позиций в корзину',
              'Пересчёт сумм с учётом ценового уровня клиента',
              'Учёт скидок и специальных предложений',
              'Автоматическое формирование счёта PDF с реквизитами клиента',
              'Сохранение черновиков заказов',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Личный кабинет
          </Title>
          <List
            size="small"
            dataSource={[
              'История заказов с детализацией',
              'Повторные заказы (быстрое оформление)',
              'Отслеживание статусов заказов',
              'Управление профилем и реквизитами',
              'Разные уровни доступа (B2B / B2C)',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MailOutlined style={{ marginRight: 8 }} />
            Интеграция с почтой
          </Title>
          <List
            size="small"
            dataSource={[
              'Автоматическая отправка счёта на email клиента',
              'Копия счёта менеджеру',
              'Уведомления о статусах заказов',
              'Сохранение всех отправленных документов в админке',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
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
    id: 'non-functional-requirements',
    header: 'Нефункциональные требования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Производительность
          </Title>
          <List
            size="small"
            dataSource={[
              'Скорость поиска и вывода остатков ≤ 1 сек',
              'Оптимизация запросов к базе данных',
              'Кэширование данных остатков',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Надёжность и безопасность
          </Title>
          <List
            size="small"
            dataSource={[
              'Отказоустойчивость системы',
              'Резервное копирование данных',
              'Защита от SQL-инъекций и XSS',
              'HTTPS для всех соединений',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Адаптивность
          </Title>
          <List
            size="small"
            dataSource={[
              'Адаптивная верстка для всех устройств',
              'Поддержка современных браузеров',
              'Мобильная версия сайта',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
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
    id: 'expected-results',
    header: 'Ожидаемые результаты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Ключевые улучшения
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  +20-40%
                </Title>
                <Text>Прирост выручки</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    За счёт удобства онлайн-заказов
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  -50%
                </Title>
                <Text>Снижение затрат</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Экономия на обработке ручных заказов
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  24/7
                </Title>
                <Text>Доступность</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Заказы из разных регионов
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  -30%
                </Title>
                <Text>Снижение ошибок</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Система проверяет остатки автоматически
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  2,1 → 4,0+
                </Title>
                <Text>Рейтинг</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Восстановление рейтинга на Яндекс.Картах
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  1,5+ млрд
                </Title>
                <Text>Выручка</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Потенциал роста в течение года
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Дополнительные преимущества
          </Title>
          <List
            size="small"
            dataSource={[
              'Улучшение имиджа: современный сайт = доверие клиентов',
              'Расширение географии: заказы 24/7 из разных регионов',
              'Снижение рекламаций: прозрачность товара и сроков доставки',
              'Прозрачность для руководства: аналитика продаж в реальном времени',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
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
    id: 'questions-to-executor',
    header: 'Вопросы исполнителю',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Обязательные вопросы
          </Title>
          <List
            size="small"
            dataSource={[
              'Можно ли сохранить текущий шаблон без рисков?',
              'Какие модули Bitrix требуются (лицензия, версии)?',
              'Как будет реализован многоуровневый прайс?',
              'Где физически будут храниться данные остатков?',
              'Какие гарантии безопасности 1С предоставляются?',
              'Возможен ли демо-стенд для тестов?',
              'Какие SLA и время реакции при сбоях?',
              'Поддержка авторизации через EDI/контрагентов?',
              'Интеграция с платежными системами (оплата онлайн по счету)?',
              'AI-функции (рекомендации, чат-бот, генерация КП)?',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'what-to-get',
    header: 'Что необходимо получить от исполнителя',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Обязательные документы
          </Title>
          <List
            size="small"
            dataSource={[
              'Оценка стоимости по двум вариантам (А и Б)',
              'Сроки MVP и полный запуск',
              'Стек технологий и модули Bitrix',
              'Схема интеграции и защиты 1С',
              'Стоимость поддержки / сопровождения',
              'План поэтапного внедрения',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
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
    id: 'competitors',
    header: 'Конкурентная среда',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Основные конкуренты (Санкт-Петербург и регион)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={5} style={{ marginTop: 0 }}>
                    ЭЛЕМЕНТ-ЗЕТ
                  </Title>
                  <Text type="secondary">Фланцы, детали трубопровода</Text>
                  <Text>Региональный игрок</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={5} style={{ marginTop: 0 }}>
                    ГОСТ Крепёж
                  </Title>
                  <Text type="secondary">Крепеж (с 2012 г.)</Text>
                  <Text>Молодой конкурент</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={5} style={{ marginTop: 0 }}>
                    Партнер Пак
                  </Title>
                  <Text type="secondary">
                    Высококачественный крепеж (с 1999 г.)
                  </Text>
                  <Text>Ведущий поставщик</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={5} style={{ marginTop: 0 }}>
                    РусКон
                  </Title>
                  <Text type="secondary">Фланцы и материалы</Text>
                  <Text strong>Эталон в отрасли</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Конкурентные преимущества СМЗ
              </Title>
              <List
                size="small"
                dataSource={[
                  'Локальная производственная мощность',
                  'Импортозамещение — производит то, что раньше покупали за рубежом',
                  'Широкий ассортимент в одном месте',
                  'Стабильность — 25+ лет работы',
                  'Опыт в B2B-поставках крупным системным заказчикам',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <CloseOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                Конкурентные недостатки СМЗ
              </Title>
              <List
                size="small"
                dataSource={[
                  'Цифровизация — сайт устаревший',
                  'Масштаб — меньше федеральных лидеров',
                  'География — в основном Северо-Запад',
                  'Отсутствие автоматизации',
                  'Слабое присутствие в соцсетях',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                    <CloseOutlined
                      style={{ color: '#ff4d4f', marginRight: 8 }}
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
    id: 'conclusion',
    header: 'Заключение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Текущее состояние
          </Title>
          <Paragraph>
            <Text strong>Сиверский Метизный Завод</Text> — стабильное
            производство с <Text strong>25-летней историей</Text>, хорошей
            репутацией и широким ассортиментом. Компания входит в "Всероссийскую
            книгу Почета" и работает с крупными системными заказчиками.
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <Paragraph>
            <Text strong type="danger">
              ОДНАКО: Текущий рейтинг 2,1 ⭐ на Яндекс.Картах — серьезный сигнал
              о проблемах.
            </Text>
          </Paragraph>
          <List
            size="small"
            dataSource={[
              'Низкий рейтинг в интернете',
              'Отсутствие быстрых ответов (менеджеры перегружены)',
              'Проблемы с качеством товара',
              'Отсутствие удобного онлайн-заказа',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Стратегическая возможность
          </Title>
          <Paragraph>
            Внедрение современного сайта с интеграцией 1С позволит:
          </Paragraph>
          <List
            size="small"
            dataSource={[
              'Привлечь 20–40% дополнительных заказов через онлайн',
              'Снизить затраты на обработку',
              'Расширить географию рынка',
              'Компенсировать текущее падение прибыли',
              'Повысить рейтинг с 2,1 до 4,0+ ⭐',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
          <Divider style={{ margin: '12px 0' }} />
          <Paragraph>
            <Text strong>Потенциал роста:</Text> Выручка может вырасти с 1,2
            млрд до <Text strong>1,5+ млрд ₽</Text> в течение года после запуска
            IT-решения.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Контакты',
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Card style={{ maxWidth: '800px', width: '100%' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Title level={3} style={{ textAlign: 'center', marginTop: 0 }}>
              Контакты для переговоров
            </Title>
            <Divider />
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="green" style={{ marginBottom: 8 }}>
                  КОНТАКТНОЕ ЛИЦО
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Екатерина
                </Title>
                <Text type="secondary">Менеджер</Text>
                <Divider style={{ margin: '12px 0' }} />
                <Text>
                  <Text strong>Город:</Text> Санкт-Петербург
                </Text>
              </Space>
            </Card>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  РУКОВОДСТВО
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Мина Юрий Андреевич
                </Title>
                <Text type="secondary">Генеральный директор</Text>
              </Space>
            </Card>
            <Divider />
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Space>
                <PhoneOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link href="tel:+79214207794" style={{ fontSize: '16px' }}>
                  +7 (921) 420-77-94
                </Link>
              </Space>
              <Space>
                <MailOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link href="mailto:3@smz-spb.ru" style={{ fontSize: '16px' }}>
                  3@smz-spb.ru
                </Link>
              </Space>
              <Space>
                <GlobalOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link
                  href="https://smz-spb.ru"
                  target="_blank"
                  style={{ fontSize: '16px' }}
                >
                  https://smz-spb.ru
                </Link>
              </Space>
              <Text type="secondary" style={{ marginTop: 8 }}>
                Ленинградская область, Гатчинский муниципальный район, городской
                поселок Сиверский, улица Заводская, дом 9, 188330
              </Text>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'thank-you',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Card style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Title level={1} style={{ marginTop: 0, marginBottom: 0 }}>
              Благодарю за внимание
            </Title>
            <Divider />
            <Space
              orientation="vertical"
              size="middle"
              style={{ width: '100%' }}
            >
              <Space direction="vertical" size="small">
                <Text strong style={{ fontSize: '18px' }}>
                  Новиков Павел
                </Text>
                <Text type="secondary" style={{ fontSize: '16px' }}>
                  Технический директор компании Проксима
                </Text>
              </Space>
              <Divider style={{ margin: '16px 0' }} />
              <Space size="middle">
                <PhoneOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link
                  href="tel:+79085550606"
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                >
                  8 908 555 0606
                </Link>
              </Space>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
];
