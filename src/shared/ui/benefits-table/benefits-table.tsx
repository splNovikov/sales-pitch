import { Table, Typography } from 'antd';
import type { TableProps } from 'antd';

const { Text } = Typography;

export interface BenefitRow {
  /**
   * Unique key for the row
   */
  key: string;
  /**
   * The advantage/benefit description
   */
  advantage: string;
  /**
   * The result/outcome of the advantage
   */
  result: string;
}

export interface BenefitsTableProps {
  /**
   * Array of benefit rows to display
   */
  benefits: BenefitRow[];
  /**
   * Column title for advantages (default: "Преимущество")
   */
  advantageTitle?: string;
  /**
   * Column title for results (default: "Результат")
   */
  resultTitle?: string;
  /**
   * Width percentage for advantage column (default: "50%")
   */
  advantageWidth?: string;
  /**
   * Width percentage for result column (default: "50%")
   */
  resultWidth?: string;
  /**
   * Additional table props to pass through
   */
  tableProps?: Omit<TableProps<BenefitRow>, 'dataSource' | 'columns'>;
}

/**
 * Reusable benefits table component with consistent two-column layout
 * Commonly used for displaying advantages and their results/outcomes
 */
export function BenefitsTable({
  benefits,
  advantageTitle = 'Преимущество',
  resultTitle = 'Результат',
  advantageWidth = '50%',
  resultWidth = '50%',
  tableProps,
}: BenefitsTableProps) {
  return (
    <Table
      dataSource={benefits}
      columns={[
        {
          title: advantageTitle,
          dataIndex: 'advantage',
          key: 'advantage',
          width: advantageWidth,
        },
        {
          title: resultTitle,
          dataIndex: 'result',
          key: 'result',
          width: resultWidth,
          render: text => <Text strong>{text}</Text>,
        },
      ]}
      pagination={false}
      size="small"
      {...tableProps}
    />
  );
}
