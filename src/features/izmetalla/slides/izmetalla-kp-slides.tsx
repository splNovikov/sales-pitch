import { Space, Typography, Card, Table } from 'antd';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { izmetallaKpCreatedAt } from './izmetalla-kp.meta';
import izmetallaLogo from './logo-izmetalla.png';

const { Title, Paragraph, Text } = Typography;

const OTHER_WORKS_DATA = [
  {
    key: 'a',
    work: 'Базовая СЕО-оптимизация',
    stage: 'Этап 2',
    cost: '25 000 ₽',
  },
  {
    key: 'b',
    work: 'Переход на NestJS, интеграция с бекендом',
    stage: 'Этап 2',
    cost: '180 000 ₽',
  },
  {
    key: 'c',
    work: 'Корзина, оформление заказа, отправка заявки',
    stage: 'Этап 3',
    cost: '120 000 ₽',
  },
  {
    key: 'd',
    work: 'Тестирование и стабилизация',
    stage: 'Этап 4',
    cost: '30 000 ₽',
  },
  {
    key: 'e',
    work: 'Приёмка и обучение',
    stage: 'Этап 5',
    cost: '0',
  },
];

const TOTAL_KP_DATA = [
  {
    key: '1',
    block: 'Отрисовка и интеграция фронтенда (остаток работ)',
    cost: '30 000 ₽',
  },
  {
    key: '2',
    block: 'Базовая СЕО-оптимизация',
    cost: '25 000 ₽',
  },
  {
    key: '3',
    block: 'Переход на NestJS, интеграция с бекендом',
    cost: '180 000 ₽',
  },
  {
    key: '4',
    block: 'Корзина, оформление заказа, отправка заявки',
    cost: '120 000 ₽',
  },
  {
    key: '5',
    block: 'Тестирование и стабилизация',
    cost: '30 000 ₽',
  },
  {
    key: '6',
    block: 'Приёмка и обучение',
    cost: '0',
  },
];

/**
 * Slides data for Izmetalla commercial proposal
 */
export const izmetallaKpSlides: SlideData[] = [
  // Slide 1: Title
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        logo={izmetallaLogo}
        logoAlt="Изметалла"
        logoMaxWidth={400}
        subtitle="Коммерческое предложение"
        createdAt={izmetallaKpCreatedAt}
      />
    ),
  },

  // Slide 2: Template presentation — section title
  {
    id: 'template-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Презентация шаблона"
        imageIndex={0}
      />
    ),
  },

  // Slide 3: Template placeholder 1
  {
    id: 'template-placeholder-1',
    header: 'Презентация шаблона',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <div
              style={{
                minHeight: 280,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--ant-color-fill-tertiary)',
                borderRadius: 8,
              }}
            >
              <Text type="secondary">
                Здесь будет скриншот / макет шаблона
              </Text>
            </div>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text type="secondary">Описание шаблона — placeholder</Text>
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 4: Template placeholder 2
  {
    id: 'template-placeholder-2',
    header: 'Презентация шаблона',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <div
              style={{
                minHeight: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--ant-color-fill-tertiary)',
                borderRadius: 8,
              }}
            >
              <Text type="secondary">
                Дополнительные макеты или элементы шаблона
              </Text>
            </div>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 5: KP pre-title
  {
    id: 'kp-pre-title',
    header: undefined,
    content: (
      <SectionTitleSlide
        title="Коммерческое предложение"
        imageIndex={1}
      />
    ),
  },

  // Slide 6: Frontend rendering and integration
  {
    id: 'frontend-integration',
    header: 'Отрисовка и интеграция фронтенда',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Текущий статус
            </Title>
            <Paragraph style={{ marginBottom: 12 }}>
              Полный объём работ по отрисовке и интеграции фронтенда оценивался
              в <Text strong>150 000 ₽</Text>.
            </Paragraph>
            <Paragraph style={{ marginBottom: 12 }}>
              На данный момент выполнено <Text strong>~80%</Text> работ.
              Осталось доработать:
            </Paragraph>
            <ul style={{ marginBottom: 0, paddingLeft: 20 }}>
              <li>Правки и доработки</li>
              <li>Адаптивная вёрстка</li>
            </ul>
            <Paragraph
              type="secondary"
              style={{ marginTop: 16, marginBottom: 0 }}
            >
              Оценка оставшихся работ: <Text strong>~30 000 ₽</Text>
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 7: Other works
  {
    id: 'other-works',
    header: 'Остальные работы',
    content: (
      <ConstrainedContent>
        <Card>
          <Table
            size="small"
            pagination={false}
            dataSource={OTHER_WORKS_DATA}
            columns={[
              { title: 'Работа', dataIndex: 'work', key: 'work' },
              {
                title: 'Этап',
                dataIndex: 'stage',
                key: 'stage',
                width: 100,
                align: 'center',
              },
              {
                title: 'Стоимость',
                dataIndex: 'cost',
                key: 'cost',
                width: 130,
                align: 'right',
                render: (v: string) => (
                  <Text strong={v !== '0'}>{v}</Text>
                ),
              },
            ]}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 8: Total KP (without deep SEO)
  {
    id: 'total-kp',
    header: 'Общая КП (без углублённого СЕО)',
    content: (
      <ConstrainedContent>
        <Card>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Paragraph style={{ marginBottom: 0 }}>
              Сводная стоимость проекта без углублённой СЕО-оптимизации:
            </Paragraph>
            <Table
              size="small"
              pagination={false}
              dataSource={TOTAL_KP_DATA}
              columns={[
                { title: 'Этап / блок', dataIndex: 'block', key: 'block' },
                {
                  title: 'Стоимость',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>385 000 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Space>
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 9: SEO collaboration (deep SEO)
  {
    id: 'seo-collaboration',
    header: 'Сотрудничество по углублённому СЕО',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Углублённая СЕО-оптимизация
            </Title>
            <Paragraph style={{ marginBottom: 12 }}>
              Отдельное направление сотрудничества по продвижению сайта в
              поисковых системах.
            </Paragraph>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  item: 'Единоразовая настройка и аудит',
                  cost: '100 000 ₽',
                },
                {
                  key: '2',
                  item: 'Ежемесячное сопровождение',
                  cost: '75 000 ₽ / мес',
                },
              ]}
              columns={[
                { title: 'Услуга', dataIndex: 'item', key: 'item' },
                {
                  title: 'Стоимость',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 150,
                  align: 'right',
                  render: (v: string) => <Text strong>{v}</Text>,
                },
              ]}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 10: Final
  {
    id: 'thank-you',
    header: undefined,
    content: <MainTitleSlide title="Благодарим за внимание" />,
  },
];
