/**
 * Central configuration for all presentations
 * Single source of truth for presentation metadata
 */

import {
  kirovStekloCreatedAt,
  kirovStekloTitle,
} from '~features/kirov-steklo/slides/kirov-steklo.meta';
import {
  niteosCreatedAt,
  niteosTitle,
} from '~features/niteos/slides/niteos.meta';
import {
  niteosAdvancedCreatedAt,
  niteosAdvancedTitle,
} from '~features/niteos/slides/niteos-advanced.meta';
import {
  niteosShortCreatedAt,
  niteosShortTitle,
} from '~features/niteos/slides/niteos-short.meta';
import {
  niteosQuestionnaireCreatedAt,
  niteosQuestionnaireTitle,
} from '~features/niteos/slides/niteos-questionnaire.meta';
import {
  hanskonnerCreatedAt,
  hanskonnerTitle,
} from '~features/hanskonner/slides/hanskonner.meta';
import {
  hanskonnerWebsiteCreatedAt,
  hanskonnerWebsiteTitle,
} from '~features/hanskonner/slides/hanskonner-website.meta';
import {
  hanskonnerRebornCreatedAt,
  hanskonnerRebornTitle,
} from '~features/hanskonner/slides-2/hanskonner-reborn.meta';
import { smzCreatedAt, smzTitle } from '~features/smz/slides/smz.meta';
import {
  smzBriefCreatedAt,
  smzBriefTitle,
} from '~features/smz/slides/smz-brief.meta';
import {
  smzSolutionCreatedAt,
  smzSolutionTitle,
} from '~features/smz/slides/smz-solution.meta';
import {
  smzRoadmapCreatedAt,
  smzRoadmapTitle,
} from '~features/smz/slides/smz-roadmap.meta';
import {
  proximaCreatedAt,
  proximaTitle,
} from '~features/proxima/slides/proxima.meta';
import {
  tatneftCreatedAt,
  tatneftTitle,
} from '~features/jaxel/slides/tatneft.meta';
import {
  tatneftKpCreatedAt,
  tatneftKpTitle,
} from '~features/tatneft/slides/tatneft-kp.meta';
import {
  solarisUnionCreatedAt,
  solarisUnionTitle,
} from '~features/solaris-union/slides/solaris-union.meta';
import {
  targetPitchCreatedAt,
  targetPitchTitle,
} from '~features/target-pitch/slides/target-pitch.meta';
import {
  eksimaAnalysisCreatedAt,
  eksimaAnalysisTitle,
} from '~features/eksima/slides/eksima-analysis.meta';
import {
  eksimaWebsiteAnalysisCreatedAt,
  eksimaWebsiteAnalysisTitle,
} from '~features/eksima/slides/eksima-website-analysis.meta';
import {
  eksimaB2BCabinetCreatedAt,
  eksimaB2BCabinetTitle,
} from '~features/eksima/slides/eksima-b2b-cabinet.meta';
import {
  eksimaPricingToolCreatedAt,
  eksimaPricingToolTitle,
} from '~features/eksima/slides/eksima-pricing-tool.meta';
import {
  eksimaKpCreatedAt,
  eksimaKpTitle,
} from '~features/eksima/slides/eksima-kp.meta';
import {
  eksimaDorabotkiCreatedAt,
  eksimaDorabotkiTitle,
} from '~features/eksima/slides/eksima-dorabotki.meta';
import {
  proposalAiCreatedAt,
  proposalAiTitle,
} from '~features/proposal-ai/slides/proposal-ai.meta';
import {
  saratovupakovkaCreatedAt,
  saratovupakovkaTitle,
} from '~features/saratovupakovka/slides/saratovupakovka.meta';
import {
  ppuPipesSolutionCreatedAt,
  ppuPipesSolutionTitle,
} from '~features/ppu-pipes/slides/ppu-pipes-solution.meta';
import {
  admixSiberiaCreatedAt,
  admixSiberiaTitle,
} from '~features/admix-siberia/slides/admix-siberia.meta';
import {
  admixSiberiaQuestionnaireCreatedAt,
  admixSiberiaQuestionnaireTitle,
} from '~features/admix-siberia/slides/admix-siberia-questionnaire.meta';
import { atisCreatedAt, atisTitle } from '~features/a-tis/slides/atis.meta';
import { senixCreatedAt, senixTitle } from '~features/senix/slides/senix.meta';
import {
  senixWebsiteCreatedAt,
  senixWebsiteTitle,
} from '~features/senix/slides/senix-website.meta';
import {
  rosomakhatulCreatedAt,
  rosomakhatulTitle,
} from '~features/rosomaha/slides/rosomakhatul.meta';
import {
  rosomahaB2BPortfolioCreatedAt,
  rosomahaB2BPortfolioTitle,
} from '~features/rosomaha/slides/rosomaha-b2b-portfolio.meta';
import {
  rosomakhatulKpCreatedAt,
  rosomakhatulKpTitle,
} from '~features/rosomaha/slides/rosomakhatul-kp.meta';
import { brausCreatedAt, brausTitle } from '~features/braus/slides/braus.meta';
import {
  cameohotelCreatedAt,
  cameohotelTitle,
  cameohotelVariantsCreatedAt,
  cameohotelVariantsTitle,
} from '~features/cameohotel/slides';
import {
  networkdevicesCreatedAt,
  networkdevicesTitle,
} from '~features/networkdevices/slides/networkdevices.meta';
import {
  asLedCreatedAt,
  asLedTitle,
} from '~features/as-led/slides/as-led.meta';
import {
  huchEntecCreatedAt,
  huchEntecTitle,
} from '~features/huch-entec/slides/huch-entec.meta';

