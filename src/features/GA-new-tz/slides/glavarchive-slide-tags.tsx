import type { ReactNode } from 'react';
import { Tag } from 'antd';

/** Мессенджер MAX — единый бейдж для всех упоминаний канала */
export function GlavMaxTag() {
  return <Tag color="geekblue">MAX</Tag>;
}

/** Акцентные бейджи по темам презентации */
export function GlavAccentTag({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return <Tag color={color}>{children}</Tag>;
}
