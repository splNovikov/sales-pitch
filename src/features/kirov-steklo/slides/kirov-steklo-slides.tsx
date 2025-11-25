import { Typography, List, Space, Divider } from 'antd';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for Kirov Steklo presentation
 * Based on documentation in features/kirov-steklo/docs
 */
export const kirovStekloSlides: SlideData[] = [
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
          <Title level={2} style={{ margin: 0, fontWeight: 500 }}>
            Производственная компания Марата Гайнуловича
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-lg)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Производство зеркал и стекол под индивидуальные размеры
          </Paragraph>
          <Link
            href="https://kirovsteklo.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 'var(--app-font-size-lg)' }}
          >
            kirovsteklo.ru
          </Link>
        </Space>
      </Space>
    ),
  },
  {
    id: 'problem',
    header: 'Проблематика',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={3}>Критические проблемы текущего состояния</Title>
          <List
            size="large"
            dataSource={[
              {
                title: 'Заявки приходят в разрозненном виде',
                description:
                  'Заявки поступают в свободной форме (текст, голос, фото). Нет цели жестко формализировать заявку на входе, чтобы не снижать количество заявок. Требуется гибкая система распознавания и обработки неформализованных заявок',
              },
              {
                title: 'Отсутствие централизованной IT-системы',
                description:
                  'Весь учет ведется в электронных таблицах. Нет единой системы управления производством. Электронные таблицы не справляются с масштабом операций',
              },
              {
                title: 'Проблемы с Битрикс24',
                description:
                  'Система используется, но не выполняет основные задачи. Плохо справляется с отслеживанием статусов заявок. Не обеспечивает контроль прохождения производственного цикла',
              },
              {
                title: 'Отсутствие прозрачности процессов',
                description:
                  'Руководство не имеет четкого представления о производственных процессах. Нет возможности оперативного мониторинга. Сложно контролировать загрузку производства',
              },
              {
                title: 'Разрозненные каналы коммуникации',
                description:
                  'Множество каналов приема заявок не интегрированы между собой. Отсутствует единая точка входа для заказов. Нет автоматизированного информирования',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<Text strong>{item.title}</Text>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </Space>
    ),
  },
  {
    id: 'goal',
    header: 'Главная цель',
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
          level={2}
          style={{
            textAlign: 'center',
            fontWeight: 400,
            maxWidth: '800px',
            margin: 0,
          }}
        >
          Создание единой IT-системы для полного цикла управления заказами от
          приема заявки до выдачи готовой продукции с полным отказом от
          электронных таблиц
        </Title>
      </Space>
    ),
  },
];
