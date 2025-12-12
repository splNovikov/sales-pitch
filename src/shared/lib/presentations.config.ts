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
    showOnVisibility: false,
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
