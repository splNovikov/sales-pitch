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
  QuestionCircleOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  UserOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  FileTextOutlined,
  SettingOutlined,
  DatabaseOutlined,
  TeamOutlined,
  MessageOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { niteosQuestionnaireCreatedAt } from './niteos-questionnaire.meta';
import niteosLogo from './niteos.png';

const { Title, Paragraph, Text, Link } = Typography;

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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            1. Текущий процесс распределения заявок
          </Title>
          <List
            size="small"
            dataSource={[
              'Как работает рандомайзер распределения заявок? Опишите механизм работы.',
              'В кого рандомайзер распределяет заявки? Сколько человек в пуле распределения? Какие у них должности и компетенции?',
              'Сколько времени в среднем занимает распределение одной заявки через рандомайзер?',
              'Какие каналы поступления заявок используются? (сайт, email, телефон, мессенджеры, другие)',
              'В каком формате приходят заявки? (форма на сайте, письмо, звонок, файл)',
              'Есть ли единая точка входа для всех заявок или они приходят в разные системы?',
              'Что происходит с заявкой после распределения через рандомайзер? Опишите дальнейший процесс обработки.',
              'В каких системах ведутся статусы заявок после распределения? (CRM, таблицы, другие системы)',
              'Какие статусы заявок существуют в системе? Перечислите все статусы от поступления до закрытия.',
              'Как отслеживается движение заявки по статусам? Есть ли автоматическое обновление или это делается вручную?',
              'Какие критерии должны учитываться при распределении заявок? (тип продукции, регион, сложность, компетенции менеджера, загрузка, другие)',
              'Есть ли приоритизация заявок? Как определяется срочность и важность?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q2-problems',
    header: 'Вопросы: Распределение заявок — Проблемы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            2. Выявленные проблемы и их последствия
          </Title>
          <List
            size="small"
            dataSource={[
              'Какие конкретные проблемы возникают при распределении заявок? Опишите каждую.',
              'Как часто происходят ошибки распределения? (в % от общего количества заявок)',
              'Какие типы ошибок наиболее частые? (неправильный специалист, потеря заявки, задержка, другие)',
              'Что происходит, когда заявка распределена неправильно? Как это обнаруживается?',
              'Сколько времени теряется на перераспределение неправильно распределенных заявок?',
              'Сколько покупателей ушло из-за проблем с распределением заявок? (за последний год)',
              'Какая финансовая потеря связана с неправильным распределением? (упущенная выручка)',
              'Есть ли случаи, когда заявка теряется полностью? Как часто это происходит?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q3-human-factor',
    header: 'Вопросы: Распределение заявок — Человеческий фактор',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            3. Человеческий фактор и документация
          </Title>
          <List
            size="small"
            dataSource={[
              'Какая документация доступна сотруднику на уровне 1 для правильного распределения?',
              'Используют ли сотрудники эту документацию при распределении? Почему нет, если не используют?',
              'Как часто сотрудники открывают и читают документацию перед распределением заявки?',
              'Есть ли инструкции/чек-листы для распределения заявок? Используются ли они?',
              'Какие знания требуются от сотрудника на уровне 1 для правильного распределения?',
              'Как часто сотрудники обращаются за помощью к коллегам при распределении?',
              'Есть ли обучение новых сотрудников процессу распределения? Как оно проходит?',
              'Как контролируется качество распределения? Есть ли обратная связь от уровня 2?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q4-data',
    header: 'Вопросы: Распределение заявок — Данные и информация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DatabaseOutlined style={{ marginRight: 8 }} />
            4. Качество данных в заявках
          </Title>
          <List
            size="small"
            dataSource={[
              'Какой процент заявок приходит с неполными данными?',
              'Какие поля чаще всего отсутствуют или заполнены некорректно?',
              'Как обнаруживается неполнота данных? На каком этапе?',
              'Что происходит с недозаполненными заявками? Как запрашиваются недостающие данные?',
              'Сколько времени уходит на запрос и получение недостающих данных от покупателя?',
              'Есть ли валидация данных на этапе поступления заявки?',
              'Как часто покупатели не отвечают на запросы дополнительной информации?',
              'Какая информация критична для правильного распределения заявки?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q5-volume',
    header: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            5. Объемы заявок и нагрузка
          </Title>
          <List
            size="small"
            dataSource={[
              'Сколько заявок в среднем поступает в день? В неделю? В месяц?',
              'Есть ли сезонность в поступлении заявок? Когда пиковые периоды?',
              'Как распределяется нагрузка между сотрудниками на уровне 1?',
              'Есть ли перегрузка сотрудников? В какие периоды?',
              'Сколько времени сотрудник тратит на распределение заявок от общего рабочего времени?',
              'Есть ли очередь необработанных заявок? Какой средний размер очереди?',
              'Какой максимальный срок обработки заявки от поступления до распределения?',
              'Влияет ли объем заявок на качество распределения? Как?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q6-systems',
    header: 'Вопросы: Распределение заявок — Системы и инструменты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            6. Используемые системы и инструменты
          </Title>
          <List
            size="small"
            dataSource={[
              'Какие системы используются для работы с заявками? (CRM, почта, таблицы, другие)',
              'Есть ли автоматизация в процессе распределения? Какая?',
              'Как хранятся заявки? В какой системе?',
              'Есть ли интеграция между системами? Какая?',
              'Какие инструменты использует сотрудник на уровне 1 для распределения?',
              'Есть ли доступ к каталогу продукции при распределении? Как он организован?',
              'Используются ли шаблоны или чек-листы в электронном виде?',
              'Есть ли аналитика по распределению заявок? Какие метрики отслеживаются?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q7-metrics',
    header: 'Вопросы: Распределение заявок — Метрики и KPI',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            7. Метрики эффективности
          </Title>
          <List
            size="small"
            dataSource={[
              'Как сейчас анализируется качество распределения заявок? Опишите процесс.',
              'Где хранится аналитика по распределению? (таблицы Excel, CRM, другие системы)',
              'Сколько времени уходит на ручной анализ качества распределения? (в часах в неделю/месяц)',
              'Какие метрики используются для оценки качества распределения заявок?',
              'Какой процент заявок распределяется правильно с первого раза через рандомайзер?',
              'Как отслеживается, кому и почему ушла заявка? Есть ли прозрачность процесса?',
              'Среднее время от поступления заявки до начала работы специалиста?',
              'Какой процент заявок обрабатывается в течение установленных сроков?',
              'Есть ли SLA по времени обработки заявок? Какое?',
              'Как отслеживается конверсия заявок в сделки?',
              'Какая доля заявок конвертируется в успешные сделки?',
              'Есть ли метрики удовлетворенности покупателей процессом обработки заявок?',
              'Какие проблемы выявляются при ручном анализе качества распределения?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-1-q8-expectations',
    header: 'Вопросы: Распределение заявок — Ожидания',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            8. Ожидаемое решение
          </Title>
          <List
            size="small"
            dataSource={[
              'Какое идеальное решение проблемы распределения заявок вы видите?',
              'Какие функции должны быть в системе распределения заявок?',
              'Должна ли система полностью автоматизировать распределение или помогать сотруднику?',
              'Какие критерии важны при выборе решения? (скорость, точность, стоимость, другие)',
              'Какой результат вы ожидаете от внедрения решения? (в цифрах)',
              'Какие риски вы видите при автоматизации распределения?',
              'Готовы ли вы к изменению текущих процессов? В какой степени?',
              'Есть ли ограничения по бюджету на решение проблемы?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
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
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            1. Масштаб проблемы
          </Title>
          <List
            size="small"
            dataSource={[
              'Сколько всего сделок сейчас в воронке продаж?',
              'Сколько из них можно считать зависшими? (в % и абсолютных числах)',
              'Какое определение "зависшей сделки" используется в вашей компании? (критерии)',
              'Какой средний срок нахождения сделки в воронке до закрытия или отсева?',
              'Какой срок считается нормальным для сделки в вашей отрасли?',
              'Сколько сделок зависают более 30 дней? Более 60 дней? Более 90 дней?',
              'Какой процент от общего количества сделок составляют зависшие?',
              'Какой средний размер зависшей сделки? (в рублях)',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q2-reasons',
    header: 'Вопросы: Зависшие сделки — Причины зависания',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            2. Причины зависания сделок
          </Title>
          <List
            size="small"
            dataSource={[
              'Какие основные причины зависания сделок вы видите? Перечислите все.',
              'Какой процент зависших сделок связан с отсутствием активности менеджера?',
              'Какой процент связан с отсутствием активности покупателя?',
              'Есть ли зависшие сделки из-за отсутствия необходимой информации/документов?',
              'Сколько сделок зависают из-за ожидания решения от покупателя?',
              'Есть ли зависшие сделки из-за внутренних процессов компании? (согласования, производство, другие)',
              'Какой процент зависших сделок связан с ценовыми вопросами?',
              'Есть ли зависшие сделки из-за технических проблем? (недостаточная информация о продукции, расчеты, другие)',
              'Сколько сделок зависают из-за конкурентов или альтернативных решений?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q3-types',
    header: 'Вопросы: Зависшие сделки — Типы и категории',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            3. Типы зависших сделок
          </Title>
          <List
            size="small"
            dataSource={[
              'Есть ли категории зависших сделок? Какие? (по типу продукции, по покупателю, по этапу воронки, другие)',
              'На каких этапах воронки чаще всего зависают сделки? Перечислите этапы.',
              'Есть ли типы продукции, по которым чаще зависают сделки?',
              'Есть ли типы покупателей, с которыми чаще зависают сделки? (B2B, B2G, частные, другие)',
              'Зависают ли чаще крупные или мелкие сделки?',
              'Есть ли региональные особенности в зависании сделок?',
              'Есть ли сезонность в зависании сделок?',
              'Какие сделки имеют наибольшую вероятность зависания? (характеристики)',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q4-process',
    header: 'Вопросы: Зависшие сделки — Процессы работы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            4. Процессы работы с зависшими сделками
          </Title>
          <List
            size="small"
            dataSource={[
              'Есть ли сейчас система работы с зависшими сделками? Опишите её или объясните, почему её нет.',
              'Как сейчас определяются зависшие сделки? Есть ли автоматическое определение или это делается вручную?',
              'На каких стадиях воронки чаще всего копятся сделки? Перечислите конкретные стадии.',
              'Как часто пересматриваются зависшие сделки? (ежедневно, еженедельно, ежемесячно, никогда)',
              'Кто отвечает за работу с зависшими сделками? (менеджер, руководитель отдела, никто, другие)',
              'Есть ли автоматические напоминания менеджерам о зависших сделках? Если нет, почему?',
              'Как определяется, актуально ли еще сотрудничество с покупателем по зависшей сделке?',
              'Есть ли система работы с "холодными" сделками? Как она работает?',
              'Как сейчас предлагаются дополнительные скидки для "разморозки" сделок?',
              'Есть ли процесс "разморозки" зависших сделок? Как он работает?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q5-manager',
    header: 'Вопросы: Зависшие сделки — Работа менеджеров',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            5. Работа менеджеров с зависшими сделками
          </Title>
          <List
            size="small"
            dataSource={[
              'Как менеджеры работают с зависшими сделками? Опишите типичный сценарий.',
              'Сколько времени менеджер тратит на работу с зависшими сделками? (в % от рабочего времени)',
              'Есть ли у менеджеров мотивация работать с зависшими сделками?',
              'Как менеджеры определяют, стоит ли продолжать работу с зависшей сделкой?',
              'Есть ли у менеджеров инструменты для работы с зависшими сделками? Какие?',
              'Как часто менеджеры контактируют с покупателями по зависшим сделкам?',
              'Какие действия менеджеры предпринимают для "разморозки" сделки?',
              'Есть ли случаи, когда менеджеры "забывают" о зависших сделках? Почему?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q6-client',
    header: 'Вопросы: Зависшие сделки — Поведение покупателей',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            6. Поведение покупателей по зависшим сделкам
          </Title>
          <List
            size="small"
            dataSource={[
              'Как часто покупатели сами инициируют контакт по зависшей сделке?',
              'Как покупатели реагируют на напоминания о зависшей сделке?',
              'Есть ли случаи, когда покупатель "забыл" о сделке? Как часто?',
              'Какие причины покупатели называют при отказе от продолжения сделки?',
              'Есть ли случаи, когда покупатель просто перестает отвечать? Как часто?',
              'Какой процент зависших сделок в итоге закрывается успешно?',
              'Какой процент зависших сделок закрывается как потерянные?',
              'Есть ли закономерности в поведении покупателей по зависшим сделкам?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q7-impact',
    header: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            7. Влияние зависших сделок на бизнес
          </Title>
          <List
            size="small"
            dataSource={[
              'Какая сумма в рублях "заморожена" в зависших сделках?',
              'Как зависшие сделки влияют на прогноз продаж?',
              'Как зависшие сделки влияют на планирование производства?',
              'Есть ли влияние на загрузку менеджеров? Какое?',
              'Как зависшие сделки влияют на моральный климат в отделе продаж?',
              'Есть ли влияние на репутацию компании? Какое?',
              'Какая финансовая потеря связана с зависшими сделками? (упущенная выручка)',
              'Есть ли возможность перераспределить ресурсы с зависших сделок на новые?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q8-systems',
    header: 'Вопросы: Зависшие сделки — Системы и инструменты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            8. Системы и инструменты для работы с зависшими сделками
          </Title>
          <List
            size="small"
            dataSource={[
              'Какие системы используются для отслеживания зависших сделок?',
              'Есть ли автоматическое определение зависших сделок в системе?',
              'Есть ли автоматические уведомления о зависших сделках?',
              'Как визуализируются зависшие сделки в системе? (дашборды, отчеты, другие)',
              'Есть ли аналитика по зависшим сделкам? Какие метрики отслеживаются?',
              'Можно ли в системе фильтровать и сортировать зависшие сделки?',
              'Есть ли интеграция между системой учета сделок и другими системами?',
              'Какие инструменты используются для работы с покупателями по зависшим сделкам?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q9-metrics',
    header: 'Вопросы: Зависшие сделки — Метрики и KPI',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            9. Метрики и KPI по зависшим сделкам
          </Title>
          <List
            size="small"
            dataSource={[
              'Какие метрики используются для отслеживания зависших сделок?',
              'Какой процент зависших сделок считается нормальным?',
              'Есть ли KPI для менеджеров по работе с зависшими сделками?',
              'Как отслеживается динамика зависших сделок? (рост/снижение)',
              'Есть ли метрики времени нахождения сделки в каждом этапе воронки?',
              'Какой средний срок "разморозки" зависшей сделки?',
              'Есть ли метрики конверсии зависших сделок в закрытые?',
              'Как оценивается эффективность работы с зависшими сделками?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'problem-2-q10-expectations',
    header: 'Вопросы: Зависшие сделки — Ожидания',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            10. Ожидаемое решение
          </Title>
          <List
            size="small"
            dataSource={[
              'Какое идеальное решение проблемы зависших сделок вы видите?',
              'Какие функции должны быть в системе для работы с зависшими сделками?',
              'Должна ли система автоматически определять зависшие сделки?',
              'Должна ли система автоматически напоминать менеджерам о зависших сделках?',
              'Должна ли система автоматически эскалировать зависшие сделки?',
              'Какие критерии важны при выборе решения? (автоматизация, аналитика, стоимость, другие)',
              'Какой результат вы ожидаете от внедрения решения? (в цифрах)',
              'Есть ли ограничения по бюджету на решение проблемы?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'additional-questions',
    header: 'Дополнительные вопросы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Общие вопросы для понимания контекста
          </Title>
          <List
            size="small"
            dataSource={[
              'Есть ли связь между проблемами распределения заявок и зависшими сделками? Какая?',
              'Влияет ли качество распределения заявок на количество зависших сделок?',
              'Есть ли другие проблемы в процессах продаж, которые нужно учесть?',
              'Какие изменения в процессах продаж планируются в ближайшее время?',
              'Есть ли ограничения или требования, которые нужно учесть при разработке решения?',
              'Кто будет принимать решение о внедрении решения?',
              'Какие сроки ожидаются для внедрения решения?',
              'Есть ли опыт внедрения подобных решений в компании? Какой?',
            ]}
            renderItem={(item, index) => (
              <List.Item
                style={{ padding: '8px 0', justifyContent: 'flex-start' }}
              >
                <Text strong style={{ marginRight: 8 }}>
                  {index + 1}.
                </Text>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
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
  {
    id: 'contacts',
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
        <Card style={{ maxWidth: '800px', width: '100%' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Title level={3} style={{ textAlign: 'center', marginTop: 0 }}>
              Контакты для связи
            </Title>
            <Divider />
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  ОСНОВНОЙ КОНТАКТ
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Исламов Артур Айратович
                </Title>
                <Text type="secondary">Коммерческий директор</Text>
                <Divider style={{ margin: '12px 0' }} />
                <Text>
                  <Text strong>Готовность:</Text> Слушает предложения при
                  условии плана ROI
                </Text>
              </Space>
            </Card>
            <Divider />
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Space>
                <PhoneOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link href="tel:+78432504051" style={{ fontSize: '16px' }}>
                  +7 (843) 250-40-51
                </Link>
              </Space>
              <Space>
                <MailOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link href="mailto:mail@niteos.ru" style={{ fontSize: '16px' }}>
                  mail@niteos.ru
                </Link>
              </Space>
              <Space>
                <GlobalOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link
                  href="https://niteos.ru"
                  target="_blank"
                  style={{ fontSize: '16px' }}
                >
                  https://niteos.ru
                </Link>
              </Space>
              <Text type="secondary" style={{ marginTop: 8 }}>
                г. Казань, ул. Дементьева, д. 2Б, корп. 4, офис 330
              </Text>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
];
