import { Typography, List, Space } from 'antd';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Kirov Steklo presentation
 * Based on documentation in features/kirov-steklo/docs
 */
export const kirovStekloSlides: SlideData[] = [
  {
    id: 'problem',
    header: 'Проблематика',
    content: (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <List
            size="large"
            dataSource={[
              'Отсутствие централизованной IT-системы — весь учет в электронных таблицах',
              'Битрикс24 не справляется с задачами производственного учета',
              'Отсутствие прозрачности процессов для руководства',
              'Разрозненные каналы коммуникации без интеграции',
            ]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>

        <div>
          <Title level={3}>Главная цель</Title>
          <Paragraph>
            <Text strong>
              Создание единой IT-системы для полного цикла управления заказами
              от приема заявки до выдачи готовой продукции с полным отказом от
              электронных таблиц
            </Text>
          </Paragraph>
        </div>
      </Space>
    ),
  },
];

