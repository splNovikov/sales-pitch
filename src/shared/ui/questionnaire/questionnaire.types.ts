/**
 * Common types for questionnaire components
 */

export interface Question {
  questionId: string;
  questionText: string;
  section: string;
  sectionTitle: string;
  order: number;
}

export interface Answer {
  questionId: string;
  questionText: string;
  value: string;
}

export interface QuestionnaireFormData {
  answers: Answer[];
  metadata: {
    respondentEmail: string;
  };
}

export interface QuestionnaireConfig {
  /**
   * Unique storage key for localStorage
   */
  storageKey: string;
  /**
   * API endpoint URL for submitting answers
   */
  apiUrl: string;
  /**
   * Questionnaire slug for API
   */
  questionnaireSlug: string;
}
