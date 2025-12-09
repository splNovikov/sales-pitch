import { type RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/router';

export const questionnaireAnswersPageRoute: RouteObject = {
  path: pathKeys.questionnaireAnswers,
  lazy: async () => {
    const [loader, Component] = await Promise.all([
      import('./questionnaire-answers-page.loader').then(
        module => module.default
      ),
      import('./questionnaire-answers-page.ui').then(module => module.default),
    ]);
    return { loader, Component };
  },
};
