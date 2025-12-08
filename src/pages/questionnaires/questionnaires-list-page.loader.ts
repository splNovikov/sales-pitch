import { getQuestionnaires } from '~shared/api/questionnaires.api';

export default async function questionnairesListPageLoader() {
  try {
    const questionnaires = await getQuestionnaires();
    return questionnaires;
  } catch (error) {
    console.error('Error loading questionnaires:', error);
    return [];
  }
}

