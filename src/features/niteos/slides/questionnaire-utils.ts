/**
 * Utility functions for extracting questions from questionnaire slides
 */

import type { Question } from '~shared/ui/questionnaire';

export type { Question };

/**
 * Complete list of questions from niteos questionnaire
 * Extracted from niteos-questionnaire-slides.tsx
 */
export const niteosQuestionnaireQuestions: Question[] = [
  // Problem 1 - Process (11 questions)
  {
    questionId: 'problem-1-q1-process-1',
    questionText:
      'Как работает рандомайзер распределения заявок? Опишите механизм работы.',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 1,
  },
  {
    questionId: 'problem-1-q1-process-2',
    questionText:
      'В кого рандомайзер распределяет заявки? Сколько человек в пуле распределения? Какие у них должности и компетенции?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 2,
  },
  {
    questionId: 'problem-1-q1-process-3',
    questionText:
      'Сколько времени в среднем занимает распределение одной заявки через рандомайзер?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 3,
  },
  {
    questionId: 'problem-1-q1-process-4',
    questionText:
      'Какие каналы поступления заявок используются?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 4,
    type: 'checkbox',
    options: [
      { label: 'Сайт', value: 'site' },
      { label: 'Email', value: 'email' },
      { label: 'Телефон', value: 'phone' },
      { label: 'Мессенджеры', value: 'messengers' },
    ],
    allowOther: true,
  },
  {
    questionId: 'problem-1-q1-process-5',
    questionText: 'В каком формате приходят заявки?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 5,
    type: 'checkbox',
    options: [
      { label: 'Форма на сайте', value: 'site-form' },
      { label: 'Письмо', value: 'email' },
      { label: 'Звонок', value: 'call' },
      { label: 'Файл', value: 'file' },
    ],
    allowOther: true,
  },
  {
    questionId: 'problem-1-q1-process-6',
    questionText:
      'Есть ли единая точка входа для всех заявок или они приходят в разные системы?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 6,
    type: 'radio',
    options: [
      { label: 'Единая точка входа', value: 'single' },
      { label: 'Разные системы', value: 'multiple' },
      { label: 'Частично единая, частично разные', value: 'mixed' },
    ],
  },
  {
    questionId: 'problem-1-q1-process-7',
    questionText:
      'Что происходит с заявкой после распределения через рандомайзер? Опишите дальнейший процесс обработки.',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 7,
  },
  {
    questionId: 'problem-1-q1-process-8',
    questionText:
      'Какие статусы заявок существуют в системе? Перечислите все статусы от поступления до закрытия.',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 8,
  },
  {
    questionId: 'problem-1-q1-process-9',
    questionText:
      'Как отслеживается движение заявки по статусам? Есть ли автоматическое обновление или это делается вручную?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 9,
  },
  {
    questionId: 'problem-1-q1-process-10',
    questionText:
      'Какие критерии должны учитываться при распределении заявок? (тип продукции, регион, сложность, компетенции менеджера, загрузка, другие)',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 10,
  },
  {
    questionId: 'problem-1-q1-process-11',
    questionText:
      'Есть ли приоритизация заявок? Как определяется срочность и важность?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 11,
  },
  // Problem 1 - Problems (8 questions)
  {
    questionId: 'problem-1-q2-problems-1',
    questionText:
      'Какие конкретные проблемы возникают при распределении заявок? Опишите каждую.',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 12,
  },
  {
    questionId: 'problem-1-q2-problems-2',
    questionText:
      'Как часто происходят ошибки распределения? (в % от общего количества заявок)',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 13,
  },
  {
    questionId: 'problem-1-q2-problems-3',
    questionText:
      'Какие типы ошибок наиболее частые? (неправильный специалист, потеря заявки, задержка, другие)',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 14,
  },
  {
    questionId: 'problem-1-q2-problems-4',
    questionText:
      'Что происходит, когда заявка распределена неправильно? Как это обнаруживается?',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 15,
  },
  {
    questionId: 'problem-1-q2-problems-5',
    questionText:
      'Сколько времени теряется на перераспределение неправильно распределенных заявок?',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 16,
  },
  {
    questionId: 'problem-1-q2-problems-6',
    questionText:
      'Сколько покупателей ушло из-за проблем с распределением заявок? (за последний год)',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 17,
  },
  {
    questionId: 'problem-1-q2-problems-7',
    questionText:
      'Какая финансовая потеря связана с неправильным распределением? (упущенная выручка)',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 18,
  },
  {
    questionId: 'problem-1-q2-problems-8',
    questionText:
      'Есть ли случаи, когда заявка теряется полностью? Как часто это происходит?',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 19,
  },
  // Problem 1 - Human Factor (8 questions)
  {
    questionId: 'problem-1-q3-human-factor-1',
    questionText:
      'Какая документация доступна сотруднику на уровне 1 для правильного распределения?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 20,
  },
  {
    questionId: 'problem-1-q3-human-factor-2',
    questionText:
      'Используют ли сотрудники эту документацию при распределении? Почему нет, если не используют?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 21,
  },
  {
    questionId: 'problem-1-q3-human-factor-3',
    questionText:
      'Как часто сотрудники открывают и читают документацию перед распределением заявки?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 22,
  },
  {
    questionId: 'problem-1-q3-human-factor-4',
    questionText:
      'Есть ли инструкции/чек-листы для распределения заявок? Используются ли они?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 23,
  },
  {
    questionId: 'problem-1-q3-human-factor-5',
    questionText:
      'Какие знания требуются от сотрудника на уровне 1 для правильного распределения?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 24,
  },
  {
    questionId: 'problem-1-q3-human-factor-6',
    questionText:
      'Как часто сотрудники обращаются за помощью к коллегам при распределении?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 25,
  },
  {
    questionId: 'problem-1-q3-human-factor-7',
    questionText:
      'Есть ли обучение новых сотрудников процессу распределения? Как оно проходит?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 26,
  },
  {
    questionId: 'problem-1-q3-human-factor-8',
    questionText:
      'Как контролируется качество распределения? Есть ли обратная связь от уровня 2?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 27,
  },
  // Problem 1 - Data (8 questions)
  {
    questionId: 'problem-1-q4-data-1',
    questionText: 'Какой процент заявок приходит с неполными данными?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 28,
  },
  {
    questionId: 'problem-1-q4-data-2',
    questionText:
      'Какие поля чаще всего отсутствуют или заполнены некорректно?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 29,
  },
  {
    questionId: 'problem-1-q4-data-3',
    questionText: 'Как обнаруживается неполнота данных? На каком этапе?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 30,
  },
  {
    questionId: 'problem-1-q4-data-4',
    questionText:
      'Что происходит с недозаполненными заявками? Как запрашиваются недостающие данные?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 31,
  },
  {
    questionId: 'problem-1-q4-data-5',
    questionText:
      'Сколько времени уходит на запрос и получение недостающих данных от покупателя?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 32,
  },
  {
    questionId: 'problem-1-q4-data-6',
    questionText: 'Есть ли валидация данных на этапе поступления заявки?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 33,
  },
  {
    questionId: 'problem-1-q4-data-7',
    questionText:
      'Как часто покупатели не отвечают на запросы дополнительной информации?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 34,
  },
  {
    questionId: 'problem-1-q4-data-8',
    questionText:
      'Какая информация критична для правильного распределения заявки?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 35,
  },
  // Problem 1 - Volume (8 questions)
  {
    questionId: 'problem-1-q5-volume-1',
    questionText:
      'Сколько заявок в среднем поступает в день? В неделю? В месяц?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 36,
  },
  {
    questionId: 'problem-1-q5-volume-2',
    questionText:
      'Есть ли сезонность в поступлении заявок? Когда пиковые периоды?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 37,
  },
  {
    questionId: 'problem-1-q5-volume-3',
    questionText:
      'Как распределяется нагрузка между сотрудниками на уровне 1?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 38,
  },
  {
    questionId: 'problem-1-q5-volume-4',
    questionText: 'Есть ли перегрузка сотрудников? В какие периоды?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 39,
  },
  {
    questionId: 'problem-1-q5-volume-5',
    questionText:
      'Сколько времени сотрудник тратит на распределение заявок от общего рабочего времени?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 40,
  },
  {
    questionId: 'problem-1-q5-volume-6',
    questionText:
      'Есть ли очередь необработанных заявок? Какой средний размер очереди?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 41,
  },
  {
    questionId: 'problem-1-q5-volume-7',
    questionText:
      'Какой максимальный срок обработки заявки от поступления до распределения?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 42,
  },
  {
    questionId: 'problem-1-q5-volume-8',
    questionText:
      'Влияет ли объем заявок на качество распределения? Как?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 43,
  },
  // Problem 1 - Systems (9 questions)
  {
    questionId: 'problem-1-q6-systems-1',
    questionText:
      'Какие системы используются для работы с заявками? (CRM, почта, таблицы, другие)',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 44,
  },
  {
    questionId: 'problem-1-q6-systems-2',
    questionText:
      'В каких системах ведутся статусы заявок после распределения? (CRM, таблицы, другие системы)',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 45,
  },
  {
    questionId: 'problem-1-q6-systems-3',
    questionText: 'Есть ли автоматизация в процессе распределения? Какая?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 46,
  },
  {
    questionId: 'problem-1-q6-systems-4',
    questionText: 'Как хранятся заявки? В какой системе?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 47,
  },
  {
    questionId: 'problem-1-q6-systems-5',
    questionText: 'Есть ли интеграция между системами? Какая?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 48,
  },
  {
    questionId: 'problem-1-q6-systems-6',
    questionText:
      'Какие инструменты использует сотрудник на уровне 1 для распределения?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 49,
  },
  {
    questionId: 'problem-1-q6-systems-7',
    questionText:
      'Есть ли доступ к каталогу продукции при распределении? Как он организован?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 50,
  },
  {
    questionId: 'problem-1-q6-systems-8',
    questionText:
      'Используются ли шаблоны или чек-листы в электронном виде?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 51,
  },
  {
    questionId: 'problem-1-q6-systems-9',
    questionText:
      'Есть ли аналитика по распределению заявок? Какие метрики отслеживаются?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 52,
  },
  // Problem 1 - Metrics (13 questions)
  {
    questionId: 'problem-1-q7-metrics-1',
    questionText:
      'Как сейчас анализируется качество распределения заявок? Опишите процесс.',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 53,
  },
  {
    questionId: 'problem-1-q7-metrics-2',
    questionText:
      'Где хранится аналитика по распределению? (таблицы Excel, CRM, другие системы)',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 54,
  },
  {
    questionId: 'problem-1-q7-metrics-3',
    questionText:
      'Сколько времени уходит на ручной анализ качества распределения? (в часах в неделю/месяц)',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 55,
  },
  {
    questionId: 'problem-1-q7-metrics-4',
    questionText:
      'Какие метрики используются для оценки качества распределения заявок?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 56,
  },
  {
    questionId: 'problem-1-q7-metrics-5',
    questionText:
      'Какой процент заявок распределяется правильно с первого раза через рандомайзер?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 57,
  },
  {
    questionId: 'problem-1-q7-metrics-6',
    questionText:
      'Как отслеживается, кому и почему ушла заявка? Есть ли прозрачность процесса?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 58,
  },
  {
    questionId: 'problem-1-q7-metrics-7',
    questionText:
      'Среднее время от поступления заявки до начала работы специалиста?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 59,
  },
  {
    questionId: 'problem-1-q7-metrics-8',
    questionText:
      'Какой процент заявок обрабатывается в течение установленных сроков?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 60,
  },
  {
    questionId: 'problem-1-q7-metrics-9',
    questionText: 'Есть ли SLA по времени обработки заявок? Какое?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 61,
  },
  {
    questionId: 'problem-1-q7-metrics-10',
    questionText: 'Как отслеживается конверсия заявок в сделки?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 62,
  },
  {
    questionId: 'problem-1-q7-metrics-11',
    questionText: 'Какая доля заявок конвертируется в успешные сделки?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 63,
  },
  {
    questionId: 'problem-1-q7-metrics-12',
    questionText:
      'Есть ли метрики удовлетворенности покупателей процессом обработки заявок?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 64,
  },
  {
    questionId: 'problem-1-q7-metrics-13',
    questionText:
      'Какие проблемы выявляются при ручном анализе качества распределения?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 65,
  },
  // Problem 1 - Expectations (8 questions)
  {
    questionId: 'problem-1-q8-expectations-1',
    questionText:
      'Какое идеальное решение проблемы распределения заявок вы видите?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 66,
  },
  {
    questionId: 'problem-1-q8-expectations-2',
    questionText:
      'Какие функции должны быть в системе распределения заявок?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 67,
  },
  {
    questionId: 'problem-1-q8-expectations-3',
    questionText:
      'Должна ли система полностью автоматизировать распределение или помогать сотруднику?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 68,
  },
  {
    questionId: 'problem-1-q8-expectations-4',
    questionText:
      'Какие критерии важны при выборе решения? (скорость, точность, стоимость, другие)',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 69,
  },
  {
    questionId: 'problem-1-q8-expectations-5',
    questionText:
      'Какой результат вы ожидаете от внедрения решения? (в цифрах)',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 70,
  },
  {
    questionId: 'problem-1-q8-expectations-6',
    questionText:
      'Какие риски вы видите при автоматизации распределения?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 71,
  },
  {
    questionId: 'problem-1-q8-expectations-7',
    questionText:
      'Готовы ли вы к изменению текущих процессов? В какой степени?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 72,
  },
  {
    questionId: 'problem-1-q8-expectations-8',
    questionText: 'Есть ли ограничения по бюджету на решение проблемы?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 73,
  },
  // Problem 2 - Scale (8 questions)
  {
    questionId: 'problem-2-q1-scale-1',
    questionText: 'Сколько всего сделок сейчас в воронке продаж?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 74,
  },
  {
    questionId: 'problem-2-q1-scale-2',
    questionText:
      'Сколько из них можно считать зависшими? (в % и абсолютных числах)',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 75,
  },
  {
    questionId: 'problem-2-q1-scale-3',
    questionText:
      'Какое определение "зависшей сделки" используется в вашей компании? (критерии)',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 76,
  },
  {
    questionId: 'problem-2-q1-scale-4',
    questionText:
      'Какой средний срок нахождения сделки в воронке до закрытия или отсева?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 77,
  },
  {
    questionId: 'problem-2-q1-scale-5',
    questionText: 'Какой срок считается нормальным для сделки в вашей отрасли?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 78,
  },
  {
    questionId: 'problem-2-q1-scale-6',
    questionText:
      'Сколько сделок зависают более 30 дней? Более 60 дней? Более 90 дней?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 79,
  },
  {
    questionId: 'problem-2-q1-scale-7',
    questionText:
      'Какой процент от общего количества сделок составляют зависшие?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 80,
  },
  {
    questionId: 'problem-2-q1-scale-8',
    questionText: 'Какой средний размер зависшей сделки? (в рублях)',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 81,
  },
  // Problem 2 - Reasons (9 questions)
  {
    questionId: 'problem-2-q2-reasons-1',
    questionText:
      'Какие основные причины зависания сделок вы видите? Перечислите все.',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 82,
  },
  {
    questionId: 'problem-2-q2-reasons-2',
    questionText:
      'Какой процент зависших сделок связан с отсутствием активности менеджера?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 83,
  },
  {
    questionId: 'problem-2-q2-reasons-3',
    questionText:
      'Какой процент связан с отсутствием активности покупателя?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 84,
  },
  {
    questionId: 'problem-2-q2-reasons-4',
    questionText:
      'Есть ли зависшие сделки из-за отсутствия необходимой информации/документов?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 85,
  },
  {
    questionId: 'problem-2-q2-reasons-5',
    questionText:
      'Сколько сделок зависают из-за ожидания решения от покупателя?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 86,
  },
  {
    questionId: 'problem-2-q2-reasons-6',
    questionText:
      'Есть ли зависшие сделки из-за внутренних процессов компании? (согласования, производство, другие)',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 87,
  },
  {
    questionId: 'problem-2-q2-reasons-7',
    questionText: 'Какой процент зависших сделок связан с ценовыми вопросами?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 88,
  },
  {
    questionId: 'problem-2-q2-reasons-8',
    questionText:
      'Есть ли зависшие сделки из-за технических проблем? (недостаточная информация о продукции, расчеты, другие)',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 89,
  },
  {
    questionId: 'problem-2-q2-reasons-9',
    questionText:
      'Сколько сделок зависают из-за конкурентов или альтернативных решений?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 90,
  },
  // Problem 2 - Types (8 questions)
  {
    questionId: 'problem-2-q3-types-1',
    questionText:
      'Есть ли категории зависших сделок? Какие? (по типу продукции, по покупателю, по этапу воронки, другие)',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 91,
  },
  {
    questionId: 'problem-2-q3-types-2',
    questionText:
      'На каких этапах воронки чаще всего зависают сделки? Перечислите этапы.',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 92,
  },
  {
    questionId: 'problem-2-q3-types-3',
    questionText: 'Есть ли типы продукции, по которым чаще зависают сделки?',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 93,
  },
  {
    questionId: 'problem-2-q3-types-4',
    questionText:
      'Есть ли типы покупателей, с которыми чаще зависают сделки? (B2B, B2G, частные, другие)',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 94,
  },
  {
    questionId: 'problem-2-q3-types-5',
    questionText: 'Зависают ли чаще крупные или мелкие сделки?',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 95,
  },
  {
    questionId: 'problem-2-q3-types-6',
    questionText: 'Есть ли региональные особенности в зависании сделок?',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 96,
  },
  {
    questionId: 'problem-2-q3-types-7',
    questionText: 'Есть ли сезонность в зависании сделок?',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 97,
  },
  {
    questionId: 'problem-2-q3-types-8',
    questionText:
      'Какие сделки имеют наибольшую вероятность зависания? (характеристики)',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 98,
  },
  // Problem 2 - Process (10 questions)
  {
    questionId: 'problem-2-q4-process-1',
    questionText:
      'Есть ли сейчас система работы с зависшими сделками? Опишите её или объясните, почему её нет.',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 99,
  },
  {
    questionId: 'problem-2-q4-process-2',
    questionText:
      'Как сейчас определяются зависшие сделки? Есть ли автоматическое определение или это делается вручную?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 100,
  },
  {
    questionId: 'problem-2-q4-process-3',
    questionText:
      'На каких стадиях воронки чаще всего копятся сделки? Перечислите конкретные стадии.',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 101,
  },
  {
    questionId: 'problem-2-q4-process-4',
    questionText:
      'Как часто пересматриваются зависшие сделки? (ежедневно, еженедельно, ежемесячно, никогда)',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 102,
  },
  {
    questionId: 'problem-2-q4-process-5',
    questionText:
      'Кто отвечает за работу с зависшими сделками? (менеджер, руководитель отдела, никто, другие)',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 103,
  },
  {
    questionId: 'problem-2-q4-process-6',
    questionText:
      'Есть ли автоматические напоминания менеджерам о зависших сделках? Если нет, почему?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 104,
  },
  {
    questionId: 'problem-2-q4-process-7',
    questionText:
      'Как определяется, актуально ли еще сотрудничество с покупателем по зависшей сделке?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 105,
  },
  {
    questionId: 'problem-2-q4-process-8',
    questionText:
      'Есть ли система работы с "холодными" сделками? Как она работает?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 106,
  },
  {
    questionId: 'problem-2-q4-process-9',
    questionText:
      'Как сейчас предлагаются дополнительные скидки для "разморозки" сделок?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 107,
  },
  {
    questionId: 'problem-2-q4-process-10',
    questionText:
      'Есть ли процесс "разморозки" зависших сделок? Как он работает?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 108,
  },
  // Problem 2 - Manager (8 questions)
  {
    questionId: 'problem-2-q5-manager-1',
    questionText:
      'Как менеджеры работают с зависшими сделками? Опишите типичный сценарий.',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 109,
  },
  {
    questionId: 'problem-2-q5-manager-2',
    questionText:
      'Сколько времени менеджер тратит на работу с зависшими сделками? (в % от рабочего времени)',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 110,
  },
  {
    questionId: 'problem-2-q5-manager-3',
    questionText:
      'Есть ли у менеджеров мотивация работать с зависшими сделками?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 111,
  },
  {
    questionId: 'problem-2-q5-manager-4',
    questionText:
      'Как менеджеры определяют, стоит ли продолжать работу с зависшей сделкой?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 112,
  },
  {
    questionId: 'problem-2-q5-manager-5',
    questionText:
      'Есть ли у менеджеров инструменты для работы с зависшими сделками? Какие?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 113,
  },
  {
    questionId: 'problem-2-q5-manager-6',
    questionText:
      'Как часто менеджеры контактируют с покупателями по зависшим сделкам?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 114,
  },
  {
    questionId: 'problem-2-q5-manager-7',
    questionText:
      'Какие действия менеджеры предпринимают для "разморозки" сделки?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 115,
  },
  {
    questionId: 'problem-2-q5-manager-8',
    questionText:
      'Есть ли случаи, когда менеджеры "забывают" о зависших сделках? Почему?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 116,
  },
  // Problem 2 - Client Behavior (8 questions)
  {
    questionId: 'problem-2-q6-client-1',
    questionText:
      'Как часто покупатели сами инициируют контакт по зависшей сделке?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 117,
  },
  {
    questionId: 'problem-2-q6-client-2',
    questionText:
      'Как покупатели реагируют на напоминания о зависшей сделке?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 118,
  },
  {
    questionId: 'problem-2-q6-client-3',
    questionText: 'Есть ли случаи, когда покупатель "забыл" о сделке? Как часто?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 119,
  },
  {
    questionId: 'problem-2-q6-client-4',
    questionText:
      'Какие причины покупатели называют при отказе от продолжения сделки?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 120,
  },
  {
    questionId: 'problem-2-q6-client-5',
    questionText:
      'Есть ли случаи, когда покупатель просто перестает отвечать? Как часто?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 121,
  },
  {
    questionId: 'problem-2-q6-client-6',
    questionText: 'Какой процент зависших сделок в итоге закрывается успешно?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 122,
  },
  {
    questionId: 'problem-2-q6-client-7',
    questionText: 'Какой процент зависших сделок закрывается как потерянные?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 123,
  },
  {
    questionId: 'problem-2-q6-client-8',
    questionText:
      'Есть ли закономерности в поведении покупателей по зависшим сделкам?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 124,
  },
  // Problem 2 - Impact (8 questions)
  {
    questionId: 'problem-2-q7-impact-1',
    questionText: 'Какая сумма в рублях "заморожена" в зависших сделках?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 125,
  },
  {
    questionId: 'problem-2-q7-impact-2',
    questionText: 'Как зависшие сделки влияют на прогноз продаж?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 126,
  },
  {
    questionId: 'problem-2-q7-impact-3',
    questionText: 'Как зависшие сделки влияют на планирование производства?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 127,
  },
  {
    questionId: 'problem-2-q7-impact-4',
    questionText: 'Есть ли влияние на загрузку менеджеров? Какое?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 128,
  },
  {
    questionId: 'problem-2-q7-impact-5',
    questionText:
      'Как зависшие сделки влияют на моральный климат в отделе продаж?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 129,
  },
  {
    questionId: 'problem-2-q7-impact-6',
    questionText: 'Есть ли влияние на репутацию компании? Какое?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 130,
  },
  {
    questionId: 'problem-2-q7-impact-7',
    questionText:
      'Какая финансовая потеря связана с зависшими сделками? (упущенная выручка)',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 131,
  },
  {
    questionId: 'problem-2-q7-impact-8',
    questionText:
      'Есть ли возможность перераспределить ресурсы с зависших сделок на новые?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 132,
  },
  // Problem 2 - Systems (8 questions)
  {
    questionId: 'problem-2-q8-systems-1',
    questionText:
      'Какие системы используются для отслеживания зависших сделок?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 133,
  },
  {
    questionId: 'problem-2-q8-systems-2',
    questionText:
      'Есть ли автоматическое определение зависших сделок в системе?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 134,
  },
  {
    questionId: 'problem-2-q8-systems-3',
    questionText:
      'Есть ли автоматические уведомления о зависших сделках?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 135,
  },
  {
    questionId: 'problem-2-q8-systems-4',
    questionText:
      'Как визуализируются зависшие сделки в системе? (дашборды, отчеты, другие)',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 136,
  },
  {
    questionId: 'problem-2-q8-systems-5',
    questionText:
      'Есть ли аналитика по зависшим сделкам? Какие метрики отслеживаются?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 137,
  },
  {
    questionId: 'problem-2-q8-systems-6',
    questionText:
      'Можно ли в системе фильтровать и сортировать зависшие сделки?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 138,
  },
  {
    questionId: 'problem-2-q8-systems-7',
    questionText:
      'Есть ли интеграция между системой учета сделок и другими системами?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 139,
  },
  {
    questionId: 'problem-2-q8-systems-8',
    questionText:
      'Какие инструменты используются для работы с покупателями по зависшим сделкам?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 140,
  },
  // Problem 2 - Metrics (8 questions)
  {
    questionId: 'problem-2-q9-metrics-1',
    questionText:
      'Какие метрики используются для отслеживания зависших сделок?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 141,
  },
  {
    questionId: 'problem-2-q9-metrics-2',
    questionText:
      'Какой процент зависших сделок считается нормальным?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 142,
  },
  {
    questionId: 'problem-2-q9-metrics-3',
    questionText:
      'Есть ли KPI для менеджеров по работе с зависшими сделками?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 143,
  },
  {
    questionId: 'problem-2-q9-metrics-4',
    questionText:
      'Как отслеживается динамика зависших сделок? (рост/снижение)',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 144,
  },
  {
    questionId: 'problem-2-q9-metrics-5',
    questionText:
      'Есть ли метрики времени нахождения сделки в каждом этапе воронки?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 145,
  },
  {
    questionId: 'problem-2-q9-metrics-6',
    questionText:
      'Какой средний срок "разморозки" зависшей сделки?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 146,
  },
  {
    questionId: 'problem-2-q9-metrics-7',
    questionText:
      'Есть ли метрики конверсии зависших сделок в закрытые?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 147,
  },
  {
    questionId: 'problem-2-q9-metrics-8',
    questionText:
      'Как оценивается эффективность работы с зависшими сделками?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 148,
  },
  // Problem 2 - Expectations (8 questions)
  {
    questionId: 'problem-2-q10-expectations-1',
    questionText:
      'Какое идеальное решение проблемы зависших сделок вы видите?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 149,
  },
  {
    questionId: 'problem-2-q10-expectations-2',
    questionText:
      'Какие функции должны быть в системе для работы с зависшими сделками?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 150,
  },
  {
    questionId: 'problem-2-q10-expectations-3',
    questionText:
      'Должна ли система автоматически определять зависшие сделки?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 151,
  },
  {
    questionId: 'problem-2-q10-expectations-4',
    questionText:
      'Должна ли система автоматически напоминать менеджерам о зависших сделках?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 152,
  },
  {
    questionId: 'problem-2-q10-expectations-5',
    questionText:
      'Должна ли система автоматически эскалировать зависшие сделки?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 153,
  },
  {
    questionId: 'problem-2-q10-expectations-6',
    questionText:
      'Какие критерии важны при выборе решения? (автоматизация, аналитика, стоимость, другие)',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 154,
  },
  {
    questionId: 'problem-2-q10-expectations-7',
    questionText:
      'Какой результат вы ожидаете от внедрения решения? (в цифрах)',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 155,
  },
  {
    questionId: 'problem-2-q10-expectations-8',
    questionText: 'Есть ли ограничения по бюджету на решение проблемы?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 156,
  },
  // Additional questions (8 questions)
  {
    questionId: 'additional-questions-1',
    questionText:
      'Есть ли связь между проблемами распределения заявок и зависшими сделками? Какая?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 157,
  },
  {
    questionId: 'additional-questions-2',
    questionText:
      'Влияет ли качество распределения заявок на количество зависших сделок?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 158,
  },
  {
    questionId: 'additional-questions-3',
    questionText:
      'Есть ли другие проблемы в процессах продаж, которые нужно учесть?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 159,
  },
  {
    questionId: 'additional-questions-4',
    questionText:
      'Какие изменения в процессах продаж планируются в ближайшее время?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 160,
  },
  {
    questionId: 'additional-questions-5',
    questionText:
      'Есть ли ограничения или требования, которые нужно учесть при разработке решения?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 161,
  },
  {
    questionId: 'additional-questions-6',
    questionText: 'Кто будет принимать решение о внедрении решения?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 162,
  },
  {
    questionId: 'additional-questions-7',
    questionText: 'Какие сроки ожидаются для внедрения решения?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 163,
  },
  {
    questionId: 'additional-questions-8',
    questionText:
      'Есть ли опыт внедрения подобных решений в компании? Какой?',
    section: 'additional-questions',
    sectionTitle: 'Дополнительные вопросы',
    order: 164,
  },
];
