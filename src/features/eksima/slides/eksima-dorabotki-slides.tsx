import {
  Typography,
  List,
  Space,
  Card,
  Row,
  Col,
  Tag,
  Table,
  Steps,
  Timeline,
  Tabs,
} from 'antd';
import {
  ShoppingCartOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  DatabaseOutlined,
  ApiOutlined,
  RocketOutlined,
  WarningOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { eksimaDorabotkiCreatedAt } from './eksima-dorabotki.meta';
import eksimaLogo from './img.png';
import keramatika1 from './keramatika_1.jpg';
import keramatika2 from './keramatika_2.jpg';
import keramatika3 from './keramatika_3.jpg';
import keramatika4 from './keramatika_4.jpg';
import keramatika5 from './keramatika_5.jpg';
import keramatika6 from './keramatika_6.jpg';
import keramatika7 from './keramatika_7.jpg';
import keramatika8 from './keramatika_8.jpg';
import keramatika9 from './keramatika_9.jpg';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for EKSIMA Development Guide presentation
 * Based on dorabotki_guide.md
 */
export const eksimaDorabotkiSlides: SlideData[] = [
  // Slide 1: Title
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        logo={eksimaLogo}
        logoAlt="EKSIMA"
        logoMaxWidth={400}
        title="Рекомендации по доработкам платформы"
        description="Внутренняя презентация для команды разработки"
        createdAt={eksimaDorabotkiCreatedAt}
        location="Санкт-Петербург"
      />
    ),
  },

  // Slide 2: Current State
  {
    id: 'current-state',
    header: 'Текущее состояние',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Визуальная версия приложения уже создана. На основе анализа текущей
            реализации и требований Eksima выявлены следующие зоны для
            доработки.
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4}>Основные направления улучшений</Title>
          <FeaturesSlide
            columns={2}
            wrapInCard={false}
            gutter={16}
            cards={[
              {
                title: '',
                items: [
                  'Поиск с группировкой для продавцов',
                  'Страница коллекции бренда',
                  'Страница с плитками конкретной коллекции',
                  'История заказов со статусами',
                ],
              },
              {
                title: '',
                items: [
                  'Оформление заказа (multi-step форма)',
                  'Настройки администратора',
                  'Система уведомлений',
                ],
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  // Slide 3: Section Divider - Search
  {
    id: 'search-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Поиск с Группировкой"
        subtitle="Оптимизация для работы продавцов в шоуруме"
      />
    ),
  },

  // Slide 4: Search Architecture
  {
    id: 'search-architecture',
    header: 'Архитектура Поиска',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={5}>
            <WarningOutlined /> Проблема текущей версии
          </Title>
          <Paragraph>
            Текущий поиск ориентирован на классический e-commerce. Для
            продавцов, работающих в шоуруме, нужен совсем другой подход.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>
            Уровень 1: Первичная группировка по странам (80% фильтрации)
          </Title>
          <Paragraph>
            <Text strong>Ключевой момент:</Text> На каждом этапе должно быть
            максимум 8-12 кликабельных элементов. Это ускоряет навигацию.
          </Paragraph>
          <List size="small" bordered>
            <List.Item>
              <Text strong>1. Каталог (первый вход)</Text> → блоки по странам
              (Россия, Испания, Италия, Китай)
            </List.Item>
            <List.Item>
              <Text strong>2. Внутри страны</Text> → бренды и коллекции (max
              8-12 позиций)
            </List.Item>
            <List.Item>
              <Text strong>3. Внутри бренда</Text> → список коллекций
            </List.Item>
            <List.Item>
              <Text strong>4. Внутри коллекции</Text> → сетка с превью плиток
            </List.Item>
          </List>
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={5}>
            Уровень 2: AI-ассистент для визуального поиска
          </Title>
          <Paragraph>
            <Text strong>Триггер:</Text> кнопка "🔍 Помощь в поиске" или "Что
            вам нужно?" на каждом уровне
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Text strong>Пользователь:</Text>
              <br />
              "Зелёненькая в точечку"
            </Col>
            <Col span={8}>
              <Text strong>AI анализирует:</Text>
              <br />
              Зелёный цвет + текстура с точками
            </Col>
            <Col span={8}>
              <Text strong>Результат:</Text>
              <br />
              Топ-5 подходящих коллекций
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },

  // Slide 5: Search Filters & Sort
  {
    id: 'search-filters',
    header: 'Улучшения Поиска на Странице Результатов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <FeaturesSlide
          columns={2}
          wrapInCard={false}
          gutter={24}
          cards={[
            {
              title: (
                <>
                  <FilterOutlined /> Фильтры
                </>
              ),
              items: [
                'По размеру (30×30, 60×60, 120×60, мозаика)',
                'По поверхности (матовая, глянцевая, структурированная)',
                'По цветовому диапазону (слайдер или палитра)',
                'По типу (напольная, настенная, универсальная)',
              ],
            },
            {
              title: 'Сортировка',
              items: [
                'По популярности (использование в заказах)',
                'По наличию (в наличии ↔ под заказ)',
                'По цене (возрастание/убывание)',
              ],
              footer: (
                <>
                  <Title level={5} style={{ marginTop: 16 }}>
                    История поисков
                  </Title>
                  <List size="small">
                    <List.Item>
                      Сохранять последние 5-7 поисков специалиста
                    </List.Item>
                    <List.Item>
                      "Вы ищете: зелёненькая" + quick-add кнопка
                    </List.Item>
                  </List>
                </>
              ),
            },
          ]}
        />
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5}>
            <CodeOutlined /> Реализация
          </Title>
          <Paragraph style={{ fontFamily: 'monospace', fontSize: '13px' }}>
            <Text strong>1. Frontend:</Text> текстовое поле + микрофон
            (voice-to-text)
            <br />
            <Text strong>2. Backend:</Text> интеграция с API визуального поиска
            (Claude Vision API или аналог)
            <br />
            <Text strong>3. База данных плиток:</Text> теги цвета, фактуры,
            стиля для каждой плитки
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 6: Section Divider - Brand & Collection Pages
  {
    id: 'brand-collection-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Страницы Брендов и Коллекций"
        subtitle="Обзорные и детальные представления"
      />
    ),
  },

  // Slide 7: Brand Page Structure
  {
    id: 'brand-page',
    header: 'Страница Коллекции Бренда',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Header раздела</Title>
          <List size="small">
            <List.Item>
              <Text strong>Логотип бренда</Text> (100×100 px минимум)
            </List.Item>
            <List.Item>
              <Text strong>Название и описание:</Text> DNA Tiles — испанский
              производитель с 2010 года. Специализация: минимализм и современный
              дизайн. (50-100 слов)
            </List.Item>
            <List.Item>
              <Text strong>Карточка статистики:</Text>
              <br />• Коллекций в каталоге: 8
              <br />• Всего позиций: 24
              <br />• Популярная коллекция: DRA Tiles (250 заказов)
            </List.Item>
          </List>
        </Card>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>Ценовой диапазон</Title>
              <Paragraph>
                • Минимальная розничная цена: 2850 ₽/м²
                <br />• Максимальная розничная цена: 5200 ₽/м²
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ backgroundColor: '#e6f7ff' }}>
              <Title level={5}>Сетка коллекций (3 колонны)</Title>
              <Paragraph>
                Каждая карточка: превью, название, характеристики, цена, кнопка
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={5}>
            <ApiOutlined /> API endpoint
          </Title>
          <Paragraph
            style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              backgroundColor: '#f5f5f5',
              padding: '12px',
              borderRadius: '4px',
            }}
          >
            GET /api/brands/&#123;brandId&#125;
            <br />→ &#123;
            <br />
            &nbsp;&nbsp;"id": "dna_tiles",
            <br />
            &nbsp;&nbsp;"name": "DNA Tiles",
            <br />
            &nbsp;&nbsp;"country": "Spain",
            <br />
            &nbsp;&nbsp;"collectionsCount": 8,
            <br />
            &nbsp;&nbsp;"priceRange": &#123; "min": 2850, "max": 5200 &#125;
            <br />
            &#125;
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 8: Collection Page Structure
  {
    id: 'collection-page',
    header: 'Страница с Плитками Конкретной Коллекции',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Breadcrumb и заголовок</Title>
          <Paragraph>
            <Text type="secondary">
              Каталог &gt; Испания &gt; DNA Tiles &gt; DRA Tiles
            </Text>
            <br />
            <Text strong style={{ fontSize: '18px' }}>
              DRA Tiles
            </Text>
            <br />
            Минималистичная коллекция для современных интерьеров. 8 позиций,
            популярный выбор специалистов.
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#f0f5ff' }}>
          <Title level={5}>Блок фильтров</Title>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text>
              <Text strong>Размер:</Text> <Tag>30×90</Tag> <Tag>60×120</Tag>{' '}
              <Tag>45×45</Tag> <Tag color="blue">Все размеры ✓</Tag>
            </Text>
            <Text>
              <Text strong>Цвет:</Text> <Tag>Белый</Tag> <Tag>Серый</Tag>{' '}
              <Tag>Чёрный</Tag> <Tag color="blue">Все цвета ✓</Tag>
            </Text>
            <Text>
              <Text strong>Наличие:</Text> <Tag color="green">В наличии ✓</Tag>{' '}
              <Tag color="orange">Под заказ ✓</Tag>
            </Text>
            <Text>
              <Text strong>Сортировка:</Text> Популярность ▼
            </Text>
          </Space>
        </Card>
        <Card>
          <Title level={5}>Сетка товаров (3 колонны на десктопе)</Title>
          <Paragraph>Каждая карточка содержит:</Paragraph>
          <List size="small">
            <List.Item>
              Превью плитки (карусель если несколько ракурсов)
            </List.Item>
            <List.Item>Артикул + название (DRA-WHT-60×120)</List.Item>
            <List.Item>Размер + поверхность + цвет</List.Item>
            <List.Item>
              Статус наличия <Tag color="green">В наличии</Tag> /{' '}
              <Tag color="orange">Под заказ</Tag>
            </List.Item>
            <List.Item>Рекомендованная цена (2870 ₽/м²)</List.Item>
            <List.Item>
              <Text strong>Счётчик кол-ва</Text> (штуки/м²/коробки с
              конвертацией)
            </List.Item>
            <List.Item>Кнопка "Добавить в корзину"</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 9: Section Divider - Order Management
  {
    id: 'order-management-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Управление Заказами"
        subtitle="История, статусы и детализация"
      />
    ),
  },

  // Slide 10: Order History Table
  {
    id: 'order-history',
    header: 'История Заказов: Главная Таблица',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Блок фильтров</Title>
          <Row gutter={[8, 8]}>
            <Col span={6}>Номер заказа: [поиск...]</Col>
            <Col span={6}>Дата от: [01.01.2025]</Col>
            <Col span={6}>по: [13.01.2026]</Col>
            <Col span={6}>Статус: [Все ▼]</Col>
          </Row>
          <Row gutter={[8, 8]} style={{ marginTop: 8 }}>
            <Col span={6}>Менеджер: [Все ▼]</Col>
            <Col span={6}>Предприятие: [Все ▼]</Col>
            <Col span={12}>[Применить фильтр] [Очистить]</Col>
          </Row>
        </Card>
        <Card>
          <Title level={5}>Таблица с заказами</Title>
          <Table
            dataSource={[
              {
                key: '1',
                date: '13.01.2026',
                order: 'EPKA-00587',
                status: 'completed',
                sum: '80 800 ₽',
              },
              {
                key: '2',
                date: '12.01.2026',
                order: 'EPKA-00586',
                status: 'shipping',
                sum: '45 200 ₽',
              },
              {
                key: '3',
                date: '11.01.2026',
                order: 'EPKA-00585',
                status: 'processing',
                sum: '120 500 ₽',
              },
            ]}
            columns={[
              {
                title: 'Дата',
                dataIndex: 'date',
                key: 'date',
                width: '20%',
              },
              {
                title: 'Заказ',
                dataIndex: 'order',
                key: 'order',
                width: '25%',
                render: text => <Text strong>{text}</Text>,
              },
              {
                title: 'Статус',
                dataIndex: 'status',
                key: 'status',
                width: '30%',
                render: status => {
                  const statusMap: Record<
                    string,
                    { text: string; color: string }
                  > = {
                    completed: { text: '✅ Выполнен', color: 'success' },
                    shipping: { text: '📦 Доставляется', color: 'processing' },
                    processing: { text: '🏭 Собирают', color: 'warning' },
                  };
                  return (
                    <Tag color={statusMap[status].color}>
                      {statusMap[status].text}
                    </Tag>
                  );
                },
              },
              {
                title: 'Сумма',
                dataIndex: 'sum',
                key: 'sum',
                width: '25%',
                render: text => <Text strong>{text}</Text>,
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
      </Space>
    ),
  },

  // Slide 11: Order Status Legend
  {
    id: 'order-statuses',
    header: 'Легенда Статусов Заказов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Timeline
            items={[
              {
                color: 'blue',
                dot: <CheckCircleOutlined />,
                children: (
                  <div>
                    <Text strong>📋 Принят</Text>
                    <br />
                    <Text type="secondary">
                      Заказ получен, ожидание подтверждения
                    </Text>
                  </div>
                ),
              },
              {
                color: 'orange',
                dot: <CheckCircleOutlined />,
                children: (
                  <div>
                    <Text strong>🏭 Собирают</Text>
                    <br />
                    <Text type="secondary">Товар комплектуется на складе</Text>
                  </div>
                ),
              },
              {
                color: 'green',
                dot: <CheckCircleOutlined />,
                children: (
                  <div>
                    <Text strong>✅ Готов</Text>
                    <br />
                    <Text type="secondary">Заказ готов к отправке</Text>
                  </div>
                ),
              },
              {
                color: 'cyan',
                dot: <CheckCircleOutlined />,
                children: (
                  <div>
                    <Text strong>📦 Доставляется</Text>
                    <br />
                    <Text type="secondary">Заказ в пути</Text>
                  </div>
                ),
              },
              {
                color: 'green',
                dot: <CheckCircleOutlined />,
                children: (
                  <div>
                    <Text strong>✅ Выполнен</Text>
                    <br />
                    <Text type="secondary">Доставлен, заказ завершён</Text>
                  </div>
                ),
              },
              {
                color: 'red',
                dot: <WarningOutlined />,
                children: (
                  <div>
                    <Text strong>❌ Отменен</Text>
                    <br />
                    <Text type="secondary">Заказ отменён</Text>
                  </div>
                ),
              },
            ]}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5}>Детальная страница заказа</Title>
          <Paragraph>Вызывается по клику на строку заказа.</Paragraph>
          <List size="small">
            <List.Item>
              Основная информация (№, дата, статус, предприятие, менеджер,
              сумма)
            </List.Item>
            <List.Item>
              Товары в заказе (название, цена, количество, общая стоимость)
            </List.Item>
            <List.Item>
              История изменения статусов (timeline с датами и исполнителями)
            </List.Item>
            <List.Item>
              Действия: [Повторить заказ] [Скачать PDF] [Написать в поддержку]
            </List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 12: Section Divider - Checkout Flow
  {
    id: 'checkout-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Оформление Заказа"
        subtitle="Multi-step форма для завершения покупки"
      />
    ),
  },

  // Slide 13: Checkout Flow Steps
  {
    id: 'checkout-flow',
    header: 'Оформление Заказа: 3 Шага',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Steps
          current={-1}
          items={[
            {
              title: 'Проверка данных корзины',
              description: '5 позиций, 150 м²',
              icon: <ShoppingCartOutlined />,
            },
            {
              title: 'Выбор предприятия и менеджера',
              description: 'ООО "РемСтройМастер"',
              icon: <CheckCircleOutlined />,
            },
            {
              title: 'Подтверждение и отправка',
              description: 'Отправка письмом в Eksima',
              icon: <RocketOutlined />,
            },
          ]}
        />
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card>
              <Title level={5}>Шаг 1</Title>
              <Paragraph>
                📋 ВАША КОРЗИНА (5 позиций, 150 м²)
                <br />
                <br />
                Coliseum Ardesia Black 60×120
                <br />
                95.04 м² × 2870 ₽/м² = 72 564 ₽
                <br />
                [↑ 3 коробки] [↓] [❌]
                <br />
                <br />
                ИТОГО: 157 399 ₽
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Title level={5}>Шаг 2</Title>
              <Paragraph>
                🏢 ВЫБЕРИТЕ ПРЕДПРИЯТИЕ:
                <br />
                ○ ООО "Строй-ТД"
                <br />
                ● ООО "РемСтройМастер"
                <br />
                <br />
                👤 ОТВЕТСТВЕННЫЙ МЕНЕДЖЕР:
                <br />● Петрова Галина
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Title level={5}>Шаг 3</Title>
              <Paragraph>
                ✅ ПРОВЕРЬТЕ ДАННЫЕ:
                <br />
                <br />
                Предприятие: ООО "РемСтройМастер"
                <br />
                Менеджер: Петрова Галина
                <br />
                СУММА: 157 399 ₽
                <br />
                <br />
                ☑️ Я согласен с условиями
                <br />
                [✓ ОТПРАВИТЬ ЗАКАЗ]
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={5}>После успешной отправки</Title>
          <Paragraph>
            ✅ ЗАКАЗ УСПЕШНО ОТПРАВЛЕН!
            <br />
            🎉 Ваш заказ: № EPKA-000592
            <br />
            📅 Дата: 13.01.2026, 14:32 MSK
            <br />
            💰 Сумма: 157 399 ₽
            <br />
            <br />
            📧 Подтверждение отправлено на почту.
            <br />⏳ Обычно обработка занимает 15-30 минут.
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 14: Section Divider - Admin Settings
  {
    id: 'admin-settings-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Настройки Администратора"
        subtitle="Управление системой и ценообразованием"
      />
    ),
  },

  // Slide 15: Admin Settings Menu
  {
    id: 'admin-settings',
    header: 'Настройки Администратора',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              label: '⚙️ Основные',
              children: (
                <Card>
                  <List size="small">
                    <List.Item>• Управление пользователями</List.Item>
                    <List.Item>
                      • Управление предприятиями (юридические лица)
                    </List.Item>
                    <List.Item>• Управление менеджерами</List.Item>
                  </List>
                </Card>
              ),
            },
            {
              key: '2',
              label: '💰 Ценообразование',
              children: (
                <Card>
                  <Title level={5}>Режим отображения цен:</Title>
                  <Paragraph>
                    ● Показывать рекомендованные розничные цены производителя
                    <br />○ Показывать пользовательские цены
                  </Paragraph>
                  <Title level={5} style={{ marginTop: 16 }}>
                    Управление маржой по предприятиям:
                  </Title>
                  <Table
                    dataSource={[
                      {
                        key: '1',
                        company: 'ООО РемСтройМастер',
                        type: 'Коэф.',
                        value: '1.0x',
                      },
                      {
                        key: '2',
                        company: 'ЧП Борщов Н.И.',
                        type: 'Коэф.',
                        value: '0.95x',
                      },
                      {
                        key: '3',
                        company: 'ООО Строй-ТД',
                        type: 'Фиксир.',
                        value: '+200 ₽',
                      },
                    ]}
                    columns={[
                      {
                        title: 'Предприятие',
                        dataIndex: 'company',
                        key: 'company',
                      },
                      { title: 'Тип', dataIndex: 'type', key: 'type' },
                      { title: 'Значение', dataIndex: 'value', key: 'value' },
                    ]}
                    pagination={false}
                    size="small"
                  />
                </Card>
              ),
            },
            {
              key: '3',
              label: '📦 Интеграция',
              children: (
                <Card>
                  <Title level={5}>
                    <ApiOutlined /> Синхронизация с 1С
                  </Title>
                  <Paragraph>
                    ✅ Последняя успешная синхронизация: 13.01.2026, 04:15 MSK
                    <br />
                    ℹ️ Следующая синхронизация: 13.01.2026, 06:00 MSK
                  </Paragraph>
                  <List size="small">
                    <List.Item>Полная выгрузка: Каждый день в 00:00</List.Item>
                    <List.Item>Дельта (цены/наличие): Каждые 2 часа</List.Item>
                  </List>
                  <Paragraph style={{ marginTop: 16 }}>
                    [Синхронизировать вручную сейчас]
                    <br />
                    [Скачать последний лог синхронизации]
                    <br />
                    [Протестировать подключение к 1С]
                  </Paragraph>
                </Card>
              ),
            },
          ]}
        />
      </Space>
    ),
  },

  // Slide 16: Section Divider - Notifications
  {
    id: 'notifications-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Система Уведомлений"
        subtitle="Email и in-app уведомления"
      />
    ),
  },

  // Slide 17: Notification System
  {
    id: 'notification-system',
    header: 'Система Уведомлений',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Типы уведомлений</Title>
          <Table
            dataSource={[
              {
                key: '1',
                event: 'Заказ принят',
                recipient: 'Менеджер + Админ',
                when: 'Сразу после отправки',
                content: 'Номер, сумма, товары',
              },
              {
                key: '2',
                event: 'Заказ собирают',
                recipient: 'Менеджер',
                when: 'Через 30 мин',
                content: 'Статус обработки',
              },
              {
                key: '3',
                event: 'Заказ готов',
                recipient: 'Менеджер',
                when: 'Через 2-4 часа',
                content: 'Готовность к отправке',
              },
              {
                key: '4',
                event: 'Заказ доставляется',
                recipient: 'Менеджер',
                when: 'При отправке',
                content: 'Номер доставки, эстимейт',
              },
              {
                key: '5',
                event: 'Заказ выполнен',
                recipient: 'Менеджер',
                when: 'При получении',
                content: 'Подтверждение доставки',
              },
            ]}
            columns={[
              {
                title: 'Событие',
                dataIndex: 'event',
                key: 'event',
                width: '20%',
              },
              {
                title: 'Кому',
                dataIndex: 'recipient',
                key: 'recipient',
                width: '20%',
              },
              { title: 'Когда', dataIndex: 'when', key: 'when', width: '25%' },
              {
                title: 'Содержание',
                dataIndex: 'content',
                key: 'content',
                width: '35%',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card style={{ backgroundColor: '#e6f7ff' }}>
              <Title level={5}>📧 Email-уведомление (пример)</Title>
              <Paragraph style={{ fontFamily: 'monospace', fontSize: '12px' }}>
                EKSIMA ONLINE
                <br />
                <br />
                📋 Ваш заказ принят в обработку
                <br />
                <br />
                Номер заказа: EPKA-000592
                <br />
                Дата: 13 января 2026, 14:32
                <br />
                Сумма: 157 399 ₽
                <br />
                Статус: 📋 Принят
                <br />
                <br />
                👉 ПОСМОТРЕТЬ ЗАКАЗ
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>In-app уведомления</Title>
              <List size="small">
                <List.Item>
                  🆕 ✅ Заказ готов! <Text type="secondary">13 янв, 16:30</Text>
                </List.Item>
                <List.Item>
                  🆕 🏭 Заказ собирают{' '}
                  <Text type="secondary">13 янв, 14:45</Text>
                </List.Item>
                <List.Item>
                  🆕 📋 Заказ принят <Text type="secondary">13 янв, 14:32</Text>
                </List.Item>
              </List>
            </Card>
          </Col>
        </Row>
        <Card>
          <Title level={5}>
            <DatabaseOutlined /> Техническая реализация
          </Title>
          <Paragraph
            style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              backgroundColor: '#f5f5f5',
              padding: '12px',
              borderRadius: '4px',
            }}
          >
            <Text strong>Таблица уведомлений:</Text>
            <br />
            notifications &#123;
            <br />
            &nbsp;&nbsp;id: uuid,
            <br />
            &nbsp;&nbsp;userId: uuid,
            <br />
            &nbsp;&nbsp;type: 'order_created' | 'order_processing' | ...,
            <br />
            &nbsp;&nbsp;title: string,
            <br />
            &nbsp;&nbsp;message: string,
            <br />
            &nbsp;&nbsp;isRead: boolean,
            <br />
            &nbsp;&nbsp;sentVia: 'email' | 'in_app' | 'both'
            <br />
            &#125;
            <br />
            <br />
            <Text strong>WebSocket для real-time уведомлений:</Text>
            <br />
            socket.on('notification:order_status_changed', (data) =&gt; &#123;
            <br />
            &nbsp;&nbsp;showNotification(data.message);
            <br />
            &#125;);
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Slide 18: Section Divider - Competitor Analysis
  {
    id: 'competitor-analysis-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Анализ Конкурентов"
        subtitle="Keramatika: что не так и почему наше решение лучше"
      />
    ),
  },

  // Slide 19: Competitor - Home Page
  {
    id: 'competitor-home',
    header: '❌ Keramatika: Главная страница',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika1}
            alt="Keramatika Home"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Устаревший дизайн с большими блоками</List.Item>
                <List.Item>Неэффективное использование пространства</List.Item>
                <List.Item>Отсутствие визуальной иерархии</List.Item>
                <List.Item>Нет быстрого доступа к корзине/статусу</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>Современный card-based интерфейс</List.Item>
                <List.Item>Быстрая навигация с превью</List.Item>
                <List.Item>Статус корзины всегда виден</List.Item>
                <List.Item>Визуальные подсказки и иконки</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 20: Competitor - Order History
  {
    id: 'competitor-orders',
    header: '❌ Keramatika: История заказов',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika2}
            alt="Keramatika Orders"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Перегруженная таблица с мелким текстом</List.Item>
                <List.Item>Нет визуальной индикации статусов</List.Item>
                <List.Item>Сложные фильтры не интуитивны</List.Item>
                <List.Item>Нет быстрого "повторить заказ"</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>Цветные статусные бейджи (Tag components)</List.Item>
                <List.Item>Фильтры в sidebar, всегда доступны</List.Item>
                <List.Item>Кнопка "Повторить" в каждой строке</List.Item>
                <List.Item>Детальный просмотр по клику</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 21: Competitor - Catalog
  {
    id: 'competitor-catalog',
    header: '❌ Keramatika: Каталог',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika3}
            alt="Keramatika Catalog"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Статичные карточки брендов без превью</List.Item>
                <List.Item>Отсутствует визуальный поиск</List.Item>
                <List.Item>Нет фильтров по цвету/текстуре</List.Item>
                <List.Item>Плохо подходит для работы в шоуруме</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>AI-ассистент: "зелёненькая в точечку"</List.Item>
                <List.Item>Группировка по странам (80% сценариев)</List.Item>
                <List.Item>Превью плитки прямо в каталоге</List.Item>
                <List.Item>Оптимизировано для быстрого поиска</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 22: Competitor - Brand Collections
  {
    id: 'competitor-brand',
    header: '❌ Keramatika: Страница бренда',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika4}
            alt="Keramatika Brand"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Простой алфавитный список коллекций</List.Item>
                <List.Item>Нет информации о бренде</List.Item>
                <List.Item>Отсутствуют превью коллекций</List.Item>
                <List.Item>Нет данных о ценовом диапазоне</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>Header с логотипом и описанием бренда</List.Item>
                <List.Item>Статистика: количество коллекций, заказы</List.Item>
                <List.Item>Ценовой диапазон: от-до (₽/м²)</List.Item>
                <List.Item>Сетка коллекций с preview изображениями</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 23: Competitor - Collection Page
  {
    id: 'competitor-collection',
    header: '❌ Keramatika: Страница коллекции',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika5}
            alt="Keramatika Collection"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Табличный формат плохо показывает товар</List.Item>
                <List.Item>Маленькие превью, сложно оценить плитку</List.Item>
                <List.Item>Фильтры не выделены визуально</List.Item>
                <List.Item>Единицы измерения запутаны (шт/м²)</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>Сетка товаров с крупными превью</List.Item>
                <List.Item>
                  Встроенный калькулятор (шт ↔ м² ↔ коробки)
                </List.Item>
                <List.Item>Фильтры в sidebar с быстрым доступом</List.Item>
                <List.Item>Детальная карточка по клику</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 24: Competitor - Product Detail
  {
    id: 'competitor-product',
    header: '❌ Keramatika: Карточка товара',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika6}
            alt="Keramatika Product"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Развёрнутая таблица загромождает страницу</List.Item>
                <List.Item>Характеристики трудно читать</List.Item>
                <List.Item>Нет quick-add в корзину</List.Item>
                <List.Item>Плохо видна разница в тонах/калибрах</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>Отдельная карточка товара с галереей</List.Item>
                <List.Item>Характеристики в grid layout</List.Item>
                <List.Item>Калькулятор единиц встроен</List.Item>
                <List.Item>Кнопка "Добавить в заказ" всегда видна</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 25: Competitor - Checkout
  {
    id: 'competitor-checkout',
    header: '❌ Keramatika: Оформление заказа',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika7}
            alt="Keramatika Checkout"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Всё на одной странице — перегружено</List.Item>
                <List.Item>Непонятная последовательность действий</List.Item>
                <List.Item>Выбор юр. лица спрятан в чекбоксах</List.Item>
                <List.Item>Нет визуальной обратной связи</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>Multi-step форма (Steps component)</List.Item>
                <List.Item>
                  Шаг 1: Корзина → Шаг 2: Юр.лицо → Шаг 3: Подтверждение
                </List.Item>
                <List.Item>Визуальный прогресс-бар</List.Item>
                <List.Item>Валидация на каждом шаге</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 26: Competitor - Settings
  {
    id: 'competitor-settings',
    header: '❌ Keramatika: Настройки',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika8}
            alt="Keramatika Settings"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Только базовые настройки профиля</List.Item>
                <List.Item>Нет управления ценообразованием</List.Item>
                <List.Item>Отсутствует секция интеграций</List.Item>
                <List.Item>Нет настроек уведомлений</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>
                  Tabs: Основные / Ценообразование / Интеграция
                </List.Item>
                <List.Item>Управление маржой для каждого предприятия</List.Item>
                <List.Item>Настройки синхронизации с 1С</List.Item>
                <List.Item>Управление пользователями и правами</List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 27: Competitor - Notifications
  {
    id: 'competitor-notifications',
    header: '❌ Keramatika: Уведомления',
    content: (
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col span={14}>
          <img
            src={keramatika9}
            alt="Keramatika Notifications"
            style={{
              width: '100%',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
            }}
          />
        </Col>
        <Col span={10}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ backgroundColor: '#fff1f0' }}>
              <Title level={5}>❌ Проблемы:</Title>
              <List size="small">
                <List.Item>Только список заказов, не уведомления</List.Item>
                <List.Item>Нет визуальной индикации "новое"</List.Item>
                <List.Item>Отсутствуют push-уведомления</List.Item>
                <List.Item>Нет детальной истории изменений</List.Item>
              </List>
            </Card>
            <Card style={{ backgroundColor: '#f6ffed' }}>
              <Title level={5}>✅ Наше решение:</Title>
              <List size="small">
                <List.Item>Отдельная система уведомлений</List.Item>
                <List.Item>Email + In-app уведомления</List.Item>
                <List.Item>WebSocket для real-time обновлений</List.Item>
                <List.Item>
                  Timeline с историей всех изменений статуса
                </List.Item>
              </List>
            </Card>
          </Space>
        </Col>
      </Row>
    ),
  },

  // Slide 28: Section Divider - Prioritization
  {
    id: 'prioritization-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Приоритизация Разработки"
        subtitle="MVP → Phase 2 → Phase 3"
      />
    ),
  },

  // Slide 29: Development Priorities
  {
    id: 'priorities',
    header: 'Приоритизация Разработки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4}>
            <RocketOutlined /> MVP (Неделя 3-10) — Минимум для запуска
          </Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text strong>Frontend:</Text>
              <List size="small">
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} /> Каталог с
                  поиском по странам (группировка)
                </List.Item>
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} /> Карточка
                  товара с калькулятором
                </List.Item>
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} /> Корзина
                  (базовая версия)
                </List.Item>
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} />{' '}
                  Оформление заказа (3 шага)
                </List.Item>
              </List>
            </Col>
            <Col span={12}>
              <Text strong>Backend:</Text>
              <List size="small">
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} /> API для
                  каталога и поиска
                </List.Item>
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} />{' '}
                  Синхронизация с 1С (базовая)
                </List.Item>
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} />{' '}
                  Email-уведомления (заказ отправлен)
                </List.Item>
                <List.Item>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} /> API для
                  заказов и управления
                </List.Item>
              </List>
            </Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4}>⭐ Phase 2 (Неделя 13+) — Расширения</Title>
          <List size="small">
            <List.Item>
              1. AI-ассистент для визуального поиска ("зелёненькая в точечку")
            </List.Item>
            <List.Item>
              2. Страница коллекции бренда (с рекомендованными ценами)
            </List.Item>
            <List.Item>
              3. Страница с плитками коллекции (с расширенными фильтрами)
            </List.Item>
            <List.Item>
              4. История заказов (с полными фильтрами и всеми статусами)
            </List.Item>
            <List.Item>
              5. Настройки администратора (управление маржой)
            </List.Item>
            <List.Item>
              6. Расширенная система уведомлений (WebSocket)
            </List.Item>
          </List>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4}>🎯 Phase 3 (После Phase 2)</Title>
          <List size="small">
            <List.Item>1. Аналитика и отчёты для администратора</List.Item>
            <List.Item>
              2. Расширение функций управления предприятиями
            </List.Item>
            <List.Item>
              3. Мобильное приложение (если требуется клиентом)
            </List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 30: Final Note
  {
    id: 'final-note',
    header: 'Заключение',
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
        <Card style={{ maxWidth: '800px', textAlign: 'center' }}>
          <Title level={3}>
            <CodeOutlined /> Этот документ используется как гайд для разработки
          </Title>
          <Paragraph
            style={{ fontSize: 'var(--app-font-size-md)', marginTop: 24 }}
          >
            <Text strong>Обновляй по мере прогресса реализации.</Text>
          </Paragraph>
          <Paragraph style={{ marginTop: 24 }}>
            Визуальная версия приложения уже создана. Данная презентация
            содержит детальные рекомендации по доработке всех основных
            компонентов системы с техническими деталями реализации.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
