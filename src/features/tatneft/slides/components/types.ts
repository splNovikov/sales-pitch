import { type JSX } from 'react';

export type Column = {
  title?: string;
  dataIndex: string;
  key: string;
  width?: number;
  align?: string;
  render?: (v: string) => JSX.Element;
};

export type DataSource = {
  key: string,
  role: string,
  hours: number,
  cost: string,
}

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
