import { getQuestionnaireSubmissions } from '~shared/api/questionnaires.api';
import type { LoaderFunctionArgs } from 'react-router-dom';

export default async function questionnaireAnswersPageLoader({
  params,
}: LoaderFunctionArgs) {
  const slug = params.slug;

  if (!slug) {
    throw new Error('Questionnaire slug is required');
  }

  try {
    const submissions = await getQuestionnaireSubmissions(slug);
    return submissions;
  } catch (error) {
    console.error('Error loading questionnaire submissions:', error);
    return [];
  }
}
