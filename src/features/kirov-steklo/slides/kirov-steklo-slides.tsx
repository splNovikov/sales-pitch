import { Typography, List, Space, Divider, Card, Row, Col } from 'antd';
import {
  MessageOutlined,
  ThunderboltOutlined,
  SettingOutlined,
  LinkOutlined,
  BarChartOutlined,
  RocketOutlined,
  ApiOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for Kirov Steklo presentation
 * Based on documentation in features/kirov-steklo/docs
 */
export const kirovStekloSlides: SlideData[] = [
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
          <Title level={2} style={{ margin: 0, fontWeight: 500 }}>
            Производственная компания Марата Гайнуловича
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Производство зеркал и стекол под индивидуальные размеры
          </Paragraph>
          <Link
            href="https://kirovsteklo.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 'var(--app-font-size-lg)' }}
          >
            kirovsteklo.ru
          </Link>
        </Space>
      </Space>
    ),
  },
  {
    id: 'problem',
    header: 'Проблематика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={3}>Критические проблемы текущего состояния</Title>
          <List
            size="large"
            dataSource={[
              {
                title: 'Заявки приходят в разрозненном виде',
                description:
                  'Заявки поступают в свободной форме (текст, голос, фото). Нет цели жестко формализировать заявку на входе, чтобы не снижать количество заявок. Требуется гибкая система распознавания и обработки неформализованных заявок',
              },
              {
                title: 'Отсутствие централизованной IT-системы',
                description:
                  'Весь учет ведется в электронных таблицах. Нет единой системы управления производством. Электронные таблицы не справляются с масштабом операций',
              },
              {
                title: 'Проблемы с Битрикс24',
                description:
                  'Система используется, но не выполняет основные задачи. Плохо справляется с отслеживанием статусов заявок. Не обеспечивает контроль прохождения производственного цикла',
              },
              {
                title: 'Отсутствие прозрачности процессов',
                description:
                  'Руководство не имеет четкого представления о производственных процессах. Нет возможности оперативного мониторинга. Сложно контролировать загрузку производства',
              },
              {
                title: 'Разрозненные каналы коммуникации',
                description:
                  'Множество каналов приема заявок не интегрированы между собой. Отсутствует единая точка входа для заказов. Нет автоматизированного информирования',
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
        </div>
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
          Создание единой IT-системы для полного цикла управления заказами от
          приема заявки до выдачи готовой продукции с полным отказом от
          электронных таблиц
        </Title>
      </Space>
    ),
  },
  {
    id: 'solution-overview',
    header: 'Верхнеуровневая архитектура решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <MessageOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                1. Каналы приема заявок
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Веб-форма, Email, Telegram, WhatsApp, Avito, ВКонтакте
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <ThunderboltOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                2. Распознавание и обработка
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Интеллектуальное распознавание неформализованных заявок
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <SettingOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                3. Управление производством
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Производственные карточки, отслеживание этапов, статусы
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <LinkOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                4. Интеграции
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Платежные системы, автоматическое информирование
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Title level={4} style={{ marginTop: 0 }}>
                <BarChartOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)' }}
                />
                5. Аналитика
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                Мониторинг процессов, отчетность для руководства
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'solution-variants',
    header: 'Варианты реализации решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={8}>
            <Card>
              <Title level={3} style={{ marginTop: 0 }}>
                <RocketOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)', color: 'var(--app-color-primary)' }}
                />
                Вариант 1: Bitrix-центричное
              </Title>
              <Paragraph>
                <Text strong>Максимальное использование возможностей Битрикс24</Text>
              </Paragraph>
              <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
              <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                <div>
                  <Text strong>Сроки:</Text>
                  <Paragraph style={{ margin: '4px 0' }}>
                    2-3.5 месяца до MVP
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Быстрый старт',
                      'Минимальная разработка',
                      'Единая экосистема',
                    ]}
                    renderItem={item => <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>}
                  />
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card>
              <Title level={3} style={{ marginTop: 0 }}>
                <ApiOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)', color: 'var(--app-color-primary)' }}
                />
                Вариант 2: Гибридное
              </Title>
              <Paragraph>
                <Text strong>Битрикс как backend/CRM, специализированный frontend</Text>
              </Paragraph>
              <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
              <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                <div>
                  <Text strong>Сроки:</Text>
                  <Paragraph style={{ margin: '4px 0' }}>
                    6-8.5 месяцев до MVP
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'UX оптимизация',
                      'Гибкость',
                      'Современный стек',
                    ]}
                    renderItem={item => <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>}
                  />
                </div>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card>
              <Title level={3} style={{ marginTop: 0 }}>
                <CodeOutlined
                  style={{ marginRight: 'var(--app-spacing-xs)', color: 'var(--app-color-primary)' }}
                />
                Вариант 3: Независимое
              </Title>
              <Paragraph>
                <Text strong>Полностью кастомная разработка без Битрикс</Text>
              </Paragraph>
              <Divider style={{ margin: 'var(--app-spacing-sm) 0' }} />
              <Space orientation="vertical" size="small" style={{ width: '100%' }}>
                <div>
                  <Text strong>Сроки:</Text>
                  <Paragraph style={{ margin: '4px 0' }}>
                    9-11.5 месяцев до MVP
                  </Paragraph>
                </div>
                <div>
                  <Text strong>Ключевые преимущества:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Полная кастомизация',
                      'Независимость',
                      'Идеальный UX',
                    ]}
                    renderItem={item => <List.Item style={{ padding: '4px 0' }}>{item}</List.Item>}
                  />
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
  {
    id: 'demo-title',
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
          Демонстрация сценария
        </Title>
        <Divider style={{ margin: 'var(--app-spacing-lg) 0', width: '200px' }} />
        <Paragraph
          style={{
            fontSize: 'var(--app-font-size-xl)',
            textAlign: 'center',
            maxWidth: '800px',
            margin: 0,
            fontStyle: 'italic',
          }}
        >
          "Прием заявки и создание заказа"
        </Paragraph>
        <Paragraph style={{ marginTop: 'var(--app-spacing-lg)', marginBottom: 0 }}>
          <Text type="secondary" italic>
            На примере каждого из решений
          </Text>
        </Paragraph>
      </Space>
    ),
  },
];
