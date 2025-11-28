import { useLoaderData } from 'react-router-dom';
import { kirovStekloSlides } from '~features/kirov-steklo/slides/kirov-steklo-slides';
import { niteosSlides } from '~features/niteos/slides/niteos-slides';
import { niteosShortSlides } from '~features/niteos/slides/niteos-short-slides';
import { hanskonnerSlides } from '~features/hanskonner/slides/hanskonner-slides';
import {
  smzSlides,
  smzBriefSlides,
  smzSolutionSlides,
} from '~features/smz/slides';
import { Slides, type SlideData } from '~widgets/slides';

// Load slides based on company slug
const getSlidesBySlug = (slug: string): SlideData[] => {
  // Map company slugs to their slide sets
  const slidesMap: Record<string, SlideData[]> = {
    'kirov-steklo': kirovStekloSlides,
    niteos: niteosSlides,
    'niteos-first-turn': niteosShortSlides,
    hanskonner: hanskonnerSlides,
    smz: smzSlides,
    'smz-brief': smzBriefSlides,
    'smz-solution': smzSolutionSlides,
  };

  return slidesMap[slug] || [];
};

export default function SlidesPage() {
  const { slug } = useLoaderData() as { slug: string };
  const slides = getSlidesBySlug(slug);

  return <Slides slides={slides} slug={slug} />;
}
