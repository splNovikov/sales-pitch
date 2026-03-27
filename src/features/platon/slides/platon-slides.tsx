import { Typography, Space, Card, Row, Col, List } from 'antd';
import {
  TableOutlined,
  FilterOutlined,
  SearchOutlined,
  EyeOutlined,
  DownloadOutlined,
  KeyOutlined,
  FileTextOutlined,
  LoginOutlined,
  ExpandOutlined,
  LineChartOutlined,
  CalendarOutlined,
  BellOutlined,
  PlayCircleOutlined,
  ShopOutlined,
  SyncOutlined,
  SettingOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  CloudServerOutlined,
  UserOutlined,
  TeamOutlined,
  LockOutlined,
  UnlockOutlined,
  AppstoreOutlined,
  UploadOutlined,
  DeleteOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { platonCreatedAt } from './platon.meta';
import platonLogo from '../images/Platon-logo.png';
import platonScreen1 from '../images/1.png';
import platonScreen2 from '../images/2.png';
import platonScreen3 from '../images/3.png';
import platonScreen4 from '../images/4.png';
import platonScreen5 from '../images/5.png';
import platonScreen6 from '../images/6.png';
import platonScreen7 from '../images/7.png';
import platonScreen8 from '../images/8.png';
import platonScreen9 from '../images/9.png';

const { Title, Text } = Typography;

interface PlatonSlideImageColumnProps {
  src: string;
  alt: string;
}

/** Левая колонка со скриншотом интерфейса — как в портфолио B2B. */
function PlatonSlideImageColumn({ src, alt }: PlatonSlideImageColumnProps) {
  return (
    <Col xs={24} md={14}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          minHeight: '400px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: 'min(480px, calc(100vh - 300px))',
            minHeight: '360px',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f5f5f5',
          }}
        >
          <ImageWithLoader
            src={src}
            alt={alt}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
            containerStyle={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </div>
      </div>
    </Col>
  );
}

/**
 * Selling deck for Платон product.
 */
