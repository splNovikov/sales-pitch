import { Space, Typography, List, Card, Table, Row, Col } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { tatneftKpCreatedAt } from './tatneft-kp.meta';
import ganttImage from './gantt.png';
import tatneftLogo from './Tatneft-Logo.png';
import black_list_tatn from './black_list_tatn.jpeg';
import highLevelDiagram from './diagrams/high-level.svg';
import dataLakeDiagram from './diagrams/data_lake.svg';
import subSystemDiagram from './diagrams/sub-system.svg';
import subSystemDiagram1 from './diagrams/sub-system_1.svg';
import subSystemDiagram2 from './diagrams/sub-system_2.svg';
import subSystemDiagram3 from './diagrams/sub-system_3.svg';
import subSystemDiagram4 from './diagrams/sub-system_4.svg';
import subSystemDiagram5 from './diagrams/sub-system_5.svg';
import { FileText, Target, Award } from 'lucide-react';

const { Title, Paragraph, Text } = Typography;

const iconStyle = {
  width: 16,
  height: 16,
  color: 'var(--ant-color-text-secondary)',
  flexShrink: 0,
  display: 'block',
} as const;

const iconWrapStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  lineHeight: 1,
} as const;

const dataLakePhases: RoadmapItem[] = [
  {
    title: 'Подготовительная фаза (Фаза 1)',
    duration: 'март – июнь 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
    completed: true,
  },
  {
    title: 'Построение и наполнение единой БД (Фаза 2)',
    description:
      'Развёртывание хранилища, ETL из источников организации, описание структуры данных.',
    duration: 'июль – ноябрь 2026',
    icon: <CalendarOutlined />,
    color: 'blue',
    subSteps: [
      {
        title: 'Разработка ETL-процессов выгрузки данных',
        start: '01.07.2026',
        end: '31.10.2026',
        result: 'Настроенные механизмы сбора',
      },
      {
        title: 'Построение и наполнение единой БД',
        start: '01.08.2026',
        end: '31.10.2026',
        result: 'База данных с историческими данными',
      },
    ],
  },
  {
    title: 'Накопление и анализ данных (Фаза 3)',
    description:
      'Загрузка исторических архивов, накопление оперативных данных, аналитический отчёт и наборы для настройки алгоритмов.',
    duration: 'сентябрь – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'green',
    subSteps: [
      {
        title: 'Загрузка исторических данных',
        start: '21.09.2026',
        end: '30.10.2026',
        result: 'Оцифрованный архив в БД',
      },
      {
        title: 'Накопление данных в реальном времени',
        start: '01.10.2026',
        end: '20.12.2026',
        result: 'Набор оперативных данных',
      },
      {
        title: 'Анализ исторических и накопленных данных',
        start: '20.10.2026',
        end: '20.12.2026',
        result: 'Аналитический отчёт',
      },
    ],
  },
];

const solutionValuesRoadmap: RoadmapItem[] = [
  {
    title: 'Хранилище данных',
    icon: <CalendarOutlined />,
    color: 'blue',
    subSteps: [
      { title: 'Единое хранилище телеметрии и информации об инцидентах' },
      {
        title:
          'Данные могут переиспользоваться в других системах и аналитических витринах',
      },
    ],
  },
  {
    title: 'Раннее предупреждение о рисках',
    icon: <CalendarOutlined />,
    color: 'green',
    subSteps: [
      {
        title: 'Алгоритмы заранее находят отклонения в поведении оборудования',
      },
      {
        title:
          'Система предупреждает о рисках до инцидента, снижая простои и потери',
      },
    ],
  },
  {
    title: 'Пользовательский интерфейс',
    icon: <CalendarOutlined />,
    color: 'purple',
    subSteps: [
      {
        title: 'Рабочие дашборды и оповещения для операторов и инженеров',
      },
      {
        title: 'Интерфейс показывает причину каждого предупреждения',
      },
      { title: 'Фильтрация, в том числе по объекту' },
      {
        title: 'Отдельный экран со сводной статистикой и простыми отчётами',
      },
    ],
  },
];

const preparatoryPhases: RoadmapItem[] = [
  {
    title: 'Определение набора ДНС',
    description:
      'Согласование списка объектов мониторинга для включения в систему.',
    duration: 'март 2026',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Группировка ДНС',
    description:
      'Формирование структуры групп объектов для последующего мониторинга.',
    duration: 'апрель 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Подготовка архитектуры системы',
    description:
      'Проектирование технической архитектуры решения для обеспечения масштабируемости.',
    duration: 'март – июнь 2026',
    icon: <CalendarOutlined />,
    color: 'green',
  },
];

