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
import { BenefitsTable } from '~shared/ui/benefits-table';
import { FeatureCard } from '~shared/ui/feature-card';
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
        title="Платформа для управления заказами розничных точек"
        description="Коммерческое предложение"
        createdAt={eksimaKpCreatedAt}
        location="Санкт-Петербург"
      />
    ),
  },

  // Slide 2: Introduction
  {
    id: 'introduction',
    header: 'Введение: Текущая ситуация и Возможность',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Сегодня розничные точки, работающие с Eksima, сталкиваются с
            неудобством поиска подходящих товаров, расчета количества и
            оформления заказов. Текущий инструмент требует улучшения в части{' '}
            <Text strong>интуитивности интерфейса</Text>,{' '}
            <Text strong>точности расчетов</Text> и{' '}
            <Text strong>скорости подбора товара</Text>.
          </Paragraph>
        </Card>
        <FeatureCard
          title={<><RocketOutlined /> Наша задача</>}
          items={[
            'Ускорить процесс подбора плитки вместе с клиентом',
            'Обеспечить прозрачность в ценообразовании',
            'Позволить Eksima эффективно управлять заказами без засорения системы',
            'Создать удобный рабочий инструмент, а не просто электронный каталог',
          ]}
          icon={<CheckCircleOutlined />}
          iconColor="green"
          style={{ backgroundColor: '#f6ffed' }}
        />
      </Space>
    ),
  },

  // Slide 3: Use Cases
  {
    id: 'use-cases',
    header: 'Ключевые Сценарии Использования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Сценарий 1: Совместный подбор в шоуруме (80%)</Title>
          <List size="small">
            <List.Item>1. Специалист ищет понравившийся вариант в инструменте</List.Item>
            <List.Item>2. Вводит количество (штуки/м²/коробки) — калькулятор пересчитывает автоматически</List.Item>
            <List.Item>3. Добавляет в корзину, демонстрирует клиенту рекомендованные розничные цены производителя</List.Item>
            <List.Item>4. Завершает заказ, который отправляется письмом в Eksima для обработки</List.Item>
          </List>
          <Text strong style={{ display: 'block', marginTop: 16 }}>
            Ключевая особенность: Клиент видит розничные цены, Eksima управляет
            собственной стоимостью через настройки приложения.
          </Text>
        </Card>
        <Card>
          <Title level={4}>Сценарий 2: Самостоятельный подбор (20%)</Title>
          <Paragraph>Специалист подбирает товар сам через поиск:</Paragraph>
          <List size="small">
            <List.Item>✨ <Text strong>Визуальный поиск:</Text> "зелененькая в точечку" с AI-ассистентом</List.Item>
            <List.Item>🔍 Фильтры по производителю и коллекции</List.Item>
            <List.Item>👁️ Быстрый предпросмотр образцов</List.Item>
            <List.Item>🌍 Группировка по странам (проверено на практике)</List.Item>
          </List>
        </Card>
      </Space>
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
    header: 'Каталог с Интеллектуальным Поиском',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Title level={5}>Основные возможности</Title>
              <List size="small">
                <List.Item>🌍 Группировка по странам производителей</List.Item>
                <List.Item>🔍 Поиск по названию, артикулу, стране</List.Item>
                <List.Item>✨ Визуальный поиск с AI-ассистентом</List.Item>
                <List.Item>👁️ Быстрый предпросмотр без открытия карточки</List.Item>
                <List.Item>🎨 Фильтры по цвету, текстуре, размеру</List.Item>
              </List>
            </Col>
            <Col span={12}>
              <Title level={5}>AI-ассистент</Title>
              <Card style={{ backgroundColor: '#e6f7ff' }}>
                <Paragraph>
                  <Text strong>Примеры запросов:</Text>
                </Paragraph>
                <List size="small">
                  <List.Item>"зелененькая в точечку"</List.Item>
                  <List.Item>"под мрамор"</List.Item>
                  <List.Item>"матовая с точками"</List.Item>
                </List>
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
                <Tag color="blue">Принят</Tag> <Tag color="processing">Собирают</Tag>{' '}
                <Tag color="success">Готов</Tag>
              </List.Item>
              <List.Item>
                <Tag color="cyan">Доставляется</Tag> <Tag color="green">Выполнен</Tag>{' '}
                <Tag color="error">Отменен</Tag>
              </List.Item>
              <List.Item>
                <CheckCircleOutlined style={{ color: '#52c41a' }} /> Фильтры по
                дате, статусу, менеджеру
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
            <Title level={5}>Оформление Заказа (3 шага)</Title>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text strong>Шаг 1:</Text> Выбор предприятия (юр. лица)
              </Col>
              <Col span={8}>
                <Text strong>Шаг 2:</Text> Выбор ответственного менеджера
              </Col>
              <Col span={8}>
                <Text strong>Шаг 3:</Text> Подтверждение и отправка
              </Col>
            </Row>
            <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
              📧 Отправка письмом в Eksima (без резервирования в 1С для
              исключения засорения)
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

  // Slide 8: Section Divider - Benefits
  {
    id: 'benefits-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Преимущества Нового Решения"
        subtitle="Ценность для всех участников процесса"
      />
    ),
  },

  // Slide 9: Benefits for Sales Specialists
  {
    id: 'benefits-sales',
    header: '✅ Для специалистов по продажам',
    content: (
      <BenefitsTable
        benefits={[
          {
            key: '1',
            advantage: 'Интуитивный поиск по коллекциям и странам',
            result: '30% ускорение подбора товара',
          },
          {
            key: '2',
            advantage: 'AI-ассистент для визуального поиска',
            result: '"Зелёненькая в точечку" находится за 30 секунд',
          },
          {
            key: '3',
            advantage: 'Встроенный калькулятор (штуки/м²/коробки)',
            result: 'Исключаются ошибки в расчетах',
          },
          {
            key: '4',
            advantage: 'Визуальный предпросмотр плитки',
            result: 'Клиент видит товар сразу, не ища в каталоге',
          },
          {
            key: '5',
            advantage: 'История заказов с фильтрами',
            result: 'Повторный заказ за 2 клика',
          },
          {
            key: '6',
            advantage: 'Система уведомлений',
            result: 'Контроль статуса без звонков',
          },
        ]}
        advantageWidth="60%"
        resultWidth="40%"
      />
    ),
  },

  // Slide 10: Benefits for Eksima
  {
    id: 'benefits-eksima',
    header: '✅ Для Eksima',
    content: (
      <BenefitsTable
        benefits={[
          {
            key: '1',
            advantage: 'Прозрачная система ценообразования',
            result:
              'Розничные цены для клиента, собственная маржа управляется в настройках',
          },
          {
            key: '2',
            advantage: 'Регулярная синхронизация данных из 1С',
            result: 'Актуальные цены и наличие без ручного обновления',
          },
          {
            key: '3',
            advantage: 'Заказы приходят письмом (без резервирования)',
            result: 'Нет засорения системы черновиками и отменами',
          },
          {
            key: '4',
            advantage: 'Аналитика по использованию',
            result: 'Данные о популярных коллекциях и временах заказов',
          },
          {
            key: '5',
            advantage: 'Сокращение времени на обработку',
            result: 'Структурированные заказы вместо звонков и писем',
          },
        ]}
      />
    ),
  },

  // Slide 11: Benefits for Retail Points
  {
    id: 'benefits-retail',
    header: '✅ Для розничных точек (клиентов специалистов)',
    content: (
      <BenefitsTable
        benefits={[
          {
            key: '1',
            advantage: 'Четкие рекомендованные цены',
            result: 'Нет вопросов о переплате',
          },
          {
            key: '2',
            advantage: 'Быстрый подбор товара',
            result: 'Экономия времени на консультацию',
          },
          {
            key: '3',
            advantage: 'Подтверждение заказа письмом',
            result: 'Юридическая ясность',
          },
          {
            key: '4',
            advantage: 'История своих заказов',
            result: 'Возможность повторить покупку',
          },
        ]}
      />
    ),
  },

  // Slide 12: Technical Stack
  {
    id: 'technical-stack',
    header: 'Технический Стек и Архитектура',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>
            <ApiOutlined /> Выбранный Вариант: React Frontend + Bitrix Backend
          </Title>
        </Card>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Card style={{ backgroundColor: '#e6f7ff' }}>
              <Title level={5}>Frontend (Lovable.dev → React)</Title>
              <List size="small">
                <List.Item>✅ Фреймворк: React с TypeScript</List.Item>
                <List.Item>✅ UI-компоненты: готовые + кастомизация</List.Item>
                <List.Item>✅ Состояние: Context API / Redux</List.Item>
                <List.Item>✅ HTTP-клиент: Axios для работы с Bitrix API</List.Item>
                <List.Item>✅ AI-интеграция: встраивание модели для визуального поиска</List.Item>
                <List.Item>
                  <Text strong>Быстрота разработки: ~4-6 недель</Text>
                </List.Item>
              </List>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>Backend (Bitrix24)</Title>
              <List size="small">
                <List.Item>✅ Существующая инфраструктура Eksima</List.Item>
                <List.Item>✅ REST API для коммуникации с фронтендом</List.Item>
                <List.Item>✅ Синхронизация с 1С: регулярная выгрузка</List.Item>
                <List.Item>✅ Управление пользователями: интеграция с Bitrix</List.Item>
                <List.Item>✅ Email-рассылка: встроенный функционал</List.Item>
                <List.Item>✅ Логирование заказов: база в Bitrix</List.Item>
              </List>
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={5}>Синхронизация данных (1С → Bitrix → Frontend)</Title>
          <Paragraph style={{ fontFamily: 'monospace', fontSize: '14px' }}>
            1С Eksima<br />
            &nbsp;&nbsp;↓ (полная выгрузка каждую ночь + дельта каждые 2 часа)<br />
            Bitrix REST API (каталог + цены + наличие)<br />
            &nbsp;&nbsp;↓<br />
            React Frontend (отображение товаров, поиск)<br />
            &nbsp;&nbsp;↓<br />
            Корзина и заказы<br />
            &nbsp;&nbsp;↓<br />
            Email письмо в Eksima (на адрес заказов)
          </Paragraph>
          <Text strong>Периодичность обновления:</Text>
          <List size="small">
            <List.Item>Полная выгрузка: ночь (00:00 MSK)</List.Item>
            <List.Item>Дельта-обновление цен и наличия: каждые 2 часа</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 13: Timeline
  {
    id: 'timeline',
    header: 'Сроки Реализации: 12 Недель',
    content: (
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
            description: 'Каталог и поиск по коллекциям. AI-ассистент для визуального поиска. Карточка товара с калькулятором. Корзина и оформление заказа.',
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
    ),
  },

  // Slide 14: Budget
  {
    id: 'budget',
    header: 'Стоимость Проекта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              component: 'Frontend разработка (Lovable + React + AI-поиск)',
              volume: '6-7 недель',
              cost: '200 000 ₽',
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
              component: 'Дизайн UI/UX (Figma)',
              volume: '1 неделя',
              cost: '40 000 ₽',
            },
            {
              key: '5',
              component: 'Тестирование и QA',
              volume: '2 недели',
              cost: '50 000 ₽',
            },
            {
              key: '6',
              component: 'Развертывание и настройка',
              volume: '1 неделя',
              cost: '40 000 ₽',
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
                    600 000 ₽
                  </Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Что включено</Title>
              <List size="small">
                <List.Item>Полный набор функционала по ТЗ</List.Item>
                <List.Item>Интеграция с вашей 1С и Bitrix</List.Item>
                <List.Item>Мобильная версия (адаптивный дизайн)</List.Item>
                <List.Item>Система уведомлений</List.Item>
                <List.Item>AI-ассистент для визуального поиска</List.Item>
                <List.Item>Обучение вашей команды</List.Item>
                <List.Item>2 месяца гарантийной поддержки</List.Item>
              </List>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={5}>❌ Что не включено</Title>
              <List size="small">
                <List.Item>Изменение логики работы 1С</List.Item>
                <List.Item>Переквалификация исторических данных</List.Item>
                <List.Item>VIP-поддержка 24/7 (доступна отдельно)</List.Item>
              </List>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },

  // Slide 15: Risks & Mitigation
  {
    id: 'risks',
    header: 'Риски и Их Митигация',
    content: (
      <Table
        dataSource={[
          {
            key: '1',
            risk: 'Задержка синхронизации 1С',
            probability: 'Средняя',
            impact: 'Высокое',
            solution: 'Заранее протестировать API 1С, подготовить обработки',
          },
          {
            key: '2',
            risk: 'Низкое принятие специалистами',
            probability: 'Низкая',
            impact: 'Высокое',
            solution:
              'Вовлечь 2-3 специалиста в тестирование на Фазе 4, провести обучение',
          },
          {
            key: '3',
            risk: 'Неправильное понимание требований',
            probability: 'Низкая',
            impact: 'Высокое',
            solution:
              'Еженедельные синхронизации с Сергеем и Андреем, демо-сессии',
          },
          {
            key: '4',
            risk: 'Масштабируемость при 100+ пользователей',
            probability: 'Низкая',
            impact: 'Среднее',
            solution:
              'Оптимизировать поиск и кэширование на Фазе 4, мониторинг нагрузок',
          },
          {
            key: '5',
            risk: 'Сложность AI-интеграции для поиска',
            probability: 'Средняя',
            impact: 'Среднее',
            solution:
              'Использовать готовое решение (API), тестировать на реальных запросах',
          },
        ]}
        columns={[
          {
            title: 'Риск',
            dataIndex: 'risk',
            key: 'risk',
            width: '25%',
          },
          {
            title: 'Вероятность',
            dataIndex: 'probability',
            key: 'probability',
            width: '15%',
            render: (text) => (
              <Tag color={text === 'Средняя' ? 'orange' : 'green'}>{text}</Tag>
            ),
          },
          {
            title: 'Влияние',
            dataIndex: 'impact',
            key: 'impact',
            width: '15%',
            render: (text) => (
              <Tag color={text === 'Высокое' ? 'red' : 'orange'}>{text}</Tag>
            ),
          },
          {
            title: 'Решение',
            dataIndex: 'solution',
            key: 'solution',
            width: '45%',
          },
        ]}
        pagination={false}
        size="small"
      />
    ),
  },

  // Slide 16: Implementation Plan
  {
    id: 'implementation',
    header: 'План Внедрения и Поддержка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Внедрение (Неделя 1-2 после запуска)</Title>
          <List size="small">
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Обучение
              специалистов по продажам (групповые сессии)
            </List.Item>
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />{' '}
              Пилот-тестирование с 2-3 торговыми точками
            </List.Item>
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Мониторинг
              ошибок и быстрые исправления
            </List.Item>
            <List.Item>
              <CheckCircleOutlined style={{ color: '#52c41a' }} /> Сбор
              обратной связи от пользователей
            </List.Item>
          </List>
        </Card>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>Текущая Поддержка (первые 2 месяца - включено)</Title>
              <List size="small">
                <List.Item>✅ Консультации по использованию</List.Item>
                <List.Item>✅ Исправление критических ошибок</List.Item>
                <List.Item>✅ Отслеживание синхронизации с 1С</List.Item>
                <List.Item>✅ Корректировка алгоритмов поиска</List.Item>
              </List>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Title level={5}>После 2 месяцев</Title>
              <List size="small">
                <List.Item>Опциональная поддержка по часам (2 500 ₽/час)</List.Item>
                <List.Item>Ежемесячное обслуживание (10 000 ₽/месяц)</List.Item>
                <List.Item>Разработка новых функций по запросам</List.Item>
              </List>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },

  // Slide 17: Why This Option
  {
    id: 'comparison',
    header: 'Почему Именно Этот Вариант?',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              criterion: 'Скорость разработки',
              nestjs: '🟡 16-18 недель',
              bitrix: '🟢 12 недель',
              lovable: '🟢 12 недель',
              medusa: '🔴 18+ недель',
            },
            {
              key: '2',
              criterion: 'Стоимость',
              nestjs: '🟡 900 000 ₽',
              bitrix: '🟢 600 000 ₽',
              lovable: '🟢 600 000 ₽',
              medusa: '🟡 750 000 ₽',
            },
            {
              key: '3',
              criterion: 'Интеграция с вашей системой',
              nestjs: '🟡 Средняя',
              bitrix: '🟢 Максимальная',
              lovable: '🟢 Максимальная',
              medusa: '🟡 Средняя',
            },
            {
              key: '4',
              criterion: 'Поддержка после проекта',
              nestjs: '🔴 Нужны новые разработчики',
              bitrix: '🟢 Ваша текущая команда',
              lovable: '🟢 Ваша текущая команда',
              medusa: '🟡 Дополнительный инжиниринг',
            },
            {
              key: '5',
              criterion: 'Масштабируемость',
              nestjs: '🟢 Высокая',
              bitrix: '🟢 Высокая',
              lovable: '🟢 Высокая',
              medusa: '🟢 Высокая',
            },
          ]}
          columns={[
            {
              title: 'Критерий',
              dataIndex: 'criterion',
              key: 'criterion',
              width: '25%',
              render: (text) => <Text strong>{text}</Text>,
            },
            {
              title: 'React + NestJS',
              dataIndex: 'nestjs',
              key: 'nestjs',
              width: '18%',
            },
            {
              title: 'React + Bitrix',
              dataIndex: 'bitrix',
              key: 'bitrix',
              width: '19%',
            },
            {
              title: 'React (Lovable) + Bitrix',
              dataIndex: 'lovable',
              key: 'lovable',
              width: '19%',
              render: (text) => <Text strong style={{ color: '#52c41a' }}>{text}</Text>,
            },
            {
              title: 'React + Medusa',
              dataIndex: 'medusa',
              key: 'medusa',
              width: '19%',
            },
          ]}
          pagination={false}
          size="small"
        />
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4}>
            <TrophyOutlined /> Вывод
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}>
            Вариант <Text strong>React (Lovable) + Bitrix</Text> обеспечивает
            лучший баланс <Text strong>скорости, стоимости</Text> и{' '}
            <Text strong>интеграции</Text> с вашей текущей инфраструктурой.
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 18: Next Steps
  {
    id: 'next-steps',
    header: 'Следующие Шаги',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <List size="large">
            <List.Item>
              <Text strong style={{ fontSize: '18px' }}>
                1. Неделя 1:
              </Text>{' '}
              <Text style={{ fontSize: '16px' }}>
                Согласование ТЗ и подписание контракта
              </Text>
            </List.Item>
            <List.Item>
              <Text strong style={{ fontSize: '18px' }}>
                2. Неделя 2:
              </Text>{' '}
              <Text style={{ fontSize: '16px' }}>
                Старт разработки, еженедельные встречи по прогрессу
              </Text>
            </List.Item>
            <List.Item>
              <Text strong style={{ fontSize: '18px' }}>
                3. Неделя 12:
              </Text>{' '}
              <Text style={{ fontSize: '16px' }}>
                Презентация готового решения
              </Text>
            </List.Item>
            <List.Item>
              <Text strong style={{ fontSize: '18px' }}>
                4. Неделя 13-14:
              </Text>{' '}
              <Text style={{ fontSize: '16px' }}>
                Внедрение и обучение пользователей
              </Text>
            </List.Item>
          </List>
        </Card>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ backgroundColor: '#e6f7ff' }}>
              <Title level={5}>Главные контакты Eksima</Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: 8 }}>
                Сергей, Андрей
              </Paragraph>
              <Title level={5} style={{ marginTop: 16 }}>
                Частота синхронизаций
              </Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
                Каждый вторник в 10:00 MSK
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ backgroundColor: '#fff7e6' }}>
              <Title level={5}>Условия</Title>
              <List size="small">
                <List.Item>
                  <Text strong>Срок действия предложения:</Text> 30 дней
                </List.Item>
                <List.Item>
                  <Text strong>Условия оплаты:</Text> 50% авансом, 50% при
                  сдаче проекта
                </List.Item>
              </List>
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },
];
