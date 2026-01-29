import { Space, Typography, List, Card, Table } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { tatneftKpCreatedAt } from './tatneft-kp.meta';
import tatneftLogo from './Tatneft-Logo.png';

const { Title, Paragraph, Text } = Typography;

const dataLakePhases: RoadmapItem[] = [
  {
    title: 'Подготовительная фаза',
    duration: 'март – июнь 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
    completed: true,
  },
  {
    title: 'Построение и наполнение единой БД',
    description: 'Развёртывание хранилища, ETL из источников организации, описание структуры данных.',
    duration: 'июль – ноябрь 2026',
    icon: <CalendarOutlined />,
    color: 'blue',
    subSteps: [
      { title: 'Разработка ETL-процессов выгрузки данных', start: '01.07.2026', end: '31.10.2026', result: 'Настроенные механизмы сбора' },
      { title: 'Построение и наполнение единой БД', start: '01.08.2026', end: '31.10.2026', result: 'База данных с историческими данными' },
    ],
  },
  {
    title: 'Накопление и анализ данных',
    description: 'Загрузка исторических архивов, накопление оперативных данных, аналитический отчёт и наборы для настройки алгоритмов.',
    duration: 'сентябрь – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'green',
    subSteps: [
      { title: 'Загрузка исторических данных', start: '21.09.2026', end: '30.10.2026', result: 'Оцифрованный архив в БД' },
      { title: 'Накопление данных в реальном времени', start: '01.10.2026', end: '20.12.2026', result: 'Набор оперативных данных' },
      { title: 'Анализ исторических и накопленных данных', start: '20.10.2026', end: '20.12.2026', result: 'Аналитический отчёт' },
    ],
  },
];

const preparatoryPhases: RoadmapItem[] = [
  {
    title: 'Определение набора ДНС',
    description: 'Согласование списка объектов мониторинга для включения в систему.',
    duration: 'март 2026',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Группировка ДНС',
    description: 'Формирование структуры групп объектов для последующего мониторинга.',
    duration: 'апрель 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Подготовка архитектуры системы',
    description: 'Проектирование технической архитектуры решения для обеспечения масштабируемости.',
    duration: 'март – июнь 2026',
    icon: <CalendarOutlined />,
    color: 'green',
  },
];

const analyticsPhases: RoadmapItem[] = [
  {
    title: 'Подготовительная фаза и Data Lake',
    duration: 'март – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
    completed: true,
  },
  {
    title: 'Построение подсистемы поиска отклонений',
    description: 'Разработка алгоритмов, технический интерфейс для проверки.',
    duration: 'декабрь 2026 – июнь 2027',
    icon: <CalendarOutlined />,
    color: 'blue',
    subSteps: [
      { title: 'Построение алгоритма поиска аномалий', start: '21.12.2026', end: '20.06.2027', result: 'Работающий алгоритм' },
      { title: 'Разработка интерфейса для проверки подсистемы', start: '01.04.2027', end: '20.06.2027', result: 'Технический UI' },
    ],
  },
  {
    title: 'Проверка на исторических данных',
    description: 'Тестирование на архиве, отчёт с метриками точности.',
    duration: 'май – июнь 2027',
    icon: <CalendarOutlined />,
    color: 'orange',
    subSteps: [
      { title: 'Проверка подсистемы на исторических данных', start: '17.05.2027', end: '20.06.2027', result: 'Отчёт о тестировании' },
      { title: 'Экспертные сессии с ЕДС: разбор ошибок, уточнение причин FP' },
    ],
  },
  {
    title: 'Настройка по результатам проверки',
    description: 'Калибровка порогов и параметров, оптимизированная версия.',
    duration: 'июнь – сентябрь 2027',
    icon: <CalendarOutlined />,
    color: 'green',
    subSteps: [
      { title: 'Настройка системы по результатам проверки', start: '21.06.2027', end: '05.09.2027', result: 'Откалиброванный алгоритм' },
      { title: 'Подготовка к внедрению: эксплуатационные регламенты, обучение' },
    ],
  },
];

