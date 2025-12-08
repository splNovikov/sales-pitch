import React from 'react';
import {
  Card,
  Space,
  Typography,
  Button,
  Descriptions,
  Divider,
  message,
} from 'antd';
import { SendOutlined, CheckCircleOutlined } from '@ant-design/icons';
import type {
  Question,
  Answer,
  QuestionnaireFormData,
} from './questionnaire.types';
import {
  getQuestionnaireAnswers,
  clearQuestionnaireAnswers,
} from './questionnaire-storage';

const { Title, Paragraph, Text } = Typography;

export interface QuestionnaireReviewProps {
  /**
   * All questions
   */
  questions: Question[];
  /**
   * Function to filter questions for this review section
   */
  filterQuestions: (question: Question) => boolean;
  /**
   * Title for the review section
   */
  title: string;
  /**
   * Success message after submission
   */
  successMessage: string;
  /**
   * Message when no answers are filled
   */
  emptyMessage: string;
  /**
   * Storage key for localStorage
   */
  storageKey: string;
  /**
   * API URL for submitting answers
   */
  apiUrl: string;
}

/**
 * Component for reviewing and submitting questionnaire answers
 */
export function QuestionnaireReview({
  questions,
  filterQuestions,
  title,
  successMessage,
  emptyMessage,
  storageKey,
  apiUrl,
}: QuestionnaireReviewProps) {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  // Get filtered questions
  const filteredQuestions = questions.filter(filterQuestions);

  // Get saved answers
  const savedAnswers = getQuestionnaireAnswers(storageKey);

  // Filter answers for this section only
  const sectionAnswers: Answer[] = filteredQuestions
    .map(question => {
      const savedValue = savedAnswers[question.questionId];
      const otherFieldName = `${question.questionId}_other`;
      const otherValue = savedAnswers[otherFieldName];
      
      if (!savedValue) return null;
      
      // Handle different question types
      let displayValue: string;
      if (question.type === 'checkbox') {
        try {
          const arrayValue = JSON.parse(savedValue);
          if (Array.isArray(arrayValue) && arrayValue.length > 0) {
            // Replace "__other__" with actual other value and get labels
            const processedArray = arrayValue
              .map(v => {
                if (v === '__other__' && otherValue) {
                  return otherValue;
                }
                // Try to find label for the value
                const option = question.options?.find(opt => opt.value === v);
                return option ? option.label : v;
              })
              .filter(v => v !== '__other__'); // Remove "__other__" if no otherValue
            displayValue = processedArray.length > 0 ? processedArray.join(', ') : '';
          } else {
            displayValue = String(savedValue);
          }
        } catch {
          displayValue = String(savedValue);
        }
        
        // Don't show if empty or only "__other__" without value
        if (!displayValue || displayValue.trim() === '') return null;
      } else if (question.type === 'radio') {
        if (savedValue === '__other__' && otherValue) {
          displayValue = otherValue;
        } else {
          // Try to find label for the value
          const option = question.options?.find(opt => opt.value === savedValue);
          displayValue = option ? option.label : String(savedValue).trim();
        }
      } else {
        displayValue = String(savedValue).trim();
      }
      
      if (!displayValue || displayValue === '__other__') return null;
      
      return {
        questionId: question.questionId,
        questionText: question.questionText,
        value: displayValue,
      };
    })
    .filter((answer): answer is Answer => answer !== null);

  const handleSubmit = async () => {
    if (sectionAnswers.length === 0) {
      message.warning('Нет ответов для отправки');
      return;
    }

    setLoading(true);
    try {
      const formData: QuestionnaireFormData = {
        answers: sectionAnswers,
        metadata: {
          respondentEmail: '',
        },
      };

      // Log for debugging
      console.log('Отправка данных на бекенд:', {
        url: apiUrl,
        answersCount: sectionAnswers.length,
        data: formData,
      });

      message.info(`Отправка ${sectionAnswers.length} ответов на сервер...`);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Ответ сервера:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Ошибка ответа сервера:', errorData);
        throw new Error(
          errorData.error?.message ||
            `Ошибка отправки: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json().catch(() => ({}));
      console.log('Успешный ответ сервера:', result);

      message.success(
        `Ответы успешно отправлены! Отправлено ${sectionAnswers.length} ответов.`
      );

      // Clear only answers for this section from localStorage
      const questionIds = filteredQuestions.map(q => q.questionId);
      clearQuestionnaireAnswers(storageKey, questionIds);

      setSubmitted(true);
    } catch (error) {
      console.error('Ошибка при отправке опросника:', error);
      message.error(
        error instanceof Error
          ? error.message
          : 'Произошла ошибка при отправке ответов. Пожалуйста, попробуйте позже.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card>
        <Space
          orientation="vertical"
          size="large"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
          <Title level={4} style={{ marginTop: 0 }}>
            Спасибо!
          </Title>
          <Paragraph>{successMessage}</Paragraph>
          <Paragraph type="secondary">
            Теперь вы можете перейти к следующей теме.
          </Paragraph>
        </Space>
      </Card>
    );
  }

  if (sectionAnswers.length === 0) {
    return (
      <Card>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            Проверка ответов: {title}
          </Title>
          <Paragraph>{emptyMessage}</Paragraph>
        </Space>
      </Card>
    );
  }

  return (
    <Card>
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={4} style={{ marginTop: 0 }}>
            Проверка ответов: {title}
          </Title>
          <Paragraph>
            Проверьте ваши ответы перед отправкой. Всего заполнено вопросов:{' '}
            <Text strong>{sectionAnswers.length}</Text> из{' '}
            {filteredQuestions.length}
          </Paragraph>
        </div>

        <Divider />

        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          {sectionAnswers.map((answer, index) => (
            <Card key={answer.questionId} size="small">
              <Descriptions
                column={1}
                size="small"
                labelStyle={{ fontWeight: 'bold', width: '200px' }}
              >
                <Descriptions.Item label={`Вопрос ${index + 1}`}>
                  {answer.questionText}
                </Descriptions.Item>
                <Descriptions.Item label="Ваш ответ">
                  <Text>{answer.value}</Text>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ))}
        </Space>

        <Divider />

        <Button
          type="primary"
          size="large"
          icon={<SendOutlined />}
          loading={loading}
          onClick={handleSubmit}
          block
        >
          Отправить ответы ({sectionAnswers.length})
        </Button>
      </Space>
    </Card>
  );
}
