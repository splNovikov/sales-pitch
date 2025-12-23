import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { cameohotelSlides } from './cameohotel-slides';
import { cameohotelVariantsCreatedAt } from './cameohotel-variants.meta';

/**
 * Variant slides for "Камея, варианты реализации осовремениявания сайта"
 *
 * Reuses the base Cameo Hotel slides, but overrides the title slide to reflect
 * the new presentation name and createdAt date.
 */
export const cameohotelVariantsSlides: SlideData[] = cameohotelSlides.map(
  slide =>
    slide.id === 'title'
      ? {
          ...slide,
          content: (
            <MainTitleSlide
              title="Камея"
              subtitle="Варианты реализации осовремениявания сайта"
              description="Разбор возможных подходов к осовременению сайта Cameo Hotel: от Bitrix до Next.js с профессиональным дизайном"
              createdAt={cameohotelVariantsCreatedAt}
              location="cameohotel.ru"
            />
          ),
        }
      : slide
);
