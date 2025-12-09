/**
 * API functions for questionnaires
 */

const API_BASE_URL = 'https://strapi-be.proxima24.ru/api';

export interface QuestionnaireAnswer {
  id: number;
  questionId: string;
  questionText: string;
  value: string;
  submittedAt: string;
  respondentEmail?: string | null;
}

export interface QuestionnaireSubmission {
  id: string; // Use submittedAt as unique ID
  questionnaireSlug: string;
  questionnaireTitle?: string;
  answers: QuestionnaireAnswer[];
  submittedAt: string;
  respondentEmail?: string | null;
}

export interface QuestionnaireResponse {
  success: boolean;
  data: {
    questionnaire: {
      id: number;
      slug: string;
      title: string;
    };
    answers: QuestionnaireAnswer[];
    totalCount: number;
  };
}

export interface QuestionnaireInfo {
  slug: string;
  title: string;
  description?: string;
  submissionsCount?: number;
}

/**
 * Get list of all questionnaires
 */
export async function getQuestionnaires(): Promise<QuestionnaireInfo[]> {
  // For now, return hardcoded list. In future, this can fetch from API
  return [
    {
      slug: 'niteos-quiz',
      title: 'Niteos — Распределение заявок',
      description: 'Опросник по проблематике распределения заявок',
    },
    {
      slug: 'niteos-quiz-2',
      title: 'Niteos — Зависшие сделки',
      description: 'Опросник по проблематике зависших сделок в воронке',
    },
  ];
}

/**
 * Get submissions for a specific questionnaire
 */
export async function getQuestionnaireSubmissions(
  slug: string
): Promise<QuestionnaireSubmission[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/questionnaires/${slug}/answers`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch submissions: ${response.status} ${response.statusText}`
      );
    }

    const data: QuestionnaireResponse = await response.json();

    if (!data.success || !data.data) {
      throw new Error('Invalid response format');
    }

    const { questionnaire, answers } = data.data;

    // Group answers by submittedAt to create submissions
    const submissionsMap = new Map<string, QuestionnaireAnswer[]>();

    answers.forEach(answer => {
      const submittedAt = answer.submittedAt;
      if (!submissionsMap.has(submittedAt)) {
        submissionsMap.set(submittedAt, []);
      }
      submissionsMap.get(submittedAt)!.push(answer);
    });

    // Convert map to array of submissions
    const submissions: QuestionnaireSubmission[] = Array.from(
      submissionsMap.entries()
    )
      .map(([submittedAt, submissionAnswers]) => {
        // Get respondentEmail from first answer (they should all be the same for same submission)
        const respondentEmail = submissionAnswers[0]?.respondentEmail || null;

        return {
          id: submittedAt, // Use submittedAt as unique ID
          questionnaireSlug: questionnaire.slug,
          questionnaireTitle: questionnaire.title,
          answers: submissionAnswers,
          submittedAt,
          respondentEmail: respondentEmail || undefined,
        };
      })
      .sort((a, b) => {
        // Sort by submittedAt descending (newest first)
        return (
          new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
        );
      });

    return submissions;
  } catch (error) {
    console.error('Error fetching questionnaire submissions:', error);
    throw error;
  }
}

/**
 * Get a single submission by ID
 */
export async function getQuestionnaireSubmission(
  slug: string,
  submissionId: number
): Promise<QuestionnaireSubmission> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/questionnaires/${slug}/answers/${submissionId}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch submission: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // Handle different response formats
    if (data.data) {
      return data.data;
    }

    return data;
  } catch (error) {
    console.error('Error fetching questionnaire submission:', error);
    throw error;
  }
}
