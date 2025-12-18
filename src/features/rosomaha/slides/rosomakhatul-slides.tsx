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
  ShopOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  RocketOutlined,
  BarChartOutlined,
  PhoneOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { rosomakhatulCreatedAt } from './rosomakhatul.meta';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import mitexPhoto from './telegram-cloud-photo-size-2-5233670151763332979-y.jpg';

const { Title, Paragraph, Text, Link } = Typography;

export const rosomakhatulSlides: SlideData[] = [
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
            ООО «РОСОМАХАТУЛ»
          </Title>
          <Title level={2} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            Холодная продажа IT‑услуг
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginBottom: 0,
              color: '#595959',
            }}
          >
            Портрет компании‑дилера строительного инструмента и возможности
            IT‑сотрудничества
          </Paragraph>
          <Paragraph style={{ marginTop: 8 }}>
            <Text strong>Потенциал: 7.6/10 — ВЫСОКИЙ ПОТЕНЦИАЛ ✅</Text>
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
          {formatDateForSlide(rosomakhatulCreatedAt)} • Москва
        </Text>
      </Space>
    ),
  },
  {
    id: 'how-we-met-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Как мы о них узнали"
        subtitle="История знакомства с компанией"
        imageIndex={1}
        imageAlt="Знакомство"
      />
    ),
  },
  {
    id: 'how-we-met-story',
    header: 'Выставка MITEX',
    content: (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <div
          style={{
            flexBasis: '50%',
            maxWidth: '50%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <ImageWithLoader
            src={mitexPhoto}
            alt="Выставка MITEX"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            containerStyle={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Card
            style={{
              width: '100%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <Space
              direction="vertical"
              size="large"
              style={{ width: '100%' }}
            >
              <Paragraph
                style={{
                  fontSize: 'var(--app-font-size-base)',
                  lineHeight: 1.7,
                  marginBottom: 0,
                  color: '#434343',
                }}
              >
                На выставке MITEX мы познакомились с генеральным директором
                компании Кириллом Кирилловым. Поводом для знакомства стало
                обращение с замечанием о некорректной работе их сайта.
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: 'var(--app-font-size-base)',
                  lineHeight: 1.7,
                  marginBottom: 0,
                  color: '#434343',
                }}
              >
                По словам представителей компании, мы стали первыми, кто обратил
                их внимание на эту проблему подобным образом. В результате
                состоялся конструктивный диалог, и была достигнута договорённость
                о встрече в середине декабря для обсуждения возможностей
                сотрудничества.
              </Paragraph>
            </Space>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 'quick-stats',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Быстрая статистика"
        subtitle="Ключевые финансовые показатели компании за 2024 год"
        imageIndex={0}
        imageAlt="Финансовая статистика"
      />
    ),
  },
  {
    id: 'quick-stats-table',
    header: 'Ключевые показатели 2024',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                metric: 'Выручка',
                value: '252,9 млн ₽',
                trend: '↑ +58%',
              },
              {
                key: '2',
                metric: 'Прибыль',
                value: '44,1 млн ₽',
                trend: '↑ +4,6%',
              },
              {
                key: '3',
                metric: 'Маржа',
                value: '17,4%',
                trend: '⚠️ -8,6 п.п.',
              },
              {
                key: '4',
                metric: 'Сотрудников',
                value: '7',
                trend: '—',
              },
              {
                key: '5',
                metric: 'Оценка стоимости',
                value: '413 млн ₽',
                trend: '↑',
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
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            <Text strong>ГЛАВНОЕ:</Text> Компания растет на{' '}
            <Text strong>58% в год</Text>, но маржа снижается →{' '}
            <Text strong>срочно нужна оптимизация</Text>.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'general-info',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Исходная информация о компании"
        subtitle="Реквизиты, базовые данные и точка входа для продаж"
        imageIndex={1}
        imageAlt="О компании"
      />
    ),
  },
  {
    id: 'company-details',
    header: 'Реквизиты компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Базовая информация
          </Title>
          <List
            dataSource={[
              'Название: ООО «РОСОМАХАТУЛ»',
              'ИНН: 7725408992 | ОГРН: 5177746320769',
              'Дата создания: 13.12.2017 (7 лет на рынке)',
              'Адрес: Москва, МО Внуково, д. Толстопальцево, ул. Советская, д. 1, стр. 1',
              'Телефон: +7 (495) 011 15 37',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <PhoneOutlined style={{ marginRight: 8 }} />
            Контакты для продажи
          </Title>
          <List
            dataSource={[
              'Генеральный директор: Кириллов Кирилл Александрович',
              'Лучшее время: 10:00–12:00 (вт–чт)',
              'Точка входа: Прямой звонок по телефону компании',
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
    id: 'what-company-does',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Чем компания занимается"
        subtitle="Основной вид деятельности, товары и целевая аудитория"
        imageIndex={2}
        imageAlt="Строительный инструмент"
      />
    ),
  },
  {
    id: 'business-model',
    header: 'Основной вид деятельности и модель',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Основной вид деятельности
          </Title>
          <Paragraph>
            <Text strong>ОПТОВАЯ ТОРГОВЛЯ СТРОИТЕЛЬНЫМ ИНСТРУМЕНТОМ</Text>
          </Paragraph>
          <Title level={5}>Основные товары (85% выручки)</Title>
          <List
            dataSource={[
              'Алмазные диски (резка бетона, керамики, плитки, металла)',
              'Дрели, буры, фрезы, пилы',
              'Крепежные изделия, специнструмент',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Title level={5}>Целевая аудитория</Title>
              <List
                dataSource={[
                  'Профессиональные подрядчики',
                  'Строительные компании',
                  'Дилеры и перепродавцы',
                  'Интернет-магазины',
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
              <Title level={5}>Бизнес-модель</Title>
              <Card
                size="small"
                style={{
                  backgroundColor: '#f0f0f0',
                  fontFamily: 'monospace',
                }}
              >
                <Paragraph style={{ marginBottom: 0, whiteSpace: 'pre-line' }}>
                  B2B ОПТОВАЯ ТОРГОВЛЯ (НЕ розница)
                  {'\n'}↓{'\n'}Собственный веб-сайт + Агрегаторы
                  {'\n'}↓{'\n'}Собственная логистика (своя ТМЦ)
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'financial-health',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Финансовое здоровье"
        subtitle="Сильные стороны, вызовы и возможность для IT‑услуг"
        imageIndex={3}
        imageAlt="Финансовый анализ"
      />
    ),
  },
  {
    id: 'financial-summary',
    header: 'Анализ финансов: выводы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Сильные стороны
              </Title>
              <List
                dataSource={[
                  'Высокие темпы роста (58% выручки)',
                  'Стабильная маржа валовой прибыли (~26%)',
                  'Компания прибыльна',
                  'Оценка стоимости: 413 млн ₽',
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
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
                Вызовы
              </Title>
              <List
                dataSource={[
                  'Маржа снижается (26% → 17,4%)',
                  'Себестоимость растет пропорционально выручке → нет экономии масштаба',
                  'Нужна оптимизация затрат — отправная точка для IT',
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
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Возможность для IT‑услуг
          </Title>
          <Paragraph>
            Восстановить маржу через автоматизацию ={' '}
            <Text strong>+10–15 млн ₽ прибыли</Text>.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'org-structure',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Организационная структура"
        subtitle="Кто принимает решения и как устроена команда"
        imageIndex={4}
        imageAlt="Команда компании"
      />
    ),
  },
  {
    id: 'org-structure-details',
    header: 'Кто принимает решения?',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Генеральный директор как центр принятия решений
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#f0f0f0',
              fontFamily: 'monospace',
            }}
          >
            <Paragraph style={{ marginBottom: 0, whiteSpace: 'pre-line' }}>
              ┌─────────────────────────────────────┐
              {'\n'}│ ГЕНЕРАЛЬНЫЙ ДИРЕКТОР │{'\n'}│ Кириллов Кирилл
              Александрович │{'\n'}│ │{'\n'}│ - Стратегия │{'\n'}│ - Финансы │
              {'\n'}│ - IT-инвестиции │{'\n'}│ - Клиентские контракты │{'\n'}
              └─────────────────────────────────────┘
              {'\n'} ↓{'\n'} Вся компания
              {'\n'} (7 сотрудников)
            </Paragraph>
          </Card>
        </Card>
        <Card>
          <Title level={5} style={{ marginTop: 0 }}>
            Численность: 7 человек
          </Title>
          <List
            dataSource={[
              '1 Генеральный директор',
              '1–2 Бухгалтер/финансы',
              '1–2 Кладовщик/логистика/склад',
              '1–2 Менеджер по продажам',
              '1 Водитель/доставка',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
          <Divider />
          <Paragraph>
            <Text strong>
              Вывод: все IT‑решения принимаются генеральным директором лично.
              IT‑отдел отсутствует.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'current-it-state',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Текущее состояние IT"
        subtitle="Внедренные системы и критические пробелы"
        imageIndex={5}
        imageAlt="IT‑инфраструктура"
      />
    ),
  },
  {
    id: 'it-implemented',
    header: 'Что уже внедрено',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                Реализовано
              </Title>
              <List
                dataSource={[
                  'ERP: 1С «Управление торговлей»',
                  'WMS: Клеверенс (февраль 2024)',
                  'Мобильные терминалы: Urovo DT40',
                  'Веб‑сайт с каталогом',
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
            <Card style={{ backgroundColor: '#e6f7ff' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <BarChartOutlined style={{ marginRight: 8 }} />
                Достигнуто (результаты 2024)
              </Title>
              <List
                dataSource={[
                  'Сокращение пересортов → 99% точность',
                  'Рост скорости кладовщиков в 2–3 раза',
                  'Исключение ручного ввода в 1С',
                  'Рост лояльности клиентов',
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
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Что отсутствует (критические пробелы)
          </Title>
          <List
            dataSource={[
              'CRM‑система (управление клиентами)',
              'BI и аналитика (дашборды, отчеты)',
              'Портал/приложение для дилеров',
              'Интеграция других маркетплейсов (Wildberries, Яндекс.Маркет)',
              'Email‑маркетинг и автоматизация',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'acute-needs',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Острые потребности"
        subtitle="Что срочно нужно компании для роста"
        imageIndex={6}
        imageAlt="Потребности в IT"
      />
    ),
  },
  {
    id: 'acute-needs-details',
    header: 'Приоритет 1 (критично)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}
          >
            ПРИОРИТЕТ 1 (критично)
            {'\n'}↓{'\n'}1. CRM‑СИСТЕМА для B2B
            {'\n'} Проблема: нет управления клиентами
            {'\n'} Потенциальный ROI: +30% эффективности продаж
            {'\n'}
            {'\n'}2. BI И АНАЛИТИКА
            {'\n'} Проблема: не видит маржинальность по категориям
            {'\n'} Потенциальный ROI: +15% управления запасами
            {'\n'}
            {'\n'}3. ИНТЕГРАЦИЯ МАРКЕТПЛЕЙСОВ
            {'\n'} Проблема: отсутствие на маркетплейсах (Ozon, Wildberries) — упускается +20–30% выручки
            {'\n'} Потенциальный ROI: +20–30% дополнительной выручки
            {'\n'}
            {'\n'}4. ПОРТАЛ / МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
            {'\n'} Проблема: дилеры вынуждены звонить, нет self‑service
            {'\n'} Потенциальный ROI: −25% нагрузки на менеджеров, +10–15%
            продаж
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'competitive-position',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Конкурентная позиция"
        subtitle="Сегменты, конкуренты и преимущества ROSOMAKHA"
        imageIndex={7}
        imageAlt="Конкуренция"
      />
    ),
  },
  {
    id: 'competitive-matrix',
    header: 'Кто конкурирует?',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}
          >
            ПРЕМИУМ СЕГМЕНТ СРЕДНИЙ СЕГМЕНТ МАССОВЫЙ
            {'\n'}Bosch (+40-50%) ROSOMAKHA Hilberg (-5-10%)
            {'\n'}SOLGA (+60-80%) Trio Diamond Champion (-20%)
            {'\n'}Karl Dahm (+30-50%) 50+ мелких оптовиков
          </Paragraph>
        </Card>
        <Card>
          <Title level={5} style={{ marginTop: 0 }}>
            Преимущества ROSOMAKHA
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <List
                header="Сильные стороны"
                dataSource={[
                  'Привлекательная цена (15–20% ниже Bosch)',
                  'Быстрый рост (+58% выручки)',
                  'Инновационный подход (Клеверенс)',
                  'Собственная логистика',
                  'B2B‑ориентация',
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
              <List
                header="Слабые стороны"
                dataSource={[
                  'Маленькая компания (7 чел) → сомнения в масштабируемости',
                  'Молодой бренд (7 лет) → нет долгой истории',
                  'Отсутствие на маркетплейсах (Ozon, Wildberries) → упускается потенциальная выручка',
                  'Низкая видимость в поиске',
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
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'internet-presence',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Интернет‑присутствие"
        subtitle="Каналы и потенциал развития онлайн"
        imageIndex={8}
        imageAlt="Онлайн‑присутствие"
      />
    ),
  },
  {
    id: 'internet-presence-details',
    header: 'Онлайн активность',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                channel: 'Веб‑сайт',
                status: '✅ Есть',
                score: '6/10',
              },
              {
                key: '2',
                channel: 'LinkedIn',
                status: '❌ НЕТ',
                score: '0/10',
              },
              { key: '3', channel: 'VK', status: '❌ НЕТ', score: '0/10' },
              {
                key: '4',
                channel: 'Telegram',
                status: '❌ НЕТ',
                score: '0/10',
              },
              {
                key: '5',
                channel: 'Instagram',
                status: '❌ НЕТ',
                score: '0/10',
              },
              {
                key: '6',
                channel: 'Email‑маркетинг',
                status: '❌ НЕТ',
                score: '0/10',
              },
            ]}
            columns={[
              {
                title: 'Канал',
                dataIndex: 'channel',
                key: 'channel',
              },
              {
                title: 'Статус',
                dataIndex: 'status',
                key: 'status',
              },
              {
                title: 'Оценка',
                dataIndex: 'score',
                key: 'score',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Paragraph>
            <Text strong>Вывод:</Text> компания полностью отсутствует в
            социальных сетях → огромный потенциал для развития.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'reputation',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Репутация и надежность"
        subtitle="Финансовая и интернет‑репутация компании"
        imageIndex={9}
        imageAlt="Репутация компании"
      />
    ),
  },
  {
    id: 'reputation-details',
    header: 'Надежность компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Финансовая репутация
              </Title>
              <List
                dataSource={[
                  'Налоговая задолженность: НЕТ',
                  'Трудовые споры: НЕТ',
                  'Судебная история: 100% побед в качестве ответчика',
                  'Дисквалификация ГД: НЕТ',
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
            <Card style={{ backgroundColor: '#e6f7ff' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                Интернет‑репутация
              </Title>
              <List
                dataSource={[
                  'На маркетплейсах работает хорошо',
                  'Упоминается в кейсах (Клеверенс)',
                  'Нет скандалов',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Paragraph>
            <Text strong>Вывод:</Text> компания надежна и финансово стабильна.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'it-sales-potential',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Потенциал для IT‑продажи"
        subtitle="Оценка по ключевым критериям"
        imageIndex={0}
        imageAlt="Потенциал клиента"
      />
    ),
  },
  {
    id: 'it-sales-matrix',
    header: 'Матрица оценки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                criteria: 'Финансовая способность',
                score: '8/10',
                comment: 'Прибыль 44 млн — может платить',
              },
              {
                key: '2',
                criteria: 'IT‑зрелость',
                score: '6/10',
                comment: 'Уже внедрили Клеверенс — опыт есть',
              },
              {
                key: '3',
                criteria: 'Острота потребности',
                score: '9/10',
                comment: 'Быстрый рост требует систем СЕЙЧАС',
              },
              {
                key: '4',
                criteria: 'Доступность ЛПР',
                score: '7/10',
                comment: 'ГД принимает решения, но занят',
              },
              {
                key: '5',
                criteria: 'Срочность',
                score: '8/10',
                comment: 'Рост 58% → нужна оптимизация',
              },
              {
                key: '6',
                criteria: 'Надежность клиента',
                score: '8/10',
                comment: 'Прибыльна, без рисков',
              },
              {
                key: '7',
                criteria: 'Размер контракта',
                score: '7/10',
                comment: 'Потенциал 300–1500 тыс./год',
              },
            ]}
            columns={[
              {
                title: 'Критерий',
                dataIndex: 'criteria',
                key: 'criteria',
                width: '30%',
              },
              {
                title: 'Оценка',
                dataIndex: 'score',
                key: 'score',
                width: '10%',
              },
              {
                title: 'Комментарий',
                dataIndex: 'comment',
                key: 'comment',
                width: '60%',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Paragraph>
            <Text strong>Итого:</Text> 7.6/10 —{' '}
            <Text strong>высокий потенциал</Text> для IT‑продажи.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'recommended-solutions',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Рекомендуемые решения"
        subtitle="Продуктовая линейка для продажи"
        imageIndex={1}
        imageAlt="Решения для клиента"
      />
    ),
  },
  {
    id: 'recommended-solutions-details',
    header: 'Продуктовая линейка для продажи',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}
          >
            QUICK WINS (0–3 месяца)
            {'\n'}├─ CRM для оптовиков 150–200 тыс. ₽ → ROI 150%
            {'\n'}├─ Интеграция Wildberries 50–100 тыс. ₽ → ROI 300%
            {'\n'}├─ BI‑дашборд по продажам 80–150 тыс. ₽ → ROI 100%
            {'\n'}└─ Email‑маркетинг 30–50 тыс. ₽ → ROI 200%
            {'\n'}
            {'\n'}СРЕДНИЕ ПРОЕКТЫ (3–6 месяцев)
            {'\n'}├─ Мобильное приложение дилеров 300–500 тыс. ₽ → ROI 200%
            {'\n'}├─ Интеграция 5–10 маркетплейсов 200–400 тыс. ₽ → ROI 250%
            {'\n'}└─ RPA / Автоматизация 1С 100–200 тыс. ₽ → ROI 150%
            {'\n'}
            {'\n'}СТРАТЕГИЧЕСКИЕ (6–12 месяцев)
            {'\n'}├─ Полная цифровая платформа 1.5–2 млн ₽ → ROI 500%
            {'\n'}├─ ML‑модели прогноза спроса 200–400 тыс. ₽ → ROI 400%
            {'\n'}└─ IT‑трансформация компании 2–3 млн ₽ → ROI 600%
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'cold-sales-plan',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="План холодной продажи"
        subtitle="Пошаговая стратегия выхода на клиента"
        imageIndex={2}
        imageAlt="План действий"
      />
    ),
  },
  {
    id: 'cold-sales-plan-details',
    header: 'Пошаговая стратегия',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}
          >
            📅 НЕДЕЛЯ 1: ПОДГОТОВКА
            {'\n'}├─ Подготовить кейсы (2–3 похожих компании)
            {'\n'}├─ Создать краткую оценку потребностей
            {'\n'}├─ Подготовить ROI‑калькулятор
            {'\n'}└─ Записать демо‑видео (3–5 минут)
            {'\n'}
            {'\n'}📅 НЕДЕЛЯ 2: ПЕРВЫЙ КОНТАКТ
            {'\n'}├─ Звонок по +7 (495) 011 15 37
            {'\n'}├─ Ключевая фраза:
            {'\n'}│ "Вы растите на 58% — текущие системы не потянут.
            {'\n'}│ Мы помогли похожим компаниям управлять ростом
            {'\n'}│ БЕЗ увеличения численности."
            {'\n'}└─ Цель: согласовать встречу на 30 мин
            {'\n'}
            {'\n'}📅 НЕДЕЛЯ 3: ВСТРЕЧА
            {'\n'}├─ Дата: вторник/четверг, 10:00–11:00
            {'\n'}├─ Место: его выбор (офис, видео, кофе)
            {'\n'}├─ Структура: проблемы → решения → ROI → кейсы
            {'\n'}└─ Вывод: пилотный проект или ТП
            {'\n'}
            {'\n'}📅 НЕДЕЛЯ 4–5: ТЕХНИЧЕСКОЕ ПРЕДЛОЖЕНИЕ
            {'\n'}├─ Отправить ТП с разбивкой по этапам
            {'\n'}├─ Предложить Quick Win проект (30 дней)
            {'\n'}└─ Цель: контракт на запуск
            {'\n'}
            {'\n'}📅 НЕДЕЛЯ 6–7: ДОГОВОР И ЗАПУСК
            {'\n'}├─ Согласовать детали
            {'\n'}├─ Подписать контракт
            {'\n'}└─ Начать работу ✅
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'key-arguments',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Ключевые аргументы продажи"
        subtitle="Как убедить генерального директора"
        imageIndex={3}
        imageAlt="Аргументы продажи"
      />
    ),
  },
  {
    id: 'key-arguments-details',
    header: 'Как убедить ГД?',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <List
            dataSource={[
              {
                title: 'АРГУМЕНТ 1: ПРОБЛЕМА',
                quote:
                  'Вы растите на 58%, но маржа падает с 26% до 17%. Это признак того, что текущие системы не справляются с ростом.',
              },
              {
                title: 'АРГУМЕНТ 2: ПРИЧИНА',
                quote:
                  'Вам нужна видимость: CRM (кто покупает), BI (что продается), автоматизация (как работает). Сейчас всё это на людях.',
              },
              {
                title: 'АРГУМЕНТ 3: РЕШЕНИЕ',
                quote:
                  'Вместо найма новых сотрудников — внедрим системы. За 4–6 месяцев восстановим маржу и добавим 20–30% выручки.',
              },
              {
                title: 'АРГУМЕНТ 4: ДОКАЗАТЕЛЬСТВО',
                quote:
                  'Вот кейсы похожих компаний. Вот ROI‑калькулятор. Давайте сделаем пилот на CRM — 30 дней, 150 тыс., сразу увидите результат.',
              },
              {
                title: 'АРГУМЕНТ 5: СРОЧНОСТЬ',
                quote:
                  'Конкурент Hilberg уже на Wildberries и Яндекс.Маркет. Вы упускаете 25% потенциальной выручки каждый месяц.',
              },
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '8px 0' }}>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>{item.title}</Text>
                  <Paragraph italic>{item.quote}</Paragraph>
                </Space>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'objections',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Возражения и ответы"
        subtitle="Что может сказать ГД и как реагировать"
        imageIndex={4}
        imageAlt="Работа с возражениями"
      />
    ),
  },
  {
    id: 'objections-table',
    header: 'Типовые возражения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Table
            dataSource={[
              {
                key: '1',
                objection: '«У нас нет времени на новые системы»',
                answer:
                  'Именно поэтому нужны системы — чтобы сэкономить ваше время. Пилот 30 дней, вы увидите результат.',
              },
              {
                key: '2',
                objection: '«Это дорого»',
                answer:
                  'Инвестиция 150 тыс. вернётся за 2 месяца через экономию. ROI 150%.',
              },
              {
                key: '3',
                objection: '«Мы боимся рисков»',
                answer:
                  'Начнём с Quick Win. Если не сработает — вернём деньги.',
              },
              {
                key: '4',
                objection: '«У нас уже Клеверенс»',
                answer:
                  'Хорошо! Клеверенс — это склад. Нам нужны системы для продаж (CRM) и управления (BI).',
              },
              {
                key: '5',
                objection: '«Может быть потом?»',
                answer:
                  'Конкурент на Wildberries уже сейчас. Каждый месяц задержки = упущенная выручка.',
              },
              {
                key: '6',
                objection: '«Нужно обсудить с учредителями»',
                answer: 'Отлично! Вот демо. Давайте встречу втроём?',
              },
            ]}
            columns={[
              {
                title: 'Возражение',
                dataIndex: 'objection',
                key: 'objection',
                width: '40%',
              },
              {
                title: 'Ответ',
                dataIndex: 'answer',
                key: 'answer',
                width: '60%',
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
    id: 'checklist',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Контрольный лист"
        subtitle="Что подготовить до, во время и после контакта"
        imageIndex={5}
        imageAlt="Чек‑лист"
      />
    ),
  },
  {
    id: 'checklist-details',
    header: 'Чек-лист перед холодной продажей',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>До звонка</Title>
          <List
            dataSource={[
              'Подготовлены 3 кейса похожих компаний',
              'Готов ROI‑калькулятор для CRM',
              'Записано демо‑видео (3–5 мин)',
              'Подготовлены 3 основных аргумента',
              'Найдена правильная информация о ГД и компании',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Tag color="blue" style={{ marginRight: 8 }}>
                  До
                </Tag>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={5}>Во время звонка</Title>
          <List
            dataSource={[
              'Представиться (имя, компания, что делаете)',
              'Привести 1 аргумент (проблема с маржой)',
              'Предложить встречу (конкретная дата/время)',
              'Сказать, сколько времени займет (30 минут)',
              'Получить согласие на встречу или другую дату',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Tag color="green" style={{ marginRight: 8 }}>
                  Звонок
                </Tag>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={5}>После встречи</Title>
          <List
            dataSource={[
              'Отправить ТП в течение 24 часов',
              'Предложить пилотный проект',
              'Установить дату следующего контакта',
              'Отправить кейсы и демо',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Tag color="orange" style={{ marginRight: 8 }}>
                  После
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
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Контакты и быстрые ссылки"
        subtitle="Вся информация для звонка на одном слайде"
        imageIndex={6}
        imageAlt="Контакты"
      />
    ),
  },
  {
    id: 'contacts-details',
    header: 'Информация для звонка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}
          >
            📞 ГОРЯЧИЙ КОНТАКТ
            {'\n'}
            {'\n'}Компания: ООО «РОСОМАХАТУЛ»
            {'\n'}Генеральный директор: Кириллов Кирилл Александрович
            {'\n'}Телефон: +7 (495) 011 15 37
            {'\n'}Адрес: Москва, МО Внуково, д. Толстопальцево, ул. Советская,
            д. 1{'\n'}
            {'\n'}ИНН: 7725408992 | ОГРН: 5177746320769
            {'\n'}
            {'\n'}🌐 ВЕБ‑САЙТЫ
            {'\n'}Сайт:{' '}
            <Link
              href="https://xn--80aa7abjamjnkt.xn--p1ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://xn--80aa7abjamjnkt.xn--p1ai
            </Link>
            {'\n'}💡 ЛУЧШЕЕ ВРЕМЯ ДЛЯ ЗВОНКА
            {'\n'}Вторник–четверг, 10:00–12:00
            {'\n'}
            {'\n'}📊 ФИНАНСОВЫЕ ДАННЫЕ (2024)
            {'\n'}Выручка: 252,9 млн ₽{'\n'}Прибыль: 44,1 млн ₽{'\n'}Рост: +58%
            год к году
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'success-probability',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Итоговая оценка"
        subtitle="Вероятность успеха холодной продажи"
        imageIndex={7}
        imageAlt="Оценка вероятности успеха"
      />
    ),
  },
  {
    id: 'success-probability-details',
    header: 'Вероятность успеха холодной продажи',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}
          >
            ФАКТОРЫ УСПЕХА ВЕРОЯТНОСТЬ
            {'\n'}┌─────────────────────────────────────┐
            {'\n'}│ Финансовая способность платить ✅ │ 80%
            {'\n'}│ Острая потребность в IT ✅ │ 85%
            {'\n'}│ Открытость к инновациям ✅ │ 75%
            {'\n'}│ Доступность ЛПР ⚠️ │ 60%
            {'\n'}│ Готовность инвестировать ✅ │ 70%
            {'\n'}│ Нет крупных конкурентов ✅ │ 65%
            {'\n'}└─────────────────────────────────────┘
            {'\n'} СРЕДНЯЯ ВЕРОЯТНОСТЬ: 72%
            {'\n'}
            {'\n'}= ВЫСОКАЯ ВЕРОЯТНОСТЬ УСПЕХА ✅
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Рекомендация
          </Title>
          <List
            dataSource={[
              'ДЕЙСТВОВАТЬ НЕМЕДЛЕННО',
              'Компания растет быстро',
              'Конкуренты не спят',
              'Окно возможности: 1–2 месяца',
              'Quick Win‑проект окупится за 2 месяца',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'final-summary',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Финальный слайд"
        subtitle="Резюме и первые шаги"
        imageIndex={8}
        imageAlt="Финальный резюме"
      />
    ),
  },
  {
    id: 'final-summary-details',
    header: 'Резюме',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}
          >
            ✅ Компания быстро растет (58% выручка)
            {'\n'}✅ Финансово здорова (44 млн прибыли)
            {'\n'}✅ Открыта инновациям (Клеверенс 2024)
            {'\n'}✅ Испытывает острую потребность в IT
            {'\n'}✅ ГД принимает решения о покупке
            {'\n'}
            {'\n'}⏰ ВРЕМЯ ДЕЙСТВОВАТЬ: СЕЙЧАС
            {'\n'}
            {'\n'}🚀 ПЕРВЫЕ ШАГИ:
            {'\n'}1. Подготовить кейсы и демо
            {'\n'}2. Позвонить ГД
            {'\n'}3. Согласовать встречу
            {'\n'}4. Провести питч
            {'\n'}5. Отправить ТП
            {'\n'}6. Получить контракт
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
