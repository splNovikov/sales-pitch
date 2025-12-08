import { Card, Typography, List, Space, Tag, Button } from 'antd';
import { FileTextOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import type { QuestionnaireInfo } from '~shared/api/questionnaires.api';
import Logo from '~shared/ui/logo';

const { Title, Paragraph, Text } = Typography;

export default function QuestionnairesListPage() {
  const navigate = useNavigate();
  const questionnaires = useLoaderData() as QuestionnaireInfo[];

  return (
    <Card>
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={1} style={{ marginTop: 0 }}>
            Опросники <Logo />
          </Title>
          <Paragraph>
            Просмотр ответов на опросники по различным проблематикам
          </Paragraph>
        </div>

        <List
          dataSource={questionnaires}
          renderItem={questionnaire => (
            <List.Item
              style={{
                padding: '16px',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                marginBottom: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onClick={() => navigate(`/questionnaires/${questionnaire.slug}`)}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#52c41a';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(82, 196, 26, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#d9d9d9';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <List.Item.Meta
                avatar={
                  <FileTextOutlined
                    style={{ fontSize: '24px', color: '#52c41a' }}
                  />
                }
                title={
                  <Space>
                    <Text strong style={{ fontSize: '16px' }}>
                      {questionnaire.title}
                    </Text>
                    {questionnaire.submissionsCount !== undefined && (
                      <Tag color="green">
                        {questionnaire.submissionsCount} ответов
                      </Tag>
                    )}
                  </Space>
                }
                description={
                  <Paragraph type="secondary" style={{ marginBottom: 0 }}>
                    {questionnaire.description || 'Опросник без описания'}
                  </Paragraph>
                }
              />
              <Button
                type="text"
                icon={<RightOutlined />}
                onClick={e => {
                  e.stopPropagation();
                  navigate(`/questionnaires/${questionnaire.slug}`);
                }}
              />
            </List.Item>
          )}
        />
      </Space>
    </Card>
  );
}

