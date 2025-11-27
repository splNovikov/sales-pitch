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
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for Niteos presentation
 * Based on documentation in features/niteos/docs/Niteos-with-ROI-plan.md
 */
export const niteosSlides: SlideData[] = [
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
              ООО «НИТЕОС»
            </Descriptions.Item>
            <Descriptions.Item label="ИНН">1661025599</Descriptions.Item>
            <Descriptions.Item label="КПП">166101001</Descriptions.Item>
            <Descriptions.Item label="ОГРН">1101690022400</Descriptions.Item>
            <Descriptions.Item label="Адрес">
              г. Казань, ул. Дементьева, д. 2Б, корп. 4, офис 330
            </Descriptions.Item>
            <Descriptions.Item label="Телефон">
              <Link href="tel:+78432504051">+7 (843) 250-40-51</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              <Link href="mailto:mail@niteos.ru">mail@niteos.ru</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Веб-сайт">
              <Link href="https://niteos.ru" target="_blank">
                https://niteos.ru
              </Link>
            </Descriptions.Item>
            <Descriptions.Item label="Дата регистрации">
              13 апреля 2010 года
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BankOutlined style={{ marginRight: 8 }} />
            Банковские реквизиты
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Банк">
              ПАО Сбербанк, отделение «БАНК ТАТАРСТАН» № 8610
            </Descriptions.Item>
            <Descriptions.Item label="БИК">049205603</Descriptions.Item>
            <Descriptions.Item label="Расчетный счет">
              40702810762000018094
            </Descriptions.Item>
            <Descriptions.Item label="Корреспондентский счет">
              30101810600000000603
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'financials',
    header: 'Финансовые показатели 2024',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Основные показатели
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                indicator: 'Выручка',
                value: '216 262 000 ₽',
                dynamics: '-11%',
                status: 'error',
              },
              {
                key: '2',
                indicator: 'Прибыль (чистая)',
                value: '13 851 000 ₽',
                dynamics: '≈ 0%',
                status: 'default',
              },
              {
                key: '3',
                indicator: 'Рентабельность',
                value: '6.4%',
                dynamics: 'Умеренная',
                status: 'default',
              },
              {
                key: '4',
                indicator: 'Стоимость компании',
                value: '62 437 916 ₽',
                dynamics: '+13%',
                status: 'success',
              },
            ]}
            columns={[
              {
                title: 'Показатель',
                dataIndex: 'indicator',
                key: 'indicator',
              },
              {
                title: 'Значение',
                dataIndex: 'value',
                key: 'value',
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
                  'Снижение выручки на 11%',
                  'Потеря крупных контрактов',
                  'Неэффективная обработка заявок',
                  'Потеря ~23.8 млн руб. в 2024',
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
                  'Стабильная прибыль',
                  'Рост стоимости компании +13%',
                  'Хорошее управление издержками',
                  'Налоги: 30.1 млн руб. (вклад в бюджет)',
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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Участие в торгах
          </Title>
          <Descriptions column={2} bordered size="small">
            <Descriptions.Item label="Участие в торгах">
              55 процедур
            </Descriptions.Item>
            <Descriptions.Item label="Победы">
              <Text strong>15 контрактов (27% успешность)</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Победы в судах" span={2}>
              40% процессов как истец
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
    id: 'business-areas',
    header: 'Сфера деятельности',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Основной вид деятельности
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="ОКВЭД">
              27.40 — Производство электрических ламп и осветительного
              оборудования
            </Descriptions.Item>
            <Descriptions.Item label="Дополнительные виды">
              11+ направлений хозяйственной деятельности
            </Descriptions.Item>
            <Descriptions.Item label="Специализация">
              Разработка, производство и поставка светодиодных светильников и
              систем освещения
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TagOutlined style={{ marginRight: 8 }} />
            Основные категории продукции
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Уличное освещение</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Street lighting
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Промышленное освещение</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Светодиодное
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Архитектурное освещение</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Взрывозащищенные</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Ex-исполнение
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Пожаробезопасные</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Спецобъекты</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  ЖКХ, спорт, офис, торговля, АЗС
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Декоративное освещение</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  RGB, SMART IC
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Вторичная оптика</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Комплектующие
                </Text>
              </Card>
            </Col>
          </Row>
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
    id: 'strategy-overview',
    header: 'Стратегия предложения IT услуг',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            КЛЮЧЕВОЙ МОМЕНТ
          </Title>
          <Paragraph style={{ fontSize: '16px', fontStyle: 'italic' }}>
            Артур готов слушать ТОЛЬКО при условии четкого ПЛАНА ПО УЛУЧШЕНИЮ
            ROI В ЦИФРАХ
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Текущее состояние (Проблемы)
          </Title>
          <List
            size="small"
            dataSource={[
              'Выручка: 216 млн (↓-11% год-на-год)',
              'Потеря: ~23.8 млн руб. в 2024 vs 2023',
              'Основная причина: потеря клиентов из-за качества обработки заявок',
              'Потеря контракта 15 млн на счету потери качества обработки',
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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Расчет финансовой отдачи
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Текущие потери:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#ff4d4f' }}>
                  -23.8 млн руб./год
                </Title>
                <Text type="secondary">-11% выручки</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Возвращение (консервативно):</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  +10.8 млн руб./год
                </Title>
                <Text type="secondary">+5% выручки</Text>
              </Card>
            </Col>
          </Row>
          <Divider style={{ margin: '16px 0' }} />
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Инвестиция в IT:</Text>
                <Title level={3} style={{ margin: '8px 0' }}>
                  1-2 млн руб.
                </Title>
                <Text type="secondary">Первый год</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>ROI:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  540-1080%
                </Title>
                <Text type="secondary">В первый год</Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'roi-variant-a',
    header: 'Вариант A: Минимальный план',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Параметры плана
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Инвестиция">
              <Text strong>400 тыс. руб.</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Срок">6 месяцев</Descriptions.Item>
            <Descriptions.Item label="Тип">Стартер</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            Действия
          </Title>
          <List
            size="small"
            dataSource={[
              'Система управления заявками (workflow)',
              'Чек-листы для уровня 1 обработки',
              'Оповещения при недозаполненных заявках',
              'Базовая аналитика времени обработки',
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
            <BarChartOutlined style={{ marginRight: 8 }} />
            Результат
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Сокращение времени:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  20%
                </Title>
                <Text type="secondary">Экономия 80-100 часов/месяц</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Снижение ошибок:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  30%
                </Title>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Возврат клиентов:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  2-3 млн
                </Title>
                <Text type="secondary">3-5%</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>ROI:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  500-750%
                </Title>
                <Text type="secondary">В первый год</Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'roi-variant-b',
    header: 'Вариант B: Оптимальный план (РЕКОМЕНДУЕТСЯ)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            РЕКОМЕНДУЕМЫЙ ПОДХОД
          </Title>
          <Paragraph>Баланс между инвестициями и результатами</Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Параметры плана
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Инвестиция">
              <Text strong>1.2 млн руб.</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Срок">12 месяцев</Descriptions.Item>
            <Descriptions.Item label="Тип">ОПТИМУМ</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            Действия
          </Title>
          <List
            size="small"
            dataSource={[
              'CRM система (Bitrix24, AmoCRM или custom)',
              'Система управления заявками с маршрутизацией',
              'Единая база данных каталога',
              'Интеграция всех таблиц в единую систему',
              'Аналитика и отчеты в реальном времени',
              'Обновление брендинга (логотип, цвета)',
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
            <BarChartOutlined style={{ marginRight: 8 }} />
            Результат
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Сокращение времени:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  40%
                </Title>
                <Text type="secondary">Экономия 160-200 часов/месяц</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Снижение ошибок:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  50%
                </Title>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Возврат клиентов:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  5-7 млн
                </Title>
                <Text type="secondary">7-10%</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Продуктивность команды:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  +20%
                </Title>
              </Card>
            </Col>
            <Col xs={24}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>ROI:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  417-583%
                </Title>
                <Text type="secondary">В первый год</Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'roi-variant-c',
    header: 'Вариант C: Максимальный план',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Параметры плана
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Инвестиция">
              <Text strong>2.5 млн руб.</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Срок">18 месяцев</Descriptions.Item>
            <Descriptions.Item label="Тип">Максимум</Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            Действия
          </Title>
          <List
            size="small"
            dataSource={[
              'Все как в Варианте B',
              'Социальные сети (LinkedIn, VK, YouTube)',
              'E-commerce на сайте',
              'Портал для партнеров',
              'Полный редизайн веб-сайта и брендинга',
              'Business Intelligence (BI) системы',
              'Интеграция с маркетплейсами',
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
            <BarChartOutlined style={{ marginRight: 8 }} />
            Результат
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Все результаты из Варианта B</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Новый канал продаж (соцсети):</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  +3-5 млн
                </Title>
                <Text type="secondary">3-5% выручки</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Новый канал продаж (e-commerce):</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  +2-3 млн
                </Title>
                <Text type="secondary">2-3% выручки</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Улучшение узнаваемости бренда</Text>
              </Card>
            </Col>
            <Col xs={24}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong>ROI:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  240-300%
                </Title>
                <Text type="secondary">В первый год</Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'roi-comparison',
    header: 'Сравнение вариантов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                metric: 'Инвестиция',
                variantA: '400 тыс',
                variantB: '1.2 млн',
                variantC: '2.5 млн',
              },
              {
                key: '2',
                metric: 'Время',
                variantA: '6 месяцев',
                variantB: '12 месяцев',
                variantC: '18 месяцев',
              },
              {
                key: '3',
                metric: 'Экономия времени',
                variantA: '20%',
                variantB: '40%',
                variantC: '50%',
              },
              {
                key: '4',
                metric: 'Возврат клиентов',
                variantA: '2-3 млн',
                variantB: '5-7 млн',
                variantC: '8-13 млн',
              },
              {
                key: '5',
                metric: 'ROI (1 год)',
                variantA: '500-750%',
                variantB: '417-583%',
                variantC: '240-300%',
              },
              {
                key: '6',
                metric: 'Рекомендация',
                variantA: 'Стартер',
                variantB: 'ОПТИМУМ',
                variantC: 'Максимум',
              },
            ]}
            columns={[
              {
                title: 'Метрика',
                dataIndex: 'metric',
                key: 'metric',
              },
              {
                title: 'Вариант A',
                dataIndex: 'variantA',
                key: 'variantA',
                align: 'center',
              },
              {
                title: 'Вариант B',
                dataIndex: 'variantB',
                key: 'variantB',
                align: 'center',
                render: text => (
                  <Text strong style={{ color: '#1890ff' }}>
                    {text}
                  </Text>
                ),
              },
              {
                title: 'Вариант C',
                dataIndex: 'variantC',
                key: 'variantC',
                align: 'center',
              },
            ]}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            РЕКОМЕНДУЕМЫЙ ПОДХОД
          </Title>
          <Paragraph>
            <Text strong>Вариант B (Оптимальный)</Text> — баланс между
            инвестициями и результатами
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'guarantees',
    header: 'Гарантии и KPI',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Как обеспечить гарантии?
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  Контрактный KPI
                </Title>
                <Paragraph style={{ fontSize: '12px' }}>
                  "Если сокращение времени обработки &lt; 30%, получает скидку
                  20%"
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <CreditCardOutlined
                    style={{ color: '#1890ff', marginRight: 8 }}
                  />
                  Поэтапная оплата
                </Title>
                <List
                  size="small"
                  dataSource={[
                    '30% при подписании',
                    '40% после прототипа',
                    '30% после полного внедрения',
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
                <Title level={5} style={{ marginTop: 0 }}>
                  <TeamOutlined style={{ marginRight: 8 }} />
                  Служба поддержки
                </Title>
                <Paragraph style={{ fontSize: '12px' }}>
                  <Text strong>3 месяца бесплатно</Text>
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <BarChartOutlined style={{ marginRight: 8 }} />
                  Метрики ежемесячно
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Время обработки заявок',
                    '% завершенных проектов в срок',
                    'Возврат клиентов',
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
    id: 'priorities',
    header: 'Приоритизация потребностей',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <Tag color="red">КРИТИЧНО</Tag> Priority 1 (Месяц 1)
          </Title>
          <List
            size="small"
            dataSource={[
              'Система управления заявками с workflow',
              'Чек-листы и контроль качества на уровне 1',
              'Аналитика времени обработки',
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
            <Tag color="orange">ВЫСОКИЙ</Tag> Priority 2 (Месяцы 2-6)
          </Title>
          <List
            size="small"
            dataSource={[
              'CRM система',
              'Единая база данных',
              'Интеграция существующих таблиц',
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
            <Tag color="blue">СРЕДНИЙ</Tag> Priority 3 (Месяцы 6-12)
          </Title>
          <List
            size="small"
            dataSource={[
              'Обновление брендинга',
              'Социальные сети',
              'E-commerce',
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
            <Tag color="default">НИЗКИЙ</Tag> Priority 4 (Месяцы 12-18)
          </Title>
          <List
            size="small"
            dataSource={[
              'Портал для партнеров',
              'Business Intelligence',
              'Интеграция маркетплейсы',
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
            <Text strong>НИТЕОС</Text> — компания с{' '}
            <Text strong>хорошим производством</Text>, но{' '}
            <Text strong type="danger">
              критическими операционными проблемами
            </Text>
            , которые приводят к:
          </Paragraph>
          <List
            size="small"
            dataSource={[
              'Потере клиентов (падение выручки -11%)',
              'Потере контрактов (15 млн упущено)',
              'Неэффективной обработке заявок',
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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Ключевой контакт
          </Title>
          <Paragraph>
            <Text strong>Коммерческий директор Артур Айратович</Text> — ключевой
            контакт, готовый решить проблему при условии четкого плана ROI.
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Возможность для IT-подрядчика
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Инвестиция:</Text>
                <Title level={3} style={{ margin: '8px 0' }}>
                  1.2 млн руб.
                </Title>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Возврат:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  5-7 млн руб.
                </Title>
                <Text type="secondary">В первый год</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>ROI:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  417-583%
                </Title>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Долгосрочное партнерство:</Text>
                <Title level={3} style={{ margin: '8px 0' }}>
                  200-500 тыс/год
                </Title>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Ключ к успеху
          </Title>
          <Paragraph style={{ fontSize: '16px', fontStyle: 'italic' }}>
            Подготовить четкий ПЛАН ПО УЛУЧШЕНИЮ ROI В ЦИФРАХ перед встречей с
            Артуром
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
                  ОСНОВНОЙ КОНТАКТ
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Исламов Артур Айратович
                </Title>
                <Text type="secondary">Коммерческий директор</Text>
                <Divider style={{ margin: '12px 0' }} />
                <Text>
                  <Text strong>Готовность:</Text> Слушает предложения при
                  условии плана ROI
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
                  УТВЕРЖДЕНИЕ
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Калугин Антон Андреевич
                </Title>
                <Text type="secondary">Генеральный директор</Text>
                <Divider style={{ margin: '12px 0' }} />
                <Text>
                  <Text strong>Роль:</Text> Финальное утверждение крупных
                  контрактов
                </Text>
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
                <Link href="tel:+78432504051" style={{ fontSize: '16px' }}>
                  +7 (843) 250-40-51
                </Link>
              </Space>
              <Space>
                <MailOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link href="mailto:mail@niteos.ru" style={{ fontSize: '16px' }}>
                  mail@niteos.ru
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
                  href="https://niteos.ru"
                  target="_blank"
                  style={{ fontSize: '16px' }}
                >
                  https://niteos.ru
                </Link>
              </Space>
              <Text type="secondary" style={{ marginTop: 8 }}>
                г. Казань, ул. Дементьева, д. 2Б, корп. 4, офис 330
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
