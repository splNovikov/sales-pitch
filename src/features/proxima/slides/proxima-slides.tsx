import { useState, useEffect } from 'react';
import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import {
  RocketOutlined,
  GlobalOutlined,
  TeamOutlined,
  CodeOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
  BuildOutlined,
  ApiOutlined,
  MobileOutlined,
  CloudOutlined,
  BarChartOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import Logo from '~shared/ui/logo';
import chevronLogo from './chevron.png';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Component for animated card appearance
 */
function AnimatedCard({
  index,
  delay = 200,
  children,
}: {
  index: number;
  delay?: number;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * delay);

    return () => clearTimeout(timer);
  }, [index, delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0) scale(1)'
          : 'translateY(20px) scale(0.95)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}

/**
 * Slides data for Proxima company presentation
 * Brief overview of the company and use cases
 */
export const proximaSlides: SlideData[] = [
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
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            IT-решения для бизнеса
          </Paragraph>
        </Space>
      </Space>
    ),
  },
  {
    id: 'about-us',
    header: 'О нас',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Кто мы
          </Title>
          <Paragraph>
            <Text strong>Проксима</Text> — IT-компания, специализирующаяся на
            разработке современных веб-приложений, мобильных решений и платформ
            для автоматизации бизнес-процессов.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Наша специализация
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <AnimatedCard index={0} delay={300}>
                <Card size="small" style={{ height: '100%' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <CodeOutlined
                      style={{
                        fontSize: '32px',
                        color: 'var(--app-color-primary)',
                      }}
                    />
                    <Text strong>Веб-разработка</Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Современные веб-приложения и платформы
                    </Text>
                  </Space>
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <AnimatedCard index={1} delay={300}>
                <Card size="small" style={{ height: '100%' }}>
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
                    <Text strong>Мобильные решения</Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Мобильные приложения и PWA
                    </Text>
                  </Space>
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <AnimatedCard index={2} delay={300}>
                <Card size="small" style={{ height: '100%' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <DatabaseOutlined
                      style={{
                        fontSize: '32px',
                        color: 'var(--app-color-primary)',
                      }}
                    />
                    <Text strong>Интеграции</Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Интеграция с 1С, CRM и другими системами
                    </Text>
                  </Space>
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <AnimatedCard index={3} delay={300}>
                <Card size="small" style={{ height: '100%' }}>
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
                    <Text strong>Облачные решения</Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Масштабируемые облачные платформы
                    </Text>
                  </Space>
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <AnimatedCard index={4} delay={300}>
                <Card size="small" style={{ height: '100%' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <ApiOutlined
                      style={{
                        fontSize: '32px',
                        color: 'var(--app-color-primary)',
                      }}
                    />
                    <Text strong>API и микросервисы</Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      RESTful API и микросервисная архитектура
                    </Text>
                  </Space>
                </Card>
              </AnimatedCard>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <AnimatedCard index={5} delay={300}>
                <Card size="small" style={{ height: '100%' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <BarChartOutlined
                      style={{
                        fontSize: '32px',
                        color: 'var(--app-color-primary)',
                      }}
                    />
                    <Text strong>Аналитика</Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      BI-решения и дашборды
                    </Text>
                  </Space>
                </Card>
              </AnimatedCard>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'principles',
    header: 'Наши принципы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Что для нас важно
          </Title>
          <List
            size="small"
            dataSource={[
              'Качество кода и архитектуры',
              'Современные технологии и практики',
              'Фокус на бизнес-результатах',
              'Прозрачность и коммуникация',
              'Масштабируемые решения',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8, fontSize: '16px' }}
                />
                <Text style={{ fontSize: '16px' }}>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'use-cases-intro',
    header: 'Наши кейсы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Реализованные проекты
          </Title>
          <Paragraph>
            Мы разрабатываем решения для различных отраслей, включая
            производство, энергетику, логистику и другие сферы бизнеса.
          </Paragraph>
          <Divider style={{ margin: '16px 0' }} />

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', alignItems: 'center' }}
                >
                  <Space
                    align="center"
                    style={{ marginBottom: 8, justifyContent: 'center' }}
                  >
                    <img
                      src={chevronLogo}
                      alt="Chevron"
                      style={{
                        height: '32px',
                        width: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                    <Text strong>Chevron</Text>
                  </Space>
                  <Text
                    strong
                    style={{ textAlign: 'center', display: 'block' }}
                  >
                    Field Inspection & Risk Assessment Platform
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: '12px',
                      textAlign: 'center',
                      display: 'block',
                    }}
                  >
                    Платформа для полевых инспекций и оценки рисков
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                size="small"
                style={{
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%', alignItems: 'center' }}
                >
                  <Space
                    align="center"
                    style={{ marginBottom: 8, justifyContent: 'center' }}
                  >
                    <img
                      src={chevronLogo}
                      alt="Chevron"
                      style={{
                        height: '32px',
                        width: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                    <Text strong>Chevron</Text>
                  </Space>
                  <Text
                    strong
                    style={{ textAlign: 'center', display: 'block' }}
                  >
                    Field Inspection & GNSS Data Collection Platform
                  </Text>
                  <Text
                    type="secondary"
                    style={{
                      fontSize: '12px',
                      textAlign: 'center',
                      display: 'block',
                    }}
                  >
                    Платформа для сбора данных GNSS при полевых инспекциях
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
    id: 'chevron-inspection-risk',
    header: (
      <Space align="center">
        <img
          src={chevronLogo}
          alt="Chevron"
          style={{
            height: '32px',
            width: 'auto',
            objectFit: 'contain',
            marginRight: 12,
          }}
        />
        <span>Chevron: Field Inspection & Risk Assessment Platform</span>
      </Space>
    ),
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Описание проекта
          </Title>
          <Paragraph>
            Платформа для проведения полевых инспекций и оценки рисков,
            разработанная для <Text strong>Chevron</Text>. Решение позволяет
            инспекторам эффективно собирать данные на объектах, оценивать риски
            и управлять результатами инспекций.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Ключевые возможности
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Полевые инспекции</Text>
                <List
                  size="small"
                  dataSource={[
                    'Мобильное приложение для инспекторов',
                    'Офлайн-режим работы',
                    'Фото- и видеодокументация',
                    'Чек-листы и формы инспекций',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Оценка рисков</Text>
                <List
                  size="small"
                  dataSource={[
                    'Автоматический расчет рисков',
                    'Визуализация уровней риска',
                    'Приоритизация проблем',
                    'Отчетность и аналитика',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Управление данными</Text>
                <List
                  size="small"
                  dataSource={[
                    'Централизованное хранилище',
                    'Синхронизация данных',
                    'История изменений',
                    'Экспорт отчетов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Интеграции</Text>
                <List
                  size="small"
                  dataSource={[
                    'Интеграция с корпоративными системами',
                    'API для внешних сервисов',
                    'Экспорт в различные форматы',
                    'Уведомления и алерты',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Результаты
          </Title>
          <List
            size="small"
            dataSource={[
              'Ускорение процесса инспекций',
              'Снижение количества ошибок',
              'Улучшение качества оценки рисков',
              'Повышение прозрачности процессов',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
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
    id: 'chevron-gnss',
    header: (
      <Space align="center">
        <img
          src={chevronLogo}
          alt="Chevron"
          style={{
            height: '32px',
            width: 'auto',
            objectFit: 'contain',
            marginRight: 12,
          }}
        />
        <span>Chevron: Field Inspection & GNSS Data Collection Platform</span>
      </Space>
    ),
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MobileOutlined style={{ marginRight: 8 }} />
            Описание проекта
          </Title>
          <Paragraph>
            Специализированная платформа для сбора геопространственных данных
            (GNSS) во время полевых инспекций, разработанная для{' '}
            <Text strong>Chevron</Text>. Решение интегрирует высокоточные
            GPS-данные с результатами инспекций, обеспечивая точную привязку
            данных к местоположению.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Ключевые возможности
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>GNSS-навигация</Text>
                <List
                  size="small"
                  dataSource={[
                    'Высокоточное позиционирование',
                    'Поддержка различных GNSS-систем',
                    'Коррекция сигналов в реальном времени',
                    'Трекинг маршрутов инспекций',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Сбор данных</Text>
                <List
                  size="small"
                  dataSource={[
                    'Автоматическая привязка к координатам',
                    'Геотегирование фотографий',
                    'Запись маршрутов',
                    'Сохранение точек интереса',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Визуализация</Text>
                <List
                  size="small"
                  dataSource={[
                    'Интерактивные карты',
                    'Отображение маршрутов',
                    'Тепловые карты данных',
                    '3D-визуализация местности',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Аналитика</Text>
                <List
                  size="small"
                  dataSource={[
                    'Анализ покрытия территории',
                    'Статистика по маршрутам',
                    'Отчеты по геоданным',
                    'Экспорт в GIS-системы',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Результаты
          </Title>
          <List
            size="small"
            dataSource={[
              'Повышение точности геоданных',
              'Ускорение процесса сбора данных',
              'Улучшение качества инспекций',
              'Интеграция с корпоративными GIS',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
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
    id: 'technologies',
    header: 'Технологии',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CodeOutlined style={{ marginRight: 8 }} />
            Используемый стек
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Frontend</Text>
                <div style={{ marginTop: 8 }}>
                  <Tag>React</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>Ant Design</Tag>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Backend</Text>
                <div style={{ marginTop: 8 }}>
                  <Tag>Node.js</Tag>
                  <Tag>Python</Tag>
                  <Tag>PostgreSQL</Tag>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Mobile</Text>
                <div style={{ marginTop: 8 }}>
                  <Tag>React Native</Tag>
                  <Tag>PWA</Tag>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Cloud</Text>
                <div style={{ marginTop: 8 }}>
                  <Tag>AWS</Tag>
                  <Tag>Docker</Tag>
                  <Tag>Kubernetes</Tag>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>GIS & Maps</Text>
                <div style={{ marginTop: 8 }}>
                  <Tag>OpenLayers</Tag>
                  <Tag>Leaflet</Tag>
                  <Tag>PostGIS</Tag>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Интеграции</Text>
                <div style={{ marginTop: 8 }}>
                  <Tag>REST API</Tag>
                  <Tag>GraphQL</Tag>
                  <Tag>WebSocket</Tag>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'contact',
    header: 'Контакты',
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
        <AnimatedCard index={0} delay={100}>
          <Card
            style={{
              maxWidth: '900px',
              width: '100%',
              background: `linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(24, 144, 255, 0.02) 100%)`,
              border: '1px solid rgba(24, 144, 255, 0.2)',
              boxShadow: '0 4px 12px rgba(24, 144, 255, 0.1)',
            }}
          >
            <Space
              orientation="vertical"
              size="large"
              style={{ width: '100%' }}
            >
              <div style={{ textAlign: 'center' }}>
                <Title
                  level={2}
                  style={{
                    marginTop: 0,
                    marginBottom: 8,
                    background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Наши контакты
                </Title>
              </div>
              <Divider style={{ margin: '24px 0' }} />
              <AnimatedCard index={1} delay={150}>
                <Space
                  orientation="vertical"
                  size="large"
                  style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}
                >
                  <AnimatedCard index={2} delay={200}>
                    <Card
                      size="small"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid rgba(24, 144, 255, 0.2)',
                        borderRadius: '8px',
                      }}
                    >
                      <Space size="middle" style={{ width: '100%' }}>
                        <div
                          style={{
                            background: `linear-gradient(135deg, #1a5f1a 0%, #0d4d0d 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <EnvironmentOutlined
                            style={{
                              fontSize: '24px',
                              color: '#1a5f1a',
                              flexShrink: 0,
                            }}
                          />
                        </div>
                        <Text
                          type="secondary"
                          style={{ fontSize: '15px', lineHeight: 1.6 }}
                        >
                          г. Саратов, улица им. И.С. Кутякова, дом 3, этаж 3
                          (технопарк «Саратов Диджитал»)
                        </Text>
                      </Space>
                    </Card>
                  </AnimatedCard>
                  <AnimatedCard index={3} delay={250}>
                    <Card
                      size="small"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid rgba(24, 144, 255, 0.2)',
                        borderRadius: '8px',
                      }}
                    >
                      <Space size="middle" style={{ width: '100%' }}>
                        <PhoneOutlined
                          style={{
                            fontSize: '24px',
                            color: '#1a5f1a',
                            flexShrink: 0,
                          }}
                        />
                        <Text
                          strong
                          style={{
                            fontSize: '18px',
                            color: 'var(--app-color-text)',
                          }}
                        >
                          8 800 555 00 33
                        </Text>
                      </Space>
                    </Card>
                  </AnimatedCard>
                  <AnimatedCard index={4} delay={300}>
                    <Card
                      size="small"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid rgba(24, 144, 255, 0.2)',
                        borderRadius: '8px',
                      }}
                    >
                      <Space size="middle" style={{ width: '100%' }}>
                        <MailOutlined
                          style={{
                            fontSize: '24px',
                            color: '#1a5f1a',
                            flexShrink: 0,
                          }}
                        />
                        <Link
                          href="mailto:it@proxima24.ru"
                          style={{ fontSize: '15px' }}
                        >
                          it@proxima24.ru
                        </Link>
                      </Space>
                    </Card>
                  </AnimatedCard>
                  <AnimatedCard index={5} delay={350}>
                    <Card
                      size="small"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid rgba(24, 144, 255, 0.2)',
                        borderRadius: '8px',
                      }}
                    >
                      <Space size="middle" style={{ width: '100%' }}>
                        <LinkOutlined
                          style={{
                            fontSize: '24px',
                            color: '#1a5f1a',
                            flexShrink: 0,
                          }}
                        />
                        <Link
                          href="https://proxima24.ru"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Card>
                  </AnimatedCard>
                </Space>
              </AnimatedCard>
            </Space>
          </Card>
        </AnimatedCard>
      </Space>
    ),
  },
];
