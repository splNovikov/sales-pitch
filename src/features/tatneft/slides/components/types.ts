import type { TableColumnType } from 'antd';

export type DataSource = {
  key: string,
  role: string,
  hours: number,
  cost: string,
}

export type Column = TableColumnType<DataSource>;

export type Phase = {
  firstColumnHeader?: string;
  title: string;
  dataSource: DataSource[];
  summary: {
    title: string;
    hours: number;
    cost: string;
  };
};
