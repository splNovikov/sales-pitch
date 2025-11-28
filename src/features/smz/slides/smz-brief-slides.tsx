import {
  Typography,
  List,
  Space,
  Divider,
  Card,
  Row,
  Col,
  Tag,
  Descriptions,
} from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  ShopOutlined,
  SettingOutlined,
  SafetyOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  DatabaseOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { type SlideData } from '~widgets/slides';

const { Title, Paragraph, Text, Link } = Typography;

/**
 * Slides data for SMZ Brief Q&A presentation
 * Based on brif-tz-full.md documentation
 */
export const smzBriefSlides: SlideData[] = [
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
            СМЗ: БРИФ
          </Title>
          <Paragraph
            style={{
              fontSize: 'var(--app-font-size-xl)',
              marginTop: 'var(--app-spacing-md)',
              marginBottom: 0,
            }}
          >
            Вопрос-ответ по техническому заданию
          </Paragraph>
          <Text
            type="secondary"
            style={{
              fontSize: 'var(--app-font-size-lg)',
            }}
          >
            Сиверский Метизный Завод
          </Text>
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
    id: 'contact-info',
    header: 'Контактная информация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Кто контактное лицо?
          </Title>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="ФИО">
              <Text strong>Екатерина</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Должность">Менеджер</Descriptions.Item>
            <Descriptions.Item label="Город">Санкт-Петербург</Descriptions.Item>
            <Descriptions.Item label="Email">
              <Link href="mailto:3@smz-spb.ru">3@smz-spb.ru</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Телефон">
              <Link href="tel:+79214207794">+7 (921) 420-77-94</Link>
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Название организации
          </Title>
          <Paragraph>
            <Text strong>Сиверский метизный завод ООО</Text>
          </Paragraph>
          <Paragraph>
            Краткое название для сайта:{' '}
            <Text strong>Сиверский метизный завод</Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'general-info',
    header: 'Общая информация',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Отрасль и область деятельности
          </Title>
          <Paragraph>
            <Text strong>Металлоторговля</Text>, производство и продажа фитингов
            для водоснабжения
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Текущий сайт
          </Title>
          <Paragraph>
            Есть текущий сайт на <Text strong>1С-Битрикс</Text>
          </Paragraph>
          <Link href="https://smz-spb.ru" target="_blank">
            smz-spb.ru
          </Link>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Сроки запуска проекта
          </Title>
          <Paragraph>
            <Text type="secondary">Не указаны</Text>
          </Paragraph>
          <Paragraph>
            Нет внешних обстоятельств, влияющих на сроки (PR-кампания, выставка,
            ежегодный отчет)
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Маркетинговые мероприятия
          </Title>
          <Paragraph>
            Проводилась выставка <Text strong>Aquaflame</Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'goals',
    header: 'Цели создания сайта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Главная цель: Увеличение объемов продаж
          </Title>
          <Paragraph>
            <Text strong>Продажа товаров через сайт</Text>
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <List
            size="small"
            dataSource={[
              'Сайт синхронизируется с 1С и показывает остатки',
              'При наборе нужных позиций видно их наличие и цена',
              'Формируется счет на оплату и отсылается клиенту',
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
            <ThunderboltOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Ключевые требования
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ backgroundColor: '#e6f7ff' }}>
                <Space
                  orientation="vertical"
                  size="small"
                  style={{ width: '100%' }}
                >
                  <Tag color="blue">ИНТЕГРАЦИЯ</Tag>
                  <Text strong>1С: Управление предприятием 8.3</Text>
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
                  <Tag color="green">МОДЕЛЬ</Tag>
                  <Text strong>B2B + B2C (разные цены, оптовики, счета)</Text>
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
                  <Tag color="orange">БЕЗОПАСНОСТЬ</Tag>
                  <Text strong>Обмен через защищённый контур</Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Другие цели
          </Title>
          <List
            size="small"
            dataSource={[
              'Поиск новых клиентов',
              'Реклама товара',
              'Информационная поддержка клиентов',
              'Благоприятный имидж компании',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'audience',
    header: 'Целевая аудитория',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            На какую аудиторию нацелен сайт?
          </Title>
          <List
            size="small"
            dataSource={[
              'Менеджеры по закупкам',
              'Снабженцы',
              'Владельцы малого и среднего бизнеса',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <UserOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
                />
                <Text strong>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'design-type',
    header: 'Тип дизайна сайта',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Какой тип дизайна предпочтителен?
          </Title>
          <Card
            size="small"
            style={{ backgroundColor: '#e6f7ff', marginTop: 8 }}
          >
            <Space
              orientation="vertical"
              size="small"
              style={{ width: '100%' }}
            >
              <Tag color="blue">ИМИДЖЕВЫЙ</Tag>
              <Text strong>Акцент на товары и продажу</Text>
              <Text type="secondary">Удобная продажа</Text>
              <Text type="secondary">
                Главное внимание уделяется графической части сайта
              </Text>
            </Space>
          </Card>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Стилистика сайта
          </Title>
          <Paragraph>Слова, характеризующие стилистику:</Paragraph>
          <Space wrap>
            <Tag>Корпоративный</Tag>
            <Tag>Молодежный</Tag>
            <Tag>Авангардный</Tag>
          </Space>
        </Card>
      </Space>
    ),
  },
  {
    id: 'references',
    header: 'Референсы дизайна',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Сайты, дизайн которых нравится
          </Title>
          <List
            size="small"
            dataSource={[
              {
                url: 'https://ruskon-s.com',
                description: 'Референс дизайна',
              },
              {
                url: 'https://medexe.ru',
                description: 'Референс дизайна',
              },
            ]}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.url}
                    </Link>
                  }
                  description={item.description}
                />
              </List.Item>
            )}
          />
          <Divider style={{ margin: '12px 0' }} />
          <Paragraph>
            <Text strong>Что нравится:</Text> наполнение, удобный дизайн,
            возможность оформления заказа на сайте
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Сайты, дизайн которых НЕ нравится
          </Title>
          <Paragraph>
            <Text type="secondary">Не указаны</Text>
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'technical-requirements',
    header: 'Технические требования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Исходные данные
          </Title>
          <List
            size="small"
            dataSource={[
              'Текущий сайт работает на 1С-Bitrix, создан на готовом шаблоне',
              'Учет и цены ведутся в 1С: Управление предприятием 8.3',
              'Модель продаж: B2B + B2C',
              'Требуется автоматизация процесса подбора товаров и выписки счета',
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
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Основной функционал
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <ShopOutlined style={{ marginRight: 8 }} />
                  1. Каталог и поиск
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Поиск с подсказками по артикулу / названию / характеристикам',
                    'Отображение актуальных остатков и цен',
                    'Поддержка нескольких ценовых уровней',
                    'Фильтры (тип товара, размеры, ГОСТ и др.)',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <SettingOutlined style={{ marginRight: 8 }} />
                  2. Корзина / оформление
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Добавление нужных позиций',
                    'Пересчёт сумм',
                    'Учёт ценового уровня клиента',
                    'Автоматическое формирование счёта PDF',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <DatabaseOutlined style={{ marginRight: 8 }} />
                  3. Интеграция с 1С
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Обмен остатками и ценами с 1С УП 8.3',
                    'Механизм обмена: CommerceML 2.0, REST-шлюз, файловый обмен',
                    'Регулярное обновление (5–30 минут)',
                    'Передача выписанных счетов обратно в 1С',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small">
                <Title level={5} style={{ marginTop: 0 }}>
                  <FileTextOutlined style={{ marginRight: 8 }} />
                  4. Отправка счёта
                </Title>
                <List
                  size="small"
                  dataSource={[
                    'Автоматическая отправка на email клиента',
                    'Копия менеджеру',
                    'Сохранение в админке',
                  ]}
                  renderItem={item => (
                    <List.Item style={{ padding: '2px 0', fontSize: '12px' }}>
                      <Text>• {item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </Space>
    ),
  },
  {
    id: 'variants',
    header: 'Варианты реализации',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Вариант А: Разработка нового сайта на Bitrix с нуля
          </Title>
          <Paragraph>
            Полная разработка нового сайта с нуля на платформе Bitrix
          </Paragraph>
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Вариант Б: Доработка текущего сайта на Bitrix
          </Title>
          <Paragraph>
            <Text strong>Требуемые работы:</Text>
          </Paragraph>
          <List
            size="small"
            dataSource={[
              'Подключение модуля интеграции 1С',
              'Отображение остатков и цен в каталоге',
              'Реализация корзины (если нет)',
              'Модуль формирования счета PDF',
              'Отправка счета клиенту',
              'Роли пользователей (гость / зарегистрированный / оптовик)',
              'Тестирование обмена и стабильности',
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
        <Card style={{ backgroundColor: '#fff7e6' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#faad14', marginRight: 8 }} />
            Обязательный предварительный этап
          </Title>
          <Paragraph>Исполнитель должен провести:</Paragraph>
          <List
            size="small"
            dataSource={[
              'Аудит текущего шаблона',
              'Проверку совместимости с обменом CommerceML',
              'Оценку скорости и архитектуры',
              'Оценку стоимости адаптации против разработки с нуля',
            ]}
            renderItem={item => (
              <List.Item style={{ padding: '4px 0', textAlign: 'left' }}>
                <Text>• {item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'security',
    header: 'Требования к безопасности 1С',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card style={{ backgroundColor: '#fff1f0' }}>
          <Title level={4} style={{ marginTop: 0 }}>
            <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
            КРИТИЧЕСКОЕ ТРЕБОВАНИЕ
          </Title>
          <Paragraph style={{ fontSize: '16px', fontStyle: 'italic' }}>
            <Text strong>1С НЕ подключена напрямую к интернету</Text>
          </Paragraph>
          <Divider style={{ margin: '12px 0' }} />
          <List
            size="small"
            dataSource={[
              '❌ Запрещено прямое внешнее подключение к базе',
              '❌ Запрещена передача логинов/паролей 1С сторонним системам',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <Text>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <SafetyOutlined style={{ marginRight: 8 }} />
            Обмен должен идти через защищённый слой
          </Title>
          <Paragraph>
            Варианты, которые должен предложить исполнитель:
          </Paragraph>
          <List
            size="small"
            dataSource={[
              'Промежуточный сервер-шлюз',
              'Файловый обмен через защищённый каталог',
              'API-прослойка с токенами',
              'Ограничение IP-доступа',
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
            <SafetyOutlined style={{ marginRight: 8 }} />
            Технические меры
          </Title>
          <List
            size="small"
            dataSource={[
              'HTTPS',
              'Токены/ключи доступа',
              'Логирование запросов',
              'Ограничение частоты синхронизации',
              'Возможность экстренного отключения обмена',
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
            <FileTextOutlined style={{ marginRight: 8 }} />
            Обязательное требование
          </Title>
          <Paragraph>
            Исполнитель обязан в коммерческом предложении приложить{' '}
            <Text strong>схему безопасности</Text> с описанием архитектуры
            обмена данными.
          </Paragraph>
        </Card>
      </Space>
    ),
  },
  {
    id: 'non-functional',
    header: 'Нефункциональные требования',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Какие требования к производительности и надежности?
          </Title>
          <List
            size="small"
            dataSource={[
              'Скорость поиска и вывода остатков ≤ 1 сек',
              'Отказоустойчивость',
              'Резервное копирование',
              'Адаптивная верстка',
              'Поддержка браузеров + мобильных',
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
    id: 'what-to-get',
    header: 'Что необходимо получить от исполнителя',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Обязательные документы и информация
          </Title>
          <List
            size="small"
            dataSource={[
              'Оценка стоимости по двум вариантам (А и Б)',
              'Сроки MVP и полный запуск',
              'Стек технологий и модули Bitrix',
              'Схема интеграции и защиты 1С',
              'Стоимость поддержки / сопровождения',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <CheckCircleOutlined
                  style={{ color: '#52c41a', marginRight: 8 }}
                />
                <Text strong>{item}</Text>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    ),
  },
  {
    id: 'questions-to-executor',
    header: 'Вопросы исполнителю',
    content: (
      <Space orientation="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={4} style={{ marginTop: 0 }}>
            <QuestionCircleOutlined
              style={{ marginRight: 8, color: 'var(--app-color-primary)' }}
            />
            Дополнительные вопросы исполнителю
          </Title>
          <List
            size="small"
            dataSource={[
              'Можно ли сохранить текущий шаблон без рисков?',
              'Какие модули Bitrix требуются (лицензия, версии)?',
              'Как будет реализован многоуровневый прайс?',
              'Где физически будут храниться данные остатков?',
              'Какие гарантии безопасности 1С предоставляются?',
              'Возможен ли демо-стенд для тестов?',
              'Какие SLA и время реакции при сбоях?',
              'Поддержка авторизации через EDI/контрагентов?',
              'Интеграция с платежными системами (оплата онлайн по счету)?',
              'AI-функции (рекомендации, чат-бот, генерация КП)?',
            ]}
            renderItem={item => (
              <List.Item
                style={{ padding: '4px 0', justifyContent: 'flex-start' }}
              >
                <QuestionCircleOutlined
                  style={{ color: 'var(--app-color-primary)', marginRight: 8 }}
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
