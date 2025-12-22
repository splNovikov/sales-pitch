import React from 'react';
import { Typography, Space, Divider, Card, Row, Col, List } from 'antd';
import {
  RocketOutlined,
  CheckCircleOutlined,
  ShoppingOutlined,
  DatabaseOutlined,
  EyeInvisibleOutlined,
  BgColorsOutlined,
  PictureOutlined,
  SearchOutlined,
  SafetyOutlined,
  FileTextOutlined,
  UserOutlined,
  PlayCircleOutlined,
  SettingOutlined,
  GlobalOutlined,
  PhoneOutlined,
  AuditOutlined,
  ShopOutlined,
  ExperimentOutlined,
  DollarOutlined,
  SyncOutlined,
  EditOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Roadmap, type RoadmapItem } from '~shared/ui/roadmap';
import { type SlideData } from '~widgets/slides';
import { formatDateForSlide } from '~shared/lib/date.utils';
import { smzRoadmapCreatedAt } from './smz-roadmap.meta';

const { Title, Paragraph, Text, Link } = Typography;

const roadmapItems: RoadmapItem[] = [
  {
    title: 'Инициация и аналитика',
    description:
      'Сбор требований, аудит текущего сайта, согласование целей и ограничений, подготовка ТЗ',
    duration: '1 неделя',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽
    icon: <FileTextOutlined />,
    color: 'blue',
  },
  {
    title: 'Выбор и покупка шаблона Аспро',
    description:
      'Подбор шаблона под задачи, проверка требований, покупка и регистрация лицензий',
    duration: '2 дня',
    cost: 2 * 8 * 1500, // 2 дня × 8 часов × 1500 ₽/час = 24,000 ₽
    icon: <ShoppingOutlined />,
    color: 'blue',
  },
  {
    title: 'Техническая подготовка инфраструктуры',
    description:
      'Подготовка сервера/хостинга, установка 1С-Битрикс, настройка окружений, организация бэкапов',
    duration: '2 дня',
    cost: 2 * 8 * 1500, // 2 дня × 8 часов × 1500 ₽/час = 24,000 ₽
    icon: <SettingOutlined />,
    color: 'blue',
  },
  {
    title: 'Разворачивание шаблона Аспро',
    description:
      'Установка шаблона, базовая настройка модулей, структуры каталогов, первичная проверка работоспособности',
    duration: '1 неделя',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽
    icon: <RocketOutlined />,
    color: 'cyan',
  },
  {
    title: 'Интеграция и выгрузка из 1С',
    description:
      'Настройка обмена данными (CommerceML 2.0), выгрузка каталога, цен, остатков, обратная выгрузка заказов, тестирование',
    duration: '2.5 недели',
    cost: 13 * 8 * 1500, // 13 дней × 8 часов × 1500 ₽/час = 156,000 ₽
    icon: <DatabaseOutlined />,
    color: 'green',
  },
  {
    title: 'Скрытие неиспользуемого функционала',
    description:
      'Определение и отключение неиспользуемых модулей, скрытие лишних разделов, упрощение интерфейса',
    duration: '3 дня',
    cost: 3 * 8 * 1500, // 3 дня × 8 часов × 1500 ₽/час = 36,000 ₽
    icon: <EyeInvisibleOutlined />,
    color: 'orange',
  },
  {
    title: 'Персонализация под бренд заказчика',
    description:
      'Изменение цветовой схемы, размещение логотипа, настройка шрифтов и UI-элементов под брендбук',
    duration: '1-2 недели',
    cost: 8 * 8 * 1500, // 8 дней × 8 часов × 1500 ₽/час = 96,000 ₽
    icon: <BgColorsOutlined />,
    color: 'purple',
  },
  {
    title: 'Графика и контент',
    description:
      'Отрисовка до 3 баннеров для главной, до 5 баннеров для внутренних страниц, иконки для каталога, подготовка текстового контента',
    duration: '2-3 недели',
    cost: 13 * 8 * 1500, // 13 дней × 8 часов × 1500 ₽/час = 156,000 ₽
    icon: <PictureOutlined />,
    color: 'magenta',
  },
  {
    title: 'UX-настройка каталога и поиска',
    description:
      'Структурирование каталога, настройка фильтров и сортировок, умный поиск, оптимизация карточки товара',
    duration: '1-2 недели',
    cost: 8 * 8 * 1500, // 8 дней × 8 часов × 1500 ₽/час = 96,000 ₽
    icon: <SearchOutlined />,
    color: 'geekblue',
  },
  {
    title: 'SEO и маркетинговая подготовка',
    description:
      'Базовая SEO-настройка (ЧПУ, мета-теги, микроразметка), подключение аналитики, редиректы со старого сайта',
    duration: '1-2 недели',
    cost: 8 * 8 * 1500, // 8 дней × 8 часов × 1500 ₽/час = 96,000 ₽
    icon: <GlobalOutlined />,
    color: 'lime',
  },
  {
    title: 'Тестирование и полировка',
    description:
      'Функциональное тестирование, кроссбраузерность, адаптивность, проверка безопасности и производительности',
    duration: '2 недели',
    cost: 10 * 8 * 1500, // 10 дней × 8 часов × 1500 ₽/час = 120,000 ₽
    icon: <SafetyOutlined />,
    color: 'gold',
  },
  {
    title: 'Обучение и документация',
    description:
      'Обучение сотрудников работе с каталогом и заказами, подготовка инструкций и видео-гайдов',
    duration: '1 неделя',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽
    icon: <UserOutlined />,
    color: 'cyan',
  },
  {
    title: 'Запуск и сопровождение',
    description:
      'Перенос на боевой сервер, финальная проверка, мониторинг, регламентное сопровождение',
    duration: '1 неделя + сопровождение',
    cost: 5 * 8 * 1500, // 5 дней × 8 часов × 1500 ₽/час = 60,000 ₽ (без учета сопровождения)
    icon: <PlayCircleOutlined />,
    color: 'green',
  },
];

