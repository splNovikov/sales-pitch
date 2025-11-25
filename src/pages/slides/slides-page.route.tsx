import { type RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/router';

export const slidesPageRoute: RouteObject = {
  path: pathKeys.slides,
  lazy: async () => {
    const [loader, Component] = await Promise.all([
      import('./slides-page.loader').then(module => module.default),
      import('./slides-page.ui').then(module => module.default),
    ]);
    return { loader, Component };
  },
};
