import { Typography, Card, Space, List, Row, Col, Table } from 'antd';
import {
  CheckCircleOutlined,
  SettingOutlined,
  BgColorsOutlined,
  PictureOutlined,
  DatabaseOutlined,
  SearchOutlined,
  PlayCircleOutlined,
  FileTextOutlined,
  ApiOutlined,
  CloudOutlined,
  InfoCircleOutlined,
  ThunderboltOutlined,
  CloudUploadOutlined,
  DollarOutlined,
  QuestionCircleOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { networkdevicesCreatedAt } from './networkdevices.meta';

const { Title, Paragraph, Text } = Typography;

// Roadmap items для этапов разработки
const developmentRoadmapItems: RoadmapItem[] = [
  {
    title: 'Подготовка сервера и установка 1С-Битрикс',
    description:
      'Подготовка сервера/хостинга, установка 1С-Битрикс, настройка окружений, организация бэкапов, установка шаблона, базовая настройка модулей и структуры каталогов',
    duration: '2-3 дня',
    icon: <CloudOutlined />,
    color: 'blue',
  },
  {
    title: 'Индивидуализация и брендирование',
    description:
      'Определение и отключение неиспользуемых модулей, скрытие лишних разделов, изменение цветовой схемы, размещение логотипа, настройка шрифтов и UI-элементов под брендбук',
    duration: '2-3 дня',
    icon: <BgColorsOutlined />,
    color: 'cyan',
  },
  {
    title: 'Дизайн и контент',
    description:
      'Отрисовка баннеров для главной и внутренних страниц, иконки для каталога, подготовка текстового контента',
    duration: '1-2 дня',
    icon: <PictureOutlined />,
    color: 'green',
  },
  {
    title: 'Выгрузка и оптимизация каталога',
    description:
      'Выгрузка каталога товаров из таблицы (парсер), выгрузка цен, торговых предложений и остатков, структурирование каталога, настройка фильтров, сортировок и оптимизация карточки товара',
    duration: '3-4 дня',
    icon: <DatabaseOutlined />,
    color: 'orange',
  },
  {
    title: 'SEO, аналитика и тестирование',
    description:
      'Базовая SEO-настройка (ЧПУ, мета-теги, микроразметка), подключение аналитики, редиректы со старого сайта, функциональное тестирование, кроссбраузерность, адаптивность, проверка безопасности и производительности',
    duration: '2 дня',
    icon: <SearchOutlined />,
    color: 'purple',
  },
  {
    title: 'Обучение, запуск и сопровождение',
    description:
      'Обучение сотрудников работе с каталогом и заказами, подготовка инструкций, перенос на боевой сервер, финальная проверка, мониторинг',
    duration: '1 день + сопровождение',
    icon: <PlayCircleOutlined />,
    color: 'green',
  },
];

export const networkdevicesSlides: SlideData[] = [
  // Главный слайд
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Презентация"
        subtitle="Разработка сайта на 1С-Битрикс для продажи серверного оборудования"
        description=""
        createdAt={networkdevicesCreatedAt}
        location="Продажа серверного оборудования"
      />
    ),
  },

  // Этапы разработки (Roadmap)
  {
    id: 'roadmap-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Этапы разработки"
        subtitle="Дорожная карта проекта"
        imageIndex={2}
      />
    ),
  },
  {
    id: 'roadmap',
    header: 'Дорожная карта',
    content: (
      <Card>
        <Roadmap items={developmentRoadmapItems} mode="alternate" />
      </Card>
    ),
  },

  // Выгрузка товаров из Excel
  {
    id: 'excel-import-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Выгрузка товаров из Excel"
        subtitle="Импорт каталога товаров в 1С-Битрикс"
        imageIndex={1}
      />
    ),
  },
  {
    id: 'excel-import-process',
    header: 'Процесс выгрузки товаров',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            Товары будут загружены на сайт через выгрузку из таблицы Excel. Мы
            создадим специальный скрипт для импорта данных в 1С-Битрикс.
          </Paragraph>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Space direction="vertical" size="middle">
                  <Title level={4}>
                    <FileTextOutlined
                      style={{
                        color: 'var(--app-color-primary)',
                        marginRight: 8,
                      }}
                    />
                    Этап 1: Генерация данных
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Анализ структуры данных',
                      'Определение необходимых полей',
                      'Генерация Excel таблицы с товарами',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <CheckCircleOutlined
                          style={{ color: 'green', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card size="small" type="inner">
                <Space direction="vertical" size="middle">
                  <Title level={4}>
                    <SettingOutlined
                      style={{
                        color: 'var(--app-color-primary)',
                        marginRight: 8,
                      }}
                    />
                    Этап 2: Настройка соответствия
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Настройка соответствия полей Excel к полям Битрикс',
                      'Маппинг данных товаров',
                      'Настройка категорий и характеристик',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <CheckCircleOutlined
                          style={{ color: 'green', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
          <Card size="small" type="inner">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Title level={4}>
                <CloudUploadOutlined
                  style={{
                    color: 'var(--app-color-primary)',
                    marginRight: 8,
                  }}
                />
                Этап 3: Импорт в Битрикс
              </Title>
              <List
                size="small"
                dataSource={[
                  'Разработка скрипта для обработки Excel файла',
                  'Автоматическая загрузка товаров в каталог Битрикс',
                  'Проверка корректности загруженных данных',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <ApiOutlined style={{ color: 'blue', marginRight: 8 }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Space>
          </Card>
          <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
            <Paragraph style={{ marginBottom: 0 }}>
              <InfoCircleOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              <Text strong>Важно:</Text> Этап генерации данных выполняется
              отдельно и не входит в основную дорожную карту.
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'excel-import-benefits',
    header: 'Преимущества подхода',
    content: (
      <Card>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <ThunderboltOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Эффективность
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Быстрая загрузка большого объема товаров',
                    'Автоматизация процесса импорта',
                    'Минимальные ручные операции',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: 'green', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Space direction="vertical" size="middle">
                <Title level={4}>
                  <DatabaseOutlined
                    style={{
                      color: 'var(--app-color-primary)',
                      marginRight: 8,
                    }}
                  />
                  Гибкость
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Легкое обновление товаров через Excel',
                    'Возможность повторной загрузки',
                    'Настройка под любую структуру данных',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <CheckCircleOutlined
                        style={{ color: 'green', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </Card>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Стоимость проекта
  {
    id: 'budget-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Стоимость проекта"
        subtitle="Детальная разбивка по этапам и специалистам"
        imageIndex={3}
      />
    ),
  },
  {
    id: 'budget-detailed',
    header: 'Разбивка стоимости',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Table
            columns={[
              {
                title: 'Специалист',
                dataIndex: 'specialist',
                key: 'specialist',
                width: 200,
              },
              {
                title: 'Часы',
                dataIndex: 'hours',
                key: 'hours',
                width: 100,
                align: 'center' as const,
              },
              {
                title: 'Ставка',
                dataIndex: 'rate',
                key: 'rate',
                width: 150,
                align: 'center' as const,
              },
              {
                title: 'Стоимость',
                dataIndex: 'cost',
                key: 'cost',
                width: 150,
                align: 'right' as const,
              },
            ]}
            dataSource={[
              {
                key: '1',
                specialist: 'Senior разработчик',
                hours: '20',
                rate: '2 500 ₽/час',
                cost: '50 000 ₽',
                tasks: [
                  'Подготовка сервера/хостинга, установка 1С-Битрикс, настройка окружений, организация бэкапов',
                  'Установка шаблона, базовая настройка модулей, структуры каталогов, первичная проверка работоспособности',
                  'Выгрузка каталога товаров из таблицы (отдельный парсер)',
                  'Выгрузка цен, торговых предложений и остатков',
                  'Структурирование каталога, оптимизация карточки товара',
                  'Базовая SEO-настройка (ЧПУ, мета-теги, микроразметка)',
                ],
              },
              {
                key: '2',
                specialist: 'Middle разработчик',
                hours: '10',
                rate: '2 000 ₽/час',
                cost: '20 000 ₽',
                tasks: [
                  'Определение и отключение неиспользуемых модулей, скрытие лишних разделов, индивидуализация интерфейса',
                  'Изменение цветовой схемы, размещение логотипа, настройка шрифтов и UI-элементов под брендбук',
                  'Техническая реализация баннеров и элементов дизайна',
                ],
              },
              {
                key: '3',
                specialist: 'Дизайнер',
                hours: '12',
                rate: '2 000 ₽/час',
                cost: '24 000 ₽',
                tasks: [
                  'Отрисовка баннеров для главной страницы',
                  'Отрисовка баннеров для внутренних страниц',
                  'Иконки для каталога',
                  'Подготовка текстового контента',
                ],
              },
              {
                key: '4',
                specialist: 'Контент-менеджер',
                hours: '40',
                rate: '1 500 ₽/час',
                cost: '60 000 ₽',
                tasks: [
                  'Генерация каталога товаров (создание товаров)',
                  'Подбор картинок',
                  'Генерация описаний',
                  'Генерация характеристик',
                ],
              },
            ]}
            pagination={false}
            size="small"
            expandable={{
              expandedRowRender: record => (
                <Card size="small" style={{ margin: '8px 0' }}>
                  <List
                    size="small"
                    dataSource={record.tasks}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <CheckCircleOutlined
                          style={{ color: 'green', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
                </Card>
              ),
            }}
            summary={() => {
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого:</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text strong>82 часа</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} />
                    <Table.Summary.Cell index={3}>
                      <Text strong style={{ fontSize: '18px' }}>
                        154 000 ₽
                      </Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Space>
      </Card>
    ),
  },

  // Вопросы для уточнения
  {
    id: 'questions-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Вопросы для уточнения"
        subtitle="Необходимо обсудить перед началом проекта"
        imageIndex={4}
      />
    ),
  },
  {
    id: 'questions-content',
    header: 'Вопросы для уточнения деталей проекта',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <DatabaseOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Генерация и загрузка товаров
            </Title>
            <List
              size="small"
              dataSource={[
                'Откуда генерировать товары (откуда браться)?',
                'Есть ли картинки? Что есть в наличии?',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <QuestionCircleOutlined
                    style={{ color: 'orange', marginRight: 8 }}
                  />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <SearchOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              SEO и контент
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              <QuestionCircleOutlined
                style={{ color: 'orange', marginRight: 8 }}
              />
              Хотите ли сайт, чтобы двигался по SEO? Тогда контента должно быть
              больше (и его генерация соответственно).
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <CalendarOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Сроки проекта
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              <QuestionCircleOutlined
                style={{ color: 'orange', marginRight: 8 }}
              />
              Примерные сроки реализации проекта?
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <MailOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Обработка заявок
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              <QuestionCircleOutlined
                style={{ color: 'orange', marginRight: 8 }}
              />
              Куда должны уходить заявки? (Bitrix24, CRM, Telegram, почта)
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <ShoppingCartOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Торговые предложения
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              <QuestionCircleOutlined
                style={{ color: 'orange', marginRight: 8 }}
              />
              У товаров могут ли быть торговые предложения? Под ТП могут быть, к
              примеру, сервер с разными мощностями. Если 1 товар на одном уровне
              без вложенности.
            </Paragraph>
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <DollarOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Управление ценами
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              <QuestionCircleOutlined
                style={{ color: 'orange', marginRight: 8 }}
              />
              Как меняются цены? Если мы делаем загрузку через Excel, то можно
              либо а) сделать динамический скрипт, либо б) зафиксировать. Или
              научить менять цены в админке Битрикс.
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },

  // Контакты
  {
    id: 'contacts',
    header: undefined,
    content: <SectionTitleSlide title="Контактная информация" imageIndex={0} />,
  },
  {
    id: 'contacts-list',
    header: 'Контакты',
    content: (
      <ContactsSlide
        contacts={[
          {
            name: 'Новиков Павел',
            role: 'Технический директор',
            phone: '+7 908 555 0606',
            email: 'p.novikov@proxima.ooo',
            websiteLabel: 'proxima24.ru',
            variant: 'green',
          },
          {
            name: 'Ситяков Артём',
            role: 'Руководитель отдела маркетинга',
            phone: '+7 927 110 84 88',
            email: 'a.sityakov@proxima.ooo',
            websiteLabel: 'proxima24.ru',
            variant: 'blue',
          },
        ]}
      />
    ),
  },
];
