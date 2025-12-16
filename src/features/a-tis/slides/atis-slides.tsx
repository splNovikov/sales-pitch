import { Space, Typography, Card, List, Row, Col, Tag } from 'antd';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { atisCreatedAt } from './atis.meta';
import atisWhiteLogo from '../atis-white-logo.png';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import {
  DatabaseOutlined,
  SyncOutlined,
  RobotOutlined,
  BuildOutlined,
  SearchOutlined,
  FileTextOutlined,
  CloudUploadOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export const atisSlides: SlideData[] = [
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'var(--app-spacing-md)',
            }}
          >
            <div
              aria-label="А‑ТИС"
              role="img"
              style={{
                width: '260px',
                maxWidth: '100%',
                height: '40px',
                background:
                  'linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)',
                WebkitMaskImage: `url(${atisWhiteLogo})`,
                maskImage: `url(${atisWhiteLogo})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
              }}
            />
          </div>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-sm)',
              marginBottom: 0,
            }}
          >
            Коммерческое предложение по созданию сайта и наполнению контентом
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
          {formatDateForSlide(atisCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'plan-overview',
    header: 'План реализации проекта',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
            Проект делим на 6 логичных шагов — от подготовки данных до передачи
            готового решения команде А‑ТИС.
          </Paragraph>
          <AnimatedSteps
            direction="vertical"
            stepInterval={2200}
            items={[
              {
                title: 'Шаг 1. Создание данных',
                description:
                  'Подготовка каталога: парсинг, генерация через ИИ или комбинированный подход.',
              },
              {
                title: 'Шаг 2. Развёртывание',
                description:
                  'Установка и базовая настройка Aspro: Максимум под задачи А‑ТИС.',
              },
              {
                title: 'Шаг 3. SEO и семантическое ядро',
                description:
                  'Сбор семантики, карта запросов и подготовка структуры под поиск.',
              },
              {
                title: 'Шаг 4. Контент и дизайн',
                description:
                  'Генерация текстов и отрисовка ключевых баннеров и визуала.',
              },
              {
                title: 'Шаг 5. Загрузка данных',
                description:
                  'Импорт каталога, проверка фильтров, цен и отправки заказов.',
              },
              {
                title: 'Шаг 6. Тестирование и передача',
                description:
                  'Финальное тестирование сценариев и онбординг команды А‑ТИС.',
              },
            ]}
          />
        </Space>
      </Card>
    ),
  },
  {
    id: 'step-1-data',
    header: 'Шаг 1. Создание данных',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Paragraph>
            На этом этапе определяем, откуда берётся каталог и как он будет
            поддерживаться в актуальном состоянии.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue">Вариант 1</Tag>
                  <Title level={5} style={{ marginTop: 0 }}>
                    <DatabaseOutlined
                      style={{ marginRight: 8, color: '#1890ff' }}
                    />
                    Разовый парсинг
                  </Title>
                  <Text type="secondary" style={{ fontSize: 13 }}>
                    Спарсить текущий каталог (или прайсы) и подготовить данные
                    под Aspro. Подходит, если структура и цены меняются нечасто.
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">Вариант 2</Tag>
                  <Title level={5} style={{ marginTop: 0 }}>
                    <SyncOutlined
                      style={{ marginRight: 8, color: '#52c41a' }}
                    />
                    Парсер с актуализацией
                  </Title>
                  <Text type="secondary" style={{ fontSize: 13 }}>
                    Парсер, который регулярно обновляет цены и/или остатки по
                    расписанию. Актуально, если прайсы меняются часто.
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffd591',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">Вариант 3</Tag>
                  <Title level={5} style={{ marginTop: 0 }}>
                    <RobotOutlined
                      style={{ marginRight: 8, color: '#fa8c16' }}
                    />
                    Генерация через ИИ
                  </Title>
                  <Text type="secondary" style={{ fontSize: 13 }}>
                    Генерация описаний и недостающих позиций по шаблонам.
                    Используем этот вариант, только если парсинг или выгрузка
                    данных невозможны или дают слишком «шумный» результат.
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'step-2-deploy',
    header: 'Шаг 2. Развёртывание Aspro: Максимум',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Готовим рабочее окружение на базе Aspro: Максимум
          </Title>
          <Paragraph>
            Наша задача — развернуть типовое решение и максимально быстро
            превратить его в рабочий сайт для А‑ТИС.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue">Инфраструктура</Tag>
                  <Text strong>Развёртывание</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Развернуть Aspro: Максимум на выбранном хостинге.',
                      'Проверить работу базового шаблона.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffe58f',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">UX и контент</Tag>
                  <Text strong>Чистка типовых блоков</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Удалить ненужные типовые страницы и блоки.',
                      'Заменить баннеры, favicon и контактные блоки.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">Айдентика и формы</Tag>
                  <Text strong>Фирменный стиль и заявки</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Применить лого А‑ТИС, фирменные цвета и шрифты.',
                      'Настроить формы заявок и отправку на почту/мессенджеры.',
                      'Проверить шаблоны карточек товаров и разделов.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'step-3-seo',
    header: 'Шаг 3. SEO и семантическое ядро',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <SearchOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Семантика и структура под поиск
          </Title>
          <Paragraph>
            Параллельно с настройкой сайта формируем основу для органического
            трафика: запросы, структура и метатеги.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">1. Семантика</Tag>
                  <Text strong>Сбор запросов</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Сбор и кластеризация семантического ядра.',
                      'Разделение на товары, категории, брендовые запросы.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue">2. Структура</Tag>
                  <Text strong>Карта запрос → страница</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Привязка запросов к структуре каталога и страниц.',
                      'Выделение ключевых посадочных страниц под спрос.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffd591',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">3. Техника</Tag>
                  <Text strong>Метатеги и база SEO</Text>
                  <List
                    size="small"
                    dataSource={[
                      'ТЗ на title, description и h1 для ключевых страниц.',
                      'Базовая перелинковка и настройка ЧПУ, sitemap, robots.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'step-4-content-design',
    header: 'Шаг 4. Генерация контента и дизайн',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Заполняем сайт текстами и визуалом
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">Контент</Tag>
                  <Text strong>Тексты</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Генерация текста на главную страницу под целевые запросы.',
                      'Генерация и вычитка текста для раздела «О компании».',
                      'Генерация описаний для разделов каталога (категорий).',
                      'Генерация описаний для карточек товаров по шаблонам.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue">Дизайн</Tag>
                  <Text strong>Визуал</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Отрисовать основные баннеры (главная, ключевые разделы).',
                      'Подготовить дополнительные изображения/иконки при необходимости.',
                      'Проверить визуальное соответствие фирменному стилю А‑ТИС.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'step-5-import',
    header: 'Шаг 5. Загрузка данных и интеграции',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CloudUploadOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Загрузка каталога и подключение систем
          </Title>
          <Paragraph>
            На этом шаге данные из шага 1 попадают в боевой каталог.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue">Каталог</Tag>
                  <Text strong>Импорт и проверка</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Импорт подготовленных данных о товарах в Aspro.',
                      'Проверка корректности категорий, фильтров и цен.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">Интеграции</Tag>
                  <Text strong>Заказы и заявки</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Прогон тестовых заказов через корзину и формы.',
                      'Настройка отправки заказов и заявок в систему заказчика (почта / CRM / 1С).',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'step-6-testing-handover',
    header: 'Шаг 6. Тестирование и передача проекта',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Финальный этап перед запуском
          </Title>
          <Paragraph>
            Проверяем, что всё работает как ожидалось, и передаём проект в
            работу.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffd591',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">Тестирование</Tag>
                  <Text strong>Проверка сценариев</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Функциональное тестирование основных сценариев (поиск, каталог, корзина, формы).',
                      'Проверка отображения на мобильных устройствах и в популярных браузерах.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">Передача</Tag>
                  <Text strong>Онбординг А‑ТИС</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Финальная вычитка текстов и проверка контактных данных.',
                      'Передача доступов и короткий онбординг для команды А‑ТИС.',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    ),
  },
  {
    id: 'final',
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
