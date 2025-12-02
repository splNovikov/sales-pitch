import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  TrophyOutlined,
  CodeOutlined,
  MessageOutlined,
  TeamOutlined,
  UserOutlined,
  BuildOutlined,
} from '@ant-design/icons';
import Logo from '~shared/ui/logo';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { tatneftCreatedAt } from './tatneft.meta';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Tatneft presentation
 * Short presentation about the project continuation
 */
export const tatneftSlides: SlideData[] = [
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
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <Logo size="xl" fillColor="var(--app-color-primary)" />
          <Title level={1} style={{ marginTop: 'var(--app-spacing-md)' }}>
            Proxima Jaxel Tatneft
          </Title>
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              opacity: 0.6,
              marginTop: 'auto',
            }}
          >
            {formatDateForSlide(tatneftCreatedAt)}
          </Text>
        </Space>
      </Space>
    ),
  },
  {
    id: 'background',
    header: 'Предыстория',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalendarOutlined style={{ marginRight: 8 }} />
            28 ноября 2025
          </Title>
          <Paragraph>
            Была проведена презентация для <Text strong>Татнефти</Text>.
            Проходила борьба подрядчиков за проект.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Контекст
          </Title>
          <List
            size="small"
            dataSource={[
              'Конкурс среди подрядчиков',
              'Несколько компаний боролись за проект',
              'Требовалось продемонстрировать экспертизу',
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
    id: 'case',
    header: 'Кейс',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Задача проекта
          </Title>
          <Paragraph>
            Кейс у них был —{' '}
            <Text strong>отсеивание ложных срабатываний датчиков</Text>.
          </Paragraph>
          <Divider style={{ margin: '16px 0' }} />
          <Paragraph type="secondary" style={{ fontSize: '14px' }}>
            Можно открыть презентацию Proxima и показать начало для более
            детального понимания задачи.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Суть решения
          </Title>
          <List
            size="small"
            dataSource={[
              'Алгоритмическое решение для фильтрации ложных срабатываний',
              'Анализ данных с датчиков',
              'Оптимизация работы системы мониторинга',
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
    id: 'results',
    header: 'Результаты презентации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Успех проекта
          </Title>
          <Paragraph>
            <Text strong>Презентацию делал я, защищал её тоже я</Text>, и на
            фоне остальных у нас не было конкуренции.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Ключевые факторы успеха
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Экспертиза</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Глубокая проработка решения
                  </Text>
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
                  <Text strong>Презентация</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Качественная подача материала
                  </Text>
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
                  <Text strong>Техническая компетентность</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Понимание задачи и решения
                  </Text>
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
                  <Text strong>Конкурентное преимущество</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Выделялись на фоне других
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'features',
    header: 'Особенности проекта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Ключевая особенность
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '1px solid #91d5ff',
              marginTop: 16,
            }}
          >
            <Paragraph style={{ fontSize: '18px', margin: 0 }}>
              <Text strong>
                Преимущественно ожидалось{' '}
                <Tag color="blue">алгоритмическое решение</Tag>
              </Text>
            </Paragraph>
          </Card>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Подход к решению
          </Title>
          <List
            size="small"
            dataSource={[
              'Фокус на алгоритмической части',
              'Разработка эффективных алгоритмов фильтрации',
              'Оптимизация производительности',
              'Минимизация ложных срабатываний',
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
    id: 'today',
    header: 'Сегодня',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MessageOutlined style={{ marginRight: 8 }} />
            Новое задание
          </Title>
          <Paragraph>
            Вернулись со следующим заданием от <Text strong>Татнефти</Text>.
          </Paragraph>
        </Card>
        <Card
          style={{
            backgroundColor: '#f0f5ff',
            border: '1px solid #adc6ff',
          }}
        >
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Space align="start">
              <UserOutlined
                style={{
                  fontSize: '20px',
                  color: '#1890ff',
                  marginTop: 4,
                }}
              />
              <Space orientation="vertical" size="small" style={{ flex: 1 }}>
                <Text strong>Сергей Забелин</Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  2 декабря 2025, 15:54
                </Text>
              </Space>
            </Space>
            <Divider style={{ margin: '12px 0' }} />
            <Paragraph style={{ margin: 0, fontSize: '15px' }}>
              Вчера с командой ИТ ПАРКА обсудили дальнейшие шаги. Нужно
              подготовить вопросы, информацию, которая нам нужна для подготовки
              ТКП от ТАТНЕФТИ.
            </Paragraph>
            <Paragraph style={{ margin: '12px 0 0 0', fontSize: '15px' }}>
              Сделают группу с представителем татанефти, туда можно будет задать
              вопросы.
            </Paragraph>
            <Paragraph style={{ margin: '12px 0 0 0', fontSize: '15px' }}>
              Пока подготовить информацию — какие нам нужны данные, что бы
              точнее оценить проект.
            </Paragraph>
            <Paragraph style={{ margin: '12px 0 0 0', fontSize: '15px' }}>
              Дальше финансово экономическое обоснование делаем совместно с
              Татнефтью, подразделение, которое заказало проект и в путь.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'approach',
    header: 'Как я вижу подход',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            План работы
          </Title>
          <List
            size="default"
            dataSource={[
              {
                letter: 'а)',
                title: 'Подготовка вопросов',
                description:
                  'Даёте мне архитектора, я с ним работаю и до пятницы мы делаем список вопросов, которые я оформляю в презентацию',
              },
              {
                letter: 'б)',
                title: 'Составление ТКП',
                description:
                  'Когда мы выигрываем, переходим с вами к составлению ТКП. Тут я тоже могу поучаствовать, но нужна помощь менеджера, который будет этот проект курировать',
              },
              {
                letter: 'в)',
                title: 'Набор команды',
                description:
                  'Набираем команду (я знаю что бенч почти на нуле). Я готов в этом участвовать, собеседовать людей',
              },
              {
                letter: 'г)',
                title: 'Роли в проекте',
                description:
                  'Я по факту буду выполнять для Татнефти роль менеджера проекта, но по факту просто курировать менеджера на стороне Jx',
              },
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{
                  padding: '16px 0',
                  borderBottom: index < 3 ? '1px solid #f0f0f0' : 'none',
                }}
              >
                <Space align="start" style={{ width: '100%' }}>
                  <Tag
                    color="blue"
                    style={{
                      fontSize: '16px',
                      padding: '4px 8px',
                      minWidth: '40px',
                      textAlign: 'center',
                    }}
                  >
                    {item.letter}
                  </Tag>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ flex: 1 }}
                  >
                    <Text strong style={{ fontSize: '16px' }}>
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: '14px' }}>{item.description}</Text>
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
    id: 'why-jx',
    header: 'Почему Jx',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Выбор компании
          </Title>
          <Paragraph>
            Я пришёл сразу в <Text strong>Jx</Text>. Во-первых потому что в
            компании уверен, во-вторых знаю что у <Text strong>Родина</Text> был
            похожий кейс.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Преимущества
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Уверенность в компании</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Проверенная команда и процессы
                  </Text>
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
                  <Text strong>Релевантный опыт</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    У Родина был похожий кейс
                  </Text>
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
                  <Text strong>Прямой выбор</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Пришёл сразу в Jx
                  </Text>
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
                  <Text strong>Не рассматривал альтернативы</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Предложения про команды из Томска даже не рассматривал
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
];
