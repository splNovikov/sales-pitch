import { PhasesPricingTable } from '~features/tatneft/slides/components/PhasesPricingTable.tsx';
import type { Phase } from '~features/tatneft/slides/components/types.ts';

const impl: Phase = {
  title: 'Внедрение системы (Фаза 8)',
  dataSource: [
    {
      key: '1',
      role: 'Архитектор решений',
      hours: 410,
      cost: '4 803 028 ₽',
    },
    {
      key: '2',
      role: 'Ведущий разработчик алгоритмов',
      hours: 820,
      cost: '8 919 909 ₽',
    },
    {
      key: '3',
      role: 'Старший инженер данных',
      hours: 1640,
      cost: '13 722 938 ₽',
    },
    {
      key: '4',
      role: 'Разработчик алгоритмов',
      hours: 820,
      cost: '6 861 469 ₽',
    },
    {
      key: '5',
      role: 'Руководитель проектов',
      hours: 820,
      cost: '5 489 176 ₽',
    },
    {
      key: '6',
      role: 'Старший DevOps-инженер',
      hours: 820,
      cost: '6 861 469 ₽',
    },
    {
      key: '7',
      role: 'Аналитик предметной области',
      hours: 820,
      cost: '0',
    },
    {
      key: '8',
      role: 'QA-инженер',
      hours: 820,
      cost: '5 489 176 ₽',
    },
  ],

  summary: {
    title: 'Итого по фазе 8',
    hours: 5330,
    cost: '52 147 165 ₽',
  },
};

const cross: Phase = {
  title: 'Приёмка системы (Фаза 9)',
  dataSource: [
    {
      key: '1',
      role: 'Архитектор решений',
      hours: 82,
      cost: '1 324 974 ₽',
    },
    {
      key: '2',
      role: 'Ведущий разработчик алгоритмов',
      hours: 82,
      cost: '1 230 332 ₽',
    },
    {
      key: '3',
      role: 'Старший инженер данных',
      hours: 82,
      cost: '946 409 ₽',
    },
    {
      key: '4',
      role: 'Руководитель проектов',
      hours: 164,
      cost: '1 514 255 ₽',
    },
    {
      key: '5',
      role: 'Старший DevOps-инженер',
      hours: 82,
      cost: '946 409 ₽',
    },
    {
      key: '6',
      role: 'Аналитик предметной области',
      hours: 164,
      cost: '0',
    },
    { key: '7', role: 'QA-инженер', hours: 82, cost: '757 128 ₽' },
    {
      key: '8',
      role: 'Бизнес-аналитик',
      hours: 164,
      cost: '1 135 691 ₽',
    },
  ],

  summary: {
    title: 'Итого по фазе 9',
    hours: 902,
    cost: '7 855 199 ₽',
  },
};

const implCrossTotal: Phase = {
  firstColumnHeader: 'Фаза',
  title: 'Итого по этапам внедрение, приёмка, сопровождение',
  dataSource: [
    {
      key: '1',
      role: impl.title,
      hours: impl.summary.hours,
      cost: impl.summary.cost,
    },
    {
      key: '2',
      role: cross.title,
      hours: cross.summary.hours,
      cost: cross.summary.cost,
    },
  ],
  summary: {
    title: 'Итого по фазе 8 + 9',
    hours: impl.summary.hours + cross.summary.hours,
    cost: '60 002 364 ₽',
  },
};

export const ImplRolesCostAll = () => {
  return <PhasesPricingTable phases={[impl, cross, implCrossTotal]} />;
};

export const ImplRolesCostImpl = () => {
  return <PhasesPricingTable phases={[impl]} />;
};

export const ImplRolesCostACross = () => {
  return <PhasesPricingTable phases={[cross]} />;
};

export const ImplRolesCostTotal = () => {
  return <PhasesPricingTable phases={[implCrossTotal]} />;
};
