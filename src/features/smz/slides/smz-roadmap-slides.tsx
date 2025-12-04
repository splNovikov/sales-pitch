import {
  Typography,
  Space,
  Divider,
  Card,
  Row,
  Col,
} from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  ShoppingOutlined,
  DatabaseOutlined,
  EyeInvisibleOutlined,
  BgColorsOutlined,
  PictureOutlined,
  SearchOutlined,
  SafetyOutlined,
  FileTextOutlined,
  UserOutlined,
  PlayCircleOutlined,
  SettingOutlined,
  GlobalOutlined,
  PhoneOutlined,
  AuditOutlined,
  ShopOutlined,
  ExperimentOutlined,
  DollarOutlined,
  SyncOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { smzRoadmapCreatedAt } from './smz-roadmap.meta';

const { Title, Paragraph, Text, Link } = Typography;

const roadmapItems: RoadmapItem[] = [
  {
    title: 'Инициация и аналитика',
    description:
      'Сбор требований, аудит текущего сайта, согласование целей и ограничений, подготовка ТЗ',
    duration: '1 неделя',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽
    icon: <FileTextOutlined />,
    color: 'blue',
  },
  {
    title: 'Выбор и покупка шаблона Аспро',
    description:
      'Подбор шаблона под задачи, проверка требований, покупка и регистрация лицензий',
    duration: '2 дня',
    cost: 2 * 8 * 1500, // 2 дня × 8 часов × 1500 ₽/час = 24,000 ₽
    icon: <ShoppingOutlined />,
    color: 'blue',
  },
  {
    title: 'Техническая подготовка инфраструктуры',
    description:
      'Подготовка сервера/хостинга, установка 1С-Битрикс, настройка окружений, организация бэкапов',
    duration: '2 дня',
    cost: 2 * 8 * 1500, // 2 дня × 8 часов × 1500 ₽/час = 24,000 ₽
    icon: <SettingOutlined />,
    color: 'blue',
  },
  {
    title: 'Разворачивание шаблона Аспро',
    description:
      'Установка шаблона, базовая настройка модулей, структуры каталогов, первичная проверка работоспособности',
    duration: '1 неделя',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽
    icon: <RocketOutlined />,
    color: 'cyan',
  },
  {
    title: 'Интеграция и выгрузка из 1С',
    description:
      'Настройка обмена данными (CommerceML 2.0), выгрузка каталога, цен, остатков, обратная выгрузка заказов, тестирование',
    duration: '2.5 недели',
    cost: 13 * 8 * 1500, // 13 дней × 8 часов × 1500 ₽/час = 156,000 ₽
    icon: <DatabaseOutlined />,
    color: 'green',
  },
  {
    title: 'Скрытие неиспользуемого функционала',
    description:
      'Определение и отключение неиспользуемых модулей, скрытие лишних разделов, упрощение интерфейса',
    duration: '3 дня',
    cost: 3 * 8 * 1500, // 3 дня × 8 часов × 1500 ₽/час = 36,000 ₽
    icon: <EyeInvisibleOutlined />,
    color: 'orange',
  },
  {
    title: 'Персонализация под бренд заказчика',
    description:
      'Изменение цветовой схемы, размещение логотипа, настройка шрифтов и UI-элементов под брендбук',
    duration: '1-2 недели',
    cost: 8 * 8 * 1500, // 8 дней × 8 часов × 1500 ₽/час = 96,000 ₽
    icon: <BgColorsOutlined />,
    color: 'purple',
  },
  {
    title: 'Графика и контент',
    description:
      'Отрисовка до 3 баннеров для главной, до 5 баннеров для внутренних страниц, иконки для каталога, подготовка текстового контента',
    duration: '2-3 недели',
    cost: 13 * 8 * 1500, // 13 дней × 8 часов × 1500 ₽/час = 156,000 ₽
    icon: <PictureOutlined />,
    color: 'magenta',
  },
  {
    title: 'UX-настройка каталога и поиска',
    description:
      'Структурирование каталога, настройка фильтров и сортировок, умный поиск, оптимизация карточки товара',
    duration: '1-2 недели',
    cost: 8 * 8 * 1500, // 8 дней × 8 часов × 1500 ₽/час = 96,000 ₽
    icon: <SearchOutlined />,
    color: 'geekblue',
  },
  {
    title: 'SEO и маркетинговая подготовка',
    description:
      'Базовая SEO-настройка (ЧПУ, мета-теги, микроразметка), подключение аналитики, редиректы со старого сайта',
    duration: '1-2 недели',
    cost: 8 * 8 * 1500, // 8 дней × 8 часов × 1500 ₽/час = 96,000 ₽
    icon: <GlobalOutlined />,
    color: 'lime',
  },
  {
    title: 'Тестирование и полировка',
    description:
      'Функциональное тестирование, кроссбраузерность, адаптивность, проверка безопасности и производительности',
    duration: '2 недели',
    cost: 10 * 8 * 1500, // 10 дней × 8 часов × 1500 ₽/час = 120,000 ₽
    icon: <SafetyOutlined />,
    color: 'gold',
  },
  {
    title: 'Обучение и документация',
    description:
      'Обучение сотрудников работе с каталогом и заказами, подготовка инструкций и видео-гайдов',
    duration: '1 неделя',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽
    icon: <UserOutlined />,
    color: 'cyan',
  },
  {
    title: 'Запуск и сопровождение',
    description:
      'Перенос на боевой сервер, финальная проверка, мониторинг, регламентное сопровождение',
    duration: '1 неделя + сопровождение',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽ (без учета сопровождения)
    icon: <PlayCircleOutlined />,
    color: 'green',
  },
];

