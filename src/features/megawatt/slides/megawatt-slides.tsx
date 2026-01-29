import {
  Typography,
  List,
  Space,
  Card,
  Row,
  Col,
} from 'antd';
import {
  CheckCircleOutlined,
  DollarOutlined,
  FileTextOutlined,
  GlobalOutlined,
  PictureOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { megawattCreatedAt } from './megawatt.meta';
import logoMegawatt from './logo-mega-watt.png';

const { Title, Paragraph, Text } = Typography;

/** Placeholder area for template screenshot (no image yet) */
function TemplatePlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 360,
        border: '2px dashed #d9d9d9',
        borderRadius: 8,
        backgroundColor: '#fafafa',
      }}
    >
      <Space direction="vertical" align="center" size="small">
        <PictureOutlined style={{ fontSize: 48, color: '#bfbfbf' }} />
        <Text type="secondary">{label}</Text>
      </Space>
    </div>
  );
}

export const megawattSlides: SlideData[] = [
  // Титульный слайд
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        subtitle="Производитель блочно-модульных котельных и теплоэнергетического оборудования"
        logo={logoMegawatt}
        logoAlt="Мегаватт"
        createdAt={megawattCreatedAt}
      />
    ),
  },

  // Блок: презентация шаблона
  {
    id: 'template-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Презентация шаблона"
        subtitle="Ключевые экраны сверстанного шаблона сайта"
        imageIndex={0}
        imageAlt="Презентация шаблона"
      />
    ),
  },
  {
    id: 'template-main',
    header: 'Главная страница',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <TemplatePlaceholder label="Скриншот главной страницы" />
          </Col>
          <Col xs={24} md={10}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <GlobalOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Главный экран
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Первое впечатление о компании, ключевые услуги и преимущества
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <RocketOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                  Призыв к действию
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Контакты, форма заявки или переход в каталог оборудования
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },
  {
    id: 'template-inner',
    header: 'Внутренние страницы',
    content: (
      <Card>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={14}>
            <TemplatePlaceholder label="Скриншоты внутренних страниц" />
          </Col>
          <Col xs={24} md={10}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <FileTextOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                  Каталог / Услуги
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Описание продукции, блочно-модульных котельных и решений
                </Text>
              </Card>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Title level={5} style={{ marginTop: 0, marginBottom: 8 }}>
                  <CheckCircleOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  Контакты
                </Title>
                <Text style={{ fontSize: 'var(--app-font-size-sm)' }}>
                  Раздел с контактами, картой и формой обратной связи
                </Text>
              </Card>
            </Space>
          </Col>
        </Row>
      </Card>
    ),
  },

  // Блок: варианты стоимости
  {
    id: 'pricing-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Варианты стоимости"
        subtitle="Три пакета на выбор — под ключ"
        imageIndex={2}
        imageAlt="Варианты стоимости"
      />
    ),
  },
  {
    id: 'pricing-tiers',
    header: 'Тарифы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card style={{ height: '100%', backgroundColor: '#e6f7ff' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <DollarOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                Пакет 1
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-xl)', marginBottom: 16 }}>
                <Text strong>100 000 ₽</Text>
              </Paragraph>
              <List
                size="small"
                dataSource={['Базовый набор опций', 'Сайт под ключ']}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card style={{ height: '100%', backgroundColor: '#f6ffed' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <RocketOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                Пакет 2
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-xl)', marginBottom: 16 }}>
                <Text strong>120 000 ₽</Text>
              </Paragraph>
              <List
                size="small"
                dataSource={['Расширенный функционал', 'Сайт под ключ']}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card style={{ height: '100%', backgroundColor: '#fff7e6' }}>
              <Title level={4} style={{ marginTop: 0 }}>
                <DollarOutlined style={{ color: '#faad14', marginRight: 8 }} />
                Пакет 3
              </Title>
              <Paragraph style={{ fontSize: 'var(--app-font-size-xl)', marginBottom: 16 }}>
                <Text strong>150 000 ₽</Text>
              </Paragraph>
              <List
                size="small"
                dataSource={['Максимальный набор', 'Сайт под ключ']}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Card style={{ backgroundColor: '#f6ffed' }}>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>Все пакеты включают:</Text> вёрстку по макету, наполнение
            контентом, базовую настройку и сдачу проекта под ключ. Детали
            уточняются индивидуально.
          </Paragraph>
        </Card>
      </Space>
    ),
  },

  // Блок: контакты
  {
    id: 'contacts-section-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Контакты"
        subtitle="Свяжитесь с нами для обсуждения проекта"
        imageIndex={4}
        imageAlt="Контакты"
      />
    ),
  },
  {
    id: 'contacts-content',
    header: undefined,
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <ContactsSlide contacts={['Pasha', 'Artem']} />
      </Space>
    ),
  },
];
