import {
  Typography,
  List,
  Space,
  Card,
  Row,
  Col,
  Tag,
  Table,
  Descriptions,
  Statistic,
} from 'antd';
import {
  GlobalOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  RocketOutlined,
  ShopOutlined,
  BuildOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  BarChartOutlined,
  SafetyOutlined,
  CodeOutlined,
  StarOutlined,
  EyeOutlined,
  SearchOutlined,
  MobileOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  UserOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { eksimaWebsiteAnalysisCreatedAt } from './eksima-website-analysis.meta';
import eksimaLogo from './img.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for EKSIMA website analysis presentation
 * Based on comprehensive website analysis document
 */
export const eksimaWebsiteAnalysisSlides: SlideData[] = [
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
          size="large"
          style={{ textAlign: 'center', maxWidth: '900px' }}
        >
          <a
            href="https://www.plitka-eksima.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--app-spacing-md)',
            }}
          >
            <img
              src={eksimaLogo}
              alt="EKSIMA"
              style={{
                maxWidth: '400px',
                height: 'auto',
                display: 'block',
                cursor: 'pointer',
              }}
            />
          </a>
          <Title level={2} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            Подробный анализ веб-сайта
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginBottom: 0,
              color: '#595959',
            }}
          >
            Рекомендации по улучшению и развитию
          </Paragraph>
          <Link
            href="https://www.plitka-eksima.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '16px' }}
          >
            plitka-eksima.ru
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
          {formatDateForSlide(eksimaWebsiteAnalysisCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'overview',
    header: 'Общая характеристика сайта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Основные метрики
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Statistic
                title="Товаров в каталоге"
                value={2103}
                suffix="позиций"
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Col>
            <Col xs={24} sm={12}>
              <Statistic
                title="Статус"
                value="Активен"
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
          </Row>
        </Card>
        <Card>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Домен">
              plitka-eksima.ru
            </Descriptions.Item>
            <Descriptions.Item label="Протокол">
              <Tag color="green">HTTPS</Tag> (безопасное соединение)
            </Descriptions.Item>
            <Descriptions.Item label="Тип">
              Корпоративный сайт + интернет-каталог
            </Descriptions.Item>
            <Descriptions.Item label="Целевая аудитория">
              B2B (оптовые покупатели), B2C (розничные)
            </Descriptions.Item>
            <Descriptions.Item label="Основной язык">Русский</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Назначение сайта
          </Title>
          <List
            dataSource={[
              'Информирование клиентов о компании и услугах',
              'Демонстрация каталога керамической плитки и керамогранита',
              'Привлечение потенциальных клиентов через поисковые системы',
              'Заказы и коммуникация с существующими клиентами',
              'Предоставление контактной информации и условий работы',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'structure',
    header: 'Структура и навигация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Основные разделы сайта
          </Title>
          <List
            dataSource={[
              {
                name: 'Главная страница',
                url: 'plitka-eksima.ru/',
                status: '✅',
              },
              {
                name: 'О компании',
                url: 'plitka-eksima.ru/about',
                status: '✅',
              },
              {
                name: 'Каталог',
                url: 'plitka-eksima.ru/catalog',
                status: '✅',
                note: '2 103 товаров',
              },
              {
                name: 'Контакты',
                url: 'plitka-eksima.ru/contacts',
                status: '✅',
              },
              {
                name: 'Отзывы',
                url: 'plitka-eksima.ru/reviews',
                status: '✅',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <Text strong>{item.status}</Text>
                  <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item.name}
                  </Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    {item.url}
                  </Text>
                  {item.note && (
                    <Tag color="blue" style={{ fontSize: '12px' }}>
                      {item.note}
                    </Tag>
                  )}
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Отсутствующие разделы
          </Title>
          <List
            dataSource={[
              'Страница "Доставка и оплата" (критично для покупателей)',
              'FAQ (часто задаваемые вопросы)',
              'Новости или Блог (слабое SEO)',
              'Личный кабинет для зарегистрированных пользователей',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'catalog',
    header: 'Каталог товаров',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
              <Statistic
                title="Товаров в каталоге"
                value={2103}
                suffix="позиций"
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Статус товаров"
                value="В наличии и под заказ"
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Основные производители"
                value="GRASARO, ATLAS CONCORDE, Kerranova"
                prefix={<TrophyOutlined />}
                valueStyle={{ color: '#faad14' }}
              />
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Организация каталога
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>По производителям</Text>
                <List
                  size="small"
                  dataSource={[
                    'GRASARO (ГРАСАРО)',
                    'ATLAS CONCORDE RUSSIA',
                    'Kerranova (КЕРРАНОВА)',
                    'Прочие производители',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#1890ff', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>По типам продукции</Text>
                <List
                  size="small"
                  dataSource={[
                    'Керамогранит',
                    'Керамическая плитка',
                    'Мозаика',
                    'Строительные смеси',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#faad14', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Проблемы карточек товаров
          </Title>
          <List
            dataSource={[
              'Цена может быть скрыта',
              'Отсутствуют технические характеристики',
              'Фотографии товаров невысокого качества',
              'Отсутствуют артикул и код производителя',
              'Нет информации о наличии на складе',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'functionality',
    header: 'Функциональность каталога',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SearchOutlined style={{ marginRight: 8 }} />
            Поиск и фильтрация
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Что есть
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Поле поиска на главной странице',
                    'Фильтрация по производителям',
                    'Категоризация по типам товара',
                    'Пагинация для просмотра',
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
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>
                  <WarningOutlined
                    style={{ color: '#ff4d4f', marginRight: 8 }}
                  />
                  Чего не хватает
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Фильтр по размеру',
                    'Фильтр по цене',
                    'Фильтр по цвету',
                    'Фильтр по стилю/дизайну',
                    'Сортировка по цене',
                    'Сортировка по популярности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Корзина и оформление заказа
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Статус функциональности: <Text strong>⚠️ Не полностью ясна</Text>
          </Paragraph>
          <List
            dataSource={[
              'Добавление товара в корзину',
              'Просмотр корзины',
              'Изменение количества товара',
              'Расчет стоимости',
              'Выбор варианта доставки',
              'Выбор метода оплаты',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Страница контактов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EnvironmentOutlined style={{ marginRight: 8 }} />
            Контактная информация
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Основной адрес">
              195067, г. Санкт-Петербург, пр-т Волгоградский, д. 4
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              eksima@msgbox.ru
            </Descriptions.Item>
            <Descriptions.Item label="Телефон">
              +7 (812) 655-XX-XX
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Салоны и филиалы
          </Title>
          <List
            dataSource={[
              {
                name: 'Салон 1 (Новолитовская)',
                address: 'Новолитовская улица, 15а',
                metro: 'Лесная',
                phone: '+7 (812) 507-61-57',
                hours: 'ПН-ПТ: 09:30 - 19:00, СБ: 11:00 - 16:00',
              },
              {
                name: 'Салон 2 (Волго-Донской)',
                address: 'Волго-Донской проспект, 4 лит Е',
                metro: 'Склад и оптовый отдел',
              },
              {
                name: 'Салон 3 (Аптекарский)',
                address: 'Аптекарский проспект, д. 9',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Space direction="vertical" size="small">
                  <Text strong>{item.name}</Text>
                  <Text type="secondary">{item.address}</Text>
                  {item.metro && <Text type="secondary">{item.metro}</Text>}
                  {item.phone && <Text>{item.phone}</Text>}
                  {item.hours && <Text type="secondary">{item.hours}</Text>}
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Недостатки страницы контактов
          </Title>
          <List
            dataSource={[
              'Нет интерактивной карты (Google Maps, Яндекс.Карты)',
              'Нет формы "Обратная связь"',
              'Нет чата / Live Chat',
              'Телефон частично скрыт на сайте',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'design',
    header: 'Стиль и дизайн',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EyeOutlined style={{ marginRight: 8 }} />
            Общая оценка дизайна
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Statistic
                  title="Оценка"
                  value={3}
                  suffix="/ 5"
                  prefix={<StarOutlined />}
                  valueStyle={{ color: '#52c41a' }}
                />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Хороший, но устаревший
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Statistic
                  title="Мобильный дизайн"
                  value="Адаптивный"
                  prefix={<MobileOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Responsive design
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Оценка компонентов
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                component: 'Привлекательность',
                rating: '⭐⭐⭐',
                comment: 'Хороший, но можно модернизировать',
              },
              {
                key: '2',
                component: 'Скорость загрузки',
                rating: '⭐⭐⭐⭐',
                comment: 'Приемлемая',
              },
              {
                key: '3',
                component: 'Мобильность',
                rating: '⭐⭐⭐⭐',
                comment: 'Адаптивный дизайн',
              },
              {
                key: '4',
                component: 'Call-To-Action',
                rating: '⭐⭐⭐',
                comment: 'Присутствует, но не очень выразительна',
              },
            ]}
            columns={[
              {
                title: 'Компонент',
                dataIndex: 'component',
                key: 'component',
              },
              {
                title: 'Оценка',
                dataIndex: 'rating',
                key: 'rating',
              },
              {
                title: 'Комментарий',
                dataIndex: 'comment',
                key: 'comment',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'seo',
    header: 'SEO и поисковая видимость',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Оценка SEO
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Statistic
                  title="Общая оценка"
                  value={2}
                  suffix="/ 5"
                  prefix={<WarningOutlined />}
                  valueStyle={{ color: '#ff4d4f' }}
                />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Слабая оптимизация
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Statistic
                  title="Мета-теги"
                  value="Хорошие"
                  prefix={<CheckCircleOutlined />}
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Statistic
                  title="Структурированные данные"
                  value="Отсутствуют"
                  prefix={<WarningOutlined />}
                  valueStyle={{ color: '#ff4d4f' }}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Проблемы SEO
          </Title>
          <List
            dataSource={[
              'Отсутствуют структурированные данные (schema.org)',
              'Отсутствие блога и регулярного контента',
              'Нет xml.sitemap (предположительно)',
              'Дублирование контента (возможно)',
              'Отсутствуют canonical tags',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'technical',
    header: 'Технические характеристики',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Технологический стек
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>
                  <CodeOutlined style={{ marginRight: 8 }} />
                  Frontend
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'HTML5 + CSS3',
                    'JavaScript',
                    'Framework: неизвестно',
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
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <BuildOutlined style={{ marginRight: 8 }} />
                  Backend
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Язык: неизвестно',
                    'СУБД: вероятно MySQL/PostgreSQL',
                    'CMS: возможно custom',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
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
            <SafetyOutlined style={{ marginRight: 8 }} />
            Безопасность и производительность
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Безопасность</Text>
                <List
                  size="small"
                  dataSource={[
                    '✅ HTTPS включен',
                    '✅ Безопасное соединение',
                    '⚠️ Требуется подтверждение PCI DSS',
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
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Производительность</Text>
                <List
                  size="small"
                  dataSource={[
                    '✅ Приемлемая скорость загрузки',
                    '⚠️ Неизвестна оптимизация изображений',
                    '⚠️ Каталог с 2100+ товарами может загружаться медленнее',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'problems',
    header: 'Проблемы и недостатки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Критические проблемы
          </Title>
          <List
            dataSource={[
              {
                problem: 'Отсутствие полноценного B2B кабинета',
                impact: 'Снижение конверсии оптовых клиентов на 30-50%',
              },
              {
                problem: 'Неполная информация о товарах',
                impact: 'Покупатели переходят к конкурентам',
              },
              {
                problem: 'Отсутствие интерактивной карты',
                impact: 'Потеря клиентов, которые хотят посетить салон',
              },
              {
                problem: 'Нет формы обратной связи',
                impact: 'Потеря потенциальных запросов',
              },
              {
                problem: 'Отсутствие чата/Live Chat',
                impact: 'Снижение конверсии на 15-20%',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item.problem}
                  </Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Влияние: {item.impact}
                  </Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Серьезные проблемы
          </Title>
          <List
            dataSource={[
              'Ограниченные возможности фильтрации',
              'Отсутствие блога и контента',
              'Плохая SEO оптимизация',
              'Отсутствие социальных сетей',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <WarningOutlined
                  style={{ color: '#faad14', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'improvements',
    header: 'Возможности улучшения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Приоритет 1: Критические улучшения (0-3 месяца)
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                improvement: 'Разработка B2B кабинета',
                timeline: '3 недели',
                budget: '320 000 ₽',
              },
              {
                key: '2',
                improvement: 'Интеграция интерактивной карты',
                timeline: '2-3 дня',
                budget: '10 000 - 15 000 ₽',
              },
              {
                key: '3',
                improvement: 'Форма обратной связи',
                timeline: '2-3 дня',
                budget: '5 000 - 10 000 ₽',
              },
              {
                key: '4',
                improvement: 'Live Chat / Chatbot',
                timeline: '1 неделя',
                budget: '20 000 - 50 000 ₽',
              },
            ]}
            columns={[
              {
                title: 'Улучшение',
                dataIndex: 'improvement',
                key: 'improvement',
              },
              {
                title: 'Сроки',
                dataIndex: 'timeline',
                key: 'timeline',
              },
              {
                title: 'Бюджет',
                dataIndex: 'budget',
                key: 'budget',
                render: (budget: string) => (
                  <Text strong style={{ color: '#1890ff' }}>
                    {budget}
                  </Text>
                ),
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Приоритет 2: Важные улучшения (1-6 месяцев)
          </Title>
          <List
            dataSource={[
              'Улучшение каталога товаров (фильтры, фото высокого качества)',
              'Блог и SEO контент (2-3 статьи в месяц)',
              'SEO оптимизация (schema.org, sitemap)',
              'Интеграция социальных сетей',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'competitors',
    header: 'Сравнение с конкурентами',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Матрица сравнения функциональности
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                function: 'Каталог товаров',
                eksima: '✅ Есть (2103)',
                competitors: '✅ Есть',
              },
              {
                key: '2',
                function: 'Фильтры по размеру',
                eksima: '❌ Нет',
                competitors: '✅ Есть',
              },
              {
                key: '3',
                function: 'Фильтры по цене',
                eksima: '❌ Нет',
                competitors: '✅ Есть',
              },
              {
                key: '4',
                function: 'Фото товаров',
                eksima: '⚠️ Низкое качество',
                competitors: '✅ Хорошее',
              },
              {
                key: '5',
                function: 'B2B кабинет',
                eksima: '❌ Нет',
                competitors: '❌ Нет',
              },
              {
                key: '6',
                function: 'Live Chat',
                eksima: '❌ Нет',
                competitors: '⚠️ Возможно',
              },
              {
                key: '7',
                function: 'Интерактивная карта',
                eksima: '❌ Нет',
                competitors: '✅ Есть',
              },
              {
                key: '8',
                function: 'Блог',
                eksima: '❌ Нет',
                competitors: '✅ Есть',
              },
            ]}
            columns={[
              {
                title: 'Функция',
                dataIndex: 'function',
                key: 'function',
              },
              {
                title: 'EKSIMA',
                dataIndex: 'eksima',
                key: 'eksima',
                render: (text: string) => {
                  if (text.includes('✅')) {
                    return <Tag color="green">{text}</Tag>;
                  }
                  if (text.includes('⚠️')) {
                    return <Tag color="orange">{text}</Tag>;
                  }
                  if (text.includes('❌')) {
                    return <Tag color="red">{text}</Tag>;
                  }
                  return text;
                },
              },
              {
                title: 'Конкуренты',
                dataIndex: 'competitors',
                key: 'competitors',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Сильные стороны EKSIMA
          </Title>
          <List
            dataSource={[
              'Большой каталог товаров (2103 товара)',
              'Наличие нескольких физических салонов',
              'Хорошая репутация в отзывах',
              'Оптовая ориентация',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Слабые стороны EKSIMA
          </Title>
          <List
            dataSource={[
              'Слабые возможности поиска и фильтрации',
              'Отсутствие B2B кабинета (конкурентное преимущество!)',
              'Плохая визуализация товаров',
              'Слабая SEO оптимизация',
              'Отсутствие контента и блога',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'rating',
    header: 'Итоговая оценка сайта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Оценка по компонентам
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                component: 'Дизайн',
                rating: '⭐⭐⭐',
                comment: 'Хороший, но может быть современнее',
              },
              {
                key: '2',
                component: 'Функциональность',
                rating: '⭐⭐',
                comment: 'Базовая, отсутствуют критические функции',
              },
              {
                key: '3',
                component: 'Каталог',
                rating: '⭐⭐⭐',
                comment: 'Большой, но плохо организован',
              },
              {
                key: '4',
                component: 'Пользовательский опыт',
                rating: '⭐⭐⭐',
                comment: 'Приемлемый, но требует улучшений',
              },
              {
                key: '5',
                component: 'SEO',
                rating: '⭐⭐',
                comment: 'Слабая оптимизация',
              },
              {
                key: '6',
                component: 'Безопасность',
                rating: '⭐⭐⭐⭐',
                comment: 'Хорошая (HTTPS)',
              },
              {
                key: '7',
                component: 'Скорость',
                rating: '⭐⭐⭐⭐',
                comment: 'Приемлемая',
              },
            ]}
            columns={[
              {
                title: 'Компонент',
                dataIndex: 'component',
                key: 'component',
              },
              {
                title: 'Оценка',
                dataIndex: 'rating',
                key: 'rating',
              },
              {
                title: 'Комментарий',
                dataIndex: 'comment',
                key: 'comment',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
              <Statistic
                title="Общая оценка"
                value={3}
                suffix="/ 5"
                prefix={<StarOutlined />}
                valueStyle={{ color: '#1890ff', fontSize: '32px' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Для B2B клиентов"
                value={2}
                suffix="/ 5"
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#ff4d4f', fontSize: '24px' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Для B2C клиентов"
                value={3}
                suffix="/ 5"
                prefix={<UserOutlined />}
                valueStyle={{ color: '#faad14', fontSize: '24px' }}
              />
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'recommendations',
    header: 'Рекомендации по приоритизации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            План развития сайта на 12 месяцев
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Q1 (Январь-Март)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Разработка B2B кабинета (MVP)',
                    'Интеграция интерактивной карты',
                    'Форма обратной связи',
                    'Улучшение качества фото товаров',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Бюджет: 400 000 - 500 000 ₽
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Q2 (Апрель-Июнь)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Live Chat',
                    'Улучшение фильтрации каталога',
                    'Начало создания контента (блог)',
                    'SEO оптимизация',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Бюджет: 300 000 - 400 000 ₽
                </Text>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>Q3 (Июль-Сентябрь)</Text>
                <List
                  size="small"
                  dataSource={[
                    '3D представление товаров',
                    'Примеры в интерьерах',
                    'Расширение блога',
                    'Социальные сети',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Бюджет: 250 000 - 350 000 ₽
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>Q4 (Октябрь-Декабрь)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Система лояльности',
                    'Mobile приложение (начало)',
                    'Video контент',
                    'Анализ результатов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Бюджет: 300 000 - 400 000 ₽
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Statistic
                title="Общий бюджет на год"
                value={1250000}
                suffix="₽"
                prefix={<DollarOutlined />}
                valueStyle={{ color: '#52c41a', fontSize: '24px' }}
              />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                (от 1 250 000 до 1 650 000 ₽)
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#ffffff' }}>
                <Paragraph style={{ marginBottom: 0 }}>
                  <Text strong>
                    EKSIMA имеет потенциал стать лидером в регионе, если
                    разработает B2B кабинет и улучшит визуализацию товаров.
                  </Text>
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
];
