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
  TagOutlined,
  WarningOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

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
                height: '60px',
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
            Коммерческое предложение на разработку веб-сайта
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
                title: 'Шаг 1. Создание товаров',
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
    header: 'Шаг 1. Создание товаров',
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
                    Спарсить текущий каталог (или прайсы) и подготовить товары
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
                    Парсер, который регулярно обновляет цены по расписанию.
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
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '1px solid #91d5ff',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Разовый парсинг — 40 000 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Автоматический сбор данных о товарах
                из ваших текущих источников (сайт, прайс-листы, Excel) с
                последующей подготовкой под формат Aspro: Максимум.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Получите готовый файл с
                товарами (название, описание, цена, характеристики, фото) в
                формате, который сразу импортируется в каталог Aspro. Все товары
                будут структурированы, очищены от дублей и готовы к загрузке.
              </Text>
            </Space>
          </Card>
          <Card
            size="small"
            style={{
              backgroundColor: '#f6ffed',
              border: '1px solid #b7eb8f',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Парсер с актуализацией — 75 000 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Автоматизированный парсер, который не
                только собирает товары один раз, но и регулярно обновляет цены
                по расписанию (например, раз в день или неделю).
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Настроенный скрипт,
                который автоматически обновляет цены и остатки в каталоге Aspro
                по расписанию. Вы получаете актуальные товары без ручного
                вмешательства. Подходит, если прайсы меняются часто и нужно
                поддерживать актуальность в автоматическом режиме.
              </Text>
            </Space>
          </Card>
          <Card
            size="small"
            style={{
              backgroundColor: '#fff7e6',
              border: '1px solid #ffd591',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Генерация через ИИ — 100 000 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Генерация описаний товаров и
                недостающих позиций с помощью искусственного интеллекта по
                заданным шаблонам и стилю. Используется, когда парсинг
                невозможен или даёт слишком «шумный» результат.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Уникальные, читаемые
                описания товаров, сгенерированные под ваш стиль и требования
                SEO. Описания будут структурированы, без воды, с акцентом на
                преимущества и характеристики. Хороший вариант для быстрого
                «добивания» каталога под SEO, когда нужно много контента за
                короткое время.
              </Text>
            </Space>
          </Card>
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
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '1px solid #e6f7ff',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Развёртывание и настройка / подготовка — 48 000 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Установка и базовая настройка Aspro:
                Максимум на вашем хостинге с применением фирменного стиля А‑ТИС
                и подготовкой всех необходимых форм и блоков.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Готовый сайт с вашим
                логотипом, цветами и шрифтами. Удалены все типовые демо-блоки,
                настроены формы заявок, которые отправляют письма на вашу почту.
                Сайт готов к наполнению контентом и товарами.
              </Text>
            </Space>
          </Card>
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
          <Card
            size="small"
            style={{
              backgroundColor: '#f6ffed',
              border: '1px solid #b7eb8f',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                SEO и семантика — 100 000 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Сбор семантического ядра (запросы, по
                которым вас ищут), создание карты соответствия запросов
                страницам сайта и подготовка технического задания на метатеги
                для всех ключевых страниц.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Документ с семантическим
                ядром (500–1000+ запросов), таблица «запрос → страница сайта»,
                готовые title и description для главной, разделов каталога и
                ключевых товаров. Настроены ЧПУ-URL, хлебные крошки,
                sitemap.xml.
              </Text>
            </Space>
          </Card>
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
          <Card
            size="small"
            style={{
              backgroundColor: '#f6ffed',
              border: '1px solid #b7eb8f',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Контент и дизайн — 42 500 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Генерация всех текстов для сайта
                (главная, о компании, описания категорий и товаров) и отрисовка
                ключевых баннеров и изображений в фирменном стиле А‑ТИС.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Все страницы заполнены
                уникальными текстами, оптимизированными под SEO. Главная
                страница и ключевые разделы имеют яркие баннеры с вашей
                айдентикой. Тексты читаемые, без воды, с акцентом на
                преимущества и выгоды для клиента.
              </Text>
            </Space>
          </Card>
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
            На этом шаге товары из шага 1 попадают в боевой каталог.
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
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '1px solid #91d5ff',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Импорт и проверка каталога
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Загрузка всех подготовленных товаров в
                каталог Aspro, проверка корректности отображения категорий,
                работы фильтров, цен и характеристик.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Полностью заполненный
                каталог с товарами, ценами, фото и характеристиками. Все фильтры
                работают корректно, товары правильно распределены по категориям,
                цены отображаются верно.
              </Text>
            </Space>
          </Card>
          <Card
            size="small"
            style={{
              backgroundColor: '#f6ffed',
              border: '1px solid #b7eb8f',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Заказы и заявки
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Настройка интеграции заказов и заявок
                с вашей системой — отправка на почту, в CRM (например,
                Битрикс24, amoCRM) или в 1С для автоматической обработки.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Когда клиент оформляет
                заказ в корзине или оставляет заявку через форму, данные
                автоматически отправляются на указанный вами адрес или в вашу
                CRM/1С. Проведено тестирование нескольких заказов для проверки
                корректности работы.
              </Text>
            </Space>
          </Card>
          <Card
            size="small"
            style={{
              backgroundColor: '#e6f7ff',
              border: '1px solid #91d5ff',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Загрузка данных — 48 000 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Импорт всех подготовленных товаров в
                каталог Aspro, проверка корректности отображения, работы
                фильтров и цен, а также настройка интеграции заказов с вашей
                системой (почта, CRM, 1С).
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Полностью заполненный
                каталог с товарами, ценами, фото и характеристиками. Все фильтры
                работают, корзина функционирует, заказы автоматически уходят на
                вашу почту или в CRM. Проведено тестирование нескольких заказов.
              </Text>
            </Space>
          </Card>
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
          <Card
            size="small"
            style={{
              backgroundColor: '#fff7e6',
              border: '1px solid #ffd591',
              marginTop: 16,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                Тестирование и передача — 24 000 ₽
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Что это:</strong> Финальная проверка всех функций сайта
                (поиск, каталог, корзина, формы), тестирование на разных
                устройствах и браузерах, вычитка текстов и передача проекта
                команде А‑ТИС с обучением.
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                <strong>Как будет выглядеть:</strong> Полностью протестированный
                и готовый к работе сайт. Все функции проверены, ошибки
                исправлены. Команда А‑ТИС получит доступы к админ-панели,
                краткую инструкцию по работе с сайтом и контакты для поддержки.
              </Text>
            </Space>
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'pricing',
    header: 'Оценка стоимости',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card
            style={{
              backgroundColor: '#f6ffed',
              border: '2px solid #52c41a',
              marginBottom: 16,
            }}
          >
            <Space
              direction="vertical"
              size="small"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: '#52c41a',
                  lineHeight: 1.3,
                }}
              >
                302 500 ₽ → 287 500 ₽
              </Text>
              <Text
                type="secondary"
                style={{
                  fontSize: 12,
                  color: '#8c8c8c',
                  marginTop: 4,
                }}
              >
                цена при варианте «Разовый парсинг», скидка 15 000 ₽ при покупке
                шаблона через нас
              </Text>
            </Space>
          </Card>
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
                  <Tag color="blue">Шаг 1</Tag>
                  <Text strong>Создание товаров</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Разовый парсинг — 40 000 ₽',
                      'Парсер с актуализацией — 75 000 ₽',
                      'Генерация через ИИ — 100 000 ₽',
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
                  <Tag color="orange">Шаг 2</Tag>
                  <Text strong>Развёртывание</Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: 600, color: '#fa8c16' }}
                  >
                    48 000 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Разворачиваем Aspro: Максимум, чистим типовой контент и
                    готовим сайт к работе под А‑ТИС.
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
                  <Tag color="green">Шаг 3</Tag>
                  <Text strong>SEO и семантика</Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: 600, color: '#52c41a' }}
                  >
                    100 000 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Готовим семантическое ядро и структуру страниц так, чтобы
                    сайт сразу мог собирать органический трафик.
                  </Text>
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
                  <Tag color="green">Шаг 4</Tag>
                  <Text strong>Контент и дизайн</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Тексты на главную — 4 500 ₽',
                      'Тексты о компании — 4 500 ₽',
                      'Описания товаров — 17 000 ₽',
                      'Баннеры — 9 000 ₽',
                      'Прочие картинки — 7 500 ₽',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '2px 0', borderBottom: 'none' }}
                      >
                        <Text style={{ fontSize: 13 }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: '#52c41a',
                      marginTop: 8,
                    }}
                  >
                    Итого: 42 500 ₽
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={6}>
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
                  <Tag color="blue">Шаг 5</Tag>
                  <Text strong>Загрузка данных</Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: 600, color: '#1890ff' }}
                  >
                    48 000 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Импортируем подготовленный каталог, проверяем корректность
                    категорий, фильтров и цен.
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={6}>
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
                  <Tag color="orange">Шаг 6</Tag>
                  <Text strong>Тестирование</Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: 600, color: '#fa8c16' }}
                  >
                    24 000 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Финальное тестирование сайта и ключевых сценариев перед
                    запуском.
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
    id: 'license',
    header: 'Стоимость шаблона и лицензии',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <TagOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Шаблон Aspro: Максимум и лицензия 1С-Битрикс
          </Title>
          <Paragraph>
            Шаблон Aspro: Максимум и лицензия 1С-Битрикс «Малый бизнес»
            приобретаются отдельно и не входят в стоимость разработки. Важно: с
            Нового Года стоимость обоих компонентов увеличится.{' '}
            <Link
              href="https://aspro.ru/marketplace/solutions/aspro.max/"
              target="_blank"
            >
              Подробнее о шаблоне на сайте Aspro
            </Link>{' '}
            <Link
              href="https://www.1c-bitrix.ru/products/cms/editions/smallbusiness.php"
              target="_blank"
            >
              Подробнее о лицензии на сайте 1С-Битрикс
            </Link>
            .
          </Paragraph>
          <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
            Шаблон Aspro: Максимум
          </Title>
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
                  <Tag color="blue">Текущая стоимость</Tag>
                  <Text strong style={{ fontSize: 18 }}>
                    До 31 декабря 2025
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: '#1890ff',
                      marginTop: 8,
                    }}
                  >
                    112 425 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    <Link
                      href="https://aspro.ru/marketplace/solutions/aspro.max/"
                      target="_blank"
                    >
                      Актуальная цена на сайте Aspro
                    </Link>
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#fff7e6',
                  border: '2px solid #fa8c16',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">
                    <WarningOutlined style={{ marginRight: 4 }} />С 1 января
                    2026
                  </Tag>
                  <Text strong style={{ fontSize: 18 }}>
                    Повышение цены
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: '#fa8c16',
                      marginTop: 8,
                    }}
                  >
                    149 900 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Рекомендуем приобрести шаблон до конца года
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
          <Title level={5} style={{ marginTop: 16, marginBottom: 8 }}>
            Лицензия 1С-Битрикс «Малый бизнес»
          </Title>
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
                  <Tag color="blue">Текущая стоимость</Tag>
                  <Text strong style={{ fontSize: 18 }}>
                    До 31 декабря 2025
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: '#1890ff',
                      marginTop: 8,
                    }}
                  >
                    32 720 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    <Link
                      href="https://www.1c-bitrix.ru/products/cms/editions/smallbusiness.php"
                      target="_blank"
                    >
                      Актуальная цена на сайте 1С-Битрикс
                    </Link>
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                size="small"
                style={{
                  height: '100%',
                  backgroundColor: '#fff7e6',
                  border: '2px solid #fa8c16',
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange">
                    <WarningOutlined style={{ marginRight: 4 }} />С 1 января
                    2026
                  </Tag>
                  <Text strong style={{ fontSize: 18 }}>
                    Повышение цены
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: '#fa8c16',
                      marginTop: 8,
                    }}
                  >
                    40 900 ₽
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Рекомендуем приобрести лицензию до конца года
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
          <Card
            size="small"
            style={{
              backgroundColor: '#f6ffed',
              border: '1px solid #b7eb8f',
              marginTop: 8,
            }}
          >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text strong style={{ fontSize: 15 }}>
                При покупке шаблона и лицензии через нас
              </Text>
              <Text type="secondary" style={{ fontSize: 13 }}>
                Мы можем помочь с приобретением шаблона Aspro: Максимум и
                лицензии 1С-Битрикс «Малый бизнес». При покупке через нас вы
                получаете скидку 15 000 ₽ на общую стоимость проекта.
              </Text>
            </Space>
          </Card>
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
