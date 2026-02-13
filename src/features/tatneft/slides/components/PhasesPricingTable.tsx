import { Space } from 'antd';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { TableWrapper } from '~features/tatneft/slides/components/TableWrapper.tsx';
import type { Phase } from '~features/tatneft/slides/components/types.ts';

type PhasesPricingTableProps = {
  phases: Phase[];
};

export const PhasesPricingTable = ({ phases }: PhasesPricingTableProps) => {
  return (
    <ConstrainedContent>
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        {phases.map(phase => (
          <TableWrapper phase={phase} />
        ))}
      </Space>
    </ConstrainedContent>
  );
};
