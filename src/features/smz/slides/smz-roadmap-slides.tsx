import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
} from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  ShoppingOutlined,
  DatabaseOutlined,
  EyeInvisibleOutlined,
  BgColorsOutlined,
  PictureOutlined,
  SearchOutlined,
  SafetyOutlined,
  FileTextOutlined,
  UserOutlined,
  PlayCircleOutlined,
  SettingOutlined,
  GlobalOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { smzRoadmapCreatedAt } from './smz-roadmap.meta';

const { Title, Paragraph, Text, Link } = Typography;

export const smzRoadmapSlides: SlideData[] = [
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
            ДОРОЖНАЯ КАРТА
          </Title>
          <Title
            level={2}
            style={{
              fontSize: '36px',
              fontWeight: 500,
              marginTop: 'var(--app-spacing-sm)',
              marginBottom: 0,
            }}
          >
            Разработка интернет-магазина на шаблоне Аспро
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-lg)',
              marginBottom: 0,
              color: 'var(--app-color-text-secondary)',
            }}
          >
            Поэтапный план реализации обновления сайта СМЗ
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
          {formatDateForSlide(smzRoadmapCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'overview',
    header: 'Обзор дорожной карты',
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
            Структура проекта
          </Title>
          <Paragraph>
            Дорожная карта разбита на <Text strong>13 основных этапов</Text>,
            которые охватывают весь жизненный цикл разработки интернет-магазина
            на шаблоне Аспро — от анализа требований до запуска и поддержки.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Общие сроки
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    3-4 месяца
                  </Title>
                  <Text>Типовой срок реализации</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                    13 этапов
                  </Title>
                  <Text>Логически связанных шагов</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Ключевые принципы
          </Title>
          <List
            size="small"
            dataSource={[
              'Последовательная реализация этапов',
              'Регулярное согласование с заказчиком',
              'Тестирование на каждом этапе',
              'Гибкость в адаптации под требования',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
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
    id: 'stage-1',
    header: 'Этап 1: Инициация и аналитика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Сбор требований и анализ
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Сбор требований:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Ассортимент товаров и категории',
                    'Типы клиентов (B2B/B2C)',
                    'Регионы доставки',
                    'Способы оплаты и доставки',
                    'Особенности бизнес-процессов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Аудит текущего состояния:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Анализ текущего сайта',
                    'Оценка интеграции с 1С',
                    'Выявление проблемных мест',
                    'Определение доработок',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            Согласование целей и ограничений
          </Title>
          <List
            size="small"
            dataSource={[
              'Определение бизнес-целей проекта',
              'Согласование сроков и бюджета',
              'Выявление ограничений и рисков',
              'Подготовка технического задания',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1-2 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-2',
    header: 'Этап 2: Выбор и покупка шаблона Аспро',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShoppingOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Подбор шаблона
          </Title>
          <Paragraph>
            Выбор конкретного шаблона Аспро, который максимально соответствует
            задачам компании СМЗ.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Критерии выбора:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Поддержка B2B/B2C функционала',
                    'Интеграция с 1С',
                    'Адаптивный дизайн',
                    'Маркетинговые возможности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Проверка требований:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Версия 1С-Битрикс',
                    'Требования к PHP',
                    'Серверные требования',
                    'Необходимые модули',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
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
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            Покупка и регистрация
          </Title>
          <List
            size="small"
            dataSource={[
              'Покупка шаблона Аспро',
              'Регистрация лицензий 1С-Битрикс (если требуется)',
              'Получение доступа к обновлениям',
              'Подготовка документации',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 3-5 дней
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-3',
    header: 'Этап 3: Техническая подготовка инфраструктуры',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Подготовка серверной инфраструктуры
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Хостинг/сервер:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Подготовка тестового контура',
                    'Подготовка боевого сервера',
                    'Настройка доменов и SSL',
                    'Резервное копирование',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Установка и настройка:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Установка 1С-Битрикс',
                    'Настройка окружений (dev/stage/prod)',
                    'Настройка прав доступа',
                    'Организация бэкапов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1 неделя
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-4',
    header: 'Этап 4: Разворачивание шаблона Аспро',
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
            Установка и базовая настройка
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Установка шаблона:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Установка шаблона на тестовый контур',
                    'Активация необходимых модулей',
                    'Первичная настройка структуры',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Базовая настройка:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Настройка инфоблоков и каталогов',
                    'Настройка типов цен',
                    'Настройка складов',
                    'Проверка работоспособности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            Первичная проверка
          </Title>
          <List
            size="small"
            dataSource={[
              'Проверка работы корзины',
              'Тестирование оформления заказа',
              'Проверка личного кабинета',
              'Базовая проверка функционала',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1-2 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-5',
    header: 'Этап 5: Интеграция и выгрузка из 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Настройка обмена данными
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Выгрузка из 1С:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Настройка выгрузки каталога',
                    'Выгрузка товаров и характеристик',
                    'Выгрузка цен и остатков',
                    'Настройка расписания обмена',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Обратная выгрузка:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Настройка передачи заказов в 1С',
                    'Синхронизация статусов',
                    'Обработка ошибок обмена',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            Тестирование интеграции
          </Title>
          <List
            size="small"
            dataSource={[
              'Тестирование создания/обновления товара',
              'Проверка изменения остатков',
              'Тестирование проведения заказа',
              'Проверка регулярности обмена',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Важно: Безопасность 1С
          </Title>
          <Paragraph>
            <Text strong>
              Использование защищённого контура обмена (файловый обмен через
              CommerceML 2.0 или промежуточный сервер-шлюз) для обеспечения
              безопасности 1С без прямого подключения к интернету.
            </Text>
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 2-3 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-6',
    header: 'Этап 6: Сокрытие неиспользуемого функционала',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EyeInvisibleOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Оптимизация функционала
          </Title>
          <Paragraph>
            Определение и отключение неиспользуемых модулей и блоков шаблона для
            упрощения интерфейса и повышения удобства использования.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Неиспользуемые модули:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Акции и промо-блоки (если не нужны)',
                    'Блог и новости',
                    'Сравнение товаров',
                    'Отзывы и рейтинги',
                    'Другие неиспользуемые функции',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Упрощение интерфейса:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Скрытие лишних разделов меню',
                    'Отключение ненужных виджетов',
                    'Упрощение навигации',
                    'Фокус на ключевых действиях',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1 неделя
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-7',
    header: 'Этап 7: Персонализация под бренд заказчика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BgColorsOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Брендинг и визуальная идентичность
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Цветовая схема:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Изменение цветовой палитры',
                    'Настройка под брендбук',
                    'Адаптация UI-элементов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Логотип и фирменный стиль:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Размещение логотипа',
                    'Фирменные элементы',
                    'Настройка шрифтов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            Настройка UI-элементов
          </Title>
          <List
            size="small"
            dataSource={[
              'Стилизация кнопок и форм',
              'Настройка эффектов наведения',
              'Адаптация типографики',
              'Согласованность визуального стиля',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1-2 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-8',
    header: 'Этап 8: Графика и контент',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <PictureOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Создание графических материалов
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Баннеры для главной:</Text>
                <Paragraph style={{ margin: '8px 0', fontSize: '14px' }}>
                  До <Text strong>3 баннеров</Text> для главной страницы
                </Paragraph>
                <List
                  size="small"
                  dataSource={['Акции', 'Ключевые УТП', 'Категории товаров']}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Баннеры для внутренних:</Text>
                <Paragraph style={{ margin: '8px 0', fontSize: '14px' }}>
                  До <Text strong>5 баннеров</Text> для внутренних страниц
                </Paragraph>
                <List
                  size="small"
                  dataSource={[
                    'Каталоги',
                    'Акции',
                    'Спецпредложения',
                    'Инфостраницы',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Text strong>Иконки каталога:</Text>
                <Paragraph style={{ margin: '8px 0', fontSize: '14px' }}>
                  Отрисовка иконок для категорий продукции
                </Paragraph>
                <List
                  size="small"
                  dataSource={['Категории', 'Типы товаров', 'Разделы']}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
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
            <FileTextOutlined style={{ marginRight: 8 }} />
            Подготовка текстового контента
          </Title>
          <List
            size="small"
            dataSource={[
              'Тексты для категорий и карточек товаров',
              'Разделы "О компании", "Доставка и оплата"',
              'FAQ и полезная информация',
              'Миграция контента со старого сайта (если есть)',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 2-3 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-9',
    header: 'Этап 9: UX-настройка каталога и поиска',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SearchOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Структурирование каталога
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Организация каталога:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Иерархия разделов и подразделов',
                    'Настройка фильтров',
                    'Настройка сортировок',
                    'Оптимизация навигации',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Поиск и фильтрация:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Настройка умного поиска',
                    'Подсказки при вводе',
                    'Фильтры в реальном времени',
                    'Оптимизация производительности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            Карточка товара
          </Title>
          <List
            size="small"
            dataSource={[
              'Настройка отображения параметров',
              'Комплектации и варианты',
              'Сопутствующие товары',
              'Аналогичные товары',
              'Оптимизация UX карточки',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1-2 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-10',
    header: 'Этап 10: SEO и маркетинговая подготовка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Базовая SEO-настройка
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Техническая SEO:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Настройка ЧПУ (человеко-понятных URL)',
                    'Мета-теги и заголовки',
                    'Микроразметка (Schema.org)',
                    'Sitemap.xml и robots.txt',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Аналитика и редиректы:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Подключение Yandex Metrica',
                    'Подключение Google Analytics',
                    'Настройка e-commerce событий',
                    'Редиректы со старого сайта',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <CheckCircleOutlined style={{ marginRight: 8 }} />
            Дополнительные настройки
          </Title>
          <List
            size="small"
            dataSource={[
              'Подготовка посадочных страниц под ключевые запросы',
              'Оптимизация контента для поисковых систем',
              'Настройка социальных мета-тегов',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1-2 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-11',
    header: 'Этап 11: Тестирование и полировка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Комплексное тестирование
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Функциональное тестирование:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Тестирование корзины и заказов',
                    'Проверка личного кабинета',
                    'Тестирование интеграции с 1С',
                    'Проверка всех форм и процессов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Кроссбраузерность и адаптив:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Проверка в разных браузерах',
                    'Адаптивность (desktop/tablet/mobile)',
                    'Проверка производительности',
                    'Оптимизация скорости загрузки',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
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
            <SafetyOutlined style={{ marginRight: 8 }} />
            Безопасность и производительность
          </Title>
          <List
            size="small"
            dataSource={[
              'Проверка прав доступа и безопасности',
              'Защита форм от спама',
              'Нагрузочное тестирование (базовое)',
              'Проверка обновлений и патчей',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 2 недели
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-12',
    header: 'Этап 12: Обучение и документация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Обучение сотрудников
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Работа с каталогом:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Управление товарами',
                    'Работа с категориями',
                    'Настройка цен и остатков',
                    'Управление контентом',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Управление заказами:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Обработка заказов',
                    'Работа с клиентами',
                    'Управление статусами',
                    'Отчёты и аналитика',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
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
            <FileTextOutlined style={{ marginRight: 8 }} />
            Документация
          </Title>
          <List
            size="small"
            dataSource={[
              'Подготовка инструкций (PDF/Google Docs)',
              'Видео-гайды по основным операциям',
              'Техническая документация',
              'Руководство пользователя',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1 неделя
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'stage-13',
    header: 'Этап 13: Запуск и сопровождение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <PlayCircleOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Запуск проекта
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Перенос на боевой сервер:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Миграция на production',
                    'Финальная проверка',
                    'Переключение DNS',
                    'Мониторинг в первые дни',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#1890ff',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Сопровождение:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Регулярные обновления',
                    'Техническая поддержка',
                    'Доработки по запросу',
                    'Мониторинг производительности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <CheckCircleOutlined
                        style={{
                          color: '#52c41a',
                          marginRight: 8,
                          fontSize: '12px',
                        }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#faad14', marginRight: 8 }} />
            План развития
          </Title>
          <Paragraph>
            После запуска возможны дальнейшие улучшения: A/B тестирование,
            оптимизация конверсии, добавление новых функций, интеграция с
            дополнительными сервисами.
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Срок: 1 неделя (запуск) + сопровождение
          </Title>
        </Card>
      </Space>
    ),
  },
  {
    id: 'timeline-summary',
    header: 'Сводная временная линия',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalendarOutlined
              style={{
                marginRight: 'var(--app-spacing-xs)',
                color: 'var(--app-color-primary)',
              }}
            />
            Общая временная линия проекта
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={3000}
            items={[
              {
                title: 'Этап 1-2: Инициация и покупка (2-3 недели)',
                description:
                  'Аналитика, сбор требований, выбор и покупка шаблона Аспро',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Этап 3-4: Инфраструктура и разворачивание (2-3 недели)',
                description:
                  'Подготовка сервера, установка Битрикс, разворачивание шаблона',
                icon: <SettingOutlined />,
              },
              {
                title: 'Этап 5: Интеграция с 1С (2-3 недели)',
                description:
                  'Настройка обмена данными, тестирование синхронизации',
                icon: <DatabaseOutlined />,
              },
              {
                title: 'Этап 6-7: Оптимизация и брендинг (2-3 недели)',
                description:
                  'Сокрытие неиспользуемого функционала, персонализация под бренд',
                icon: <BgColorsOutlined />,
              },
              {
                title: 'Этап 8-9: Контент и UX (3-5 недель)',
                description:
                  'Создание графики, баннеров, иконок, настройка каталога и поиска',
                icon: <PictureOutlined />,
              },
              {
                title: 'Этап 10-11: SEO и тестирование (3-4 недели)',
                description:
                  'SEO-настройка, аналитика, комплексное тестирование',
                icon: <GlobalOutlined />,
              },
              {
                title: 'Этап 12-13: Обучение и запуск (2 недели)',
                description:
                  'Обучение команды, документация, запуск на production',
                icon: <PlayCircleOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Итоговые сроки
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    3-4 месяца
                  </Title>
                  <Text>Общий срок реализации</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                    Гибкий график
                  </Title>
                  <Text>С возможностью параллельной работы</Text>
                </Space>
              </Card>
            </Col>
          </Row>
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