const analyticsPhases: RoadmapItem[] = [
  {
    title: 'Подготовительная фаза (Фаза 1)',
    duration: 'март – июнь 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
    completed: true,
  },
  {
    title: 'Data Lake (Фазы 2–3)',
    duration: 'июль – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'blue',
    completed: true,
  },
  {
    title: 'Построение подсистемы поиска отклонений (Фаза 4)',
    description: 'Разработка алгоритмов, технический интерфейс для проверки.',
    duration: 'декабрь 2026 – июнь 2027',
    icon: <CalendarOutlined />,
    color: 'blue',
    subSteps: [
      {
        title: 'Построение алгоритма поиска аномалий',
        start: '21.12.2026',
        end: '20.06.2027',
        result: 'Работающий алгоритм',
      },
      {
        title: 'Разработка интерфейса для проверки подсистемы',
        start: '01.04.2027',
        end: '20.06.2027',
        result: 'Технический UI',
      },
    ],
  },
  {
    title: 'Проверка на исторических данных (Фаза 5)',
    description: 'Тестирование на архиве, отчёт с метриками точности.',
    duration: 'май – июнь 2027',
    icon: <CalendarOutlined />,
    color: 'orange',
    subSteps: [
      {
        title: 'Проверка подсистемы на исторических данных',
        start: '17.05.2027',
        end: '20.06.2027',
        result: 'Отчёт о тестировании',
      },
      { title: 'Экспертные сессии с ЕДС: разбор ошибок, уточнение причин FP' },
    ],
  },
  {
    title: 'Настройка по результатам проверки (Фаза 6)',
    description: 'Калибровка порогов и параметров, оптимизированная версия.',
    duration: 'июнь – сентябрь 2027',
    icon: <CalendarOutlined />,
    color: 'green',
    subSteps: [
      {
        title: 'Настройка системы по результатам проверки',
        start: '21.06.2027',
        end: '05.09.2027',
        result: 'Откалиброванный алгоритм',
      },
      {
        title: 'Подготовка к внедрению: эксплуатационные регламенты, обучение',
      },
    ],
  },
];

const uiPhases: RoadmapItem[] = [
  {
    title: 'Подготовительная и Data Lake (Фазы 1–3)',
    duration: 'март – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
    completed: true,
  },
  {
    title: 'Подсистема предупреждений (Фазы 4–6)',
    duration: 'декабрь 2026 – сентябрь 2027',
    icon: <CalendarOutlined />,
    color: 'blue',
    completed: true,
  },
  {
    title: 'Разработка графического интерфейса оператора системы (Фаза 7)',
    description:
      'Дашборд, карточка события, объяснения, обратная связь (разметка диспетчера), доступы и инструкция пользователя.',
    duration: 'июнь – август 2027',
    icon: <CalendarOutlined />,
    color: 'purple',
    subSteps: [
      {
        title: 'Разработка интерфейса оператора',
        start: '21.06.2027',
        end: '22.08.2027',
        result: 'Пользовательский интерфейс',
      },
      {
        title:
          'UX-исследование с диспетчерами: сценарии, прототипы, требования',
      },
      {
        title:
          'Разработка интерфейса оператора (дашборд, карточка события, объяснения)',
      },
      {
        title:
          'Интерфейс обратной связи (разметка диспетчера) + аудит действий',
      },
      { title: 'ИБ и доступы в UI (RBAC), журналирование, тесты' },
    ],
  },
];

