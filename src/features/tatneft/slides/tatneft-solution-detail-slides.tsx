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
                    desc: 'Узлы, время, связи, сигналы датчиков — единая структура.',
                  },
                  {
                    title: '2. Автоэнкодер',
                    desc: 'Кодировщик и декодировщик выучивают шаблон, формируют предиктивные сигналы.',
                  },
                  {
                    title: '3. Классификатор аномалий',
                    desc: 'К каким последствиям приведёт аномалия. Аномалия и предпосылки сбоя — вместе.',
                  },
                  {
                    title: '4. Модуль интерпретации',
                    desc: 'Какие узлы и связи повлияли на аномалию.',
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
              <Paragraph style={{ marginBottom: 12 }}>
                Граф объединяет в единую структуру характеристики узлов, факторы
                времени, характеристики связей и трансформированные сигналы
                датчиков.
              </Paragraph>
              <Paragraph style={{ marginBottom: 12 }}>
                Важны не только узлы, но и типы связей между ними: прямое и
                косвенное взаимодействие. Например, насос и электродвигатель
                связаны, даже если между ними нет датчика. На рёбрах могут быть
                веса — мощность, крутящий момент и т.п.
              </Paragraph>
              <Paragraph style={{ marginBottom: 0 }}>
                Благодаря такой структуре каждое устройство рассматривается в
                контексте всей системы. Поведение узла можно предсказать даже
                при отсутствии датчиков на нём — за счёт связей с соседними
                узлами.
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
              <Text strong>Кодировщик:</Text>
              <Paragraph style={{ margin: '4px 0 8px' }}>
                Выучивает шаблон поведения, формирует поведенческие эмбеддинги
                для каждого узла.
              </Paragraph>
              <Text strong>Декодировщик:</Text>
              <Paragraph style={{ margin: '4px 0 8px' }}>
                Восстанавливает ожидаемые сигналы по эмбеддингам.
              </Paragraph>
              <Text strong>Выход:</Text>
              <Paragraph style={{ margin: '4px 0 0' }}>
                Предиктивные сигналы датчиков — эталон для выявления отклонений.
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
              <Text strong>Задача:</Text>
              <Paragraph style={{ margin: '4px 0 8px' }}>
                К чему приведёт аномалия. Одна аномалия — разные последствия с
                разной вероятностью. Аномалию и предпосылки сбоя — вместе.
              </Paragraph>
              <Text strong>Вероятностный анализатор:</Text>
              <Paragraph style={{ margin: '4px 0 8px' }}>
                Проверяет соответствие шаблону, берёт несоответствующие, по
                гипотезе распределения исключает ложнопозитивные.
              </Paragraph>
              <Text strong>Мультиклассификатор:</Text>
              <Paragraph style={{ margin: '4px 0 0' }}>
                Вероятность каждого последствия — можно предложить самое
                вероятное или «все три» проблемы.
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
              <Text strong>Роль:</Text>
              <Paragraph style={{ margin: '4px 0 8px' }}>
                Анализатор важности критериев решения. Работает с эмбеддингами
                автоэнкодера (классификатор — только с предиктивным сигналом).
              </Paragraph>
              <Text strong>Выход:</Text>
              <Paragraph style={{ margin: '4px 0 8px' }}>
                Какие узлы и связи повлияли на аномалию. Группы «соучастников» —
                мастер понимает, где искать причину и что взять с собой.
              </Paragraph>
              <Text strong>Перспектива:</Text>
              <Paragraph style={{ margin: '4px 0 0' }}>
                Рекомендации по действиям.
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
              'Только временные ряды — сигналы датчиков по отдельности.',
              'Каждый сигнал анализируется независимо, затем результаты как-то объединяют эвристиками.',
              'Проблема: аномалия в одном месте и отсутствие в другом — это аномалия системы или нет? Всплеск в двух местах может быть нормой.',
              'Слабый учёт контекста и взаимосвязей между устройствами.',
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
              'Много сигналов как единое целое — каждое устройство в контексте всей системы.',
              'Связи между устройствами закладываются в модель; граф даёт дополнительную информацию к сигналам.',
              'Сокращение ложнопозитивных аномалий за счёт комбинирования на уровне модели, а не эвристик.',
              'Шаблон поведения + вероятностный анализ отклонений + интерпретация узлов и связей.',
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
              'Прямое и косвенное взаимодействие: насос и электродвигатель связаны даже без датчика между ними.',
              'Типы рёбер и их семантика: веса могут передавать мощность, крутящий момент и т.д.',
              'Поведенческий эмбеддинг узла — его поведение в контексте всей системы; можно предсказывать без прямых датчиков.',
              'Связь превращается в сильный сигнал: влияние устройства распространяется по графу на удалённые узлы.',
              'Интерпретация: какие конкретно узлы и связи повлияли на аномалию — для мастера это критично.',
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
