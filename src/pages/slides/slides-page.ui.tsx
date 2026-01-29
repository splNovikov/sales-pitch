import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { kirovStekloSlides } from '~features/kirov-steklo/slides/kirov-steklo-slides';
import { niteosSlides } from '~features/niteos/slides/niteos-slides';
import { niteosShortSlides } from '~features/niteos/slides/niteos-short-slides';
import { niteosAdvancedSlides } from '~features/niteos/slides/niteos-advanced-slides';
import { niteosQuestionnaireSlides } from '~features/niteos/slides/niteos-questionnaire-slides';
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
import { tatneftKpSlides } from '~features/tatneft/slides/tatneft-kp-slides';
import { solarisUnionSlides } from '~features/solaris-union/slides';
import { targetPitchSlides } from '~features/target-pitch/slides';
import { eksimaAnalysisSlides } from '~features/eksima/slides/eksima-analysis-slides';
import { eksimaWebsiteAnalysisSlides } from '~features/eksima/slides/eksima-website-analysis-slides';
import { eksimaB2BCabinetSlides } from '~features/eksima/slides/eksima-b2b-cabinet-slides';
import { eksimaPricingToolSlides } from '~features/eksima/slides/eksima-pricing-tool-slides';
import { eksimaKpSlides } from '~features/eksima/slides/eksima-kp-slides';
import { eksimaDorabotkiSlides } from '~features/eksima/slides/eksima-dorabotki-slides';
import { proposalAiSlides } from '~features/proposal-ai/slides';
import { saratovupakovkaSlides } from '~features/saratovupakovka/slides';
import { ppuPipesSolutionSlides } from '~features/ppu-pipes/slides';
import {
  admixSiberiaSlides,
  admixSiberiaQuestionnaireSlides,
} from '~features/admix-siberia/slides';
import { atisSlides } from '~features/a-tis/slides';
import { senixSlides } from '~features/senix/slides/senix-slides';
import { senixWebsiteSlides } from '~features/senix/slides/senix-website-slides';
import { rosomakhatulSlides } from '~features/rosomaha/slides/rosomakhatul-slides';
import { rosomakhatulKpSlides } from '~features/rosomaha/slides/rosomakhatul-kp-slides';
import { rosomahaB2BPortfolioSlides } from '~features/rosomaha/slides/rosomaha-b2b-portfolio-slides';
import { brausSlides } from '~features/braus/slides';
import {
  cameohotelSlides,
  cameohotelVariantsSlides,
} from '~features/cameohotel/slides';
import { networkdevicesSlides } from '~features/networkdevices/slides';
import { asLedSlides } from '~features/as-led/slides';
import { huchEntecSlides } from '~features/huch-entec/slides';
import {
  getPresentationBySlug,
  presentationSlugs,
} from '~shared/lib/presentations.config';
import {
  PresentationLoginForm,
  isPresentationAuthenticated,
} from '~shared/ui/presentation-login-form';
import { Slides, type SlideData } from '~widgets/slides';

// Map company slugs to their slide sets
const slidesMap: Record<string, SlideData[]> = {
  'kirov-steklo': kirovStekloSlides,
  niteos: niteosSlides,
  'niteos-first-turn': niteosShortSlides,
  'niteos-advanced': niteosAdvancedSlides,
  'niteos-questionnaire': niteosQuestionnaireSlides,
  hanskonner: hanskonnerSlides,
  'hanskonner-website': hanskonnerWebsiteSlides,
  'hanskonner-reborn': hanskonnerRebornSlides,
  smz: smzSlides,
  'smz-brief': smzBriefSlides,
  'smz-solution': smzSolutionSlides,
  'smz-roadmap': smzRoadmapSlides,
  proxima: proximaSlides,
  tatneft: tatneftSlides,
  'tatneft-kp': tatneftKpSlides,
  'solaris-union': solarisUnionSlides,
  'target-pitch': targetPitchSlides,
  'eksima-analysis': eksimaAnalysisSlides,
  'eksima-website-analysis': eksimaWebsiteAnalysisSlides,
  'eksima-b2b-cabinet': eksimaB2BCabinetSlides,
  'eksima-pricing-tool': eksimaPricingToolSlides,
  'eksima-kp': eksimaKpSlides,
  'eksima-dorabotki': eksimaDorabotkiSlides,
  'proposal-ai': proposalAiSlides,
  saratovupakovka: saratovupakovkaSlides,
  'ppu-pipes-solution': ppuPipesSolutionSlides,
  'admix-siberia': admixSiberiaSlides,
  'admix-siberia-quiz': admixSiberiaQuestionnaireSlides,
  'a-tis': atisSlides,
  senix: senixSlides,
  'senix-website': senixWebsiteSlides,
  rosomakhatul: rosomakhatulSlides,
  'rosomakhatul-kp': rosomakhatulKpSlides,
  'rosomakhatul-b2b-portfolio': rosomahaB2BPortfolioSlides,
  braus: brausSlides,
  cameohotel: cameohotelSlides,
  'cameohotel-variants': cameohotelVariantsSlides,
  networkdevices: networkdevicesSlides,
  'as-led': asLedSlides,
  'huch-entec': huchEntecSlides,
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
  const [, forceUpdate] = useState(0);
  const presentation = getPresentationBySlug(slug);
  const slides = getSlidesBySlug(slug);

  const isAuthenticated = isPresentationAuthenticated(slug);

  if (
    presentation &&
    presentation.authCredentialsB64 &&
    !isAuthenticated
  ) {
    return (
      <PresentationLoginForm
        slug={slug}
        credentialsB64={presentation.authCredentialsB64}
        title={presentation.title ? `Доступ: ${presentation.title}` : undefined}
        onSuccess={() => forceUpdate(n => n + 1)}
      />
    );
  }

  return <Slides slides={slides} slug={slug} />;
}
