import { useEffect } from 'react';
import { Form, Input, Typography } from 'antd';
import { niteosQuestionnaireQuestions } from './questionnaire-utils';

const { Text } = Typography;
const { TextArea } = Input;

const STORAGE_KEY = 'niteos-questionnaire-answers';

interface QuestionnaireSectionFormProps {
  sectionId: string;
}

/**
 * Form component for a single questionnaire section
 * Automatically saves answers to localStorage
 */
export function QuestionnaireSectionForm({
  sectionId,
}: QuestionnaireSectionFormProps) {
  const [form] = Form.useForm();

  // Get questions for this section
  const sectionQuestions = niteosQuestionnaireQuestions.filter(
    q => q.section === sectionId
  );

  // Load saved answers from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const answers = JSON.parse(saved);
        const sectionAnswers: Record<string, string> = {};
        sectionQuestions.forEach(question => {
          if (answers[question.questionId]) {
            sectionAnswers[question.questionId] = answers[question.questionId];
          }
        });
        if (Object.keys(sectionAnswers).length > 0) {
          form.setFieldsValue(sectionAnswers);
        }
      }
    } catch (error) {
      console.error('Error loading saved answers:', error);
    }
  }, [form, sectionId, sectionQuestions]);

  // Save answers to localStorage on change
  const handleValuesChange = () => {
    try {
      const values = form.getFieldsValue();
      const saved = localStorage.getItem(STORAGE_KEY);
      const allAnswers = saved ? JSON.parse(saved) : {};
      
      // Update only answers for current section
      sectionQuestions.forEach(question => {
        const value = values[question.questionId]?.trim();
        if (value) {
          allAnswers[question.questionId] = value;
        } else {
          delete allAnswers[question.questionId];
        }
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(allAnswers));
    } catch (error) {
      console.error('Error saving answers:', error);
    }
  };

  if (sectionQuestions.length === 0) {
    return null;
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      autoComplete="off"
    >
      {sectionQuestions.map(question => (
        <Form.Item
          key={question.questionId}
          name={question.questionId}
          label={
            <Text>
              <Text strong>{question.order}.</Text> {question.questionText}
            </Text>
          }
        >
          <TextArea
            rows={3}
            placeholder="Введите ваш ответ..."
            showCount
            maxLength={2000}
          />
        </Form.Item>
      ))}
    </Form>
  );
}

/**
 * Get all saved answers from localStorage
 */
export function getAllSavedAnswers(): Record<string, string> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Error loading saved answers:', error);
    return {};
  }
}

/**
 * Clear all saved answers from localStorage
 */
export function clearSavedAnswers(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing saved answers:', error);
  }
}

