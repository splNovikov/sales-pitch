import { type LazyRouteFunction, type RouteObject } from 'react-router-dom';

export const lazyEmptyLayout: LazyRouteFunction<RouteObject> = async () => {
  const [Component] = await Promise.all([
    import('./empty-layout.ui').then(module => module.default),
  ]);
  return { Component };
};
