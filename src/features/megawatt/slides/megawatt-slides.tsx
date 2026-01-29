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
  RocketOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { DemoSlide } from '~shared/ui/demo-slide';
import { ContactsSlide } from '~shared/ui/contacts-slide';
import { megawattCreatedAt, megawattTemplateUrl } from './megawatt.meta';
import logoMegawatt from './logo-mega-watt.png';

const { Title, Paragraph, Text } = Typography;

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
    id: 'template-demo',
    header: 'Перейти на шаблон',
    content: (
      <DemoSlide
        image={
          <div
            style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              gap: 16,
            }}
          >
            <img
              src={logoMegawatt}
              alt="Мегаватт"
              style={{ maxWidth: 200, height: 'auto', filter: 'brightness(0) invert(1)' }}
            />
            <span style={{ fontSize: 20, fontWeight: 600 }}>
              Шаблон сайта Мегаватт
            </span>
          </div>
        }
        demoUrl={megawattTemplateUrl || undefined}
        buttonText="Перейти на шаблон"
        presentationSlug="megawatt"
        wrapInCard
      />
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
