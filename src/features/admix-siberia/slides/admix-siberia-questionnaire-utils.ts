/**
 * Utility functions for extracting questions from questionnaire slides
 */

import type { Question } from '~shared/ui/questionnaire';

export type { Question };

/**
 * Questions for admix-siberia questionnaire
 * Опросник для определения стиля дизайна сайта
 */
export const admixSiberiaQuestionnaireQuestions: Question[] = [
  // Question 1: Brand associations
  {
    questionId: 'design-q1-associations',
    questionText:
      'С чем должно ассоциироваться название "Адмикс-Сибирь" у клиентов компании?',
    section: 'design-q1-associations',
    sectionTitle: 'Вопрос 1: Ассоциации с брендом',
    order: 1,
    type: 'radio',
    options: [
      {
        label:
          'Технологичность и инновации (современные технологии, передовые решения, научный подход)',
        value: 'technology',
      },
      {
        label:
          'Надёжность и стабильность (проверенное качество, долгосрочное партнёрство, стабильность)',
        value: 'reliability',
      },
      {
        label:
          'Промышленная мощь (масштаб производства, производственные мощности, промышленный гигант)',
        value: 'industrial',
      },
      {
        label:
          'Экологичность и ответственность (забота об окружающей среде, устойчивое развитие, экологичные решения)',
        value: 'eco',
      },
    ],
    allowOther: true,
  },
  // Question 2: Visual style
  {
    questionId: 'design-q2-visual-style',
    questionText:
      'Какой визуальный стиль предпочтителен для представления продукции компании?',
    section: 'design-q2-visual-style',
    sectionTitle: 'Вопрос 2: Визуальный стиль',
    order: 2,
    type: 'radio',
    options: [
      {
        label:
          'Минималистичный и чистый (много белого пространства, чёткие линии, акцент на контенте)',
        value: 'minimalist',
      },
      {
        label:
          'Технический и детализированный (схемы, графики, технические характеристики, инженерный подход)',
        value: 'technical',
      },
      {
        label:
          'Яркий и динамичный (современные цвета, анимации, интерактивные элементы)',
        value: 'dynamic',
      },
      {
        label:
          'Корпоративный и солидный (сдержанная палитра, деловой стиль, профессиональный вид)',
        value: 'corporate',
      },
    ],
    allowOther: true,
  },
  // Question 3: Color palette
  {
    questionId: 'design-q3-color-palette',
    questionText: 'Какая цветовая палитра лучше отражает компанию?',
    section: 'design-q3-color-palette',
    sectionTitle: 'Вопрос 3: Цветовая палитра',
    order: 3,
    type: 'radio',
    options: [
      {
        label:
          'Синие и голубые оттенки (технологичность, надёжность, профессионализм)',
        value: 'blue',
      },
      {
        label:
          'Зелёные и природные тона (экологичность, устойчивость, забота об окружающей среде)',
        value: 'green',
      },
      {
        label:
          'Оранжевые и жёлтые акценты (энергия, инновации, динамика, современность)',
        value: 'orange',
      },
      {
        label:
          'Серые и металлические (промышленность, прочность, надёжность, серьёзность)',
        value: 'gray',
      },
    ],
    allowOther: true,
  },
  // Question 4: Emotional perception
  {
    questionId: 'design-q4-emotions',
    questionText:
      'Какие эмоции должен вызывать сайт у посетителя при первом знакомстве?',
    section: 'design-q4-emotions',
    sectionTitle: 'Вопрос 4: Эмоциональное восприятие',
    order: 4,
    type: 'radio',
    options: [
      {
        label:
          'Доверие и уверенность (посетитель должен сразу понять, что компания — надёжный партнёр)',
        value: 'trust',
      },
      {
        label:
          'Интерес и любопытство (сайт должен интриговать, вызывать желание узнать больше)',
        value: 'interest',
      },
      {
        label:
          'Восхищение и уважение (впечатление от масштаба, технологий, профессионализма)',
        value: 'admiration',
      },
      {
        label:
          'Комфорт и понятность (всё должно быть интуитивно понятно, легко найти нужное)',
        value: 'comfort',
      },
    ],
    allowOther: true,
  },
];
