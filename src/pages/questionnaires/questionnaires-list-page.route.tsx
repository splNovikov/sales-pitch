import { type RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/router';

export const questionnairesListPageRoute: RouteObject = {
  path: pathKeys.questionnaires,
  lazy: async () => {
    const [loader, Component] = await Promise.all([
      import('./questionnaires-list-page.loader').then(
        module => module.default
      ),
      import('./questionnaires-list-page.ui').then(module => module.default),
    ]);
    return { loader, Component };
  },
};
