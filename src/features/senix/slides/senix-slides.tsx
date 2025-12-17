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
  Alert,
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
  StarOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  PoweroffOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { senixCreatedAt } from './senix.meta';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for SENIX (ООО "Ят-Рус") company analysis presentation
 * Based on comprehensive analysis document SENIX-analysis.md
 */
export const senixSlides: SlideData[] = [
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
            SENIX
          </Title>
          <Title level={2} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            Анализ компании (ООО "Ят-Рус")
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginBottom: 0,
              color: '#595959',
            }}
          >
            Портрет компании и возможности IT сотрудничества
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
          {formatDateForSlide(senixCreatedAt)} • Москва
        </Text>
      </Space>
    ),
  },
  {
    id: 'section-general-info',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Общая информация о компании"
        subtitle="Юридические данные, структура и предмет деятельности"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop"
        imageAlt="Бизнес и компания"
      />
    ),
  },
  {
    id: 'company-legal-data',
    header: 'Юридические данные',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Реквизиты компании
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Наименование">
              ООО "Ят-Рус"
            </Descriptions.Item>
            <Descriptions.Item label="ИНН">7743398440</Descriptions.Item>
            <Descriptions.Item label="ОГРН">1227700751090</Descriptions.Item>
            <Descriptions.Item label="Дата регистрации">
              14 ноября 2022 года
            </Descriptions.Item>
            <Descriptions.Item label="Юридический адрес">
              г. Москва, Михалковская ул., 63Б с4 (офис представительства)
            </Descriptions.Item>
            <Descriptions.Item label="Основной сервис-центр">
              <EnvironmentOutlined style={{ marginRight: 4 }} />
              Москва, ул. Гвардейская, д. 3 кор. 1
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Собственность и структура
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Единственный учредитель">
              Иностранная организация "ЯТ (Г.К.) КО., ЛИМИТЕД" (100% доля)
            </Descriptions.Item>
            <Descriptions.Item label="Генеральный директор">
              Лань Фан (назначен 2 мая 2023 года)
            </Descriptions.Item>
            <Descriptions.Item label="Численность сотрудников">
              <Space direction="vertical" size="small">
                <Text>2022 год: 1 человек</Text>
                <Text>2024 год: 13 человек</Text>
                <Tag color="green">Тенденция: активный рост</Tag>
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Предмет деятельности
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            ООО "Ят-Рус" работает в сфере{' '}
            <Text strong>
              оптовой торговли садово-огородной техникой и инвентарём
            </Text>
            . Компания является официальным импортером и представителем в
            России бренда <Text strong>SENIX</Text> – собственной торговой
            марки китайского производителя высокотехнологичной техники.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'section-history',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="История и предпосылки развития"
        subtitle="Родительская компания, производственная база и бизнес-модель"
        imageSrc="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop"
        imageAlt="История и развитие"
      />
    ),
  },
  {
    id: 'parent-company',
    header: 'Родительская компания: Zhejiang YAT Electrical Appliance',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Основание и развитие
          </Title>
          <List
            dataSource={[
              {
                label: 'Год основания',
                value: '2002',
              },
              {
                label: 'Место основания',
                value: 'Город Нинбо, провинция Чжэцзян, Китай',
              },
              {
                label: 'Уставный капитал',
                value: '51 миллион USD',
              },
              {
                label: 'Ключевой этап (2008)',
                value:
                  'YAT стала ведущим мировым производителем электрических цепных пил с объемом продаж свыше 1 млн единиц в год',
              },
              {
                label: 'Первое достижение',
                value:
                  'YAT первой среди китайских компаний получила GS сертификат на электрические цепные пилы',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Space>
                  <Text strong style={{ minWidth: '180px' }}>
                    {item.label}:
                  </Text>
                  <Text>{item.value}</Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Производственная база
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{ backgroundColor: '#f0f0f0', height: '100%' }}
              >
                <Text strong>
                  <EnvironmentOutlined style={{ marginRight: 8 }} />
                  Производственные кластеры (3 центра)
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'г. Цзясинь (Чжэцзян, Китай) – производство',
                    'г. Нинбо (Чжэцзян, Китай) – производство и R&D центр',
                    'г. Монтерее (Мексика) – производство',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={16}>
              <Card
                size="small"
                style={{ backgroundColor: '#e6f7ff', height: '100%' }}
              >
                <Text strong>
                  <ThunderboltOutlined style={{ marginRight: 8 }} />
                  Научно-исследовательская деятельность
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Более 200 высококвалифицированных инженеров',
                    'Собственный центр исследований и разработок',
                    'Испытательная лаборатория и полигон',
                    'Постоянное совершенствование технологии батарей и бесщеточных моторов',
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
      </Space>
    ),
  },
  {
    id: 'business-model',
    header: 'Бизнес-модель YAT Group',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Структура бизнеса
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{ backgroundColor: '#e6f7ff', height: '100%' }}
              >
                <Text strong>
                  <ShopOutlined style={{ marginRight: 8 }} />
                  B2B сегмент (основное направление)
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'Поставляет компоненты и готовую продукцию более чем 100 международным брендам',
                    'Крупные клиенты: компании из США, Германии, Японии',
                    'Специализация: садовая техника и электроинструмент',
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
              <Card
                size="small"
                style={{ backgroundColor: '#fff7e6', height: '100%' }}
              >
                <Text strong>
                  <StarOutlined style={{ marginRight: 8 }} />
                  Собственные бренды (B2C)
                </Text>
                <List
                  size="small"
                  dataSource={[
                    'YAT – локальный бренд на китайском рынке',
                    'SENIX – профессиональный инструмент для Европы, России и Северной Америки',
                    'BOJET – полупрофессиональный/трейдсман сегмент',
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
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            История входа на российский рынок (SENIX)
          </Title>
          <List
            dataSource={[
              'Представлена ООО "Ят-Рус" в 2022 году',
              'Активное развитие с 2023-2024 годов',
              'Участие в выставке MITEX-2024 (5-8 ноября 2024) с внушительным стендом',
              'Активное развитие Telegram канала (@senix_rus, 3000+ подписчиков)',
              'Развертывание сервисной инфраструктуры в России',
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
    id: 'section-finances',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Финансовое положение"
        subtitle="Ключевые показатели, анализ и выводы"
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop"
        imageAlt="Финансы и аналитика"
      />
    ),
  },
  {
    id: 'financial-indicators',
    header: 'Ключевые финансовые показатели (2024)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                metric: 'Выручка',
                value: '272 млн рублей',
                trend: '↑ 800% (8x) vs 2023',
                status: 'success',
              },
              {
                key: '2',
                metric: 'Финансовый результат',
                value: '-27,8 млн рублей убытков',
                trend: '↓ убыток',
                status: 'error',
              },
              {
                key: '3',
                metric: 'Коэффициент автономии',
                value: '-0,08 (отрицательный)',
                trend: '⚠️ Риск',
                status: 'warning',
              },
              {
                key: '4',
                metric: 'Обеспеченность собственными средствами',
                value: '-0,17',
                trend: '⚠️ Риск',
                status: 'warning',
              },
              {
                key: '5',
                metric: 'Коэффициент абсолютной ликвидности',
                value: '0,06',
                trend: '⚠️ Низкая',
                status: 'warning',
              },
              {
                key: '6',
                metric: 'Налоги и взносы (2024)',
                value: '7,4 млн рублей',
                trend: '✓ Платежеспособна',
                status: 'success',
              },
              {
                key: '7',
                metric: 'Ранг по выручке в регионе',
                value: '2388-е место',
                trend: '–',
                status: 'default',
              },
              {
                key: '8',
                metric: 'Ранг по выручке в России',
                value: '5926-е место',
                trend: '–',
                status: 'default',
              },
            ]}
            columns={[
              {
                title: 'Метрика',
                dataIndex: 'metric',
                key: 'metric',
                width: '40%',
              },
              {
                title: 'Значение',
                dataIndex: 'value',
                key: 'value',
                width: '30%',
              },
              {
                title: 'Тренд',
                dataIndex: 'trend',
                key: 'trend',
                width: '30%',
                render: (text, record) => (
                  <Tag color={record.status}>{text}</Tag>
                ),
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
    id: 'financial-analysis',
    header: 'Анализ финансового положения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Положительные моменты
              </Title>
              <List
                size="small"
                dataSource={[
                  'Экспоненциальный рост выручки (800% за год) свидетельствует о сильном рыночном спросе',
                  'Отсутствие налоговых задолженностей – компания своевременно платит налоги',
                  'Отсутствие судебных споров и исполнительных производств (завершены все 3 старых дела)',
                  'Нет признаков однодневки',
                  'Структурированная иностранная собственность упрощает контроль',
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
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                Критические проблемы
              </Title>
              <List
                size="small"
                dataSource={[
                  'Убыточность при росте оборотов – инвестиционная или операционная неэффективность',
                  'Отрицательный коэффициент автономии (-0,08) – компания имеет больше обязательств, чем активов',
                  'Дефицит собственных средств (-0,17) – полная зависимость от внешнего финансирования',
                  'Критически низкая ликвидность (0,06) – недостаток свободных денежных средств',
                  'Финансовая нестабильность – невозможность самостоятельного развития без инвестиций',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <WarningOutlined
                      style={{ color: '#ff4d4f', marginRight: 8 }}
                    />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Вывод по финансам
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Компания находится в фазе{' '}
            <Text strong>
              агрессивного расширения рынка с целью захвата доли и пока не
              ориентирована на прибыльность
            </Text>
            . Это типично для новых игроков на рынке. Однако финансовая
            структура требует постоянного инвестирования или заимствований.{' '}
            <Text strong>
              В такие периоды компании сокращают расходы на IT, или наоборот –
              нуждаются в недорогих, высокоэффективных IT решениях
            </Text>
            .
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'section-management',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Ключевые лица и управление"
        subtitle="ЛПР, структура управления и контакты"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
        imageAlt="Команда и управление"
      />
    ),
  },
  {
    id: 'key-persons',
    header: 'Известные ЛПР',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                name: 'Лань Фан',
                position: 'Генеральный директор',
                role: 'Стратегическое управление, финансирование',
                contacts: '–',
              },
              {
                key: '2',
                name: 'Роб (Rob)',
                position: 'Руководство компании',
                role: 'Первая линия контактов, кураторство партнерств',
                contacts: 'Телеграм (исходящая ссылка)',
              },
              {
                key: '3',
                name: 'Сергей Мороз',
                position: 'Руководитель по развитию партнерств',
                role: 'Прямой контакт для предложений сотрудничества',
                contacts: 'WhatsApp',
              },
            ]}
            columns={[
              {
                title: 'Имя',
                dataIndex: 'name',
                key: 'name',
                width: '20%',
                render: text => <Text strong>{text}</Text>,
              },
              {
                title: 'Должность',
                dataIndex: 'position',
                key: 'position',
                width: '25%',
              },
              {
                title: 'Роль',
                dataIndex: 'role',
                key: 'role',
                width: '35%',
              },
              {
                title: 'Контакты',
                dataIndex: 'contacts',
                key: 'contacts',
                width: '20%',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Структура управления
          </Title>
          <List
            dataSource={[
              'Иерархическая с одним основным руководством',
              'Ограниченная команда (13 человек) для управления импортом, продажами и сервисом',
              'Явно недостаточная IT инфраструктура для масштабирования',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <PhoneOutlined style={{ marginRight: 8 }} />
            Контактные данные для связи
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Официальный офис">
              <Space>
                <PhoneOutlined />
                <Text>+7 (495) 324-44-07</Text>
                <MailOutlined style={{ marginLeft: 16 }} />
                <Text>yatrus.info@yat.com</Text>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Сервис-центр">
              <Space>
                <PhoneOutlined />
                <Text>+7 (929) 546-85-50</Text>
                <MailOutlined style={{ marginLeft: 16 }} />
                <Text>valeriy.karasev@yat.com (Валерий)</Text>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="Telegram">
              @senix_rus (3000+ подписчиков)
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'section-market',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Рыночное позиционирование"
        subtitle="Сегмент рынка, линейка продуктов и конкурентные преимущества"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
        imageAlt="Рыночное позиционирование"
      />
    ),
  },
  {
    id: 'market-segment',
    header: 'Сегмент рынка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Позиционирование SENIX
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            SENIX позиционирует себя в сегменте{' '}
            <Text strong>
              профессиональной садовой техники и электроинструмента
            </Text>
            :
          </Paragraph>
          <Table
            dataSource={[
              {
                key: '1',
                category: 'Целевая аудитория',
                details:
                  'Профессионалы, ландшафтные компании, строители, серьезные домовладельцы',
              },
              {
                key: '2',
                category: 'Ценовой сегмент',
                details:
                  'Средний-премиум (дешевле премиума, дороже эконома)',
              },
              {
                key: '3',
                category: 'География',
                details: 'Россия, Европа, Северная Америка',
              },
              {
                key: '4',
                category: 'Позиция в рынке',
                details: 'Новый агрессивный игрок, растущий конкурент',
              },
            ]}
            columns={[
              {
                title: 'Категория',
                dataIndex: 'category',
                key: 'category',
                width: '30%',
                render: text => <Text strong>{text}</Text>,
              },
              {
                title: 'Детали',
                dataIndex: 'details',
                key: 'details',
                width: '70%',
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
    id: 'product-line',
    header: 'Линейка продуктов SENIX',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card
              size="small"
              style={{ backgroundColor: '#e6f7ff', height: '100%' }}
            >
              <Text strong>
                <ThunderboltOutlined style={{ marginRight: 8 }} />
                Аккумуляторный инструмент
              </Text>
              <List
                size="small"
                dataSource={[
                  '20В аккумуляторные инструменты (дрели, шуруповерты, пилы, УШМ)',
                  '60В аккумуляторная садовая техника (профессиональный сегмент)',
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
            <Card
              size="small"
              style={{ backgroundColor: '#f6ffed', height: '100%' }}
            >
              <Text strong>
                <BuildOutlined style={{ marginRight: 8 }} />
                Садовая техника
              </Text>
              <List
                size="small"
                dataSource={[
                  'Газонокосилки (бензиновые и аккумуляторные)',
                  'Триммеры и электрокосы',
                  'Цепные пилы (электрические и бензиновые)',
                  'Воздуходувки',
                  'Снегоуборщики',
                  'Высоторезы',
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
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card
              size="small"
              style={{ backgroundColor: '#fff7e6', height: '100%' }}
            >
              <Text strong>
                <PoweroffOutlined style={{ marginRight: 8 }} />
                Системы питания
              </Text>
              <List
                size="small"
                dataSource={[
                  'Литий-ионные аккумуляторные батареи',
                  'Бесщеточные моторы',
                  'Технология в области энергоэффективности',
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
            <Card
              size="small"
              style={{ backgroundColor: '#f0f0f0', height: '100%' }}
            >
              <Text strong>
                <ShopOutlined style={{ marginRight: 8 }} />
                Прочее
              </Text>
              <List
                size="small"
                dataSource={[
                  'Системы хранения Xstack',
                  'Принадлежности и расходники',
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
      </Space>
    ),
  },
  {
    id: 'competitive-advantages',
    header: 'Конкурентные преимущества SENIX',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Преимущества на текущий момент
          </Title>
          <List
            dataSource={[
              'Инновационность: Собственная R&D, высоковольтные системы (60V)',
              'Цена: Ниже премиум-брендов, но выше экономных',
              'Линейка: Широкий ассортимент от 20V до 60V',
              'Гарантия: 2-летняя гарантия',
              'Экологичность: Низкие выбросы, аккумуляторные опции',
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
    id: 'section-sales-channels',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Каналы продаж и присутствие"
        subtitle="Онлайн и офлайн каналы, статистика и проблемы"
        imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
        imageAlt="Продажи и каналы"
      />
    ),
  },
  {
    id: 'online-channels-1',
    header: 'Онлайн-каналы (часть 1)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            1. Официальный сайт:{' '}
            <Link
              href="https://senixtool.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              senixtool.ru
            </Link>
          </Title>
          <Tag color="red" style={{ marginBottom: 16 }}>
            ДО СИХ ПОР В РАЗРАБОТКЕ
          </Tag>
          <List
            dataSource={[
              'Множество страниц помечены как "в разработке"',
              'Неполный каталог',
              'Каталог доступен только для скачивания в PDF',
              'Нет полноценного интернет-магазина',
              'Отсутствует динамическое управление контентом',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <StarOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            2. OZON (основной канал продаж)
          </Title>
          <Link
            href="https://www.ozon.ru/seller/senix-1342609/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', marginBottom: 16 }}
          >
            https://www.ozon.ru/seller/senix-1342609/
          </Link>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Statistic
                title="Рейтинг"
                value={4.8}
                suffix="/ 5"
                prefix={<StarOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Statistic
                title="Заказов"
                value={10000}
                suffix="+"
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Statistic
                title="Отзывов"
                value={4000}
                suffix="+"
                prefix={<UserOutlined />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Text strong style={{ color: '#1890ff' }}>
                  OZON – это основной двигатель продаж
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'online-channels-2',
    header: 'Онлайн-каналы (часть 2)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  <PhoneOutlined style={{ marginRight: 8 }} />
                  3. Telegram канал:{' '}
                  <Link
                    href="https://t.me/senix_rus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @senix_rus
                  </Link>
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Подписчиков: 3,090+',
                    'Активность: Регулярные обновления и информация о продуктах',
                    'Назначение: Информирование, дистрибьюция контента, поддержка',
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
                <Title level={5} style={{ marginTop: 0 }}>
                  <ShopOutlined style={{ marginRight: 8 }} />
                  4. Фирменный магазин:{' '}
                  <Link
                    href="https://senix-rus.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    senix-rus.ru
                  </Link>
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Оператор: ООО "ГК ИМПЕРИЯ ИНСТРУМЕНТА"',
                    'ИНН: 7728388374',
                    'Адрес: Москва, ул. Павловская 27, стр. 5',
                    'Статус: Вспомогательный канал, не основной',
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
            <GlobalOutlined style={{ marginRight: 8 }} />
            5. Сторонние дилеры
          </Title>
          <List
            dataSource={[
              <Link
                key="vseinstrumenti"
                href="https://vseinstrumenti.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                vseinstrumenti.ru
              </Link>,
              <Link
                key="imperiatools"
                href="https://imperiatools.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                imperiatools.ru
              </Link>,
              <Link
                key="masterts"
                href="https://masterts.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                masterts.ru
              </Link>,
              <Link
                key="dns"
                href="https://dns-shop.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                dns-shop.ru
              </Link>,
              'И другие (около 20+ официальных и полуофициальных каналов)',
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
    id: 'offline-presence',
    header: 'Офлайн присутствие',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Сервисные центры в России
          </Title>
          <List
            dataSource={[
              'Главный сервис-центр: Москва, ул. Гвардейская, д. 3 кор. 1',
              'Филиальные сервис-центры в регионах (скудная информация)',
              'Авторизованные сервис-партнеры',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <EnvironmentOutlined
                  style={{ color: '#1890ff', marginRight: 12, fontSize: 16 }}
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
            <TrophyOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Выставки и мероприятия
          </Title>
          <List
            dataSource={[
              'MITEX-2024 (ноябрь 2024) – мощный стенд с демонстрацией',
              'Потенциально другие отраслевые выставки',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <CheckCircleOutlined
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
    id: 'section-reviews',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Анализ отзывов и репутация"
        subtitle="Положительные и отрицательные отзывы, критические проблемы"
        imageSrc="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&h=800&fit=crop"
        imageAlt="Отзывы и репутация"
      />
    ),
  },
  {
    id: 'positive-reviews',
    header: (
      <>
        Положительные отзывы (
        <Link
          href="https://www.ozon.ru/seller/senix-1342609/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OZON
        </Link>
        , 4.8★)
      </>
    ),
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <StarOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Сильные стороны
          </Title>
          <List
            dataSource={[
              'Качество сборки и материалов: "Вид надежный! Аккуратное исполнение. Пластик на ощупь хороший"',
              'Мощность инструмента: "Мощный, не дорогой. Вселяет уверенность"',
              'Цена-качество: "Зачем платить в 2 раза больше за красный, когда есть Senix?"',
              'Совместимость: "Можно подцепить макитовский аккум через переходник"',
              'Практичность: "Аккумулятора мне вполне хватает на полный день работы"',
              'Отзывы о газонокосилках: "Мощная, уверенная машинка с большим объемом травосборника"',
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
        <Card>
          <Statistic
            title="Среднее количество оценок"
            value={4000}
            suffix="+ отзывов"
            prefix={<StarOutlined />}
            valueStyle={{ color: '#52c41a', fontSize: '32px' }}
          />
          <Text type="secondary" style={{ display: 'block', marginTop: 8 }}>
            Рейтинг стабилен на уровне 4.8★
          </Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'negative-reviews-1',
    header: 'Критические проблемы (часть 1)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            1. Проблемы с качеством и надежностью
          </Title>
          <List
            size="small"
            dataSource={[
              'Дефекты приходят в момент доставки',
              'Визжащие вентиляторы в зарядных устройствах',
              'Заклинивание механизмов',
              'Микротрещины и строительные дефекты',
              'Примеры: заказ на 200,000 руб. оказался "кусок китайского хлама"',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            2. Критическое: Проблемы с функциональностью
          </Title>
          <List
            size="small"
            dataSource={[
              'Роботы-газонокосилки не работают в режиме, описанном в спецификациях',
              'Программное обеспечение имеет баги',
              'Отказ функций, которые должны быть в стандарте',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            3. Сервис: ОГРОМНАЯ ПРОБЛЕМА
          </Title>
          <List
            size="small"
            dataSource={[
              'Гарантийный ремонт занимает 2.5-3 месяца (заявлено на стандартный – 14 дней)',
              'Сервис-центры зачастую не знакомы с моделями',
              'Отсутствие запчастей',
              'Невозможность связаться с поддержкой',
              'Перенаправление между подразделениями',
              'Долгие очереди и затяжная диагностика',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
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
    id: 'negative-reviews-2',
    header: 'Критические проблемы (часть 2)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <PhoneOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            4. Проблемы в Интернет-коммуникации (
            <Link
              href="https://www.reddit.com/r/smallengines/comments/1kqkkme/senix_mowers/?rdt=50685"
              target="_blank"
              rel="noopener noreferrer"
            >
              подтверждено Reddit
            </Link>
            )
          </Title>
          <List
            size="small"
            dataSource={[
              'Отсутствие ответа на контакт-форм сайта',
              'На hold в телефоне 10+ минут, после чего переводят на автоответчик',
              'Отсутствие обратного звонка',
              'Электронная почта не отвечает',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            5. Репутация в Северной Америке (
            <Link
              href="https://www.reddit.com/r/smallengines/comments/1kqkkme/senix_mowers/?rdt=50685"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reddit
            </Link>
            )
          </Title>
          <List
            size="small"
            dataSource={[
              '"Don\'t buy anything from Senix, they have no customer support"',
              '"$500 mower arrived broken, no response from email"',
              'Невозможность найти запчасти',
              'Сервис-центры не авторизованы или недоступны',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
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
    id: 'customer-complaints',
    header: 'Основные недовольства клиентов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                problem: 'Медленный сервис (>2 месяцев)',
                frequency: 'Высокая',
                severity: '🔴 Критическая',
                severityColor: 'red',
              },
              {
                key: '2',
                problem: 'Отсутствие ответа на контакты',
                frequency: 'Высокая',
                severity: '🔴 Критическая',
                severityColor: 'red',
              },
              {
                key: '3',
                problem: 'Дефекты при доставке',
                frequency: 'Средняя',
                severity: '🟠 Высокая',
                severityColor: 'orange',
              },
              {
                key: '4',
                problem: 'Отсутствие запчастей',
                frequency: 'Средняя',
                severity: '🟠 Высокая',
                severityColor: 'orange',
              },
              {
                key: '5',
                problem: 'Проблемы с функциональностью ПО',
                frequency: 'Средняя',
                severity: '🟠 Высокая',
                severityColor: 'orange',
              },
              {
                key: '6',
                problem: 'Отсутствие пакета/документации',
                frequency: 'Низкая',
                severity: '🟡 Средняя',
                severityColor: 'default',
              },
              {
                key: '7',
                problem: 'Конструктивные замечания',
                frequency: 'Низкая',
                severity: '🟡 Средняя',
                severityColor: 'default',
              },
            ]}
            columns={[
              {
                title: 'Проблема',
                dataIndex: 'problem',
                key: 'problem',
                width: '50%',
              },
              {
                title: 'Частота',
                dataIndex: 'frequency',
                key: 'frequency',
                width: '20%',
              },
              {
                title: 'Серьезность',
                dataIndex: 'severity',
                key: 'severity',
                width: '30%',
                render: (text, record) => (
                  <Tag color={record.severityColor}>{text}</Tag>
                ),
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
    id: 'section-competitors',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Конкурентный анализ"
        subtitle="Прямые конкуренты, позиционирование и выводы"
        imageSrc="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=800&fit=crop"
        imageAlt="Конкурентный анализ"
      />
    ),
  },
  {
    id: 'market-leaders',
    header: 'Лидеры рынка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Топ-3 конкурента
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{ backgroundColor: '#e6f7ff', height: '100%' }}
              >
                <Text strong>1. Husqvarna (Швеция)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Позиция: Премиум-лидер',
                    'Преимущества: Репутация, надежность, широкая сервисная сеть',
                    'Недостатки: Высокая цена, консервативность',
                    'Рыночная доля: ~25-30%',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{ backgroundColor: '#f6ffed', height: '100%' }}
              >
                <Text strong>2. Greenworks (США/Канада)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Позиция: Инновационный лидер в аккумуляторной технике',
                    'Преимущества: Первый 24V и 40V системы, качество',
                    'Недостатки: Выше среднего по цене',
                    'Рыночная доля: ~15-20%',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{ backgroundColor: '#fff7e6', height: '100%' }}
              >
                <Text strong>3. Makita (Япония)</Text>
                <List
                  size="small"
                  dataSource={[
                    'Позиция: Премиум профессиональный инструмент',
                    'Преимущества: Качество, технологии, совместимость',
                    'Недостатки: Высокая цена, фокус на инструменте',
                    'Рыночная доля: ~15-20%',
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
    id: 'mid-tier-competitors',
    header: 'Среднемерные конкуренты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                name: 'NEVA (Россия)',
                position: 'Бюджетный лидер',
                advantages: 'Низкая цена, локальное производство, сервис в РФ',
                disadvantages: 'Устаревшие технологии, низкое качество',
                marketShare: '~10-15%',
              },
              {
                key: '2',
                name: 'PATRIOT (Китай)',
                position: 'Бюджет-средний',
                advantages: 'Цена/качество оптимальны, достаточная функциональность',
                disadvantages: 'Слабый сервис, невысокая надежность',
                marketShare: '~8-12%',
              },
              {
                key: '3',
                name: 'CHAMPION (Россия/Китай)',
                position: 'Средний класс',
                advantages: 'Цена, модельный ряд',
                disadvantages: 'Сервис, репутация колеблется',
                marketShare: '~8-10%',
              },
              {
                key: '4',
                name: 'DeWALT (США)',
                position: 'Премиум инструмент',
                advantages: 'Профессиональная репутация, качество, FLEXVOLT 54V',
                disadvantages: 'Дорого, ориентирован на инструмент',
                marketShare: '~5-8%',
              },
              {
                key: '5',
                name: 'Karcher (Германия)',
                position: 'Специализированные',
                advantages: 'Профессиональная техника уборки',
                disadvantages: '–',
                marketShare: '–',
              },
            ]}
            columns={[
              {
                title: 'Бренд',
                dataIndex: 'name',
                key: 'name',
                width: '20%',
                render: text => <Text strong>{text}</Text>,
              },
              {
                title: 'Позиция',
                dataIndex: 'position',
                key: 'position',
                width: '18%',
              },
              {
                title: 'Преимущества',
                dataIndex: 'advantages',
                key: 'advantages',
                width: '28%',
              },
              {
                title: 'Недостатки',
                dataIndex: 'disadvantages',
                key: 'disadvantages',
                width: '24%',
              },
              {
                title: 'Доля рынка',
                dataIndex: 'marketShare',
                key: 'marketShare',
                width: '10%',
              },
            ]}
            pagination={false}
            size="small"
            scroll={{ x: true }}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'senix-position-matrix',
    header: 'Позиция SENIX в конкурентной матрице',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0, textAlign: 'center' }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Матрица качества и цены
          </Title>
          <div
            style={{
              textAlign: 'center',
              padding: '40px',
              backgroundColor: '#f0f0f0',
              borderRadius: 8,
              fontFamily: 'monospace',
              fontSize: '16px',
              lineHeight: '1.8',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <Text strong>КАЧЕСТВО</Text>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Text>Husqvarna</Text>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Text>Greenworks | SENIX ✓</Text>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Text>Makita | PATRIOT</Text>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Text>CHAMPION</Text>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Text>NEVA</Text>
            </div>
            <div>
              <Text>
                ──────────────────────────────► <Text strong>ЦЕНА</Text>
              </Text>
            </div>
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              <Text type="secondary">
                (низкая) (высокая)
              </Text>
            </div>
          </div>
        </Card>
      </Space>
    ),
  },
  {
    id: 'senix-advantages-disadvantages',
    header: 'Преимущества и недостатки SENIX',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Реальные преимущества SENIX
              </Title>
              <List
                size="small"
                dataSource={[
                  'Высоковольтная система 60V (редкость на рынке)',
                  'Цена ниже Husqvarna, Greenworks, Makita',
                  'Совместимость батарей с другими системами',
                  'Широкий ассортимент',
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
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                Недостатки vs конкурентам
              </Title>
              <List
                size="small"
                dataSource={[
                  'Молодой бренд, слабая репутация',
                  'Серьезные проблемы с сервисом (главная боль)',
                  'Отсутствие локального производства',
                  'Слабая сервисная сеть vs Husqvarna/NEVA',
                  'Неполнота IT инфраструктуры (сайт недоделан)',
                  'Проблемы с качеством контроля и доставкой',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <WarningOutlined
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
    id: 'senix-position-conclusion',
    header: 'Вывод по конкурентному анализу',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Позиция SENIX
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            SENIX – это{' '}
            <Text strong>
              дерзкий новичок с хорошим продуктом, но критически слабой
              инфраструктурой поддержки
            </Text>
            . Компания работает против себя своим отсутствием:
          </Paragraph>
          <List
            dataSource={[
              'Надежного сервиса',
              'Компетентной поддержки клиентов',
              'Полноценной IT системы',
              'Логистической цепочки',
              'Управления качеством',
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
          <Alert
            message="Критическая потребность"
            description="Это именно та компания, которой критически нужны IT услуги для выживания и развития."
            type="warning"
            showIcon
            style={{ marginTop: 16 }}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'section-pain-points',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Выявленные боли и потребности"
        subtitle="Критические, высокоприоритетные и средние приоритеты"
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        imageAlt="Проблемы и потребности"
      />
    ),
  },
  {
    id: 'pain-1-customer-support',
    header: '🔴 БОЛЬ #1: Система поддержки клиентов отсутствует',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Признак
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Невозможно связаться с компанией по email, телефону, контакт-форме
          </Paragraph>
          <List
            dataSource={[
              'Клиенты ждут ответа, который не приходит',
              <span key="reddit">
                <Link
                  href="https://www.reddit.com/r/smallengines/comments/1kqkkme/senix_mowers/?rdt=50685"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reddit
                </Link>{' '}
                полон жалоб об игнорировании обращений
              </span>,
              'Служба поддержки не поднимает телефон или ставит на долгий hold',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <AlertOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Последствия
          </Title>
          <Text>
            Потеря репутации, негативные отзывы, отток клиентов в конкурентам
          </Text>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            IT Решение Нужна: CRM система с интеграцией
          </Title>
          <List
            dataSource={[
              'Автоматизация обработки запросов',
              'Система tickets для отслеживания',
              'Интеграция с email, телефоном, Telegram',
              'Dashboard для отслеживания статуса',
              'Автоматические ответы и уведомления',
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
    id: 'pain-2-service',
    header: '🔴 БОЛЬ #2: Гарантийное обслуживание занимает 2.5-3 месяца',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Признак
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Долгие очереди в сервис-центрах, отправка в Китай и обратно
          </Paragraph>
          <List
            dataSource={[
              'Отсутствие системы управления ремонтами',
              'Невозможность отследить статус ремонта',
              'Дублирование обработки информации',
              'Потеря документов и ордеров',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <AlertOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Последствия
          </Title>
          <Text>
            Отчаяние клиентов, негативные отзывы, судебные претензии
            потенциальные
          </Text>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            IT Решение Нужна: Система управления сервисом
          </Title>
          <List
            dataSource={[
              'Учет поступления товара',
              'Отслеживание в режиме реального времени',
              'Автоматическое уведомление клиента о статусе',
              'Интеграция с логистикой (CDEK, DPD и др.)',
              'Система управления запчастями',
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
    id: 'pain-3-website',
    header: '🔴 БОЛЬ #3: Каталог/Сайт недоделан, нет e-commerce',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Признак
          </Title>
          <List
            dataSource={[
              'Много страниц "в разработке"',
              'Каталог только в PDF',
              'Нет фильтрации, поиска, сравнения товаров',
              'Отсутствует интеграция между внутренними системами и OZON (основной канал)',
              'Нет синхронизации остатков',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <AlertOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Последствия
          </Title>
          <List
            dataSource={[
              'Потенциальные клиенты на сайте не находят информацию',
              'Мобильные пользователи отходят',
              'Невозможно собирать данные клиентов',
              'Нет аналитики поведения пользователей',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            IT Решение Нужна: Полнофункциональный e-commerce
          </Title>
          <List
            dataSource={[
              'Product Information Management (PIM)',
              'Интеграция с маркетплейсами (OZON, Wildberries и др.)',
              'Синхронизация остатков',
              'Простой управление контентом (CMS)',
              'Mobile-first дизайн',
              'Интеграция с платежными системами',
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
    id: 'high-priority-pains',
    header: '🟠 ВЫСОКОПРИОРИТЕТНЫЕ БОЛИ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <BarChartOutlined
                  style={{ color: '#faad14', marginRight: 8 }}
                />
                БОЛЬ #4: Отсутствие аналитики
              </Title>
              <List
                size="small"
                dataSource={[
                  'Непонимание, где больше продаж',
                  'Отсутствие данных о поведении клиентов',
                  'Невозможно оптимизировать маркетинг',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
              <Text strong style={{ display: 'block', marginTop: 8 }}>
                Решение: BI Platform / Data Analytics
              </Text>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <BuildOutlined
                  style={{ color: '#faad14', marginRight: 8 }}
                />
                БОЛЬ #5: Нет управления запчастями
              </Title>
              <List
                size="small"
                dataSource={[
                  'Невозможно найти запчасти',
                  'Неясно, есть ли запчасть в наличии',
                  'Долгие сроки доставки запчастей',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
              <Text strong style={{ display: 'block', marginTop: 8 }}>
                Решение: ERP система / Inventory Management
              </Text>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ color: '#faad14', marginRight: 8 }} />
            БОЛЬ #6: Нет управления брендом и маркетингом
          </Title>
          <List
            dataSource={[
              'Телеграм канал ведется вручную',
              'Нет unified messaging',
              'Нет интеграции маркетинга разных каналов',
              'Нет воронки продаж',
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
          <Text strong style={{ display: 'block', marginTop: 8 }}>
            Решение: Marketing Automation Platform
          </Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'medium-priority-pains',
    header: '🟡 СРЕДНИЕ ПРИОРИТЕТЫ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ApiOutlined style={{ marginRight: 8 }} />
            БОЛЬ #7: Отсутствие интеграции между системами
          </Title>
          <Paragraph>
            Информация дублируется между системами, ручная передача данных
          </Paragraph>
          <Text strong>Решение: Интеграционная шина (API/Middleware)</Text>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            БОЛЬ #8: Проблемы с управлением кадрами и процессов
          </Title>
          <Paragraph>
            13 человек не могут эффективно обрабатывать заказы и обслуживание
          </Paragraph>
          <Text strong>
            Решение: BPM, HRM система, Система управления задачами
          </Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'section-recommendations',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Рекомендации по IT услугам"
        subtitle="Стратегическое направление, фазы реализации и ROI"
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop"
        imageAlt="IT решения и технологии"
      />
    ),
  },
  {
    id: 'strategic-direction',
    header: 'Стратегическое направление',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Комплексная цифровая трансформация
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            SENIX нужна <Text strong>комплексная цифровая трансформация</Text>,
            а не отдельные точечные решения. Компания находится на{' '}
            <Text strong>критическом этапе масштабирования</Text> – нужно либо
            инвестировать в IT, либо рынок проедет мимо, оставляя конкурентам
            все возможности.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'phase-1',
    header: 'ФАЗА 1 (0-3 месяца): СПАСИТЕЛЬНЫЕ РАБОТЫ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Стоимость: 1-3 млн руб | ROI: Огромный
          </Title>
          <Text>
            Спасает компанию от репутационного краха
          </Text>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined
              style={{ color: '#52c41a', marginRight: 8 }}
            />
            1. CRM + Helpdesk система (Высокий приоритет)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <List
                size="small"
                dataSource={[
                  'Интеграция: Email, Telegram, WhatsApp, телефон, чат на сайте',
                  'Функции: Распределение обращений, SLA, автоматизация ответов',
                  'Технология: Jira Service Management / Zendesk / Freshdesk',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} md={12}>
              <List
                size="small"
                dataSource={[
                  'Срок внедрения: 4-6 недель',
                  'Ожидаемый результат: Снижение времени ответа с "недель" на "часы"',
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
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <PhoneOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            2. Телеграм бот для сервиса (Средний приоритет)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <List
                size="small"
                dataSource={[
                  'Функции: Отслеживание статуса ремонта, уведомления, ввод заявок',
                  'Интеграция с системой управления сервисом',
                  'Технология: Telegram Bot API + Node.js backend',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>• {item}</Text>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} md={12}>
              <List
                size="small"
                dataSource={[
                  'Срок: 2-3 недели',
                  'ROI: Снижение нагрузки на telephone support на 40%',
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
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'phase-2-header',
    header: 'ФАЗА 2 (3-6 месяцев): ВОССТАНОВЛЕНИЕ САЙТА',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Стоимость: 2-4 млн руб | ROI: Средний
          </Title>
          <Text>Восстановление имиджа</Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'phase-2-website',
    header: '3. Полная переделка сайта senixtool.ru',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Полная переделка сайта (Высокий приоритет)
          </Title>
          <List
            dataSource={[
              'Полный каталог товаров с фильтрацией',
              'Интеграция с OZON (синхронизация цен и остатков)',
              'Система управления контентом (CMS)',
              'Мобильная версия',
              'Интеграция с платежами',
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
          <Divider />
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Text strong>Технология:</Text>
              <Text> React/Next.js + Node.js backend + PostgreSQL</Text>
            </Col>
            <Col xs={24} md={12}>
              <Text strong>Срок:</Text>
              <Text> 8-12 недель</Text>
            </Col>
          </Row>
          <Text strong style={{ display: 'block', marginTop: 8 }}>
            Ожидаемый результат: Увеличение продаж через собственный сайт в
            5-10x
          </Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'phase-2-service',
    header: '4. Система управления сервисом',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Service Management (Высокий приоритет)
          </Title>
          <List
            dataSource={[
              'Intake (приемка товара)',
              'Диагностика',
              'Ремонт',
              'Возврат',
              'Отслеживание в реальном времени',
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
          <Divider />
          <List
            size="small"
            dataSource={[
              'Интеграция с логистикой (CDEK API)',
              'Интеграция с уведомлениями (SMS, Email, Telegram)',
              'Технология: Custom software или адаптация готового решения',
              'Срок: 6-8 недель',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
          <Text strong style={{ display: 'block', marginTop: 8 }}>
            Ожидаемый результат: Снижение среднего времени ремонта с 2.5
            месяцев до 14 дней
          </Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'phase-3-4',
    header: 'ФАЗА 3-4: ОПТИМИЗАЦИЯ И МАСШТАБИРОВАНИЕ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined
              style={{ color: '#52c41a', marginRight: 8 }}
            />
            ФАЗА 3 (6-12 месяцев): ОПТИМИЗАЦИЯ И РОСТ
          </Title>
          <Text strong style={{ display: 'block', marginBottom: 8 }}>
            Стоимость: 1-2 млн руб | ROI: Долгосрочный
          </Text>
          <List
            size="small"
            dataSource={[
              '5. BI/Analytics платформа (Средний приоритет) - 4-6 недель',
              '6. Marketing Automation (Низкий приоритет) - 2-3 недели',
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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            ФАЗА 4 (12+ месяцев): МАСШТАБИРОВАНИЕ
          </Title>
          <List
            dataSource={[
              '7. ERP система (Низкий приоритет, долгосрочный проект) - 6-12 месяцев',
              '8. Мобильное приложение (для клиентов и сервис-инженеров)',
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
    id: 'roi-losses',
    header: 'Оценка потерь (сейчас)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Текущие потери
          </Title>
          <List
            dataSource={[
              'Потеря клиентов из-за плохого сервиса: ~10-15% от выручки',
              'Неэффективность сервис-центров: ~20% простоя',
              'Неэффективность маркетинга: ~30% неиспользованного потенциала',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
          <Alert
            message="Итого потери"
            description="~15% от выручки = 40 млн руб в год (на базе 272 млн 2024)"
            type="error"
            showIcon
            style={{ marginTop: 16 }}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'roi-benefits',
    header: 'Выгода от IT решений',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Выгода от IT решений (на год)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Statistic
                title="Снижение потерь на сервис"
                value={30}
                suffix="млн руб"
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Col>
            <Col xs={24} md={8}>
              <Statistic
                title="Увеличение продаж"
                value={20}
                suffix="млн руб"
                prefix={<RocketOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                (через оптимизацию: +20-30 млн)
              </Text>
            </Col>
            <Col xs={24} md={8}>
              <Statistic
                title="Снижение ручного труда"
                value={5}
                suffix="млн руб"
                prefix={<TeamOutlined />}
                valueStyle={{ color: '#722ed1' }}
              />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                (реинвестмент: +5-10 млн)
              </Text>
            </Col>
          </Row>
          <Divider />
          <Alert
            message="Итого прибыль от IT"
            description="+50-70 млн руб в год"
            type="success"
            showIcon
            style={{ marginTop: 16 }}
          />
          <Alert
            message="Payback period"
            description="1.5-3 месяца (при инвестировании 4-6 млн в IT в первый год)"
            type="info"
            showIcon
            style={{ marginTop: 16 }}
          />
        </Card>
      </Space>
    ),
  },
];

