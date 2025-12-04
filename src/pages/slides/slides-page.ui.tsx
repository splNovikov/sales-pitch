import { useLoaderData } from 'react-router-dom';
import { kirovStekloSlides } from '~features/kirov-steklo/slides/kirov-steklo-slides';
import { niteosSlides } from '~features/niteos/slides/niteos-slides';
import { niteosShortSlides } from '~features/niteos/slides/niteos-short-slides';
import { niteosAdvancedSlides } from '~features/niteos/slides/niteos-advanced-slides';
import {
  hanskonnerSlides,
  hanskonnerWebsiteSlides,
} from '~features/hanskonner/slides';
import { hanskonnerRebornSlides } from '~features/hanskonner/slides-2';
import {
  smzSlides,
  smzBriefSlides,
  smzSolutionSlides,
  smzRoadmapSlides,
} from '~features/smz/slides';
import { proximaSlides } from '~features/proxima/slides';
import { tatneftSlides } from '~features/jaxel/slides';
import { solarisUnionSlides } from '~features/solaris-union/slides';
import { targetPitchSlides } from '~features/target-pitch/slides';
import { presentationSlugs } from '~shared/lib/presentations.config';
import { Slides, type SlideData } from '~widgets/slides';

// Map company slugs to their slide sets
const slidesMap: Record<string, SlideData[]> = {
  'kirov-steklo': kirovStekloSlides,
  niteos: niteosSlides,
  'niteos-first-turn': niteosShortSlides,
  'niteos-advanced': niteosAdvancedSlides,
  hanskonner: hanskonnerSlides,
  'hanskonner-website': hanskonnerWebsiteSlides,
  'hanskonner-reborn': hanskonnerRebornSlides,
  smz: smzSlides,
  'smz-brief': smzBriefSlides,
  'smz-solution': smzSolutionSlides,
  'smz-roadmap': smzRoadmapSlides,
  proxima: proximaSlides,
  tatneft: tatneftSlides,
  'solaris-union': solarisUnionSlides,
  'target-pitch': targetPitchSlides,
};

/**
 * Load slides based on company slug
 * Validates slug against presentations config
 */
const getSlidesBySlug = (slug: string): SlideData[] => {
  // Optional: validate slug exists in config
  if (!presentationSlugs.includes(slug)) {
    console.warn(
      `Presentation slug "${slug}" not found in presentations config`
    );
  }

  return slidesMap[slug] || [];
};

export default function SlidesPage() {
  const { slug } = useLoaderData() as { slug: string };
  const slides = getSlidesBySlug(slug);

  return <Slides slides={slides} slug={slug} />;
}