const crossPhases: RoadmapItem[] = [
  {
    title: 'Разработка компонентов (Фазы 2–7)',
    duration: 'июль 2026 – сентябрь 2027',
    icon: <CalendarOutlined />,
    color: 'purple',
    completed: true,
  },
  {
    title: 'Внедрение системы (Фаза 8)',
    description:
      'Развёртывание в промышленной среде, поэтапное подключение групп ДНС, проверка в реальном времени.',
    duration: 'сентябрь 2027 – апрель 2028',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Приёмка системы (Фаза 9)',
    description:
      'Пользовательское тестирование, демонстрация соответствия требованиям, передача документации и прав.',
    duration: 'апрель 2028 – май 2028',
    icon: <CalendarOutlined />,
    color: 'gold',
  },
];

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
    content: <SectionTitleSlide imageIndex={0} title="Постановка задачи" />,
  },

  // Slide 3: Масштаб, причины аварийных тревог и текущий процесс
  {
    id: 'problem-scale-and-process',
    header: 'Масштаб и текущий процесс',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              За период 04–10.08.2025 в разрезе НГДУ наибольшее количество
              аварийных сигналов поступило по{' '}
              <Text strong>скважинам (38%)</Text> и{' '}
              <Text strong>ДНС, ГЗНУ, УПСВ (36%)</Text>.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Структура причин тревог по типам объектов (период 04–10.08.2025)
            </Title>
            <List size="small">
              <List.Item>
                <Text strong>ДНС, ГЗНУ, УПСВ:</Text> отклонения по давлению 52%,
                уровни в ёмкости 19%, обрыв связи 10%, прочие 9%, загазованность
                6%, ДНС 5%.
              </List.Item>
              <List.Item>
                <Text strong>Скважины:</Text> обрыв связи 50%, отклонения по
                давлению 29%, прочие 18%, сработки ПОС 3%.
              </List.Item>
              <List.Item>
                <Text strong>ГЗУ, БГ:</Text> обрыв связи 46%, отклонения по
                давлению 38%, прочие 13%, сработки ПОС 3%.
              </List.Item>
            </List>
          </Card>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              Основные причины аварийных тревог
            </Title>
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <List size="small">
                  <List.Item>
                    Изменение объёмов перекачиваемой жидкости
                  </List.Item>
                  <List.Item>
                    Неверное определение значений сигнализаций при формировании
                    перечней блокировок и сигнализаций
                  </List.Item>
                  <List.Item>Износ оборудования</List.Item>
                  <List.Item>
                    Снижение проходного сечения трубопроводов
                  </List.Item>
                  <List.Item>Неисправность средств КИПиА</List.Item>
                </List>
              </Col>
              <Col xs={24} md={12}>
                <List size="small">
                  <List.Item>Несовершенство существующей АСУТП</List.Item>
                  <List.Item>
                    Временный вывод из эксплуатации оборудования
                  </List.Item>
                  <List.Item>Отказ технологического оборудования</List.Item>
                  <List.Item>
                    Ручной анализ сигналов и трендов,{' '}
                    <Text strong>несколько часов на один объект</Text>
                  </List.Item>
                </List>
              </Col>
            </Row>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 4: Потребности Татнефти (Anomaly Detection)
  {
    id: 'tatneft-needs',
    header: 'Потребность',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="large" style={{ width: '100%' }}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              Опережающее реагирование
            </Title>
            <Paragraph style={{ fontSize: 'var(--app-font-size-md)' }}>
              Требуется система{' '}
              <Text strong>
                предупредительного обнаружения аномалий (Anomaly Detection)
              </Text>
              , которая функционирует в режиме опережающего реагирования.
            </Paragraph>
          </Card>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              До инцидента, не после
            </Title>
            <Paragraph style={{ marginBottom: 12 }}>
              Выявлять совокупность факторов, способных привести к срабатыванию
              сигналов, и своевременно рекомендовать корректирующие действия
              операторам, предотвращая инциденты до их возникновения.
            </Paragraph>
            <List size="small">
              <List.Item>
                Раннее выявление факторов риска до срабатывания аварийных
                сигналов
              </List.Item>
              <List.Item>
                Подготовка к рекомендациям по корректирующим действиям (после
                этапа сбора обратной связи)
              </List.Item>
              <List.Item>
                Режим опережающего реагирования вместо реактивного разбора после
                инцидента
              </List.Item>
            </List>
            <Paragraph
              type="secondary"
              style={{ marginTop: 12, marginBottom: 0 }}
            >
              Предлагаемое решение не включает в текущей версии рекомендации по
              корректирующим действиям оператору: необходим этап сбора обратной
              связи от операторов в ходе работы внедрённой системы.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 5: Раздел — Пользовательский интерфейс
  {
    id: 'ui-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={4} title="Решение" />,
  },

  // Slide 6: Три ключевые ценности решения
  {
    id: 'solution-values',
    header: 'Три ключевые ценности итогового решения',
    content: (
      <Roadmap items={solutionValuesRoadmap} mode="alternate" maxWidth={1200} />
    ),
  },

  // Объекты мониторинга: ДНС и данные (после Потребность — для понимания рамок КП)
  {
    id: 'problem-dns-context',
    header: 'Объекты мониторинга: ДНС и данные',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Исходные допущения (ДНС)
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              В рамках настоящего КП мы исходим из следующих допущений. На их
              базе строится расчёт и структура коммерческого предложения.
            </Paragraph>
            <List size="small">
              <List.Item>
                В рамках КП принимаем: ДНС — ключевой и наиболее многочисленный
                объект мониторинга для целей настоящего предложения.
              </List.Item>
              <List.Item>
                Оценочный масштаб для расчётов: порядка сотни единиц ДНС
                (примерно 200 шт).
              </List.Item>
            </List>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Текущее состояние данных
            </Title>
            <List size="small">
              <List.Item>
                Данные с ДНС поступают по разным каналам с разной
                периодичностью.
              </List.Item>
              <List.Item>
                Данные по ДНС распределены по разным системам хранения и
                обработки данных.
              </List.Item>
              <List.Item>
                Данные по ДНС разделяются на мгновенные (текущие) и архивные.
              </List.Item>
              <List.Item>
                Данных по ДНС много и они обновляются часто; на данный момент
                глубина архива исторических данных не более 2 месяцев.
              </List.Item>
              <List.Item>
                Нет единого места хранения и агрегации данных, что значительно
                усложняет их анализ и обработку.
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'architecture-overview',
    header: 'Общая схема взаимодействия компонентов',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={highLevelDiagram}
              alt="Общая схема взаимодействия компонентов"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 500,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
          <Paragraph
            style={{ marginTop: 16, marginBottom: 0, textAlign: 'center' }}
          >
            Схема взаимодействия трёх компонентов: хранилище данных, подсистема
            раннего предупреждения, интерфейс оператора.
          </Paragraph>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'solution-scalability-scope',
    header: 'Масштабируемость и область применения',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Не только решение под ДНС
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Система готовится как платформа, а не разовый проект под один тип
              объектов. В скоупе текущего КП — только ДНС; по результатам
              внедрения к той же архитектуре и методикам можно подключать любые
              другие типы объектов (скважины, ГЗУ, УПСВ и т.д.).
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Почему именно ДНС в первом очереди
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              По данным за период 04–10.08.2025 наибольшее количество аварийных
              сигналов поступило по <Text strong>скважинам (38%)</Text> и по
              объектам <Text strong>ДНС, ГЗНУ, УПСВ (36%)</Text>. Старт с ДНС
              даёт быстрый эффект при сохранении возможности масштабирования на
              остальные типы объектов.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Масштабируемость архитектуры
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Архитектура готова к расширению: и по количеству объектов, и по
              добавлению новых типов. Фундамент, методики и практики, созданные
              при внедрении решения для ДНС, упростят подключение скважин, ГЗУ,
              УПСВ и других объектов в следующих этапах.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // === Секция: Реализация ===
  {
    id: 'implementation-section',
    header: undefined,
    content: <MainTitleSlide title="Реализация проекта" />,
  },

  // --- Блок: Подготовительная фаза ---
  {
    id: 'impl-preparatory-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageSrc={black_list_tatn}
        title="Подготовительная фаза"
      />
    ),
  },
  {
    id: 'impl-preparatory-explainer',
    header: 'Подготовительная фаза',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <FileText {...iconStyle} />
                </span>
                Описание
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Сбор и формализация бизнес-требований, анализ предметной области и
              определение списка объектов мониторинга (ДНС), проектирование
              технической архитектуры решения для обеспечения масштабируемости.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Target {...iconStyle} />
                </span>
                Цель
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Подготовительная фаза обязательна для старта проекта: без
              согласованных требований, перечня объектов мониторинга (ДНС) и
              спроектированной архитектуры невозможны последующие этапы —
              построение хранилища данных и подсистемы предупреждений.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Award {...iconStyle} />
                </span>
                Ценность
              </Space>
            </Title>
            <List size="small">
              <List.Item>Документ с описанием архитектуры системы.</List.Item>
              <List.Item>
                Утверждённый реестр (список) ДНС для включения в систему.
              </List.Item>
              <List.Item>План-график реализации проекта.</List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-preparatory-phases',
    header: 'Подготовительная фаза: этапы',
    content: <Roadmap items={preparatoryPhases} maxWidth={1200} />,
  },
  {
    id: 'impl-data-lake-grouping',
    header: 'Группировка объектов мониторинга (ДНС)',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Весь объём ДНС делим на 3 группы
            </Title>
            <List size="small">
              <List.Item>Тестовая группа — сотни ДНС.</List.Item>
              <List.Item>Первая половина всего множества ДНС.</List.Item>
              <List.Item>Вторая половина всего множества ДНС.</List.Item>
            </List>
            <Paragraph
              type="secondary"
              style={{ marginTop: 12, marginBottom: 0 }}
            >
              По результатам анализа возможны подгруппы ДНС на основании типа,
              географической близости и других параметров.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-preparatory-roles-cost',
    header: 'Подготовительная фаза: роли, часы, стоимость',
    content: (
      <ConstrainedContent>
        <Card>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                role: 'Бизнес-аналитик',
                hours: 492,
                cost: '2 388 696 ₽',
              },
              {
                key: '2',
                role: 'Архитектор решений',
                hours: 492,
                cost: '5 573 624 ₽',
              },
              {
                key: '3',
                role: 'Руководитель проектов',
                hours: 492,
                cost: '3 184 928 ₽',
              },
              {
                key: '4',
                role: 'Старший DevOps-инженер',
                hours: 492,
                cost: '3 981 160 ₽',
              },
              {
                key: '5',
                role: 'Аналитик предметной области',
                hours: 492,
                cost: '0',
              },
              {
                key: '6',
                role: 'Старший инженер данных',
                hours: 492,
                cost: '3 981 160 ₽',
              },
            ]}
            columns={[
              { title: 'Роль', dataIndex: 'role', key: 'role' },
              {
                title: 'Часов',
                dataIndex: 'hours',
                key: 'hours',
                width: 90,
                align: 'right',
              },
              {
                title: 'Стоимость (с НДС)',
                dataIndex: 'cost',
                key: 'cost',
                width: 140,
                align: 'right',
                render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
              },
            ]}
            summary={() => (
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>
                    <Text strong>Итого</Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align="right">
                    <Text strong>2 952</Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2} align="right">
                    <Text strong>19 109 568 ₽</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  // --- Блок: Data Lake ---
  {
    id: 'impl-data-lake-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={0} title="Data Lake (слой данных)" />
    ),
  },
  {
    id: 'impl-data-lake-explainer',
    header: 'Data Lake (слой данных)',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <FileText {...iconStyle} />
                </span>
                Описание
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Единое хранилище телеметрии с датчиков оборудования и информации
              об инцидентах. Данные выгружаются, очищаются и приводятся к
              единому формату.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Target {...iconStyle} />
                </span>
                Цель
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Data Lake является необходимым фундаментом решения. Data Lake —
              фундамент любой современной аналитической подсистемы: без единого
              хранилища телеметрии и сведений об инцидентах невозможна работа
              алгоритмов раннего предупреждения и своевременное реагирование.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Award {...iconStyle} />
                </span>
                Ценность
              </Space>
            </Title>
            <List size="small">
              <List.Item>
                Один источник правды по данным для мониторинга и отчётности.
              </List.Item>
              <List.Item>
                Возможность переиспользовать данные в других системах и
                витринах.
              </List.Item>
              <List.Item>
                Надёжная основа для алгоритмов раннего предупреждения и для
                интерфейса оператора.
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-data-lake-scheme',
    header: 'Data Lake: схема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={dataLakeDiagram}
              alt="Data Lake: схема"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 420,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
          <Paragraph
            style={{ marginTop: 0, marginBottom: 0, textAlign: 'center' }}
          >
            Схема Data Lake: источники данных, ETL, хранилище.
          </Paragraph>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-data-lake-phases',
    header: 'Data Lake: фазы реализации',
    content: (
      <Roadmap items={dataLakePhases} mode="alternate" maxWidth={1200} />
    ),
  },
  {
    id: 'impl-data-lake-roles-cost',
    header: 'Data Lake: роли, часы, стоимость',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Построение и наполнение единой БД
            </Title>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  role: 'Архитектор решений',
                  hours: 246,
                  cost: '2 832 875 ₽',
                },
                {
                  key: '2',
                  role: 'Ведущий разработчик алгоритмов',
                  hours: 492,
                  cost: '5 261 054 ₽',
                },
                {
                  key: '3',
                  role: 'Старший инженер данных',
                  hours: 984,
                  cost: '8 093 928 ₽',
                },
                {
                  key: '4',
                  role: 'Старший DevOps-инженер',
                  hours: 984,
                  cost: '8 093 928 ₽',
                },
                {
                  key: '5',
                  role: 'Руководитель проектов',
                  hours: 492,
                  cost: '3 237 572 ₽',
                },
                {
                  key: '6',
                  role: 'Аналитик предметной области',
                  hours: 492,
                  cost: '0',
                },
              ]}
              columns={[
                { title: 'Роль', dataIndex: 'role', key: 'role' },
                {
                  title: 'Часов',
                  dataIndex: 'hours',
                  key: 'hours',
                  width: 90,
                  align: 'right',
                },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>3 690</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="right">
                      <Text strong>27 519 358 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Накопление и анализ данных
            </Title>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  role: 'Архитектор решений',
                  hours: 246,
                  cost: '2 072 836 ₽',
                },
                {
                  key: '2',
                  role: 'Ведущий разработчик алгоритмов',
                  hours: 492,
                  cost: '3 849 552 ₽',
                },
                {
                  key: '3',
                  role: 'Старший инженер данных',
                  hours: 984,
                  cost: '5 922 386 ₽',
                },
                {
                  key: '4',
                  role: 'Разработчик алгоритмов',
                  hours: 492,
                  cost: '2 961 194 ₽',
                },
                {
                  key: '5',
                  role: 'Руководитель проектов',
                  hours: 492,
                  cost: '2 368 955 ₽',
                },
                {
                  key: '6',
                  role: 'Старший DevOps-инженер',
                  hours: 492,
                  cost: '2 961 194 ₽',
                },
                {
                  key: '7',
                  role: 'Аналитик предметной области',
                  hours: 492,
                  cost: '0',
                },
              ]}
              columns={[
                { title: 'Роль', dataIndex: 'role', key: 'role' },
                {
                  title: 'Часов',
                  dataIndex: 'hours',
                  key: 'hours',
                  width: 90,
                  align: 'right',
                },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>3 690</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="right">
                      <Text strong>20 136 117 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Card>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>Итого по Data Lake:</Text> 7 380 ч, 47 655 475 ₽
          </Paragraph>
        </Space>
      </ConstrainedContent>
    ),
  },

  // --- Блок: Подсистема раннего предупреждения ---
  {
    id: 'impl-analytics-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={0}
        title="Подсистема раннего предупреждения о рисках"
      />
    ),
  },
  {
    id: 'impl-analytics-explainer',
    header: 'Подсистема предупреждений',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <FileText {...iconStyle} />
                </span>
                Описание
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Набор алгоритмов, которые анализируют данные из хранилища, находят
              отклонения в поведении оборудования и формируют оповещения о
              рисках до наступления инцидента.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Target {...iconStyle} />
                </span>
                Цель
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              Подсистема функционирует поверх Data Lake и реализует основную
              цель проекта —{' '}
              <Text strong>
                заблаговременное выявление отклонений в работе оборудования до
                наступления аварии
              </Text>
              . Без неё решение ограничивается хранением данных и не
              обеспечивает опережающее реагирование.
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              На старте будет срабатывать много аномалий, при этом по-настоящему
              предаварийных — немного. В ходе эксплуатации соберём информацию о
              действиях оператора; на её основе в дальнейшем станет возможным
              формулировать рекомендации по корректирующим действиям.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Award {...iconStyle} />
                </span>
                Ценность для организации и доставляемый результат
              </Space>
            </Title>
            <List size="small">
              <List.Item>
                Ранние предупреждения вместо реакции на уже случившийся
                инцидент.
              </List.Item>
              <List.Item>
                Снижение простоев и потерь за счёт своевременных действий.
              </List.Item>
              <List.Item>
                Откалиброванная под объекты мониторинга подсистема, проверенная
                на исторических данных и готовая к передаче в интерфейс
                оператора.
              </List.Item>
              <List.Item>
                Накопление обратной связи от операторов — основа для будущих
                рекомендаций по действиям (после этапа сбора данных).
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-analytics-scheme',
    header: 'Подсистема предупреждений: схема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={subSystemDiagram}
              alt="Подсистема предупреждений: схема"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 460,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
          <Paragraph
            style={{ marginTop: 16, marginBottom: 0, textAlign: 'center' }}
          >
            Схема подсистемы: данные из Data Lake, алгоритмы, выход в UI.
          </Paragraph>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'impl-analytics-scheme1',
    header: 'Подсистема предупреждений: схема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={subSystemDiagram1}
              alt="Подсистема предупреждений: схема"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 550,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-analytics-scheme2',
    header: 'Подсистема предупреждений: схема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={subSystemDiagram2}
              alt="Подсистема предупреждений: схема"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 550,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-analytics-scheme3',
    header: 'Подсистема предупреждений: схема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={subSystemDiagram3}
              alt="Подсистема предупреждений: схема"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 550,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-analytics-scheme4',
    header: 'Подсистема предупреждений: схема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={subSystemDiagram4}
              alt="Подсистема предупреждений: схема"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 550,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
  {
    id: 'impl-analytics-scheme5',
    header: 'Подсистема предупреждений: схема',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <img
              src={subSystemDiagram5}
              alt="Подсистема предупреждений: схема"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 550,
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'impl-analytics-phases',
    header: 'Подсистема предупреждений: фазы реализации',
    content: (
      <Roadmap items={analyticsPhases} mode="alternate" maxWidth={1200} />
    ),
  },
  {
    id: 'impl-analytics-roles-cost',
    header: 'Подсистема предупреждений: роли, часы, стоимость',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small">
            <Title level={5} style={{ marginTop: 0 }}>
              Фаза 4: Построение подсистемы поиска отклонений
            </Title>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  role: 'Архитектор решений',
                  hours: 656,
                  cost: '8 291 845 ₽',
                },
                {
                  key: '2',
                  role: 'Ведущий разработчик алгоритмов',
                  hours: 656,
                  cost: '7 699 570 ₽',
                },
                {
                  key: '3',
                  role: 'Старший инженер данных',
                  hours: 1312,
                  cost: '11 845 493 ₽',
                },
                {
                  key: '4',
                  role: 'Разработчик алгоритмов',
                  hours: 656,
                  cost: '5 922 747 ₽',
                },
                {
                  key: '5',
                  role: 'Руководитель проектов',
                  hours: 656,
                  cost: '4 738 198 ₽',
                },
                {
                  key: '6',
                  role: 'Старший DevOps-инженер',
                  hours: 656,
                  cost: '5 922 747 ₽',
                },
                {
                  key: '7',
                  role: 'Аналитик предметной области',
                  hours: 656,
                  cost: '0',
                },
                {
                  key: '8',
                  role: 'Бэкенд-разработчик',
                  hours: 656,
                  cost: '5 922 747 ₽',
                },
                {
                  key: '9',
                  role: 'Фронтенд-разработчик',
                  hours: 656,
                  cost: '5 922 747 ₽',
                },
                {
                  key: '10',
                  role: 'UX-инженер',
                  hours: 656,
                  cost: '5 330 472 ₽',
                },
                {
                  key: '11',
                  role: 'QA-инженер',
                  hours: 656,
                  cost: '4 738 198 ₽',
                },
                {
                  key: '12',
                  role: 'Бизнес-аналитик',
                  hours: 328,
                  cost: '1 776 824 ₽',
                },
              ]}
              columns={[
                { title: 'Роль', dataIndex: 'role', key: 'role' },
                {
                  title: 'Часов',
                  dataIndex: 'hours',
                  key: 'hours',
                  width: 90,
                  align: 'right',
                },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого по фазе 4</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>8 200</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="right">
                      <Text strong>68 111 586 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Card>
          <Card size="small">
            <Title level={5} style={{ marginTop: 0 }}>
              Фаза 5: Проверка на исторических данных
            </Title>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  role: 'Архитектор решений',
                  hours: 82,
                  cost: '791 772 ₽',
                },
                {
                  key: '2',
                  role: 'Ведущий разработчик алгоритмов',
                  hours: 164,
                  cost: '1 470 434 ₽',
                },
                {
                  key: '3',
                  role: 'Руководитель проектов',
                  hours: 164,
                  cost: '904 882 ₽',
                },
                {
                  key: '4',
                  role: 'Старший DevOps-инженер',
                  hours: 82,
                  cost: '565 552 ₽',
                },
                {
                  key: '5',
                  role: 'Аналитик предметной области',
                  hours: 164,
                  cost: '0',
                },
                { key: '6', role: 'QA-инженер', hours: 82, cost: '452 441 ₽' },
                {
                  key: '7',
                  role: 'Бизнес-аналитик',
                  hours: 82,
                  cost: '339 331 ₽',
                },
              ]}
              columns={[
                { title: 'Роль', dataIndex: 'role', key: 'role' },
                {
                  title: 'Часов',
                  dataIndex: 'hours',
                  key: 'hours',
                  width: 90,
                  align: 'right',
                },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого по фазе 5</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>820</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="right">
                      <Text strong>4 524 412 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Card>
          <Card size="small">
            <Title level={5} style={{ marginTop: 0 }}>
              Фаза 6: Настройка по результатам проверки
            </Title>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  role: 'Архитектор решений',
                  hours: 164,
                  cost: '1 830 872 ₽',
                },
                {
                  key: '2',
                  role: 'Ведущий разработчик алгоритмов',
                  hours: 328,
                  cost: '3 400 191 ₽',
                },
                {
                  key: '3',
                  role: 'Старший инженер данных',
                  hours: 328,
                  cost: '2 615 532 ₽',
                },
                {
                  key: '4',
                  role: 'Разработчик алгоритмов',
                  hours: 328,
                  cost: '2 615 532 ₽',
                },
                {
                  key: '5',
                  role: 'Руководитель проектов',
                  hours: 328,
                  cost: '2 092 425 ₽',
                },
                {
                  key: '6',
                  role: 'Старший DevOps-инженер',
                  hours: 164,
                  cost: '1 307 766 ₽',
                },
                {
                  key: '7',
                  role: 'Аналитик предметной области',
                  hours: 328,
                  cost: '0',
                },
                {
                  key: '8',
                  role: 'QA-инженер',
                  hours: 164,
                  cost: '1 046 213 ₽',
                },
              ]}
              columns={[
                { title: 'Роль', dataIndex: 'role', key: 'role' },
                {
                  title: 'Часов',
                  dataIndex: 'hours',
                  key: 'hours',
                  width: 90,
                  align: 'right',
                },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого по фазе 6</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>2 132</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="right">
                      <Text strong>14 908 531 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Card>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>Итого по подсистеме предупреждений:</Text> 11 152 ч, 87
            544 529 ₽
          </Paragraph>
        </Space>
      </ConstrainedContent>
    ),
  },

  // --- Блок: Графический интерфейс оператора ---
  {
    id: 'impl-ui-section',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={0}
        title="Графический интерфейс оператора системы"
      />
    ),
  },
  {
    id: 'impl-ui-explainer',
    header: 'Интерфейс оператора',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <FileText {...iconStyle} />
                </span>
                Описание
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Веб-интерфейс, с которым работают диспетчеры и инженеры: дашборды,
              оповещения о рисках, пояснение причин предупреждений, фильтрация
              по объектам, сводная статистика и отчёты. Учёт ролей и
              разграничение доступа.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Target {...iconStyle} />
                </span>
                Цель
              </Space>
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Интерфейс обеспечивает доведение результатов работы подсистемы
              предупреждений до операторов и уполномоченных сотрудников. Без
              него организация не может получать оповещения о рисках, видеть их
              обоснование и действовать до наступления инцидента.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              <Space
                size="small"
                align="center"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={iconWrapStyle}>
                  <Award {...iconStyle} />
                </span>
                Ценность
              </Space>
            </Title>
            <List size="small">
              <List.Item>
                Удобный рабочий инструмент для реагирования на риски до
                инцидента.
              </List.Item>
              <List.Item>
                Прозрачность: видно, почему система выдала то или иное
                предупреждение.
              </List.Item>
              <List.Item>
                Готовый к приёмке интерфейс, интегрированный с подсистемой
                предупреждений и хранилищем данных.
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  {
    id: 'impl-ui-phases',
    header: 'Интерфейс оператора: фазы реализации',
    content: <Roadmap items={uiPhases} mode="alternate" maxWidth={1200} />,
  },
  {
    id: 'impl-ui-roles-cost',
    header: 'Интерфейс оператора: роли, часы, стоимость',
    content: (
      <ConstrainedContent>
        <Card>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                role: 'Архитектор решений',
                hours: 164,
                cost: '1 493 607 ₽',
              },
              {
                key: '2',
                role: 'Ведущий разработчик алгоритмов',
                hours: 164,
                cost: '1 386 920 ₽',
              },
              {
                key: '3',
                role: 'Старший инженер данных',
                hours: 164,
                cost: '1 066 861 ₽',
              },
              {
                key: '4',
                role: 'Руководитель проектов',
                hours: 328,
                cost: '1 706 979 ₽',
              },
              {
                key: '5',
                role: 'Старший DevOps-инженер',
                hours: 328,
                cost: '2 133 724 ₽',
              },
              {
                key: '6',
                role: 'Аналитик предметной области',
                hours: 328,
                cost: '0',
              },
              {
                key: '7',
                role: 'Бэкенд-разработчик',
                hours: 328,
                cost: '2 133 724 ₽',
              },
              {
                key: '8',
                role: 'Фронтенд-разработчик',
                hours: 328,
                cost: '2 133 724 ₽',
              },
              { key: '9', role: 'UX-инженер', hours: 328, cost: '1 920 351 ₽' },
              {
                key: '10',
                role: 'QA-инженер',
                hours: 328,
                cost: '1 706 979 ₽',
              },
            ]}
            columns={[
              { title: 'Роль', dataIndex: 'role', key: 'role' },
              {
                title: 'Часов',
                dataIndex: 'hours',
                key: 'hours',
                width: 90,
                align: 'right',
              },
              {
                title: 'Стоимость (с НДС)',
                dataIndex: 'cost',
                key: 'cost',
                width: 140,
                align: 'right',
                render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
              },
            ]}
            summary={() => (
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>
                    <Text strong>Итого</Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align="right">
                    <Text strong>2 788</Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2} align="right">
                    <Text strong>15 682 868 ₽</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </Card>
      </ConstrainedContent>
    ),
  },

  // --- Блок: Подготовительная, Внедрение, Приёмка ---
  {
    id: 'impl-cross-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={0} title="Внедрение и приёмка" />,
  },

  {
    id: 'impl-cross-phases',
    header: 'Внедрение, приёмка: фазы',
    content: <Roadmap items={crossPhases} mode="alternate" maxWidth={1200} />,
  },
  {
    id: 'impl-cross-roles-cost',
    header: 'Внедрение, приёмка: роли, часы, стоимость',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card size="small">
            <Title level={5} style={{ marginTop: 0 }}>
              Внедрение системы (Фаза 8)
            </Title>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  role: 'Архитектор решений',
                  hours: 410,
                  cost: '4 803 028 ₽',
                },
                {
                  key: '2',
                  role: 'Ведущий разработчик алгоритмов',
                  hours: 820,
                  cost: '8 919 909 ₽',
                },
                {
                  key: '3',
                  role: 'Старший инженер данных',
                  hours: 1640,
                  cost: '13 722 938 ₽',
                },
                {
                  key: '4',
                  role: 'Разработчик алгоритмов',
                  hours: 820,
                  cost: '6 861 469 ₽',
                },
                {
                  key: '5',
                  role: 'Руководитель проектов',
                  hours: 820,
                  cost: '5 489 176 ₽',
                },
                {
                  key: '6',
                  role: 'Старший DevOps-инженер',
                  hours: 820,
                  cost: '6 861 469 ₽',
                },
                {
                  key: '7',
                  role: 'Аналитик предметной области',
                  hours: 820,
                  cost: '0',
                },
                {
                  key: '8',
                  role: 'QA-инженер',
                  hours: 820,
                  cost: '5 489 176 ₽',
                },
              ]}
              columns={[
                { title: 'Роль', dataIndex: 'role', key: 'role' },
                {
                  title: 'Часов',
                  dataIndex: 'hours',
                  key: 'hours',
                  width: 90,
                  align: 'right',
                },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого по фазе 8</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>6 970</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="right">
                      <Text strong>52 147 165 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Card>
          <Card size="small">
            <Title level={5} style={{ marginTop: 0 }}>
              Приёмка системы (Фаза 9)
            </Title>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  role: 'Архитектор решений',
                  hours: 82,
                  cost: '1 324 974 ₽',
                },
                {
                  key: '2',
                  role: 'Ведущий разработчик алгоритмов',
                  hours: 82,
                  cost: '1 230 332 ₽',
                },
                {
                  key: '3',
                  role: 'Старший инженер данных',
                  hours: 82,
                  cost: '946 409 ₽',
                },
                {
                  key: '4',
                  role: 'Руководитель проектов',
                  hours: 164,
                  cost: '1 514 255 ₽',
                },
                {
                  key: '5',
                  role: 'Старший DevOps-инженер',
                  hours: 82,
                  cost: '946 409 ₽',
                },
                {
                  key: '6',
                  role: 'Аналитик предметной области',
                  hours: 164,
                  cost: '0',
                },
                { key: '7', role: 'QA-инженер', hours: 82, cost: '757 128 ₽' },
                {
                  key: '8',
                  role: 'Бизнес-аналитик',
                  hours: 164,
                  cost: '1 135 691 ₽',
                },
              ]}
              columns={[
                { title: 'Роль', dataIndex: 'role', key: 'role' },
                {
                  title: 'Часов',
                  dataIndex: 'hours',
                  key: 'hours',
                  width: 90,
                  align: 'right',
                },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 140,
                  align: 'right',
                  render: (v: string) => <Text strong={v !== '0'}>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого по фазе 9</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>902</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={2} align="right">
                      <Text strong>7 855 199 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Card>
          <Paragraph style={{ marginBottom: 0 }}>
            <Text strong>Итого по этапам внедрение и приёмка:</Text> 7 872 ч, 60
            002 364 ₽
          </Paragraph>
        </Space>
      </ConstrainedContent>
    ),
  },

  // --- Блок: Сводка по проекту ---
  {
    id: 'summary-section',
    header: undefined,
    content: <SectionTitleSlide imageIndex={0} title="Сводка по проекту" />,
  },
  {
    id: 'summary-gantt',
    header: 'План-график',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card style={{ width: '100%' }}>
          <img
            src={ganttImage}
            alt="План-график проекта"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'summary-total-cost',
    header: 'Итоговая стоимость',
    content: (
      <ConstrainedContent>
        <Card>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Paragraph style={{ marginBottom: 0 }}>
              Сводная стоимость проекта по основным этапам (с НДС):
            </Paragraph>
            <Table
              size="small"
              pagination={false}
              dataSource={[
                {
                  key: '1',
                  block: 'Подготовительная фаза',
                  cost: '19 109 568 ₽',
                },
                {
                  key: '2',
                  block:
                    'Data Lake (построение и наполнение, накопление и анализ)',
                  cost: '47 655 475 ₽',
                },
                {
                  key: '3',
                  block: 'Подсистема предупреждений',
                  cost: '87 544 529 ₽',
                },
                {
                  key: '4',
                  block: 'Графический интерфейс оператора',
                  cost: '15 682 868 ₽',
                },
                {
                  key: '5',
                  block: 'Внедрение и приёмка системы',
                  cost: '60 002 364 ₽',
                },
              ]}
              columns={[
                { title: 'Этап / блок', dataIndex: 'block', key: 'block' },
                {
                  title: 'Стоимость (с НДС)',
                  dataIndex: 'cost',
                  key: 'cost',
                  width: 160,
                  align: 'right',
                  render: (v: string) => <Text strong>{v}</Text>,
                },
              ]}
              summary={() => (
                <Table.Summary>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>
                      <Text strong>Итого</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align="right">
                      <Text strong>229 994 804 ₽</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
          </Space>
        </Card>
      </ConstrainedContent>
    ),
  },

  {
    id: 'thank-you',
    header: undefined,
    content: <MainTitleSlide title="Благодарим за внимание" />,
  },
];
