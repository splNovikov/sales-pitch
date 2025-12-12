/**
 * Configuration for Admix-Siberia questionnaire
 */
import { admixSiberiaQuestionnaireQuestions } from './admix-siberia-questionnaire-utils';
import type { QuestionnaireConfig } from '~shared/ui/questionnaire';

export const admixSiberiaQuestionnaireConfig: QuestionnaireConfig = {
  storageKey: 'admix-siberia-questionnaire-answers',
  questionnaireSlug: 'admix-siberia-quiz',
  apiUrl: `https://strapi-be.proxima24.ru/api/questionnaires/admix-siberia-quiz/answers`,
};

export { admixSiberiaQuestionnaireQuestions };
