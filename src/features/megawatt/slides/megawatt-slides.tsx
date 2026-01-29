import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { megawattCreatedAt } from './megawatt.meta';

export const megawattSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <MainTitleSlide
        title="Мегаватт"
        subtitle="Производитель блочно-модульных котельных и теплоэнергетического оборудования"
        createdAt={megawattCreatedAt}
      />
    ),
  },
  {
    id: 'about',
    header: undefined,
    content: <SectionTitleSlide title="О компании" />,
  },
  {
    id: 'products',
    header: undefined,
    content: <SectionTitleSlide title="Продукция / Решения" />,
  },
  {
    id: 'advantages',
    header: undefined,
    content: <SectionTitleSlide title="Преимущества" />,
  },
  {
    id: 'projects',
    header: undefined,
    content: <SectionTitleSlide title="Проекты" />,
  },
  {
    id: 'contacts',
    header: undefined,
    content: <SectionTitleSlide title="Контакты" />,
  },
];
