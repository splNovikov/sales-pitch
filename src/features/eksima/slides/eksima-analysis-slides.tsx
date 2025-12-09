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
  Statistic,
} from 'antd';
import {
  ShopOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  RocketOutlined,
  UserOutlined,
  DollarOutlined,
  GlobalOutlined,
  BuildOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  BarChartOutlined,
  ApiOutlined,
  CodeOutlined,
  CreditCardOutlined,
  StarOutlined,
  TeamOutlined,
  BankOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { eksimaAnalysisCreatedAt } from './eksima-analysis.meta';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for EKSIMA company analysis presentation
 * Based on comprehensive analysis document
 */
export const eksimaAnalysisSlides: SlideData[] = [
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
          <Title level={1} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 16, color: '#1890ff' }} />
            EKSIMA
          </Title>
          <Title level={2} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            Комплексный анализ компании для сотрудничества
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginBottom: 0,
              color: '#595959',
            }}
          >
            Предложение по разработке B2B кабинета для оптовых покупателей
          </Paragraph>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          {formatDateForSlide(eksimaAnalysisCreatedAt)} • Санкт-Петербург
        </Text>
      </Space>
    ),
  },
  {
    id: 'company-portrait',
    header: 'Портрет компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />О компании EKSIMA
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            <Text strong>EKSIMA</Text> – керамическая студия и оптовый поставщик
            керамической плитки и керамогранита, функционирующая на российском
            рынке строительных материалов с <Text strong>2006 года</Text>.
          </Paragraph>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Компания позиционирует себя как{' '}
            <Text strong>
              представитель крупнейших российских производителей керамического
              гранита и плитки
            </Text>
            , предоставляя как оптовые, так и розничные услуги.
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Statistic
                title="Годы на рынке"
                value={19}
                suffix="лет"
                prefix={<TrophyOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={24} sm={12}>
              <Statistic
                title="Основной фокус"
                value="B2B"
                suffix="оптовые продажи"
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Целевая аудитория
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>B2B сегмент (70-80% выручки)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Строительные компании и подрядчики',
                    'Дизайнеры интерьера',
                    'Архитектурные бюро',
                    'Оптовые торговцы',
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
                <Text strong>B2C сегмент (20-30% выручки)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Частные лица',
                    'Домовладельцы',
                    'Строители-любители',
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
      </Space>
    ),
  },
  {
    id: 'company-details',
    header: 'Общие сведения и реквизиты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Реквизиты компании
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Полное наименование">
              ООО "ЭКСИМА"
            </Descriptions.Item>
            <Descriptions.Item label="ИНН">7806479769</Descriptions.Item>
            <Descriptions.Item label="КПП">780601001</Descriptions.Item>
            <Descriptions.Item label="ОГРН">1127847316860</Descriptions.Item>
            <Descriptions.Item label="Дата регистрации">
              9 июня 2012 года
            </Descriptions.Item>
            <Descriptions.Item label="Юридический адрес">
              195067, г. Санкт-Петербург, Пролетариат Волгоградский проспект, д.
              4
            </Descriptions.Item>
            <Descriptions.Item label="Локация">
              <EnvironmentOutlined style={{ marginRight: 4 }} />
              Красногвардейский район, метро "Лесная"
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <WarningOutlined style={{ marginRight: 8, color: '#faad14' }} />
            <Text strong>
              Компания зарегистрирована 13 лет назад, активно работает на рынке
              с положительной репутацией.
            </Text>
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
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            История развития
          </Title>
          <List
            dataSource={[
              {
                year: '2006',
                event: 'Начало работы компании на рынке керамической плитки',
              },
              {
                year: '2012',
                event: 'Официальная регистрация в качестве ООО "Эксима"',
              },
              {
                year: '2020',
                event: 'Переоформление регистрации в налоговых органах',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <Tag
                    color="blue"
                    style={{ fontSize: '14px', padding: '4px 12px' }}
                  >
                    {item.year}
                  </Tag>
                  <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item.event}
                  </Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Ключевые достижения
          </Title>
          <List
            dataSource={[
              'Долгосрочное присутствие на рынке – 19 лет непрерывной работы',
              'Налаженные каналы дистрибуции – прямые контакты с производителями',
              'Расширенная сетка складских помещений в Санкт-Петербурге',
              'Стабильность в период санкций – сохранение и развитие бизнеса',
              'Растущая доля российской керамики на рынке (75-80% по данным АПКМ)',
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
    id: 'key-needs',
    header: 'Потребности компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Критическая потребность
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            <Text strong>
              Инструментарий для оптовых покупателей (B2B кабинет)
            </Text>
          </Paragraph>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Заказчик явно выразил потребность в инструментарии для оптовых
            покупателей. Это является основной целью сотрудничества.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Минимальный набор функций (MVP)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <ShopOutlined style={{ marginRight: 8 }} />
                  Каталог товаров
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Артикул и наименование',
                    'Остатки на складе',
                    'Оптовые цены (с брейками)',
                    'Фото продукции',
                    'Сертификаты и документация',
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
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <UserOutlined style={{ marginRight: 8 }} />
                  Личный кабинет
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Регистрация и авторизация',
                    'История заказов',
                    'Корзина и сохраненные товары',
                    'Персональные скидки',
                    'Реквизиты компании-покупателя',
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
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <CreditCardOutlined style={{ marginRight: 8 }} />
                  Оформление заказа
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Добавление товаров в корзину',
                    'Расчет стоимости со скидками',
                    'Выбор способа доставки',
                    'Сохранение черновиков',
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
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <FileTextOutlined style={{ marginRight: 8 }} />
                  Управление заказами
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Просмотр статуса заказа',
                    'История платежей',
                    'Печать документов',
                    'Уведомления о статусе',
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
      </Space>
    ),
  },
  {
    id: 'extended-features',
    header: 'Расширенный функционал',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Дополнительные возможности
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>
                  <BarChartOutlined style={{ marginRight: 8 }} />
                  Аналитика для оптовиков
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Сравнение цен по объемам закупок',
                    'Рекомендации по совместимым товарам',
                    'Прогноз затрат',
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
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <RocketOutlined style={{ marginRight: 8 }} />
                  Управление поставками
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Отслеживание доставки в реальном времени',
                    'Планирование заказов',
                    'Автоматические уведомления',
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
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Интеграции
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                system: '1C:Бухгалтерия',
                priority: 'Высокий',
                purpose: 'Синхронизация учета и складского учета',
              },
              {
                key: '2',
                system: 'Яндекс.Касса / Юкасса',
                priority: 'Высокий',
                purpose: 'Онлайн платежи',
              },
              {
                key: '3',
                system: 'Почта / SMS',
                priority: 'Высокий',
                purpose: 'Уведомления клиентам',
              },
              {
                key: '4',
                system: 'Google Analytics',
                priority: 'Средний',
                purpose: 'Аналитика использования кабинета',
              },
              {
                key: '5',
                system: 'CRM',
                priority: 'Средний',
                purpose: 'Управление отношениями с клиентами',
              },
            ]}
            columns={[
              {
                title: 'Система',
                dataIndex: 'system',
                key: 'system',
              },
              {
                title: 'Приоритет',
                dataIndex: 'priority',
                key: 'priority',
                render: (priority: string) => {
                  const color = priority === 'Высокий' ? 'red' : 'orange';
                  return <Tag color={color}>{priority}</Tag>;
                },
              },
              {
                title: 'Назначение',
                dataIndex: 'purpose',
                key: 'purpose',
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
    id: 'business-needs',
    header: 'Бизнес-потребности',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Цели внедрения B2B кабинета
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <DollarOutlined style={{ marginRight: 8 }} />
                  Увеличение объема оптовых продаж
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Снижение трудозатрат на обработку заказов',
                    'Автоматизация коммуникаций',
                    'Повышение удобства для оптовиков (доступ 24/7)',
                    'Возможность расширения географии продаж',
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
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>
                  <ShopOutlined style={{ marginRight: 8 }} />
                  Улучшение управления складом
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Автоматизированное управление остатками',
                    'Синхронизация с ERP/1C системой',
                    'Предотвращение пересортировки',
                    'Оптимизация логистики',
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
          </Row>
        </Card>
        <Card>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>
                  <ThunderboltOutlined style={{ marginRight: 8 }} />
                  Оптимизация коммуникаций
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Сокращение времени на обработку запросов',
                    'Автоматизированные уведомления',
                    'Снижение количества ошибок',
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
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <GlobalOutlined style={{ marginRight: 8 }} />
                  Расширение рынка
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Переориентация на отечественного клиента',
                    'Удобный интерфейс для новых оптовиков',
                    'Конкурентное преимущество',
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
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'reputation',
    header: 'Отзывы и репутация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
              <Statistic
                title="Репутация"
                value="Положительная"
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Средний рейтинг"
                value={4.3}
                suffix="/ 5"
                prefix={<StarOutlined />}
                valueStyle={{ color: '#faad14' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Отзывов"
                value={14}
                suffix="+"
                prefix={<FileTextOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Положительные отзывы
          </Title>
          <List
            dataSource={[
              'Быстрое обслуживание – заказ оформляется за 5 минут',
              'Соответствие параметров – цена, наличие, количество',
              'Качество продукции – твердые и качественные материалы',
              'Надежность – объекты сдаются в срок',
              'Профессионализм – компетентная консультация',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Области для улучшения
          </Title>
          <List
            dataSource={[
              'Логистика и доставка – необходимость личного посещения склада',
              'Навигация по товарам – каталог может быть неполным',
              'Цены – оптовые скидки могут быть неявными',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>
              Конкурентные преимущества строятся в основном на личных отношениях
              с клиентами. Это указывает на критическую потребность в
              автоматизации и создании удобного онлайн-сервиса для
              масштабирования.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'competitive-analysis',
    header: 'Конкурентный анализ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Сравнение с конкурентами
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                factor: 'История',
                eksima: '19 лет',
                masterdom: '30+ лет',
                artgres: '-',
                kerammarket: '-',
              },
              {
                key: '2',
                factor: 'Оптовой фокус',
                eksima: '✅ Да',
                masterdom: '✅ Да',
                artgres: '⚠️ Частично',
                kerammarket: '❌ Нет',
              },
              {
                key: '3',
                factor: 'Онлайн-магазин',
                eksima: '⚠️ Слабо',
                masterdom: '❌ Нет',
                artgres: '✅ Да',
                kerammarket: '✅ Да',
              },
              {
                key: '4',
                factor: 'B2B кабинет',
                eksima: '❌ Нет',
                masterdom: '❌ Нет',
                artgres: '❌ Нет',
                kerammarket: '❌ Нет',
              },
              {
                key: '5',
                factor: 'Мобильный доступ',
                eksima: '⚠️ Слабо',
                masterdom: '❌ Нет',
                artgres: '✅ Есть',
                kerammarket: '✅ Есть',
              },
            ]}
            columns={[
              {
                title: 'Фактор',
                dataIndex: 'factor',
                key: 'factor',
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
                title: 'MasterDOM',
                dataIndex: 'masterdom',
                key: 'masterdom',
              },
              {
                title: 'Art Gres',
                dataIndex: 'artgres',
                key: 'artgres',
              },
              {
                title: 'KERAM MARKET',
                dataIndex: 'kerammarket',
                key: 'kerammarket',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Стратегия дифференциации
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Для EKSIMA критично внедрить{' '}
            <Text strong>B2B кабинет оптовых покупателей</Text>, который станет:
          </Paragraph>
          <List
            dataSource={[
              'Конкурентным преимуществом над местными игроками',
              'Эквивалентом онлайн-магазинам, но с фокусом на опт',
              'Инструментом для привлечения новых оптовых партнеров',
              'Платформой для масштабирования бизнеса',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <RocketOutlined
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
    id: 'company-size',
    header: 'Размер компании и локация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Statistic
                  title="Численность сотрудников"
                  value="10-30"
                  suffix="человек"
                  prefix={<TeamOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Statistic
                  title="Уставный капитал"
                  value={10000}
                  suffix="₽"
                  prefix={<BankOutlined />}
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EnvironmentOutlined style={{ marginRight: 8 }} />
            Географическое расположение
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Основной офис и склад">
              195067, г. Санкт-Петербург, пр-т Волгоградский, д. 4
            </Descriptions.Item>
            <Descriptions.Item label="Район">
              Красногвардейский, Полюстрово
            </Descriptions.Item>
            <Descriptions.Item label="Метро">
              Лесная (ближайшее)
            </Descriptions.Item>
            <Descriptions.Item label="Дополнительные локации">
              пр-т Аптекарский, д. 9
            </Descriptions.Item>
            <Descriptions.Item label="Охват клиентов">
              Санкт-Петербург и Ленинградская область
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Потенциальный охват при развитии
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            При наличии IT кабинета возможно расширение на{' '}
            <Text strong>Северо-Западный федеральный округ</Text> и соседние
            регионы.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'implementation-phases',
    header: 'Этапы реализации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Фаза 1: Подготовка (Неделя 1-2)
          </Title>
          <List
            dataSource={[
              'Встреча с ключевыми лицами (ГД, руководитель продаж, CFO)',
              'Сбор требований и детальное описание функционала',
              'Анализ текущих систем (1C, CRM, ERP)',
              'Проверка финансовой состояния компании',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <CheckCircleOutlined
                  style={{ color: '#1890ff', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Фаза 2: Разработка концепции (Неделя 3-4)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>MVP (Минимально жизнеспособный продукт)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Каталог товаров с остатками',
                    'Личный кабинет',
                    'Корзина и оформление заказа',
                    'История заказов',
                    'Уведомления (Email/SMS)',
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
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>First Enhancement</Text>
                <List
                  size="small"
                  dataSource={[
                    'Оптовые скидки по объемам',
                    'Интеграция с 1C',
                    'Система платежей',
                    'Отчеты для администратора',
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
            <RocketOutlined style={{ marginRight: 8 }} />
            Фаза 3: Разработка и внедрение (1-3 месяца)
          </Title>
          <List
            dataSource={[
              'Дизайн и прототипирование (2 недели)',
              'Разработка backend (3-4 недели)',
              'Разработка frontend (3-4 недели)',
              'Тестирование и QA (2 недели)',
              'Миграция и интеграции (1-2 недели)',
              'Обучение пользователей (1 неделя)',
              'Запуск в production',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <ClockCircleOutlined
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
    id: 'technologies',
    header: 'Рекомендуемые технологии',
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
                  Backend
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Node.js + Express (быстрая разработка)',
                    'PostgreSQL (надежная БД)',
                    'Redis (кэширование)',
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
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>
                  <ThunderboltOutlined style={{ marginRight: 8 }} />
                  Frontend
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'React или Vue.js',
                    'Next.js для SEO оптимизации',
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
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>
                  <BuildOutlined style={{ marginRight: 8 }} />
                  DevOps
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Docker / Kubernetes (масштабируемость)',
                    'CI/CD (GitHub Actions или GitLab CI)',
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
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Text strong>
                  <GlobalOutlined style={{ marginRight: 8 }} />
                  Hosting
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Google Cloud / AWS / DigitalOcean',
                    'CDN для статики (CloudFlare)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: '#595959', marginRight: 8 }}
                      />
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
    id: 'pricing',
    header: 'Стоимость проекта',
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          minHeight: '400px',
        }}
      >
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Примерная стоимость проекта
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                component: 'Аналитика и проектирование',
                cost: '50 000 - 150 000',
              },
              {
                key: '2',
                component: 'Дизайн UI/UX',
                cost: '100 000 - 300 000',
              },
              {
                key: '3',
                component: 'Backend разработка',
                cost: '200 000 - 600 000',
              },
              {
                key: '4',
                component: 'Frontend разработка',
                cost: '150 000 - 400 000',
              },
              {
                key: '5',
                component: 'Тестирование и QA',
                cost: '50 000 - 150 000',
              },
              {
                key: '6',
                component: 'DevOps и Hosting',
                cost: '20 000 - 50 000 / мес',
              },
              {
                key: '7',
                component: 'Интеграции (1C, платежи)',
                cost: '50 000 - 200 000',
              },
            ]}
            columns={[
              {
                title: 'Компонент',
                dataIndex: 'component',
                key: 'component',
              },
              {
                title: 'Стоимость (руб)',
                dataIndex: 'cost',
                key: 'cost',
                render: (cost: string) => (
                  <Text strong style={{ color: '#1890ff' }}>
                    {cost}
                  </Text>
                ),
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Statistic
                title="Итого MVP"
                value={620000}
                suffix="₽"
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#1890ff', fontSize: '24px' }}
              />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                (от 620 000 до 1 850 000 ₽)
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Statistic
                title="Итого Full Stack"
                value={1000000}
                suffix="₽"
                prefix={<RocketOutlined />}
                valueStyle={{ color: '#52c41a', fontSize: '24px' }}
              />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                (от 1 000 000 до 3 000 000 ₽)
              </Text>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <TrophyOutlined style={{ marginRight: 8, color: '#52c41a' }} />
            <Text strong>
              ROI: Окупаемость проекта при 10-20% увеличении оптовых объемов
              составит 6-12 месяцев
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'cooperation-forms',
    header: 'Формы сотрудничества',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Рекомендуемые формы сотрудничества
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  T&M
                </Title>
                <Text>Time & Materials – если требования еще не ясны</Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Fixed Price
                </Title>
                <Text>
                  Фиксированная цена – если требования полностью определены
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Гибридная модель
                </Title>
                <Text>MVP фиксированная цена + дополнительные функции T&M</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Ключевые риски и снижение
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                risk: 'Неясные требования',
                probability: 'Высокая',
                impact: 'Высокое',
                mitigation: 'Подробный RFP и kickoff',
              },
              {
                key: '2',
                risk: 'Слабая интеграция с 1C',
                probability: 'Средняя',
                impact: 'Высокое',
                mitigation: 'Привлечение 1C специалиста',
              },
              {
                key: '3',
                risk: 'Задержки в сроках',
                probability: 'Средняя',
                impact: 'Среднее',
                mitigation: 'Agile методология, спринты',
              },
            ]}
            columns={[
              {
                title: 'Риск',
                dataIndex: 'risk',
                key: 'risk',
              },
              {
                title: 'Вероятность',
                dataIndex: 'probability',
                key: 'probability',
                render: (prob: string) => {
                  const color = prob === 'Высокая' ? 'red' : 'orange';
                  return <Tag color={color}>{prob}</Tag>;
                },
              },
              {
                title: 'Воздействие',
                dataIndex: 'impact',
                key: 'impact',
              },
              {
                title: 'Снижение',
                dataIndex: 'mitigation',
                key: 'mitigation',
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
    id: 'key-questions',
    header: 'Контрольные вопросы для встречи',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Вопросы для уточнения
          </Title>
          <List
            dataSource={[
              'Какой текущий объем оптовых заказов в месяц?',
              'Сколько активных B2B клиентов?',
              'Какой процент заказов может быть автоматизирован через систему?',
              'Есть ли текущая 1C или ERP система?',
              'Какие платежные системы предпочтут клиенты?',
              'Какой язык программирования предпочитает команда (для поддержки)?',
              'Какой бюджет выделен на проект?',
              'Какие сроки реализации критичны?',
              'Кто будет основным контактом на стороне клиента?',
              'Какие KPI будут учитывать успех проекта?',
            ]}
            renderItem={(item, index) => (
              <List.Item style={{ padding: '8px 0' }}>
                <Space>
                  <Tag
                    color="blue"
                    style={{ minWidth: '30px', textAlign: 'center' }}
                  >
                    {index + 1}
                  </Tag>
                  <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item}
                  </Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'conclusion',
    header: 'Заключение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Почему стоит сотрудничать
          </Title>
          <List
            dataSource={[
              'Растущий потенциал оптовых продаж',
              'Критическая потребность в IT инструментарии',
              'Стабильная компания с положительной репутацией',
              'Оптовая ориентация позволит масштабировать через автоматизацию',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            На что обратить внимание
          </Title>
          <List
            dataSource={[
              'Уточнить финансовые показатели перед заключением контракта',
              'Понять технический уровень текущей IT инфраструктуры',
              'Определить точное видение клиента на "инструментарий"',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Главная возможность
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Создание B2B кабинета для оптовых покупателей позволит EKSIMA:
          </Paragraph>
          <List
            dataSource={[
              'Увеличить объем оптовых продаж на 20-40%',
              'Снизить трудозатраты на обработку заказов на 50-70%',
              'Получить конкурентное преимущество перед местными игроками',
              'Расширить географический охват',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <RocketOutlined
                  style={{ color: '#1890ff', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
        <Divider />
        <Card>
          <Paragraph
            style={{
              textAlign: 'center',
              fontSize: 'var(--app-font-size-md)',
              marginBottom: 0,
            }}
          >
            <Text type="secondary">
              Готовы обсудить детали и ответить на все вопросы.
              <br />
              Свяжитесь с нами для уточнения сроков и условий работы.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
