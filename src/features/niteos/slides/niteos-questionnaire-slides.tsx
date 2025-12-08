import { Typography, List, Space, Divider, Card, Row, Col, Tag } from 'antd';
import {
  QuestionCircleOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  UserOutlined,
  DollarOutlined,
  FileTextOutlined,
  SettingOutlined,
  DatabaseOutlined,
  TeamOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { niteosQuestionnaireCreatedAt } from './niteos-questionnaire.meta';
import niteosLogo from './niteos.png';
import {
  QuestionnaireSectionForm,
  QuestionnaireReview,
  QuestionnaireCardWrapper,
} from '~shared/ui/questionnaire';
import {
  niteosQuestionnaireConfig,
  niteosQuestionnaireConfig2,
  niteosQuestionnaireQuestions,
} from './niteos-questionnaire-config';

const { Title, Paragraph, Text } = Typography;

/**
 * Questionnaire slides for Niteos
 * Detailed questions to understand problems with:
 * 1. Request distribution
 * 2. Stuck deals in the sales funnel
 */
export const niteosQuestionnaireSlides: SlideData[] = [
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
          <a
            href="https://niteos.ru"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--app-spacing-md)',
            }}
          >
            <img
              src={niteosLogo}
              alt="НИТЕОС"
              style={{
                maxWidth: '300px',
                height: 'auto',
                display: 'block',
              }}
            />
          </a>
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
            Опросник по проблематике
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Распределение заявок и зависшие сделки в воронке
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
          {formatDateForSlide(niteosQuestionnaireCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'intro',
    header: 'Цель опросника',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Зачем нужен этот опросник?
          </Title>
          <Paragraph>
            Данный опросник разработан для{' '}
            <Text strong>глубокого понимания проблематики</Text> в двух
            критических областях:
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="red">ПРОБЛЕМА #1</Tag>
                  <Text strong>Распределение заявок</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Понимание текущих процессов и проблем
                  </Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="red">ПРОБЛЕМА #2</Tag>
                  <Text strong>Зависшие сделки в воронке</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Анализ причин и масштаба проблемы
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Что мы получим в результате?
          </Title>
          <List
            size="small"
            dataSource={[
              'Полное понимание текущих процессов распределения заявок',
              'Выявление всех узких мест и проблемных зон',
              'Понимание причин зависания сделок в воронке',
              'Количественные и качественные метрики проблем',
              'Основа для разработки оптимального решения',
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
    id: 'problem-1-overview',
    header: 'Проблема #1: Распределение заявок',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Общее описание проблемы
          </Title>
          <Paragraph>
            Согласно информации, текущая система распределения заявок работает
            через{' '}
            <Text strong type="danger">
              рандомайзер
            </Text>
            , что не позволяет эффективно распределять заявки с учетом
            компетенций, загрузки и приоритетов.
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Текущая ситуация:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Распределение через рандомайзер без логики',
                    'Аналитика качества выполняется вручную в таблицах',
                    'Нет прозрачных критериев распределения',
                    'Нет учета компетенций и загрузки',
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
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Последствия:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Неравномерная загрузка специалистов',
                    'Сложные заявки уходят неподходящим исполнителям',
                    'Повторные перекидывания заявок',
                    'Рост сроков обработки',
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
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Что нужно выяснить?
          </Title>
          <Paragraph>
            Следующие вопросы помогут{' '}
            <Text strong>детально понять проблематику</Text> распределения
            заявок и найти оптимальное решение.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q1-process',
    header: 'Вопросы: Распределение заявок — Процесс',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <FileTextOutlined style={{ marginRight: 8 }} />
              1. Текущий процесс распределения заявок
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q1-process"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-q2-problems',
    header: 'Вопросы: Распределение заявок — Проблемы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
              2. Выявленные проблемы и их последствия
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q2-problems"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-q3-human-factor',
    header: 'Вопросы: Распределение заявок — Человеческий фактор',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <UserOutlined style={{ marginRight: 8 }} />
              3. Человеческий фактор и документация
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q3-human-factor"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-q4-data',
    header: 'Вопросы: Распределение заявок — Данные и информация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <DatabaseOutlined style={{ marginRight: 8 }} />
              4. Качество данных в заявках
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q4-data"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-q5-volume',
    header: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <BarChartOutlined style={{ marginRight: 8 }} />
              5. Объемы заявок и нагрузка
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q5-volume"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-q6-systems',
    header: 'Вопросы: Распределение заявок — Системы и инструменты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <SettingOutlined style={{ marginRight: 8 }} />
              6. Используемые системы и инструменты
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q6-systems"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-q7-metrics',
    header: 'Вопросы: Распределение заявок — Метрики и KPI',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <BarChartOutlined style={{ marginRight: 8 }} />
              7. Метрики эффективности
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q7-metrics"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-q8-expectations',
    header: 'Вопросы: Распределение заявок — Ожидания',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <CheckCircleOutlined
                style={{ color: '#52c41a', marginRight: 8 }}
              />
              8. Ожидаемое решение
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-1-q8-expectations"
              storageKey={niteosQuestionnaireConfig.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-1-review',
    header: 'Проверка и отправка ответов: Распределение заявок',
    content: (
      <QuestionnaireCardWrapper>
        <QuestionnaireReview
          questions={niteosQuestionnaireQuestions}
          filterQuestions={q => q.section.startsWith('problem-1-')}
          title="Распределение заявок"
          successMessage='Ваши ответы по теме "Распределение заявок" успешно отправлены на сервер.'
          emptyMessage='Вы еще не заполнили ни одного вопроса по теме "Распределение заявок". Вернитесь к предыдущим слайдам и заполните форму.'
          storageKey={niteosQuestionnaireConfig.storageKey}
          apiUrl={niteosQuestionnaireConfig.apiUrl}
        />
      </QuestionnaireCardWrapper>
    ),
  },
  {
    id: 'problem-2-overview',
    header: 'Проблема #2: Зависшие сделки в воронке',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Общее описание проблемы
          </Title>
          <Paragraph>
            Согласно информации,{' '}
            <Text strong type="danger">
              сделки копятся на стадиях воронки
            </Text>
            , при этом{' '}
            <Text strong type="danger">
              нет системы работы
            </Text>{' '}
            с такими сделками. Это приводит к замораживанию ресурсов и искажению
            реальной картины продаж.
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Текущая ситуация:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Копятся сделки на стадиях воронки',
                    'Нет системы работы с "холодными" сделками',
                    'Неизвестно, актуально ли сотрудничество',
                    'Нет автоматизации напоминаний',
                    'Упускаются возможности дополнительных скидок',
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
              <Card size="small" style={{ backgroundColor: '#fff1f0' }}>
                <Text strong>Последствия:</Text>
                <List
                  size="small"
                  dataSource={[
                    'Искажение воронки продаж',
                    'Невозможность точного прогнозирования',
                    'Потеря времени менеджеров',
                    'Упущенные возможности закрытия сделок',
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
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Что нужно выяснить?
          </Title>
          <Paragraph>
            Следующие вопросы помогут{' '}
            <Text strong>детально понять проблематику</Text> зависших сделок и
            найти оптимальное решение.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q1-scale',
    header: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <BarChartOutlined style={{ marginRight: 8 }} />
              1. Масштаб проблемы
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q1-scale"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q2-reasons',
    header: 'Вопросы: Зависшие сделки — Причины зависания',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
              2. Причины зависания сделок
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q2-reasons"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q3-types',
    header: 'Вопросы: Зависшие сделки — Типы и категории',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <FileTextOutlined style={{ marginRight: 8 }} />
              3. Типы зависших сделок
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q3-types"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q4-process',
    header: 'Вопросы: Зависшие сделки — Процессы работы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <SettingOutlined style={{ marginRight: 8 }} />
              4. Процессы работы с зависшими сделками
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q4-process"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q5-manager',
    header: 'Вопросы: Зависшие сделки — Работа менеджеров',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <UserOutlined style={{ marginRight: 8 }} />
              5. Работа менеджеров с зависшими сделками
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q5-manager"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q6-client',
    header: 'Вопросы: Зависшие сделки — Поведение покупателей',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <TeamOutlined style={{ marginRight: 8 }} />
              6. Поведение покупателей по зависшим сделкам
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q6-client"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q7-impact',
    header: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <DollarOutlined style={{ marginRight: 8 }} />
              7. Влияние зависших сделок на бизнес
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q7-impact"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q8-systems',
    header: 'Вопросы: Зависшие сделки — Системы и инструменты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <SettingOutlined style={{ marginRight: 8 }} />
              8. Системы и инструменты для работы с зависшими сделками
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q8-systems"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q9-metrics',
    header: 'Вопросы: Зависшие сделки — Метрики и KPI',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <BarChartOutlined style={{ marginRight: 8 }} />
              9. Метрики и KPI по зависшим сделкам
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q9-metrics"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-q10-expectations',
    header: 'Вопросы: Зависшие сделки — Ожидания',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <CheckCircleOutlined
                style={{ color: '#52c41a', marginRight: 8 }}
              />
              10. Ожидаемое решение
            </Title>
            <QuestionnaireSectionForm
              questions={niteosQuestionnaireQuestions}
              sectionId="problem-2-q10-expectations"
              storageKey={niteosQuestionnaireConfig2.storageKey}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
  {
    id: 'problem-2-review',
    header: 'Проверка и отправка ответов: Зависшие сделки',
    content: (
      <QuestionnaireCardWrapper>
        <QuestionnaireReview
          questions={niteosQuestionnaireQuestions}
          filterQuestions={q => q.section.startsWith('problem-2-')}
          title="Проверка ответов: Зависшие сделки"
          successMessage='Ваши ответы по теме "Зависшие сделки" успешно отправлены на сервер.'
          emptyMessage='Вы еще не заполнили ни одного вопроса по теме "Зависшие сделки". Вернитесь к предыдущим слайдам и заполните форму.'
          storageKey={niteosQuestionnaireConfig2.storageKey}
          apiUrl={niteosQuestionnaireConfig2.apiUrl}
        />
      </QuestionnaireCardWrapper>
    ),
  },
  {
    id: 'summary',
    header: 'Итоги опросника',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Что мы выяснили?
          </Title>
          <Paragraph>
            После заполнения этого опросника мы получим{' '}
            <Text strong>полную картину проблематики</Text> в двух критических
            областях:
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">ПРОБЛЕМА #1</Tag>
                  <Text strong>Распределение заявок</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Текущие процессы и их проблемы',
                      'Масштаб и влияние проблем',
                      'Причины возникновения',
                      'Ожидаемое решение',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
                      </List.Item>
                    )}
                  />
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="green">ПРОБЛЕМА #2</Tag>
                  <Text strong>Зависшие сделки</Text>
                  <List
                    size="small"
                    dataSource={[
                      'Масштаб проблемы',
                      'Причины зависания',
                      'Процессы работы с ними',
                      'Ожидаемое решение',
                    ]}
                    renderItem={item => (
                      <List.Item
                        style={{ padding: '4px 0', textAlign: 'left' }}
                      >
                        <Text>• {item}</Text>
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
            <RocketOutlined style={{ marginRight: 8 }} />
            Следующие шаги
          </Title>
          <List
            size="small"
            dataSource={[
              'Анализ ответов на вопросы опросника',
              'Выявление ключевых проблем и их взаимосвязей',
              'Разработка оптимального решения на основе выявленной проблематики',
              'Подготовка предложения с четким планом ROI',
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
];
