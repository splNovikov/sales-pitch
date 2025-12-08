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
import { getAllSavedAnswers } from './questionnaire-section-form';
import { niteosQuestionnaireQuestions } from './questionnaire-utils';

const { Title, Paragraph, Text } = Typography;

const QUESTIONNAIRE_SLUG = 'niteos-quiz';
const API_URL = `https://strapi-be.proxima24.ru/api/questionnaires/${QUESTIONNAIRE_SLUG}/answers`;

interface Answer {
  questionId: string;
  questionText: string;
  value: string;
}

interface FormData {
  answers: Answer[];
  metadata: {
    respondentEmail: string;
  };
}

/**
 * Component for reviewing and submitting answers for Problem 1 (Request Distribution)
 */
export function QuestionnaireReviewProblem1() {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  // Get all questions for Problem 1
  const problem1Questions = niteosQuestionnaireQuestions.filter(q =>
    q.section.startsWith('problem-1-')
  );

  // Get saved answers
  const savedAnswers = getAllSavedAnswers();

  // Filter answers for Problem 1 only
  const problem1Answers: Answer[] = problem1Questions
    .map(question => {
      const value = savedAnswers[question.questionId]?.trim();
      if (!value) return null;
      return {
        questionId: question.questionId,
        questionText: question.questionText,
        value: value,
      };
    })
    .filter((answer): answer is Answer => answer !== null);

  const handleSubmit = async () => {
    if (problem1Answers.length === 0) {
      message.warning('Нет ответов для отправки');
      return;
    }

    setLoading(true);
    try {
      const formData: FormData = {
        answers: problem1Answers,
        metadata: {
          respondentEmail: '',
        },
      };

      // Log for debugging
      console.log('Отправка данных на бекенд:', {
        url: API_URL,
        answersCount: problem1Answers.length,
        data: formData,
      });

      message.info(`Отправка ${problem1Answers.length} ответов на сервер...`);

      const response = await fetch(API_URL, {
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
        `Ответы успешно отправлены! Отправлено ${problem1Answers.length} ответов.`
      );

      // Clear only Problem 1 answers from localStorage
      const allAnswers = getAllSavedAnswers();
      problem1Questions.forEach(question => {
        delete allAnswers[question.questionId];
      });
      localStorage.setItem(
        'niteos-questionnaire-answers',
        JSON.stringify(allAnswers)
      );

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
          <Paragraph>
            Ваши ответы по теме "Распределение заявок" успешно отправлены на
            сервер.
          </Paragraph>
          <Paragraph type="secondary">
            Теперь вы можете перейти к следующей теме.
          </Paragraph>
        </Space>
      </Card>
    );
  }

  if (problem1Answers.length === 0) {
    return (
      <Card>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            Проверка ответов: Распределение заявок
          </Title>
          <Paragraph>
            Вы еще не заполнили ни одного вопроса по теме "Распределение
            заявок". Вернитесь к предыдущим слайдам и заполните форму.
          </Paragraph>
        </Space>
      </Card>
    );
  }

  return (
    <Card>
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={4} style={{ marginTop: 0 }}>
            Проверка ответов: Распределение заявок
          </Title>
          <Paragraph>
            Проверьте ваши ответы перед отправкой. Всего заполнено вопросов:{' '}
            <Text strong>{problem1Answers.length}</Text> из{' '}
            {problem1Questions.length}
          </Paragraph>
        </div>

        <Divider />

        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          {problem1Answers.map((answer, index) => (
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
          Отправить ответы ({problem1Answers.length})
        </Button>
      </Space>
    </Card>
  );
}
