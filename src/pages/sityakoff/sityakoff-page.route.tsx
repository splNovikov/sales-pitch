import { type RouteObject } from 'react-router-dom';
import { pathKeys } from '~shared/router';

export const sityakoffPageRoute: RouteObject = {
  path: pathKeys.sityakoff,
  lazy: async () => {
    const Component = await import('./sityakoff-page.ui').then(
      module => module.default
    );
    return { Component };
  },
};
