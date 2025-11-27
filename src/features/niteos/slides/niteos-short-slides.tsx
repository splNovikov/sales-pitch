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
  TeamOutlined,
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
  ShopOutlined,
  SettingOutlined,
  CloseOutlined,
  TagOutlined,
  TrophyOutlined,
  BankOutlined,
  BuildOutlined,
  SafetyOutlined,
  WarningTwoTone,
  CreditCardOutlined,
  MessageOutlined,
  RobotOutlined,
  ApiOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Short slides data for Niteos presentation
 * Focused on understanding the company and solving Pain #1 with AI
 */
export const niteosShortSlides: SlideData[] = [
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
            НИТЕОС
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Крупнейший российский производитель светодиодных светильников
          </Paragraph>
          <Link
            href="https://niteos.ru"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--app-font-size-lg)',
              fontWeight: 600,
            }}
          >
            niteos.ru
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
    id: 'key-contacts',
    header: 'Ключевые контакты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Основной контакт для переговоров
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="ФИО">
              <Text strong>Исламов Артур Айратович</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Должность">
              Коммерческий директор
            </Descriptions.Item>
            <Descriptions.Item label="Роль">
              Директор по продажам / Управление клиентской базой
            </Descriptions.Item>
            <Descriptions.Item label="Статус">
              <Tag color="green">ОСНОВНОЙ КОНТАКТ</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Интересы">
              ROI, качество обработки заявок, автоматизация, брендинг
            </Descriptions.Item>
            <Descriptions.Item label="Условие">
              <Text type="warning" strong>
                Готов слушать предложения ПРИ УСЛОВИИ четкого плана ROI
              </Text>
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            ЛПР для утверждения
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="ФИО">
              <Text strong>Калугин Антон Андреевич</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Должность">
              Генеральный директор
            </Descriptions.Item>
            <Descriptions.Item label="Роль">
              Финальное утверждение крупных контрактов
            </Descriptions.Item>
          </Descriptions>
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
            <Text strong>НИТЕОС</Text> — крупнейший российский производитель и
            поставщик современных энергоэффективных светодиодных светильников.
            Более <Text strong>15 лет опыта</Text> в производстве светового
            оборудования.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Масштаб операций
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  9 000+
                </Title>
                <Text>Реализованных проектов</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  200+
                </Title>
                <Text>Серий светильников</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  1 500+
                </Title>
                <Text>Нестандартных типов</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  200 000+
                </Title>
                <Text>Светильников произведено</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  2 000+
                </Title>
                <Text>Организаций-клиентов</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  4 000+
                </Title>
                <Text>Расчетов освещения</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Производственные мощности
          </Title>
          <List
            size="small"
            dataSource={[
              'Производство в г. Казань',
              'Собственное конструкторское бюро (R&D)',
              'Развитая сеть производственных партнеров',
              'Минимальный срок производства: 5 дней',
              'Гарантийный срок: 100 000 часов',
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
    id: 'management',
    header: 'Ключевые лица, принимающие решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="green" style={{ marginBottom: 8 }}>
                  ОСНОВНОЙ КОНТАКТ
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Исламов Артур Айратович
                </Title>
                <Text type="secondary">Коммерческий директор</Text>
                <Divider style={{ margin: '8px 0' }} />
                <List
                  size="small"
                  dataSource={[
                    'Управление отделом продаж',
                    'Ответственен за ROI',
                    'Недоволен текущим IT-подрядчиком',
                    'Готов слушать при условии плана ROI',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  ЛПР
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Калугин Антон Андреевич
                </Title>
                <Text type="secondary">Генеральный директор</Text>
                <Divider style={{ margin: '8px 0' }} />
                <List
                  size="small"
                  dataSource={[
                    'Стратегические решения',
                    'Управление производством',
                    'Утверждение крупных контрактов',
                    'Контроль качества',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="orange" style={{ marginBottom: 8 }}>
                  СОБСТВЕННИК
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Бикмуллин Марат Габдулгазизович
                </Title>
                <Text type="secondary">Учредитель / Собственник</Text>
                <Divider style={{ margin: '8px 0' }} />
                <List
                  size="small"
                  dataSource={[
                    'Утверждение инвестиций',
                    'Стратегическое развитие',
                    'Существенные договоры',
                    'Партнерства',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'pain-points-overview',
    header: 'Критичные боли компании',
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
                  <Text strong>Боль #1: Качество заявок</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Двухуровневая система с человеческим фактором
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
                  <Text strong>Боль #2: Разрозненные таблицы</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Нет единой базы данных
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
                  <Text strong>Боль #3: Устаревший бренд</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Визуальный стиль не обновлялся
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
                  <Text strong>Боль #4: Отрицательный ROI</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Текущий IT-подрядчик не решил проблемы
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
              'Падение выручки на -11% (23.8 млн руб.)',
              'Потеря крупных контрактов (15 млн руб.)',
              'Потеря клиентов из-за качества обработки',
              'Потеря времени сотрудников (20-30% рабочего времени)',
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
    id: 'pain-1-requests',
    header: 'Боль #1: Качество поступающей заявки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Двухуровневая система обработки
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Уровень 1 — Распределение заявки</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Определить, что требуется сделать',
                      'Грамотно распределить заявку',
                      'ПРОБЛЕМА: Человеческий фактор',
                      'Сотрудник не открывает документацию',
                      'Не читают и не анализируют информацию',
                      'Заявка неправильно распределяется',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
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
                  <Text strong>Уровень 2 — Анализ заявки</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Понимают, что заявка недозаполнена',
                      'Выявляется неправильное распределение',
                      'РЕЗУЛЬТАТ: Теряется время',
                      'Клиенты уходят',
                      'Срываются сроки',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Нужное решение
          </Title>
          <List
            size="small"
            dataSource={[
              'Система управления заявками с автоматизацией маршрутизации',
              'Чек-листы и контроль качества на уровне 1',
              'Система оповещений при недозаполненных заявках',
              'Аналитика по временам обработки заявок',
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
    id: 'pain-2-tables',
    header: 'Боль #2: Разрозненные таблицы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Проблемы текущей системы
          </Title>
          <List
            size="small"
            dataSource={[
              'Нет единой базы данных',
              'Информация дублируется (копируется вручную)',
              'Нет актуальности данных (разные версии таблиц)',
              'Невозможна быстрая выборка и анализ',
              'Нет интеграции между системами',
              'Сложно отслеживать статусы проектов',
              'Нет контроля доступа к конфиденциальной информации',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CloseOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined style={{ marginRight: 8 }} />
            Типы информации в разных таблицах
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Каталог продукции</Text>
                <div style={{ marginTop: 8 }}>
                  <Text>200+ серий</Text>
                  <br />
                  <Text>1500+ модификаций</Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Клиентская база</Text>
                <div style={{ marginTop: 8 }}>
                  <Text>2000+ организаций</Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Проекты</Text>
                <div style={{ marginTop: 8 }}>
                  <Text>9000+ реализованных</Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Расчеты освещения</Text>
                <div style={{ marginTop: 8 }}>
                  <Text>4000+ расчетов</Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Производственные планы</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Финансовые данные</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Нужное решение
          </Title>
          <List
            size="small"
            dataSource={[
              'Единая CRM система (Bitrix24, AmoCRM или custom)',
              'Единая база данных каталога',
              'Интеграция всех систем',
              'Аналитика и отчеты в режиме реального времени',
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
    id: 'pain-3-brand',
    header: 'Боль #3: Устаревший бренд',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Проблемы брендинга
          </Title>
          <List
            size="small"
            dataSource={[
              'Визуальный стиль (логотип, цвета) устарел',
              'Веб-сайт выглядит старомодно (по меркам 2025)',
              'Презентационные материалы не привлекают',
              'Снизилась узнаваемость на фоне конкурентов (ГАЛАД, ФЕРЕКС)',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CloseOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TagOutlined style={{ marginRight: 8 }} />
            Интересы компании
          </Title>
          <Paragraph>
            Готовы обновить бренд,{' '}
            <Text strong>если это повысит узнаваемость</Text>. Хотят
            соответствовать современным стандартам.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Нужное решение
          </Title>
          <List
            size="small"
            dataSource={[
              'Редизайн логотипа и фирменного стиля',
              'Обновление веб-сайта',
              'Обновление презентационных материалов',
              'Новые маркетинговые материалы',
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
    id: 'pain-4-roi',
    header: 'Боль #4: Отрицательный ROI от IT-подрядчика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Текущая ситуация
          </Title>
          <List
            size="small"
            dataSource={[
              'ROI — отрицательный (компания потеряла деньги)',
              'Решения не решили реальные проблемы',
              'Потрачены деньги впустую',
              'Результаты не измеримы',
              'Не помог улучшить обработку заявок',
              'Нет интеграции с основными системами',
              'Нет улучшения скорости продаж',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CloseOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Готовность слушать новые предложения
          </Title>
          <Paragraph>
            <Text strong>ДА, готов связываться с новым подрядчиком</Text>
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <Text strong>НО ТОЛЬКО если мы предложим:</Text>
          <List
            size="small"
            dataSource={[
              'Четкий план улучшения ROI в цифрах (план A, B, C)',
              'Измеримые метрики (KPI, сроки)',
              'Расчет финансовой отдачи',
              'Риск-менеджмент',
              'Гарантии результатов',
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
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Ключевое требование
          </Title>
          <Paragraph style={{ fontSize: '16px', fontStyle: 'italic' }}>
            "Связываться с новым IT-подрядчиком готов ТОЛЬКО если будет
            предложен четкий ПЛАН по улучшению ROI В ЦИФРАХ"
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'social-media',
    header: 'Социальные сети и интернет-присутствие',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            ВЫВОД: Компания ПОЛНОСТЬЮ отсутствует в социальных сетях
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                platform: 'LinkedIn',
                status: '❌ Не найдено',
                comment: 'Отсутствует корпоративный профиль',
              },
              {
                key: '2',
                platform: 'VK (ВКонтакте)',
                status: '❌ Не найдено',
                comment: 'Отсутствует официальная группа',
              },
              {
                key: '3',
                platform: 'Telegram',
                status: '❌ Не найдено',
                comment: 'Отсутствует официальный канал',
              },
              {
                key: '4',
                platform: 'Facebook',
                status: '❌ Не найдено',
                comment: 'Нет официального профиля',
              },
              {
                key: '5',
                platform: 'Instagram',
                status: '❌ Не найдено',
                comment: 'Отсутствует страница компании',
              },
              {
                key: '6',
                platform: 'YouTube',
                status: '❌ Не найдено',
                comment: 'Нет официального канала',
              },
              {
                key: '7',
                platform: 'Сайт компании',
                status: '✅ Есть',
                comment: 'https://niteos.ru — актуальный, развитый сайт',
              },
            ]}
            columns={[
              {
                title: 'Платформа',
                dataIndex: 'platform',
                key: 'platform',
              },
              {
                title: 'Статус',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
              },
              {
                title: 'Комментарий',
                dataIndex: 'comment',
                key: 'comment',
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MessageOutlined style={{ marginRight: 8 }} />
            Основное средство коммуникации
          </Title>
          <Paragraph>
            Контактная форма на сайте — время ответа:{' '}
            <Text strong>5 минут</Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'media-publications',
    header: 'Публикации в СМИ и новости',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Позитивные новости (2023-2025)
          </Title>
          <List
            size="small"
            dataSource={[
              {
                title: 'ИННОПРОМ-2023',
                date: '14 июля 2023',
                link: 'https://niteos.ru/company/news/innoprom_2023_priglashaem_na_stend_niteos_/',
                linkText: 'niteos.ru',
              },
              {
                title: 'Статья об энергоэффективности',
                date: '10 ноября 2025 — СВЕЖАЯ!',
                link: 'https://niteos.ru/company/news/energoeffektivnost_led_svetilnikov_kak_snizit_raskhody_na_elektroenergiyu_vmeste_s_niteos/',
                linkText: 'niteos.ru',
              },
              {
                title: 'Материал об импортозамещении',
                date: '1 июня 2024',
                link: 'https://niteos.ru/company/news/importozameshchenie_svetodiodnykh_svetilnikov/',
                linkText: 'niteos.ru',
              },
              {
                title: 'Упоминание на портале utilicon',
                date: '29.10.2025',
                link: 'https://utilicon.ru/tpost/n2c1tzg3g1-evolyutsiya-sveta-dlya-gorodov-ot-niteos',
                linkText: 'utilicon',
              },
              {
                title: 'Упоминание на портале Elec.ru',
                date: '14.07.2023',
                link: 'https://www.elec.ru/news/2023/07/14/mishustin-i-minnikhanov-ledel-i-fereks-na-innoprom.html',
                linkText: 'elec.ru',
              },
            ]}
            renderItem={item => (
              <List.Item style={{ justifyContent: 'flex-start' }}>
                <List.Item.Meta
                  title={
                    <Space>
                      <Text strong>{item.title}</Text>
                      {item.link && (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '12px' }}
                        >
                          ({item.linkText})
                        </Link>
                      )}
                    </Space>
                  }
                  description={item.date}
                />
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Видимость в рейтингах
          </Title>
          <Paragraph>
            НИТЕОС <Text strong>НЕ ВКЛЮЧЕНА</Text> в топ-рейтинг российских
            производителей 2025 года.
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <Text strong>Лидеры включают:</Text>
          <List
            size="small"
            dataSource={[
              'ГАЛАД (#1)',
              'ФЕРЕКС (#2)',
              'Varton',
              'Navigator',
              'ARTELAMP',
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
    id: 'competitors',
    header: 'Анализ конкурентов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Основные конкуренты
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="gold">ТОП-1</Tag>
                  <Title level={5} style={{ marginTop: 0 }}>
                    ГАЛАД
                  </Title>
                  <Text type="secondary">Премиум-лидер</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Позиция: ТОП-1 рейтинга 2025',
                      'История: 25+ лет',
                      'Крупные мощности',
                      'Ценовой сегмент: Премиум',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
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
                  <Tag color="silver">ТОП-2</Tag>
                  <Title level={5} style={{ marginTop: 0 }}>
                    ФЕРЕКС
                  </Title>
                  <Text type="secondary">Растущий лидер</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Позиция: ТОП-2 рейтинга 2025',
                      'История: 23 года',
                      'Производство: 50 000 шт/месяц',
                      'Входит в IEK GROUP',
                      'Ценовой сегмент: ЖКХ, вандалозащита',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
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
                  <Tag color="blue">ТОП</Tag>
                  <Title level={5} style={{ marginTop: 0 }}>
                    Varton
                  </Title>
                  <Text type="secondary">Импортозамещение</Text>
                  <List
                    size="small"
                    dataSource={[
                      'В топ-лидерах импортозамещения',
                      'Ниша: Офисное освещение',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
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
                  <Tag color="cyan">ТОП</Tag>
                  <Title level={5} style={{ marginTop: 0 }}>
                    Navigator
                  </Title>
                  <Text type="secondary">Массовый бюджет</Text>
                  <List
                    size="small"
                    dataSource={[
                      'ТОП промышленные светильники',
                      'Самые низкие цены',
                      'Огромный объем продаж',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
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
                Конкурентные преимущества НИТЕОС
              </Title>
              <List
                size="small"
                dataSource={[
                  'Широкий ассортимент: 200+ серий, 1500+ модификаций',
                  'Собственное КБ и разработки',
                  'Универсальность (все сегменты)',
                  '15 лет опыта, 9000+ проектов',
                  'Российское производство',
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
                Конкурентные недостатки НИТЕОС
              </Title>
              <List
                size="small"
                dataSource={[
                  'Не входит в топ-рейтинги 2025',
                  'Отсутствие социальных сетей',
                  'Слабый бренд (не обновлялся)',
                  'Ограниченные мощности (15К vs 50К у ФЕРЕКС)',
                  'Выручка падает (-11% в 2024)',
                  'Проблемы с обработкой заявок',
                  'Разрозненные таблицы вместо системы',
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
    id: 'case-solution-title',
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
        <Title level={1} style={{ textAlign: 'center', marginBottom: 0 }}>
          Решение кейса
        </Title>
        <Divider
          style={{ margin: 'var(--app-spacing-lg) 0', width: '200px' }}
        />
        <Paragraph
          style={{
            fontSize: 'var(--app-font-size-xl)',
            textAlign: 'center',
            maxWidth: '800px',
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          "Замена оператора на уровне 1 — работой ИИ"
        </Paragraph>
        <Paragraph
          style={{ marginTop: 'var(--app-spacing-lg)', marginBottom: 0 }}
        >
          <Text type="secondary" italic>
            Автоматизация обработки заявок с помощью искусственного интеллекта
          </Text>
        </Paragraph>
      </Space>
    ),
  },
  {
    id: 'case-problem',
    header: 'Проблема: Человеческий фактор на уровне 1',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Текущая ситуация (БЕЗ ИИ)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Оператор на уровне 1:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Не открывает документацию',
                      'Не читает входящую информацию',
                      'Не анализирует контекст заявки',
                      'Неправильно распределяет заявку',
                      'Теряется время на переделку',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <CloseOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
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
                  <Text strong>Последствия:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Заявка попадает не к тому специалисту',
                      'На уровне 2 обнаруживаются ошибки',
                      'Клиенты уходят из-за задержек',
                      'Срываются сроки выполнения',
                      'Потеря выручки: -11%',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <WarningOutlined
                          style={{ color: '#ff4d4f', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
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
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Потери времени:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#ff4d4f' }}>
                  20-30%
                </Title>
                <Text type="secondary">Рабочего времени сотрудников</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Потеря выручки:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#ff4d4f' }}>
                  -23.8 млн руб.
                </Title>
                <Text type="secondary">В 2024 году</Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'case-solution-ai',
    header: 'Решение: ИИ заменяет оператора на уровне 1',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RobotOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Как работает ИИ-система
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Заявка поступает в систему',
                description:
                  'Любой канал: сайт, email, Telegram, WhatsApp, звонок',
                icon: <FileTextOutlined />,
              },
              {
                title: 'ИИ анализирует содержимое',
                description:
                  'Читает текст, анализирует изображения, извлекает ключевую информацию',
                icon: <ThunderboltOutlined />,
              },
              {
                title: 'ИИ определяет тип заявки',
                description:
                  'Классифицирует заявку по категориям: расчет освещения, заказ продукции, консультация и т.д.',
                icon: <TagOutlined />,
              },
              {
                title: 'ИИ проверяет полноту данных',
                description:
                  'Определяет недостающие поля, критичные для обработки',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'ИИ маршрутизирует заявку',
                description:
                  'Автоматически направляет к нужному специалисту на уровне 2',
                icon: <ApiOutlined />,
              },
              {
                title: 'ИИ уведомляет участников',
                description:
                  'Отправляет уведомления менеджеру и клиенту о статусе',
                icon: <MessageOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined
              style={{ color: '#52c41a', marginRight: 8 }}
            />
            Преимущества ИИ-решения
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Скорость обработки:</Text>
                  <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                    Мгновенно
                  </Title>
                  <Text type="secondary">24/7 без перерывов</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Точность распределения:</Text>
                  <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                    95%+
                  </Title>
                  <Text type="secondary">Правильная маршрутизация</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Экономия времени:</Text>
                  <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                    80-100 ч/мес
                  </Title>
                  <Text type="secondary">Сотрудников</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Снижение ошибок:</Text>
                  <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                    -70%
                  </Title>
                  <Text type="secondary">Неправильных распределений</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'case-comparison',
    header: 'Сравнение: До и После',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Метрики эффективности
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                metric: 'Время обработки заявки',
                before: '2-3 часа',
                after: '5-10 минут',
                improvement: '-85%',
                status: 'success',
              },
              {
                key: '2',
                metric: 'Точность распределения',
                before: '60-70%',
                after: '95%+',
                improvement: '+35%',
                status: 'success',
              },
              {
                key: '3',
                metric: 'Ошибки маршрутизации',
                before: '30-40%',
                after: '5%',
                improvement: '-87%',
                status: 'success',
              },
              {
                key: '4',
                metric: 'Время работы',
                before: '8 часов/день',
                after: '24/7',
                improvement: '+300%',
                status: 'success',
              },
              {
                key: '5',
                metric: 'Потеря заявок',
                before: '15%',
                after: '0%',
                improvement: '-100%',
                status: 'success',
              },
            ]}
            columns={[
              {
                title: 'Метрика',
                dataIndex: 'metric',
                key: 'metric',
              },
              {
                title: 'Было (без ИИ)',
                dataIndex: 'before',
                key: 'before',
                align: 'center',
              },
              {
                title: 'Стало (с ИИ)',
                dataIndex: 'after',
                key: 'after',
                align: 'center',
                render: (text) => <Text strong>{text}</Text>,
              },
              {
                title: 'Улучшение',
                dataIndex: 'improvement',
                key: 'improvement',
                align: 'center',
                render: (improvement, record) => (
                  <Tag color={record.status}>{improvement}</Tag>
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
                Без ИИ (текущее состояние)
              </Title>
              <List
                size="small"
                dataSource={[
                  'Оператор не читает документацию',
                  'Неправильное распределение заявок',
                  'Ошибки обнаруживаются только на уровне 2',
                  'Клиенты уходят из-за задержек',
                  'Потеря выручки: -11%',
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
                С ИИ (после внедрения)
              </Title>
              <List
                size="small"
                dataSource={[
                  'ИИ анализирует все входящие данные',
                  'Автоматическая правильная маршрутизация',
                  'Проверка полноты данных на входе',
                  'Мгновенная обработка 24/7',
                  'Возврат клиентов: +7-10%',
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
    id: 'case-roi',
    header: 'ROI решения: ИИ вместо оператора',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Финансовые показатели
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Текущие потери:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#ff4d4f' }}>
                  -23.8 млн руб./год
                </Title>
                <Text type="secondary">Из-за проблем с обработкой заявок</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Экономия времени:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  80-100 ч/мес
                </Title>
                <Text type="secondary">Сотрудников</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Инвестиция в ИИ-решение:</Text>
                <Title level={3} style={{ margin: '8px 0' }}>
                  400-600 тыс. руб.
                </Title>
                <Text type="secondary">Разработка и внедрение</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>Возврат клиентов:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  +2-3 млн руб./год
                </Title>
                <Text type="secondary">3-5% выручки</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            ROI решения
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Инвестиция:</Text>
                <Title level={3} style={{ margin: '8px 0' }}>
                  400-600 тыс. руб.
                </Title>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Возврат:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  2-3 млн руб./год
                </Title>
              </Card>
            </Col>
            <Col xs={24}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>ROI:</Text>
                <Title
                  level={2}
                  style={{ margin: '8px 0', color: '#52c41a' }}
                >
                  500-750%
                </Title>
                <Text type="secondary">В первый год</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Сроки внедрения
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Разработка ИИ-модуля">
              2-3 месяца
            </Descriptions.Item>
            <Descriptions.Item label="Интеграция с системой">
              1 месяц
            </Descriptions.Item>
            <Descriptions.Item label="Обучение и тестирование">
              1 месяц
            </Descriptions.Item>
            <Descriptions.Item label="Общий срок">
              <Text strong>4-5 месяцев</Text>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'case-technical',
    header: 'Техническая реализация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Архитектура решения
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Модуль приема заявок',
                description:
                  'Единая точка входа для всех каналов: сайт, email, Telegram, WhatsApp, звонки',
                icon: <GlobalOutlined />,
              },
              {
                title: 'ИИ-модуль анализа',
                description:
                  'NLP для обработки текста, компьютерное зрение для изображений, классификация заявок',
                icon: <RobotOutlined />,
              },
              {
                title: 'Модуль маршрутизации',
                description:
                  'Автоматическое определение нужного специалиста на основе типа заявки и загрузки',
                icon: <SettingOutlined />,
              },
              {
                title: 'Модуль валидации',
                description:
                  'Проверка полноты данных, определение критичных полей, запрос недостающей информации',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'Модуль уведомлений',
                description:
                  'Автоматические уведомления клиенту и менеджеру о статусе обработки заявки',
                icon: <MessageOutlined />,
              },
              {
                title: 'Модуль аналитики',
                description:
                  'Отслеживание метрик: время обработки, точность маршрутизации, конверсия',
                icon: <BarChartOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined
              style={{ color: '#52c41a', marginRight: 8 }}
            />
            Ключевые возможности ИИ
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Обработка текста</Text>
                <List
                  size="small"
                  dataSource={[
                    'Извлечение ключевой информации',
                    'Определение типа заявки',
                    'Анализ тональности',
                    'Выявление критичных параметров',
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
              <Card size="small">
                <Text strong>Обработка изображений</Text>
                <List
                  size="small"
                  dataSource={[
                    'Распознавание эскизов светильников',
                    'Анализ технических чертежей',
                    'Извлечение параметров из фото',
                    'Определение типа изделия',
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
              <Card size="small">
                <Text strong>Умная маршрутизация</Text>
                <List
                  size="small"
                  dataSource={[
                    'Определение нужного специалиста',
                    'Учет загрузки менеджеров',
                    'Приоритизация срочных заявок',
                    'История работы с клиентом',
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
              <Card size="small">
                <Text strong>Обучение и улучшение</Text>
                <List
                  size="small"
                  dataSource={[
                    'Самообучение на основе обратной связи',
                    'Улучшение точности со временем',
                    'Адаптация под специфику компании',
                    'Анализ успешных кейсов',
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
      </Space>
    ),
  },
  {
    id: 'case-results',
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
                  -85%
                </Title>
                <Text>Время обработки заявки</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    С 2-3 часов до 5-10 минут
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  -87%
                </Title>
                <Text>Ошибки маршрутизации</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    С 30-40% до 5%
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  +35%
                </Title>
                <Text>Точность распределения</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    С 60-70% до 95%+
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  -100%
                </Title>
                <Text>Потеря заявок</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    С 15% до 0%
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  +3-5%
                </Title>
                <Text>Возврат клиентов</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    2-3 млн руб./год
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  500-750%
                </Title>
                <Text>ROI</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    В первый год
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined
              style={{ color: '#52c41a', marginRight: 8 }}
            />
            Дополнительные преимущества
          </Title>
          <List
            size="small"
            dataSource={[
              'Работа 24/7 без выходных и перерывов',
              'Масштабируемость: обработка любого объема заявок',
              'Консистентность: одинаковое качество обработки',
              'Снижение нагрузки на сотрудников',
              'Возможность перераспределения ресурсов',
              'Накопление знаний: ИИ учится на каждом кейсе',
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
    id: 'case-next-steps',
    header: 'Следующие шаги',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            План внедрения
          </Title>
          <AnimatedSteps
            direction="vertical"
            size="small"
            stepInterval={2500}
            items={[
              {
                title: 'Этап 1: Анализ и проектирование (2 недели)',
                description:
                  'Изучение текущих процессов, проектирование ИИ-модуля, определение требований',
                icon: <FileTextOutlined />,
              },
              {
                title: 'Этап 2: Разработка ИИ-модуля (2-3 месяца)',
                description:
                  'Создание моделей обработки текста и изображений, модуль маршрутизации',
                icon: <ApiOutlined />,
              },
              {
                title: 'Этап 3: Интеграция (1 месяц)',
                description:
                  'Подключение к существующим системам, настройка workflow',
                icon: <SettingOutlined />,
              },
              {
                title: 'Этап 4: Тестирование и обучение (1 месяц)',
                description:
                  'Тестирование на реальных заявках, обучение ИИ, настройка точности',
                icon: <CheckCircleOutlined />,
              },
              {
                title: 'Этап 5: Запуск и мониторинг',
                description:
                  'Постепенный запуск, мониторинг метрик, доработка по обратной связи',
                icon: <BarChartOutlined />,
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Гарантии и поддержка
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Гарантии точности:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Точность маршрутизации: 95%+',
                    'Если точность < 90%, доработка бесплатно',
                    'Постоянный мониторинг качества',
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
              <Card size="small">
                <Text strong>Поддержка:</Text>
                <List
                  size="small"
                  dataSource={[
                    '3 месяца бесплатной поддержки',
                    'Обучение ИИ на новых данных',
                    'Техническая поддержка 24/7',
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

