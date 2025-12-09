/**
 * Utility functions for extracting questions from questionnaire slides
 */

import type { Question } from '~shared/ui/questionnaire';

export type { Question };

/**
 * Complete list of questions from niteos questionnaire
 * Optimized version - reduced from 164 to 72 questions (-56%)
 */
export const niteosQuestionnaireQuestions: Question[] = [
  // Problem 1 - Process (6 questions, было 11)
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
      'Сколько времени проходит от момента поступления заявки до того, как она попадает к специалисту, который будет с ней работать?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 3,
  },
  {
    questionId: 'problem-1-q1-process-4',
    questionText:
      'Какие каналы поступления заявок используются и в каком формате они приходят?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 4,
    type: 'checkbox',
    options: [
      { label: 'Сайт (форма на сайте)', value: 'site-form' },
      { label: 'Email (письмо)', value: 'email' },
      { label: 'Телефон (звонок)', value: 'phone-call' },
      { label: 'Мессенджеры', value: 'messengers' },
      { label: 'Файл', value: 'file' },
    ],
    allowOther: true,
  },
  {
    questionId: 'problem-1-q1-process-5',
    questionText:
      'Есть ли единая точка входа для всех заявок или они приходят в разные системы?',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 5,
    type: 'radio',
    options: [
      { label: 'Единая точка входа', value: 'single' },
      { label: 'Разные системы', value: 'multiple' },
      { label: 'Частично единая, частично разные', value: 'mixed' },
    ],
  },
  {
    questionId: 'problem-1-q1-process-6',
    questionText:
      'Что происходит с заявкой после распределения через рандомайзер? Опишите дальнейший процесс обработки.',
    section: 'problem-1-q1-process',
    sectionTitle: 'Вопросы: Распределение заявок — Процесс',
    order: 6,
  },
  // Problem 1 - Problems (3 questions, было 8)
  {
    questionId: 'problem-1-q2-problems-1',
    questionText:
      'Какие конкретные проблемы возникают при распределении заявок? Опишите каждую. Что происходит, когда заявка распределена неправильно? Как это обнаруживается? Есть ли случаи, когда заявка теряется полностью?',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 7,
  },
  {
    questionId: 'problem-1-q2-problems-2',
    questionText:
      'Как часто происходят ошибки распределения? (в % от общего количества заявок)',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 8,
  },
  {
    questionId: 'problem-1-q2-problems-3',
    questionText:
      'Какие типы ошибок наиболее частые? (неправильный специалист, потеря заявки, задержка, другие)',
    section: 'problem-1-q2-problems',
    sectionTitle: 'Вопросы: Распределение заявок — Проблемы',
    order: 9,
  },
  // Problem 1 - Human Factor (4 questions, было 8)
  {
    questionId: 'problem-1-q3-human-factor-1',
    questionText:
      'Какая документация доступна сотруднику, который распределяет заявки? Используют ли сотрудники эту документацию при распределении? Почему нет, если не используют?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 11,
  },
  {
    questionId: 'problem-1-q3-human-factor-2',
    questionText:
      'Есть ли инструкции/чек-листы для распределения заявок? Используются ли они?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 12,
  },
  {
    questionId: 'problem-1-q3-human-factor-3',
    questionText:
      'Какие знания требуются от сотрудника, который распределяет заявки, для правильного распределения?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 13,
  },
  {
    questionId: 'problem-1-q3-human-factor-4',
    questionText:
      'Как контролируется качество распределения? Есть ли обратная связь от специалистов, которые получают заявки?',
    section: 'problem-1-q3-human-factor',
    sectionTitle: 'Вопросы: Распределение заявок — Человеческий фактор',
    order: 14,
  },
  // Problem 1 - Data (4 questions, было 8)
  {
    questionId: 'problem-1-q4-data-1',
    questionText: 'Какой процент заявок приходит с неполными данными?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 15,
  },
  {
    questionId: 'problem-1-q4-data-2',
    questionText:
      'Какие поля чаще всего отсутствуют или заполнены некорректно? Какая информация критична для правильного распределения заявки?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 16,
  },
  {
    questionId: 'problem-1-q4-data-3',
    questionText:
      'Что происходит с недозаполненными заявками? Как запрашиваются недостающие данные?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 17,
  },
  {
    questionId: 'problem-1-q4-data-4',
    questionText: 'Есть ли валидация данных на этапе поступления заявки?',
    section: 'problem-1-q4-data',
    sectionTitle: 'Вопросы: Распределение заявок — Данные и информация',
    order: 18,
  },
  // Problem 1 - Volume (3 questions, было 8)
  {
    questionId: 'problem-1-q5-volume-1',
    questionText:
      'Сколько заявок в среднем поступает в день? В неделю? В месяц? Есть ли очередь необработанных заявок? Какой средний размер очереди?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 19,
  },
  {
    questionId: 'problem-1-q5-volume-2',
    questionText:
      'Есть ли сезонность в поступлении заявок? Когда пиковые периоды?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 20,
  },
  {
    questionId: 'problem-1-q5-volume-3',
    questionText: 'Есть ли перегрузка сотрудников? В какие периоды?',
    section: 'problem-1-q5-volume',
    sectionTitle: 'Вопросы: Распределение заявок — Объемы и нагрузка',
    order: 21,
  },
  // Problem 1 - Systems (5 questions, было 9)
  {
    questionId: 'problem-1-q6-systems-1',
    questionText:
      'Какие системы используются для работы с заявками? (CRM, почта, таблицы, другие) Какие инструменты использует сотрудник, который распределяет заявки?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 23,
  },
  {
    questionId: 'problem-1-q6-systems-2',
    questionText:
      'В каких системах ведутся статусы заявок после распределения? (CRM, таблицы, другие системы)',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 24,
  },
  {
    questionId: 'problem-1-q6-systems-3',
    questionText: 'Есть ли автоматизация в процессе распределения? Какая?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 25,
  },
  {
    questionId: 'problem-1-q6-systems-4',
    questionText: 'Есть ли интеграция между системами? Какая?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 26,
  },
  {
    questionId: 'problem-1-q6-systems-5',
    questionText:
      'Есть ли аналитика по распределению заявок? Какие метрики отслеживаются?',
    section: 'problem-1-q6-systems',
    sectionTitle: 'Вопросы: Распределение заявок — Системы и инструменты',
    order: 27,
  },
  // Problem 1 - Metrics (6 questions, было 13)
  {
    questionId: 'problem-1-q7-metrics-1',
    questionText:
      'Как сейчас анализируется качество распределения заявок? Опишите процесс. Где хранится аналитика по распределению? (таблицы Excel, CRM, другие системы) Какие проблемы выявляются при ручном анализе качества распределения?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 28,
  },
  {
    questionId: 'problem-1-q7-metrics-2',
    questionText:
      'Какие метрики используются для оценки качества распределения заявок?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 29,
  },
  {
    questionId: 'problem-1-q7-metrics-3',
    questionText:
      'Какой процент заявок распределяется правильно с первого раза через рандомайзер?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 30,
  },
  {
    questionId: 'problem-1-q7-metrics-4',
    questionText:
      'Как отслеживается, кому и почему ушла заявка? Есть ли прозрачность процесса?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 31,
  },
  {
    questionId: 'problem-1-q7-metrics-5',
    questionText:
      'Среднее время от поступления заявки до начала работы специалиста? Какой процент заявок обрабатывается в течение установленных сроков?',
    section: 'problem-1-q7-metrics',
    sectionTitle: 'Вопросы: Распределение заявок — Метрики и KPI',
    order: 32,
  },
  // Problem 1 - Expectations (4 questions, было 8)
  {
    questionId: 'problem-1-q8-expectations-1',
    questionText:
      'Какое идеальное решение проблемы распределения заявок вы видите? Какие критерии важны при выборе решения? (скорость, точность, стоимость, другие)',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 33,
  },
  {
    questionId: 'problem-1-q8-expectations-2',
    questionText: 'Какие функции должны быть в системе распределения заявок?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 34,
  },
  {
    questionId: 'problem-1-q8-expectations-3',
    questionText:
      'Должна ли система полностью автоматизировать распределение или помогать сотруднику?',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 35,
  },
  {
    questionId: 'problem-1-q8-expectations-4',
    questionText:
      'Какой результат вы ожидаете от внедрения решения? (в цифрах)',
    section: 'problem-1-q8-expectations',
    sectionTitle: 'Вопросы: Распределение заявок — Ожидания',
    order: 36,
  },
  // Problem 2 - Scale (6 questions, было 8)
  {
    questionId: 'problem-2-q1-scale-1',
    questionText: 'Сколько всего сделок сейчас в воронке продаж?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 1,
  },
  {
    questionId: 'problem-2-q1-scale-2',
    questionText:
      'Сколько из них можно считать зависшими? (в % и абсолютных числах)',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 2,
  },
  {
    questionId: 'problem-2-q1-scale-3',
    questionText:
      'Какое определение "зависшей сделки" используется в вашей компании? (критерии) Сколько сделок зависают более 30 дней? Более 60 дней? Более 90 дней?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 3,
  },
  {
    questionId: 'problem-2-q1-scale-4',
    questionText:
      'Какой средний срок нахождения сделки в воронке до закрытия или отсева?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 4,
  },
  {
    questionId: 'problem-2-q1-scale-5',
    questionText: 'Какой срок считается нормальным для сделки в вашей отрасли?',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 5,
  },
  {
    questionId: 'problem-2-q1-scale-6',
    questionText: 'Какой средний размер зависшей сделки? (в рублях)',
    section: 'problem-2-q1-scale',
    sectionTitle: 'Вопросы: Зависшие сделки — Масштаб проблемы',
    order: 6,
  },
  // Problem 2 - Reasons (3 questions, было 9)
  {
    questionId: 'problem-2-q2-reasons-1',
    questionText:
      'Какие основные причины зависания сделок вы видите? Перечислите все. (отсутствие информации/документов, ожидание решения от покупателя, внутренние процессы компании, ценовые вопросы, технические проблемы, конкуренты, другие)',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 7,
  },
  {
    questionId: 'problem-2-q2-reasons-2',
    questionText:
      'Какой процент зависших сделок связан с отсутствием активности менеджера?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 8,
  },
  {
    questionId: 'problem-2-q2-reasons-3',
    questionText: 'Какой процент связан с отсутствием активности покупателя?',
    section: 'problem-2-q2-reasons',
    sectionTitle: 'Вопросы: Зависшие сделки — Причины зависания',
    order: 9,
  },
  // Problem 2 - Types (2 questions, было 8)
  {
    questionId: 'problem-2-q3-types-1',
    questionText:
      'Есть ли категории зависших сделок? Какие? (по типу продукции, по покупателю, по этапу воронки, другие) На каких этапах воронки чаще всего зависают сделки? Перечислите этапы.',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 10,
  },
  {
    questionId: 'problem-2-q3-types-2',
    questionText:
      'Какие сделки имеют наибольшую вероятность зависания? (характеристики)',
    section: 'problem-2-q3-types',
    sectionTitle: 'Вопросы: Зависшие сделки — Типы и категории',
    order: 11,
  },
  // Problem 2 - Process (5 questions, было 10)
  {
    questionId: 'problem-2-q4-process-1',
    questionText:
      'Есть ли сейчас система работы с зависшими сделками? Опишите её или объясните, почему её нет. Есть ли автоматические напоминания менеджерам о зависших сделках? Если нет, почему? Есть ли процесс "разморозки" зависших сделок? Как он работает?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 12,
  },
  {
    questionId: 'problem-2-q4-process-2',
    questionText:
      'Как сейчас определяются зависшие сделки? Есть ли автоматическое определение или это делается вручную?',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 13,
  },
  {
    questionId: 'problem-2-q4-process-3',
    questionText:
      'На каких стадиях воронки чаще всего копятся сделки? Перечислите конкретные стадии.',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 14,
  },
  {
    questionId: 'problem-2-q4-process-4',
    questionText:
      'Как часто пересматриваются зависшие сделки? (ежедневно, еженедельно, ежемесячно, никогда)',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 15,
  },
  {
    questionId: 'problem-2-q4-process-5',
    questionText:
      'Кто отвечает за работу с зависшими сделками? (менеджер, руководитель отдела, никто, другие)',
    section: 'problem-2-q4-process',
    sectionTitle: 'Вопросы: Зависшие сделки — Процессы работы',
    order: 16,
  },
  // Problem 2 - Manager (4 questions, было 8)
  {
    questionId: 'problem-2-q5-manager-1',
    questionText:
      'Как менеджеры работают с зависшими сделками? Опишите типичный сценарий. Как менеджеры определяют, стоит ли продолжать работу с зависшей сделкой? Какие действия менеджеры предпринимают для "разморозки" сделки? Есть ли случаи, когда менеджеры "забывают" о зависших сделках? Почему?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 17,
  },
  {
    questionId: 'problem-2-q5-manager-2',
    questionText:
      'Сколько времени менеджер тратит на работу с зависшими сделками? (в % от рабочего времени)',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 18,
  },
  {
    questionId: 'problem-2-q5-manager-3',
    questionText:
      'Есть ли у менеджеров мотивация работать с зависшими сделками?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 19,
  },
  {
    questionId: 'problem-2-q5-manager-4',
    questionText:
      'Есть ли у менеджеров инструменты для работы с зависшими сделками? Какие?',
    section: 'problem-2-q5-manager',
    sectionTitle: 'Вопросы: Зависшие сделки — Работа менеджеров',
    order: 20,
  },
  // Problem 2 - Client Behavior (4 questions, было 8)
  {
    questionId: 'problem-2-q6-client-1',
    questionText:
      'Как часто покупатели сами инициируют контакт по зависшей сделке?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 21,
  },
  {
    questionId: 'problem-2-q6-client-2',
    questionText:
      'Как покупатели реагируют на напоминания о зависшей сделке? Есть ли случаи, когда покупатель "забыл" о сделке или просто перестает отвечать? Как часто? Есть ли закономерности в поведении покупателей по зависшим сделкам?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 22,
  },
  {
    questionId: 'problem-2-q6-client-3',
    questionText: 'Какой процент зависших сделок в итоге закрывается успешно?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 23,
  },
  {
    questionId: 'problem-2-q6-client-4',
    questionText: 'Какой процент зависших сделок закрывается как потерянные?',
    section: 'problem-2-q6-client',
    sectionTitle: 'Вопросы: Зависшие сделки — Поведение покупателей',
    order: 24,
  },
  // Problem 2 - Impact (2 questions, было 8)
  {
    questionId: 'problem-2-q7-impact-1',
    questionText: 'Какая сумма в рублях "заморожена" в зависших сделках?',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 25,
  },
  {
    questionId: 'problem-2-q7-impact-2',
    questionText:
      'Как зависшие сделки влияют на прогноз продаж? Какая финансовая потеря связана с зависшими сделками? (упущенная выручка)',
    section: 'problem-2-q7-impact',
    sectionTitle: 'Вопросы: Зависшие сделки — Влияние на бизнес',
    order: 26,
  },
  // Problem 2 - Systems (4 questions, было 8)
  {
    questionId: 'problem-2-q8-systems-1',
    questionText:
      'Какие системы используются для отслеживания зависших сделок? Как визуализируются зависшие сделки в системе? (дашборды, отчеты, другие) Можно ли в системе фильтровать и сортировать зависшие сделки? Есть ли интеграция между системой учета сделок и другими системами? Какие инструменты используются для работы с покупателями по зависшим сделкам?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 27,
  },
  {
    questionId: 'problem-2-q8-systems-2',
    questionText:
      'Есть ли автоматическое определение зависших сделок в системе?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 28,
  },
  {
    questionId: 'problem-2-q8-systems-3',
    questionText: 'Есть ли автоматические уведомления о зависших сделках?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 29,
  },
  {
    questionId: 'problem-2-q8-systems-4',
    questionText:
      'Есть ли аналитика по зависшим сделкам? Какие метрики отслеживаются?',
    section: 'problem-2-q8-systems',
    sectionTitle: 'Вопросы: Зависшие сделки — Системы и инструменты',
    order: 30,
  },
  // Problem 2 - Metrics (4 questions, было 8)
  {
    questionId: 'problem-2-q9-metrics-1',
    questionText:
      'Какие метрики используются для отслеживания зависших сделок? Есть ли метрики времени нахождения сделки в каждом этапе воронки? Как оценивается эффективность работы с зависшими сделками?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 31,
  },
  {
    questionId: 'problem-2-q9-metrics-2',
    questionText: 'Какой процент зависших сделок считается нормальным?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 32,
  },
  {
    questionId: 'problem-2-q9-metrics-3',
    questionText: 'Как отслеживается динамика зависших сделок? (рост/снижение)',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 33,
  },
  {
    questionId: 'problem-2-q9-metrics-4',
    questionText: 'Есть ли метрики конверсии зависших сделок в закрытые?',
    section: 'problem-2-q9-metrics',
    sectionTitle: 'Вопросы: Зависшие сделки — Метрики и KPI',
    order: 34,
  },
  // Problem 2 - Expectations (4 questions, было 8)
  {
    questionId: 'problem-2-q10-expectations-1',
    questionText:
      'Какое идеальное решение проблемы зависших сделок вы видите? Какие критерии важны при выборе решения? (автоматизация, аналитика, стоимость, другие) Какой результат вы ожидаете от внедрения решения? (в цифрах)',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 35,
  },
  {
    questionId: 'problem-2-q10-expectations-2',
    questionText:
      'Какие функции должны быть в системе для работы с зависшими сделками? Должна ли система автоматически эскалировать зависшие сделки?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 36,
  },
  {
    questionId: 'problem-2-q10-expectations-3',
    questionText: 'Должна ли система автоматически определять зависшие сделки?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 37,
  },
  {
    questionId: 'problem-2-q10-expectations-4',
    questionText:
      'Должна ли система автоматически напоминать менеджерам о зависших сделках?',
    section: 'problem-2-q10-expectations',
    sectionTitle: 'Вопросы: Зависшие сделки — Ожидания',
    order: 38,
  },
];
