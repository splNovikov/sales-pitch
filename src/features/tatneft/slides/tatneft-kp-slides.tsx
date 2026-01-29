import { Space, Typography, List, Card } from 'antd';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { tatneftKpCreatedAt } from './tatneft-kp.meta';
import tatneftLogo from './Tatneft-Logo.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides data for Tatneft commercial proposal
 * Focus: автоматизация анализа аварийных сигналов
 */
export const tatneftKpSlides: SlideData[] = [
  // Slide 1: Title
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
          title="Автоматизация анализа поступающих аварийных сигналов с объектов"
          subtitle="Коммерческое предложение для ПАО «Татнефть»"
          createdAt={tatneftKpCreatedAt}
        />
      </Space>
    ),
  },

  // Slide 2: Section title — problem statement
  {
    id: 'problem-statement',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={0}
        title="Постановка задачи"
      />
    ),
  },

  // Slide 3: Масштаб, причины ложных тревог и текущий процесс
  {
    id: 'problem-scale-and-process',
    header: 'Масштаб и текущий процесс',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Масштаб</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>~60 000 аварийных сигналов в неделю</Text>
          </Paragraph>
        </Card>
        <Card>
          <Title level={4}>Ложные тревоги и процесс</Title>
          <List size="small">
            <List.Item>Неверные уставки — 40%</List.Item>
            <List.Item>Изменение режимов работы — 25%</List.Item>
            <List.Item>Износ оборудования — 20%</List.Item>
            <List.Item>Выведенное оборудование — 15%</List.Item>
            <List.Item>
              Ручной анализ сигналов и трендов,{' '}
              <Text strong>несколько часов на один объект</Text>
            </List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 4: Потребности Татнефти (Anomaly Detection)
  {
    id: 'tatneft-needs',
    header: 'Потребность',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Опережающее реагирование</Title>
          <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
            Требуется система{' '}
            <Text strong>предупредительного обнаружения аномалий (Anomaly Detection)</Text>, которая
            функционирует в режиме опережающего реагирования.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4}>До инцидента, не после</Title>
          <Paragraph style={{ marginBottom: 12 }}>
            Выявлять совокупность факторов, способных привести к срабатыванию сигналов, и
            своевременно рекомендовать корректирующие действия операторам, предотвращая инциденты
            до их возникновения.
          </Paragraph>
          <List size="small">
            <List.Item>Раннее выявление факторов риска до срабатывания аварийных сигналов</List.Item>
            <List.Item>Рекомендации по корректирующим действиям для операторов</List.Item>
            <List.Item>Режим опережающего реагирования вместо реактивного разбора после инцидента</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 5: Раздел — Пользовательский интерфейс
  {
    id: 'ui-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={4}
        title="Решение"
      />
    ),
  },

  // Slide 6: Три ключевые ценности решения
  {
    id: 'solution-values',
    header: 'Три ключевые ценности решения',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Пользовательский интерфейс</Title>
          <List size="small">
            <List.Item>Рабочие дашборды и оповещения для операторов и инженеров.</List.Item>
            <List.Item>Интерфейс, который показывает причину каждого предупреждения.</List.Item>
            <List.Item>Фильтрация, в том числе по объекту.</List.Item>
            <List.Item>Отдельный экран со сводной статистикой и простыми отчётами.</List.Item>
          </List>
        </Card>
        <Card>
          <Title level={4}>Раннее предупреждение о рисках</Title>
          <List size="small">
            <List.Item>Алгоритмы заранее находят отклонения в поведении оборудования.</List.Item>
            <List.Item>Система предупреждает о рисках до инцидента, снижая простои и потери.</List.Item>
          </List>
        </Card>
        <Card>
          <Title level={4}>Хранилище данных</Title>
          <List size="small">
            <List.Item>Единое хранилище телеметрии и информации об инцидентах.</List.Item>
            <List.Item>Данные могут переиспользоваться в других системах и аналитических витринах.</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },

  // Slide 7: Раздел — Реализация
  {
    id: 'implementation-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={2}
        title="Реализация проекта"
      />
    ),
  },

  // Slide 8: Общая схема взаимодействия компонентов (плейсхолдер)
  {
    id: 'architecture-overview',
    header: 'Общая схема взаимодействия компонентов',
    content: (
      <Card>
        <Paragraph style={{ marginBottom: 8 }}>
          Здесь будет размещена схема взаимодействия трёх слоёв решения: хранилище данных, слой анализа и слой
          пользовательского интерфейса.
        </Paragraph>
        <Paragraph type="secondary">
          TODO: добавить иллюстрацию общей архитектуры после согласования.
        </Paragraph>
      </Card>
    ),
  },

  // Slide 9: Слой данных — Data Lake
  {
    id: 'layer-data-lake',
    header: 'Слой данных (Data Lake)',
    content: (
      <Card>
        <List size="small">
          <List.Item>Собирает телеметрию оборудования и информацию об инцидентах в единое хранилище.</List.Item>
          <List.Item>Обеспечивает подготовку данных для аналитики и построения отчётов.</List.Item>
          <List.Item>Создаёт фундамент для повторного использования данных в других системах.</List.Item>
        </List>
      </Card>
    ),
  },

  // Slide 10: Слой анализа — раннее предупреждение о рисках
  {
    id: 'layer-analytics',
    header: 'Слой анализа и предупреждений',
    content: (
      <Card>
        <List size="small">
          <List.Item>Анализирует поведение оборудования на основе данных из хранилища.</List.Item>
          <List.Item>Находит отклонения и формирует оповещения о рисках до наступления инцидента.</List.Item>
          <List.Item>Передаёт в интерфейс информацию о рисках и причинах предупреждений.</List.Item>
        </List>
      </Card>
    ),
  },

  // Slide 11: Слой пользовательского интерфейса
  {
    id: 'layer-ui',
    header: 'Слой пользовательского интерфейса',
    content: (
      <Card>
        <List size="small">
          <List.Item>Отображает дашборды, оповещения и пояснения причин предупреждений.</List.Item>
          <List.Item>Учитывает ролевую модель: операторы, инженеры, аналитики.</List.Item>
          <List.Item>Предоставляет доступ к сводной статистике и отчётам.</List.Item>
        </List>
      </Card>
    ),
  },

  // Slide 12: Результат, этапы и оценка
  {
    id: 'implementation-summary',
    header: 'Результат, этапы и оценка',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4}>Что даёт проект на выходе</Title>
          <List size="small">
            <List.Item>Рабочий контур раннего предупреждения о рисках по ключевым объектам.</List.Item>
            <List.Item>Единое хранилище данных, пригодное для дальнейшего расширения и интеграций.</List.Item>
            <List.Item>Интерфейс для операторов и инженеров с оповещениями и базовой аналитикой.</List.Item>
          </List>
        </Card>
        <Card>
          <Title level={4}>Фазы реализации</Title>
          <List size="small">
            <List.Item>Фаза 1: уточнение требований, проектирование и выбор приоритетных объектов.</List.Item>
            <List.Item>Фаза 2: построение хранилища данных и базовых отчётов.</List.Item>
            <List.Item>Фаза 3: внедрение механизма раннего предупреждения и пользовательского интерфейса.</List.Item>
          </List>
        </Card>
        <Card>
          <Title level={4}>Сроки и стоимость</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Оценка сроков и бюджета формируется совместно после уточнения перечня объектов, объёма исторических данных
            и требований к интеграциям.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
];
