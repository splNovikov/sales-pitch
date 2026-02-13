import { PhasesPricingTable } from '~features/tatneft/slides/components/PhasesPricingTable.tsx';
import type { Phase } from '~features/tatneft/slides/components/types.ts';

const subsystem: Phase = {
  title: 'Фаза 4: Построение подсистемы поиска отклонений',
  dataSource: [
    {
      key: '1',
      role: 'Архитектор решений',
      hours: 656,
      cost: '8 291 845 ₽',
    },
    {
      key: '2',
      role: 'Ведущий разработчик алгоритмов',
      hours: 656,
      cost: '7 699 570 ₽',
    },
    {
      key: '3',
      role: 'Старший инженер данных',
      hours: 1312,
      cost: '11 845 493 ₽',
    },
    {
      key: '4',
      role: 'Разработчик алгоритмов',
      hours: 656,
      cost: '5 922 747 ₽',
    },
    {
      key: '5',
      role: 'Руководитель проектов',
      hours: 656,
      cost: '4 738 198 ₽',
    },
    {
      key: '6',
      role: 'Старший DevOps-инженер',
      hours: 656,
      cost: '5 922 747 ₽',
    },
    {
      key: '7',
      role: 'Аналитик предметной области',
      hours: 656,
      cost: '0',
    },
    {
      key: '8',
      role: 'Бэкенд-разработчик',
      hours: 656,
      cost: '5 922 747 ₽',
    },
    {
      key: '9',
      role: 'Фронтенд-разработчик',
      hours: 656,
      cost: '5 922 747 ₽',
    },
    {
      key: '10',
      role: 'UX-инженер',
      hours: 656,
      cost: '5 330 472 ₽',
    },
    {
      key: '11',
      role: 'QA-инженер',
      hours: 656,
      cost: '4 738 198 ₽',
    },
    {
      key: '12',
      role: 'Бизнес-аналитик',
      hours: 328,
      cost: '1 776 824 ₽',
    },
  ],

  summary: {
    title: 'Итого по фазе 4',
    hours: 6888,
    cost: '68 111 586 ₽',
  },
};

const checkUp: Phase = {
  title: 'Фаза 5: Проверка на исторических данных',
  dataSource: [
    {
      key: '1',
      role: 'Архитектор решений',
      hours: 82,
      cost: '791 772 ₽',
    },
    {
      key: '2',
      role: 'Ведущий разработчик алгоритмов',
      hours: 164,
      cost: '1 470 434 ₽',
    },
    {
      key: '3',
      role: 'Руководитель проектов',
      hours: 164,
      cost: '904 882 ₽',
    },
    {
      key: '4',
      role: 'Старший DevOps-инженер',
      hours: 82,
      cost: '565 552 ₽',
    },
    {
      key: '5',
      role: 'Аналитик предметной области',
      hours: 164,
      cost: '0',
    },
    { key: '6', role: 'QA-инженер', hours: 82, cost: '452 441 ₽' },
    {
      key: '7',
      role: 'Бизнес-аналитик',
      hours: 82,
      cost: '339 331 ₽',
    },
  ],

  summary: {
    title: 'Итого по фазе 5',
    hours: 820,
    cost: '4 524 412 ₽',
  },
};

const tuning: Phase = {
  title: 'Фаза 6: Настройка по результатам проверки',
  dataSource: [
    {
      key: '1',
      role: 'Архитектор решений',
      hours: 164,
      cost: '1 830 872 ₽',
    },
    {
      key: '2',
      role: 'Ведущий разработчик алгоритмов',
      hours: 328,
      cost: '3 400 191 ₽',
    },
    {
      key: '3',
      role: 'Старший инженер данных',
      hours: 328,
      cost: '2 615 532 ₽',
    },
    {
      key: '4',
      role: 'Разработчик алгоритмов',
      hours: 328,
      cost: '2 615 532 ₽',
    },
    {
      key: '5',
      role: 'Руководитель проектов',
      hours: 328,
      cost: '2 092 425 ₽',
    },
    {
      key: '6',
      role: 'Старший DevOps-инженер',
      hours: 164,
      cost: '1 307 766 ₽',
    },
    {
      key: '7',
      role: 'Аналитик предметной области',
      hours: 328,
      cost: '0',
    },
    {
      key: '8',
      role: 'QA-инженер',
      hours: 164,
      cost: '1 046 213 ₽',
    },
  ],

  summary: {
    title: 'Итого по фазе 6',
    hours: 2132,
    cost: '14 908 531 ₽',
  },
};

const systemTotal: Phase = {
  firstColumnHeader: 'Фаза',
  title: 'Итого по подсистеме предупреждений',
  dataSource: [
    {
      key: '1',
      role: subsystem.title,
      hours: subsystem.summary.hours,
      cost: subsystem.summary.cost,
    },
    {
      key: '2',
      role: checkUp.title,
      hours: checkUp.summary.hours,
      cost: checkUp.summary.cost,
    },
    {
      key: '3',
      role: tuning.title,
      hours: tuning.summary.hours,
      cost: tuning.summary.cost,
    },
  ],
  summary: {
    title: 'Итого по фазе 5 + 6 + 7',
    hours:
      subsystem.summary.hours + checkUp.summary.hours + tuning.summary.hours,
    cost: '87 544 529 ₽',
  },
};

export const AnalyticsRolesCostAll = () => {
  return (
    <PhasesPricingTable phases={[subsystem, checkUp, tuning, systemTotal]} />
  );
};

export const AnalyticsRolesCostSubsystem = () => {
  return <PhasesPricingTable phases={[subsystem]} />;
};

export const AnalyticsRolesCostCheckup = () => {
  return <PhasesPricingTable phases={[checkUp]} />;
};

export const AnalyticsRolesCostTuning = () => {
  return <PhasesPricingTable phases={[tuning]} />;
};

export const AnalyticsRolesCostSubsystemTotal = () => {
  return <PhasesPricingTable phases={[systemTotal]} />;
};
