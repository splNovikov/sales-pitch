import { type LazyRouteFunction, type RouteObject } from 'react-router-dom';

export const lazyLayout: LazyRouteFunction<RouteObject> = async () => {
  const [Component] = await Promise.all([
    import('./layout.ui').then(module => module.default),
  ]);
  return { Component };
};
