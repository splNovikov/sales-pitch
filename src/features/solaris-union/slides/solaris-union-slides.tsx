import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Descriptions,
} from 'antd';
import {
  CalendarOutlined,
  MobileOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  DatabaseOutlined,
  ApiOutlined,
  UserOutlined,
  TeamOutlined,
  FileTextOutlined,
  CloudOutlined,
  ClockCircleOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import Logo from '~shared/ui/logo';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { solarisUnionCreatedAt } from './solaris-union.meta';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Solaris Union MVP presentation
 * Основные требования и положения ТЗ
 */
export const solarisUnionSlides: SlideData[] = [
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
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <Logo size="xl" fillColor="var(--app-color-primary)" />
          <Title level={1} style={{ marginTop: 'var(--app-spacing-md)' }}>
            Solaris Union
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Генеалогическое древо — MVP
          </Paragraph>
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              opacity: 0.6,
              marginTop: 'auto',
            }}
          >
            {formatDateForSlide(solarisUnionCreatedAt)}
          </Text>
        </Space>
      </Space>
    ),
  },
  {
    id: 'main-requirements',
    header: 'Основные требования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ClockCircleOutlined style={{ marginRight: 8 }} />
            Сроки разработки
          </Title>
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Жёсткий срок">
              <Tag color="red" style={{ fontSize: '14px', padding: '4px 12px' }}>
                2 недели
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Цель MVP">
              Собрать и обкатать основной пользовательский сценарий: установка
              → регистрация → добавление родственников → визуализация
              генеалогического древа
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MobileOutlined style={{ marginRight: 8 }} />
            Платформы
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f5ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <MobileOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Мобильное приложение</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    iOS / Android
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f5ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <CloudOutlined
                    style={{
                      fontSize: '32px',
                      color: 'var(--app-color-primary)',
                    }}
                  />
                  <Text strong>Backend API</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    REST API для мобильного приложения
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'mvp-functionality',
    header: 'Функционал MVP',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Frontend (мобильное приложение)
          </Title>
          <List
            size="small"
            dataSource={[
              'Onboarding (2-3 экрана) с объяснением ценности продукта',
              'Регистрация и авторизация (email + пароль)',
              'Главный экран "Моё древо" с визуализацией',
              'Экран "Человек" с карточкой (имя, дата рождения, пол, фото, описание)',
              'Добавление родственников с указанием типа связи',
              'Импорт из адресной книги устройства',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>

        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined style={{ marginRight: 8 }} />
            Backend
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <ApiOutlined style={{ marginRight: 8 }} />
                    Auth & User
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'Регистрация/авторизация',
                      'JWT токены',
                      'Профиль пользователя',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          • {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ height: '100%' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Text strong>
                    <TeamOutlined style={{ marginRight: 8 }} />
                    Person & FamilyTree
                  </Text>
                  <List
                    size="small"
                    dataSource={[
                      'CRUD для Person',
                      'Типы связей (parent, child, spouse)',
                      'Family UID для каждого человека',
                      'Импорт из контактов',
                    ]}
                    renderItem={item => (
                      <List.Item style={{ padding: '4px 0' }}>
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          • {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={5} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Вне рамок MVP (будущие этапы)
          </Title>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            AI-архивариус, реставрация фото, интеграции с соцсетями, голосовые
            капсулы, социальная лента, корпоративные модули, биллинг
          </Text>
        </Card>
      </Space>
    ),
  },
];