// Общая стоимость с лицензией
const totalCost = 200000;

// Сгруппированные этапы для детализированной оценки (30 пунктов, сумма = 200,000 ₽)
interface GroupedStage {
  title: string;
  description: string;
  duration: string;
  cost: number;
  icon: React.ReactNode;
  color: string;
  items: Array<{
    title: string;
    duration: string;
    cost: number;
    hours: number;
  }>;
}

const groupedStages: GroupedStage[] = [
  {
    title: 'Инициация и аналитика',
    description:
      'Сбор требований, аудит текущего сайта, согласование целей и ограничений, подготовка ТЗ',
    duration: '1 неделя',
    cost: 11500, // 11,500 ₽ из 200,000
    icon: <FileTextOutlined />,
    color: 'blue',
    items: [
      {
        title: 'Сбор требований и согласование целей',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Аудит текущего сайта',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Подготовка технического задания',
        duration: '1 день',
        cost: 2300,
        hours: 8,
      },
    ],
  },
  {
    title: 'Выбор и покупка шаблона Аспро',
    description:
      'Подбор шаблона под задачи, проверка требований, покупка и регистрация лицензий',
    duration: '2 дня',
    cost: 4600, // 4,600 ₽
    icon: <ShoppingOutlined />,
    color: 'cyan',
    items: [
      {
        title: 'Подбор шаблона Аспро',
        duration: '1 день',
        cost: 2300,
        hours: 8,
      },
      {
        title: 'Покупка и регистрация лицензий',
        duration: '1 день',
        cost: 2300,
        hours: 8,
      },
    ],
  },
  {
    title: 'Техническая подготовка инфраструктуры',
    description:
      'Подготовка сервера/хостинга, установка 1С-Битрикс, настройка окружений, организация бэкапов',
    duration: '2 дня',
    cost: 4600, // 4,600 ₽
    icon: <SettingOutlined />,
    color: 'geekblue',
    items: [
      {
        title: 'Подготовка сервера и хостинга',
        duration: '1 день',
        cost: 2300,
        hours: 8,
      },
      {
        title: 'Установка 1С-Битрикс и настройка окружений',
        duration: '1 день',
        cost: 2300,
        hours: 8,
      },
    ],
  },
  {
    title: 'Разворачивание шаблона Аспро',
    description:
      'Установка шаблона, базовая настройка модулей, структуры каталогов, первичная проверка работоспособности',
    duration: '1 неделя',
    cost: 11500, // 11,500 ₽
    icon: <RocketOutlined />,
    color: 'cyan',
    items: [
      {
        title: 'Установка шаблона Аспро',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Базовая настройка модулей и структуры каталогов',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Первичная проверка работоспособности',
        duration: '1 день',
        cost: 2300,
        hours: 8,
      },
    ],
  },
  {
    title: 'Интеграция и выгрузка из 1С',
    description:
      'Настройка обмена данными (CommerceML 2.0), выгрузка каталога, цен, остатков, обратная выгрузка заказов, тестирование',
    duration: '2.5 недели',
    cost: 29900, // 29,900 ₽
    icon: <DatabaseOutlined />,
    color: 'green',
    items: [
      {
        title: 'Настройка обмена данными CommerceML 2.0',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Выгрузка каталога товаров из 1С',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Выгрузка цен и торговых предложений',
        duration: '2.5 дня',
        cost: 5750,
        hours: 20,
      },
      {
        title: 'Выгрузка остатков товаров',
        duration: '2.5 дня',
        cost: 5750,
        hours: 20,
      },
      {
        title: 'Настройка обратной выгрузки заказов',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
    ],
  },
  {
    title: 'Скрытие неиспользуемого функционала',
    description:
      'Определение и отключение неиспользуемых модулей, скрытие лишних разделов, упрощение интерфейса',
    duration: '3 дня',
    cost: 6900, // 6,900 ₽
    icon: <EyeInvisibleOutlined />,
    color: 'orange',
    items: [
      {
        title: 'Отключение неиспользуемых модулей',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Скрытие лишних разделов и упрощение интерфейса',
        duration: '1 день',
        cost: 2300,
        hours: 8,
      },
    ],
  },
  {
    title: 'Персонализация под бренд заказчика',
    description:
      'Изменение цветовой схемы, размещение логотипа, настройка шрифтов и UI-элементов под брендбук',
    duration: '1-2 недели',
    cost: 18400, // 18,400 ₽
    icon: <BgColorsOutlined />,
    color: 'purple',
    items: [
      {
        title: 'Изменение цветовой схемы под брендбук',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Размещение логотипа и настройка шрифтов',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Настройка UI-элементов под брендбук',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
    ],
  },
  {
    title: 'Графика и контент',
    description:
      'Отрисовка до 3 баннеров для главной, до 5 баннеров для внутренних страниц, иконки для каталога, подготовка текстового контента',
    duration: '2-3 недели',
    cost: 29900, // 29,900 ₽
    icon: <PictureOutlined />,
    color: 'magenta',
    items: [
      {
        title: 'Отрисовка баннеров для главной страницы',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Отрисовка баннеров для внутренних страниц',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Создание иконок для каталога',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Подготовка текстового контента',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Дополнительная графическая подготовка',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
    ],
  },
  {
    title: 'UX-настройка каталога и поиска',
    description:
      'Структурирование каталога, настройка фильтров и сортировок, умный поиск, оптимизация карточки товара',
    duration: '1-2 недели',
    cost: 18400, // 18,400 ₽
    icon: <SearchOutlined />,
    color: 'geekblue',
    items: [
      {
        title: 'Структурирование каталога товаров',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Настройка фильтров и сортировок',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Настройка умного поиска и оптимизация карточки товара',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
    ],
  },
  {
    title: 'SEO и маркетинговая подготовка',
    description:
      'Базовая SEO-настройка (ЧПУ, мета-теги, микроразметка), подключение аналитики, редиректы со старого сайта',
    duration: '1-2 недели',
    cost: 18400, // 18,400 ₽
    icon: <GlobalOutlined />,
    color: 'lime',
    items: [
      {
        title: 'Базовая SEO-настройка (ЧПУ, мета-теги, микроразметка)',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Подключение аналитики и систем отслеживания',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Настройка редиректов со старого сайта',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
    ],
  },
  {
    title: 'Тестирование и полировка',
    description:
      'Функциональное тестирование, кроссбраузерность, адаптивность, проверка безопасности и производительности',
    duration: '2 недели',
    cost: 23000, // 23,000 ₽
    icon: <SafetyOutlined />,
    color: 'gold',
    items: [
      {
        title: 'Функциональное тестирование',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Кроссбраузерное тестирование',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Тестирование адаптивности',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
      {
        title: 'Проверка безопасности и производительности',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
    ],
  },
  {
    title: 'Обучение и документация',
    description:
      'Обучение сотрудников работе с каталогом и заказами, подготовка инструкций и видео-гайдов',
    duration: '1 неделя',
    cost: 11500, // 11,500 ₽
    icon: <UserOutlined />,
    color: 'cyan',
    items: [
      {
        title: 'Обучение сотрудников работе с каталогом и заказами',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Подготовка инструкций и видео-гайдов',
        duration: '2 дня',
        cost: 4600,
        hours: 16,
      },
    ],
  },
  {
    title: 'Запуск и сопровождение',
    description:
      'Перенос на боевой сервер, финальная проверка, мониторинг, регламентное сопровождение',
    duration: '1 неделя + сопровождение',
    cost: 11400, // 11,400 ₽
    icon: <PlayCircleOutlined />,
    color: 'green',
    items: [
      {
        title: 'Перенос на боевой сервер и финальная проверка',
        duration: '3 дня',
        cost: 6900,
        hours: 24,
      },
      {
        title: 'Мониторинг и регламентное сопровождение',
        duration: '2 дня',
        cost: 4500,
        hours: 16,
      },
    ],
  },
];

// Проверка: сумма всех пунктов должна быть 200,000 ₽
const detailedTotalCost = groupedStages.reduce(
  (sum, stage) => sum + stage.cost,
  0
);

// Сгруппированные этапы для детализированной оценки подготовки 1С (сумма = 160,000 ₽)
interface GroupedStage1C {
  title: string;
  description: string;
  duration: string;
  cost: number;
  icon: React.ReactNode;
  color: string;
  items: Array<{
    title: string;
    duration: string;
    cost: number;
    hours: number;
  }>;
}

const groupedStages1C: GroupedStage1C[] = [
  {
    title: 'Аудит текущей базы 1С',
    description:
      'Проверка состояния базы данных товаров, оценка конфигурации 1С на предмет возможности установки модуля обмена, выявление проблемных мест',
    duration: '3-5 дней',
    cost: 15000, // 15,000 ₽
    icon: <AuditOutlined />,
    color: 'blue',
    items: [
      {
        title: 'Анализ структуры базы данных товаров',
        duration: '2 дня',
        cost: 6000,
        hours: 16,
      },
      {
        title: 'Проверка конфигурации 1С на совместимость',
        duration: '1.5 дня',
        cost: 4500,
        hours: 12,
      },
      {
        title: 'Выявление проблемных мест и подготовка отчета',
        duration: '1.5 дня',
        cost: 4500,
        hours: 12,
      },
    ],
  },
  {
    title: 'Создание структуры каталога',
    description:
      'Определение и утверждение иерархии разделов и подразделов для сайта, структура должна быть воспроизведена в 1С',
    duration: '2-3 дня',
    cost: 12000, // 12,000 ₽
    icon: <DatabaseOutlined />,
    color: 'cyan',
    items: [
      {
        title: 'Проектирование иерархии разделов для сайта',
        duration: '1.5 дня',
        cost: 4500,
        hours: 12,
      },
      {
        title: 'Согласование структуры с заказчиком',
        duration: '0.5 дня',
        cost: 1500,
        hours: 4,
      },
      {
        title: 'Воспроизведение структуры в 1С',
        duration: '1 день',
        cost: 6000,
        hours: 16,
      },
    ],
  },
  {
    title: 'Разработка единого стандарта заполнения',
    description:
      'Установка правил для названий товаров, форматов описаний, загрузки изображений. Обеспечение единообразия на сайте',
    duration: '2-3 дня',
    cost: 12000, // 12,000 ₽
    icon: <FileTextOutlined />,
    color: 'geekblue',
    items: [
      {
        title: 'Разработка правил наименования товаров',
        duration: '1 день',
        cost: 3000,
        hours: 8,
      },
      {
        title: 'Установка форматов описаний и HTML-разметки',
        duration: '1 день',
        cost: 3000,
        hours: 8,
      },
      {
        title: 'Стандартизация загрузки изображений',
        duration: '1 день',
        cost: 3000,
        hours: 8,
      },
      {
        title: 'Создание инструкции по заполнению',
        duration: '1 день',
        cost: 3000,
        hours: 8,
      },
    ],
  },
  {
    title: 'Проверка и обновление конфигурации',
    description:
      'Обновление конфигурации 1С при необходимости, проверка совместимости с модулем обмена данными',
    duration: '1-2 дня',
    cost: 8000, // 8,000 ₽
    icon: <SettingOutlined />,
    color: 'green',
    items: [
      {
        title: 'Проверка версии конфигурации 1С',
        duration: '0.5 дня',
        cost: 2000,
        hours: 4,
      },
      {
        title: 'Обновление конфигурации при необходимости',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
      {
        title: 'Проверка совместимости с модулем обмена',
        duration: '0.5 дня',
        cost: 2000,
        hours: 4,
      },
    ],
  },
  {
    title: 'Настройка дополнительных реквизитов',
    description:
      'Определение свойств товара (цвет, размер, материал) для фильтрации на сайте, настройка соответствующих реквизитов в 1С',
    duration: '2-3 дня',
    cost: 12000, // 12,000 ₽
    icon: <EditOutlined />,
    color: 'lime',
    items: [
      {
        title: 'Определение свойств товара для фильтрации',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
      {
        title: 'Создание дополнительных реквизитов в 1С',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
      {
        title: 'Настройка связи реквизитов с сайтом',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
    ],
  },
  {
    title: 'Создание транзитного каталога',
    description:
      'Создание отдельного каталога в 1С (например, "Для сайта"), куда в нужной структуре помещаются товары для выгрузки',
    duration: '1-2 дня',
    cost: 8000, // 8,000 ₽
    icon: <ShopOutlined />,
    color: 'orange',
    items: [
      {
        title: 'Создание структуры транзитного каталога',
        duration: '0.5 дня',
        cost: 2000,
        hours: 4,
      },
      {
        title: 'Настройка правил переноса товаров',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
      {
        title: 'Тестирование работы транзитного каталога',
        duration: '0.5 дня',
        cost: 2000,
        hours: 4,
      },
    ],
  },
  {
    title: 'Заполнение основной информации товаров',
    description:
      'Заполнение наименования, полного описания с HTML-тегами, артикула, категории/группы, производителя (бренда)',
    duration: 'По объему работ',
    cost: 23000, // 23,000 ₽
    icon: <FileTextOutlined />,
    color: 'purple',
    items: [
      {
        title: 'Заполнение наименований товаров',
        duration: 'По объему',
        cost: 7500,
        hours: 30,
      },
      {
        title: 'Создание описаний с HTML-разметкой',
        duration: 'По объему',
        cost: 8500,
        hours: 34,
      },
      {
        title: 'Заполнение артикулов и категорий',
        duration: 'По объему',
        cost: 4500,
        hours: 18,
      },
      {
        title: 'Указание производителей и брендов',
        duration: 'По объему',
        cost: 2500,
        hours: 10,
      },
    ],
  },
  {
    title: 'Загрузка изображений',
    description:
      'Загрузка качественных фотографий в карточки товаров в 1С. Порядок важен: первое изображение станет основным на сайте',
    duration: 'По объему работ',
    cost: 18000, // 18,000 ₽
    icon: <PictureOutlined />,
    color: 'magenta',
    items: [
      {
        title: 'Подготовка изображений к загрузке',
        duration: 'По объему',
        cost: 5500,
        hours: 22,
      },
      {
        title: 'Загрузка основных изображений товаров',
        duration: 'По объему',
        cost: 7000,
        hours: 28,
      },
      {
        title: 'Загрузка дополнительных изображений',
        duration: 'По объему',
        cost: 3500,
        hours: 14,
      },
      {
        title: 'Проверка порядка и качества изображений',
        duration: 'По объему',
        cost: 2000,
        hours: 8,
      },
    ],
  },
  {
    title: 'Установка цен и остатков',
    description:
      'Настройка правильного вида цены (например, "Розничная") для выгрузки на сайт, настройка отражения остатков с нужных складов',
    duration: '2-3 дня',
    cost: 12000, // 12,000 ₽
    icon: <DollarOutlined />,
    color: 'cyan',
    items: [
      {
        title: 'Настройка вида цены для выгрузки',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
      {
        title: 'Настройка отражения остатков со складов',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
      {
        title: 'Проверка корректности цен и остатков',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
    ],
  },
  {
    title: 'Тестовая выгрузка',
    description:
      'Выбор нескольких товаров из разных категорий и выполнение пробной выгрузки на тестовую версию сайта',
    duration: '2-3 дня',
    cost: 12000, // 12,000 ₽
    icon: <SyncOutlined />,
    color: 'blue',
    items: [
      {
        title: 'Выбор тестовых товаров из разных категорий',
        duration: '0.5 дня',
        cost: 2000,
        hours: 4,
      },
      {
        title: 'Выполнение пробной выгрузки на тестовый сайт',
        duration: '1 день',
        cost: 4000,
        hours: 8,
      },
      {
        title: 'Проверка корректности выгрузки данных',
        duration: '1.5 дня',
        cost: 6000,
        hours: 12,
      },
    ],
  },
  {
    title: 'Комплексная проверка отображения',
    description:
      'Проверка правильности расположения в каталоге, корректности названий, описаний, изображений, торговых предложений, цен и остатков',
    duration: '3-5 дней',
    cost: 12000, // 12,000 ₽
    icon: <ExperimentOutlined />,
    color: 'orange',
    items: [
      {
        title: 'Проверка расположения товаров в каталоге',
        duration: '1 день',
        cost: 2500,
        hours: 8,
      },
      {
        title: 'Проверка названий и описаний',
        duration: '1 день',
        cost: 2500,
        hours: 8,
      },
      {
        title: 'Проверка изображений и торговых предложений',
        duration: '1 день',
        cost: 2500,
        hours: 8,
      },
      {
        title: 'Проверка цен и остатков на сайте',
        duration: '1 день',
        cost: 2500,
        hours: 8,
      },
      {
        title: 'Составление отчета о проверке',
        duration: '1 день',
        cost: 2000,
        hours: 8,
      },
    ],
  },
  {
    title: 'Внесение корректировок',
    description:
      'Внесение правок в карточки товаров в 1С при обнаружении ошибок, повторная выгрузка для проверки',
    duration: 'По необходимости',
    cost: 8000, // 8,000 ₽
    icon: <EditOutlined />,
    color: 'red',
    items: [
      {
        title: 'Исправление ошибок в карточках товаров',
        duration: 'По необходимости',
        cost: 4000,
        hours: 16,
      },
      {
        title: 'Повторная выгрузка для проверки',
        duration: 'По необходимости',
        cost: 2000,
        hours: 8,
      },
      {
        title: 'Финальная проверка корректности',
        duration: 'По необходимости',
        cost: 2000,
        hours: 8,
      },
    ],
  },
  {
    title: 'Промышленная эксплуатация и поддержка',
    description:
      'Запуск автоматического обмена данными, настройка расписания синхронизации, мониторинг работы, поддержка и сопровождение',
    duration: 'Постоянно',
    cost: 8000, // 8,000 ₽
    icon: <PlayCircleOutlined />,
    color: 'green',
    items: [
      {
        title: 'Настройка автоматического обмена данными',
        duration: '1 день',
        cost: 3000,
        hours: 8,
      },
      {
        title: 'Настройка расписания синхронизации',
        duration: '0.5 дня',
        cost: 1500,
        hours: 4,
      },
      {
        title: 'Настройка мониторинга работы обмена',
        duration: '0.5 дня',
        cost: 1500,
        hours: 4,
      },
      {
        title: 'Организация поддержки и сопровождения',
        duration: '1 день',
        cost: 2000,
        hours: 8,
      },
    ],
  },
];

// Проверка: сумма всех пунктов должна быть 160,000 ₽
const detailedTotalCost1C = groupedStages1C.reduce(
  (sum, stage) => sum + stage.cost,
  0
);

export const smzRoadmapSlides: SlideData[] = [
  {
    id: 'title',
    header: undefined,
    content: (
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Space
          orientation="vertical"
          size="middle"
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <Title
            level={1}
            style={{
              fontSize: '48px',
              fontWeight: 700,
              background: `linear-gradient(135deg, var(--app-gradient-start) 0%, var(--app-gradient-end) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--app-spacing-md)',
            }}
          >
            ДОРОЖНАЯ КАРТА
          </Title>
          <Title
            level={2}
            style={{
              fontSize: '36px',
              fontWeight: 500,
              marginTop: 'var(--app-spacing-sm)',
              marginBottom: 0,
            }}
          >
            Разработка интернет-магазина на шаблоне Аспро
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-lg)',
              marginBottom: 0,
              color: 'var(--app-color-text-secondary)',
            }}
          >
            Поэтапный план реализации обновления сайта СМЗ
          </Paragraph>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          {formatDateForSlide(smzRoadmapCreatedAt)}
        </Text>
      </Space>
    ),
  },
  {
    id: 'roadmap',
    header: 'Дорожная карта разработки',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%', marginBottom: 'var(--app-spacing-md)' }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                      3-4 месяца
                    </Title>
                    <Text>Общий срок реализации</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                      13 этапов
                    </Title>
                    <Text>Логически связанных шагов</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                        {totalCost.toLocaleString('ru-RU')} ₽
                      </Title>
                      <Text style={{ fontSize: '12px' }}>
                        + лицензия 1С Битрикс Малый бизнес 41 000 ₽
                      </Text>
                      <Text style={{ fontSize: '12px' }}>
                        + шаблон Аспро (95 000 ₽ - 115 000 ₽)
                      </Text>
                    </Space>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
        <Card>
          <Roadmap items={roadmapItems} mode="alternate" />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ marginTop: 0 }}>
              <CheckCircleOutlined
                style={{ color: '#faad14', marginRight: 8 }}
              />
              Ключевые принципы
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Последовательная реализация этапов, регулярное согласование с
              заказчиком, тестирование на каждом этапе, гибкость в адаптации под
              требования.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'roadmap-detailed',
    header: 'Детализированная оценка работ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%', marginBottom: 'var(--app-spacing-md)' }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                      3-4 месяца
                    </Title>
                    <Text>Общий срок реализации</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                      30 этапов
                    </Title>
                    <Text>Детализированных шагов</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                        {detailedTotalCost.toLocaleString('ru-RU')} ₽
                      </Title>
                      <Text style={{ fontSize: '12px' }}>
                        + лицензия 1С Битрикс Малый бизнес 41 000 ₽
                      </Text>
                      <Text style={{ fontSize: '12px' }}>
                        + шаблон Аспро (95 000 ₽ - 115 000 ₽)
                      </Text>
                    </Space>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {groupedStages.map((stage, index) => (
            <Card key={index}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Space align="start" style={{ width: '100%' }}>
                  <div style={{ fontSize: '24px', marginRight: 12 }}>
                    {stage.icon}
                  </div>
                  <Space direction="vertical" size="small" style={{ flex: 1 }}>
                    <Space
                      style={{ width: '100%', justifyContent: 'space-between' }}
                      wrap
                    >
                      <Title level={4} style={{ margin: 0 }}>
                        {stage.title}
                      </Title>
                      <Space size="middle">
                        <Text type="secondary">{stage.duration}</Text>
                        <Text strong style={{ color: '#faad14' }}>
                          {stage.cost.toLocaleString('ru-RU')} ₽
                        </Text>
                      </Space>
                    </Space>
                    <Paragraph style={{ marginBottom: 8 }}>
                      {stage.description}
                    </Paragraph>
                    <List
                      size="small"
                      dataSource={stage.items}
                      renderItem={item => (
                        <List.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                          <Space
                            style={{
                              width: '100%',
                              justifyContent: 'space-between',
                            }}
                            wrap
                          >
                            <Text>{item.title}</Text>
                            <Space size="middle">
                              <Text
                                type="secondary"
                                style={{ fontSize: '12px' }}
                              >
                                {item.duration} ({item.hours} ч)
                              </Text>
                              <Text style={{ fontSize: '12px' }}>
                                {item.cost.toLocaleString('ru-RU')} ₽
                              </Text>
                            </Space>
                          </Space>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Space>
              </Space>
            </Card>
          ))}
        </Space>
      </Space>
    ),
  },
  {
    id: 'roadmap-1c',
    header: 'Дорожная карта по подготовке 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%', marginBottom: 'var(--app-spacing-md)' }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                      2-3 месяца
                    </Title>
                    <Text>Общий срок реализации</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                      13 этапов
                    </Title>
                    <Text>Логически связанных шагов</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                      160 000 ₽
                    </Title>
                    <Text>Стоимость работ</Text>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
        <Card>
          <Roadmap
            items={[
              {
                title: 'Аудит текущей базы 1С',
                description:
                  'Проверка состояния базы данных товаров, оценка конфигурации 1С на предмет возможности установки модуля обмена, выявление проблемных мест',
                duration: '3-5 дней',
                icon: <AuditOutlined />,
                color: 'blue',
              },
              {
                title: 'Создание структуры каталога',
                description:
                  'Определение и утверждение иерархии разделов и подразделов для сайта, структура должна быть воспроизведена в 1С',
                duration: '2-3 дня',
                icon: <DatabaseOutlined />,
                color: 'cyan',
              },
              {
                title: 'Разработка единого стандарта заполнения',
                description:
                  'Установка правил для названий товаров, форматов описаний, загрузки изображений. Обеспечение единообразия на сайте',
                duration: '2-3 дня',
                icon: <FileTextOutlined />,
                color: 'geekblue',
              },
              {
                title: 'Проверка и обновление конфигурации',
                description:
                  'Обновление конфигурации 1С при необходимости, проверка совместимости с модулем обмена данными',
                duration: '1-2 дня',
                icon: <SettingOutlined />,
                color: 'green',
              },
              {
                title: 'Настройка дополнительных реквизитов',
                description:
                  'Определение свойств товара (цвет, размер, материал) для фильтрации на сайте, настройка соответствующих реквизитов в 1С',
                duration: '2-3 дня',
                icon: <EditOutlined />,
                color: 'lime',
              },
              {
                title: 'Создание транзитного каталога',
                description:
                  'Создание отдельного каталога в 1С (например, "Для сайта"), куда в нужной структуре помещаются товары для выгрузки',
                duration: '1-2 дня',
                icon: <ShopOutlined />,
                color: 'orange',
              },
              {
                title: 'Заполнение основной информации товаров',
                description:
                  'Заполнение наименования, полного описания с HTML-тегами, артикула, категории/группы, производителя (бренда)',
                duration: 'По объему работ',
                icon: <FileTextOutlined />,
                color: 'purple',
              },
              {
                title: 'Загрузка изображений',
                description:
                  'Загрузка качественных фотографий в карточки товаров в 1С. Порядок важен: первое изображение станет основным на сайте',
                duration: 'По объему работ',
                icon: <PictureOutlined />,
                color: 'magenta',
              },
              {
                title: 'Установка цен и остатков',
                description:
                  'Настройка правильного вида цены (например, "Розничная") для выгрузки на сайт, настройка отражения остатков с нужных складов',
                duration: '2-3 дня',
                icon: <DollarOutlined />,
                color: 'cyan',
              },
              {
                title: 'Тестовая выгрузка',
                description:
                  'Выбор нескольких товаров из разных категорий и выполнение пробной выгрузки на тестовую версию сайта',
                duration: '2-3 дня',
                icon: <SyncOutlined />,
                color: 'blue',
              },
              {
                title: 'Комплексная проверка отображения',
                description:
                  'Проверка правильности расположения в каталоге, корректности названий, описаний, изображений, торговых предложений, цен и остатков',
                duration: '3-5 дней',
                icon: <ExperimentOutlined />,
                color: 'orange',
              },
              {
                title: 'Внесение корректировок',
                description:
                  'Внесение правок в карточки товаров в 1С при обнаружении ошибок, повторная выгрузка для проверки',
                duration: 'По необходимости',
                icon: <EditOutlined />,
                color: 'red',
              },
              {
                title: 'Промышленная эксплуатация и поддержка',
                description:
                  'Запуск автоматического обмена данными, настройка расписания синхронизации, мониторинг работы, поддержка и сопровождение',
                duration: 'Постоянно',
                icon: <PlayCircleOutlined />,
                color: 'green',
              },
            ]}
            mode="alternate"
          />
        </Card>
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ marginTop: 0 }}>
              <CheckCircleOutlined
                style={{ color: '#faad14', marginRight: 8 }}
              />
              Важно
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Качественная подготовка данных в 1С — основа успешной работы
              интернет-магазина. Правильная структура и единые стандарты
              заполнения обеспечат корректное отображение товаров на сайте.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'roadmap-1c-detailed',
    header: 'Детализированная оценка подготовки 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%', marginBottom: 'var(--app-spacing-md)' }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                      2-3 месяца
                    </Title>
                    <Text>Общий срок реализации</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                      40 этапов
                    </Title>
                    <Text>Детализированных шагов</Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                      {detailedTotalCost1C.toLocaleString('ru-RU')} ₽
                    </Title>
                    <Text>Стоимость работ</Text>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {groupedStages1C.map((stage, index) => (
            <Card key={index}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Space align="start" style={{ width: '100%' }}>
                  <div style={{ fontSize: '24px', marginRight: 12 }}>
                    {stage.icon}
                  </div>
                  <Space direction="vertical" size="small" style={{ flex: 1 }}>
                    <Space
                      style={{ width: '100%', justifyContent: 'space-between' }}
                      wrap
                    >
                      <Title level={4} style={{ margin: 0 }}>
                        {stage.title}
                      </Title>
                      <Space size="middle">
                        <Text type="secondary">{stage.duration}</Text>
                        <Text strong style={{ color: '#faad14' }}>
                          {stage.cost.toLocaleString('ru-RU')} ₽
                        </Text>
                      </Space>
                    </Space>
                    <Paragraph style={{ marginBottom: 8 }}>
                      {stage.description}
                    </Paragraph>
                    <List
                      size="small"
                      dataSource={stage.items}
                      renderItem={item => (
                        <List.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                          <Space
                            style={{
                              width: '100%',
                              justifyContent: 'space-between',
                            }}
                            wrap
                          >
                            <Text>{item.title}</Text>
                            <Space size="middle">
                              <Text
                                type="secondary"
                                style={{ fontSize: '12px' }}
                              >
                                {item.duration} ({item.hours} ч)
                              </Text>
                              <Text style={{ fontSize: '12px' }}>
                                {item.cost.toLocaleString('ru-RU')} ₽
                              </Text>
                            </Space>
                          </Space>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Space>
              </Space>
            </Card>
          ))}
        </Space>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Давайте обсудим Ваш проект',
    content: (
      <Space
        orientation="vertical"
        size="middle"
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
          padding: '8px 0',
        }}
      >
        <Card style={{ maxWidth: '1200px', width: '100%' }}>
          <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
            <Space
              direction="vertical"
              size="small"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <Title
                level={2}
                style={{
                  textAlign: 'center',
                  marginTop: 0,
                  marginBottom: 8,
                  fontSize: '32px',
                }}
              >
                Свяжитесь с нами
              </Title>
            </Space>
            <Divider style={{ margin: '16px 0' }} />
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#f6ffed', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Новиков Павел
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Технический директор
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79085550606"
                          style={{ fontSize: '15px' }}
                        >
                          +7 908 555 0606
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:p.novikov@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          p.novikov@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#fff7e6', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Ситяков Артём
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Руководитель отдела маркетинга
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79271108488"
                          style={{ fontSize: '15px' }}
                        >
                          +7 927 110 84 88
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:a.sityakov@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          a.sityakov@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: '#f6ffed', height: '100%' }}
                >
                  <Space
                    orientation="vertical"
                    size="small"
                    style={{ width: '100%' }}
                  >
                    <Title level={5} style={{ marginTop: 0, marginBottom: 4 }}>
                      <UserOutlined style={{ marginRight: 8 }} />
                      Сайгина Юлия
                    </Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      Руководитель проектов
                    </Text>
                    <Divider style={{ margin: '8px 0' }} />
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%' }}
                    >
                      <Space size="small">
                        <PhoneOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="tel:+79033856349"
                          style={{ fontSize: '15px' }}
                        >
                          +7 903 385 6349
                        </Link>
                      </Space>
                      <Space size="small">
                        <MailOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="mailto:y.saigina@proxima.ooo"
                          style={{ fontSize: '15px' }}
                        >
                          y.saigina@proxima.ooo
                        </Link>
                      </Space>
                      <Space size="small">
                        <GlobalOutlined
                          style={{
                            fontSize: '16px',
                            color: 'var(--app-color-primary)',
                          }}
                        />
                        <Link
                          href="https://proxima24.ru/"
                          target="_blank"
                          style={{ fontSize: '15px' }}
                        >
                          proxima24.ru
                        </Link>
                      </Space>
                    </Space>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Card>
      </Space>
    ),
  },
];
