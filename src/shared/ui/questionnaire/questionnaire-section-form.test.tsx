import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuestionnaireSectionForm } from './questionnaire-section-form';
import type { Question } from './questionnaire.types';
import * as storage from './questionnaire-storage';

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
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

vi.mock('./questionnaire-storage', () => ({
  getQuestionnaireAnswers: vi.fn(() => ({})),
  saveQuestionnaireAnswers: vi.fn(),
}));

describe('QuestionnaireSectionForm', () => {
  const mockQuestions: Question[] = [
    {
      questionId: 'test-1',
      questionText: 'Test question 1',
      section: 'test-section',
      sectionTitle: 'Test Section',
      order: 1,
      type: 'text',
    },
    {
      questionId: 'test-2',
      questionText: 'Test question 2',
      section: 'test-section',
      sectionTitle: 'Test Section',
      order: 2,
      type: 'radio',
      options: [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' },
      ],
    },
    {
      questionId: 'test-3',
      questionText: 'Test question 3',
      section: 'test-section',
      sectionTitle: 'Test Section',
      order: 3,
      type: 'checkbox',
      options: [
        { label: 'Checkbox 1', value: 'chk1' },
        { label: 'Checkbox 2', value: 'chk2' },
      ],
    },
    {
      questionId: 'test-4',
      questionText: 'Test question 4',
      section: 'test-section',
      sectionTitle: 'Test Section',
      order: 4,
      type: 'checkbox',
      options: [
        { label: 'Checkbox A', value: 'chka' },
        { label: 'Checkbox B', value: 'chkb' },
      ],
      allowOther: true,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.clear();
  });

  it('renders text input for text questions', () => {
    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    expect(
      screen.getByPlaceholderText(/введите ваш ответ/i)
    ).toBeInTheDocument();
  });

  it('renders radio group for radio questions', () => {
    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('renders checkbox group for checkbox questions', () => {
    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    expect(screen.getByLabelText('Checkbox 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Checkbox 2')).toBeInTheDocument();
  });

  it('renders "other" field for checkbox questions with allowOther', () => {
    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    expect(screen.getByPlaceholderText(/другое/i)).toBeInTheDocument();
  });

  it('saves text input value to localStorage', async () => {
    const user = userEvent.setup();
    vi.spyOn(storage, 'getQuestionnaireAnswers').mockReturnValue({});
    const saveSpy = vi.spyOn(storage, 'saveQuestionnaireAnswers');

    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    const textInput = screen.getByPlaceholderText(/введите ваш ответ/i);
    await user.type(textInput, 'Test answer');

    await waitFor(() => {
      expect(saveSpy).toHaveBeenCalled();
      const lastCall = saveSpy.mock.calls[saveSpy.mock.calls.length - 1];
      expect(lastCall[1]).toHaveProperty('test-1', 'Test answer');
    });
  });

  it('saves checkbox selections to localStorage', async () => {
    const user = userEvent.setup();
    vi.spyOn(storage, 'getQuestionnaireAnswers').mockReturnValue({});
    const saveSpy = vi.spyOn(storage, 'saveQuestionnaireAnswers');

    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    const checkbox1 = screen.getByLabelText('Checkbox 1');
    await user.click(checkbox1);

    await waitFor(() => {
      expect(saveSpy).toHaveBeenCalled();
      const lastCall = saveSpy.mock.calls[saveSpy.mock.calls.length - 1];
      const saved = lastCall[1];
      expect(saved['test-3']).toBe(JSON.stringify(['chk1']));
    });
  });

  it('loads saved checkbox values from localStorage', async () => {
    vi.spyOn(storage, 'getQuestionnaireAnswers').mockReturnValue({
      'test-3': JSON.stringify(['chk1', 'chk2']),
    });

    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    await waitFor(() => {
      const checkbox1 = screen.getByLabelText('Checkbox 1') as HTMLInputElement;
      const checkbox2 = screen.getByLabelText('Checkbox 2') as HTMLInputElement;
      expect(checkbox1.checked).toBe(true);
      expect(checkbox2.checked).toBe(true);
    });
  });

  it('handles "other" field for checkbox questions', async () => {
    const user = userEvent.setup();
    vi.spyOn(storage, 'getQuestionnaireAnswers').mockReturnValue({});
    const saveSpy = vi.spyOn(storage, 'saveQuestionnaireAnswers');

    render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="test-section"
        storageKey="test-storage"
      />
    );

    const checkboxA = screen.getByLabelText('Checkbox A');
    await user.click(checkboxA);

    const otherField = screen.getByPlaceholderText(/другое/i);
    await user.type(otherField, 'Custom value');

    await waitFor(() => {
      expect(saveSpy).toHaveBeenCalled();
      const lastCall = saveSpy.mock.calls[saveSpy.mock.calls.length - 1];
      const saved = lastCall[1];
      expect(saved['test-4']).toContain('__other__');
      expect(saved['test-4_other']).toBe('Custom value');
    });
  });

  it('returns null when no questions match sectionId', () => {
    const { container } = render(
      <QuestionnaireSectionForm
        questions={mockQuestions}
        sectionId="non-existent"
        storageKey="test-storage"
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
