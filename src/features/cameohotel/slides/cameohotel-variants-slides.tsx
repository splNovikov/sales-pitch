import { Typography, Card, Space, List, Row, Col, Tag, Divider } from 'antd';
import {
  CheckCircleOutlined,
  RocketOutlined,
  GlobalOutlined,
  StarOutlined,
  ApiOutlined,
  MobileOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import cameoLogo from '~features/cameohotel/slides/cameo-logo.png';
import { cameohotelVariantsCreatedAt } from '~features/cameohotel/slides/cameohotel-variants.meta.ts';

const { Title, Paragraph, Text, Link } = Typography;

export const cameohotelVariantsSlides: SlideData[] = [
  // Главный слайд
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title=""
        subtitle="Варианты реализации осовременивания сайта"
        description="Разбор возможных подходов к осовремениванию сайта Cameo Hotel: от Bitrix до Next.js с профессиональным дизайном"
        logo={cameoLogo}
        logoAlt="Cameo Hotel"
        logoMaxWidth={320}
        createdAt={cameohotelVariantsCreatedAt}
        location="cameohotel.ru"
      />
    ),
  },

  // Цели проекта
  {
    id: 'project-goals-title',
    header: undefined,
    content: (
      <SectionTitleSlide title="Цели проекта" subtitle="" imageIndex={1} />
    ),
  },
  {
    id: 'project-goals-detailed',
    header: 'Основные цели редизайна',
    content: (
      <Card>
        <List
          size="large"
          dataSource={[
            'Осовременить сайт, сохранив узнаваемость бренда (цвета, логотип, шрифты)',
            'Сделать удобную мобильную версию (адаптивный дизайн, mobile-first)',
            'Усилить конверсию в бронирование через главную страницу и удобную структуру',
            'Интегрировать отзывы (в том числе из Яндекса) в общем стиле сайта',
            'Сохранить и развить связку с Travelline, не создавая свою CRM/систему бронирования',
            'Повысить привлекательность сайта визуально (галереи, возможно видео, современный UI)',
          ]}
          renderItem={(item, index) => (
            <List.Item>
              <Space>
                <Tag color="blue">{index + 1}</Tag>
                <CheckCircleOutlined
                  style={{ color: 'var(--app-color-primary)' }}
                />
                <Text>{item}</Text>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    ),
  },

  // Выявленные требования
  {
    id: 'requirements',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Выявленные требования"
        subtitle=""
        imageIndex={2}
      />
    ),
  },
  {
    id: 'requirements-design',
    header: 'Дизайн и брендирование',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <CheckCircleOutlined style={{ color: 'green', marginRight: 8 }} />
              Оставить:
            </Title>
            <List
              size="small"
              dataSource={[
                'Базовую цветовую палитру',
                'Логотип',
                'Шрифты (или их аккуратные аналоги для web)',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <RocketOutlined style={{ color: 'blue', marginRight: 8 }} />
              При этом:
            </Title>
            <List
              size="small"
              dataSource={[
                'Полностью осовременить визуал',
                'Перерисовать всё в рамках нового дизайн-макета',
                'Сделать сайт визуально ближе к современным отельным сайтам-конкурентам',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Space>
      </Card>
    ),
  },
  {
    id: 'requirements-mobile-structure',
    header: 'Мобильная версия и структура',
    content: (
      <Card>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Title level={4}>
                <MobileOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Мобильная версия
              </Title>
              <List
                size="small"
                dataSource={[
                  'Полноценная адаптивность для смартфонов и планшетов',
                  'Удобное бронирование и навигация с телефона',
                  'Основной канал у туристов — мобильные устройства',
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
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card size="small" type="inner">
              <Title level={4}>
                <GlobalOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                Структура сайта
              </Title>
              <Paragraph>
                Сейчас лендос играет роль разводящей страницы (отель /
                апартаменты)
              </Paragraph>
              <Paragraph>
                <Text strong>Позиция клиента:</Text> не настаивает на жёстком
                разделении отеля и апартов, готова к оптимизации структуры, если
                так станет удобнее пользователю.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'requirements-integrations',
    header: 'Интеграции и системы',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <ApiOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Интеграция с отзывами
            </Title>
            <List
              size="small"
              dataSource={[
                'Интеграция с Яндекс Отзывами',
                'Вывод отзывов в стиле сайта (не стандартный виджет)',
                'Блоки отзывов на ключевых страницах',
                'Визуально аккуратная интеграция (карточки, слайдер, рейтинг)',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <StarOutlined style={{ color: 'gold', marginRight: 8 }} />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <DatabaseOutlined
                style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
              />
              Travelline
            </Title>
            <Paragraph>
              Собственной CRM нет, всё обработка идет через{' '}
              <Text strong>Travelline</Text>
            </Paragraph>
            <List
              size="small"
              dataSource={[
                'Бронирование',
                'Управление номерами и ценами',
                'Администрирование загрузки',
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
            <Paragraph style={{ marginTop: 'var(--app-spacing-md)' }}>
              <Text strong>Важно:</Text> Сайт должен поддерживать и усиливать
              связку с Travelline, а не заменять её.
            </Paragraph>
          </Card>
        </Space>
      </Card>
    ),
  },

  // Примеры сайтов
  {
    id: 'references',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Примеры сайтов"
        subtitle="Референсы, которые нравятся Татьяне"
        imageIndex={4}
      />
    ),
  },
  {
    id: 'references-list',
    header: 'Референсы для вдохновения',
    content: (
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card size="small" type="inner">
            <Title level={4}>
              <Link href="https://kristoff.ru/" target="_blank">
                Kristoff — kristoff.ru
              </Link>
            </Title>
            <Text type="secondary">
              «вот по-моему неплохой сайт, у них тоже отель и апарты»
            </Text>
            <List
              size="small"
              dataSource={[
                'Общий бренд + несколько объектов (отель / апарты) под одним именем',
                'На главной — понятная структура, сразу виден формат размещения',
                'Есть акцент на контакты, адреса и бронирование',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <Link href="https://sonata-spb.com/ru-ru/" target="_blank">
                Sonata — sonata-spb.com
              </Link>
            </Title>
            <Text type="secondary">«визуально приятный сайт»</Text>
            <List
              size="small"
              dataSource={[
                'Чистый, аккуратный визуал',
                'Понятное описание отеля, блоки с номерами',
                'Спецпредложения/тарифы оформлены как отдельные информационные блоки',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Card size="small" type="inner">
            <Title level={4}>
              <Link href="https://statskijsovetnik.ru/" target="_blank">
                Статский Советник — statskijsovetnik.ru
              </Link>
            </Title>
            <Text type="secondary">
              «конкурент близкий наш, тоже с разными адресами»
            </Text>
            <List
              size="small"
              dataSource={[
                'Несколько отелей/апартаментов под единым брендом',
                'Удобный выбор локации/объекта',
                'Структура подходит под модель «несколько адресов внутри одной сети»',
              ]}
              renderItem={item => (
                <List.Item style={{ padding: '4px 0' }}>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Divider />
          <Paragraph>
            <Text strong>Дополнительные референсы:</Text> apartpage.ru,{' '}
            arbat-house.com, gornyi-dom.ru, unoapart.ru
          </Paragraph>
          <Paragraph>
            <Text strong>Общие черты:</Text> современный, чистый дизайн; много
            визуала (фото, иногда видео); акцент на бронирование и удобство
            пользователя
          </Paragraph>
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
