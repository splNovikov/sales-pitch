import { Typography, List, Space, Card, Row, Col, Table } from 'antd';
import {
  CheckCircleOutlined,
  RocketOutlined,
  CalendarOutlined,
  DollarOutlined,
  ApiOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { Roadmap } from '~shared/ui/roadmap';
import { eksimaKpCreatedAt } from './eksima-kp.meta';
import eksimaLogo from './img.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for EKSIMA Commercial Proposal presentation
 * Based on eksima_kp.md
 */
export const eksimaKpSlides: SlideData[] = [
  // Slide 1: Title
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        logo={eksimaLogo}
        logoAlt="EKSIMA"
        logoMaxWidth={400}
        title="Инструмент для розничных точек"
        createdAt={eksimaKpCreatedAt}
        location="Санкт-Петербург"
      />
    ),
  },

  // Slide 2: Introduction
  {
    id: 'introduction',
    header: 'Два инструмента — берём лучшее из каждого',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Card>
              <Title level={4}>Текущий инструмент</Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                Результат многочисленных итераций.{' '}
                <Text strong>Удобен для обученных специалистов</Text>, проверен
                временем.
              </Paragraph>
              <Title level={5} style={{ color: '#faad14' }}>
                Ограничения:
              </Title>
              <List size="small">
                <List.Item>Неинтуитивное переключение режимов цен</List.Item>
                <List.Item>Непрозрачно, где какие цены отображаются</List.Item>
                <List.Item>Устаревший интерфейс</List.Item>
              </List>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Title level={4}>Альтернативный инструмент</Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                <Text strong>Отличный визуальный дизайн</Text>, современный и
                понятный интерфейс.
              </Paragraph>
              <Title level={5} style={{ color: '#faad14' }}>
                Ограничения:
              </Title>
              <List size="small">
                <List.Item>Нет возможности переключения режимов цен</List.Item>
                <List.Item>Отсутствует гибкость ценообразования</List.Item>
              </List>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4}>
            <TrophyOutlined /> Решение Эксима
          </Title>
          <Paragraph
            style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}
          >
            Объединяем <Text strong>проверенную функциональность</Text> первого
            инструмента с <Text strong>современным интерфейсом</Text> второго.
            Результат — удобный инструмент с прозрачным переключением режимов
            ценообразования.
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 3: Use Cases
  {
    id: 'use-cases',
    header: 'Ключевые Сценарии Использования',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <Card>
            <Title level={4}>Совместный подбор в шоуруме (80%)</Title>
            <List size="small">
              <List.Item>
                Специалист подбирает плитку вместе с клиентом
              </List.Item>
              <List.Item>
                Специалист набивает заказ в инструменте Эксима
              </List.Item>
              <List.Item>Калькулятор пересчитывает штуки/м²/коробки</List.Item>
              <List.Item>Клиент видит рекомендованные розничные цены</List.Item>
              <List.Item>Заказ отправляется письмом в Eksima</List.Item>
            </List>
          </Card>
        </Col>
        <Col span={10}>
          <Card>
            <Title level={4}>Самостоятельный подбор (20%)</Title>
            <List size="small">
              <List.Item>Фильтры по производителю и коллекции</List.Item>
              <List.Item>Быстрый предпросмотр образцов</List.Item>
              <List.Item>Группировка по странам</List.Item>
            </List>
          </Card>
        </Col>
      </Row>
    ),
  },

  // Slide 4: Demo Section
  {
    id: 'demo-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Демонстрация"
        subtitle="Шаблон платформы для розничных точек"
      />
    ),
  },

  // Slide 8: Timeline
  {
    id: 'timeline',
    header: 'Сроки Реализации: ~12 Недель*',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Roadmap
          mode="alternate"
          items={[
            {
              title: 'Фаза 1: Подготовка и Архитектура',
              duration: '1-2 недели',
              icon: <CalendarOutlined />,
              color: 'blue',
              description:
                'Уточнение требований к API Bitrix. Дизайн структуры данных. Подготовка тестовых данных из 1С.',
            },
            {
              title: 'Фаза 2: Frontend - Основной функционал',
              duration: '3-7 недели',
              icon: <RocketOutlined />,
              color: 'green',
              description:
                'Каталог и поиск по коллекциям. Карточка товара с калькулятором. Корзина и оформление заказа.',
            },
            {
              title: 'Фаза 3: Backend - API',
              duration: '5-9 недели',
              icon: <ApiOutlined />,
              color: 'purple',
              description:
                'Разработка API endpoints. Настройка синхронизации с 1С. Система уведомлений.',
            },
            {
              title: 'Фаза 4: Интеграция и Тестирование',
              duration: '8-10 недели',
              icon: <CheckCircleOutlined />,
              color: 'orange',
              description:
                'Подключение frontend к backend. Юзабилити-тестирование. Оптимизация производительности.',
            },
            {
              title: 'Фаза 5: Доработки и Запуск',
              duration: '11-12 недели',
              icon: <TrophyOutlined />,
              color: 'gold',
              description:
                'Правки по обратной связи. Подготовка к production. Обучение пользователей.',
            },
          ]}
        />
        <Text type="secondary" style={{ fontSize: 12 }}>
          * Сроки могут измениться в зависимости от особенностей текущей
          конфигурации 1С или иных факторов
        </Text>
      </Space>
    ),
  },

  // Slide 9: Budget
  {
    id: 'budget',
    header: 'Стоимость Проекта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              component: 'Frontend разработка (React)',
              volume: '5-6 недель',
              cost: '150 000 ₽',
            },
            {
              key: '2',
              component: 'Backend API разработка (Bitrix)',
              volume: '5-6 недель',
              cost: '140 000 ₽',
            },
            {
              key: '3',
              component: 'Синхронизация 1С ↔ Bitrix',
              volume: '2 недели',
              cost: '60 000 ₽',
            },
            {
              key: '4',
              component: 'Тестирование и QA',
              volume: '2 недели',
              cost: '50 000 ₽',
            },
            {
              key: '5',
              component: 'Развертывание и настройка',
              volume: '1 неделя',
              cost: '40 000 ₽',
            },
            {
              key: '6',
              component: 'Лицензия Bitrix24',
              volume: '—',
              cost: '15 000 ₽',
            },
            {
              key: '7',
              component: 'Буфер на доработки',
              volume: '—',
              cost: '30 000 ₽',
            },
          ]}
          columns={[
            {
              title: 'Компонент',
              dataIndex: 'component',
              key: 'component',
              width: '50%',
            },
            {
              title: 'Объем',
              dataIndex: 'volume',
              key: 'volume',
              width: '20%',
            },
            {
              title: 'Стоимость',
              dataIndex: 'cost',
              key: 'cost',
              width: '30%',
              render: text => (
                <Text strong style={{ fontSize: '16px' }}>
                  {text}
                </Text>
              ),
            },
          ]}
          pagination={false}
          size="small"
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row style={{ backgroundColor: '#f6ffed' }}>
                <Table.Summary.Cell index={0} colSpan={2}>
                  <Text strong style={{ fontSize: '18px' }}>
                    <DollarOutlined /> Итого
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text strong style={{ fontSize: '20px', color: '#52c41a' }}>
                    485 000 ₽
                  </Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={5}>✅ Что включено</Title>
          <List size="small">
            <List.Item>Полный набор функционала по ТЗ</List.Item>
            <List.Item>
              Интеграция с вашей 1С (Bitrix разворачиваем сами)
            </List.Item>
            <List.Item>
              Дизайн UI/UX — совместно с заказчиком «на лету»
            </List.Item>
            <List.Item>Лицензия Bitrix24</List.Item>
            <List.Item>Система уведомлений</List.Item>
            <List.Item>Создание документации, обучение вашей команды</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 10: Advantages
  {
    id: 'advantages',
    header: 'Преимущества Решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card style={{ height: '100%' }}>
              <Title level={4}>
                <RocketOutlined style={{ color: '#52c41a' }} /> Быстрый старт
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                ~12 недель до готового продукта. Минимальное время от
                согласования до запуска.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%' }}>
              <Title level={4}>
                <DollarOutlined style={{ color: '#52c41a' }} /> Низкие затраты
                на поддержку
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                Интеграция с вашей 1С. Данные обновляются автоматически — без
                ручной работы.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%' }}>
              <Title level={4}>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Готовность
                к росту
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                Решение справится с увеличением числа пользователей и товаров
                без переделки.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4}>
            <TrophyOutlined /> Итог
          </Title>
          <Paragraph
            style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}
          >
            Вы получаете <Text strong>современный инструмент</Text> с прозрачным
            переключением цен, который{' '}
            <Text strong>интегрируется с вашей 1С</Text> и не требует
            значительных затрат на обслуживание.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
