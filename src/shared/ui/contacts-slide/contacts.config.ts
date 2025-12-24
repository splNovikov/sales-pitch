import type { ContactCardProps } from '../contact-card';

/**
 * Contact information configuration
 * Maps contact names to their full details
 */
export const CONTACTS_CONFIG: Record<string, ContactCardProps> = {
  Artem: {
    name: 'Ситяков Артём',
    role: 'Руководитель отдела маркетинга',
    phone: '+7 927 110 84 88',
    email: 'a.sityakov@proxima.ooo',
    websiteLabel: 'proxima24.ru',
    variant: 'neutral',
  },
  Pasha: {
    name: 'Новиков Павел',
    role: 'Технический директор',
    phone: '+7 908 555 0606',
    email: 'p.novikov@proxima.ooo',
    websiteLabel: 'proxima24.ru',
    variant: 'neutral',
  },
};

/**
 * Available contact names
 */
export type ContactName = keyof typeof CONTACTS_CONFIG;
