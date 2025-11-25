import { useLoaderData } from 'react-router-dom';
import { Slides } from '~widgets/slides';

export default function SlidesPage() {
  const { slug } = useLoaderData() as { slug: string };

  return <Slides companySlug={slug} />;
}
