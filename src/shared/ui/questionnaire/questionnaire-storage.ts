/**
 * Utilities for managing questionnaire answers in localStorage
 */

/**
 * Get all saved answers from localStorage
 */
export function getQuestionnaireAnswers(
  storageKey: string
): Record<string, string> {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Error loading saved answers:', error);
    return {};
  }
}

/**
 * Save answers to localStorage
 */
export function saveQuestionnaireAnswers(
  storageKey: string,
  answers: Record<string, string>
): void {
  try {
    localStorage.setItem(storageKey, JSON.stringify(answers));
  } catch (error) {
    console.error('Error saving answers:', error);
  }
}

/**
 * Clear specific question answers from localStorage
 */
export function clearQuestionnaireAnswers(
  storageKey: string,
  questionIds: string[]
): void {
  try {
    const allAnswers = getQuestionnaireAnswers(storageKey);
    questionIds.forEach(questionId => {
      delete allAnswers[questionId];
    });
    saveQuestionnaireAnswers(storageKey, allAnswers);
  } catch (error) {
    console.error('Error clearing answers:', error);
  }
}

/**
 * Clear all answers from localStorage
 */
export function clearAllQuestionnaireAnswers(storageKey: string): void {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.error('Error clearing all answers:', error);
  }
}