export const platonSlides: SlideData[] = [
  {
    id: 'platon-title',
    header: undefined,
    content: (
      <MainTitleSlide
        logo={platonLogo}
        logoAlt="Платон"
        logoMaxWidth={320}
        title="Платон"
        subtitle="Мониторинг цен и остатков конкурентов; аналитика под задачи бизнеса"
        createdAt={platonCreatedAt}
      />
    ),
  },
  {
    id: 'platon-summary-table',
    header: 'Сводная таблица',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen1}
            alt="Сводная таблица: продукты и цены конкурентов"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <TableOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Сводная таблица
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Позиции номенклатуры в строках, цены подключённых конкурентов
                  в колонках — сравнение в одной сетке.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FilterOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Фильтры
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Категории и теги — сузить каталог до нужного среза.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <SearchOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Поиск
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  По названию и по артикулу.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f5ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <EyeOutlined style={{ marginRight: 8, color: '#2f54eb' }} />
                  Колонки
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Показать или скрыть колонки с ценами конкурентов.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <DownloadOutlined
                    style={{ marginRight: 8, color: '#722ed1' }}
                  />
                  Экспорт
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Скачать таблицу с учётом фильтров и видимых колонок.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-competitor-multi-account',
    header: 'Один конкурент — несколько учётных записей',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen2}
            alt="Сводная таблица: несколько учётных записей одного конкурента"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <LoginOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Парсинг под разными учётными данными
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Один и тот же конкурент (один сайт) может быть спаршен с
                  разными учётными данными. То есть в момент парсинга парсер
                  авторизуется с разными учётными данными и получает разные
                  цены.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <KeyOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                  Учётка = свой прайс
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Разные логины дают разные прайс-листы и разные цены по одним и
                  тем же позициям.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <TableOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  Сводная таблица
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Для каждой учётной записи — своя колонка с ценами; в одной
                  строке видно все варианты по позиции.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#722ed1' }}
                  />
                  Зачем это нужно
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Зачастую поставщики дают разные цены разным клиентам. Важно
                  понимать полностью картину рынка.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-price-dynamics',
    header: 'Цены в динамике',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen3}
            alt="Модальное окно: динамика цен и остатков по датам"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ExpandOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Модальное окно
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Нажатие на позицию в таблице открывает модальное окно с
                  деталями по выбранной строке.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <LineChartOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Цены и остатки по датам
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  В окне отображается изменение цен и остатков по датам — как
                  данные менялись от съёма к съёму.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-section-analytics',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Модуль аналитики"
        subtitle="Сводки, метрики и обзор изменений по данным конкурентов"
        imageIndex={8}
        imageAlt="Модуль аналитики"
      />
    ),
  },
  {
    id: 'platon-analytics-changes',
    header: 'Анализ изменений',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen4}
            alt="Аналитика: уведомления об изменениях остатков"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <LineChartOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Изменения цен и остатков
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Анализ по динамике цен и остатков конкурентов — что и
                  насколько изменилось за выбранный интервал.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CalendarOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Период
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Задаёте период, за который строится анализ — гибко под отчёт
                  или регулярный обзор.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <BellOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  Пороги и нотификации
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Настраиваете порог по величине изменения: при его превышении
                  событие попадает в результаты анализа и уходит нотификация.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-section-admin',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Администрирование"
        subtitle="Учётные данные к источникам, очередь обходов и настройки среды"
        imageIndex={13}
        imageAlt="Администрирование"
      />
    ),
  },
  {
    id: 'platon-parsing-launch',
    header: 'Запуск парсинга',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen5}
            alt="Парсинг: статус очереди и запуск по источникам"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <PlayCircleOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Запуск сейчас
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Если нужно обновить данные немедленно — запускаете парсинг
                  вручную, не дожидаясь регламента.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShopOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                  Кого парсить
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Можно выбрать конкретного конкурента (источник) или запустить
                  обход сразу по всем подключённым.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <SyncOutlined style={{ marginRight: 8, color: '#faad14' }} />В
                  реальном времени
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Смотрите ход выполнения и статусы задач по мере работы — без
                  ожидания окончания всего прогона.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-competitor-settings',
    header: 'Настройки конкурентов',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen6}
            alt="Настройки парсинга: лимиты, антикапча, stealth"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <SettingOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Страница настроек
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  У каждого конкурента — свой набор параметров: общие правила не
                  подменяют индивидуальную конфигурацию источника.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <SafetyOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Обход ограничений
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Учёт блокировок и защит площадок — настройки под конкретный
                  сайт и его антибот-поведение.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ThunderboltOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Запросы и параллель
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Регулируете интенсивность: сколько запросов и сколько задач
                  выполняется параллельно — чтобы не перегружать источник и
                  оставаться в допустимых рамках.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f5ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CloudServerOutlined
                    style={{ marginRight: 8, color: '#2f54eb' }}
                  />
                  Прокси
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Для источника можно включить или отключить использование
                  прокси — в том числе под вашу сетевую схему.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <UserOutlined style={{ marginRight: 8, color: '#722ed1' }} />
                  Поведение и прочие опции
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Эмуляция действий пользователя (паузы, сценарий навигации),
                  плюс множество других переключателей; набор настроек можно
                  расширять под новые задачи.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-credentials-roles',
    header: 'Учётные записи',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen7}
            alt="Учётные записи для парсеров и роли"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <KeyOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Логины для парсинга
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Если для обхода нужна авторизация на сайте конкурента, в
                  систему можно добавить неограниченное число учётных записей
                  под один источник — сколько реально нужно бизнесу.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <TeamOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                  Роли и видимость цен
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Настраивается, какие роли пользователей видят результаты
                  парсинга и в каком объёме. Например: роль{' '}
                  <Text strong>«Аналитик»</Text> — цены по всем учётным записям
                  одного конкурента; роль <Text strong>«Сейлз-менеджер»</Text> —
                  только по одной назначенной учётной записи.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-proxy-admin',
    header: 'Настройки прокси',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen8}
            alt="Прокси: пул и массовый импорт"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CloudServerOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Страница и список
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отдельный экран настроек прокси: ведёте список адресов,
                  подключаете и отключаете записи, управляете составом пула.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <LockOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  Блокировки
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Видно, какие прокси заблокированы и когда это зафиксировано.
                  Заблокированные автоматически исключаются из парсинга — меньше
                  повторяющихся ошибок на недоступных адресах.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <UnlockOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Разблокировка
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Когда прокси снова годен к работе, его можно вернуть в пул
                  вручную — после проверки снова участвует в обходах.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-product-management',
    header: 'Управление продуктами',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <PlatonSlideImageColumn
            src={platonScreen9}
            alt="Управление продуктами"
          />
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <AppstoreOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Страница управления
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отдельный раздел для ведения перечня продуктов — того, что
                  сопоставляется с конкурентами и участвует в обходах.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <UploadOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Загрузка списка
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Можно загрузить список из файла; на странице есть инструкция —
                  какой формат ожидается и как пройти шаги импорта без ошибок.
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <DeleteOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Удалить всё
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Доступна операция очистить весь перечень продуктов разом —
                  когда нужно начать список заново.
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'platon-section-roles',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Роли"
        subtitle="Кто что видит и чем может пользоваться в системе"
        imageIndex={14}
        imageAlt="Роли"
      />
    ),
  },
  {
    id: 'platon-role-model',
    header: 'Ролевая модель',
    content: (
      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div style={{ width: '100%', maxWidth: 920 }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Card
                size="small"
                style={{ backgroundColor: '#e6f7ff', width: '100%' }}
              >
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <IdcardOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Четыре роли
                </Title>
                <Text
                  type="secondary"
                  style={{
                    fontSize: 'var(--app-font-size-sm)',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Сейчас в системе заведены четыре роли:
                </Text>
                <List
                  size="small"
                  pagination={false}
                  dataSource={[
                    <>
                      <Text strong>Администратор</Text> — максимальный доступ к
                      функциональности и настройкам.
                    </>,
                    <>
                      <Text strong>Маппер</Text> — добавляет позиции и ссылки на
                      карточки продуктов у конкурентов (привязка номенклатуры к
                      URL источников).
                    </>,
                    <>
                      <Text strong>Сейлз-менеджер</Text> — свой уровень доступа
                      к разделам под задачи продаж.
                    </>,
                    <>
                      <Text strong>Аналитик</Text> — свой уровень доступа к
                      данным и аналитике.
                    </>,
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '6px 0' }}>
                      <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                        • {item}
                      </Text>
                    </List.Item>
                  )}
                />
              </Card>
              <Card
                size="small"
                style={{ backgroundColor: '#f6ffed', width: '100%' }}
              >
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <SafetyOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Уровни доступа
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  У каждой роли свой набор экранов и действий: одни видят только
                  потребление данных, другие — ещё и запуск обходов, третьи —
                  всю техническую обвязку.
                </Text>
              </Card>
              <Card
                size="small"
                style={{ backgroundColor: '#fff7e6', width: '100%' }}
              >
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <SettingOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Под ваш бизнес
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Состав ролей и границы доступа можно настраивать под
                  конкретные процессы и требования — не зашито жёстко
                  «навсегда».
                </Text>
              </Card>
            </Space>
          </div>
        </div>
      </Card>
    ),
  },
  {
    id: 'platon-closing',
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
        <Title
          level={2}
          style={{
            margin: 0,
            fontWeight: 500,
            textAlign: 'center',
            color: '#595959',
          }}
        >
          Благодарим за внимание
        </Title>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          {formatDateForSlide(platonCreatedAt)}
        </Text>
      </Space>
    ),
  },
];
