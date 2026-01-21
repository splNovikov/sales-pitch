import {
  Typography,
  List,
  Space,
  Card,
  Row,
  Col,
  Tag,
  Table,
} from 'antd';
import {
  CheckCircleOutlined,
  RocketOutlined,
  CalendarOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  ApiOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
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
                Результат многочисленных итераций. <Text strong>Удобен для обученных специалистов</Text>,
                проверен временем.
              </Paragraph>
              <Title level={5} style={{ color: '#faad14' }}>Ограничения:</Title>
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
                <Text strong>Отличный визуальный дизайн</Text>, современный и понятный интерфейс.
              </Paragraph>
              <Title level={5} style={{ color: '#faad14' }}>Ограничения:</Title>
              <List size="small">
                <List.Item>Нет возможности переключения режимов цен</List.Item>
                <List.Item>Отсутствует гибкость ценообразования</List.Item>
              </List>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4}><TrophyOutlined /> Решение Эксима</Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}>
            Объединяем <Text strong>проверенную функциональность</Text> первого инструмента
            с <Text strong>современным интерфейсом</Text> второго. Результат — удобный инструмент
            с прозрачным переключением режимов ценообразования.
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
              <List.Item>Специалист подбирает плитку вместе с клиентом</List.Item>
              <List.Item>Специалист набивает заказ в инструменте Эксима</List.Item>
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

  // Slide 4: Section Divider - Solution Components
  {
    id: 'solution-components-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Основные Компоненты Решения"
        subtitle="Детальный обзор функциональных блоков системы"
      />
    ),
  },

  // Slide 5: Catalog & Search Features
  {
    id: 'catalog-search',
    header: 'Каталог',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Title level={5}>Основные возможности</Title>
              <List size="small">
                <List.Item>🌍 Группировка по странам производителей</List.Item>
                <List.Item>🔍 Поиск по названию, артикулу, стране</List.Item>
                <List.Item>👁️ Быстрый предпросмотр без открытия карточки</List.Item>
                <List.Item>🎨 Фильтры по цвету, текстуре, размеру</List.Item>
              </List>
            </Col>
            <Col span={12}>
              <Title level={5} style={{ color: '#8c8c8c' }}>AI-ассистент <Tag color="default">На перспективу</Tag></Title>
              <Card style={{ backgroundColor: '#f5f5f5', opacity: 0.7 }}>
                <Paragraph style={{ color: '#8c8c8c' }}>
                  <Text type="secondary">Примеры запросов:</Text>
                </Paragraph>
                <List size="small">
                  <List.Item style={{ color: '#8c8c8c' }}>"зелененькая в точечку"</List.Item>
                  <List.Item style={{ color: '#8c8c8c' }}>"под мрамор"</List.Item>
                </List>
                <Text type="secondary" style={{ fontSize: 12 }}>Не входит в текущий скоуп</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <FeaturesSlide
          columns={3}
          wrapInCard={false}
          cards={[
            {
              title: 'Страница Бренда',
              items: [
                'Обзор всех продуктов',
                'Информация о бренде',
                'Фильтры по типу, размеру',
              ],
            },
            {
              title: 'Страница Коллекции',
              items: [
                'Сетка товаров с превью',
                'Быстрые фильтры',
                'Информация о наличии',
              ],
            },
            {
              title: 'Карточка Товара',
              items: [
                'Калькулятор единиц',
                'Галерея изображений',
                'Характеристики',
              ],
            },
          ]}
        />
      </Space>
    ),
  },

  // Slide 6: Order Management
  {
    id: 'order-management',
    header: 'Управление Заказами',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={12}>
          <Card>
            <Title level={4}>
              <ShoppingCartOutlined /> Корзина Специалиста
            </Title>
            <List size="small">
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Сохранение
                заказов для каждого юр. лица
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Возможность
                сохранить черновик
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Контроль
                суммы и состава заказа
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} />{' '}
                Редактирование количества
              </List.Item>
            </List>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Title level={4}>
              <ClockCircleOutlined /> История Заказов
            </Title>
            <List size="small">
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Статусы
                синхронизируются из 1С
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Фильтры по
                дате, статусу
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Быстрый
                доступ к повторному заказу
              </List.Item>
            </List>
          </Card>
        </Col>
        <Col span={24}>
          <Card style={{ backgroundColor: '#fff7e6' }}>
            <Title level={5}>Оформление Заказа</Title>
            <Paragraph style={{ marginBottom: 0 }}>
              📧 Подтверждение и отправка письмом в Eksima (без резервирования в 1С для исключения засорения)
            </Paragraph>
          </Card>
        </Col>
      </Row>
    ),
  },

  // Slide 7: Admin Settings
  {
    id: 'admin-settings',
    header: 'Настройки Администратора',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>💰 Управление Ценообразованием</Title>
          <List size="small">
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Переключение
              между рекомендованными производителем ценами
            </List.Item>
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Управление
              собственной стоимостью: коэффициент наценки или фиксированная
              маржа для каждого предприятия
            </List.Item>
          </List>
        </Card>
        <FeaturesSlide
          columns={3}
          wrapInCard={false}
          cards={[
            {
              title: 'Пользователи',
              items: [
                'Управление правами',
                'Добавление предприятий',
                'Управление менеджерами',
              ],
            },
            {
              title: 'Интеграция',
              items: [
                'Синхронизация с 1С',
                'Настройки расписания',
                'Логи синхронизации',
              ],
            },
            {
              title: 'Уведомления',
              items: [
                'Email-уведомления',
                'Напоминания',
                'История уведомлений',
              ],
            },
          ]}
        />
      </Space>
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
              description: 'Уточнение требований к API Bitrix. Дизайн структуры данных. Подготовка тестовых данных из 1С.',
            },
            {
              title: 'Фаза 2: Frontend - Основной функционал',
              duration: '3-7 недели',
              icon: <RocketOutlined />,
              color: 'green',
              description: 'Каталог и поиск по коллекциям. Карточка товара с калькулятором. Корзина и оформление заказа.',
            },
            {
              title: 'Фаза 3: Backend - API',
              duration: '5-9 недели',
              icon: <ApiOutlined />,
              color: 'purple',
              description: 'Разработка API endpoints. Настройка синхронизации с 1С. Система уведомлений.',
            },
            {
              title: 'Фаза 4: Интеграция и Тестирование',
              duration: '8-10 недели',
              icon: <CheckCircleOutlined />,
              color: 'orange',
              description: 'Подключение frontend к backend. Юзабилити-тестирование. Оптимизация производительности.',
            },
            {
              title: 'Фаза 5: Доработки и Запуск',
              duration: '11-12 недели',
              icon: <TrophyOutlined />,
              color: 'gold',
              description: 'Правки по обратной связи. Подготовка к production. Обучение пользователей.',
            },
          ]}
        />
        <Text type="secondary" style={{ fontSize: 12 }}>
          * Сроки могут измениться в зависимости от особенностей текущей конфигурации 1С или иных факторов
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
              render: (text) => <Text strong style={{ fontSize: '16px' }}>{text}</Text>,
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
            <List.Item>Интеграция с вашей 1С (Bitrix разворачиваем сами)</List.Item>
            <List.Item>Дизайн UI/UX — совместно с заказчиком «на лету»</List.Item>
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
              <Title level={4}><RocketOutlined style={{ color: '#52c41a' }} /> Быстрый старт</Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                ~12 недель до готового продукта. Минимальное время от согласования до запуска.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%' }}>
              <Title level={4}><DollarOutlined style={{ color: '#52c41a' }} /> Низкие затраты на поддержку</Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                Интеграция с вашей 1С. Данные обновляются автоматически — без ручной работы.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%' }}>
              <Title level={4}><CheckCircleOutlined style={{ color: '#52c41a' }} /> Готовность к росту</Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                Решение справится с увеличением числа пользователей и товаров без переделки.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4}><TrophyOutlined /> Итог</Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}>
            Вы получаете <Text strong>современный инструмент</Text> с прозрачным переключением цен,
            который <Text strong>интегрируется с вашей 1С</Text> и не требует значительных затрат на обслуживание.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
