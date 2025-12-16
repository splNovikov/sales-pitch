import { Card, Row, Col, Space } from 'antd';
import { ContactCard, type ContactCardProps } from './contact-card';

export type ContactsSlideContact = ContactCardProps;

export interface ContactsSlideProps {
  contacts: ContactsSlideContact[];
}

/**
 * Generic slide section for displaying team / project contacts.
 * Wraps a set of ContactCard components into a responsive layout.
 */
export function ContactsSlide({ contacts }: ContactsSlideProps) {
  const count = contacts.length;

  const getColSpans = () => {
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
  };

  const colSpans = getColSpans();

  return (
    <Space
      orientation="vertical"
      size="middle"
      style={{
        width: '100%',
        padding: '8px 0',
      }}
    >
      <Card style={{ width: '100%' }}>
        <Row gutter={[24, 24]} style={{ width: '100%', marginInline: 0 }}>
          {contacts.map(contact => (
            <Col
              key={contact.email}
              xs={colSpans.xs}
              sm={colSpans.sm}
              md={colSpans.md}
              lg={colSpans.lg}
            >
              <ContactCard {...contact} size={contact.size ?? 'lg'} />
            </Col>
          ))}
        </Row>
      </Card>
    </Space>
  );
}
