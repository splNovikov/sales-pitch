/**
 * Configuration for Niteos questionnaire
 */
import { niteosQuestionnaireQuestions } from './questionnaire-utils';
import type { QuestionnaireConfig } from '~shared/ui/questionnaire';

export const niteosQuestionnaireConfig: QuestionnaireConfig = {
  storageKey: 'niteos-questionnaire-answers',
  questionnaireSlug: 'niteos-quiz',
  apiUrl: `https://strapi-be.proxima24.ru/api/questionnaires/niteos-quiz/answers`,
};

export const niteosQuestionnaireConfig2: QuestionnaireConfig = {
  storageKey: 'niteos-questionnaire-answers-2',
  questionnaireSlug: 'niteos-quiz-2',
  apiUrl: `https://strapi-be.proxima24.ru/api/questionnaires/niteos-quiz-2/answers`,
};

export { niteosQuestionnaireQuestions };
