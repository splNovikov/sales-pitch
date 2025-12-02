import { type RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/router';

export const visibilityPageRoute: RouteObject = {
  path: pathKeys.visibility,
  lazy: async () => {
    const Component = await import('./visibility-page.ui').then(
      module => module.default
    );
    return { Component };
  },
};
