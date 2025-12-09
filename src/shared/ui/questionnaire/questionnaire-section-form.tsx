import React, { useEffect } from 'react';
import { Form, Input, Typography, Radio, Checkbox, Space } from 'antd';
import type { Question } from './questionnaire.types';
import {
  getQuestionnaireAnswers,
  saveQuestionnaireAnswers,
} from './questionnaire-storage';

const { Text } = Typography;
const { TextArea } = Input;

export interface QuestionnaireSectionFormProps {
  /**
   * Questions for this section
   */
  questions: Question[];
  /**
   * Section ID to filter questions
   */
  sectionId: string;
  /**
   * Storage key for localStorage
   */
  storageKey: string;
}

/**
 * Parse saved checkbox value from localStorage
 */
function parseCheckboxValue(savedValue: string): string[] {
  try {
    const parsed = JSON.parse(savedValue);
    return Array.isArray(parsed) ? parsed : [savedValue];
  } catch {
    return [savedValue];
  }
}

/**
 * Load saved answers from localStorage and prepare them for form
 */
function loadSavedAnswers(
  sectionQuestions: Question[],
  storageKey: string
): Record<string, string | string[]> {
  const savedAnswers = getQuestionnaireAnswers(storageKey);
  const sectionAnswers: Record<string, string | string[]> = {};

  sectionQuestions.forEach(question => {
    const savedValue = savedAnswers[question.questionId];
    if (!savedValue) return;

    if (question.type === 'checkbox') {
      const parsedValue = parseCheckboxValue(savedValue);
      // Remove "__other__" from array when loading (checkbox removed)
      const filteredValue = parsedValue.filter(v => v !== '__other__');
      sectionAnswers[question.questionId] = filteredValue;

      // Load other value if "__other__" was in array
      if (parsedValue.includes('__other__') && question.allowOther) {
        const otherFieldName = `${question.questionId}_other`;
        const otherValue = savedAnswers[otherFieldName];
        if (otherValue) {
          sectionAnswers[otherFieldName] = otherValue;
        }
      }
    } else if (question.type === 'radio') {
      if (savedValue === '__other__') {
        const otherValue = savedAnswers[`${question.questionId}_other`];
        if (otherValue) {
          sectionAnswers[`${question.questionId}_other`] = otherValue;
        }
      } else {
        const isInOptions = question.options?.some(
          opt => opt.value === savedValue
        );
        if (!isInOptions && question.allowOther) {
          // Value is not in options, so it's "other" (old format)
          sectionAnswers[`${question.questionId}_other`] = savedValue;
        } else {
          sectionAnswers[question.questionId] = savedValue;
        }
      }
    } else {
      sectionAnswers[question.questionId] = savedValue;
    }
  });

  return sectionAnswers;
}

/**
 * Process checkbox value for saving
 */
function processCheckboxValue(
  value: any,
  otherValue: any
): { processedArray: string[]; hasOther: boolean } {
  let checkboxArray: string[] = [];
  if (value !== undefined && value !== null) {
    checkboxArray = Array.isArray(value) ? value : value ? [value] : [];
  }

  let processedArray = [...checkboxArray];
  const hasOther = Boolean(otherValue && String(otherValue).trim());

  if (hasOther) {
    if (!processedArray.includes('__other__')) {
      processedArray.push('__other__');
    }
  } else {
    processedArray = processedArray.filter(v => v !== '__other__');
  }

  return { processedArray, hasOther };
}

/**
 * Form component for a single questionnaire section
 * Automatically saves answers to localStorage
 */
