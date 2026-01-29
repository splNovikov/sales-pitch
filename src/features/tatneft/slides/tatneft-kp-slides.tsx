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
    title: 'Подготовительная',
    description: 'Общепроектный этап (обязателен для старта проекта): сбор требований, выбор объектов мониторинга (ДНС), проектирование архитектуры, план-график.',
    duration: 'март 2026 – июнь 2026',
    icon: <CalendarOutlined />,
    color: 'default',
    status: 'Общепроектный этап',
  },
  {
    title: 'Построение и наполнение единой БД',
    description: 'Развёртывание хранилища, ETL из источников организации, описание структуры данных.',
    duration: 'июль – ноябрь 2026',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Накопление и анализ данных',
    description: 'Загрузка исторических архивов, накопление оперативных данных, аналитический отчёт и наборы для настройки алгоритмов.',
    duration: 'сентябрь – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'green',
  },
];

const analyticsPhases: RoadmapItem[] = [
  {
    title: 'Подготовительная и Data Lake',
    duration: 'март – декабрь 2026',
    icon: <CalendarOutlined />,
    color: 'cyan',
  },
  {
    title: 'Построение подсистемы поиска отклонений',
    description: 'Разработка алгоритмов, технический интерфейс для проверки.',
    duration: 'декабрь 2026 – июнь 2027',
    icon: <CalendarOutlined />,
    color: 'blue',
  },
  {
    title: 'Проверка на исторических данных',
    description: 'Тестирование на архиве, отчёт с метриками точности.',
    duration: 'май – июнь 2027',
    icon: <CalendarOutlined />,
    color: 'orange',
  },
  {
    title: 'Настройка по результатам проверки',
    description: 'Калибровка порогов и параметров, оптимизированная версия.',
    duration: 'июнь – сентябрь 2027',
    icon: <CalendarOutlined />,
    color: 'green',
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

  // === Секция: Реализация ===
  {
    id: 'implementation-section',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={3} title="Реализация проекта" />
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
    id: 'impl-data-lake-roles',
    header: 'Data Lake: роли по этапам',
    content: (
      <Card>
        <List size="small">
          <List.Item>Архитектор, ведущий разработчик алгоритмов, старший инженер данных, DevOps, руководитель проекта, аналитик предметной области (со стороны организации).</List.Item>
          <List.Item>Фаза наполнения БД: фокус на ETL и инфраструктуре; фаза накопления — на анализе данных и подготовке выборок для алгоритмов.</List.Item>
        </List>
      </Card>
    ),
  },
  {
    id: 'impl-data-lake-cost',
    header: 'Data Lake: стоимость',
    content: (
      <Card>
        <Table
          size="small"
          pagination={false}
          dataSource={[
            { key: '1', phase: 'Построение и наполнение единой БД', hours: '3 690', cost: '27 519 358 ₽' },
            { key: '2', phase: 'Накопление и анализ данных', hours: '3 690', cost: '20 136 117 ₽' },
          ]}
          columns={[
            { title: 'Фаза', dataIndex: 'phase', key: 'phase' },
            { title: 'Часов', dataIndex: 'hours', key: 'hours', width: 90 },
            { title: 'Стоимость (с НДС)', dataIndex: 'cost', key: 'cost', width: 140, render: (v: string) => <Text strong>{v}</Text> },
          ]}
        />
        <Paragraph style={{ marginTop: 12, marginBottom: 0 }}><Text strong>Итого по Data Lake:</Text> 7 380 ч, 47 655 475 ₽</Paragraph>
      </Card>
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
        <List size="small">
          <List.Item>Архитектор, ведущий разработчик алгоритмов, инженер данных, разработчик алгоритмов, DevOps, руководитель проекта, аналитик предметной области, бэкенд/фронтенд, UX, QA, бизнес-аналитик.</List.Item>
          <List.Item>Фаза построения — основная разработка; фаза проверки — тестирование и метрики; фаза настройки — калибровка и регрессионные проверки.</List.Item>
        </List>
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
        <List size="small">
          <List.Item>Архитектор, ведущий разработчик алгоритмов, инженер данных, руководитель проекта, DevOps, аналитик предметной области, бэкенд/фронтенд, UX, QA.</List.Item>
        </List>
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
          <Title level={5}>Роли</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            Подготовка: бизнес-аналитик, архитектор, руководитель проекта, DevOps, инженер данных, аналитик предметной области. Внедрение: архитектор, ведущий разработчик алгоритмов, инженер данных, разработчик алгоритмов, руководитель проекта, DevOps, аналитик, QA. Приёмка: архитектор, ведущий разработчик, инженер данных, руководитель проекта, DevOps, QA, бизнес-аналитик.
          </Paragraph>
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