const uiPhases: RoadmapItem[] = [
  {
    title: 'Подготовительная и Data Lake',
    duration: 'март – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Подсистема предупреждений',
    duration: 'декабрь 2026 – сентябрь 2027',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Разработка графического интерфейса оператора системы',
    description: 'Дашборд, карточка события, объяснения, обратная связь (разметка диспетчера), доступы и инструкция пользователя.',
    duration: 'июнь – август 2027',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
];

const crossPhases: RoadmapItem[] = [
  {
    title: 'Подготовительная (Фаза 1)',
    description: 'Сбор требований, выбор объектов мониторинга (ДНС), проектирование архитектуры, план-график.',
    duration: 'март 2026 – июнь 2026',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Разработка трёх компонентов (Фазы 2–7)',
    duration: 'июль 2026 – сентябрь 2027',
    icon: <CalendarOutlined />,
    color: 'purple',
  },
  {
    title: 'Внедрение системы (Фаза 8)',
    description: 'Развёртывание в промышленной среде, поэтапное подключение групп ДНС, проверка в реальном времени.',
    duration: 'сентябрь 2027 – апрель 2028',
    icon: <CalendarOutlined />,
    color: 'green',
  },
  {
    title: 'Приёмка системы (Фаза 9)',
    description: 'Пользовательское тестирование, демонстрация соответствия требованиям, передача документации и прав.',
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

  {
    id: 'architecture-overview',
    header: 'Общая схема взаимодействия компонентов',
    content: (
      <Card>
        <Paragraph style={{ marginBottom: 8 }}>
          Схема взаимодействия трёх компонентов: хранилище данных, подсистема раннего предупреждения, интерфейс оператора.
        </Paragraph>
        <Paragraph type="secondary">TODO: добавить иллюстрацию схемы.</Paragraph>
      </Card>
    ),
  },

  // === Секция: Реализация ===
  {
    id: 'implementation-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={3} title="Реализация проекта" />
    ),
  },

  // --- Блок: Подготовительная фаза ---
  {
    id: 'impl-preparatory-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={0} title="Подготовительная фаза" />
    ),
  },
  {
    id: 'impl-preparatory-explainer',
    header: 'Подготовительная фаза',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Почему этот этап необходим</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Подготовительная фаза обязательна для старта проекта: без согласованных требований, перечня объектов мониторинга (ДНС) и спроектированной архитектуры невозможны последующие этапы — построение хранилища данных и подсистемы предупреждений.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Назначение</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Сбор и формализация бизнес-требований, анализ предметной области и определение списка объектов мониторинга (ДНС), проектирование технической архитектуры решения для обеспечения масштабируемости.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Ценность для организации и доставляемый результат</Title>
          <List size="small">
            <List.Item>Документ с описанием архитектуры системы.</List.Item>
            <List.Item>Утверждённый реестр (список) ДНС для включения в систему.</List.Item>
            <List.Item>План-график реализации проекта.</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },
  {
    id: 'impl-preparatory-phases',
    header: 'Подготовительная фаза: этапы',
    content: (
      <Roadmap items={preparatoryPhases} />
    ),
  },
  {
    id: 'impl-preparatory-roles-cost',
    header: 'Подготовительная фаза: роли, часы, стоимость',
    content: (
      <Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            { key: '1', role: 'Бизнес-аналитик', hours: 492, cost: '2 388 696 ₽' },
            { key: '2', role: 'Архитектор решений', hours: 492, cost: '5 573 624 ₽' },
            { key: '3', role: 'Руководитель проектов', hours: 492, cost: '3 184 928 ₽' },
            { key: '4', role: 'Старший DevOps-инженер', hours: 492, cost: '3 981 160 ₽' },
            { key: '5', role: 'Аналитик предметной области', hours: 492, cost: '0' },
            { key: '6', role: 'Старший инженер данных', hours: 492, cost: '3 981 160 ₽' },
          ]}
          columns={[
            { title: 'Роль', dataIndex: 'role', key: 'role' },
            { title: 'Часов', dataIndex: 'hours', key: 'hours', width: 90, align: 'right' },
            { title: 'Стоимость (с НДС)', dataIndex: 'cost', key: 'cost', width: 140, align: 'right', render: (v: string) => <Text strong={v !== '0'}>{v}</Text> },
          ]}
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}><Text strong>Итого</Text></Table.Summary.Cell>
                <Table.Summary.Cell index={1} align="right"><Text strong>2 952</Text></Table.Summary.Cell>
                <Table.Summary.Cell index={2} align="right"><Text strong>19 109 568 ₽</Text></Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
      </Card>
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
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Почему этот компонент необходим</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Data Lake является необходимым фундаментом решения: без единого хранилища телеметрии и сведений об инцидентах невозможна работа алгоритмов раннего предупреждения и своевременное реагирование
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Назначение</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Единое хранилище телеметрии с датчиков оборудования и информации об инцидентах. Данные выгружаются, очищаются и приводятся к единому формату.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Ценность для организации и доставляемый результат</Title>
          <List size="small">
            <List.Item>Один источник правды по данным для мониторинга и отчётности.</List.Item>
            <List.Item>Возможность переиспользовать данные в других системах и витринах.</List.Item>
            <List.Item>Надёжная основа для алгоритмов раннего предупреждения и для интерфейса оператора.</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },
  {
    id: 'impl-data-lake-scheme',
    header: 'Data Lake: схема',
    content: (
      <Card>
        <Paragraph type="secondary">TODO: добавить картинку схемы Data Lake (источники, ETL, хранилище).</Paragraph>
      </Card>
    ),
  },
  {
    id: 'impl-data-lake-phases',
    header: 'Data Lake: фазы реализации',
    content: <Roadmap items={dataLakePhases} mode="alternate" />,
  },
  {
    id: 'impl-data-lake-roles-cost',
    header: 'Data Lake: роли, часы, стоимость',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Построение и наполнение единой БД</Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              { key: '1', role: 'Архитектор решений', hours: 246, cost: '2 832 875 ₽' },
              { key: '2', role: 'Ведущий разработчик алгоритмов', hours: 492, cost: '5 261 054 ₽' },
              { key: '3', role: 'Старший инженер данных', hours: 984, cost: '8 093 928 ₽' },
              { key: '4', role: 'Старший DevOps-инженер', hours: 984, cost: '8 093 928 ₽' },
              { key: '5', role: 'Руководитель проектов', hours: 492, cost: '3 237 572 ₽' },
              { key: '6', role: 'Аналитик предметной области', hours: 492, cost: '0' },
            ]}
            columns={[
              { title: 'Роль', dataIndex: 'role', key: 'role' },
              { title: 'Часов', dataIndex: 'hours', key: 'hours', width: 90, align: 'right' },
              { title: 'Стоимость (с НДС)', dataIndex: 'cost', key: 'cost', width: 140, align: 'right', render: (v: string) => <Text strong={v !== '0'}>{v}</Text> },
            ]}
            summary={() => (
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}><Text strong>Итого</Text></Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align="right"><Text strong>3 690</Text></Table.Summary.Cell>
                  <Table.Summary.Cell index={2} align="right"><Text strong>27 519 358 ₽</Text></Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </Card>
        <Card>
          <Title level={5}>Накопление и анализ данных</Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              { key: '1', role: 'Архитектор решений', hours: 246, cost: '2 072 836 ₽' },
              { key: '2', role: 'Ведущий разработчик алгоритмов', hours: 492, cost: '3 849 552 ₽' },
              { key: '3', role: 'Старший инженер данных', hours: 984, cost: '5 922 386 ₽' },
              { key: '4', role: 'Разработчик алгоритмов', hours: 492, cost: '2 961 194 ₽' },
              { key: '5', role: 'Руководитель проектов', hours: 492, cost: '2 368 955 ₽' },
              { key: '6', role: 'Старший DevOps-инженер', hours: 492, cost: '2 961 194 ₽' },
              { key: '7', role: 'Аналитик предметной области', hours: 492, cost: '0' },
            ]}
            columns={[
              { title: 'Роль', dataIndex: 'role', key: 'role' },
              { title: 'Часов', dataIndex: 'hours', key: 'hours', width: 90, align: 'right' },
              { title: 'Стоимость (с НДС)', dataIndex: 'cost', key: 'cost', width: 140, align: 'right', render: (v: string) => <Text strong={v !== '0'}>{v}</Text> },
            ]}
            summary={() => (
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}><Text strong>Итого</Text></Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align="right"><Text strong>3 690</Text></Table.Summary.Cell>
                  <Table.Summary.Cell index={2} align="right"><Text strong>20 136 117 ₽</Text></Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </Card>
        <Paragraph style={{ marginBottom: 0 }}><Text strong>Итого по Data Lake:</Text> 7 380 ч, 47 655 475 ₽</Paragraph>
      </Space>
    ),
  },

  // --- Блок: Подсистема раннего предупреждения ---
  {
    id: 'impl-analytics-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={0} title="Подсистема раннего предупреждения о рисках" />
    ),
  },
  {
    id: 'impl-analytics-explainer',
    header: 'Подсистема предупреждений',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Почему этот компонент необходим</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Подсистема функционирует поверх Data Lake и реализует основную цель проекта — заблаговременное выявление отклонений в работе оборудования до наступления аварии. Без неё решение ограничивается хранением данных и не обеспечивает опережающее реагирование.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Назначение</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Набор алгоритмов, которые анализируют данные из хранилища, находят отклонения в поведении оборудования и формируют оповещения о рисках до наступления инцидента.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Ценность для организации и доставляемый результат</Title>
          <List size="small">
            <List.Item>Ранние предупреждения вместо реакции на уже случившийся инцидент.</List.Item>
            <List.Item>Снижение простоев и потерь за счёт своевременных действий.</List.Item>
            <List.Item>Откалиброванная под объекты мониторинга подсистема, проверенная на исторических данных и готовая к передаче в интерфейс оператора.</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },
  {
    id: 'impl-analytics-scheme',
    header: 'Подсистема предупреждений: схема',
    content: (
      <Card>
        <Paragraph type="secondary">TODO: добавить картинку схемы подсистемы (данные из Data Lake, алгоритмы, выход в UI).</Paragraph>
      </Card>
    ),
  },
  {
    id: 'impl-analytics-phases',
    header: 'Подсистема предупреждений: фазы реализации',
    content: <Roadmap items={analyticsPhases} mode="alternate" />,
  },
  {
    id: 'impl-analytics-roles',
    header: 'Подсистема предупреждений: роли по этапам',
    content: (
      <Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            { key: '1', phase: 'Построение подсистемы поиска отклонений', roles: 'Архитектор решений, Ведущий разработчик алгоритмов, Старший инженер данных, Разработчик алгоритмов, Руководитель проектов, Старший DevOps-инженер, Аналитик предметной области, Бэкенд-разработчик, Фронтенд-разработчик, UX-инженер, QA-инженер, Бизнес-аналитик' },
            { key: '2', phase: 'Проверка на исторических данных', roles: 'Архитектор решений, Ведущий разработчик алгоритмов, Руководитель проектов, Старший DevOps-инженер, Аналитик предметной области, QA-инженер, Бизнес-аналитик' },
            { key: '3', phase: 'Настройка по результатам проверки', roles: 'Архитектор решений, Ведущий разработчик алгоритмов, Старший инженер данных, Разработчик алгоритмов, Руководитель проектов, Старший DevOps-инженер, Аналитик предметной области, QA-инженер' },
          ]}
          columns={[
            { title: 'Этап', dataIndex: 'phase', key: 'phase', width: '35%' },
            { title: 'Роли', dataIndex: 'roles', key: 'roles' },
          ]}
        />
      </Card>
    ),
  },
  {
    id: 'impl-analytics-cost',
    header: 'Подсистема предупреждений: стоимость',
    content: (
      <Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            { key: '1', phase: 'Построение подсистемы поиска отклонений', hours: '8 200', cost: '68 111 586 ₽' },
            { key: '2', phase: 'Проверка на исторических данных', hours: '820', cost: '4 524 412 ₽' },
            { key: '3', phase: 'Настройка по результатам проверки', hours: '2 132', cost: '14 908 531 ₽' },
          ]}
          columns={[
            { title: 'Фаза', dataIndex: 'phase', key: 'phase' },
            { title: 'Часов', dataIndex: 'hours', key: 'hours', width: 90 },
            { title: 'Стоимость (с НДС)', dataIndex: 'cost', key: 'cost', width: 140, render: (v: string) => <Text strong>{v}</Text> },
          ]}
        />
        <Paragraph style={{ marginTop: 12, marginBottom: 0 }}><Text strong>Итого по подсистеме:</Text> 11 152 ч, 87 544 529 ₽</Paragraph>
      </Card>
    ),
  },

  // --- Блок: Графический интерфейс оператора ---
  {
    id: 'impl-ui-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={0} title="Графический интерфейс оператора системы" />
    ),
  },
  {
    id: 'impl-ui-explainer',
    header: 'Интерфейс оператора',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Почему этот компонент необходим</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Интерфейс обеспечивает доведение результатов работы подсистемы предупреждений до операторов и уполномоченных сотрудников. Без него организация не может получать оповещения о рисках, видеть их обоснование и действовать до наступления инцидента.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Назначение</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Веб-интерфейс, с которым работают диспетчеры и инженеры: дашборды, оповещения о рисках, пояснение причин предупреждений, фильтрация по объектам, сводная статистика и отчёты. Учёт ролей и разграничение доступа.
          </Paragraph>
        </Card>
        <Card>
          <Title level={5}>Ценность для организации и доставляемый результат</Title>
          <List size="small">
            <List.Item>Удобный рабочий инструмент для реагирования на риски до инцидента.</List.Item>
            <List.Item>Прозрачность: видно, почему система выдала то или иное предупреждение.</List.Item>
            <List.Item>Готовый к приёмке интерфейс, интегрированный с подсистемой предупреждений и хранилищем данных.</List.Item>
          </List>
        </Card>
      </Space>
    ),
  },
  {
    id: 'impl-ui-scheme',
    header: 'Интерфейс оператора: схема',
    content: (
      <Card>
        <Paragraph type="secondary">TODO: добавить картинку схемы интерфейса (экраны, роли, связь с подсистемой).</Paragraph>
      </Card>
    ),
  },
  {
    id: 'impl-ui-phases',
    header: 'Интерфейс оператора: фазы реализации',
    content: <Roadmap items={uiPhases} mode="alternate" />,
  },
  {
    id: 'impl-ui-roles',
    header: 'Интерфейс оператора: роли по этапам',
    content: (
      <Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            { key: '1', phase: 'Разработка графического интерфейса оператора', roles: 'Архитектор решений, Ведущий разработчик алгоритмов, Старший инженер данных, Руководитель проектов, Старший DevOps-инженер, Аналитик предметной области, Бэкенд-разработчик, Фронтенд-разработчик, UX-инженер, QA-инженер' },
          ]}
          columns={[
            { title: 'Этап', dataIndex: 'phase', key: 'phase', width: '35%' },
            { title: 'Роли', dataIndex: 'roles', key: 'roles' },
          ]}
        />
      </Card>
    ),
  },
  {
    id: 'impl-ui-cost',
    header: 'Интерфейс оператора: стоимость',
    content: (
      <Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            { key: '1', phase: 'Разработка графического интерфейса оператора', hours: '2 788', cost: '15 682 868 ₽' },
          ]}
          columns={[
            { title: 'Фаза', dataIndex: 'phase', key: 'phase' },
            { title: 'Часов', dataIndex: 'hours', key: 'hours', width: 90 },
            { title: 'Стоимость (с НДС)', dataIndex: 'cost', key: 'cost', width: 140, render: (v: string) => <Text strong>{v}</Text> },
          ]}
        />
      </Card>
    ),
  },

  // --- Блок: Подготовительная, Внедрение, Приёмка ---
  {
    id: 'impl-cross-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={0} title="Подготовка, внедрение и приёмка" />
    ),
  },
  {
    id: 'impl-cross-explainer',
    header: 'Общие этапы проекта',
    content: (
      <Card>
        <List size="small">
          <List.Item><Text strong>Подготовительная</Text> — сбор требований, выбор объектов мониторинга (ДНС), проектирование архитектуры, план-график. (март – июнь 2026)</List.Item>
          <List.Item><Text strong>Внедрение системы</Text> — развёртывание в промышленной среде, поэтапное подключение групп ДНС, проверка в реальном времени. (сентябрь 2027 – апрель 2028)</List.Item>
          <List.Item><Text strong>Приёмка системы</Text> — пользовательское тестирование, демонстрация соответствия требованиям, передача документации и прав. (апрель – май 2028)</List.Item>
        </List>
      </Card>
    ),
  },
  {
    id: 'impl-cross-scheme',
    header: 'Общие этапы: план-график',
    content: (
      <Card>
        <Paragraph type="secondary">TODO: добавить картинку общего плана-графика (все фазы на одной диаграмме).</Paragraph>
      </Card>
    ),
  },
  {
    id: 'impl-cross-phases',
    header: 'Подготовка, внедрение, приёмка: фазы',
    content: <Roadmap items={crossPhases} mode="alternate" />,
  },
  {
    id: 'impl-cross-roles-cost',
    header: 'Подготовка, внедрение, приёмка: роли и стоимость',
    content: (
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Card>
          <Title level={5}>Роли по этапам</Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              { key: '1', phase: 'Подготовительная', roles: 'Бизнес-аналитик, Архитектор решений, Руководитель проектов, Старший DevOps-инженер, Аналитик предметной области, Старший инженер данных' },
              { key: '2', phase: 'Внедрение системы', roles: 'Архитектор решений, Ведущий разработчик алгоритмов, Старший инженер данных, Разработчик алгоритмов, Руководитель проектов, Старший DevOps-инженер, Аналитик предметной области, QA-инженер' },
              { key: '3', phase: 'Приёмка системы', roles: 'Архитектор решений, Ведущий разработчик алгоритмов, Старший инженер данных, Руководитель проектов, Старший DevOps-инженер, Аналитик предметной области, QA-инженер, Бизнес-аналитик' },
            ]}
            columns={[
              { title: 'Этап', dataIndex: 'phase', key: 'phase', width: '30%' },
              { title: 'Роли', dataIndex: 'roles', key: 'roles' },
            ]}
          />
        </Card>
        <Card>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              { key: '1', phase: 'Подготовительная', hours: '2 952', cost: '19 109 568 ₽' },
              { key: '2', phase: 'Внедрение системы', hours: '6 970', cost: '52 147 165 ₽' },
              { key: '3', phase: 'Приёмка системы', hours: '902', cost: '7 855 199 ₽' },
            ]}
            columns={[
              { title: 'Этап', dataIndex: 'phase', key: 'phase' },
              { title: 'Часов', dataIndex: 'hours', key: 'hours', width: 90 },
              { title: 'Стоимость (с НДС)', dataIndex: 'cost', key: 'cost', width: 140, render: (v: string) => <Text strong>{v}</Text> },
            ]}
          />
          <Paragraph style={{ marginTop: 12, marginBottom: 0 }}><Text strong>Итого по этапам:</Text> 10 824 ч, 79 111 932 ₽</Paragraph>
        </Card>
      </Space>
    ),
  },
];
