import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import {
  GlobalOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  ShopOutlined,
  BuildOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  PlusCircleOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { hanskonnerRebornCreatedAt } from './hanskonner-reborn.meta';
import hanskonnerLogo from '../slides/hanskonner-logo.png';
import bannerAfter from './images/banner_after.png';
import bannerBefore from './images/banner_before.png';
import aboutAfter from './images/about_after.png';
import aboutBefore from './images/about_before.png';
import hitsAfter from './images/hits_after.png';
import hitsBefore from './images/hits_before.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for HansKonner reborn website presentation
 * Презентация об улучшенной версии сайта Hanskonner с каталогом
 */
export const hanskonnerRebornSlides: SlideData[] = [
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
          size="large"
          style={{ textAlign: 'center', maxWidth: '900px' }}
        >
          <img
            src={hanskonnerLogo}
            alt="HansKonner"
            style={{
              maxWidth: '500px',
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <Title level={2} style={{ marginTop: 'var(--app-spacing-lg)' }}>
            Улучшенная версия сайта с каталогом
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginBottom: 0,
              color: '#595959',
            }}
          >
            Современный дизайн и функциональность для Вашего бизнеса
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
          {formatDateForSlide(hanskonnerRebornCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'current-site-analysis',
    header: 'Анализ текущего сайта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Текущий сайт: hanskonner.ru
          </Title>
          <Link
            href="https://hanskonner.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '16px' }}
          >
            https://hanskonner.ru/
          </Link>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Основные проблемы текущего сайта
          </Title>
          <List
            size="default"
            dataSource={[
              'Устаревший дизайн, не соответствующий современным стандартам',
              'Отсутствие полноценного каталога товаров',
              'Слабая навигация и поиск по товарам',
              'Неудобная структура для B2B клиентов',
              'Отсутствие фильтров и сортировки товаров',
              'Неоптимизированная мобильная версия',
              'Отсутствие личных кабинетов для дилеров',
              'Нет интеграции с системами учёта',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <WarningOutlined
                  style={{ color: '#ff4d4f', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Paragraph
            style={{ marginBottom: 0, fontSize: 'var(--app-font-size-md)' }}
          >
            <Text strong>
              Текущий сайт не позволяет эффективно работать с каталогом товаров
              и обслуживать B2B клиентов на современном уровне.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'new-site-showcase',
    header: 'Улучшенная версия сайта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Новый сайт: hanskonner-reborn.vercel.app
          </Title>
          <Link
            href="https://hanskonner-reborn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '16px' }}
          >
            https://hanskonner-reborn.vercel.app/
          </Link>
          <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
            <Text type="secondary">
              На этом этапе мы сосредоточились на обновлении визуальной части
              сайта. Функциональные улучшения (поиск, фильтры, личные кабинеты и
              т.п.) планируются отдельным следующим этапом.
            </Text>
          </Paragraph>
        </Card>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Что мы улучшили
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#ffffff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ShopOutlined style={{ marginRight: 8 }} />
                    Обновлённый визуальный вид каталога
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Единый визуальный стиль для всех товарных карточек',
                      'Более аккуратная сетка и читаемое представление ассортимента',
                      'Акценты на бренде и ключевых характеристиках инструмента',
                      'Макет, который можно дальше наращивать функционалом',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <CheckCircleOutlined
                          style={{ color: '#52c41a', marginRight: 8 }}
                        />
                        <Text>{item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#ffffff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ThunderboltOutlined style={{ marginRight: 8 }} />
                    Современный интерфейс с прицелом на развитие
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Современный чистый дизайн без визуального шума',
                      'Удобное восприятие информации на разных устройствах',
                      'Структура блоков, подготовленная под будущие фильтры и поиск',
                      'Дизайн, который можно расширять личными кабинетами и онлайн-заказами',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <CheckCircleOutlined
                          style={{ color: '#52c41a', marginRight: 8 }}
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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EyeOutlined style={{ marginRight: 8 }} />
            Ключевые особенности
          </Title>
          <List
            size="default"
            dataSource={[
              'Современная визуальная подача существующего каталога',
              'Единый, профессиональный внешний вид сайта в стиле Hanskonner',
              'Оптимизация визуала под различные устройства',
              'Более удобное визуальное восприятие ассортимента',
              'Готовый визуальный фундамент для добавления поиска, фильтров и личных кабинетов',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 12, fontSize: 16 }}
                />
                <Text style={{ fontSize: 'var(--app-font-size-md)' }}>
                  {item}
                </Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'banner-before-after',
    header: 'Первый экран: до / после',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <Card
              bordered
              style={{
                backgroundColor: '#fff1f0',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong>Текущий вариант (до)</Text>
                <img
                  src={bannerBefore}
                  alt="Текущий вариант экрана Hanskonner"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                />
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              bordered
              style={{
                backgroundColor: '#f6ffed',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong>Новый вариант (после)</Text>
                <img
                  src={bannerAfter}
                  alt="Новый вариант экрана Hanskonner"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  }}
                />
              </Space>
            </Card>
          </Col>
        </Row>
        <Paragraph
          style={{ marginTop: 8, fontSize: 'var(--app-font-size-sm)' }}
        >
          <Text type="secondary">
            Слева — новый визуальный макет первого экрана, справа — текущий
            вариант с сайта hanskonner.ru. Мы показываем, как может выглядеть
            обновлённый визуал при сохранении того же функционала.
          </Text>
        </Paragraph>
      </Space>
    ),
  },
  {
    id: 'about-before-after',
    header: 'Экран «О компании»: до / после',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <Card
              bordered
              style={{
                backgroundColor: '#fff1f0',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong>Текущий вариант (до)</Text>
                <img
                  src={aboutBefore}
                  alt="Текущий вариант экрана «О компании» Hanskonner"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                />
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              bordered
              style={{
                backgroundColor: '#f6ffed',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong>Новый вариант (после)</Text>
                <img
                  src={aboutAfter}
                  alt="Новый вариант экрана «О компании» Hanskonner"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  }}
                />
              </Space>
            </Card>
          </Col>
        </Row>
        <Paragraph
          style={{ marginTop: 8, fontSize: 'var(--app-font-size-sm)' }}
        >
          <Text type="secondary">
            Слева — новый визуальный макет экрана «О компании», справа — текущий
            вариант с сайта hanskonner.ru. Мы показываем, как может выглядеть
            обновлённый раздел при сохранении того же функционала.
          </Text>
        </Paragraph>
      </Space>
    ),
  },
  {
    id: 'hits-before-after',
    header: 'Блок с хитами: до / после',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <Card
              bordered
              style={{
                backgroundColor: '#fff1f0',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong>Текущий вариант (до)</Text>
                <img
                  src={hitsBefore}
                  alt="Текущий вариант блока с хитами Hanskonner"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                />
              </Space>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              bordered
              style={{
                backgroundColor: '#f6ffed',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong>Новый вариант (после)</Text>
                <img
                  src={hitsAfter}
                  alt="Новый вариант блока с хитами Hanskonner"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  }}
                />
              </Space>
            </Card>
          </Col>
        </Row>
        <Paragraph
          style={{ marginTop: 8, fontSize: 'var(--app-font-size-sm)' }}
        >
          <Text type="secondary">
            Слева — новый визуальный макет блока с хитами, справа — текущий
            вариант с сайта hanskonner.ru. Показываем, как может выглядеть
            обновлённый раздел при сохранении того же функционала.
          </Text>
        </Paragraph>
      </Space>
    ),
  },
  {
    id: 'prototype-note',
    header: 'Это только начало',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#e6f7ff' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Текущая версия — это макет
          </Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Мы создали улучшенную версию сайта, чтобы показать возможности и
            направление развития. Это основа, которую можно развивать дальше.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <PlusCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            Что можно добавить и улучшить
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>Расширение функционала:</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Дополнительные блоки на главной странице',
                      'Отдельные страницы товаров (PDP)',
                      'Страница контактов с картой',
                      'Формы обратной связи',
                      'Блог и новости',
                      'Мультиязычность',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}></Col>
          </Row>
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Paragraph
            style={{ marginBottom: 0, fontSize: 'var(--app-font-size-md)' }}
          >
            <Text strong>
              При желании можно сделать ещё лучше: добавить любые функции,
              которые нужны Вашему бизнесу, и довести сайт до идеального
              состояния.
            </Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'pricing',
    header: 'Стоимость',
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          minHeight: '400px',
        }}
      >
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%' }}
          >
            <div
              style={{
                width: '100%',
                padding: '24px 32px',
                backgroundColor: '#ffffff',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title
                  level={3}
                  style={{ marginTop: 0, marginBottom: 4, color: '#595959' }}
                >
                  Базовый вариант — 75&nbsp;000&nbsp;₽
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-md)' }}
                >
                  Оставляем визуально главную страницу как в текущем макете и
                  доводим до production-состояния.
                </Text>
                <List
                  size="small"
                  style={{
                    textAlign: 'left',
                    margin: '12px auto 0',
                    maxWidth: 800,
                  }}
                  dataSource={[
                    'Главная страница в текущем визуальном стиле (как на макете)',
                    'Адаптивная вёрстка под различные экраны',
                    'Оптимизация кода и структуры под SEO',
                    'Доработка и завершение работ по Backend',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </div>

            <div
              style={{
                width: '100%',
                padding: '24px 32px',
                backgroundColor: '#e6f7ff',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Text strong type="secondary" style={{ fontSize: 12 }}>
                  ПРИОРИТЕТНЫЙ ВАРИАНТ
                </Text>
                <Title
                  level={3}
                  style={{ marginTop: 0, marginBottom: 4, color: '#1890ff' }}
                >
                  Расширенный вариант — 100&nbsp;000&nbsp;₽
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-md)' }}
                >
                  По вашему желанию частично обновляем дизайн и добавляем
                  необходимые страницы и формы.
                </Text>
                <List
                  size="small"
                  style={{
                    textAlign: 'left',
                    margin: '12px auto 0',
                    maxWidth: 800,
                  }}
                  dataSource={[
                    'Всё из базового варианта',
                    'Частичное обновление дизайна по вашим пожеланиям',
                    'Детальные страницы товаров',
                    'Страница контактов с дополнительной информацией',
                    'Новые и дополнительные формы обратной связи',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#1890ff', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </div>

            <div
              style={{
                width: '100%',
                padding: '24px 32px',
                backgroundColor: '#ffffff',
              }}
            >
              <Space
                direction="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Title
                  level={3}
                  style={{ marginTop: 0, marginBottom: 4, color: '#595959' }}
                >
                  Вариант с CMS Strapi — 125&nbsp;000&nbsp;₽
                </Title>
                <Text
                  type="secondary"
                  style={{ fontSize: 'var(--app-font-size-md)' }}
                >
                  Всё как во втором варианте, но с интеграцией с CMS Strapi,
                  чтобы вы могли сами управлять контентом через админку.
                </Text>
                <List
                  size="small"
                  style={{
                    textAlign: 'left',
                    margin: '12px auto 0',
                    maxWidth: 800,
                  }}
                  dataSource={[
                    'Всё из расширенного варианта',
                    'Интеграция сайта с CMS Strapi',
                    'Возможность править тексты, изображения и товары через админку',
                    'Независимость от разработчиков для повседневных правок контента',
                    'Готовность к дальнейшему масштабированию и развитию проекта',
                  ]}
                  renderItem={item => (
                    <List.Item
                      style={{
                        padding: '4px 0',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', marginRight: 8 }}
                      />
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Space>
            </div>
          </Space>

          <Divider />
          <Paragraph
            style={{
              marginBottom: 0,
              fontSize: 'var(--app-font-size-md)',
              color: '#595959',
            }}
          >
            <Text>
              Готовы обсудить детали и ответить на все вопросы. Свяжитесь с нами
              для уточнения сроков и условий работы.
            </Text>
          </Paragraph>
        </Space>
      </Space>
    ),
  },
];
