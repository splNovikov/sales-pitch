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

export { niteosQuestionnaireQuestions };
