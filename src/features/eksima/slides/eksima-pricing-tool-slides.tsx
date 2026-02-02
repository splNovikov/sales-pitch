import { useState } from 'react';
import {
  Typography,
  List,
  Space,
  Card,
  Tag,
  Alert,
  Row,
  Col,
  Button,
} from 'antd';
import {
  ShopOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  UserOutlined,
  DollarOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ShareAltOutlined,
  SettingOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { AnimatedSteps } from '~shared/ui/animated-steps';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { eksimaPricingToolCreatedAt } from './eksima-pricing-tool.meta';
import { PricingModeToggle } from './pricing-mode-toggle';
import eksimaLogo from './img.png';
import eksimaShowroom from './eksima_showroom.png';
import eksimaPersonal from './eksima-personal.png';
import eksimaExample from './eksima_example.png';
import { ImageWithLoader } from '~shared/ui/image-with-loader';

const { Title, Paragraph, Text } = Typography;

/**
 * Wrapper component for PricingModeToggle with image display
 * Shows different image based on toggle state:
 * - false (МОИ ЦЕНЫ) -> eksimaPersonal (личный кабинет партнёра)
 * - true (ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ) -> eksimaShowroom (режим для покупателя)
 */
function PricingModeToggleWithImage() {
  const [isCustomerMode, setIsCustomerMode] = useState(false);

  return (
    <Space
      orientation="vertical"
      size="large"
      align="center"
      style={{ width: '100%' }}
    >
      <PricingModeToggle value={isCustomerMode} onChange={setIsCustomerMode} />
      <Card>
        <div
          style={{ display: 'flex', justifyContent: 'center', maxWidth: 700 }}
        >
          <ImageWithLoader
            src={isCustomerMode ? eksimaShowroom : eksimaPersonal}
            alt={
              isCustomerMode
                ? 'Демонстрация покупателю'
                : 'Мои цены (личный кабинет)'
            }
            style={{
              margin: '0 auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </Card>
    </Space>
  );
}

const loginRoadmapItems: RoadmapItem[] = [
  {
    title: 'EKSIMA формирует персональные цены',
    description:
      'Каждому партнёру установлена собственная оптовая цена (может отличаться от других). Настройка оптовых цен для конкретного юр. лица с учётом условий партнёрства. Партнёр платит EKSIMA по установленной цене, продаёт покупателю по своей цене. Наценка и условия могут быть автоматизированы в зависимости от объёма заказов',
    duration: 'Шаг 1',
  },
  {
    title: 'Юр. лицо авторизуется в системе',
    description:
      'Партнёр видит эту цену только в режиме работы ("МОИ ЦЕНЫ"). Вход в личный кабинет по логину и паролю, проверка прав доступа',
    duration: 'Шаг 2',
  },
  {
    title: 'Доступ к каталогу с идентикой партнёра',
    description:
      'Партнёр видит свой бренд, свои оптовые цены и может управлять наценками',
    duration: 'Шаг 3',
  },
];

/**
 * Slides data for EKSIMA Pricing Tool presentation
 * Based on EKSIMA-pricing-tool.md documentation
 */
export const eksimaPricingToolSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Инструмент предоставления цен"
        description="Персональная система ценообразования для розничных партнеров с возможностью управления наценками и прямого шаринга каталогов с покупателями."
        logo={eksimaLogo}
        logoAlt="EKSIMA"
        logoMaxWidth={300}
        createdAt={eksimaPricingToolCreatedAt}
        location="Санкт-Петербург"
      />
    ),
  },
  {
    id: 'problem-solution-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Проблема и решение"
        subtitle="Как дать розничным партнёрам инструмент для управления ценами"
        imageIndex={0}
        imageAlt="Проблема и решение"
      />
    ),
  },
  {
    id: 'problem-solution',
    header: 'Проблема и решение',
    content: (
      <FeaturesSlide
        animated
        cards={[
          {
            title: 'Задача',
            subtitle:
              'Как дать розничным партнёрам (юр. лицам) инструмент для:',
            icon: <RocketOutlined />,
            iconColor: 'orange',
            items: [
              'Управления собственными наценками',
              'Демонстрации цен конечным покупателям',
              'Быстрого шаринга каталога без лишних усложнений',
            ],
            emoji: 'target',
          },
          {
            title: 'Решение',
            subtitle:
              'Единая система авторизации с двухуровневым ценообразованием:',
            icon: <ThunderboltOutlined />,
            iconColor: 'green',
            items: [
              '1. Вход в систему — Партнёр получает свои персональные цены от EKSIMA',
              '2. Управление наценками — Партнёр регулирует свою маржу',
              '3. Шаринг каталога — Прямая ссылка для покупателей',
            ],
            emoji: 'rocket',
          },
        ]}
        columns={2}
        wrapInCard={false}
      />
    ),
  },
  {
    id: 'login-process-roadmap',
    header: 'Как работает партнёрство и доступ к системе',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Roadmap items={loginRoadmapItems} mode="alternate" />
        </Card>
      </Space>
    ),
  },
  {
    id: 'catalog-after-login',
    header: 'Каталог после входа',
    content: (
      <FeaturesSlide
        cards={[
          {
            title: 'Собственной идентикой',
            subtitle: 'Логотип, цветовая схема',
            icon: <EyeOutlined />,
            iconColor: 'green',
            items: ['Логотип компании партнёра', 'Цветовая схема бренда'],
            emoji: 'palette',
          },
          {
            title: 'Базовыми ценами',
            subtitle: 'Оптовые цены от EKSIMA',
            icon: <DollarOutlined />,
            iconColor: 'blue',
            items: ['Персональные оптовые цены', 'Условия партнёрства'],
            emoji: 'target',
          },
          {
            title: 'Возможностью управления',
            subtitle: 'Наценками на каждый товар',
            icon: <SettingOutlined />,
            iconColor: 'orange',
            items: ['Регулирование маржи', 'Управление наценками'],
            emoji: 'wrench',
          },
        ]}
        columns={3}
        wrapInCard={false}
      />
    ),
  },
  {
    id: 'customer-mode-variants-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Варианты реализации режима «Покупатель»"
        subtitle="Выбор оптимального UX для демонстрации цен"
        imageIndex={2}
        imageAlt="Варианты реализации"
      />
    ),
  },
  {
    id: 'customer-mode-variant-1',
    header: 'Простое переключение',
    content: <PricingModeToggleWithImage />,
  },
  {
    id: 'user-settings-customer-mode',
    header: 'Переключение режима в настройках пользователя',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Настройки авторизованного пользователя
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            В личном кабинете партнёр управляет визуализацией каталога через
            роли и права доступа:
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#fafafa' }}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Text strong style={{ fontSize: '14px' }}>
              Роли и доступ к режимам показа
            </Text>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              Кто может переключать тумблер и кто всегда видит только цены для
              покупателей:
            </Text>
            <Space direction="vertical" size="small" style={{ marginTop: 8 }}>
              <Text>
                • Роль с доступом к исходным (оптовым) ценам — видит тумблер
                «МОИ ЦЕНЫ / ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ» и может переключать режим
              </Text>
              <Text>
                • Роль «сотрудник компании без доступа к исходным ценам» — видит
                то же представление, что и покупатель по ссылке (только
                розничные цены)
              </Text>
              <Text>
                • В шоуруме личный кабинет всегда открыт в режиме «Покупатель» —
                тумблер недоступен, оптовые цены в принципе никогда не
                показываются
              </Text>
            </Space>
          </Space>
        </Card>
        <FeaturesSlide
          cards={[
            {
              title: 'Преимущества',
              icon: <CheckCircleOutlined />,
              iconColor: 'green',
              items: [
                'Гибкая политика показа цен для разных ролей и сценариев',
                'Безопасность — оптовые цены видны только тем, у кого есть права',
                'Единая модель визуализации для кабинета и шаринга по ссылке',
              ],
              emoji: 'star',
            },
            {
              title: 'Ограничения',
              icon: <EyeOutlined />,
              iconColor: 'orange',
              items: [
                'Нужно согласовать сценарии использования с отделом продаж',
              ],
              emoji: 'wrench',
            },
          ]}
          columns={2}
          wrapInCard={false}
        />
      </Space>
    ),
  },
  {
    id: 'eksima-template-demo',
    header: 'Шаблон для EKSIMA',
    content: (
      <Card>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={14}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f5f5f5',
              }}
            >
              <ImageWithLoader
                src={eksimaExample}
                alt="Пример шаблона EKSIMA"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'contain',
                }}
                containerStyle={{
                  width: '100%',
                  padding: '20px',
                }}
              />
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <Space
              direction="vertical"
              size="large"
              style={{ width: '100%', padding: '20px' }}
            >
              <Title level={3} style={{ marginTop: 0 }}>
                Шаблон реализован специально для EKSIMA
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-lg)' }}>
                Современный дизайн, адаптивная верстка и все необходимые функции
                для работы с каталогом товаров
              </Paragraph>
              <Button
                type="primary"
                size="large"
                icon={<GlobalOutlined />}
                href="https://eksima-poc.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                block
                style={{
                  height: 64,
                  fontSize: 20,
                  fontWeight: 700,
                  borderRadius: 12,
                  background:
                    'linear-gradient(135deg, var(--app-color-primary) 0%, var(--app-gradient-end) 100%)',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(24, 144, 255, 0.4)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform =
                    'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 32px rgba(24, 144, 255, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(24, 144, 255, 0.4)';
                }}
              >
                Посмотреть шаблон
                <ArrowRightOutlined style={{ marginLeft: 12 }} />
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'unlimited-retail-points-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Неограниченные розничные точки"
        subtitle="Множество собственных каталогов"
        imageIndex={3}
        imageAlt="Розничные точки"
      />
    ),
  },
  {
    id: 'unlimited-retail-points',
    header: 'Неограниченные розничные точки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Множество собственных каталогов
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Юр. лицо НЕ ограничено количеством создания своих розничных точек с
            собственным ценообразованием:
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#f0f0f0' }}>
          <AnimatedSteps
            items={[
              {
                title: 'EKSIMA (Поставщик)',
                description: 'Формирует оптовые цены для партнёров',
              },
              {
                title: 'Юр. лицо "ООО СТРОЙСНАБ" (Партнёр)',
                description: 'Авторизуется в системе',
              },
              {
                title: 'Розничная точка №1 (Москва)',
                description: 'Наценка на керамогранит: 1.80x',
              },
              {
                title: 'Розничная точка №2 (СПб)',
                description: 'Наценка на керамогранит: 2.00x',
              },
              {
                title: 'Розничная точка №3 (Казань)',
                description: 'Наценка на керамогранит: 1.70x',
              },
            ]}
            stepInterval={2500}
            stopOnLast={true}
          />
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Каждая точка может иметь:
          </Title>
          <List
            dataSource={[
              'Собственную наценку на один и тот же товар',
              'Собственную идентику (логотип, название)',
              'Собственный каталог для шаринга',
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
      </Space>
    ),
  },
  {
    id: 'sharing-process-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Как поделиться с покупателем"
        subtitle="Процесс шаринга ссылки"
        imageIndex={4}
        imageAlt="Шаринг"
      />
    ),
  },
  {
    id: 'sharing-process',
    header: 'Как поделиться с покупателем',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShareAltOutlined style={{ marginRight: 8 }} />
            Процесс шаринга ссылки
          </Title>
          <AnimatedSteps
            items={[
              {
                title: 'Шаг 1: Партнёр в режиме "ДЕМОНСТРАЦИЯ ПОКУПАТЕЛЮ"',
                description:
                  'Партнёр видит товар с розничной ценой и кнопку "ПОДЕЛИТЬСЯ С ПОКУПАТЕЛЕМ"',
              },
              {
                title: 'Шаг 2: Партнёр нажимает кнопку "Поделиться"',
                description:
                  'Система генерирует персональную ссылку с токеном доступа',
              },
              {
                title: 'Шаг 3: Ссылка копируется в буфер обмена',
                description:
                  'Партнёр может отправить её покупателю по WhatsApp, Email, SMS или любому другому каналу',
              },
            ]}
            stepInterval={3000}
            stopOnLast={true}
          />
        </Card>
        <Card style={{ backgroundColor: '#f0f0f0' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Пример персональной ссылки:
          </Title>
          <Card
            size="small"
            style={{
              backgroundColor: '#fff',
              fontFamily: 'monospace',
              marginTop: 8,
            }}
          >
            <Text
              copyable={{
                text: 'https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL',
              }}
            >
              https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL
            </Text>
          </Card>
        </Card>
      </Space>
    ),
  },

  {
    id: 'customer-mode-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Клиентский режим"
        subtitle="Без авторизации для покупателя"
        imageIndex={5}
        imageAlt="Клиентский режим"
      />
    ),
  },
  {
    id: 'customer-mode',
    header: 'Клиентский режим (без авторизации)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Покупатель открывает ссылку
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Покупатель получил ссылку от партнёра и открывает её:
          </Paragraph>
          <Card
            size="small"
            style={{
              backgroundColor: '#f0f0f0',
              fontFamily: 'monospace',
              marginTop: 8,
            }}
          >
            <Text
              copyable={{
                text: 'https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL',
              }}
            >
              https://eksima.ru/catalog?view=customer&partner=partner_123&token=abc7k9F2mL
            </Text>
          </Card>
        </Card>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            Что происходит:
          </Title>
          <List
            dataSource={[
              'Покупатель НЕ авторизуется (не нужен логин/пароль)',
              'Система проверяет токен — валидный ли он?',
              'Если валидный → показывает каталог этого партнёра',
              'Если невалидный (истёк, отозван) → ошибка "доступ недоступен"',
            ]}
            renderItem={(item, index) => (
              <List.Item style={{ padding: '4px 0' }}>
                <Tag color="blue" style={{ marginRight: 8 }}>
                  {index + 1}
                </Tag>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <FeaturesSlide
          cards={[
            {
              title: 'Что видит покупатель',
              icon: <EyeOutlined />,
              iconColor: 'green',
              items: [
                'Логотип компании партнёра',
                'Керамогранит Coliseum Brenta Grey 22,5х90',
                'Цена: 1 044 ₽',
                '[Добавить в корзину]',
                'Далее в каталоге 200+ товаров',
              ],
              emoji: 'star',
            },
            {
              title: 'Что НЕ видит',
              icon: <EyeInvisibleOutlined />,
              iconColor: 'orange',
              items: [
                'Себестоимость (580 ₽)',
                'Коэффициент наценки (1.80x)',
                'Маржу партнёра (464 ₽)',
                'Никаких кнопок управления или админ-панели',
              ],
              emoji: 'wrench',
            },
          ]}
          columns={2}
          wrapInCard={false}
        />
        <Alert
          message="Полностью «чистый» каталог"
          description="Как обычный интернет-магазин — покупатель видит только товары и цены партнёра."
          type="success"
          showIcon
        />
      </Space>
    ),
  },

  {
    id: 'benefits-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Ключевые преимущества"
        subtitle="Для партнёра, EKSIMA и покупателя"
        imageIndex={7}
        imageAlt="Преимущества"
      />
    ),
  },
  {
    id: 'benefits',
    header: 'Ключевые преимущества',
    content: (
      <FeaturesSlide
        cards={[
          {
            title: 'Для партнёра (розничника)',
            icon: <ShopOutlined />,
            iconColor: 'green',
            items: [
              'Полный контроль над ценообразованием — сами решают наценку на каждый товар',
              'Собственная идентика в каталоге — логотип, цвета, название',
              'Неограниченное количество точек — можно создать 10 каталогов с разными ценами',
              'Простой шаринг — одна кнопка → ссылка готова',
              'Live демонстрация — сидят за компом, показываются цены покупателю',
              'Безопасность — покупатель видит ТОЛЬКО розничные цены',
            ],
            emoji: 'star',
          },
          {
            title: 'Для EKSIMA',
            icon: <RocketOutlined />,
            iconColor: 'blue',
            items: [
              'Масштабируемость — один инструмент для 1000+ партнёров',
              'Контроль ценовой политики — видим кто как продаёт',
              'Снижение нагрузки на клиент-сервис — партнёры сами управляют ценами',
              'Данные о партнёрах — видим как популярны разные товары',
            ],
            emoji: 'rocket',
          },
          {
            title: 'Для покупателя',
            icon: <UserOutlined />,
            iconColor: 'orange',
            items: [
              'Простота — открыл ссылку, видит товары и цены',
              'Быстро — не нужно авторизовываться',
              'Удобно — может добавлять в корзину с мобильного',
            ],
            emoji: 'lightbulb',
          },
        ]}
        columns={3}
        animated
        baseAnimationDelay={150}
      />
    ),
  },

  {
    id: 'contacts-title',
    header: undefined,
    content: (
      <SectionTitleSlide title="Контакты" imageIndex={8} imageAlt="Контакты" />
    ),
  },
  {
    id: 'contacts',
    header: 'Контакты Proxima',
    content: <ContactsSlide contacts={['Pasha', 'Artem']} />,
  },
];
