import { useEffect } from 'react';
import { Form, Input, Typography } from 'antd';
import type { Question } from './questionnaire.types';
import {
  getQuestionnaireAnswers,
  saveQuestionnaireAnswers,
} from './questionnaire-storage';

const { Text } = Typography;
const { TextArea } = Input;

export interface QuestionnaireSectionFormProps {
  /**
   * Questions for this section
   */
  questions: Question[];
  /**
   * Section ID to filter questions
   */
  sectionId: string;
  /**
   * Storage key for localStorage
   */
  storageKey: string;
}

/**
 * Form component for a single questionnaire section
 * Automatically saves answers to localStorage
 */
export function QuestionnaireSectionForm({
  questions,
  sectionId,
  storageKey,
}: QuestionnaireSectionFormProps) {
  const [form] = Form.useForm();

  // Get questions for this section
  const sectionQuestions = questions.filter(q => q.section === sectionId);

  // Load saved answers from localStorage
  useEffect(() => {
    try {
      const savedAnswers = getQuestionnaireAnswers(storageKey);
      const sectionAnswers: Record<string, string> = {};
      sectionQuestions.forEach(question => {
        if (savedAnswers[question.questionId]) {
          sectionAnswers[question.questionId] =
            savedAnswers[question.questionId];
        }
      });
      if (Object.keys(sectionAnswers).length > 0) {
        form.setFieldsValue(sectionAnswers);
      }
    } catch (error) {
      console.error('Error loading saved answers:', error);
    }
  }, [form, sectionId, sectionQuestions, storageKey]);

  // Save answers to localStorage on change
  const handleValuesChange = () => {
    try {
      const values = form.getFieldsValue();
      const allAnswers = getQuestionnaireAnswers(storageKey);

      // Update only answers for current section
      sectionQuestions.forEach(question => {
        const value = values[question.questionId]?.trim();
        if (value) {
          allAnswers[question.questionId] = value;
        } else {
          delete allAnswers[question.questionId];
        }
      });

      saveQuestionnaireAnswers(storageKey, allAnswers);
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
