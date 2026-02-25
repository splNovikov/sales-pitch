import { Space, Typography, List, Card } from 'antd';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { tatneftSolutionDetailCreatedAt } from './tatneft-solution-detail.meta';
import tatneftLogo from './Tatneft-Logo.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Tatneft ML solution detail presentation
 * Technical deep-dive: GNN, autoencoder, classifier, use cases
 */
export const tatneftSolutionDetailSlides: SlideData[] = [
  // Slide 1: Intro — архитектура ML‑платформы
  {
    id: 'title',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={tatneftLogo}
          alt="Татнефть"
          style={{ maxWidth: 460, width: '100%', objectFit: 'contain' }}
        />
        <MainTitleSlide
          title="Архитектура ML - решения"
          subtitle="ПАО «Татнефть»"
          createdAt={tatneftSolutionDetailCreatedAt}
        />
      </Space>
    ),
  },

  // Section 1: Описание системы — разделитель
  {
    id: 'section-1-intro',
    header: undefined,
    content: <SectionTitleSlide imageIndex={0} title="Описание системы" />,
  },

  // Slide 3: Архитектура решения (верхнеуровневая диаграмма)
  {
    id: 'architecture-overview',
    header: 'Архитектура решения',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Архитектура решения (верхнеуровневая)
          </Title>
          <Paragraph>
            Заглушка под верхнеуровневую диаграмму: поток от источников данных и
            датчиков к хранилищу/графу, далее к автоэнкодеру, классификатору и
            модулю интерпретации.
          </Paragraph>
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 4: Гетерогенный граф
  {
    id: 'heterogeneous-graph',
    header: 'Гетерогенный граф',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Гетерогенный граф
          </Title>
          <Paragraph>
            Заглушка под слайд с описанием структуры графа, типов узлов, рёбер и
            примеров использования связей в модели.
          </Paragraph>
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 5: Автоэнкодер
  {
    id: 'autoencoder',
    header: 'Автоэнкодер',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Автоэнкодер
          </Title>
          <Paragraph>
            Заглушка под описание роли автоэнкодера: обучение нормального
            поведения системы, формирование поведенческих эмбеддингов и шаблонов
            работы.
          </Paragraph>
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 6: Классификатор
  {
    id: 'classifier',
    header: 'Классификатор',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Классификатор
          </Title>
          <Paragraph>
            Заглушка под описание классификатора аномалий и прогнозирования
            конкретных типов сбоев на основе выходов автоэнкодера.
          </Paragraph>
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 7: Модуль интерпретации
  {
    id: 'interpretation-module',
    header: 'Модуль интерпретации',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Модуль интерпретации
          </Title>
          <Paragraph>
            Заглушка под описание того, как модель переводит математические
            аномалии в понятные причины и рекомендации для инженеров.
          </Paragraph>
        </Card>
      </ConstrainedContent>
    ),
  },

  // Section 2: Преимущества решения — разделитель
  {
    id: 'section-2-intro',
    header: undefined,
    content: <SectionTitleSlide imageIndex={9} title="Преимущества решения" />,
  },

  // Slide 8: Классическое решение
  {
    id: 'classic-approach',
    header: 'Классический подход',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Классический подход
          </Title>
          <List
            size="default"
            dataSource={[
              'Табличные признаки без явных связей.',
              'Независимая обработка объектов.',
              'Ограничения: слабый учёт контекста и структуры.',
            ]}
            renderItem={item => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 9: Наше решение vs классическое
  {
    id: 'our-vs-classic',
    header: 'Ключевые отличия от классики',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Ключевые отличия от классики
          </Title>
          <List
            size="default"
            dataSource={[
              'Учёт структуры данных через граф.',
              'Совместное моделирование разных типов сущностей.',
              'Глубокое представление (автоэнкодер) + специализированный классификатор.',
            ]}
            renderItem={item => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  // Slide 10: Гетерогенный граф и важность взаимосвязей
  {
    id: 'graph-advantages',
    header: 'Почему важны взаимосвязи',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Почему важны взаимосвязи
          </Title>
          <List
            size="default"
            dataSource={[
              'Примеры, когда связь между объектами меняет решение.',
              'Улучшение качества за счёт контекста (узлы + рёбра).',
              'Устойчивость к шуму за счёт структуры графа.',
              'Типы узлов (пользователи, объекты, события, атрибуты и т.д.).',
              'Типы рёбер и их семантика.',
              'Почему важна гетерогенность (разные типы связей).',
            ]}
            renderItem={item => (
              <List.Item>
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  // Section 3: Реальное применение — разделитель
  {
    id: 'section-3-intro',
    header: undefined,
    content: <SectionTitleSlide imageIndex={6} title="Реальное применение" />,
  },

  // Slide 11: Кейсы использования
  {
    id: 'use-cases',
    header: 'Кейсы использования',
    content: (
      <ConstrainedContent>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            Кейсы использования
          </Title>
          <Paragraph>
            Заглушка под реальные кейсы применения ML‑платформы: примеры
            клиентов, достигнутые эффекты и метрики результативности.
          </Paragraph>
        </Card>
      </ConstrainedContent>
    ),
  },
];
