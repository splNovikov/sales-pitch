import { Card, Table, Typography } from 'antd';
import type {
  Column,
  Phase,
} from '~features/tatneft/slides/components/types.ts';

const { Title, Text } = Typography;

const columns: Column[] = [
  { title: 'Роль', dataIndex: 'role', key: 'role' },
  {
    title: 'Часов',
    dataIndex: 'hours',
    key: 'hours',
    width: 90,
    align: 'right',
  },
  {
    title: 'Стоимость (с НДС)',
    dataIndex: 'cost',
    key: 'cost',
    width: 240,
    align: 'right',
    render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
  },
];

type TableWrapperProps = {
  phase: Phase;
};

const getColumns = (firstColumnHeader: string, columns: Column[]): Column[] => {
  const [firstCol, ...cols] = columns;

  return [{ title: firstColumnHeader, ...firstCol }, ...cols];
};

export const TableWrapper = ({
  phase: { firstColumnHeader, title, dataSource, summary },
}: TableWrapperProps) => {
  const cols = firstColumnHeader
    ? getColumns(firstColumnHeader, columns)
    : columns;

  return (
    <Card>
      <Title level={5} style={{ marginTop: 0 }}>
        {title}
      </Title>
      <Table
        size="small"
        pagination={false}
        dataSource={dataSource}
        columns={cols}
        summary={() => (
          <Table.Summary>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>
                <Text strong>{summary.title}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} align="right">
                <Text strong>{summary.hours}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} align="right">
                <Text strong>{summary.cost}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </Card>
  );
};