/**
 * Presentation metadata
 */
export interface PresentationMeta {
  /**
   * Unique slug identifier (e.g., 'niteos', 'kirov-steklo')
   */
  slug: string;
  /**
   * Human-readable title
   */
  title: string;
  /**
   * Optional description
   */
  description?: string;
  /**
   * Date when presentation was created (ISO string format)
   */
  createdAt: string;
  /**
   * Whether to send notifications for this presentation (default: true)
   */
  notificationsEnabled?: boolean;
  /**
   * Whether to show this presentation on /visibility page (default: true)
   */
  showOnVisibility?: boolean;
  /**
   * Whether this presentation requires login (shows hardcoded login form)
   */
  requiresAuth?: boolean;
}

/**
 * All available presentations with their metadata
 */
export const presentations: PresentationMeta[] = [
  {
    slug: 'kirov-steklo',
    title: kirovStekloTitle,
    createdAt: kirovStekloCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'niteos',
    title: niteosTitle,
    createdAt: niteosCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'niteos-first-turn',
    title: niteosShortTitle,
    createdAt: niteosShortCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'niteos-advanced',
    title: niteosAdvancedTitle,
    createdAt: niteosAdvancedCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'niteos-questionnaire',
    title: niteosQuestionnaireTitle,
    createdAt: niteosQuestionnaireCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'hanskonner',
    title: hanskonnerTitle,
    createdAt: hanskonnerCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'hanskonner-website',
    title: hanskonnerWebsiteTitle,
    createdAt: hanskonnerWebsiteCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'hanskonner-reborn',
    title: hanskonnerRebornTitle,
    createdAt: hanskonnerRebornCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'smz',
    title: smzTitle,
    createdAt: smzCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'smz-brief',
    title: smzBriefTitle,
    createdAt: smzBriefCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'smz-solution',
    title: smzSolutionTitle,
    createdAt: smzSolutionCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'smz-roadmap',
    title: smzRoadmapTitle,
    createdAt: smzRoadmapCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'proxima',
    title: proximaTitle,
    createdAt: proximaCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'tatneft',
    title: tatneftTitle,
    createdAt: tatneftCreatedAt,
    notificationsEnabled: false,
    showOnVisibility: true,
  },
  {
    slug: 'tatneft-kp',
    title: tatneftKpTitle,
    createdAt: tatneftKpCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
    requiresAuth: true,
  },
  {
    slug: 'solaris-union',
    title: solarisUnionTitle,
    createdAt: solarisUnionCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'target-pitch',
    title: targetPitchTitle,
    createdAt: targetPitchCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'eksima-analysis',
    title: eksimaAnalysisTitle,
    createdAt: eksimaAnalysisCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'eksima-website-analysis',
    title: eksimaWebsiteAnalysisTitle,
    createdAt: eksimaWebsiteAnalysisCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'eksima-b2b-cabinet',
    title: eksimaB2BCabinetTitle,
    createdAt: eksimaB2BCabinetCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'eksima-pricing-tool',
    title: eksimaPricingToolTitle,
    createdAt: eksimaPricingToolCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'eksima-kp',
    title: eksimaKpTitle,
    createdAt: eksimaKpCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'eksima-dorabotki',
    title: eksimaDorabotkiTitle,
    createdAt: eksimaDorabotkiCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'proposal-ai',
    title: proposalAiTitle,
    createdAt: proposalAiCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'saratovupakovka',
    title: saratovupakovkaTitle,
    createdAt: saratovupakovkaCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'ppu-pipes-solution',
    title: ppuPipesSolutionTitle,
    createdAt: ppuPipesSolutionCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'admix-siberia',
    title: admixSiberiaTitle,
    createdAt: admixSiberiaCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'admix-siberia-quiz',
    title: admixSiberiaQuestionnaireTitle,
    createdAt: admixSiberiaQuestionnaireCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'a-tis',
    title: atisTitle,
    createdAt: atisCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'senix',
    title: senixTitle,
    createdAt: senixCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'senix-website',
    title: senixWebsiteTitle,
    createdAt: senixWebsiteCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'rosomakhatul',
    title: rosomakhatulTitle,
    createdAt: rosomakhatulCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'rosomakhatul-b2b-portfolio',
    title: rosomahaB2BPortfolioTitle,
    createdAt: rosomahaB2BPortfolioCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'rosomakhatul-kp',
    title: rosomakhatulKpTitle,
    createdAt: rosomakhatulKpCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'braus',
    title: brausTitle,
    createdAt: brausCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'cameohotel',
    title: cameohotelTitle,
    createdAt: cameohotelCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'cameohotel-variants',
    title: cameohotelVariantsTitle,
    createdAt: cameohotelVariantsCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'networkdevices',
    title: networkdevicesTitle,
    createdAt: networkdevicesCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'as-led',
    title: asLedTitle,
    createdAt: asLedCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
  {
    slug: 'huch-entec',
    title: huchEntecTitle,
    createdAt: huchEntecCreatedAt,
    notificationsEnabled: true,
    showOnVisibility: true,
  },
];

/**
 * Array of all presentation slugs
 */
export const presentationSlugs = presentations.map(p => p.slug);

/**
 * Get presentation metadata by slug
 */
export function getPresentationBySlug(
  slug: string
): PresentationMeta | undefined {
  return presentations.find(p => p.slug === slug);
}

/**
 * Get all presentations with notifications enabled
 */
export function getPresentationsWithNotifications(): PresentationMeta[] {
  return presentations.filter(p => p.notificationsEnabled !== false);
}

/**
 * Get all presentations visible on /visibility page
 */
export function getVisiblePresentations(): PresentationMeta[] {
  return presentations.filter(p => p.showOnVisibility !== false);
}

/**
 * Check if presentation is new (created less than 3 days ago)
 * @param createdAt - ISO date string
 * @returns True if presentation is less than 3 days old
 */
export function isPresentationNew(createdAt: string): boolean {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const daysDiff =
    (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff < 3;
}
