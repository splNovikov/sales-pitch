import { useLoaderData } from 'react-router-dom';
import { Slides, type SlideData } from '~widgets/slides';
import { kirovStekloSlides } from '~features/kirov-steklo/slides/kirov-steklo-slides';

// Load slides based on company slug
const getSlidesBySlug = (slug: string): SlideData[] => {
  // Map company slugs to their slide sets
  const slidesMap: Record<string, SlideData[]> = {
    'kirov-steklo': kirovStekloSlides,
  };

  return slidesMap[slug] || [];
};

export default function SlidesPage() {
  const { slug } = useLoaderData() as { slug: string };
  const slides = getSlidesBySlug(slug);

  return <Slides slides={slides} />;
}
