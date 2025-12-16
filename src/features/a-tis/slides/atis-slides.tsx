import { Space, Typography } from 'antd';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { atisCreatedAt } from './atis.meta';
import atisWhiteLogo from '../atis-white-logo.png';
import { ContactsSlide } from '~shared/ui/contacts-slide';

const { Paragraph, Text } = Typography;

export const atisSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Space
          orientation="vertical"
          size="middle"
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'var(--app-spacing-md)',
            }}
          >
            <div
              aria-label="А‑ТИС"
              role="img"
              style={{
                width: '260px',
                maxWidth: '100%',
                height: '40px',
                background:
                  'linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)',
                WebkitMaskImage: `url(${atisWhiteLogo})`,
                maskImage: `url(${atisWhiteLogo})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
              }}
            />
          </div>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-sm)',
              marginBottom: 0,
            }}
          >
            Коммерческое предложение по созданию сйта и наполнению контентом
          </Paragraph>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          {formatDateForSlide(atisCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'final',
    header: 'Контакты',
    content: (
      <ContactsSlide
        contacts={[
          {
            name: 'Новиков Павел',
            role: 'Технический директор',
            phone: '+7 908 555 0606',
            email: 'p.novikov@proxima.ooo',
            websiteLabel: 'proxima24.ru',
            variant: 'green',
          },
          {
            name: 'Ситяков Артём',
            role: 'Руководитель отдела маркетинга',
            phone: '+7 927 110 84 88',
            email: 'a.sityakov@proxima.ooo',
            websiteLabel: 'proxima24.ru',
            variant: 'blue',
          },
        ]}
      />
    ),
  },
];
