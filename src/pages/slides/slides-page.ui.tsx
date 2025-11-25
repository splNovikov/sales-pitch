import { useLoaderData } from 'react-router-dom';
import { Typography } from 'antd';
import { Slides, type SlideData } from '~widgets/slides';

const { Text } = Typography;

// Temporary mock data - will be replaced with actual data loading based on slug
const getSlidesBySlug = (slug: string): SlideData[] => {
  // TODO: Load slides from API or data source based on slug
  return [
    {
      id: '1',
      header: 'Welcome',
      content: <Text>Slide 1 Content for {slug}</Text>,
    },
    {
      id: '2',
      header: 'Overview',
      content: <Text>Slide 2 Content for {slug}</Text>,
    },
    {
      id: '3',
      header: 'Conclusion',
      content: <Text>Slide 3 Content for {slug}</Text>,
    },
  ];
};

export default function SlidesPage() {
  const { slug } = useLoaderData() as { slug: string };
  const slides = getSlidesBySlug(slug);

  return <Slides slides={slides} />;
}
