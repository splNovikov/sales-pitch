/**
 * Common types for questionnaire components
 */

export type QuestionType = 'text' | 'radio' | 'checkbox';

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  questionId: string;
  questionText: string;
  section: string;
  sectionTitle: string;
  order: number;
  /**
   * Type of question input
   * @default 'text'
   */
  type?: QuestionType;
  /**
   * Options for radio or checkbox questions
   */
  options?: QuestionOption[];
  /**
   * Allow "other" option for radio/checkbox questions
   */
  allowOther?: boolean;
  /**
   * Placeholder for text input
   */
  placeholder?: string;
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
