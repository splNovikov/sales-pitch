import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Table,
  Alert,
} from 'antd';
import {
  RocketOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  UserOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  BuildOutlined,
  ApiOutlined,
  GlobalOutlined,
  CalendarOutlined,
  TrophyOutlined,
  FileTextOutlined,
  CodeOutlined,
  CloudOutlined,
  SettingOutlined,
  CloseOutlined,
  StarOutlined,
  BulbOutlined,
  AimOutlined,
  EyeOutlined,
  EditOutlined,
  RobotOutlined,
  LinkOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { proposalAiCreatedAt } from './proposal-ai.meta';
import { Roadmap } from '~shared/ui/roadmap';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for ProposalAI presentation
 * Based on competitive-analysis.md and proposal-ai-v3-final.md
 *
 * ⚠️ NOTE: Название "ProposalAI" требует изменения - уже занято на рынке
 */
export const proposalAiSlides: SlideData[] = [
  // TITLE SLIDE
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
            ProposalAI
          </Title>
          <Alert
            message="⚠️ Название требует изменения"
            description="Название 'ProposalAI' уже занято на рынке. Требуется выбор нового названия продукта."
            type="warning"
            showIcon
            style={{ marginBottom: 'var(--app-spacing-md)' }}
          />
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Конкурентный анализ и документация продукта
          </Paragraph>
          <Text
            type="secondary"
            style={{
              fontSize: '11px',
              opacity: 0.6,
              marginTop: 'auto',
            }}
          >
            {formatDateForSlide(proposalAiCreatedAt)}
          </Text>
        </Space>
      </Space>
    ),
  },

  // PART 1: КАК РАБОТАЕТ ПРОДУКТ
  {
    id: 'part-1-divider',
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
        <Title
          level={1}
          style={{
            fontSize: '56px',
            fontWeight: 700,
            background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'var(--app-spacing-lg)',
            textAlign: 'center',
          }}
        >
          ЧАСТЬ 1
        </Title>
        <Title
          level={2}
          style={{
            fontSize: '36px',
            fontWeight: 600,
            textAlign: 'center',
            marginTop: 0,
          }}
        >
          Как работает продукт
        </Title>
      </Space>
    ),
  },

  {
    id: 'how-it-works',
    header: 'Как работает система',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0, textAlign: 'center' }}>
            Простой процесс создания КП за 5 минут
          </Title>
        </Card>

        {/* ФАЗА 1: АНАЛИТИКА */}
        <Card
          style={{
            backgroundColor: '#e6f7ff',
            border: '2px solid #1890ff',
            marginBottom: 'var(--app-spacing-md)',
          }}
        >
          <Title level={3} style={{ marginTop: 0, color: '#1890ff' }}>
            ФАЗА 1: АНАЛИТИКА
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
            Сбор всех недостающих сведений о клиенте
          </Paragraph>
        </Card>

        <Roadmap
          items={[
            {
              title: '1. Onboarding (один раз)',
              description:
                'Вводишь информацию о своей компании: название, сфера, услуги, сильные стороны. Это сохраняется и используется для всех будущих презентаций.',
              icon: <UserOutlined />,
              color: 'blue',
            },
            {
              title: '2. Выбор типа презентации',
              description:
                'Выбираешь один из трёх типов: Research (анализ клиента), Cold Pitch (универсальный питч) или Targeted Solution (решение конкретной проблемы).',
              icon: <AimOutlined />,
              color: 'blue',
            },
            {
              title: '3. Ввод данных о клиенте',
              description:
                'Указываешь сайт клиента и LinkedIn (опционально). AI автоматически парсит информацию: история компании, услуги, ключевые люди, отзывы. Система задаёт только те вопросы, на которые не нашла ответы.',
              icon: <SearchOutlined />,
              color: 'blue',
            },
          ]}
          mode="alternate"
        />

        {/* ФАЗА 2: РЕВЬЮ */}
        <Card
          style={{
            backgroundColor: '#f6ffed',
            border: '2px solid #52c41a',
            marginTop: 'var(--app-spacing-lg)',
            marginBottom: 'var(--app-spacing-md)',
          }}
        >
          <Title level={3} style={{ marginTop: 0, color: '#52c41a' }}>
            ФАЗА 2: РЕВЬЮ
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
            Проверка и валидация собранных данных перед генерацией
          </Paragraph>
        </Card>

        <Roadmap
          items={[
            {
              title: '4. Review Stage — проверка данных',
              description:
                'Просматриваешь всю собранную AI информацию. Видишь источники и вероятность достоверности. Можешь отредактировать любой блок перед генерацией.',
              icon: <EyeOutlined />,
              color: 'green',
            },
            {
              title: '5. Генерация презентации',
              description:
                'AI создаёт презентацию на основе собранных данных и контекста твоей компании. Генерирует контент для каждого слайда с учётом выбранного типа.',
              icon: <RobotOutlined />,
              color: 'green',
            },
          ]}
          mode="alternate"
        />

        {/* ФАЗА 3: LIVE EDITOR */}
        <Card
          style={{
            backgroundColor: '#fff7e6',
            border: '2px solid #faad14',
            marginTop: 'var(--app-spacing-lg)',
            marginBottom: 'var(--app-spacing-md)',
          }}
        >
          <Title level={3} style={{ marginTop: 0, color: '#faad14' }}>
            ФАЗА 3: LIVE EDITOR
          </Title>
          <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
            Финальное редактирование и публикация (Pull Request работы AI)
          </Paragraph>
        </Card>

        <Roadmap
          items={[
            {
              title: '6. Live Editor — финальное редактирование',
              description:
                'Редактируешь слайды в удобном интерфейсе. Каждый блок можно изменить вручную или через AI-агента. Видишь источники и вероятность недостоверности. Это как Pull Request работы AI — одобряешь или изменяешь.',
              icon: <EditOutlined />,
              color: 'orange',
            },
            {
              title: '7. Экспорт и публикация',
              description:
                'Экспортируешь в PDF, PowerPoint или HTML. Отправляешь клиенту по email или делишься ссылкой. Готово!',
              icon: <FileTextOutlined />,
              color: 'orange',
            },
          ]}
          mode="alternate"
        />
      </Space>
    ),
  },

  // PART 1: PRODUCT OVERVIEW
  {
    id: 'product-mission',
    header: 'Обзор продукта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Миссия
          </Title>
          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8' }}>
            Превратить создание качественных презентаций коммерческих
            предложений из ремесла в no-code процесс. Даже человек без опыта
            создания презентаций за 5 минут создаст убедительное КП.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Целевая аудитория
          </Title>
          <List
            dataSource={[
              'Продажники (B2B, B2C)',
              'Консультанты (юристы, HR-консалтинг)',
              'Бизнес-тренеры',
              'Криптопроекты (инвесторские питчи)',
              'Всем, кому нужно быстро сделать презентацию КП/питча',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'product-principles',
    header: 'Базовые принципы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BulbOutlined style={{ marginRight: 8 }} />
            Ключевая инновация
          </Title>
          <Paragraph>
            Основной подход: вместо промтов (сложно для непрограммиста) →{' '}
            <strong> вопрос-ответ в интерфейсе</strong> (чекбоксы + текстовые
            поля).
          </Paragraph>
          <Divider />
          <Paragraph>
            <strong>Для продвинутых пользователей:</strong> доступен режим с
            прямым вводом промтов для более точного контроля над генерацией
            контента.
          </Paragraph>
          <Divider />
          <Paragraph>
            <strong>Контекст</strong> + минимальный контент от пользователя +{' '}
            <strong>AI дополнение</strong> = профессиональная презентация.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Ключевые особенности
          </Title>
          <List
            dataSource={[
              'Адаптивный wizard — вопросы меняются в зависимости от того, что смогла найти AI',
              'Двухэтапная валидация перед генерацией',
            ]}
            renderItem={item => (
              <List.Item>
                <StarOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  // PART 2: PRODUCT ARCHITECTURE
  {
    id: 'architecture-overview',
    header: 'Архитектура взаимодействия',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Слой 0: Onboarding (одноразово)
          </Title>
          <Paragraph>
            Новый пользователь сначала проходит{' '}
            <strong>Onboarding Wizard</strong> один раз. Здесь собирается
            контекст компании.
          </Paragraph>
          <List
            dataSource={[
              'О вашей компании (название, сфера, сайт, LinkedIn, описание)',
              'Ваши основные сильные стороны (3-5 чекбоксов)',
              'Основные услуги (динамическое добавление)',
              'Ключевые показатели компании',
              'Кейсы (опционально)',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
          <Divider />
          <Text type="secondary">
            Результат: Company Context Profile (сохраняется в базе)
          </Text>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SettingOutlined style={{ marginRight: 8 }} />
            Слой 1: Управление контекстами
          </Title>
          <Paragraph>
            После onboarding пользователь может создать{' '}
            <strong>несколько контекстов</strong> (профилей) для разных
            клиентов/сегментов.
          </Paragraph>
          <List
            dataSource={[
              '[IT услуги для стартапов] (default, из onboarding)',
              '[IT услуги для крупных компаний]',
              '[Аутсорсинг разработки]',
              '[Консалтинг по миграции]',
            ]}
            renderItem={item => (
              <List.Item>
                <FileTextOutlined
                  style={{ color: '#1890ff', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'adaptive-wizard-concept',
    header: 'Адаптивный Wizard — концепция',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Традиционный wizard
          </Title>
          <Paragraph>
            Вопрос 1 → Вопрос 2 → Вопрос 3 → Вопрос 4 → Вопрос 5 → Готово
            <br />
            <Text type="secondary">(всегда одни и те же вопросы)</Text>
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Адаптивный wizard
          </Title>
          <Paragraph>
            <strong>Вопрос 1:</strong> "Дайте сайт клиента"
            <br />
            ↓
            <br />
            [AI парсит сайт за 3-5 сек]
            <br />
            ↓
            <br />
            Wizard анализирует собранные данные и решает:
          </Paragraph>
          <List
            dataSource={[
              '✅ Смогли определить сферу деятельности? → Пропускаем вопрос про сферу',
              '✅ Смогли найти список услуг/продуктов? → Пропускаем вопрос про услуги',
              '✅ Смогли найти ключевых людей? → Пропускаем вопрос про ключевые люди',
              '❌ Не смогли найти контактные данные? → Добавляем вопрос "Дайте контакты"',
              '❌ Не смогли найти информацию о размере компании? → Спрашиваем прямо',
            ]}
            renderItem={item => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
          <Divider />
          <Alert
            message="Результат"
            description="Каждый пользователь получает персонализированный wizard"
            type="success"
            showIcon
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'review-stage',
    header: 'Review Stage (новое!)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EyeOutlined style={{ marginRight: 8 }} />
            Концепция
          </Title>
          <Paragraph>
            После заполнения wizard пользователь{' '}
            <strong>ВИДИТ ВСЮ СОБРАННУЮ ИНФОРМАЦИЮ</strong> перед генерацией.
          </Paragraph>
          <Divider />
          <Alert
            message="Результат работы AI — как Pull Request"
            description="Результат работы сервиса перед публикацией — это пул реквест работы AI по слайдам. Каждый блок можно отредактировать сам или через агента. Можно увидеть источники и вероятность недостоверности информации."
            type="info"
            showIcon
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Что показывает Review Stage
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Левая панель — структурированные данные
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Информация о клиенте',
                    'Собранная из источников информация',
                    'История компании',
                    'Ключевые люди',
                    'Услуги',
                    'Отзывы',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Центр — превью структуры
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Структура будущей презентации',
                    'Список слайдов',
                    'Возможность изменить структуру',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Правая панель — источники информации
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Источник: Официальный сайт (достоверность: 95%)',
                    'Источник: LinkedIn (достоверность: 90%)',
                    'Источник: Яндекс карты (достоверность: 100%)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Взаимодействие на Review Stage
          </Title>
          <List
            dataSource={[
              '[редактировать] — пользователь может кликнуть и отредактировать любой блок',
              '[Изменить структуру] — удалить/добавить слайды',
              '[Создать презентацию] — запустить генерацию с AI дополнением контента',
            ]}
            renderItem={item => (
              <List.Item>
                <EditOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                {item}
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Прозрачность и контроль качества
          </Title>
          <List
            dataSource={[
              'Для каждого блока показывается источник информации',
              'Отображается вероятность недостоверности (confidence score)',
              'Пользователь видит, какие данные были собраны AI, а какие введены вручную',
              'Возможность проверить и отредактировать каждый элемент перед публикацией',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'live-editor',
    header: 'Live Editor (улучшенный интерфейс)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <EditOutlined style={{ marginRight: 8 }} />
            Структура интерфейса
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Левая панель
                </Title>
                <Text>Структура слайдов</Text>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Центр
                </Title>
                <Text>Preview слайда</Text>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Правая панель
                </Title>
                <Text>Edit Panel</Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Функционал Edit Panel
          </Title>
          <List
            dataSource={[
              {
                mode: 'Режим 1: Быстрое редактирование текста',
                desc: 'Title, Subtitle, Body text, Bullet points — каждый пункт можно редактировать вручную',
              },
              {
                mode: 'Режим 2: AI переписание текста',
                desc: 'Пользователь выбирает тон (агрессивно, профессионально, технически) и AI переписывает слайд через агента',
              },
              {
                mode: 'Режим 3: Структурное редактирование',
                desc: 'Переместить слайд, удалить, добавить новый, дублировать, изменить тип слайда',
              },
              {
                mode: 'Режим 4: Стилизация',
                desc: 'Цвет заголовка, цвет фона, шрифт, размер шрифта, выравнивание',
              },
              {
                mode: 'Режим 5: Просмотр источников и достоверности',
                desc: 'Для каждого блока показывается источник информации и вероятность недостоверности (confidence score). Можно увидеть, какие данные были собраны AI, а какие введены вручную',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    {item.mode}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Концепция "Pull Request работы AI"
          </Title>
          <Paragraph>
            Результат работы сервиса перед публикацией — это{' '}
            <strong>пул реквест работы AI по слайдам</strong>. Каждый блок
            можно:
          </Paragraph>
          <List
            dataSource={[
              'Отредактировать вручную',
              'Отредактировать через AI-агента',
              'Просмотреть источник информации',
              'Проверить вероятность недостоверности',
              'Одобрить или отклонить изменения',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#1890ff', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Быстрые действия
          </Title>
          <List
            dataSource={[
              '[Сохранить] — сохраняет текущую версию в черновики',
              '[AI полностью переписать все] — AI переписывает ВСЕ слайды сразу',
              '[Предпросмотр PDF] — открывает превью PDF',
              '[Экспорт] — PDF / PowerPoint / HTML / Сохранить как шаблон',
              '[Отправить по email] — пользователь вводит email клиента',
              '[Поделиться ссылкой] — генерирует public link (для просмотра)',
            ]}
            renderItem={item => (
              <List.Item>
                <ThunderboltOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'ai-parsing',
    header: 'AI парсинг и генерация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RobotOutlined style={{ marginRight: 8 }} />
            AI Agent для парсинга (Research type)
          </Title>
          <Paragraph>
            <strong>Входные данные:</strong> URL сайта клиента, LinkedIn
            компании, краткое описание (опционально)
          </Paragraph>
          <Divider />
          <Title level={5}>Этап 1: Параллельный парсинг (async)</Title>
          <List
            dataSource={[
              'Поток 1: Парсинг сайта — извлечение основной информации, история, логотип, контакты',
              'Поток 2: Парсинг LinkedIn — ключевые люди, должности, размер компании',
              'Поток 3: Сбор отзывов — Яндекс карты, 2ГИС, Google reviews',
              'Поток 4: Финансовые показатели — по ИНН или из открытых источников',
            ]}
            renderItem={item => (
              <List.Item>
                <LinkOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                {item}
              </List.Item>
            )}
          />
          <Divider />
          <Title level={5}>Этап 2: Анализ собранной информации</Title>
          <List
            dataSource={[
              'Полнота информации (%)',
              'Достоверность каждого источника (%)',
              'Какой информации не хватает',
              'Какие вопросы нужно задать пользователю',
            ]}
            renderItem={item => (
              <List.Item>
                <SearchOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                {item}
              </List.Item>
            )}
          />
          <Divider />
          <Title level={5}>Этап 3: Генерация адаптивного wizard</Title>
          <List
            dataSource={[
              'Какие вопросы пропустить (информация уже есть)',
              'Какие вопросы оставить (нужна уточняющая информация)',
              'Какие добавить (информация не найдена)',
            ]}
            renderItem={item => (
              <List.Item>
                <BulbOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                {item}
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RobotOutlined style={{ marginRight: 8 }} />
            AI Agent для контент-генерации
          </Title>
          <Paragraph>
            <strong>Входные данные:</strong> Company Context Profile, Client
            Information, Presentation Type, Selected Template, User Input
          </Paragraph>
          <Divider />
          <Title level={5}>Этап 1: Prompt генерация</Title>
          <Paragraph>
            <strong>Основной режим:</strong> Система автоматически генерирует
            оптимизированные промты на основе типа презентации и контекста.
          </Paragraph>
          <List
            dataSource={[
              'Для Research: "Ты — аналитик компаний. Проанализируй {CLIENT}..."',
              'Для Cold Pitch: "Ты — sales consultant. Создай питч для компании в сегменте {SEGMENT}..."',
              'Для Targeted Solution: "Ты — solution architect. Разработай решение для проблемы: {PROBLEM}..."',
            ]}
            renderItem={item => (
              <List.Item>
                <FileTextOutlined
                  style={{ color: '#1890ff', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
          <Divider />
          <Alert
            message="Режим для продвинутых пользователей"
            description="Доступен режим с прямым вводом промтов для более точного контроля над генерацией контента. Пользователь может переопределить автоматически сгенерированные промты своими."
            type="info"
            showIcon
          />
          <Divider />
          <Title level={5}>Этап 2: Генерация контента для каждого слайда</Title>
          <Paragraph>
            Система делает N параллельных запросов к LLM (по одному на слайд)
            или один батч-запрос.
          </Paragraph>
          <Divider />
          <Title level={5}>Этап 3: Валидация и форматирование</Title>
          <List
            dataSource={[
              'Проверка длины текста для слайдов (не более 2-3 линий)',
              'Проверка качества bullet points',
              'Проверка на грамматику',
              'Оптимизация для читаемости',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'user-flow',
    header: 'Полный флоу пользователя',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Процесс создания КП
          </Title>
          <List
            dataSource={[
              '1. Выбор контекста (IT услуги - стартапы)',
              '2. Выбор типа презентации (Research / Cold Pitch / Targeted)',
              '3. Адаптивный Wizard (Page 1 of N, где N зависит от результатов парсинга AI)',
              '4. AI парсит в фоне (~3-5 сек)',
              '5. AI анализирует результаты парсинга и адаптирует wizard',
              '6. Страница 2 (Адаптивная) — только уточняющие вопросы',
              '7. Review Stage — пользователь видит всю собранную информацию',
              '8. Generation Engine + AI — валидация, генерация контента, рендер слайдов',
              '9. Live Editor — редактирование слайдов с AI помощью',
              '10. Экспорт — PDF / PowerPoint / HTML',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text style={{ fontSize: '16px' }}>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  // PART 8: MVP PLAN
  {
    id: 'mvp-plan',
    header: 'MVP план',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalendarOutlined style={{ marginRight: 8 }} />
            Phase 1: Adaptive Wizard Core (2-3 недели)
          </Title>
          <List
            dataSource={[
              '✅ Website parsing (Cheerio + basic info extraction)',
              '✅ Adaptive questions based on parsed data',
              '✅ Review Stage UI',
              '✅ Storage of collectedData',
              '✅ Research type presentation generation',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Phase 2: Live Editor (1-2 недели)
          </Title>
          <List
            dataSource={[
              '✅ Live editor with multi-panel layout',
              '✅ Text editing for each field',
              '✅ AI rewrite for individual slides',
              '✅ Slide reordering (drag-and-drop)',
              '✅ PDF preview',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Phase 3: Advanced Parsing & AI (1-2 недели)
          </Title>
          <List
            dataSource={[
              '✅ LinkedIn parsing integration',
              '✅ Better data extraction (company size, key people, services)',
              '✅ AI confidence scoring',
              '✅ Content generation for all slide types',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Phase 4: Types 2 & 3 (1 неделя)
          </Title>
          <List
            dataSource={[
              '✅ Cold Pitch wizard',
              '✅ Targeted Solution wizard',
              '✅ Type-specific AI prompts',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Phase 5: Export & Polish (1 неделя)
          </Title>
          <List
            dataSource={[
              '✅ PowerPoint export',
              '✅ Email sharing',
              '✅ Share links',
              '✅ Performance optimization',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'technical-stack',
    header: 'Технический стек',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card size="small">
              <Title level={5} style={{ marginTop: 0 }}>
                <CodeOutlined style={{ marginRight: 8 }} />
                Frontend
              </Title>
              <List
                size="small"
                dataSource={[
                  'Next.js 14 (App Router)',
                  'React 18 + TypeScript',
                  'TailwindCSS + custom components',
                  'React Hook Form',
                  'Zustand (state management)',
                  'Shadcn/ui',
                  'React Beautiful DND',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card size="small">
              <Title level={5} style={{ marginTop: 0 }}>
                <ApiOutlined style={{ marginRight: 8 }} />
                Backend / API
              </Title>
              <List
                size="small"
                dataSource={[
                  'NestJS (TypeScript framework)',
                  'PostgreSQL (main DB)',
                  'Prisma (ORM)',
                  'Bull (job queue)',
                  'Puppeteer (PDF generation)',
                  'pptxgenjs (PPTX generation)',
                  'Cheerio / Playwright (parsing)',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card size="small">
              <Title level={5} style={{ marginTop: 0 }}>
                <RobotOutlined style={{ marginRight: 8 }} />
                AI & LLM
              </Title>
              <List
                size="small"
                dataSource={[
                  'OpenAI API (GPT-4)',
                  'Langchain (prompt management)',
                  'Vector DB (Pinecone)',
                  'Firecrawl или Apify (scraping)',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card size="small">
              <Title level={5} style={{ marginTop: 0 }}>
                <CloudOutlined style={{ marginRight: 8 }} />
                Infrastructure
              </Title>
              <List
                size="small"
                dataSource={[
                  'Docker',
                  'DigitalOcean App Platform / Railway',
                  'CloudFront (CDN)',
                  'GitHub Actions (CI/CD)',
                  'Redis (caching, job queue)',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text>{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },

  // PART 2: СРАВНИТЕЛЬНЫЙ АНАЛИЗ
  {
    id: 'part-2-divider',
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
        <Title
          level={1}
          style={{
            fontSize: '56px',
            fontWeight: 700,
            background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'var(--app-spacing-lg)',
            textAlign: 'center',
          }}
        >
          ЧАСТЬ 2
        </Title>
        <Title
          level={2}
          style={{
            fontSize: '36px',
            fontWeight: 600,
            textAlign: 'center',
            marginTop: 0,
          }}
        >
          Сравнительный анализ
        </Title>
      </Space>
    ),
  },

  {
    id: 'presentation-types',
    header: 'Типы презентаций',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Card
              title={
                <span>
                  <SearchOutlined style={{ marginRight: 8 }} />
                  Тип 1: Research
                </span>
              }
              style={{ height: '100%' }}
            >
              <Paragraph>
                <strong>Анализ клиента</strong>
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Парсинг сайта/LinkedIn',
                  'Сбор отзывов',
                  'Анализ конкурентов',
                  'Финансовые показатели',
                  'Адаптивные вопросы',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text type="secondary">{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              title={
                <span>
                  <RocketOutlined style={{ marginRight: 8 }} />
                  Тип 2: Cold Pitch
                </span>
              }
              style={{ height: '100%' }}
            >
              <Paragraph>
                <strong>Универсальный питч</strong>
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Базовый парсинг клиента',
                  'Релевантный опыт компании',
                  'Кейсы и приоритеты',
                  'Агрессивный/доверительный тон',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text type="secondary">{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              title={
                <span>
                  <AimOutlined style={{ marginRight: 8 }} />
                  Тип 3: Targeted Solution
                </span>
              }
              style={{ height: '100%' }}
            >
              <Paragraph>
                <strong>Целевое решение</strong>
              </Paragraph>
              <List
                size="small"
                dataSource={[
                  'Фокус на проблеме клиента',
                  'AI предлагает решение',
                  'Релевантные кейсы',
                  'ROI-focused подход',
                ]}
                renderItem={item => (
                  <List.Item style={{ padding: '4px 0' }}>
                    <Text type="secondary">{item}</Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    ),
  },

  // PART 9: COMPETITIVE ANALYSIS (MOVED FROM PART 2)
  {
    id: 'competitive-landscape',
    header: 'Конкурентный ландшафт',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Категории решений на рынке
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  1️⃣ Шаблонные конструкторы
                </Title>
                <Text>
                  <strong>Canva, Beautiful.ai, Gamma.app</strong>
                  <br />
                  Красивые шаблоны, но требуют много ручного ввода
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  2️⃣ AI презентация генераторы
                </Title>
                <Text>
                  <strong>Beautiful.ai, Gamma.app, Tome.app</strong>
                  <br />
                  AI дополняет, но нет специализации под КП
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  3️⃣ Sales Automation платформы
                </Title>
                <Text>
                  <strong>Gong, Salesloft, Chorus</strong>
                  <br />
                  Для управления продажами, но не для создания КП
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  4️⃣ Research & Analysis инструменты
                </Title>
                <Text>
                  <strong>Perplexity, Forrester</strong>
                  <br />
                  Аналитика, но не презентации
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  5️⃣ Document Generators (AI)
                </Title>
                <Text>
                  <strong>ChatGPT + Canva</strong>
                  <br />
                  Ручное склеивание, не автоматизировано
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f0f0' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  6️⃣ Proposal Software
                </Title>
                <Text>
                  <strong>PandaDoc, Proposify</strong>
                  <br />
                  Для оформления предложений, но не анализа
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },

  {
    id: 'vs-canva',
    header: 'ProposalAI vs Canva',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              criterion: 'Основная задача',
              proposalAi: 'Быстрое создание КП/питчей',
              competitor: 'Красивые презентации на любую тему',
            },
            {
              key: '2',
              criterion: 'Специализация',
              proposalAi: 'КП, питчи, анализ клиентов',
              competitor: 'Universal designer tool',
            },
            {
              key: '3',
              criterion: 'Контекст компании',
              proposalAi: '✅ Один раз при onboarding',
              competitor: '❌ Каждый раз вводить',
            },
            {
              key: '4',
              criterion: 'AI сбор информации о клиенте',
              proposalAi: '✅ Автоматический парсинг сайта',
              competitor: '❌ Нет',
            },
            {
              key: '5',
              criterion: 'Адаптивный wizard',
              proposalAi: '✅ Вопросы меняются по результатам AI',
              competitor: '❌ Статичные вопросы',
            },
            {
              key: '6',
              criterion: 'Review Stage',
              proposalAi: '✅ Просмотр всех данных перед генерацией',
              competitor: '❌ Нет',
            },
            {
              key: '7',
              criterion: 'Трудозатраты на создание',
              proposalAi: '3-5 минут',
              competitor: '30-60 минут',
            },
          ]}
          columns={[
            {
              title: 'Критерий',
              dataIndex: 'criterion',
              key: 'criterion',
              width: '30%',
            },
            {
              title: 'ProposalAI',
              dataIndex: 'proposalAi',
              key: 'proposalAi',
              width: '35%',
              render: (text: string) => (
                <Text strong style={{ color: '#1890ff' }}>
                  {text}
                </Text>
              ),
            },
            {
              title: 'Canva',
              dataIndex: 'competitor',
              key: 'competitor',
              width: '35%',
            },
          ]}
          pagination={false}
          size="small"
        />
        <Alert
          message="Вердикт"
          description="Canva — универсальный инструмент дизайна. ProposalAI — специализированный для КП."
          type="info"
          showIcon
        />
      </Space>
    ),
  },

  {
    id: 'vs-beautiful-ai',
    header: 'ProposalAI vs Beautiful.ai',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              criterion: 'Основная функция',
              proposalAi: 'AI + контекст для КП',
              competitor: 'AI для красивых презентаций',
            },
            {
              key: '2',
              criterion: 'AI тип',
              proposalAi: 'Content generation + parsing',
              competitor: 'Design AI only',
            },
            {
              key: '3',
              criterion: 'Автоматический сбор данных о клиенте',
              proposalAi: '✅ Да, из открытых источников',
              competitor: '❌ Нет',
            },
            {
              key: '4',
              criterion: 'Context memory',
              proposalAi: '✅ Сохраняет контекст компании',
              competitor: '❌ Нет',
            },
            {
              key: '5',
              criterion: 'Время на создание презентации',
              proposalAi: '3-5 минут',
              competitor: '10-15 минут',
            },
            {
              key: '6',
              criterion: 'Адаптивные вопросы',
              proposalAi: '✅ Yes (зависит от парсинга)',
              competitor: '❌ Статичные вопросы',
            },
            {
              key: '7',
              criterion: 'Research feature',
              proposalAi: '✅ Анализ клиента встроен',
              competitor: '❌ Нет',
            },
          ]}
          columns={[
            {
              title: 'Критерий',
              dataIndex: 'criterion',
              key: 'criterion',
              width: '30%',
            },
            {
              title: 'ProposalAI',
              dataIndex: 'proposalAi',
              key: 'proposalAi',
              width: '35%',
              render: (text: string) => (
                <Text strong style={{ color: '#1890ff' }}>
                  {text}
                </Text>
              ),
            },
            {
              title: 'Beautiful.ai',
              dataIndex: 'competitor',
              key: 'competitor',
              width: '35%',
            },
          ]}
          pagination={false}
          size="small"
        />
        <Alert
          message="Вердикт"
          description="Beautiful.ai хорошо для дизайна. ProposalAI лучше для КП-специфичного workflow."
          type="info"
          showIcon
        />
      </Space>
    ),
  },

  {
    id: 'vs-gamma',
    header: 'ProposalAI vs Gamma.app',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              criterion: 'Специализация',
              proposalAi: 'КП, питчи, анализ',
              competitor: 'Универсальные презентации',
            },
            {
              key: '2',
              criterion: 'AI контент-генерация',
              proposalAi: '✅ GPT-4 + контекст компании',
              competitor: '✅ GPT-4 + Claude',
            },
            {
              key: '3',
              criterion: 'Автоматический парсинг данных',
              proposalAi: '✅ Website/LinkedIn/reviews',
              competitor: '❌ Нет',
            },
            {
              key: '4',
              criterion: 'Адаптивный процесс',
              proposalAi: '✅ Wizard меняется по результатам',
              competitor: '❌ Один шаблонный процесс',
            },
            {
              key: '5',
              criterion: 'Контекст компании',
              proposalAi: '✅ Сохраняется, переиспользуется',
              competitor: '❌ Каждый раз новый ввод',
            },
            {
              key: '6',
              criterion: 'Review stage',
              proposalAi: '✅ Перед генерацией',
              competitor: '❌ Только после',
            },
            {
              key: '7',
              criterion: 'Research-oriented features',
              proposalAi: '✅ Встроенный анализ клиента',
              competitor: '❌ Нет',
            },
          ]}
          columns={[
            {
              title: 'Критерий',
              dataIndex: 'criterion',
              key: 'criterion',
              width: '30%',
            },
            {
              title: 'ProposalAI',
              dataIndex: 'proposalAi',
              key: 'proposalAi',
              width: '35%',
              render: (text: string) => (
                <Text strong style={{ color: '#1890ff' }}>
                  {text}
                </Text>
              ),
            },
            {
              title: 'Gamma.app',
              dataIndex: 'competitor',
              key: 'competitor',
              width: '35%',
            },
          ]}
          pagination={false}
          size="small"
        />
        <Alert
          message="Вердикт"
          description="Gamma лучше для быстрых презентаций. ProposalAI лучше для профессионального продажного workflow."
          type="info"
          showIcon
        />
      </Space>
    ),
  },

  {
    id: 'vs-pandadoc',
    header: 'ProposalAI vs PandaDoc / Proposify',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              criterion: 'Основная задача',
              proposalAi: 'Создание КП/питчей',
              competitor: 'Управление proposals и contracts',
            },
            {
              key: '2',
              criterion: 'Фокус',
              proposalAi: 'Презентация + анализ',
              competitor: 'Документы + e-signature',
            },
            {
              key: '3',
              criterion: 'AI контент генерация',
              proposalAi: '✅ Да, встроенная',
              competitor: '⚠️ Интеграция ChatGPT',
            },
            {
              key: '4',
              criterion: 'Автоматический сбор информации о клиенте',
              proposalAi: '✅ Парсинг сайта/LinkedIn',
              competitor: '❌ Нет',
            },
            {
              key: '5',
              criterion: 'Адаптивный процесс',
              proposalAi: '✅ Да',
              competitor: '❌ Нет',
            },
            {
              key: '6',
              criterion: 'Подписание документов',
              proposalAi: '❌ Нет',
              competitor: '✅ Да',
            },
            {
              key: '7',
              criterion: 'CRM интеграция',
              proposalAi: '🔄 Планируется',
              competitor: '✅ Salesforce, HubSpot',
            },
          ]}
          columns={[
            {
              title: 'Критерий',
              dataIndex: 'criterion',
              key: 'criterion',
              width: '30%',
            },
            {
              title: 'ProposalAI',
              dataIndex: 'proposalAi',
              key: 'proposalAi',
              width: '35%',
              render: (text: string) => (
                <Text strong style={{ color: '#1890ff' }}>
                  {text}
                </Text>
              ),
            },
            {
              title: 'PandaDoc',
              dataIndex: 'competitor',
              key: 'competitor',
              width: '35%',
            },
          ]}
          pagination={false}
          size="small"
        />
        <Alert
          message="Вердикт"
          description="PandaDoc лучше для управления всеми sales docs. ProposalAI лучше для presentation creation."
          type="info"
          showIcon
        />
      </Space>
    ),
  },

  {
    id: 'vs-perplexity',
    header: 'ProposalAI vs Perplexity / Research Tools',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Table
          dataSource={[
            {
              key: '1',
              criterion: 'Основная функция',
              proposalAi: 'КП + анализ клиента',
              competitor: 'Поиск и синтез информации',
            },
            {
              key: '2',
              criterion: 'AI типа исследования',
              proposalAi: 'Специализированный для КП',
              competitor: 'Generic search engine',
            },
            {
              key: '3',
              criterion: 'Структурированный вывод',
              proposalAi: '✅ Слайды/презентация',
              competitor: '❌ Текст только',
            },
            {
              key: '4',
              criterion: 'Парсинг сайта',
              proposalAi: '✅ Автоматический',
              competitor: '❌ Нужно указывать',
            },
            {
              key: '5',
              criterion: 'LinkedIn анализ',
              proposalAi: '✅ Да',
              competitor: '❌ Нет',
            },
            {
              key: '6',
              criterion: 'Отзывы сбор',
              proposalAi: '✅ Яндекс/2ГИС/Google',
              competitor: '❌ Нет',
            },
            {
              key: '7',
              criterion: 'Двухэтапная валидация',
              proposalAi: '✅ Review stage',
              competitor: '❌ Нет',
            },
            {
              key: '8',
              criterion: 'Экспорт',
              proposalAi: '✅ PDF/PPTX/HTML',
              competitor: '❌ PDF only',
            },
          ]}
          columns={[
            {
              title: 'Критерий',
              dataIndex: 'criterion',
              key: 'criterion',
              width: '30%',
            },
            {
              title: 'ProposalAI',
              dataIndex: 'proposalAi',
              key: 'proposalAi',
              width: '35%',
              render: (text: string) => (
                <Text strong style={{ color: '#1890ff' }}>
                  {text}
                </Text>
              ),
            },
            {
              title: 'Perplexity',
              dataIndex: 'competitor',
              key: 'competitor',
              width: '35%',
            },
          ]}
          pagination={false}
          size="small"
        />
        <Alert
          message="Вердикт"
          description="Perplexity для исследований, ProposalAI для превращения исследований в продающие презентации."
          type="info"
          showIcon
        />
      </Space>
    ),
  },

  {
    id: 'positioning-matrix',
    header: 'Матрица позиционирования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Специализация vs Простота использования
          </Title>
          <Paragraph>
            <strong>ProposalAI</strong> занимает позицию:
          </Paragraph>
          <List
            dataSource={[
              'HIGH специализация — фокус только на КП',
              'HIGH простота использования — адаптивный wizard',
              'Уникальная комбинация: Research + Sales + AI',
            ]}
            renderItem={item => (
              <List.Item>
                <StarOutlined style={{ color: '#1890ff', marginRight: 8 }} />
                {item}
              </List.Item>
            )}
          />
          <Divider />
          <Paragraph>
            Конкуренты: Canva (низкая специализация), Beautiful.ai (средняя),
            PandaDoc (высокая, но не скорость)
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Скорость vs Кастомизация
          </Title>
          <Paragraph>
            <strong>ProposalAI</strong> предлагает:
          </Paragraph>
          <List
            dataSource={[
              'HIGH скорость — 3-5 минут на создание',
              'MID кастомизация — контроль через Review Stage и Live Editor',
              'Оптимальный баланс для продажников',
            ]}
            renderItem={item => (
              <List.Item>
                <ThunderboltOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'advantages-universal',
    header: 'Ключевые преимущества',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Относительно Универсальных Конструкторов (Canva, Gamma)
          </Title>
          <List
            dataSource={[
              {
                title: 'ADVANTAGE 1: Специализация на КП',
                desc: '70% быстрее, чем Canva | 80% меньше редактирования',
              },
              {
                title: 'ADVANTAGE 2: Автоматический сбор данных о клиенте',
                desc: '-20 минут на сбор информации | -90% ошибок в данных',
              },
              {
                title: 'ADVANTAGE 3: Контекст компании (один раз)',
                desc: 'Экономия 5-10 минут на каждую презентацию',
              },
              {
                title: 'ADVANTAGE 4: Адаптивный процесс',
                desc: 'Пользователь отвечает только на релевантные вопросы',
              },
              {
                title: 'ADVANTAGE 5: Multiple presentation types',
                desc: 'Research / Cold Pitch / Targeted Solution — каждый оптимизирован',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#1890ff' }}>
                    {item.title}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'advantages-pandadoc',
    header: 'Преимущества vs PandaDoc / Proposify',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Относительно PandaDoc / Proposify
          </Title>
          <List
            dataSource={[
              {
                title: 'ADVANTAGE 1: Фокус на презентацию',
                desc: 'Проще в использовании | Быстрее результат',
              },
              {
                title: 'ADVANTAGE 2: AI контент генерация встроена',
                desc: 'Лучше контент (контекстный) | Быстрее процесс',
              },
              {
                title: 'ADVANTAGE 3: Research feature встроена',
                desc: 'Экономия часов на исследование клиента',
              },
              {
                title: 'ADVANTAGE 4: Специализированный процесс',
                desc: 'Очевидная логика workflow | Быстрее освоение',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#1890ff' }}>
                    {item.title}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'advantages-diy',
    header: 'Преимущества vs ChatGPT + Canva (DIY)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Относительно ChatGPT + Canva (DIY approach)
          </Title>
          <List
            dataSource={[
              {
                title: 'ADVANTAGE 1: Систематизация',
                desc: '90% быстрее | Автоматическое форматирование',
              },
              {
                title: 'ADVANTAGE 2: Оптимизированные промты',
                desc: 'Лучше качество контента | Меньше итераций',
              },
              {
                title: 'ADVANTAGE 3: Контекст компании встроен',
                desc: '-15 минут на введение контекста',
              },
              {
                title: 'ADVANTAGE 4: Двухэтапная валидация',
                desc: 'Больше контроля | Меньше ошибок',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#1890ff' }}>
                    {item.title}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'market-niche',
    header: 'Рыночная ниша ProposalAI',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ marginRight: 8, color: '#52c41a' }} />
            Идеальные пользователи
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  1. B2B Sales Professionals
                </Title>
                <Text>
                  Создают КП много раз в месяц. Нужно быстро и качественно. Есть
                  контекст компании (одинаковый для всех КП).
                  <br />
                  <strong>Пример:</strong> Sales manager в IT компании создаёт
                  5-10 КП в месяц. Экономит 3-4 часа в неделю.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  2. IT Consultants
                </Title>
                <Text>
                  Каждому клиенту свой анализ. Нужен быстрый research. Нужны
                  разные типы питчей.
                  <br />
                  <strong>Пример:</strong> Freelance consultant перед встречей
                  делает research presentation.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  3. Business Coaches / Trainers
                </Title>
                <Text>
                  Нужны универсальные питчи. Разные аудитории (стартапы /
                  корпорации). Нужны кейсы.
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  4. Entrepreneurs / Fundraisers
                </Title>
                <Text>
                  Нужны инвесторские питчи. Много итераций. Быстро адаптировать
                  под разные фонды.
                  <br />
                  <strong>Пример:</strong> Founder готовит питч для VC. За день
                  5 вариантов для 5 разных фондов.
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CloseOutlined style={{ marginRight: 8, color: '#ff4d4f' }} />
            Не идеальные пользователи
          </Title>
          <List
            dataSource={[
              'Маркетологи (нужен Canva) — нужен красивый дизайн, а не контент',
              'Дизайнеры (нужен Figma) — хотят контролировать каждый пиксель',
              'Corporate со своим брендом — нужны строгие бренд-гайдлайны',
              'Те, кто не создает КП — например, учителя, блогеры',
            ]}
            renderItem={item => (
              <List.Item>
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                {item}
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'unique-value',
    header: 'Уникальное ценностное предложение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
        >
          <Title
            level={3}
            style={{ marginTop: 0, color: 'white', textAlign: 'center' }}
          >
            "Создавай продающие КП в 3-5 минут, не в 30-60 минут"
          </Title>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Ключевые особенности
          </Title>
          <List
            dataSource={[
              '✅ Контекст компании → один раз при onboarding',
              '✅ Автоматический AI сбор информации о клиенте',
              '✅ Вдумчивая и глубокая аналитика через AI-агентов (автоматически, без необходимости писать промты)',
              '✅ Адаптивные вопросы (не одинаковые для всех)',
              '✅ Двухэтапная валидация (review stage + editor)',
              '✅ 3 специализированных типа КП',
              '✅ Live editor с AI помощью',
              '✅ Режим для продвинутых пользователей: прямой ввод промтов для точного контроля',
            ]}
            renderItem={item => (
              <List.Item>
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text style={{ fontSize: '16px' }}>{item}</Text>
              </List.Item>
            )}
          />
          <Divider />
          <Alert
            message="Результат"
            description="70-80% экономия времени vs конкурентам"
            type="success"
            showIcon
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'blue-ocean',
    header: 'Что никто не делает (Blue Ocean)',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Уникальные возможности ProposalAI
          </Title>
          <List
            dataSource={[
              {
                feature: '1. Automatic customer research',
                desc: 'Website + LinkedIn parsing — встроено (Canva, Beautiful.ai, Gamma, PandaDoc: Нет)',
              },
              {
                feature: '2. Adaptive wizard based on collected data',
                desc: 'Вопросы меняются в зависимости от AI результатов (Все конкуренты: Одинаковые вопросы)',
              },
              {
                feature: '3. Review stage перед генерацией',
                desc: 'Пользователь видит все данные, может одобрить перед генерацией (Все конкуренты: Покажи результат, потом редактируй)',
              },
              {
                feature: '4. Multiple specialized presentation types',
                desc: 'Research / Cold Pitch / Targeted Solution — каждый оптимизирован (Все конкуренты: Generic templates)',
              },
              {
                feature: '5. Company context reuse',
                desc: 'Один раз → все презентации (Все конкуренты: Каждый раз вводить информацию о себе)',
              },
              {
                feature: '6. Вдумчивая и глубокая аналитика через AI-агентов',
                desc: 'Автоматический многоэтапный анализ входных данных (работает автоматически, без необходимости писать промты). Сейчас пользователи делают это вручную: Perplexity для исследования → Claude для анализа кода → ручное склеивание. Сервис делает это автоматически, упрощая опыт пользователя. Для продвинутых пользователей доступен режим с прямым вводом промтов.',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#1890ff' }}>
                    {item.feature}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'pricing-strategy',
    header: 'Pricing Strategy vs конкурентов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <DollarOutlined style={{ marginRight: 8 }} />
            Рыночное позиционирование
          </Title>
          <Table
            dataSource={[
              {
                key: '1',
                product: 'Canva Pro',
                price: '$13/мес',
                note: 'Самый дешевый, но не специализирован',
              },
              {
                key: '2',
                product: 'Gamma.app',
                price: '$10/мес',
                note: 'Бета, даешь (будет дороже)',
              },
              {
                key: '3',
                product: 'Beautiful.ai',
                price: '$15/мес',
                note: 'Доступный, но не специализирован',
              },
              {
                key: '4',
                product: 'Perplexity Pro',
                price: '$20/мес',
                note: 'Для исследований, не презентаций',
              },
              {
                key: '8',
                product: 'PandaDoc',
                price: '$15-100+',
                note: 'Зависит от функций (proposal management)',
              },
              {
                key: '9',
                product: 'Proposify',
                price: '$45-125+',
                note: 'Для enterprise sales',
              },
            ]}
            columns={[
              {
                title: 'Продукт',
                dataIndex: 'product',
                key: 'product',
                width: '40%',
                render: (text: string) => text,
              },
              {
                title: 'Цена',
                dataIndex: 'price',
                key: 'price',
                width: '20%',
                render: (text: string) => text,
              },
              {
                title: 'Примечание',
                dataIndex: 'note',
                key: 'note',
                width: '40%',
              },
            ]}
            pagination={false}
            size="small"
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'swot-strengths',
    header: 'SWOT анализ — Сильные стороны',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ marginRight: 8, color: '#52c41a' }} />
            Strengths (Сильные стороны)
          </Title>
          <List
            dataSource={[
              {
                strength: 'Специализированность',
                desc: 'Легче входить пользователям (очевидная ценность) | Можно брать выше цена | Лучше маркетинг (узкая ниша)',
              },
              {
                strength: 'AI + Context + Automation',
                desc: 'Никто не делает вместе | Большой competitive advantage | Сложно копировать за несколько месяцев',
              },
              {
                strength: 'Адаптивный процесс',
                desc: 'UX better than конкурентов | Меньше трений | Быстрый результат',
              },
              {
                strength: 'Multiple revenue streams',
                desc: 'SaaS подписка | Enterprise / custom | API для partners',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#52c41a' }}>
                    ✅ {item.strength}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'swot-weaknesses',
    header: 'SWOT анализ — Слабые стороны',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ marginRight: 8, color: '#ff4d4f' }} />
            Weaknesses (Слабые стороны)
          </Title>
          <List
            dataSource={[
              {
                weakness: 'Нет brand awareness',
                desc: 'Никто не знает про ProposalAI | Нужен хороший маркетинг | Нужны early adopters',
              },
              {
                weakness: 'Зависимость от парсинга качества',
                desc: 'Если AI плохо парсит → пользователь недоволен | Нужно continuous improvement | Нужны обновления',
              },
              {
                weakness: 'Узкая аудитория (vs Canva)',
                desc: 'Только для КП | Не универсальный инструмент | Меньше потенциал рынка',
              },
              {
                weakness: 'Зависимость от OpenAI API',
                desc: 'Если OpenAI поднимет цены → margin сжимается | Если OpenAI упадет → сервис не работает',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#ff4d4f' }}>
                    ❌ {item.weakness}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'swot-opportunities',
    header: 'SWOT анализ — Возможности',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8, color: '#1890ff' }} />
            Opportunities (Возможности)
          </Title>
          <List
            dataSource={[
              {
                opp: 'Расширение на другие типы документов',
                desc: 'Tech proposals → RFPs, SOWs | В финансы: Investment pitches | В консалтинг: Business cases',
              },
              {
                opp: 'Интеграции с CRM',
                desc: 'Salesforce, HubSpot | Auto-pull customer data | Auto-send presentations',
              },
              {
                opp: 'Vertical expansion',
                desc: 'Tech consultants (уже хороший fit) | Real estate (нужны питчи) | Finance (инвесторские питчи)',
              },
              {
                opp: 'International markets',
                desc: 'Russia (высокий спрос, мало решений) | Europe | Asia',
              },
              {
                opp: 'White-label решение',
                desc: 'Для CRM компаний | Для consulting firms | B2B2C модель',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#1890ff' }}>
                    🚀 {item.opp}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'swot-threats',
    header: 'SWOT анализ — Угрозы',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ marginRight: 8, color: '#faad14' }} />
            Threats (Угрозы)
          </Title>
          <List
            dataSource={[
              {
                threat: 'Microsoft Word / Google Docs + ChatGPT',
                desc: 'Бесплатные альтернативы | Большие компании могут вложить ресурсы',
              },
              {
                threat: 'Большие players может войти',
                desc: 'Canva может добавить специализированные типы | Microsoft может добавить КП фичу в Office | Google может добавить в Google Slides',
              },
              {
                threat: 'Open-source парсеры',
                desc: 'Beautiful Soup, Selenium и т.д. | Любой может собрать data самостоятельно',
              },
              {
                threat: 'API limits от OpenAI',
                desc: 'Если OpenAI ограничит API access | Если появится более дешевый альтернатива (Llama, local LLM)',
              },
              {
                threat: 'Regulatory changes',
                desc: 'Web scraping может быть запрещено в некоторых странах | GDPR ограничения | LinkedIn API restrictions',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0, color: '#faad14' }}>
                    ⚠️ {item.threat}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },

  {
    id: 'market-sizing',
    header: 'Market Sizing & Opportunity',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            TAM (Total Addressable Market)
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  TARGET SEGMENT 1: B2B Sales Professionals
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Число B2B sales professionals worldwide: ~15 млн',
                    'Из них создают КП регулярно: ~5 млн',
                    'Из них на SaaS решениях: ~2 млн',
                    'Из них готовы платить за специализированное решение: ~500K',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
                <Divider style={{ margin: '8px 0' }} />
                <Text strong>
                  TAM 1: Рассчитывается на основе целевой аудитории
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  TARGET SEGMENT 2: Consultants
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'IT consultants: ~2M worldwide',
                    'Готовы платить: ~200K',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
                <Divider style={{ margin: '8px 0' }} />
                <Text strong>
                  TAM 2: Рассчитывается на основе целевой аудитории
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  TARGET SEGMENT 3: Entrepreneurs / Founders
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Entrepreneurs worldwide: ~15M',
                    'Готовы платить: ~100K',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '4px 0' }}>
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
                <Divider style={{ margin: '8px 0' }} />
                <Text strong>
                  TAM 3: Рассчитывается на основе целевой аудитории
                </Text>
              </Card>
            </Col>
            <Col xs={24}>
              <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  TOTAL TAM: ~$530M/year
                </Title>
                <Divider style={{ margin: '8px 0' }} />
                <Text>
                  <strong>
                    SAM (Serviceable Addressable Market) - первый год:
                  </strong>
                  <br />
                  Фокус на USA + Europe + Russia
                  <br />
                  ~50K paying users (потенциал первого года)
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },

  {
    id: 'competitive-advantage',
    header: 'Конкурентное преимущество на рынке',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />В чём difficulty
            вхождения конкурентам
          </Title>
          <List
            dataSource={[
              {
                barrier: '1. Собственный AI парсинг',
                desc: 'Нужно обучить модель на КП специфику | Нужно интегрировать LinkedIn/Яндекс/2ГИС API | 2-3 месяца разработки',
              },
              {
                barrier: '2. Domain expertise',
                desc: 'Нужно понимать sales workflow | Нужно понимать types of pitches | Нужно понимать что нужно B2B sales',
              },
              {
                barrier: '3. Специализированный контент',
                desc: 'Адаптивный wizard сложный в реализации | Нужны хорошие промты для каждого типа | Нужна continuous optimization',
              },
              {
                barrier: '4. Network effects (со временем)',
                desc: 'Кейсы становятся лучше с каждым пользователем | Templates становятся лучше | Данные о customer behavior',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    {item.barrier}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
          <Divider />
          <Alert
            message="Вывод"
            description="Легко копировать дизайн, сложно копировать workflow + AI парсинг"
            type="info"
            showIcon
          />
        </Card>
      </Space>
    ),
  },

  // PART 13: CONCLUSION
  {
    id: 'conclusion',
    header: 'Заключение',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
        >
          <Title level={3} style={{ marginTop: 0, color: 'white' }}>
            ProposalAI занимает уникальную нишу
          </Title>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <StarOutlined style={{ marginRight: 8 }} />
            Ключевые позиционирования
          </Title>
          <List
            dataSource={[
              {
                point: 'НЕ просто "ещё один конструктор презентаций"',
                desc: 'Это КП-конвейер (Research → Pitch → Solution)',
              },
              {
                point: 'НЕ просто "AI для всего"',
                desc: 'Это специализированный AI для sales КП',
              },
              {
                point: 'НЕ просто "парсер данных"',
                desc: 'Это intelligent workflow (parse → adapt → review → generate)',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <Card size="small" style={{ width: '100%' }}>
                  <Title level={5} style={{ marginTop: 0 }}>
                    {item.point}
                  </Title>
                  <Text>{item.desc}</Text>
                </Card>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Главное конкурентное преимущество
          </Title>
          <Paragraph style={{ fontSize: '18px', lineHeight: '1.8' }}>
            Контекст компании + автоматический AI сбор + адаптивный процесс
            <br />
            <strong>= 3-5 минут вместо 30-60 минут</strong>
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Market opportunity
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  TAM
                </Title>
                <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  ~$530M/year
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f0f9ff' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  First-year potential
                </Title>
                <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  50K users (потенциал первого года)
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
];
