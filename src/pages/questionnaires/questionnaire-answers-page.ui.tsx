import {
  Card,
  Typography,
  List,
  Space,
  Tag,
  Button,
  Empty,
  Segmented,
} from 'antd';
import {
  ArrowLeftOutlined,
  FileTextOutlined,
  CalendarOutlined,
  UnorderedListOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useNavigate, useLoaderData } from 'react-router-dom';
import React from 'react';
import type {
  QuestionnaireSubmission,
  QuestionnaireAnswer,
} from '~shared/api/questionnaires.api';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const { Title, Text } = Typography;

type ViewMode = 'submissions' | 'questions';

interface GroupedByQuestion {
  questionId: string;
  questionText: string;
  answers: QuestionnaireAnswer[];
}

export default function QuestionnaireAnswersPage() {
  const navigate = useNavigate();
  const submissions = useLoaderData() as QuestionnaireSubmission[];
  const [viewMode, setViewMode] = React.useState<ViewMode>('questions');

  const formatDate = (dateString: string) => {
    try {
      return dayjs(dateString).locale('ru').format('DD MMMM YYYY, HH:mm');
    } catch {
      return dateString;
    }
  };

  // Group answers by question
  const groupedByQuestions = React.useMemo<GroupedByQuestion[]>(() => {
    const questionMap = new Map<string, GroupedByQuestion>();

    submissions.forEach(submission => {
      submission.answers.forEach(answer => {
        if (!questionMap.has(answer.questionId)) {
          questionMap.set(answer.questionId, {
            questionId: answer.questionId,
            questionText: answer.questionText,
            answers: [],
          });
        }
        questionMap.get(answer.questionId)!.answers.push(answer);
      });
    });

    return Array.from(questionMap.values()).sort((a, b) => {
      // Sort by questionId to maintain order
      return a.questionId.localeCompare(b.questionId);
    });
  }, [submissions]);

  if (!submissions || submissions.length === 0) {
    return (
      <Card>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/questionnaires')}
          >
            Назад к списку опросников
          </Button>
          <Empty
            description="Пока нет ответов на этот опросник"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </Space>
      </Card>
    );
  }

  return (
    <Card>
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/questionnaires')}
            style={{ marginBottom: 16 }}
          >
            Назад к списку опросников
          </Button>
          <Title level={2} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            {submissions[0]?.questionnaireTitle || 'Ответы на опросник'}
          </Title>
        </div>

        <Segmented
          options={[
            {
              label: (
                <Space>
                  <UnorderedListOutlined />
                  По отправкам
                </Space>
              ),
              value: 'submissions',
            },
            {
              label: (
                <Space>
                  <QuestionCircleOutlined />
                  По вопросам
                </Space>
              ),
              value: 'questions',
            },
          ]}
          value={viewMode}
          onChange={value => setViewMode(value as ViewMode)}
          block
          style={{ marginBottom: 16 }}
        />

        {viewMode === 'submissions' ? (
          <List
            dataSource={submissions}
            renderItem={(submission, index) => (
              <List.Item style={{ padding: 0, marginBottom: 12 }}>
                <Card
                  size="small"
                  style={{ width: '100%' }}
                  title={
                    <Space size="small">
                      <Tag color="blue" style={{ margin: 0 }}>
                        #{index + 1}
                      </Tag>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        <CalendarOutlined style={{ marginRight: 4 }} />
                        {formatDate(submission.submittedAt)}
                      </Text>
                      {submission.respondentEmail && (
                        <Text type="secondary" style={{ fontSize: '11px' }}>
                          • {submission.respondentEmail}
                        </Text>
                      )}
                    </Space>
                  }
                >
                  <List
                    size="small"
                    dataSource={submission.answers}
                    renderItem={(answer, answerIndex) => (
                      <List.Item
                        style={{
                          padding: '6px 0',
                          borderBottom:
                            answerIndex < submission.answers.length - 1
                              ? '1px solid #f0f0f0'
                              : 'none',
                        }}
                      >
                        <Space
                          direction="vertical"
                          size={2}
                          style={{ width: '100%' }}
                        >
                          <Text
                            type="secondary"
                            style={{ fontSize: '11px', fontWeight: 500 }}
                          >
                            {answer.questionText}
                          </Text>
                          <Text style={{ fontSize: '13px' }}>{answer.value}</Text>
                        </Space>
                      </List.Item>
                    )}
                  />
                </Card>
              </List.Item>
            )}
          />
        ) : (
          <List
            dataSource={groupedByQuestions}
            renderItem={(group, index) => (
              <List.Item style={{ padding: 0, marginBottom: 12 }}>
                <Card
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Space
                    direction="vertical"
                    size={8}
                    style={{ width: '100%' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Tag color="green" style={{ margin: 0, flexShrink: 0 }}>
                        #{index + 1}
                      </Tag>
                      <Text strong style={{ fontSize: '14px', flex: 1, wordBreak: 'break-word', whiteSpace: 'normal' }}>
                        {group.questionText}
                      </Text>
                    </div>
                    <List
                      size="small"
                      dataSource={group.answers}
                      renderItem={(answer, answerIndex) => (
                        <List.Item
                          style={{
                            padding: '8px 0',
                            borderBottom:
                              answerIndex < group.answers.length - 1
                                ? '1px solid #f0f0f0'
                                : 'none',
                          }}
                        >
                          <Space
                            direction="vertical"
                            size={2}
                            style={{ width: '100%' }}
                          >
                            <Text style={{ fontSize: '13px' }}>{answer.value}</Text>
                            <Text
                              type="secondary"
                              style={{ fontSize: '11px', lineHeight: 1.2 }}
                            >
                              {formatDate(answer.submittedAt)}
                              {answer.respondentEmail && (
                                <> • {answer.respondentEmail}</>
                              )}
                            </Text>
                          </Space>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Card>
              </List.Item>
            )}
          />
        )}
      </Space>
    </Card>
  );
}

