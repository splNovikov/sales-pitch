import { PhasesPricingTable } from '~features/tatneft/slides/components/PhasesPricingTable.tsx';
import type { Phase } from '~features/tatneft/slides/components/types.ts';

const dataLakeDB: Phase = {
  title: 'Построение и наполнение единой БД',
  dataSource: [
    {
      key: '1',
      role: 'Архитектор решений',
      hours: 246,
      cost: '2 832 875 ₽',
    },
    {
      key: '2',
      role: 'Ведущий разработчик алгоритмов',
      hours: 492,
      cost: '5 261 054 ₽',
    },
    {
      key: '3',
      role: 'Старший инженер данных',
      hours: 984,
      cost: '8 093 928 ₽',
    },
    {
      key: '4',
      role: 'Старший DevOps-инженер',
      hours: 984,
      cost: '8 093 928 ₽',
    },
    {
      key: '5',
      role: 'Руководитель проектов',
      hours: 492,
      cost: '3 237 572 ₽',
    },
    {
      key: '6',
      role: 'Аналитик предметной области',
      hours: 492,
      cost: '0',
    },
  ],

  summary: {
    title: 'Итого по фазе 2',
    hours: 3690,
    cost: '27 519 358 ₽',
  },
};

const dataLakeAccum: Phase = {
  title: 'Накопление и анализ данных',
  dataSource: [
    {
      key: '1',
      role: 'Архитектор решений',
      hours: 246,
      cost: '2 072 836 ₽',
    },
    {
      key: '2',
      role: 'Ведущий разработчик алгоритмов',
      hours: 492,
      cost: '3 849 552 ₽',
    },
    {
      key: '3',
      role: 'Старший инженер данных',
      hours: 984,
      cost: '5 922 386 ₽',
    },
    {
      key: '4',
      role: 'Разработчик алгоритмов',
      hours: 492,
      cost: '2 961 194 ₽',
    },
    {
      key: '5',
      role: 'Руководитель проектов',
      hours: 492,
      cost: '2 368 955 ₽',
    },
    {
      key: '6',
      role: 'Старший DevOps-инженер',
      hours: 492,
      cost: '2 961 194 ₽',
    },
    {
      key: '7',
      role: 'Аналитик предметной области',
      hours: 492,
      cost: '0',
    },
  ],

  summary: {
    title: 'Итого по фазе 3',
    hours: 3690,
    cost: '20 136 117 ₽',
  },
};

const dataLakeTotal: Phase = {
  firstColumnHeader: 'Фаза',
  title: 'Итого по Data Lake',
  dataSource: [
    {
      key: '1',
      role: dataLakeDB.title,
      hours: dataLakeDB.summary.hours,
      cost: dataLakeDB.summary.cost,
    },
    {
      key: '2',
      role: dataLakeAccum.title,
      hours: dataLakeAccum.summary.hours,
      cost: dataLakeAccum.summary.cost,
    },
  ],
  summary: {
    title: 'Итого по фазе 2 + 3',
    hours: dataLakeDB.summary.hours + dataLakeAccum.summary.hours,
    cost: '47 655 475 ₽',
  },
};

export const DataLakeRolesCostAll = () => {
  return (
    <PhasesPricingTable phases={[dataLakeDB, dataLakeAccum, dataLakeTotal]} />
  );
};

export const DataLakeRolesCostDB = () => {
  return <PhasesPricingTable phases={[dataLakeDB]} />;
};

export const DataLakeRolesCostAccum = () => {
  return <PhasesPricingTable phases={[dataLakeAccum]} />;
};

export const DataLakeRolesCostTotal = () => {
  return <PhasesPricingTable phases={[dataLakeTotal]} />;
};
