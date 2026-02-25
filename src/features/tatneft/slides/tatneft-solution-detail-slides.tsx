import { Space, Typography, List, Card, Row, Col } from 'antd';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import mlHighLevelDiagram from './ml_diagrams/ml_high-level.svg';
import mlGraphDiagram from './ml_diagrams/ml_graph.svg';
import mlAutoencoderDiagram from './ml_diagrams/ml_autoencoder.svg';
import mlInterpretationDiagram from './ml_diagrams/ml_interpretation.svg';
import mlClassificatorDiagram from './ml_diagrams/ml_classificator.svg';
import mlDetailedDiagram from './ml_diagrams/ml_detailed.svg';
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
      <>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <Card>
              <img
                src={mlHighLevelDiagram}
                alt="Архитектура ML-решения"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 420,
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Card>
          </Col>
          <Col xs={24} md={10}>
            <Card style={{ minHeight: 420 }}>
              <List
                size="small"
                dataSource={[
                  {
                    title: '1. Гетерогенный граф',
                    desc: 'Объединяет характеристики оборудования, сигналы, временные факторы и связи в единую структуру, где вершины — узлы, а рёбра — их взаимосвязи.',
                  },
                  {
                    title: '2. Автоэнкодер',
                    desc: 'На базе графовой нейросети выучивает нормальный шаблон поведения всей системы и отдельных узлов.',
                  },
                  {
                    title: '3. Классификация аномалий',
                    desc: 'Отфильтровывает шум и относит значимые отклонения к вероятным типам сбоев, сокращая долю ложных тревог.',
                  },
                  {
                    title: '4. Модуль интерпретации',
                    desc: 'Выделяет узлы и связи, внесшие наибольший вклад в аномалию, и группирует их в понятные инженерные цепочки причин.',
                  },
                ]}
                renderItem={({ title, desc }) => (
                  <List.Item>
                    <Text strong>{title}.</Text> {desc}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </>
    ),
  },

  // Slide 4: Гетерогенный граф
  {
    id: 'heterogeneous-graph',
    header: 'Гетерогенный граф',
    content: (
      <ConstrainedContent>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <Card>
              <img
                src={mlGraphDiagram}
                alt="Гетерогенный граф"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 420,
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Card>
          </Col>
          <Col xs={24} md={10}>
            <Card style={{ minHeight: 420 }}>
              <Paragraph style={{ marginBottom: 8 }}>
                Все данные системы — характеристики оборудования, сигналы
                датчиков, временные факторы и схема взаимодействия узлов —
                объединяются в единую графовую структуру. Вершины графа
                соответствуют узлам оборудования, а рёбра описывают взаимосвязи
                между ними; дополнительные признаки хранятся на вершинах и
                рёбрах.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </ConstrainedContent>
    ),
  },

  // Slide 5: Автоэнкодер
  {
    id: 'autoencoder',
    header: 'Автоэнкодер',
    content: (
      <ConstrainedContent>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <Card>
              <img
                src={mlAutoencoderDiagram}
                alt="Автоэнкодер"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 420,
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Card>
          </Col>
          <Col xs={24} md={10}>
            <Card style={{ minHeight: 420 }}>
              <Paragraph style={{ marginBottom: 8 }}>
                В основе автоэнкодера — графовая нейронная сеть, которая учится
                характеру поведения всех устройств в системе: учитывает
                характеристики узлов, связи между ними, временные факторы и
                сигналы датчиков.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                На выходе кодировщика для каждого узла формируется
                поведенческий <Text strong>эмбеддинг</Text> в общем векторном
                пространстве, а декодировщик по этим эмбеддингам восстанавливает
                ожидаемые сигналы — эталон, относительно которого затем
                измеряются отклонения.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </ConstrainedContent>
    ),
  },

  // Slide 6: Классификатор
  {
    id: 'classifier',
    header: 'Классификатор',
    content: (
      <ConstrainedContent>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <Card>
              <img
                src={mlClassificatorDiagram}
                alt="Классификатор аномалий"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 420,
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Card>
          </Col>
          <Col xs={24} md={10}>
            <Card style={{ minHeight: 420 }}>
              <Paragraph style={{ marginBottom: 8 }}>
                Классификатор принимает на вход отклонения от выученного
                шаблона работы системы и определяет, какие из них являются
                истинными аномалиями, а какие — фоновым шумом.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                Он сочетает <Text strong>вероятностный анализатор</Text>,
                который по статистическим критериям отсеивает случайные
                всплески, и <Text strong>мультиклассификатор</Text>, который для
                каждой значимой аномалии оценивает её принадлежность к одному из
                типов сбоев.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </ConstrainedContent>
    ),
  },

  // Slide 7: Модуль интерпретации
  {
    id: 'interpretation-module',
    header: 'Модуль интерпретации',
    content: (
      <ConstrainedContent>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <Card>
              <img
                src={mlInterpretationDiagram}
                alt="Модуль интерпретации"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 420,
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Card>
          </Col>
          <Col xs={24} md={10}>
            <Card style={{ minHeight: 420 }}>
              <Paragraph style={{ marginBottom: 8 }}>
                Модуль интерпретации помогает понять,{' '}
                <Text strong>какие именно узлы и связи</Text> привели к
                аномальному поведению системы.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                Он выделяет наиболее значимые узлы и рёбра, повлиявшие на
                аномалию, и объединяет их в группы «соучастников» события —
                чтобы инженер видел не только факт отклонения, но и понятную
                картину причин.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </ConstrainedContent>
    ),
  },

  // Slide 7b: Детализированная архитектура
  {
    id: 'architecture-detailed',
    header: 'Детализированная архитектура решения',
    content: (
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={mlDetailedDiagram}
              alt="Детализированная архитектура ML-решения"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 600,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
        </Space>
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
