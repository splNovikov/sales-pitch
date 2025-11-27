import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Table,
  Descriptions,
} from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  FileTextOutlined,
  BuildOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  RocketOutlined,
  ShopOutlined,
  BarChartOutlined,
  TeamOutlined,
  CalendarOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  MessageOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';
import hanskonnerImage from './image.png';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for HansKonner presentation
 * Ознакомительная презентация для понимания компании
 * Based on documentation in features/hanskonner/docs/hanskonner_analysis_updated.md
 */
export const hanskonnerSlides: SlideData[] = [
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
          <a
            href="https://hanskonner.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--app-spacing-md)',
            }}
          >
            <img
              src={hanskonnerImage}
              alt="HansKonner"
              style={{
                maxWidth: '300px',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))',
              }}
            />
          </a>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Профессиональный инструмент высочайшего качества
          </Paragraph>
          <Link
            href="https://hanskonner.ru/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--app-font-size-lg)',
              fontWeight: 600,
            }}
          >
            hanskonner.ru
          </Link>
        </Space>
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          27.11.2025
        </Text>
      </Space>
    ),
  },
  {
    id: 'company-info',
    header: 'Основная информация о компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <FileTextOutlined style={{ marginRight: 8 }} />
            Базовые реквизиты
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Юридическое имя">
              ООО "СМАРТ ТУЛЗ" (SmartTulz OOO)
            </Descriptions.Item>
            <Descriptions.Item label="ИНН">9718158544</Descriptions.Item>
            <Descriptions.Item label="Местоположение">
              Москва, ул. 8 Марта, д.1, стр.12, БЦ "Трио", 2 корпус, 9 этаж
            </Descriptions.Item>
            <Descriptions.Item label="Главный офис">
              127083, г. Москва
            </Descriptions.Item>
            <Descriptions.Item label="Телефон">
              <Link href="tel:+78007755060">+7 (800) 775-50-60</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              <Link href="mailto:info@sturmtools.ru">info@sturmtools.ru</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Веб-сайт">
              <Link href="https://hanskonner.ru" target="_blank">
                https://hanskonner.ru
              </Link>
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TeamOutlined style={{ marginRight: 8 }} />
            Руководство и структура
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Генеральный директор">
              <Text strong>Боташев Мухаммат Азретович</Text>
              <br />
              <Text type="secondary">Учредитель, 100% владелец</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Численность компании">
              <Text strong>Более 600 сотрудников</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Сфера деятельности">
              Производство и распространение электроинструмента и ручного
              инструмента
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'key-contacts',
    header: 'Ключевые контакты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Основной контакт
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Имя">
              <Text strong>Сергей Горячий</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Должность">Менеджер</Descriptions.Item>
            <Descriptions.Item label="Источник контакта">
              Встреча на выставке MITEX 12 ноября 2025
            </Descriptions.Item>
            <Descriptions.Item label="Стенд">
              Зал 8, стенд 8D1201
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Специалист по маркетингу
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Имя">
              <Text strong>Ефремова Ольга</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Должность">
              Специалист по работе с маркетинговыми коммуникациями
            </Descriptions.Item>
            <Descriptions.Item label="Роль">
              Контактное лицо по маркетинговым вопросам
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Space>
    ),
  },
  {
    id: 'history-brands',
    header: 'История компании и бренды',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Группа компаний "Штурм"
          </Title>
          <Paragraph>
            <Text strong>Основание:</Text> 2003 год
          </Paragraph>
          <Paragraph>
            Компания вышла на российский рынок с брендом{' '}
            <Text strong>Sturm</Text> (Штурм) в 2003 году. За 20+ лет
            деятельности компания завоевала значительное место на рынке и стала
            одним из лидеров в сегменте электроинструмента и ручного
            инструмента.
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Бренд HansKonner
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Запуск">
              Примерно 10-15 лет назад
            </Descriptions.Item>
            <Descriptions.Item label="Позиционирование">
              <Text strong>Профессиональный бренд высочайшего качества</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Целевая аудитория">
              Профессиональные пользователи (в отличие от Sturm,
              ориентированного на бытовой сегмент)
            </Descriptions.Item>
          </Descriptions>
          <Divider style={{ margin: '12px 0' }} />
          <Title level={5}>Философия бренда:</Title>
          <List
            size="small"
            dataSource={[
              'Бренд создан для профессионалов, нацеленных на лучший результат',
              'Объединяет опыт немецких инженеров и практику российских мастеров',
              'Отличается повышенным качеством и долгим сроком службы',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
          <Divider style={{ margin: '12px 0' }} />
          <Title level={5}>История названия:</Title>
          <Paragraph>
            <Text strong>"Hans"</Text> (Ганс) - немецкое имя, символизирующее
            немецкую традицию качества
            <br />
            <Text strong>"Koenner"</Text> - переводится с немецкого как
            "умелец/мастер"
            <br />
            <Text strong>Объединённое название "HansKonner"</Text> означает
            "Ганс-умелец" - профессионал-мастер
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ShopOutlined style={{ marginRight: 8 }} />
            Другие бренды в группе
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  Sturm
                </Tag>
                <Text>Бытовой сегмент</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Tag color="orange" style={{ marginBottom: 8 }}>
                  Energomash
                </Tag>
                <Text>Альтернативный бренд</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Tag color="default" style={{ marginBottom: 8 }}>
                  СОЮЗ
                </Tag>
                <Text>Бюджетный сегмент</Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'product-range',
    header: 'Сфера деятельности и ассортимент',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BuildOutlined style={{ marginRight: 8 }} />
            Основные категории продукции
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Электроинструмент</Text>
                <List
                  size="small"
                  dataSource={[
                    'Дрели и шуруповёрты',
                    'Перфораторы',
                    'Угловые шлифмашины',
                    'Отбойные молотки',
                    'Полировальные машины',
                    'Штроборезы',
                    'Фрезеры',
                    'Лобзики',
                    'Ленточные пилы',
                    'Сварочное оборудование',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Ручной инструмент</Text>
                <List
                  size="small"
                  dataSource={[
                    'Гаечные ключи и отвёртки',
                    'Гвоздодёры и монтажные инструменты',
                    'Ударный инструмент',
                    'Измерительные инструменты',
                    'Слесарный инструмент',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Оснастка и расходные материалы</Text>
                <List
                  size="small"
                  dataSource={[
                    'Сверла (для разных материалов)',
                    'Пильные диски',
                    'Абразивные материалы',
                    'Буры и коронки',
                    'Биты и насадки',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Садовая и силовая техника</Text>
                <List
                  size="small"
                  dataSource={[
                    'Триммеры',
                    'Генераторы',
                    'Насосы и мотопомпы',
                    'Чистящее оборудование',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="small">
                <Text strong>Системы хранения</Text>
                <List
                  size="small"
                  dataSource={[
                    'Компактные кейсы',
                    'Модульные решения (HanStorage)',
                    'Организация рабочего пространства',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Инновационные серии
          </Title>
          <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
            <Space
              orientation="vertical"
              size="small"
              style={{ width: '100%' }}
            >
              <Tag color="blue" style={{ marginBottom: 8 }}>
                OneBatterySystem
              </Tag>
              <Text strong>Единая аккумуляторная платформа</Text>
              <Paragraph style={{ marginBottom: 0 }}>
                Совместимость с Makita LXT. Позволяет использовать один
                аккумулятор со всеми моделями инструмента. Облегчает
                пользователям переход на профессиональный инструмент.
              </Paragraph>
            </Space>
          </Card>
        </Card>
      </Space>
    ),
  },
  {
    id: 'quality-standards',
    header: 'Качество и стандарты',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Стандарты контроля качества
          </Title>
          <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
            <Title level={5} style={{ marginTop: 0 }}>
              Тройной контроль качества:
            </Title>
            <List
              size="small"
              dataSource={[
                'Тестирование опытных образцов',
                'Контроль качества во время производства',
                'Выборочное тестирование готовой партии',
              ]}
              renderItem={item => (
                <List.Item
                  style={{ padding: '4px 0', justifyContent: 'flex-start' }}
                >
                  <CheckCircleOutlined
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
          <Divider style={{ margin: '12px 0' }} />
          <List
            size="small"
            dataSource={[
              'Проверка на электробезопасность',
              'Проверка мощности и корректности работы органов управления',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Показатели качества
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  &lt; 2%
                </Title>
                <Text>Уровень брака</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Один из самых низких на рынке
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  25+
                </Title>
                <Text>Месяцев гарантии</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    На электроинструмент
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
                  РОСТЕСТ
                </Title>
                <Text>Сертификаты</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    CE, GS (европейские стандарты)
                  </Text>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ textAlign: 'center' }}>
                <Title level={2} style={{ margin: 0, color: '#52c41a' }}>
                  ✓
                </Title>
                <Text>Надёжность компонентов</Text>
                <div style={{ marginTop: 8 }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Комплектующие ведущих мировых производителей
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'social-media',
    header: 'Социальные сети и цифровое присутствие',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <MessageOutlined style={{ marginRight: 8 }} />
            ВКонтакте
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Основной паблик</Text>
                <br />
                <Link
                  href="https://vk.com/public212599408"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Лаборатория Hanskonner"
                </Link>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  "Мы создаём инструмент для людей, работая которым, они
                  получают удовольствие - и делают мир лучше!"
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Дополнительный паблик</Text>
                <br />
                <Link
                  href="https://vk.com/hanskonnerslab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Лаборатория Hanskonner
                </Link>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Продукция представлена на рынках РФ, Украины, Белоруссии и
                  других стран СНГ
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <YoutubeOutlined style={{ marginRight: 8 }} />
            YouTube
          </Title>
          <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
            <Space
              orientation="vertical"
              size="small"
              style={{ width: '100%' }}
            >
              <Link
                href="https://www.youtube.com/@hanskonner"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '16px' }}
              >
                Официальный канал Hanskonner
              </Link>
              <Descriptions column={1} size="small" bordered>
                <Descriptions.Item label="Подписчиков">
                  <Text strong>1.45K</Text>
                </Descriptions.Item>
                <Descriptions.Item label="Содержание">
                  Обзоры инструментов, тестирования, интервью с руководством
                </Descriptions.Item>
                <Descriptions.Item label="Последние видео">
                  Контент с выставки MITEX 2025
                </Descriptions.Item>
              </Descriptions>
            </Space>
          </Card>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Стратегия контент-маркетинга
          </Title>
          <List
            size="small"
            dataSource={[
              'Активные стриминги - прямые трансляции с руководством (Q&A сессии)',
              'Тестирование продуктов - сотрудничество с популярными YouTubers',
              'Интерактивность - ответы на вопросы пользователей',
              'Демонстрация инноваций - показ новых технологий',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'reputation-reviews',
    header: 'Репутация и отзывы клиентов',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Позитивные аспекты
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Высокая мощность и производительность</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Инструмент справляется с тяжелыми материалами (армированный
                  бетон, керамогранит)
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Надежность в эксплуатации</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Долгий срок службы даже при интенсивном использовании
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Удобство эргономики</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Качественные рукоятки, удобный вес, хороший баланс
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Text strong>Соотношение цена/качество</Text>
                <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                  Профессиональный уровень инструмента по доступной цене
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Основные жалобы клиентов
          </Title>
          <List
            size="small"
            dataSource={[
              'Проблемы с аккумуляторной системой (неполная совместимость с Makita)',
              'Качество сборки и отделки (маслянистые пятна, микроржавчина)',
              'Несоответствие характеристик обещанным (мощность болгарок)',
              'Дизайн и функциональность (переключатели работают неточно)',
              'Документация и сервис (неполная инструкция, гарантийные талоны)',
              'Комплектация (отсутствие некоторых аксессуаров)',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
          <Divider style={{ margin: '12px 0' }} />
          <Text type="secondary" style={{ fontSize: '12px' }}>
            На Ozon примерно 10-15% отзывов содержат серьёзные жалобы
          </Text>
        </Card>
      </Space>
    ),
  },
  {
    id: 'competitors',
    header: 'Конкурентный анализ',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Прямые конкуренты
          </Title>
          <Table
            size="small"
            pagination={false}
            dataSource={[
              {
                key: '1',
                brand: 'Makita',
                segment: 'Профессионалы',
                price: 'Премиум (высокий)',
                advantage: 'Лучшее качество, надежность, 60+ лет опыта',
              },
              {
                key: '2',
                brand: 'Bosch',
                segment: 'Универсальный',
                price: 'Премиум-средний',
                advantage: 'Две линии, хороший контроль качества',
              },
              {
                key: '3',
                brand: 'HansKonner',
                segment: 'Профессионалы',
                price: 'Средний-премиум',
                advantage: 'Соотношение цена/качество, инновации',
              },
              {
                key: '4',
                brand: 'Интерскол',
                segment: 'Бытовые/полупро',
                price: 'Бюджет-средний',
                advantage: 'Дешевле на 40-60%, российское происхождение',
              },
              {
                key: '5',
                brand: 'Crown',
                segment: 'Полупрофессионалы',
                price: 'Средний',
                advantage:
                  'Растущий бренд, хорошее соотношение цены и качества',
              },
              {
                key: '6',
                brand: 'PIT',
                segment: 'Полупрофессионалы',
                price: 'Средний-премиум',
                advantage: 'Новые инновации, красивый дизайн',
              },
            ]}
            columns={[
              {
                title: 'Бренд',
                dataIndex: 'brand',
                key: 'brand',
                render: (text, record) =>
                  record.key === '3' ? (
                    <Text strong style={{ color: '#1890ff' }}>
                      {text}
                    </Text>
                  ) : (
                    text
                  ),
              },
              {
                title: 'Ориентация',
                dataIndex: 'segment',
                key: 'segment',
              },
              {
                title: 'Ценовой сегмент',
                dataIndex: 'price',
                key: 'price',
              },
              {
                title: 'Преимущества',
                dataIndex: 'advantage',
                key: 'advantage',
              },
            ]}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Позиция HansKonner на рынке
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>По качеству:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  #3
                </Title>
                <Text type="secondary">После Makita и Bosch</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>По цене/качеству:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  #2
                </Title>
                <Text type="secondary">Лучший балл</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>По инновациям:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#1890ff' }}>
                  #3
                </Title>
                <Text type="secondary">
                  OneBatterySystem, диэлектрический инструмент
                </Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Тренд роста:</Text>
                <Title level={3} style={{ margin: '8px 0', color: '#52c41a' }}>
                  ↑
                </Title>
                <Text type="secondary">
                  Растущий спрос на профессиональный сегмент
                </Text>
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'websites',
    header: 'Сайты и интернет-присутствие',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <GlobalOutlined style={{ marginRight: 8 }} />
            Текущие сайты
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Link
                  href="https://hanskonner.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '16px' }}
                >
                  <Text strong>hanskonner.ru</Text>
                </Link>
                <List
                  size="small"
                  dataSource={[
                    'Основной сайт бренда',
                    'Минималистичное представление',
                    'Не содержит полный каталог товаров',
                    'Информационный сайт без e-commerce',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Link
                  href="https://sturmtools.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '16px' }}
                >
                  <Text strong>sturmtools.ru</Text>
                </Link>
                <List
                  size="small"
                  dataSource={[
                    'Основной сайт группы компаний',
                    'Каталог продукции обоих брендов',
                    'Подробное описание товаров',
                    'Характеристики и цены',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            Технические проблемы текущих сайтов
          </Title>
          <List
            size="small"
            dataSource={[
              'Разделение каталога между двумя доменами вызывает путаницу',
              'hanskonner.ru не функционален как полноценный e-commerce',
              'Отсутствие единого интерфейса для профессионалов и дилеров',
              'Необходимость перехода между сайтами для поиска информации',
              'Слабая SEO оптимизация в поиске',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'exhibitions',
    header: 'Выставочная деятельность',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <CalendarOutlined style={{ marginRight: 8 }} />
            MITEX 2025 (12-14 ноября 2025)
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Расположение">
              Москва, МВЦ "Крокус Экспо"
            </Descriptions.Item>
            <Descriptions.Item label="Павильон и стенд">
              Зал 8, стенд 8D1201
            </Descriptions.Item>
            <Descriptions.Item label="Масштаб">
              Двухэтажный стенд с большой командой менеджеров
            </Descriptions.Item>
            <Descriptions.Item label="Представленные новинки">
              Диэлектрический инструмент, многофункциональные инструменты, новые
              серии
            </Descriptions.Item>
            <Descriptions.Item label="Активность">
              Компания демонстрировала новую продукцию, проводила презентации
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <TrophyOutlined style={{ marginRight: 8 }} />
            Значение MITEX для компании
          </Title>
          <List
            size="small"
            dataSource={[
              'Одно из главных событий инструментальной отрасли в России',
              'Демонстрирует амбиции компании и инвестиции в развитие',
              'Платформа для встреч с клиентами, дилерами и партнёрами',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'it-needs',
    header: 'Предполагаемые потребности в IT услугах',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Основные направления
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Обновление и реконструкция сайта</Text>
                <List
                  size="small"
                  dataSource={[
                    'Объединение каталогов Sturm и HansKonner',
                    'Фильтрация по категориям и характеристикам',
                    'Интеграция с системой управления каталогом',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>E-commerce функциональность</Text>
                <List
                  size="small"
                  dataSource={[
                    'Прямая продажа через сайт',
                    'Системы платежей и управления заказами',
                    'Регионализация для разных регионов',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Личный кабинет для дилеров</Text>
                <List
                  size="small"
                  dataSource={[
                    'Просмотр прайс-листов и скидок',
                    'Управление заказами',
                    'Доступ к маркетинговым материалам',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Text strong>Аналитика и BI системы</Text>
                <List
                  size="small"
                  dataSource={[
                    'Отслеживание популярных товаров',
                    'Поведение пользователей',
                    'ROI маркетинговых кампаний',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', textAlign: 'left' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <ThunderboltOutlined style={{ marginRight: 8 }} />
            Стратегические приоритеты
          </Title>
          <List
            size="small"
            dataSource={[
              'Унификация сайтов - объединить hanskonner.ru и sturmtools.ru',
              'Профессиональный дизайн - отражающий качество бренда',
              'Мобильность - оптимизация под мобильные устройства',
              'Производительность - быстрая загрузка при больших каталогах',
              'SEO и видимость - улучшение ранжирования в поиске',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'opportunities',
    header: 'Уникальные возможности компании',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <RocketOutlined style={{ marginRight: 8 }} />
            Ключевые факторы
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    Быстрый рост
                  </Title>
                  <Text>Компания активно развивается</Text>
                  <Text strong>Более 600 сотрудников</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#f6ffed' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#52c41a' }}>
                    Инвестиции
                  </Title>
                  <Text>Готова тратить на новые проекты</Text>
                  <Text strong>Новые бренды, выставки</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#fff7e6' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#faad14' }}>
                    Масштаб
                  </Title>
                  <Text>Огромный каталог продукции</Text>
                  <Text strong>Требует мощных IT решений</Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                    Амбиции
                  </Title>
                  <Text>Планирует обновление сайта</Text>
                  <Text strong>Внутренний тендер</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <BarChartOutlined style={{ marginRight: 8 }} />
            Факторы успеха в тендере
          </Title>
          <List
            size="small"
            dataSource={[
              'Понимание их конкурентных вызовов (Makita, Bosch, PIT, Crown)',
              'Предложение решений для повышения SEO и видимости',
              'Портфолио с примерами работ в схожих сегментах',
              'Готовность к долгосрочному сотрудничеству и поддержке',
              'Знание особенностей российского рынка инструментов',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'contacts',
    header: 'Контакты для переговоров',
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
        <Card style={{ maxWidth: '800px', width: '100%' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Title level={3} style={{ textAlign: 'center', marginTop: 0 }}>
              Контакты для переговоров
            </Title>
            <Divider />
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="green" style={{ marginBottom: 8 }}>
                  ОСНОВНОЙ КОНТАКТ
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Сергей Горячий
                </Title>
                <Text type="secondary">Менеджер</Text>
                <Divider style={{ margin: '12px 0' }} />
                <Text>
                  <Text strong>Источник:</Text> Встреча на выставке MITEX 2025
                </Text>
                <Text>
                  <Text strong>Стенд:</Text> Зал 8, стенд 8D1201
                </Text>
              </Space>
            </Card>
            <Card>
              <Space
                orientation="vertical"
                size="small"
                style={{ width: '100%' }}
              >
                <Tag color="blue" style={{ marginBottom: 8 }}>
                  МАРКЕТИНГ
                </Tag>
                <Title level={4} style={{ marginTop: 0 }}>
                  Ефремова Ольга
                </Title>
                <Text type="secondary">
                  Специалист по работе с маркетинговыми коммуникациями
                </Text>
              </Space>
            </Card>
            <Divider />
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Space>
                <PhoneOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link href="tel:+78007755060" style={{ fontSize: '16px' }}>
                  +7 (800) 775-50-60
                </Link>
              </Space>
              <Space>
                <MailOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link
                  href="mailto:info@sturmtools.ru"
                  style={{ fontSize: '16px' }}
                >
                  info@sturmtools.ru
                </Link>
              </Space>
              <Space>
                <GlobalOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link
                  href="https://hanskonner.ru"
                  target="_blank"
                  style={{ fontSize: '16px' }}
                >
                  https://hanskonner.ru
                </Link>
              </Space>
              <Text type="secondary" style={{ marginTop: 8 }}>
                127083, г. Москва, ул. 8 Марта, д.1, стр.12, БЦ "Трио", 2
                корпус, 9 этаж
              </Text>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'thank-you',
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
        <Card style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
          <Space orientation="vertical" size="large" style={{ width: '100%' }}>
            <Title level={1} style={{ marginTop: 0, marginBottom: 0 }}>
              Благодарю за внимание
            </Title>
            <Divider />
            <Space
              orientation="vertical"
              size="middle"
              style={{ width: '100%' }}
            >
              <Space direction="vertical" size="small">
                <Text strong style={{ fontSize: '18px' }}>
                  Новиков Павел
                </Text>
                <Text type="secondary" style={{ fontSize: '16px' }}>
                  Технический директор компании Проксима
                </Text>
              </Space>
              <Divider style={{ margin: '16px 0' }} />
              <Space size="middle">
                <PhoneOutlined
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                />
                <Link
                  href="tel:+79085550606"
                  style={{
                    fontSize: '18px',
                    color: 'var(--app-color-primary)',
                  }}
                >
                  8 908 555 0606
                </Link>
              </Space>
            </Space>
          </Space>
        </Card>
      </Space>
    ),
  },
];
