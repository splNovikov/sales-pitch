import { Typography, List, Space, Card } from 'antd';
import {
  QuestionCircleOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { admixSiberiaQuestionnaireCreatedAt } from './admix-siberia-questionnaire.meta';
import {
  QuestionnaireSectionForm,
  QuestionnaireReview,
  QuestionnaireCardWrapper,
} from '~shared/ui/questionnaire';
import {
  admixSiberiaQuestionnaireConfig,
  admixSiberiaQuestionnaireQuestions,
} from './admix-siberia-questionnaire-config';

const { Title, Paragraph, Text } = Typography;

/**
 * Questionnaire slides for Admix-Siberia
 * Опросник для определения стиля дизайна сайта
 */
export const admixSiberiaQuestionnaireSlides: SlideData[] = [
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
            Определение визуального стиля и позиционирования сайта
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
          {formatDateForSlide(admixSiberiaQuestionnaireCreatedAt)}
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
            Установлено, что требуется{' '}
            <Text strong>не шаблонный, а кастомный</Text> сайт. Для создания
            решения, максимально соответствующего требованиям, необходимо
            определить стиль дизайна, который будет максимально соответствовать
            ожиданиям заказчика и позиционированию компании.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Что мы получим в результате?
          </Title>
          <List
            size="small"
            dataSource={[
              'Чёткое понимание желаемого визуального стиля',
              'Определение цветовой палитры, соответствующей бренду',
              'Понимание эмоционального восприятия, которое должен вызывать сайт',
              'Основа для разработки уникального дизайна',
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
    id: 'design-q1-associations',
    header: 'Вопрос 1: Ассоциации с брендом',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <FileTextOutlined style={{ marginRight: 8 }} />
              1. Ассоциации с брендом
            </Title>
            <Paragraph style={{ fontSize: '16px', marginBottom: '16px' }}>
              <Text strong>
                С чем должно ассоциироваться название "Адмикс-Сибирь" у клиентов
                компании?
              </Text>
            </Paragraph>
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
    id: 'design-q2-visual-style',
    header: 'Вопрос 2: Визуальный стиль',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <FileTextOutlined style={{ marginRight: 8 }} />
              2. Визуальный стиль
            </Title>
            <Paragraph style={{ fontSize: '16px', marginBottom: '16px' }}>
              <Text strong>
                Какой визуальный стиль предпочтителен для представления
                продукции компании?
              </Text>
            </Paragraph>
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
    id: 'design-q3-color-palette',
    header: 'Вопрос 3: Цветовая палитра',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <FileTextOutlined style={{ marginRight: 8 }} />
              3. Цветовая палитра
            </Title>
            <Paragraph style={{ fontSize: '16px', marginBottom: '16px' }}>
              <Text strong>
                Какая цветовая палитра лучше отражает компанию?
              </Text>
            </Paragraph>
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
    id: 'design-q4-emotions',
    header: 'Вопрос 4: Эмоциональное восприятие',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <FileTextOutlined style={{ marginRight: 8 }} />
              4. Эмоциональное восприятие
            </Title>
            <Paragraph style={{ fontSize: '16px', marginBottom: '16px' }}>
              <Text strong>
                Какие эмоции должен вызывать сайт у посетителя при первом
                знакомстве?
              </Text>
            </Paragraph>
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
    id: 'review',
    header: 'Проверка ответов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <QuestionnaireCardWrapper>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              <RocketOutlined style={{ marginRight: 8 }} />
              Проверьте ваши ответы
            </Title>
            <Paragraph>
              Пожалуйста, проверьте все ответы перед отправкой. После отправки
              вы сможете просмотреть результаты.
            </Paragraph>
            <QuestionnaireReview
              questions={admixSiberiaQuestionnaireQuestions}
              filterQuestions={q => q.section.startsWith('design-')}
              title="Определение стиля дизайна"
              successMessage="Ваши ответы по стилю дизайна успешно отправлены на сервер. Продолжите просмотр презентации для ознакомления с вариантами реализации."
              emptyMessage="Вы еще не заполнили ни одного вопроса. Вернитесь к предыдущим слайдам и заполните форму."
              storageKey={admixSiberiaQuestionnaireConfig.storageKey}
              apiUrl={admixSiberiaQuestionnaireConfig.apiUrl}
            />
          </Card>
        </QuestionnaireCardWrapper>
      </Space>
    ),
  },
];
