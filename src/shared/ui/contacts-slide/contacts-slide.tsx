import { Card, Row, Col, Space } from 'antd';
import { useMemo } from 'react';
import { ContactCard, type ContactCardProps } from '../contact-card';
import { CONTACTS_CONFIG, type ContactName } from './contacts.config';
import { useContactsAnimation } from './use-contacts-animation';
import clsx from 'clsx';
import styles from './contacts-slide.module.css';

export interface ContactsSlideProps {
  /**
   * Array of contact names to display
   * Contacts will be fetched from CONTACTS_CONFIG
   *
   * @example
   * ```tsx
   * <ContactsSlide contacts={['Pasha', 'Artem']} />
   * ```
   */
  contacts: ContactName[];
  /**
   * Whether to animate contact cards appearance
   */
  animated?: boolean;
  /**
   * Base animation delay in milliseconds (default: 150)
   * Each card will have delay = baseAnimationDelay * index
   */
  baseAnimationDelay?: number;
}

/**
 * Generic slide section for displaying team / project contacts.
 * Wraps a set of ContactCard components into a responsive layout.
 *
 * @example
 * ```tsx
 * <ContactsSlide contacts={['Pasha', 'Artem']} animated />
 * ```
 */
export function ContactsSlide({
  contacts,
  animated = false,
  baseAnimationDelay = 150,
}: ContactsSlideProps) {
  const contactData = useMemo(
    () =>
      contacts
        .map(name => CONTACTS_CONFIG[name])
        .filter(
          (contact): contact is ContactCardProps => contact !== undefined
        ),
    [contacts]
  );

  const visibleIndices = useContactsAnimation(
    animated,
    contactData.length,
    baseAnimationDelay
  );

  const colSpans = useMemo(() => {
    const count = contactData.length;
    if (count === 1) {
      return { xs: 24, sm: 24, md: 20, lg: 16 };
    }
    if (count === 2) {
      return { xs: 24, sm: 24, md: 12, lg: 12 };
    }
    if (count === 3) {
      return { xs: 24, sm: 24, md: 12, lg: 8 };
    }
    // 4 и больше контактов
    return { xs: 24, sm: 12, md: 12, lg: 6 };
  }, [contactData.length]);

  return (
    <Space orientation="vertical" size="middle" className={styles.container}>
      <Card className={styles.card}>
        <Row gutter={[24, 24]} className={styles.row}>
          {contactData.map((contact, index) => {
            const isVisible = visibleIndices.has(index);
            const cardClassName = clsx(styles.contactCard, {
              [styles.contactCardVisible]: isVisible,
              [styles.contactCardHidden]: !isVisible && animated,
            });

            return (
              <Col
                key={contact.email}
                xs={colSpans.xs}
                sm={colSpans.sm}
                md={colSpans.md}
                lg={colSpans.lg}
              >
                <div className={cardClassName}>
                  <ContactCard {...contact} size={contact.size ?? 'lg'} />
                </div>
              </Col>
            );
          })}
        </Row>
      </Card>
    </Space>
  );
}
