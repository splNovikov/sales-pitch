import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getQuestionnaireAnswers,
  saveQuestionnaireAnswers,
  clearQuestionnaireAnswers,
  clearAllQuestionnaireAnswers,
} from './questionnaire-storage';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    getStore: () => store,
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('questionnaire-storage', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  describe('getQuestionnaireAnswers', () => {
    it('returns empty object when no data exists', () => {
      const result = getQuestionnaireAnswers('test-key');
      expect(result).toEqual({});
    });

    it('returns parsed data from localStorage', () => {
      const testData = { q1: 'answer1', q2: 'answer2' };
      localStorageMock.setItem('test-key', JSON.stringify(testData));

      const result = getQuestionnaireAnswers('test-key');
      expect(result).toEqual(testData);
    });

    it('handles invalid JSON gracefully', () => {
      localStorageMock.setItem('test-key', 'invalid json');

      // Should return empty object on error
      const result = getQuestionnaireAnswers('test-key');
      expect(result).toEqual({});
    });
  });

  describe('saveQuestionnaireAnswers', () => {
    it('saves answers to localStorage', () => {
      const testData = { q1: 'answer1', q2: 'answer2' };
      saveQuestionnaireAnswers('test-key', testData);

      const saved = JSON.parse(localStorageMock.getItem('test-key') || '{}');
      expect(saved).toEqual(testData);
    });

    it('overwrites existing data', () => {
      localStorageMock.setItem('test-key', JSON.stringify({ q1: 'old' }));

      const newData = { q1: 'new', q2: 'answer2' };
      saveQuestionnaireAnswers('test-key', newData);

      const saved = JSON.parse(localStorageMock.getItem('test-key') || '{}');
      expect(saved).toEqual(newData);
    });
  });

  describe('clearQuestionnaireAnswers', () => {
    it('removes specific question IDs from storage', () => {
      const testData = {
        q1: 'answer1',
        q2: 'answer2',
        q3: 'answer3',
      };
      localStorageMock.setItem('test-key', JSON.stringify(testData));

      clearQuestionnaireAnswers('test-key', ['q1', 'q3']);

      const saved = JSON.parse(localStorageMock.getItem('test-key') || '{}');
      expect(saved).toEqual({ q2: 'answer2' });
    });

    it('handles non-existent question IDs gracefully', () => {
      const testData = { q1: 'answer1' };
      localStorageMock.setItem('test-key', JSON.stringify(testData));

      clearQuestionnaireAnswers('test-key', ['q999']);

      const saved = JSON.parse(localStorageMock.getItem('test-key') || '{}');
      expect(saved).toEqual(testData);
    });
  });

  describe('clearAllQuestionnaireAnswers', () => {
    it('removes all data for the storage key', () => {
      localStorageMock.setItem('test-key', JSON.stringify({ q1: 'answer1' }));

      clearAllQuestionnaireAnswers('test-key');

      expect(localStorageMock.getItem('test-key')).toBeNull();
    });
  });
});