export function QuestionnaireSectionForm({
  questions,
  sectionId,
  storageKey,
}: QuestionnaireSectionFormProps) {
  const [form] = Form.useForm();

  // Get questions for this section - memoize to avoid recreating on every render
  const sectionQuestions = React.useMemo(
    () => questions.filter(q => q.section === sectionId),
    [questions, sectionId]
  );

  // Load saved answers from localStorage when sectionId changes
  useEffect(() => {
    try {
      const sectionAnswers = loadSavedAnswers(sectionQuestions, storageKey);

      if (Object.keys(sectionAnswers).length > 0) {
        form.resetFields();
        // Use setTimeout to ensure form is reset before setting values
        setTimeout(() => {
          form.setFieldsValue(sectionAnswers);
        }, 50);
      } else {
        form.resetFields();
      }
    } catch (error) {
      console.error('Error loading saved answers:', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionId, storageKey]);

  // Save answers to localStorage on change
  const handleValuesChange = () => {
    try {
      const formValues = form.getFieldsValue();
      const allAnswers = getQuestionnaireAnswers(storageKey);

      sectionQuestions.forEach(question => {
        const questionId = question.questionId;
        const otherFieldName = `${questionId}_other`;
        const value = formValues[questionId];
        const otherValue = formValues[otherFieldName];

        if (question.type === 'checkbox') {
          const { processedArray, hasOther } = processCheckboxValue(
            value,
            otherValue
          );

          if (processedArray.length > 0) {
            allAnswers[questionId] = JSON.stringify(processedArray);
          } else {
            delete allAnswers[questionId];
          }

          if (hasOther) {
            allAnswers[otherFieldName] = String(otherValue).trim();
          } else {
            delete allAnswers[otherFieldName];
          }
        } else if (question.type === 'radio') {
          const hasOtherRadio = Boolean(
            otherValue && String(otherValue).trim()
          );
          if (hasOtherRadio) {
            allAnswers[questionId] = '__other__';
            allAnswers[otherFieldName] = String(otherValue).trim();
          } else if (value && value !== '__other__') {
            allAnswers[questionId] = String(value).trim();
            delete allAnswers[otherFieldName];
          } else {
            delete allAnswers[questionId];
            if (otherFieldName in allAnswers) {
              delete allAnswers[otherFieldName];
            }
          }
        } else {
          const stringValue =
            typeof value === 'string'
              ? value.trim()
              : String(value || '').trim();
          if (stringValue) {
            allAnswers[questionId] = stringValue;
          } else {
            delete allAnswers[questionId];
          }
        }
      });

      saveQuestionnaireAnswers(storageKey, allAnswers);
    } catch (error) {
      console.error('Error saving answers:', error);
    }
  };

  if (sectionQuestions.length === 0) {
    return null;
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      autoComplete="off"
    >
      {sectionQuestions.map(question => {
        const questionType = question.type || 'text';
        const otherFieldName = `${question.questionId}_other`;

        return (
          <React.Fragment key={question.questionId}>
            <Form.Item
              name={question.questionId}
              label={
                <Text>
                  <Text strong>{question.order}.</Text> {question.questionText}
                </Text>
              }
            >
              {questionType === 'radio' && question.options ? (
                <>
                  <Radio.Group>
                    <Space
                      direction="vertical"
                      style={{ width: '100%', display: 'flex' }}
                    >
                      {question.options.map(option => (
                        <Radio key={option.value} value={option.value}>
                          {option.label}
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                  {question.allowOther && (
                    <Form.Item name={otherFieldName} style={{ marginTop: 8 }}>
                      <TextArea
                        rows={3}
                        placeholder="Другое (укажите свое значение)"
                        showCount
                        maxLength={2000}
                      />
                    </Form.Item>
                  )}
                </>
              ) : questionType === 'checkbox' && question.options ? (
                <Checkbox.Group>
                  <Space
                    direction="vertical"
                    style={{ width: '100%', display: 'flex' }}
                  >
                    {question.options.map(option => (
                      <Checkbox key={option.value} value={option.value}>
                        {option.label}
                      </Checkbox>
                    ))}
                  </Space>
                </Checkbox.Group>
              ) : (
                <TextArea
                  rows={3}
                  placeholder={question.placeholder || 'Введите ваш ответ...'}
                  showCount
                  maxLength={2000}
                />
              )}
            </Form.Item>
            {questionType === 'checkbox' && question.allowOther && (
              <Form.Item name={otherFieldName} style={{ marginTop: 8 }}>
                <TextArea
                  rows={3}
                  placeholder="Другое (укажите свое значение)"
                  showCount
                  maxLength={2000}
                />
              </Form.Item>
            )}
          </React.Fragment>
        );
      })}
    </Form>
  );
}
