import { Typography, List, Space, Card, Row, Col, Tag } from 'antd';
import {
  ShopOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  FileTextOutlined,
  BarChartOutlined,
  ApiOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { FeaturesSlide } from '~shared/ui/features-slide';
import { ContentWithSectionsSlide } from '~shared/ui/content-with-sections-slide';
import { ImageWithLoader } from '~shared/ui/image-with-loader';
import { rosomahaB2BPortfolioCreatedAt } from './rosomaha-b2b-portfolio.meta';
import rosomahaLogo from './rosomaha-logo.png';
import ruskonProfileExample from './01_profile.png';
import ruskonCatalog from './02_catalog.png';
import ruskonOrderSetup from './03_order_setup.png';
import ruskonOrders from './04_orders.png';
import ruskonHelp from './05_help.png';

const { Title, Text } = Typography;

/**
 * Slides data for ROSOMAKHATUL B2B portfolio presentation
 * Focus on our experience in creating B2B portals
 */
export const rosomahaB2BPortfolioSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        subtitle="B2B портал"
        description="Реализованные решения для оптовых клиентов и дилеров"
        logo={rosomahaLogo}
        logoAlt="РОСОМАХАТУЛ"
        logoMaxWidth={400}
        createdAt={rosomahaB2BPortfolioCreatedAt}
        location="Москва"
      />
    ),
  },
  {
    id: 'our-expertise',
    header: 'Опыт Проксима в разработке B2B порталов',
    content: (
      <ContentWithSectionsSlide>
        <FeaturesSlide
          cards={[
            {
              title: 'Личные кабинеты для оптовиков',
              icon: <ShopOutlined />,
              iconColor: 'blue',
              items: [
                'Профили клиентов с реквизитами',
                'История заказов и платежей',
                'Персональные скидки',
                'Управление контактами',
              ],
              emoji: 'sparkles',
              style: { backgroundColor: '#e6f7ff' },
            },
            {
              title: 'Каталоги и заказы',
              icon: <RocketOutlined />,
              iconColor: 'green',
              items: [
                'Каталог с остатками на складе',
                'Оптовые цены',
                'Корзина и оформление заказов',
                'Отслеживание статусов',
              ],
              emoji: 'rocket',
              style: { backgroundColor: '#f6ffed' },
            },
            {
              title: 'Интеграции',
              icon: <ApiOutlined />,
              iconColor: 'orange',
              items: [
                'Интеграция с 1С: УТ',
                'Синхронизация остатков и цен',
                'Автоматизация заказов',
                'Интеграция с CRM',
              ],
              emoji: 'wrench',
              style: { backgroundColor: '#fff7e6' },
            },
            {
              title: 'Дополнительно',
              icon: <ThunderboltOutlined />,
              iconColor: 'purple',
              items: [
                'Уведомления (Email/SMS)',
                'Печать документов',
                'Аналитика и отчеты',
                'Мобильная версия',
              ],
              emoji: 'star',
              style: { backgroundColor: '#f0f0f0' },
            },
          ]}
          columns={2}
          animated={true}
          baseAnimationDelay={100}
        />
      </ContentWithSectionsSlide>
    ),
  },
  {
    id: 'portfolio-example-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Пример из портфолио"
        subtitle="Реализованный нами B2B портал для оптовых клиентов (кейс Рускон)"
        imageIndex={1}
        imageAlt="B2B портал Рускон"
      />
    ),
  },
  {
    id: 'ruskon-profile-example',
    header: 'Профиль оптового клиента',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
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
              <ImageWithLoader
                src={ruskonProfileExample}
                alt="Пример профиля оптового клиента"
                style={{
                  maxHeight: 'calc(100vh - 300px)',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <UserOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Контактная информация
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Телефон, email, адрес доставки и контактные лица компании
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Реквизиты компании
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  ИНН, КПП, ОГРН, банковские реквизиты для выставления счетов
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShopOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  История заказов
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Полный список заказов с датами, суммами и текущими статусами
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <BarChartOutlined
                    style={{ marginRight: 8, color: '#595959' }}
                  />
                  Статусы платежей
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отслеживание оплаченных и неоплаченных счетов, история
                  платежей
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <RocketOutlined
                    style={{ marginRight: 8, color: '#ff4d4f' }}
                  />
                  Персональные настройки
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Скидки, брейки цен, лимиты кредита и другие индивидуальные
                  условия
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'ruskon-catalog',
    header: 'Каталог товаров',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
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
              <ImageWithLoader
                src={ruskonCatalog}
                alt="Каталог товаров"
                style={{
                  maxHeight: 'calc(100vh - 300px)',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShopOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Актуальные остатки
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отображение реального количества товара на складе в режиме
                  реального времени
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <BarChartOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Персональные цены
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Для авторизованных оптовиков отображаются индивидуальные цены,
                  настроенные в административной панели
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ThunderboltOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Поиск и фильтрация
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Быстрый поиск по артикулу, названию и фильтрация по
                  категориям, производителям и характеристикам
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#595959' }}
                  />
                  Фото и документация
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Фотографии продукции, сертификаты качества и техническая
                  документация для каждого товара
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CheckCircleOutlined
                    style={{ marginRight: 8, color: '#ff4d4f' }}
                  />
                  Примечание
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  На скриншоте показан вид каталога для неавторизованного
                  пользователя. После входа оптовик видит свои персональные
                  цены, которые настраиваются администратором в панели
                  управления
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'ruskon-order-setup',
    header: 'Оформление заказа',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '100%',
                height: '100%',
                minHeight: '400px',
                overflow: 'auto',
              }}
            >
              <ImageWithLoader
                src={ruskonOrderSetup}
                alt="Оформление заказа"
                style={{
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShopOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Корзина товаров
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Добавление товаров в корзину с указанием количества и
                  автоматическим расчетом стоимости
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <BarChartOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Расчет стоимости
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Автоматический расчет итоговой суммы с учетом персональных
                  скидок, брейков цен и количества товара
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <RocketOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  Способ доставки
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Выбор способа доставки: самовывоз, доставка транспортом
                  компании или сторонней службой доставки
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#595959' }}
                  />
                  Сохранение черновиков
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Возможность сохранить заказ как черновик для последующего
                  редактирования и оформления
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CheckCircleOutlined
                    style={{ marginRight: 8, color: '#ff4d4f' }}
                  />
                  Подтверждение заказа
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Отправка заказа на обработку с автоматическим уведомлением
                  менеджера и формированием документов
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'ruskon-orders',
    header: 'Управление заказами',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '100%',
                height: '100%',
                minHeight: '400px',
                overflow: 'auto',
              }}
            >
              <ImageWithLoader
                src={ruskonOrders}
                alt="Список заказов"
                style={{
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  История заказов
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Полный список всех заказов с датами, номерами, суммами и
                  детальной информацией по каждому заказу
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CheckCircleOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Отслеживание статусов
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Реальное время отслеживания статуса заказа: новый, в
                  обработке, собран, в доставке, выполнен
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <BarChartOutlined
                    style={{ marginRight: 8, color: '#faad14' }}
                  />
                  История платежей
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Просмотр всех платежей по заказам, статусов оплаты счетов и
                  остатков задолженности
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ShopOutlined style={{ marginRight: 8, color: '#595959' }} />
                  Повторный заказ
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Возможность быстро повторить предыдущий заказ одним кликом,
                  скопировав состав и количество товаров
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <RocketOutlined
                    style={{ marginRight: 8, color: '#ff4d4f' }}
                  />
                  Печать документов
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Скачивание и печать счетов, накладных, актов и других
                  документов по заказам в различных форматах
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'ruskon-help',
    header: 'Справочная информация',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
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
              <ImageWithLoader
                src={ruskonHelp}
                alt="Раздел помощи"
                style={{
                  maxHeight: 'calc(100vh - 300px)',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%', height: '100%' }}
            >
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined
                    style={{ marginRight: 8, color: '#1890ff' }}
                  />
                  Инструкции по работе
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Пошаговые инструкции по использованию портала: как оформить
                  заказ, проверить статус, скачать документы
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CheckCircleOutlined
                    style={{ marginRight: 8, color: '#52c41a' }}
                  />
                  Часто задаваемые вопросы
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  База знаний с ответами на популярные вопросы клиентов о работе
                  портала, оплате и доставке
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <UserOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  Контакты поддержки
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Прямые контакты менеджеров, службы поддержки и технической
                  помощи для решения вопросов
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <ThunderboltOutlined
                    style={{ marginRight: 8, color: '#595959' }}
                  />
                  Полезные материалы
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Документация, каталоги, прайс-листы, сертификаты и другие
                  полезные материалы для клиентов
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <RocketOutlined
                    style={{ marginRight: 8, color: '#ff4d4f' }}
                  />
                  Видео-руководства
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Обучающие видео по работе с порталом для быстрого освоения
                  всех функций системы
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },

  {
    id: 'next-steps-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Следующие шаги"
        subtitle="Как начать работу над B2B порталом"
        imageIndex={4}
        imageAlt="Следующие шаги"
      />
    ),
  },
  {
    id: 'next-steps',
    header: 'Что дальше?',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            План действий
          </Title>
          <List
            dataSource={[
              'Встреча для обсуждения требований и целей',
              'Подготовка технического задания',
              'Предложение с детальным планом и сроками',
              'Согласование бюджета и начало работы',
            ]}
            renderItem={(item, index) => (
              <List.Item style={{ padding: '8px 0' }}>
                <Space>
                  <Tag
                    color="blue"
                    style={{ minWidth: '30px', textAlign: 'center' }}
                  >
                    {index + 1}
                  </Tag>
                  <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                    {item}
                  </Text>
                </Space>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
];