// Общая стоимость с лицензией
const totalCost = 200000;

export const smzRoadmapSlides: SlideData[] = [
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
            ДОРОЖНАЯ КАРТА
          </Title>
          <Title
            level={2}
            style={{
              fontSize: '36px',
              fontWeight: 500,
              marginTop: 'var(--app-spacing-sm)',
              marginBottom: 0,
            }}
          >
            Разработка интернет-магазина на шаблоне Аспро
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-lg)',
              marginBottom: 0,
              color: 'var(--app-color-text-secondary)',
            }}
          >
            Поэтапный план реализации обновления сайта СМЗ
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
          {formatDateForSlide(smzRoadmapCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'roadmap',
    header: 'Дорожная карта разработки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%', marginBottom: 'var(--app-spacing-md)' }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                      3-4 месяца
                    </Title>
                    <Text>Общий срок реализации</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                      13 этапов
                    </Title>
                    <Text>Логически связанных шагов</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                        {totalCost.toLocaleString('ru-RU')} ₽
                      </Title>
                      <Text style={{ fontSize: '12px' }}>
                        + лицензия 1С Битрикс Малый бизнес 41 000 ₽
                      </Text>
                      <Text style={{ fontSize: '12px' }}>
                        + шаблон Аспро (95 000 ₽ - 115 000 ₽)
                      </Text>
                    </Space>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
        <Card>
          <Roadmap items={roadmapItems} mode="alternate" />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ marginTop: 0 }}>
              <CheckCircleOutlined style={{ color: '#faad14', marginRight: 8 }} />
              Ключевые принципы
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Последовательная реализация этапов, регулярное согласование с
              заказчиком, тестирование на каждом этапе, гибкость в адаптации под
              требования.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'roadmap-1c',
    header: 'Дорожная карта по подготовке 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%', marginBottom: 'var(--app-spacing-md)' }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                      2-3 месяца
                    </Title>
                    <Text>Общий срок реализации</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                      13 этапов
                    </Title>
                    <Text>Логически связанных шагов</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                      0 ₽
                    </Title>
                    <Text>Стоимость работ</Text>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
        <Card>
          <Roadmap
            items={[
              {
                title: 'Аудит текущей базы 1С',
                description:
                  'Проверка состояния базы данных товаров, оценка конфигурации 1С на предмет возможности установки модуля обмена, выявление проблемных мест',
                duration: '3-5 дней',
                icon: <AuditOutlined />,
                color: 'blue',
              },
              {
                title: 'Создание структуры каталога',
                description:
                  'Определение и утверждение иерархии разделов и подразделов для сайта, структура должна быть воспроизведена в 1С',
                duration: '2-3 дня',
                icon: <DatabaseOutlined />,
                color: 'cyan',
              },
              {
                title: 'Разработка единого стандарта заполнения',
                description:
                  'Установка правил для названий товаров, форматов описаний, загрузки изображений. Обеспечение единообразия на сайте',
                duration: '2-3 дня',
                icon: <FileTextOutlined />,
                color: 'geekblue',
              },
              {
                title: 'Проверка и обновление конфигурации',
                description:
                  'Обновление конфигурации 1С при необходимости, проверка совместимости с модулем обмена данными',
                duration: '1-2 дня',
                icon: <SettingOutlined />,
                color: 'green',
              },
              {
                title: 'Настройка дополнительных реквизитов',
                description:
                  'Определение свойств товара (цвет, размер, материал) для фильтрации на сайте, настройка соответствующих реквизитов в 1С',
                duration: '2-3 дня',
                icon: <EditOutlined />,
                color: 'lime',
              },
              {
                title: 'Создание транзитного каталога',
                description:
                  'Создание отдельного каталога в 1С (например, "Для сайта"), куда в нужной структуре помещаются товары для выгрузки',
                duration: '1-2 дня',
                icon: <ShopOutlined />,
                color: 'orange',
              },
              {
                title: 'Заполнение основной информации товаров',
                description:
                  'Заполнение наименования, полного описания с HTML-тегами, артикула, категории/группы, производителя (бренда)',
                duration: 'По объему работ',
                icon: <FileTextOutlined />,
                color: 'purple',
              },
              {
                title: 'Загрузка изображений',
                description:
                  'Загрузка качественных фотографий в карточки товаров в 1С. Порядок важен: первое изображение станет основным на сайте',
                duration: 'По объему работ',
                icon: <PictureOutlined />,
                color: 'magenta',
              },
              {
                title: 'Установка цен и остатков',
                description:
                  'Настройка правильного вида цены (например, "Розничная") для выгрузки на сайт, настройка отражения остатков с нужных складов',
                duration: '2-3 дня',
                icon: <DollarOutlined />,
                color: 'cyan',
              },
              {
                title: 'Тестовая выгрузка',
                description:
                  'Выбор нескольких товаров из разных категорий и выполнение пробной выгрузки на тестовую версию сайта',
                duration: '2-3 дня',
                icon: <SyncOutlined />,
                color: 'blue',
              },
              {
                title: 'Комплексная проверка отображения',
                description:
                  'Проверка правильности расположения в каталоге, корректности названий, описаний, изображений, торговых предложений, цен и остатков',
                duration: '3-5 дней',
                icon: <ExperimentOutlined />,
                color: 'orange',
              },
              {
                title: 'Внесение корректировок',
                description:
                  'Внесение правок в карточки товаров в 1С при обнаружении ошибок, повторная выгрузка для проверки',
                duration: 'По необходимости',
                icon: <EditOutlined />,
                color: 'red',
              },
              {
                title: 'Промышленная эксплуатация и поддержка',
                description:
                  'Запуск автоматического обмена данными, настройка расписания синхронизации, мониторинг работы, поддержка и сопровождение',
                duration: 'Постоянно',
                icon: <PlayCircleOutlined />,
                color: 'green',
              },
            ]}
            mode="alternate"
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ marginTop: 0 }}>
              <CheckCircleOutlined style={{ color: '#faad14', marginRight: 8 }} />
              Важно
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Качественная подготовка данных в 1С — основа успешной работы
              интернет-магазина. Правильная структура и единые стандарты
              заполнения обеспечат корректное отображение товаров на сайте.
            </Paragraph>
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
