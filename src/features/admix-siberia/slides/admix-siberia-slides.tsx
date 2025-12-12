import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Alert,
} from 'antd';
import {
  CheckCircleOutlined,
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  UserOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BuildOutlined,
  CodeOutlined,
  PictureOutlined,
  RocketOutlined,
  FileTextOutlined,
  WarningOutlined,
  MobileOutlined,
  CloudOutlined,
  ApiOutlined,
  BarChartOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { admixSiberiaCreatedAt } from './admix-siberia.meta';
import {
  QuestionnaireSectionForm,
  QuestionnaireCardWrapper,
  QuestionnaireReview,
} from '~shared/ui/questionnaire';
import {
  admixSiberiaQuestionnaireConfig,
  admixSiberiaQuestionnaireQuestions,
} from './admix-siberia-questionnaire-config';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for Адмикс-Сибирь presentation
 * Презентация для ООО "Адмикс-Сибирь" - производство пластмасс и синтетических смол
 */
export const admixSiberiaSlides: SlideData[] = [
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
          <Title
            level={1}
            style={{
              fontSize: '48px',
              fontWeight: 700,
              background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--app-spacing-md)',
            }}
          >
            Адмикс-Сибирь
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Кастомный сайт-визитка с лендингами
          </Paragraph>
          <Text
            type="secondary"
            style={{
              fontSize: 'var(--app-font-size-lg)',
            }}
          >
            Производство пластмасс и синтетических смол в первичных формах
          </Text>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          {formatDateForSlide(admixSiberiaCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'about-proxima',
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
            <CodeOutlined style={{ marginRight: 8 }} />
            Наш подход
          </Title>
          <Paragraph>
            Компания специализируется на создании{' '}
            <Text strong>кастомных решений</Text>. Мы предпочитаем нешаблонные
            подходы и умеем разрабатывать уникальные решения, которые точно
            соответствуют задачам заказчика. Каждый проект получает
            индивидуальную проработку с учётом специфики бизнеса клиента.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Наша специализация
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
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
            </Col>
            <Col xs={24} sm={12} lg={8}>
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
            </Col>
            <Col xs={24} sm={12} lg={8}>
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
            </Col>
            <Col xs={24} sm={12} lg={8}>
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
            </Col>
            <Col xs={24} sm={12} lg={8}>
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
            </Col>
            <Col xs={24} sm={12} lg={8}>
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
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem',
    header: 'Проблематика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ marginRight: 8, color: '#ff4d4f' }} />
            Что нужно решить
          </Title>
          <List
            size="large"
            dataSource={[
              {
                icon: <FileTextOutlined style={{ color: '#1890ff' }} />,
                text: 'Лендинги на 100 наименований товаров',
                description:
                  'Каждому товару нужен отдельный лендинг с полной информацией',
              },
              {
                icon: <ShopOutlined style={{ color: '#1890ff' }} />,
                text: 'Сайт-визитка, а не интернет-магазин',
                description:
                  'Магазин не нужен — нужен информационный сайт с каталогом товаров',
              },
              {
                icon: <CodeOutlined style={{ color: '#ff4d4f' }} />,
                text: 'Не шаблон — кастомная разработка',
                description:
                  'Требуется индивидуальное решение, разработанное специалистами компании',
              },
            ]}
            renderItem={item => (
              <List.Item
                style={{
                  padding: '16px 0',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                <Space size="middle" style={{ width: '100%' }}>
                  <div style={{ fontSize: '24px' }}>{item.icon}</div>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ flex: 1 }}
                  >
                    <Text strong style={{ fontSize: '16px' }}>
                      {item.text}
                    </Text>
                    <Text type="secondary">{item.description}</Text>
                  </Space>
                </Space>
              </List.Item>
            )}
          />
        </Card>
        <Alert
          message="Задача"
          description="Создать уникальный сайт-визитку с системой лендингов для 100 товаров, без использования готовых шаблонов."
          type="warning"
          showIcon
        />
      </Space>
    ),
  },
  {
    id: 'research',
    header: 'Анализ рынка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <SearchOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Результаты анализа конкурентов
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
            Проведён анализ сайтов производителей пластмасс и синтетических
            смол. Выявлено, что у конкурентов отсутствуют качественно
            оформленные веб-сайты.
          </Paragraph>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>СИБУР</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Ставролен</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Томскнефтехим</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>ООО "ПИТ"</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Енисей полимер</Text>
              </Card>
            </Col>
          </Row>
          <Alert
            message="Возможность"
            description="Это возможность стать первыми в отрасли с качественным, современным сайтом. Компания готова выступить амбассадорами в данной нише."
            type="success"
            showIcon
            style={{ marginTop: '24px' }}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'questionnaire-intro',
    header: 'Определение стиля дизайна',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Зачем нужен опросник?
          </Title>
          <Paragraph>
            Установлено, что требуется{' '}
            <Text strong>не шаблонный, а кастомный</Text> сайт. Для создания
            решения, максимально соответствующего требованиям, необходимо
            определить:
          </Paragraph>

          <Alert
            message="Цель опросника"
            description="Чётко определить стиль дизайна, который будет максимально соответствовать ожиданиям заказчика и позиционированию компании."
            type="info"
            showIcon
            style={{ marginTop: '16px' }}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'questionnaire-1',
    header: 'Опросник: Вопрос 1',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={3} style={{ marginTop: 0 }}>
              <QuestionCircleOutlined
                style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
              />
              Вопрос 1: Ассоциации с брендом
            </Title>
            <QuestionnaireSectionForm
              questions={admixSiberiaQuestionnaireQuestions}
              sectionId="design-q1-associations"
              storageKey={admixSiberiaQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'questionnaire-2',
    header: 'Опросник: Вопрос 2',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={3} style={{ marginTop: 0 }}>
              <QuestionCircleOutlined
                style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
              />
              Вопрос 2: Визуальный стиль
            </Title>
            <QuestionnaireSectionForm
              questions={admixSiberiaQuestionnaireQuestions}
              sectionId="design-q2-visual-style"
              storageKey={admixSiberiaQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'questionnaire-3',
    header: 'Опросник: Вопрос 3',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={3} style={{ marginTop: 0 }}>
              <QuestionCircleOutlined
                style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
              />
              Вопрос 3: Цветовая палитра
            </Title>
            <QuestionnaireSectionForm
              questions={admixSiberiaQuestionnaireQuestions}
              sectionId="design-q3-color-palette"
              storageKey={admixSiberiaQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'questionnaire-4',
    header: 'Опросник: Вопрос 4',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={3} style={{ marginTop: 0 }}>
              <QuestionCircleOutlined
                style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
              />
              Вопрос 4: Эмоциональное восприятие
            </Title>
            <QuestionnaireSectionForm
              questions={admixSiberiaQuestionnaireQuestions}
              sectionId="design-q4-emotions"
              storageKey={admixSiberiaQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'questionnaire-review',
    header: 'Проверка ответов',
    content: (
      <QuestionnaireCardWrapper>
        <QuestionnaireReview
          questions={admixSiberiaQuestionnaireQuestions}
          filterQuestions={q => q.section.startsWith('design-')}
          title="Определение стиля дизайна"
          successMessage="Ваши ответы по стилю дизайна успешно отправлены на сервер. Продолжите просмотр презентации для ознакомления с вариантами реализации."
          emptyMessage="Вы еще не заполнили ни одного вопроса. Вернитесь к предыдущим слайдам и заполните форму."
          storageKey={admixSiberiaQuestionnaireConfig.storageKey}
          apiUrl={admixSiberiaQuestionnaireConfig.apiUrl}
        />
      </QuestionnaireCardWrapper>
    ),
  },
  {
    id: 'implementation',
    header: 'Способы реализации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={3} style={{ marginTop: 0 }}>
            <BuildOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Три варианта реализации
          </Title>
          <Alert
            message="Важно"
            description="Поскольку требуется не шаблонное решение, первый вариант (готовые шаблоны) автоматически исключается."
            type="info"
            showIcon
            style={{ marginBottom: '24px' }}
          />
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={8}>
              <Card
                style={{
                  height: '100%',
                  backgroundColor: '#fff7e6',
                  border: '1px solid #ffe58f',
                }}
              >
                <Space
                  orientation="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Tag color="orange" style={{ fontSize: '14px' }}>
                    ВАРИАНТ 1
                  </Tag>
                  <Title level={4} style={{ marginTop: 0 }}>
                    <PictureOutlined
                      style={{ marginRight: 8, color: '#fa8c16' }}
                    />
                    На Тильде
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Готовые блоки и компоненты',
                      'Визуальный редактор',
                      'Быстрая разработка',
                      'Ограниченная кастомизация',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{
                          padding: '4px 0',
                          borderBottom: 'none',
                        }}
                      >
                        <Text style={{ fontSize: '14px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                  <Alert
                    message="Не подходит"
                    description="Шаблонный подход, ограниченные возможности кастомизации"
                    type="warning"
                    showIcon
                    style={{ marginTop: '12px' }}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card
                style={{
                  height: '100%',
                  backgroundColor: '#f6ffed',
                  border: '1px solid #b7eb8f',
                }}
              >
                <Space
                  orientation="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Tag color="green" style={{ fontSize: '14px' }}>
                    ВАРИАНТ 2 (РЕКОМЕНДУЕМЫЙ)
                  </Tag>
                  <Title level={4} style={{ marginTop: 0 }}>
                    <CodeOutlined
                      style={{ marginRight: 8, color: '#52c41a' }}
                    />
                    Компонентный подход
                  </Title>
                  <Paragraph style={{ fontSize: '14px', marginBottom: '12px' }}>
                    <Text strong>
                      Мощности, способные выдавать согласованный дизайн без
                      привлечения отдела дизайна
                    </Text>
                  </Paragraph>
                  <List
                    size="small"
                    dataSource={[
                      'Сбор и анализ требований заказчика',
                      'Применение компонентного подхода',
                      'Реализация в желаемой цветовой палитре',
                      'Разработка дизайна программным кодом',
                      'Оптимальное соотношение цена/качество',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{
                          padding: '4px 0',
                          borderBottom: 'none',
                        }}
                      >
                        <CheckCircleOutlined
                          style={{ color: '#52c41a', marginRight: 8 }}
                        />
                        <Text style={{ fontSize: '14px' }}>{item}</Text>
                      </List.Item>
                    )}
                  />
                  <Alert
                    message="Преимущества"
                    description="Кастомное решение без дорогой дизайн-разработки"
                    type="success"
                    showIcon
                    style={{ marginTop: '12px' }}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card
                style={{
                  height: '100%',
                  backgroundColor: '#e6f7ff',
                  border: '1px solid #91d5ff',
                }}
              >
                <Space
                  orientation="vertical"
                  size="middle"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue" style={{ fontSize: '14px' }}>
                    ВАРИАНТ 3
                  </Tag>
                  <Title level={4} style={{ marginTop: 0 }}>
                    <PictureOutlined
                      style={{ marginRight: 8, color: '#1890ff' }}
                    />
                    Нарисовать дизайном
                  </Title>
                  <List
                    size="small"
                    dataSource={[
                      'Полная дизайн-разработка',
                      'Уникальный визуальный стиль',
                      'Детальная проработка каждого элемента',
                      'Высокая стоимость',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{
                          padding: '4px 0',
                          borderBottom: 'none',
                        }}
                      >
                        <Text style={{ fontSize: '14px' }}>• {item}</Text>
                      </List.Item>
                    )}
                  />
                  <Alert
                    message="Учтите"
                    description="Разработка дизайна с нуля потребует значительных инвестиций, но обеспечит максимально уникальный результат"
                    type="info"
                    showIcon
                    style={{ marginTop: '12px' }}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Обсуждение проекта',
    content: (
      <Space
        orientation="vertical"
        size="middle"
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          padding: '8px 0',
        }}
      >
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Title level={3} style={{ textAlign: 'center', marginTop: 0 }}>
              <RocketOutlined
                style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
              />
              Ждём очной встречи для обсуждения деталей
            </Title>
            <Divider />
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#f6ffed', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Новиков Павел
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Технический директор
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79085550606"
                          style={{ fontSize: '15px' }}
                        >
                          +7 908 555 0606
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:p.novikov@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          p.novikov@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#fff7e6', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Киселёв Евгений
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Руководитель проектов
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79232864072"
                          style={{ fontSize: '15px' }}
                        >
                          +7 923 286 4072
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:e.kiselev@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          e.kiselev@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#e6f7ff', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Ситяков Артём
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Руководитель отдела маркетинга
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79271108488"
                          style={{ fontSize: '15px' }}
                        >
                          +7 927 110 84 88
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:a.sityakov@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          a.sityakov@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
      </Space>
    ),
  },
];
