import { Typography, Space, Card, Row, Col, List, Table, Tag } from 'antd';
import {
  UserOutlined,
  ApiOutlined,
  DatabaseOutlined,
  FilterOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  ShopOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { Roadmap } from '~shared/ui/roadmap';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { eksimaPlatformSpecCreatedAt } from './eksima-platform-spec.meta';
import oneCProductCardImg from '../1c_priduct_card.jpeg';
import oneCVersionImg from '../1c_version.jpeg';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for EKSIMA platform specification presentation:
 * pricing tool for retail partners and 1C integration
 */
export const eksimaPlatformSpecSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="EKSIMA: инструмент для розничных точек"
        description="Техническое задание: интеграция с 1С и витрина для розничных партнёров"
        createdAt={eksimaPlatformSpecCreatedAt}
        location="Санкт-Петербург"
      />
    ),
  },

  {
    id: 'onec-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={0}
        title="Интеграция с 1С"
        subtitle="Подготовка карточек номенклатуры, CommerceML и Bitrix‑backend"
      />
    ),
  },

  {
    id: 'onec-fields-filters',
    header: 'Поля из 1С и использование в фильтрах',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>
            <DatabaseOutlined style={{ marginRight: 8 }} />
            Карточка номенклатуры в 1С
          </Title>
          <Row gutter={[24, 24]} align="top">
            <Col xs={24} md={14}>
              <ImageWithLoader
                src={oneCProductCardImg}
                alt="Карточка номенклатуры в 1С с дополнительными реквизитами"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 8,
                }}
              />
            </Col>
            <Col xs={24} md={10}>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                На скриншоте выделен блок «Дополнительные реквизиты». Именно эти
                поля будут использоваться как фильтры и характеристики в
                инструменте для розничных точек:
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Формат — попадает в фильтр по размеру и отображается в карточке товара.',
                  'Коллекция — используется для фильтра и группировки коллекций.',
                  'Поверхность — фильтр по типу поверхности (матовая, MR и др.).',
                  'Толщина — технический параметр, отображается в карточке; при необходимости — дополнительный фильтр.',
                  'Признак «Интернет» — флаг для отбора номенклатуры, которая должна попадать в инструмент.',
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
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },

  {
    id: 'onec-fields-approval',
    header: 'Модель данных 1С: согласование перед стартом',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Ниже — перечень полей номенклатуры и фильтров, которые мы используем
            в инструменте для розничных точек.{' '}
            <Text strong>
              Этот состав необходимо утвердить до старта разработки
            </Text>{' '}
            (далее изменения потребуют доработки обмена и интерфейса).
          </Paragraph>
        </Card>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>
                <DatabaseOutlined style={{ marginRight: 8 }} />
                Основные поля номенклатуры (должны быть в 1С)
              </Title>
              <List
                size="small"
                dataSource={[
                  'Артикул, наименование, полное наименование',
                  'Производитель, коллекция, тип товара',
                  'Назначение, размер, толщина, цвет, поверхность, страна',
                  'Ед. измерения, шт/упаковка, м²/упаковка, вес',
                  'Флаг активности / Интернет (отбор позиций для инструмента)',
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
            <Card>
              <Title level={4}>
                <FilterOutlined style={{ marginRight: 8 }} />
                Поля, используемые в фильтрах инструмента
              </Title>
              <List
                size="small"
                dataSource={[
                  'Производитель, коллекция, тип товара',
                  'Назначение (место применения — пол, стена, фасад и т.п.)',
                  'Размер / формат',
                  'Цвет, поверхность, страна',
                  'Цена (диапазон по выбранному типу цены)',
                  'Наличие (остаток > 0 / под заказ)',
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
      </Space>
    ),
  },

  {
    id: 'onec-objects-flows',
    header: 'CommerceML и потоки обмена',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={10}>
              <ImageWithLoader
                src={oneCVersionImg}
                alt="Версия 1С и конфигурация УТ 11"
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </Col>
            <Col xs={24} md={14}>
              <Title level={4}>
                <ApiOutlined style={{ marginRight: 8 }} />
                Конфигурация 1С и обмен по CommerceML
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
                Настраиваем стандартный обмен по CommerceML для текущей версии
                1С:Предприятие и конфигурации «Управление торговлей 11», чтобы
                инструмент для розничных точек получал актуальные данные.
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Используем поддерживаемый формат CommerceML (2.x) и типовой механизм выгрузки.',
                  'Определяем состав объектов для обмена: номенклатура, цены, остатки.',
                  'Настраиваем расписание выгрузок и обработку ошибок (логи, повторные попытки).',
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
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4}>
            <DatabaseOutlined style={{ marginRight: 8 }} />
            Объекты 1С и направления обмена
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: 'nomenclature',
                object: 'Номенклатура',
                direction: '1С → Инструмент',
                freq: 'Полная выгрузка — 1 раз в ночь; дельта — по мере изменений',
              },
              {
                key: 'prices',
                object: 'Цены (типы цен)',
                direction: '1С → Инструмент',
                freq: 'Дельта каждые 1–2 часа',
              },
              {
                key: 'stocks',
                object: 'Остатки по складам',
                direction: '1С → Инструмент',
                freq: 'Каждые 15–30 минут (настраивается)',
              },
              {
                key: 'orders',
                object: 'Заказы/заявки из инструмента',
                direction: 'Инструмент → email EKSIMA',
                freq: 'По событию отправки заявки (без автоматического резервирования на складе)',
              },
            ]}
            columns={[
              { title: 'Объект 1С', dataIndex: 'object', key: 'object' },
              {
                title: 'Направление',
                dataIndex: 'direction',
                key: 'direction',
                render: value => <Tag color="blue">{value}</Tag>,
              },
              { title: 'Частота', dataIndex: 'freq', key: 'freq' },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'roles-scenarios',
    header: 'Интеграция с 1С: состав работ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>
            <ApiOutlined style={{ marginRight: 8 }} />
            Что входит в наши работы
          </Title>
          <Paragraph
            style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}
          >
            Мы берём на себя полный цикл подготовки интеграции: от согласования
            карточки номенклатуры в 1С до настройки обмена по CommerceML и
            развёртывания Bitrix как backend‑сервиса для инструмента розничных
            точек.
          </Paragraph>
        </Card>
        <FeaturesSlide
          animated
          columns={3}
          cards={[
            {
              title: '1. Карточка номенклатуры в 1С',
              icon: <DatabaseOutlined />,
              iconColor: 'blue',
              items: [
                'Ревью финального вида карточки совместно.',
                'Фиксация полного состава полей, попадающих в витрину и фильтры.',
                'Документированное решение: какие поля обязательны, какие опциональны.',
              ],
            },
            {
              title: '2. CommerceML‑обмен',
              icon: <ApiOutlined />,
              iconColor: 'green',
              items: [
                'Настройка типового обмена CommerceML для текущей конфигурации УТ 11.',
                'Определение состава объектов: номенклатура, цены, остатки.',
                'Расписание выгрузок, обработка ошибок и логирование.',
              ],
            },
            {
              title: '3. Bitrix как backend',
              icon: <ShopOutlined />,
              iconColor: 'orange',
              items: [
                'Развёртывание Bitrix и базовая конфигурация под EKSIMA.',
                'Приём данных из 1С и хранение каталога для инструмента.',
                'API‑слой для витрины розничных точек (карточки, фильтры, цены).',
              ],
            },
          ]}
        />
      </Space>
    ),
  },

  {
    id: 'timeline',
    header: 'Сроки реализации этапа',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}
          >
            План ниже построен исходя из старта работ{' '}
            <Text strong>1 марта 2026 года</Text> и охватывает весь этап:
            карточка номенклатуры, CommerceML и Bitrix‑backend для инструмента
            розничных точек.
          </Paragraph>
        </Card>
        <Card>
          <Roadmap
            mode="alternate"
            items={[
              {
                title: 'Согласование модели данных 1С',
                duration: '1–7 марта',
                icon: <DatabaseOutlined />,
                color: 'blue',
                description:
                  'Ревью карточки номенклатуры, фиксация полей для витрины и фильтров, утверждение состава с 1С‑специалистами.',
              },
              {
                title: 'Настройка CommerceML‑обмена',
                duration: '8–21 марта',
                icon: <ApiOutlined />,
                color: 'green',
                description:
                  'Конфигурация типового обмена в УТ 11, настройка выгрузок номенклатуры, цен и остатков, логи ошибок.',
              },
              {
                title: 'Развёртывание Bitrix и интеграция',
                duration: '22 марта – 4 апреля',
                icon: <ShopOutlined />,
                color: 'orange',
                description:
                  'Развёртывание Bitrix, приём данных из 1С, подготовка API для инструмента розничных точек.',
              },
              {
                title: 'Тестирование и стабилизация',
                duration: '5–18 апреля',
                icon: <CheckCircleOutlined />,
                color: 'purple',
                description:
                  'Совместное тестирование обмена, проверка выборки по фильтрам, корректировка по результатам пилота.',
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'budget',
    header: 'Оценка стоимости этапа (роли и часы)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Ниже приведена ориентировочная оценка трудозатрат по ролям для
            выполнения этапа интеграции 1С → CommerceML → Bitrix. Ставки указаны
            для примера; финальная стоимость уточняется после утверждения модели
            данных и объёма номенклатуры.
          </Paragraph>
        </Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            {
              key: 'analyst',
              role: 'Системный аналитик / архитектор',
              hours: 24,
              rate: '2 500 ₽/ч',
              cost: 60000,
            },
            {
              key: 'onec',
              role: 'Интегратор 1С / CommerceML',
              hours: 32,
              rate: '2 500 ₽/ч',
              cost: 80000,
            },
            {
              key: 'bitrix',
              role: 'Разработчик Bitrix / backend',
              hours: 40,
              rate: '2 500 ₽/ч',
              cost: 100000,
            },
            {
              key: 'frontend',
              role: 'Разработчик витрины (интеграция с backend)',
              hours: 24,
              rate: '2 500 ₽/ч',
              cost: 60000,
            },
            {
              key: 'pm',
              role: 'Проджект‑менеджер / коммуникации',
              hours: 16,
              rate: '2 500 ₽/ч',
              cost: 40000,
            },
          ]}
          columns={[
            {
              title: 'Роль',
              dataIndex: 'role',
              key: 'role',
              width: '38%',
            },
            {
              title: 'Часы',
              dataIndex: 'hours',
              key: 'hours',
              width: '12%',
            },
            {
              title: 'Ставка',
              dataIndex: 'rate',
              key: 'rate',
              width: '20%',
            },
            {
              title: 'Стоимость',
              dataIndex: 'cost',
              key: 'cost',
              width: '20%',
              render: (value: number) => (
                <Text strong>{value.toLocaleString('ru-RU')} ₽</Text>
              ),
            },
          ]}
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row style={{ backgroundColor: '#f6ffed' }}>
                <Table.Summary.Cell index={0} colSpan={3}>
                  <Text strong style={{ fontSize: 16 }}>
                    <DollarOutlined style={{ marginRight: 8 }} />
                    Итого по этапу
                  </Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text strong style={{ fontSize: 18, color: '#52c41a' }}>
                    {(60000 + 80000 + 100000 + 60000 + 40000).toLocaleString(
                      'ru-RU'
                    )}{' '}
                    ₽
                  </Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
      </Space>
    ),
  },

  {
    id: 'retail-tool-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Этап 2. Инструмент для розничных точек"
        subtitle="Фронтенд‑витрина для партнёров на базе согласованного шаблона"
        imageIndex={1}
        imageAlt="Интерфейс инструмента для розницы"
      />
    ),
  },

  {
    id: 'retail-tool-tech-setup',
    header: 'Техническая подготовка и скелет приложения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}
          >
            Перед реализацией пользовательских сценариев мы выполняем
            обязательную фазу технической подготовки.{' '}
            <Text strong>
              Результат этого этапа — развёрнутый на тестовом стенде скелет
              приложения
            </Text>{' '}
            с базовой навигацией и подключённым туллингом, а также свёрстанная
            главная страница личного кабинета, аналогичная демо-примеру, готовые
            к дальнейшему наполнению функционалом.
          </Paragraph>
          <Paragraph style={{ marginTop: 16 }}>
            <Text strong>Демо-пример личного кабинета:</Text>
            <br />
            <a
              href="https://eksima-portal.vercel.app/account"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: 4,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              https://eksima-portal.vercel.app/account
            </a>
          </Paragraph>
        </Card>
        <FeaturesSlide
          animated
          columns={3}
          cards={[
            {
              title: 'Инфраструктура и стенды',
              icon: <RocketOutlined />,
              iconColor: 'blue',
              items: [
                'Развёртывание тестового стенда (dev/stage) с доступом для команды Eksima.',
                'Настройка CI/CD‑пайплайна для автоматических сборок и выкладок.',
                'Базовая конфигурация окружений (переменные, endpoints Bitrix backend).',
              ],
            },
            {
              title: 'Скелет фронтенд‑приложения',
              icon: <CodeOutlined />,
              iconColor: 'green',
              items: [
                'Создание каркаса приложения: layout, шапка, боковое меню, базовые маршруты.',
                'Пустые страницы под ключевые разделы: каталог, коллекция, карточка товара, корзина, история заказов, настройки.',
                'Подключение согласованного шаблона EKSIMA (дизайн‑система, темы, компоненты).',
              ],
            },
            {
              title: 'Тулинг и качество кода',
              icon: <DatabaseOutlined />,
              iconColor: 'orange',
              items: [
                'Настройка TypeScript, ESLint, Prettier и форматирования кода.',
                'Базовые smoke‑тесты UI и логирования ошибок (опционально Sentry/аналитика).',
                'Документация по запуску и деплою для команды Eksima.',
              ],
            },
          ]}
        />
      </Space>
    ),
  },

  {
    id: 'retail-tool-tech-timeline',
    header: 'Техническая подготовка: дорожная карта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph
            style={{ fontSize: 'var(--app-font-size-md)', marginBottom: 0 }}
          >
            Дорожная карта ниже относится только к этапу{' '}
            <Text strong>«Техническая подготовка и скелет приложения»</Text> и
            предполагает старт работ сразу после завершения интеграции 1С →
            Bitrix.
          </Paragraph>
        </Card>
        <Card>
          <Roadmap
            mode="alternate"
            items={[
              {
                title: 'Неделя 1: инфраструктура и стенды',
                duration: '5 рабочих дней',
                icon: <RocketOutlined />,
                color: 'blue',
                description:
                  'Развёртывание dev/stage стенда, настройка CI/CD, базовая конфигурация окружений и доступов.',
              },
              {
                title: 'Неделя 2: скелет приложения и тулинг',
                duration: '5 рабочих дней',
                icon: <CodeOutlined />,
                color: 'green',
                description:
                  'Каркас фронтенда (layout, маршруты, страницы), подключение шаблона EKSIMA, настройка TypeScript/ESLint/Prettier и smoke‑тестов.',
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'retail-tool-tech-budget',
    header: 'Техническая подготовка: оценка стоимости (роли и часы)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Здесь зафиксирована оценка только на подготовительный этап (инфра +
            скелет + тулинг). Реализация пользовательского функционала
            оценивается отдельно на следующих слайдах.
          </Paragraph>
        </Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            {
              key: 'devops',
              role: 'DevOps / инфраструктура',
              hours: 24,
              rate: '2 500 ₽/ч',
              cost: 60000,
            },
            {
              key: 'frontend',
              role: 'Frontend‑разработчик (каркас приложения)',
              hours: 40,
              rate: '2 500 ₽/ч',
              cost: 100000,
            },
            {
              key: 'architect',
              role: 'Архитектор / ведущий разработчик',
              hours: 16,
              rate: '2 500 ₽/ч',
              cost: 40000,
            },
            {
              key: 'pm',
              role: 'Проджект‑менеджер / аналитик',
              hours: 16,
              rate: '2 500 ₽/ч',
              cost: 40000,
            },
          ]}
          columns={[
            {
              title: 'Роль',
              dataIndex: 'role',
              key: 'role',
              width: '40%',
            },
            {
              title: 'Часы',
              dataIndex: 'hours',
              key: 'hours',
              width: '12%',
            },
            {
              title: 'Ставка',
              dataIndex: 'rate',
              key: 'rate',
              width: '18%',
            },
            {
              title: 'Стоимость',
              dataIndex: 'cost',
              key: 'cost',
              width: '20%',
              render: (value: number) => (
                <Text strong>{value.toLocaleString('ru-RU')} ₽</Text>
              ),
            },
          ]}
          summary={() => {
            const total =
              60000 /* DevOps */ +
              100000 /* FE */ +
              40000 /* Architect */ +
              40000; /* PM */
            return (
              <Table.Summary>
                <Table.Summary.Row style={{ backgroundColor: '#f6ffed' }}>
                  <Table.Summary.Cell index={0} colSpan={3}>
                    <Text strong style={{ fontSize: 16 }}>
                      <DollarOutlined style={{ marginRight: 8 }} />
                      Итого по этапу «Техническая подготовка»
                    </Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    <Text strong style={{ fontSize: 18, color: '#52c41a' }}>
                      {total.toLocaleString('ru-RU')} ₽
                    </Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            );
          }}
        />
      </Space>
    ),
  },

  {
    id: 'retail-tool-catalog-stage',
    header: 'Этап: каталог и страницы брендов/коллекций',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            На этом этапе мы реализуем каталог и страницы брендов/коллекций
            инструмента для менеджеров, набивающих заказы за рабочим местом. По
            результату этапа будут полностью работать три ключевые страницы:
          </Paragraph>
          <List
            size="small"
            dataSource={[
              'Главная страница каталога: https://eksima-portal.vercel.app/catalog',
              'Страница бренда: https://eksima-portal.vercel.app/catalog/russia/coliseum',
              'Страница коллекции бренда: https://eksima-portal.vercel.app/catalog/russia/coliseum/ardesia',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0' }}>
                <a
                  href={item.split(': ')[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  {item}
                </a>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <FeaturesSlide
            animated
            columns={2}
            cards={[
              {
                title: 'Каталог верхнего уровня',
                icon: <FilterOutlined />,
                iconColor: 'blue',
                items: [
                  'Подключение реальных данных каталога из Bitrix (номенклатура, бренды, страны).',
                  'Отображение групп по странам/поставщикам, переход к брендам и коллекциям.',
                  'Базовые фильтры и сортировки, ориентированные на работу продавца.',
                ],
              },
              {
                title: 'Страницы брендов и коллекций',
                icon: <ShopOutlined />,
                iconColor: 'green',
                items: [
                  'Страница бренда с логотипом, описанием, статистикой и сеткой коллекций.',
                  'Страница коллекции с фильтрами по размеру, цвету, наличию и сеткой плиток.',
                  'Согласование финального UX с заказчиком на примере демо‑стенда.',
                ],
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'retail-tool-catalog-timeline',
    header: 'Каталог и коллекции: дорожная карта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Roadmap
            mode="alternate"
            items={[
              {
                title: 'Неделя 1: подключение каталога',
                duration: '5 рабочих дней',
                icon: <FilterOutlined />,
                color: 'blue',
                description:
                  'Подключение API Bitrix, вывод каталога на странице /catalog, базовая группировка и навигация.',
              },
              {
                title: 'Неделя 2: страницы бренда и коллекции',
                duration: '5 рабочих дней',
                icon: <ShopOutlined />,
                color: 'green',
                description:
                  'Реализация страниц бренда и коллекции с фильтрами и сетками товаров, отладка на примере Coliseum / Ardesia.',
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'retail-tool-catalog-budget',
    header: 'Каталог и коллекции: оценка стоимости (роли и часы)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Этап включает реализацию страниц каталога, бренда и коллекции на
            фронтенде с интеграцией в Bitrix. Ниже — ориентировочная оценка по
            ролям.
          </Paragraph>
        </Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            {
              key: 'ux',
              role: 'UX/UI‑дизайнер (отладка сценариев каталога)',
              hours: 16,
              rate: '2 500 ₽/ч',
              cost: 40000,
            },
            {
              key: 'frontend',
              role: 'Frontend‑разработчик (каталог, бренд, коллекция)',
              hours: 64,
              rate: '2 500 ₽/ч',
              cost: 160000,
            },
            {
              key: 'backend',
              role: 'Backend / Bitrix (эндпоинты под страницы)',
              hours: 24,
              rate: '2 500 ₽/ч',
              cost: 60000,
            },
            {
              key: 'qa',
              role: 'QA‑инженер',
              hours: 24,
              rate: '2 000 ₽/ч',
              cost: 48000,
            },
            {
              key: 'pm',
              role: 'Проджект‑менеджер / аналитик',
              hours: 16,
              rate: '2 500 ₽/ч',
              cost: 40000,
            },
          ]}
          columns={[
            {
              title: 'Роль',
              dataIndex: 'role',
              key: 'role',
              width: '40%',
            },
            {
              title: 'Часы',
              dataIndex: 'hours',
              key: 'hours',
              width: '12%',
            },
            {
              title: 'Ставка',
              dataIndex: 'rate',
              key: 'rate',
              width: '18%',
            },
            {
              title: 'Стоимость',
              dataIndex: 'cost',
              key: 'cost',
              width: '20%',
              render: (value: number) => (
                <Text strong>{value.toLocaleString('ru-RU')} ₽</Text>
              ),
            },
          ]}
          summary={() => {
            const total =
              40000 /* UX */ +
              160000 /* FE */ +
              60000 /* BE */ +
              48000 /* QA */ +
              40000; /* PM */
            return (
              <Table.Summary>
                <Table.Summary.Row style={{ backgroundColor: '#f6ffed' }}>
                  <Table.Summary.Cell index={0} colSpan={3}>
                    <Text strong style={{ fontSize: 16 }}>
                      <DollarOutlined style={{ marginRight: 8 }} />
                      Итого по этапу «Каталог и коллекции»
                    </Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    <Text strong style={{ fontSize: 18, color: '#52c41a' }}>
                      {total.toLocaleString('ru-RU')} ₽
                    </Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            );
          }}
        />
      </Space>
    ),
  },

  {
    id: 'retail-tool-search-stage',
    header: 'Этап: поиск в каталоге для менеджеров',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Следующий этап — развитие поиска и фильтрации поверх реализованного
            каталога: группировка по странам/брендам и улучшенные фильтры для
            менеджеров, оформляющих заказы.
          </Paragraph>
        </Card>
        <Card>
          <FeaturesSlide
            animated
            columns={2}
            cards={[
              {
                title: 'Группированный поиск',
                icon: <FilterOutlined />,
                iconColor: 'blue',
                items: [
                  'Поиск с учётом иерархии: страна → бренд → коллекция → товар.',
                  'История последних поисков и быстрый повтор популярных запросов.',
                  'Оптимизация под работу менеджера (минимум лишних действий).',
                ],
              },
              {
                title: 'Расширенные фильтры',
                icon: <DatabaseOutlined />,
                iconColor: 'green',
                items: [
                  'Дополнительные фильтры по текстуре, стилю, месту применения.',
                  'Уточняющие фильтры под реальные сценарии работы менеджеров.',
                  'Интеграция поиска с текущим стеком (Bitrix/отдельный search‑service).',
                ],
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'retail-tool-search-timeline',
    header: 'Поиск: дорожная карта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Roadmap
            mode="alternate"
            items={[
              {
                title: 'Неделя 1: базовый поиск и история',
                duration: '5 рабочих дней',
                icon: <FilterOutlined />,
                color: 'blue',
                description:
                  'Реализация текстового поиска по артикулу/названию, история поисков, интеграция с каталогом.',
              },
              {
                title: 'Неделя 2: расширенные фильтры',
                duration: '5 рабочих дней',
                icon: <DatabaseOutlined />,
                color: 'green',
                description:
                  'Добавление дополнительных фильтров и оптимизация работы поиска под реальные сценарии менеджеров.',
              },
            ]}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'retail-tool-search-budget',
    header: 'Поиск: оценка стоимости (роли и часы)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Этап по поиску можно запускать после завершения каталога. Ниже —
            оценка трудозатрат на развитие функционала поиска и фильтрации в
            каталоге для менеджеров, набивающих заказы.
          </Paragraph>
        </Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            {
              key: 'frontend',
              role: 'Frontend‑разработчик (UI поиска и фильтров)',
              hours: 48,
              rate: '2 500 ₽/ч',
              cost: 120000,
            },
            {
              key: 'backend',
              role: 'Backend / поиск (индексация, API)',
              hours: 32,
              rate: '2 500 ₽/ч',
              cost: 80000,
            },
            {
              key: 'qa',
              role: 'QA‑инженер',
              hours: 24,
              rate: '2 000 ₽/ч',
              cost: 48000,
            },
            {
              key: 'pm',
              role: 'Проджект‑менеджер / аналитик',
              hours: 16,
              rate: '2 500 ₽/ч',
              cost: 40000,
            },
          ]}
          columns={[
            {
              title: 'Роль',
              dataIndex: 'role',
              key: 'role',
              width: '40%',
            },
            {
              title: 'Часы',
              dataIndex: 'hours',
              key: 'hours',
              width: '12%',
            },
            {
              title: 'Ставка',
              dataIndex: 'rate',
              key: 'rate',
              width: '18%',
            },
            {
              title: 'Стоимость',
              dataIndex: 'cost',
              key: 'cost',
              width: '20%',
              render: (value: number) => (
                <Text strong>{value.toLocaleString('ru-RU')} ₽</Text>
              ),
            },
          ]}
          summary={() => {
            const total =
              120000 /* FE */ +
              80000 /* BE */ +
              48000 /* QA */ +
              40000; /* PM */
            return (
              <Table.Summary>
                <Table.Summary.Row style={{ backgroundColor: '#f6ffed' }}>
                  <Table.Summary.Cell index={0} colSpan={3}>
                    <Text strong style={{ fontSize: 16 }}>
                      <DollarOutlined style={{ marginRight: 8 }} />
                      Итого по этапу «Поиск»
                    </Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    <Text strong style={{ fontSize: 18, color: '#52c41a' }}>
                      {total.toLocaleString('ru-RU')} ₽
                    </Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            );
          }}
        />
      </Space>
    ),
  },

  {
    id: 'retail-tool-search-catalog',
    header: 'Поиск и работа с каталогом для менеджеров',
    content: (
      <FeaturesSlide
        animated
        columns={1}
        cards={[
          {
            title: 'Поиск и каталог',
            icon: <FilterOutlined />,
            iconColor: 'blue',
            items: [
              'Поиск с группировкой для продавцов: сначала страны, затем бренды и коллекции (макс. 8–12 элементов на шаг).',
              'Фильтры по размеру, поверхности, цвету, типу (напольная/настенная/универсальная) и наличию.',
              'Страница результатов с сортировкой по популярности, наличию и цене, историей последних поисков.',
            ],
          },
        ]}
      />
    ),
  },

  {
    id: 'retail-tool-brand-collection',
    header: 'Страницы брендов и коллекций',
    content: (
      <FeaturesSlide
        animated
        columns={1}
        cards={[
          {
            title: 'Страницы брендов и коллекций',
            icon: <ShopOutlined />,
            iconColor: 'green',
            items: [
              'Страница бренда: логотип, описание, базовая статистика (коллекции, позиции, ценовой диапазон).',
              'Сетка коллекций бренда с превью и быстрым переходом внутрь.',
              'Страница коллекции: breadcrumb, краткое описание, блок фильтров по размеру/цвету/наличию.',
              'Сетка товаров коллекции с крупными превью и ключевыми параметрами.',
            ],
          },
        ]}
      />
    ),
  },

  {
    id: 'retail-tool-product-cart',
    header: 'Карточка товара, корзина и оформление заявки',
    content: (
      <FeaturesSlide
        animated
        columns={1}
        cards={[
          {
            title: 'Карточка товара, корзина и оформление',
            icon: <DatabaseOutlined />,
            iconColor: 'orange',
            items: [
              'Отдельная карточка товара с галереей изображений и удобным grid‑отображением характеристик.',
              'Встроенный калькулятор единиц (шт ↔ м² ↔ коробки).',
              'Корзина с возможностью править количество и видеть итоговую сумму.',
              'Multi‑step оформление заявки: корзина → реквизиты → подтверждение, отправка письмом в Eksima.',
            ],
          },
        ]}
      />
    ),
  },

  {
    id: 'retail-tool-history-admin',
    header: 'История заказов, админка и уведомления',
    content: (
      <FeaturesSlide
        animated
        columns={1}
        cards={[
          {
            title: 'История, админка и уведомления',
            icon: <UserOutlined />,
            iconColor: 'purple',
            items: [
              'История заказов со статусами и фильтрами (дата, статус, предприятие, менеджер).',
              'Настройки администратора: пользователи, предприятия, базовые параметры ценообразования.',
              'Секция интеграций: мониторинг синхронизации с 1С.',
              'Система уведомлений: email + in‑app для ключевых событий (создание и изменение статуса заявки).',
            ],
          },
        ]}
      />
    ),
  },
];
