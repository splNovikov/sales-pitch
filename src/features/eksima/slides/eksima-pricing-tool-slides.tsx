import {
  Typography,
  List,
  Space,
  Card,
  Row,
  Col,
  Tag,
  Divider,
  Alert,
  Segmented,
} from 'antd';
import {
  ShopOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  UserOutlined,
  DollarOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ShareAltOutlined,
  LockOutlined,
  ApiOutlined,
  SettingOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { eksimaPricingToolCreatedAt } from './eksima-pricing-tool.meta';
import { PricingModeToggle } from './pricing-mode-toggle';
import eksimaLogo from './img.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for EKSIMA Pricing Tool presentation
 * Based on EKSIMA-pricing-tool.md documentation
 */
export const eksimaPricingToolSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Инструмент предоставления цен"
        description="Персональная система ценообразования для розничных партнеров с возможностью управления наценками и прямого шаринга каталогов с покупателями."
        logo={eksimaLogo}
        logoAlt="EKSIMA"
        logoMaxWidth={300}
        createdAt={eksimaPricingToolCreatedAt}
        location="Санкт-Петербург"
      />
    ),
  },
  {
    id: 'problem-solution-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Проблема и решение"
        subtitle="Как дать розничным партнёрам инструмент для управления ценами"
        imageIndex={0}
        imageAlt="Проблема и решение"
      />
    ),
  },
  {
    id: 'problem-solution',
    header: 'Проблема и решение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8, color: '#faad14' }} />
            Задача
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Как дать розничным партнёрам (юр. лицам) инструмент для:
          </Paragraph>
          <List
            dataSource={[
              'Управления собственными наценками',
              'Демонстрации цен конечным покупателям',
              'Быстрого шаринга каталога без лишних усложнений',
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
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8, color: '#52c41a' }} />
            Решение
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Единая система авторизации с двухуровневым ценообразованием:
          </Paragraph>
          <List
            dataSource={[
              {
                step: 'Вход в систему',
                description:
                  'Партнёр получает свои персональные цены от EKSIMA',
              },
              {
                step: 'Управление наценками',
                description: 'Партнёр регулирует свою маржу',
              },
              {
                step: 'Шаринг каталога',
                description: 'Прямая ссылка для покупателей',
              },
            ]}
            renderItem={(item, index) => (
              <List.Item style={{ padding: '8px 0' }}>
                <Space>
                  <Tag
                    color="green"
                    style={{ minWidth: '30px', textAlign: 'center' }}
                  >
                    {index + 1}
                  </Tag>
                  <Space direction="vertical" size="small">
                    <Text strong>{item.step}</Text>
                    <Text type="secondary">{item.description}</Text>
                  </Space>
                </Space>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'authorization-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Система авторизации"
        subtitle="Двухуровневое ценообразование"
        imageIndex={1}
        imageAlt="Система авторизации"
      />
    ),
  },
  {
    id: 'authorization',
    header: 'Система авторизации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Вход в систему
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#f0f0f0',
              fontFamily: 'monospace',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small">
              <Text strong>EKSIMA</Text>
              <Text> ↓ Формирует персональные цены для каждого юр. лица</Text>
              <Text> ↓</Text>
              <Text>Юр. лицо авторизуется в системе</Text>
              <Text> ↓</Text>
              <Text>
                Получает доступ к каталогу с оптовыми ценами и собственной
                идентикой
              </Text>
            </Space>
          </Card>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Модель партнёрства
          </Title>
          <List
            dataSource={[
              'Каждому партнёру установлена собственная оптовая цена (может отличаться от других)',
              'Партнёр видит эту цену только в режиме работы ("МОИ ЦЕНЫ")',
              'Партнёр платит EKSIMA по установленной цене, продаёт покупателю по своей цене',
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
      </Space>
    ),
  },
  {
    id: 'catalog-after-login',
    header: 'Каталог после входа',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <AppstoreOutlined style={{ marginRight: 8 }} />
            Вид после авторизации
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Партнёр видит каталог товаров с:
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space direction="vertical" size="small">
                  <Text strong>
                    <EyeOutlined style={{ marginRight: 8 }} />
                    Собственной идентикой
                  </Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Логотип, цветовая схема
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space direction="vertical" size="small">
                  <Text strong>
                    <DollarOutlined style={{ marginRight: 8 }} />
                    Базовыми ценами
                  </Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Оптовые цены от EKSIMA
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Space direction="vertical" size="small">
                  <Text strong>
                    <SettingOutlined style={{ marginRight: 8 }} />
                    Возможностью управления
                  </Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Наценками на каждый товар
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#f0f0f0' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Пример: Керамогранит Coliseum Brenta Grey 22,5х90
          </Title>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Text>
              <Text strong>Товар:</Text> Керамогранит Coliseum Brenta Grey
              22,5х90
            </Text>
            <Text>
              <Text strong>Артикул:</Text> CB-22590-BRENTA-GR
            </Text>
            <Text>
              <Text strong>Описание:</Text> Керамогранит, размер 22,5х90 см,
              серый цвет
            </Text>
            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>
                На этом экране партнёр видит базовую информацию и может начать
                управление ценообразованием
              </Text>
            </Paragraph>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'customer-mode-variants-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Три варианта реализации режима «Покупатель»"
        subtitle="Выбор оптимального UX для демонстрации цен"
        imageIndex={2}
        imageAlt="Варианты реализации"
      />
    ),
  },
  {
    id: 'customer-mode-variant-1',
    header: 'Вариант 1: Toggle Switch',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            Простое переключение
          </Title>
          <PricingModeToggle />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
              <Text strong>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Преимущества:
              </Text>
              <List
                size="small"
                dataSource={['Простота', 'Работает на всех устройствах']}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
              <Text strong>
                <EyeOutlined style={{ color: '#faad14', marginRight: 8 }} />
                Недостатки:
              </Text>
              <List
                size="small"
                dataSource={['Нужно переключаться туда-сюда']}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
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
    id: 'customer-mode-variant-2',
    header: 'Вариант 2: Segmented',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <AppstoreOutlined style={{ marginRight: 8 }} />
            Переключение сегментами
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#fff',
              border: '2px solid #e8e8e8',
              marginTop: 16,
            }}
          >
            <Space
              direction="vertical"
              size="large"
              style={{ width: '100%', padding: '8px' }}
            >
              {/* Segmented переключатель */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Segmented
                  options={['МОИ ЦЕНЫ', 'ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ']}
                  defaultValue="МОИ ЦЕНЫ"
                  size="large"
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                />
              </div>

              <Divider style={{ margin: '8px 0' }} />

              {/* Пример: карточка товара с переключением */}
              <Card
                size="small"
                style={{
                  backgroundColor: '#fafafa',
                  border: '1px solid #d9d9d9',
                }}
              >
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Text strong style={{ fontSize: '16px' }}>
                    Керамогранит Coliseum Brenta Grey 22,5х90
                  </Text>
                  <Text type="secondary" style={{ fontSize: '13px' }}>
                    Артикул: CB-22590-BRENTA-GR
                  </Text>

                  <Divider style={{ margin: '12px 0' }} />

                  {/* Контент в зависимости от выбранного сегмента */}
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Card
                        size="small"
                        style={{
                          backgroundColor: '#f6ffed',
                          border: '2px solid #b7eb8f',
                        }}
                      >
                        <Space
                          direction="vertical"
                          size="small"
                          style={{ width: '100%' }}
                        >
                          <Text
                            strong
                            style={{ fontSize: '14px', color: '#52c41a' }}
                          >
                            Режим "МОИ ЦЕНЫ"
                          </Text>
                          <Divider style={{ margin: '8px 0' }} />
                          <Text style={{ fontSize: '13px' }}>
                            Себестоимость: <Text strong>580 ₽</Text>
                          </Text>
                          <Text style={{ fontSize: '13px' }}>
                            Коэффициент наценки: <Text strong>[1.80 ▼]</Text>
                          </Text>
                          <Text style={{ fontSize: '13px' }}>
                            Розничная цена: <Text strong>1 044 ₽</Text>
                          </Text>
                          <Text style={{ fontSize: '13px' }}>
                            Маржа: <Text strong>464 ₽ (80%)</Text>
                          </Text>
                        </Space>
                      </Card>
                    </Col>
                    <Col xs={24} md={12}>
                      <Card
                        size="small"
                        style={{
                          backgroundColor: '#e6f7ff',
                          border: '2px solid #91d5ff',
                        }}
                      >
                        <Space
                          direction="vertical"
                          size="small"
                          style={{ width: '100%' }}
                        >
                          <Text
                            strong
                            style={{ fontSize: '14px', color: '#1890ff' }}
                          >
                            Режим "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"
                          </Text>
                          <Divider style={{ margin: '8px 0' }} />
                          <Text style={{ fontSize: '13px' }}>
                            Цена: <Text strong>1 044 ₽</Text>
                          </Text>
                          <Text style={{ fontSize: '13px' }}>
                            <Text strong>[Добавить в корзину]</Text>
                          </Text>
                        </Space>
                      </Card>
                    </Col>
                  </Row>

                  <Alert
                    message="При переключении сегмента контент обновляется мгновенно"
                    type="info"
                    showIcon
                    style={{ marginTop: 8 }}
                  />
                </Space>
              </Card>
            </Space>
          </Card>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
              <Text strong>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Преимущества:
              </Text>
              <List
                size="small"
                dataSource={[
                  'WYSIWYG (что видишь, то получишь)',
                  'Live preview',
                  'Работает на всех устройствах',
                  'Интуитивно понятный интерфейс',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
              <Text strong>
                <EyeOutlined style={{ color: '#faad14', marginRight: 8 }} />
                Недостатки:
              </Text>
              <List
                size="small"
                dataSource={['Нужно переключаться между режимами']}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
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
    id: 'customer-mode-variant-3',
    header: 'Вариант 3: Modal/Overlay',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EyeOutlined style={{ marginRight: 8 }} />
            Модальное окно
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#f0f0f0',
              fontFamily: 'monospace',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong>ОСНОВНОЙ ЭКРАН (МОИ ЦЕНЫ)</Text>
              <Divider style={{ margin: '4px 0' }} />
              <Space direction="vertical" size="small">
                <Text>Керамогранит Coliseum Brenta Grey 22,5х90</Text>
                <Text>Себестоимость: 580 ₽</Text>
                <Text>Коэффициент: [1.80 ▼]</Text>
                <Text>Розничная: 1 044 ₽</Text>
                <Text>Маржа: 464 ₽ (80%)</Text>
                <Text>[ПРЕДПРОСМОТР ПОКУПАТЕЛЮ ⤴]</Text>
              </Space>
              <Divider style={{ margin: '8px 0' }} />
              <Text strong>ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ</Text>
              <Card
                size="small"
                style={{
                  backgroundColor: '#fff',
                  border: '2px solid #1890ff',
                }}
              >
                <Space direction="vertical" size="small">
                  <Text>[✕]</Text>
                  <Text>Керамогранит Coliseum</Text>
                  <Text>Brenta Grey 22,5х90</Text>
                  <Text>Цена: 1 044 ₽</Text>
                  <Text>[Добавить в корзину]</Text>
                  <Text>[📋 Копировать ссылку]</Text>
                  <Text>[Закрыть]</Text>
                </Space>
              </Card>
            </Space>
          </Card>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
              <Text strong>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Преимущества:
              </Text>
              <List
                size="small"
                dataSource={['Работает на мобильных', 'Не занимает весь экран']}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
              <Text strong>
                <EyeOutlined style={{ color: '#faad14', marginRight: 8 }} />
                Недостатки:
              </Text>
              <List
                size="small"
                dataSource={['Нельзя одновременно редактировать и смотреть']}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text style={{ fontSize: '12px' }}>• {item}</Text>
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
    id: 'unlimited-retail-points-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Неограниченные розничные точки"
        subtitle="Множество собственных каталогов"
        imageIndex={3}
        imageAlt="Розничные точки"
      />
    ),
  },
  {
    id: 'unlimited-retail-points',
    header: 'Неограниченные розничные точки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Множество собственных каталогов
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Юр. лицо НЕ ограничено количеством создания своих розничных точек с
            собственным ценообразованием:
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#f0f0f0' }}>
          <AnimatedSteps
            items={[
              {
                title: 'EKSIMA (Поставщик)',
                description: 'Формирует оптовые цены для партнёров',
              },
              {
                title: 'Юр. лицо "ООО СТРОЙСНАБ" (Партнёр)',
                description: 'Авторизуется в системе',
              },
              {
                title: 'Розничная точка №1 (Москва)',
                description: 'Наценка на керамогранит: 1.80x',
              },
              {
                title: 'Розничная точка №2 (СПб)',
                description: 'Наценка на керамогранит: 2.00x',
              },
              {
                title: 'Розничная точка №3 (Казань)',
                description: 'Наценка на керамогранит: 1.70x',
              },
            ]}
            stepInterval={2500}
            stopOnLast={true}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Каждая точка может иметь:
          </Title>
          <List
            dataSource={[
              'Собственную наценку на один и тот же товар',
              'Собственную идентику (логотип, название)',
              'Собственный каталог для шаринга',
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
      </Space>
    ),
  },
  {
    id: 'sharing-process-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Как поделиться с покупателем"
        subtitle="Процесс шаринга ссылки"
        imageIndex={4}
        imageAlt="Шаринг"
      />
    ),
  },
  {
    id: 'sharing-process',
    header: 'Как поделиться с покупателем',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShareAltOutlined style={{ marginRight: 8 }} />
            Процесс шаринга ссылки
          </Title>
          <AnimatedSteps
            items={[
              {
                title: 'Шаг 1: Партнёр в режиме "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"',
                description:
                  'Партнёр видит товар с розничной ценой и кнопку "ПОДЕЛИТЬСЯ С ПОКУПАТЕЛЕМ"',
              },
              {
                title: 'Шаг 2: Партнёр нажимает кнопку "Поделиться"',
                description:
                  'Система генерирует персональную ссылку с токеном доступа',
              },
              {
                title: 'Шаг 3: Ссылка копируется в буфер обмена',
                description:
                  'Партнёр может отправить её покупателю по WhatsApp, Email, SMS или любому другому каналу',
              },
            ]}
            stepInterval={3000}
            stopOnLast={true}
          />
        </Card>
        <Card style={{ backgroundColor: '#f0f0f0' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Пример персональной ссылки:
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#fff',
              fontFamily: 'monospace',
              marginTop: 8,
            }}
          >
            <Text
              copyable={{
                text: 'https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL',
              }}
            >
              https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL
            </Text>
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'token-explanation',
    header: 'Объяснение персонального токена в URL',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <LockOutlined style={{ marginRight: 8 }} />
            Что такое эта "непонятная ссылка"?
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#f0f0f0',
              fontFamily: 'monospace',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small">
              <Text>
                <Text strong>Нормальная ссылка:</Text>
              </Text>
              <Text>https://eksima.ru/catalog</Text>
              <Divider style={{ margin: '8px 0' }} />
              <Text>
                <Text strong>
                  Но если поделиться ей просто — никто не узнает, чей это
                  каталог.
                </Text>
              </Text>
              <Divider style={{ margin: '8px 0' }} />
              <Text>
                <Text strong>
                  Поэтому система добавляет "личный билет" (токен):
                </Text>
              </Text>
              <Text>
                https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL
              </Text>
            </Space>
          </Card>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Это означает:
          </Title>
          <List
            dataSource={[
              'view=customer — "показать режим для покупателя" (без себестоимости)',
              'partner=partner_123 — "это каталог партнёра с ID partner_123"',
              'token=abc7k9F2mL — "это персональный ключ доступа" (уникален для каждого шара)',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <CheckCircleOutlined
                  style={{ color: '#1890ff', marginRight: 8 }}
                />
                <Text style={{ fontSize: '13px' }}>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Alert
          message="Аналогия"
          description="Как если вы даёте другу вашу записную книжку — никто другой не будет знать, что это ваши контакты."
          type="info"
          showIcon
        />
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Преимущества такого подхода:
          </Title>
          <List
            dataSource={[
              'Покупатель видит ЕГО цены (партнёра), не EKSIMA цены',
              'Невозможно "подглядеть" цены других партнёров',
              'Каждый токен уникален — можно отследить кто открыл',
              'Токен можно отозвать в любой момент',
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
    id: 'customer-mode-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Клиентский режим"
        subtitle="Без авторизации для покупателя"
        imageIndex={5}
        imageAlt="Клиентский режим"
      />
    ),
  },
  {
    id: 'customer-mode',
    header: 'Клиентский режим (без авторизации)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Покупатель открывает ссылку
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Покупатель получил ссылку от партнёра и открывает её:
          </Paragraph>
          <Card
            size="small"
            style={{
              backgroundColor: '#f0f0f0',
              fontFamily: 'monospace',
              marginTop: 8,
            }}
          >
            <Text
              copyable={{
                text: 'https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL',
              }}
            >
              https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL
            </Text>
          </Card>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Что происходит:
          </Title>
          <List
            dataSource={[
              'Покупатель НЕ авторизуется (не нужен логин/пароль)',
              'Система проверяет токен — валидный ли он?',
              'Если валидный → показывает каталог этого партнёра',
              'Если невалидный (истёк, отозван) → ошибка "доступ недоступен"',
            ]}
            renderItem={(item, index) => (
              <List.Item style={{ padding: '4px 0' }}>
                <Tag color="blue" style={{ marginRight: 8 }}>
                  {index + 1}
                </Tag>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5} style={{ marginTop: 0 }}>
                <EyeOutlined style={{ marginRight: 8 }} />
                Что видит покупатель:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Логотип компании партнёра',
                  'Керамогранит Coliseum Brenta Grey 22,5х90',
                  'Цена: 1 044 ₽',
                  '[Добавить в корзину]',
                  'Далее в каталоге 200+ товаров',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <CheckCircleOutlined
                      style={{
                        color: '#52c41a',
                        marginRight: 4,
                        fontSize: '12px',
                      }}
                    />
                    <Text style={{ fontSize: '12px' }}>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
              <Title level={5} style={{ marginTop: 0 }}>
                <EyeInvisibleOutlined style={{ marginRight: 8 }} />
                Что НЕ видит:
              </Title>
              <List
                size="small"
                dataSource={[
                  'Себестоимость (580 ₽)',
                  'Коэффициент наценки (1.80x)',
                  'Маржу партнёра (464 ₽)',
                  'Никаких кнопок управления или админ-панели',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '2px 0' }}>
                    <Text
                      type="secondary"
                      style={{
                        fontSize: '12px',
                        textDecoration: 'line-through',
                      }}
                    >
                      {item}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Alert
          message="Полностью «чистый» каталог"
          description="Как обычный интернет-магазин — покупатель видит только товары и цены партнёра."
          type="success"
          showIcon
        />
      </Space>
    ),
  },
  {
    id: 'architecture-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Архитектура решения"
        subtitle="Как всё работает под капотом"
        imageIndex={6}
        imageAlt="Архитектура"
      />
    ),
  },
  {
    id: 'architecture',
    header: 'Архитектура решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Как всё работает под капотом
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#f0f0f0',
              fontFamily: 'monospace',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong>
                ┌─────────────────────────────────────────────────────────┐
              </Text>
              <Text>│ EKSIMA Backend │</Text>
              <Text>│ │</Text>
              <Text>│ ├─ Хранит базовые товары │</Text>
              <Text>
                │ ├─ Устанавливает оптовую цену для каждого партнера │
              </Text>
              <Text>│ ├─ Выдаёт токены доступа при шаринге │</Text>
              <Text>│ └─ Валидирует токены при открытии ссылок │</Text>
              <Text>
                └─────────────────────────────────────────────────────────┘
              </Text>
              <Text> ↓</Text>
              <Text> ┌──────────────────┴──────────────────┐</Text>
              <Text> ↓ ↓</Text>
              <Text>┌──────────────────────┐ ┌──────────────────────┐</Text>
              <Text>│ Партнёр работает │ │ Покупатель открывает │</Text>
              <Text>│ (авторизован) │ │ ссылку │</Text>
              <Text>│ │ │ (БЕЗ авторизации) │</Text>
              <Text>│ - Видит оптовые цены │ │ │</Text>
              <Text>│ - Управляет наценки │ │ - Видит розничные │</Text>
              <Text>│ - Шарит каталог │ │ цены партнера │</Text>
              <Text>│ │ │ - Добавляет в │</Text>
              <Text>│ │ │ корзину │</Text>
              <Text>└──────────────────────┘ └──────────────────────┘</Text>
            </Space>
          </Card>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Два разных способа показа одного товара
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff' }}>
                <Text strong>Для партнера:</Text>
                <Card
                  size="small"
                  style={{
                    backgroundColor: '#f0f0f0',
                    fontFamily: 'monospace',
                    marginTop: 8,
                  }}
                >
                  <Space direction="vertical" size="small">
                    <Text>name: "Керамогранит..."</Text>
                    <Text>supplierPrice: 580</Text>
                    <Text>markupCoeff: 1.80</Text>
                    <Text>retailPrice: 1044</Text>
                    <Text>margin: 464</Text>
                  </Space>
                </Card>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#fff' }}>
                <Text strong>Для покупателя (по ссылке):</Text>
                <Card
                  size="small"
                  style={{
                    backgroundColor: '#f0f0f0',
                    fontFamily: 'monospace',
                    marginTop: 8,
                  }}
                >
                  <Space direction="vertical" size="small">
                    <Text>name: "Керамогранит..."</Text>
                    <Text>retailPrice: 1044</Text>
                    <Text>// Всё остальное скрыто!</Text>
                  </Space>
                </Card>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'benefits-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Ключевые преимущества"
        subtitle="Для партнёра, EKSIMA и покупателя"
        imageIndex={7}
        imageAlt="Преимущества"
      />
    ),
  },
  {
    id: 'benefits',
    header: 'Ключевые преимущества',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Для партнёра (розничника)
          </Title>
          <List
            dataSource={[
              'Полный контроль над ценообразованием — сами решают наценку на каждый товар',
              'Собственная идентика в каталоге — логотип, цвета, название',
              'Неограниченное количество точек — можно создать 10 каталогов с разными ценами',
              'Простой шаринг — одна кнопка → ссылка готова',
              'Live демонстрация — сидят за компом, показываются цены покупателю',
              'Безопасность — покупатель видит ТОЛЬКО розничные цены',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Для EKSIMA
          </Title>
          <List
            dataSource={[
              'Масштабируемость — один инструмент для 1000+ партнёров',
              'Контроль ценовой политики — видим кто как продаёт',
              'Снижение нагрузки на клиент-сервис — партнёры сами управляют ценами',
              'Данные о партнёрах — видим как популярны разные товары',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Для покупателя
          </Title>
          <List
            dataSource={[
              'Простота — открыл ссылку, видит товары и цены',
              'Быстро — не нужно авторизовываться',
              'Удобно — может добавлять в корзину с мобильного',
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
      </Space>
    ),
  },
  {
    id: 'summary',
    header: 'Резюме',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0, textAlign: 'center' }}>
            EKSIMA Pricing Tool
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              textAlign: 'center',
            }}
          >
            Это инструмент, который позволяет:
          </Paragraph>
        </Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card style={{ height: '100%', backgroundColor: '#f6ffed' }}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <ShopOutlined style={{ fontSize: '40px', color: '#52c41a' }} />
                <Title level={4} style={{ margin: 0 }}>
                  Партнёрам
                </Title>
                <Text>
                  Управлять своими ценами и демонстрировать их покупателям
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card style={{ height: '100%', backgroundColor: '#e6f7ff' }}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <UserOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
                <Title level={4} style={{ margin: 0 }}>
                  Покупателям
                </Title>
                <Text>Видеть актуальные цены без лишних сложностей</Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card style={{ height: '100%', backgroundColor: '#fff7e6' }}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <RocketOutlined
                  style={{ fontSize: '40px', color: '#faad14' }}
                />
                <Title level={4} style={{ margin: 0 }}>
                  EKSIMA
                </Title>
                <Text>
                  Масштабировать продажи без увеличения нагрузки на поддержку
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f0f0f0' }}>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-md)',
              textAlign: 'center',
              marginBottom: 0,
              fontStyle: 'italic',
            }}
          >
            <Text strong>Как это работает в одной фразе:</Text>
            <br />
            <Text type="secondary">
              «Партнёр авторизуется → видит свои оптовые цены → устанавливает
              наценку → шарит ссылку с покупателем → покупатель видит готовый
              каталог с ценами партнера»
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Контакты Proxima',
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
