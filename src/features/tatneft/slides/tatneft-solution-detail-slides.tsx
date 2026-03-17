import { Space, Typography, List, Card, Row, Col } from 'antd';
import {
  ApartmentOutlined,
  PartitionOutlined,
  FundProjectionScreenOutlined,
  ThunderboltOutlined,
  SearchOutlined,
} from '@ant-design/icons';
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
import graphDetailedDiagram from './ml_diagrams/graph_detailed.svg';
import kohlsImage from './images/kohls.webp';
import vontierImage from './images/vontier.webp';
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
                    desc: 'Структура: узлы (метаданные устройств) и типы связей между ними. Наполняется данными: сигналы устройств, факторы времени, характеристики устройств и связей.',
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
                Гетерогенный граф состоит из узлов (метаданные устройств) и
                типов связей между ними. Граф наполняется данными: сигналы
                устройств, факторы времени, характеристики устройств и связей.
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
                какая группа связанных устройств требует тщательного
                рассмотрения мастером для предотвращения возможного сбоя.
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

  // Slide: Гетерогенный граф + Ключевые отличия от классики
  {
    id: 'graph-visualization',
    header: 'Гетерогенный граф: визуализация',
    content: (
      <ConstrainedContent>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={graphDetailedDiagram}
              alt="Детальная визуализация гетерогенного графа"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 400,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0, marginBottom: 12 }}>
              Ключевые отличия от классики
            </Title>
            <List
              size="small"
              grid={{ gutter: 16, xs: 1, sm: 2 }}
              dataSource={[
                'Много сигналов как единое целое — каждое устройство в контексте всей системы.',
                'Связи между устройствами закладываются в модель; граф даёт дополнительную информацию к сигналам.',
                'Сокращение ложнопозитивных аномалий за счёт комбинирования на уровне модели, а не эвристик.',
                'Шаблон поведения + вероятностный анализ отклонений.',
                'Интерпретация принятых решений моделью с точки зрения степени влияния узлов, связей и их данных.',
              ]}
              renderItem={item => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide: Гетерогенный граф и важность взаимосвязей
  {
    id: 'graph-advantages',
    header: 'Почему важны взаимосвязи',
    content: (
      <ConstrainedContent>
        <Row gutter={[16, 16]} align="stretch">
          <Col xs={24} sm={12} lg={8}>
            <Card style={{ height: '100%', minHeight: 220 }}>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <ApartmentOutlined style={{ fontSize: 56, color: '#009900' }} />
                <Text>
                  Прямое и косвенное взаимодействие: насос и электродвигатель
                  связаны даже без датчика между ними.
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card style={{ height: '100%', minHeight: 220 }}>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <PartitionOutlined style={{ fontSize: 56, color: '#009900' }} />
                <Text>
                  Типы рёбер и их семантика: веса могут передавать мощность,
                  крутящий момент и т.д.
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card style={{ height: '100%', minHeight: 220 }}>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <FundProjectionScreenOutlined
                  style={{ fontSize: 56, color: '#009900' }}
                />
                <Text>
                  Поведенческий эмбеддинг узла — его поведение в контексте всей
                  системы; можно предсказывать без прямых датчиков.
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card style={{ height: '100%', minHeight: 220 }}>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <ThunderboltOutlined
                  style={{ fontSize: 56, color: '#009900' }}
                />
                <Text>
                  Связь превращается в сильный сигнал: влияние устройства
                  распространяется по графу на удалённые узлы.
                </Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card style={{ height: '100%', minHeight: 220 }}>
              <Space
                direction="vertical"
                size="middle"
                style={{
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <SearchOutlined style={{ fontSize: 56, color: '#009900' }} />
                <Text>
                  Интерпретация: какие конкретно узлы и связи повлияли на
                  аномалию — для мастера это критично.
                </Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </ConstrainedContent>
    ),
  },

  // Section 3: Реальное применение — разделитель
  {
    id: 'section-3-intro',
    header: undefined,
    content: <SectionTitleSlide imageIndex={6} title="Реальное применение" />,
  },

  // Slide: Кейсы использования
  {
    id: 'use-cases',
    header: 'Кейсы использования',
    content: (
      <ConstrainedContent>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card
              title={
                <Text strong>
                  Kohl's — e-commerce платформа (Милпитас, США)
                </Text>
              }
              cover={
                <img
                  src={kohlsImage}
                  alt="Kohl's"
                  style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
              }
            >
              <Paragraph style={{ marginBottom: 12 }}>
                Розничная сеть: одежда, обувь, аксессуары, товары для дома.
                Собственная e-commerce платформа: каталог, умный поиск,
                рекомендации, сотни виртуальных серверов.
              </Paragraph>
              <Text strong>Задача:</Text>
              <Paragraph style={{ margin: '4px 0 12px' }}>
                Раннее обнаружение аномального поведения сервисов, приложений и
                серверов по логам ошибок и метрикам.
              </Paragraph>
              <Text strong>Результат:</Text>
              <Paragraph style={{ margin: '4px 0 0' }}>
                Своевременная реакция, масштабирование ресурсов. Сокращение
                финансовых потерь и стоимости поддержки при пиковой нагрузке.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={
                <Text strong>
                  Vontier / Gilbarco Veeder-Root — АЗС (Сиэтл, США)
                </Text>
              }
              cover={
                <img
                  src={vontierImage}
                  alt="Vontier"
                  style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
              }
            >
              <Paragraph style={{ marginBottom: 12 }}>
                Решения для автозаправочных станций: топливоразливочные колонки,
                оплата, учёт и автоматизация на АЗС.
              </Paragraph>
              <Text strong>Задача:</Text>
              <Paragraph style={{ margin: '4px 0 12px' }}>
                Система автоматического поиска аномального поведения устройств
                топливозаправочного оборудования.
              </Paragraph>
              <Text strong>Результат:</Text>
              <Paragraph style={{ margin: '4px 0 0' }}>
                Сокращение потерь топлива при некорректной работе измерительных
                приборов. Своевременное сервисное обслуживание помп топливных
                танков.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </ConstrainedContent>
    ),
  },
];
