import { type LoaderFunctionArgs } from 'react-router-dom';

export default async function slidesPageLoader(args: LoaderFunctionArgs) {
  const { params } = args;
  const slug = params.slug;

  if (!slug) {
    throw new Response('Company slug is required', { status: 400 });
  }

  // TODO: Load slides data based on slug
  // For now, return the slug for component to use
  return {
    slug,
  };
}
