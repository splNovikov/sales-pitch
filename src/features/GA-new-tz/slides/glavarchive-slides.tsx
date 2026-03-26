import { Space, Typography, List, Card, Row, Col } from 'antd';
import { MainTitleSlide } from '~shared/ui/main-title-slide';
import { ConstrainedContent } from '~shared/ui/constrained-content';
import { SectionTitleSlide } from '~shared/ui/section-title-slide';
import { type SlideData } from '~widgets/slides';
import { glavarchiveCreatedAt } from './glavarchive.meta';
import { GlavAccentTag, GlavMaxTag } from './glavarchive-slide-tags';

const { Title, Paragraph, Text } = Typography;

/**
 * Slides for Glavarchive Moscow digital services (management presentation).
 * Structure mirrors tatneft-kp-slides: MainTitleSlide, SectionTitleSlide blocks, ConstrainedContent + Cards.
 */
export const glavarchiveSlides: SlideData[] = [
  // Slide 1 — title
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
        <MainTitleSlide
          title="Развитие цифровых сервисов Главархива Москвы"
          subtitle="Новые инструменты для сотрудников, пользователей и организаций"
          createdAt={glavarchiveCreatedAt}
        />
      </Space>
    ),
  },

  // Section — context (outline slides 2–3)
  {
    id: 'section-context',
    header: undefined,
    content: <SectionTitleSlide imageIndex={0} title="Контекст проекта" />,
  },

  // Slide 2 — main idea
  {
    id: 'main-idea',
    header: 'Главная идея проекта',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              Проект предполагает создание не отдельных разрозненных функций, а{' '}
              <Text strong>единой цифровой экосистемы Главархива</Text>.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Что это означает на практике
            </Title>
            <List size="small">
              <List.Item>удобные инструменты для сотрудников</List.Item>
              <List.Item>
                современные цифровые каналы для пользователей
              </List.Item>
              <List.Item>прозрачные сервисы для юридических лиц</List.Item>
              <List.Item>единая логика развития всех новых решений</List.Item>
            </List>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text strong>Результат:</Text> Главархив получает основу для
              последовательного развития цифровых услуг, коммуникаций и
              контентных процессов.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 3 — why changes
  {
    id: 'why-change',
    header: 'Почему эти изменения нужны',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 12 }}>
              Сегодня цифровые сервисы должны решать сразу несколько задач:
            </Paragraph>
            <List size="small">
              <List.Item>ускорять внутренние процессы</List.Item>
              <List.Item>снижать ручную нагрузку на сотрудников</List.Item>
              <List.Item>уменьшать количество ошибок</List.Item>
              <List.Item>
                делать взаимодействие с пользователями более понятным и
                современным
              </List.Item>
              <List.Item>
                создавать удобные каналы работы для граждан и организаций
              </List.Item>
            </List>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text strong>Основная цель проекта:</Text> сделать работу
              сотрудников проще, а сервисы Главархива — удобнее, современнее и
              прозрачнее.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Section — admin panel (outline slides 4–7)
  {
    id: 'section-admin-panel',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={1}
        title="Единая административная панель"
      />
    ),
  },

  // Slide 4
  {
    id: 'admin-panel-why',
    header: 'Единая административная панель',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Зачем она нужна
            </Title>
            <Paragraph style={{ marginBottom: 12 }}>
              Сегодня работа с контентом, медиа и заказами требует лишних
              действий, постоянного переключения между задачами и высокой
              внимательности на каждом этапе.
            </Paragraph>
            <Paragraph style={{ marginBottom: 8 }}>
              Это приводит к тому, что:
            </Paragraph>
            <List size="small">
              <List.Item>процессы замедляются</List.Item>
              <List.Item>возрастает нагрузка на операторов</List.Item>
              <List.Item>увеличивается риск ошибок</List.Item>
              <List.Item>
                публикации и заказы требуют большего количества ручных действий
              </List.Item>
            </List>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Что даст Главархиву
            </Title>
            <Paragraph style={{ marginBottom: 12 }}>
              Единая административная панель создаст единое рабочее
              пространство, в котором сотрудник сможет быстрее и удобнее
              выполнять ключевые операции.
            </Paragraph>
            <Paragraph style={{ marginBottom: 8 }}>
              <Text strong>Эффект:</Text>
            </Paragraph>
            <List size="small">
              <List.Item>сокращение времени на обработку материалов</List.Item>
              <List.Item>ускорение публикаций</List.Item>
              <List.Item>упрощение работы с заказами</List.Item>
              <List.Item>повышение прозрачности внутренних процессов</List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 5
  {
    id: 'admin-panel-functions',
    header: 'Что включает единая административная панель',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Основные функции
            </Title>
            <List size="small">
              <List.Item>управление публикациями и медиаматериалами</List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>
                    автоматизация загрузки изображений для публикаций с
                    контролем статусов обработки
                  </span>
                  <GlavAccentTag color="cyan">Автозагрузка</GlavAccentTag>
                </Space>
              </List.Item>
              <List.Item>сопровождение заказов</List.Item>
              <List.Item>
                единый интерфейс для ежедневной работы сотрудников
              </List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>
                    выбор фотографий для оживления с использованием ИИ
                  </span>
                  <GlavAccentTag color="magenta">Оживление фото</GlavAccentTag>
                </Space>
              </List.Item>
            </List>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Почему это важно
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              <Space size="small" wrap align="start">
                <span>
                  Функция оживления фотографий через ИИ — это наглядный пример
                  современного цифрового сервиса, встроенного прямо в рабочий
                  процесс. Сотруднику не нужно использовать сторонние сложные
                  инструменты — нужное действие выполняется внутри единой
                  рабочей среды.
                </span>
                <GlavAccentTag color="magenta">Оживление фото</GlavAccentTag>
              </Space>
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 6
  {
    id: 'admin-quality',
    header: 'Почему качество работы станет выше',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Как именно это улучшит работу
            </Title>
            <List size="small">
              <List.Item>
                сотрудник видит понятную последовательность действий
              </List.Item>
              <List.Item>
                система снижает вероятность пропуска шагов и ошибок
              </List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>
                    проще контролировать статус загрузки и обработки контента
                  </span>
                  <GlavAccentTag color="cyan">Автозагрузка</GlavAccentTag>
                </Space>
              </List.Item>
              <List.Item>уменьшается зависимость от ручных проверок</List.Item>
              <List.Item>
                публикации и заказы обрабатываются в единой и прозрачной среде
              </List.Item>
            </List>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text strong>Результат:</Text> повышается и качество работы
              сотрудников, и качество итогового цифрового продукта.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 7
  {
    id: 'admin-content-ux',
    header: 'Почему управление контентом станет лучше',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 12 }}>
              Ключевой принцип — панель должна проектироваться не как
              технический кабинет, а как{' '}
              <Text strong>рабочий инструмент под реальные сценарии</Text>{' '}
              сотрудников Главархива.
            </Paragraph>
            <Title level={5} style={{ marginTop: 0 }}>
              Основа подхода
            </Title>
            <List size="small">
              <List.Item>
                проектирование интерфейса опытной UX-командой
              </List.Item>
              <List.Item>обязательное участие заказчика</List.Item>
              <List.Item>
                участие конечных пользователей в проработке сценариев
              </List.Item>
              <List.Item>
                ориентация на реальные ежедневные процессы сотрудников
              </List.Item>
            </List>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text strong>Результат:</Text> интерфейс помогает работать
              быстрее, понятнее и увереннее.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Section — MAX mini-app (outline slides 8–9)
  {
    id: 'section-max-mini-app',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={2} title={<>Мини-приложение в MAX</>} />
    ),
  },

  // Slide 8
  {
    id: 'max-mini-app',
    header: <>Мини-приложение в MAX для заказов и поддержки</>,
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Зачем оно нужно
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Современному пользователю важно не только оформить заказ, но и
              удобно взаимодействовать с учреждением в привычном цифровом
              канале.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Что это даст
            </Title>
            <Paragraph style={{ marginBottom: 8 }}>
              <Space size="small" wrap align="start">
                <span>Мини-приложение в</span>
                <GlavMaxTag />
                <span>позволит:</span>
              </Space>
            </Paragraph>
            <List size="small">
              <List.Item>оформлять заказы</List.Item>
              <List.Item>отслеживать статусы</List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>получать push-уведомления в</span>
                  <GlavMaxTag />
                  <span>вместо SMS</span>
                  <GlavAccentTag color="volcano">Push вместо SMS</GlavAccentTag>
                </Space>
              </List.Item>
              <List.Item>обращаться за поддержкой</List.Item>
              <List.Item>
                взаимодействовать с Главархивом без поиска информации в разных
                местах
              </List.Item>
            </List>
            <Paragraph style={{ marginTop: 12, marginBottom: 0 }}>
              <Text strong>Эффект:</Text> более удобный и современный
              пользовательский путь.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 9
  {
    id: 'max-value',
    header: <>Ценность MAX для Главархива</>,
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card style={{ height: '100%' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Для пользователя
                </Title>
                <List size="small">
                  <List.Item>
                    понятный и прозрачный путь взаимодействия
                  </List.Item>
                  <List.Item>меньше неопределенности по статусам</List.Item>
                  <List.Item>быстрее обратная связь</List.Item>
                  <List.Item>
                    современный формат общения с учреждением
                  </List.Item>
                </List>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card style={{ height: '100%' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Для Главархива
                </Title>
                <List size="small">
                  <List.Item>
                    более удобный канал сопровождения обращений
                  </List.Item>
                  <List.Item>
                    снижение нагрузки на разрозненные коммуникации
                  </List.Item>
                  <List.Item>более управляемый сервисный контур</List.Item>
                </List>
              </Card>
            </Col>
          </Row>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Section — B2B cabinet (outline slides 10–11)
  {
    id: 'section-b2b-cabinet',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={3}
        title="Личный кабинет для юридических лиц"
      />
    ),
  },

  // Slide 10
  {
    id: 'b2b-why',
    header: 'Личный кабинет для юридических лиц',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Зачем он нужен
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Юридические лица ожидают прозрачного и удобного цифрового
              взаимодействия: договоры, счета, статусы услуг и история
              взаимодействия должны быть доступны в едином формате.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Что даст Главархиву
            </Title>
            <List size="small">
              <List.Item>
                более высокий уровень сервиса для организаций
              </List.Item>
              <List.Item>снижение количества уточняющих обращений</List.Item>
              <List.Item>более упорядоченный процесс сопровождения</List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>
                    основа для дальнейшей автоматизации, включая интеграцию с 1С
                  </span>
                  <GlavAccentTag color="gold">Счета · 1С</GlavAccentTag>
                </Space>
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 11
  {
    id: 'b2b-features',
    header: 'Что включает личный кабинет для юрлиц',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Основные возможности
            </Title>
            <List size="small">
              <List.Item>данные об организации</List.Item>
              <List.Item>работа с договорами</List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>выставление и отображение счетов</span>
                  <GlavAccentTag color="gold">Счета · 1С</GlavAccentTag>
                </Space>
              </List.Item>
              <List.Item>контроль статусов услуг</List.Item>
              <List.Item>история взаимодействия</List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>возможность последующей интеграции с 1С</span>
                  <GlavAccentTag color="gold">Счета · 1С</GlavAccentTag>
                </Space>
              </List.Item>
            </List>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text strong>Результат:</Text> взаимодействие с организациями
              становится современным, понятным и предсказуемым.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Section — rubricator (outline slides 12–13)
  {
    id: 'section-rubricator',
    header: undefined,
    content: (
      <SectionTitleSlide imageIndex={4} title="Рубрикатор и навигация" />
    ),
  },

  // Slide 12
  {
    id: 'rubricator-nav',
    header: 'Рубрикатор и логика навигации по контенту',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Зачем это нужно
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Даже качественный контент теряет ценность, если в нем сложно
              ориентироваться. Перегруженная или неочевидная структура ухудшает
              навигацию и усложняет работу редакции.
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Что даст Главархиву
            </Title>
            <List size="small">
              <List.Item>более понятную структуру материалов</List.Item>
              <List.Item>улучшение пользовательского опыта</List.Item>
              <List.Item>упрощение работы сотрудников с контентом</List.Item>
              <List.Item>
                более логичное развитие разделов и публикаций
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 13
  {
    id: 'rubricator-importance',
    header: 'Почему переработка рубрикатора важна',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 12 }}>
              Речь идет не о косметическом обновлении разделов, а о полноценной
              работе над логикой контента.
            </Paragraph>
            <Title level={5} style={{ marginTop: 0 }}>
              Важно предусмотреть
            </Title>
            <List size="small">
              <List.Item>анализ текущей структуры</List.Item>
              <List.Item>выявление проблемных сценариев</List.Item>
              <List.Item>проектирование новой логики рубрикации</List.Item>
              <List.Item>UX-проработку пользовательских сценариев</List.Item>
              <List.Item>
                участие заказчика в формировании новой структуры
              </List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>
                    отдельная версия рубрикатора под сценарии и ограничения
                    мини-приложения в
                  </span>
                  <GlavMaxTag />
                </Space>
              </List.Item>
            </List>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text strong>Результат:</Text> пользователям легче находить
              материалы, а сотрудникам — работать с контентом.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Section — MAX info service (outline slides 14–15)
  {
    id: 'section-max-info',
    header: undefined,
    content: (
      <SectionTitleSlide
        imageIndex={5}
        title={<>Информационный сервис в MAX</>}
      />
    ),
  },

  // Slide 14
  {
    id: 'max-info-service',
    header: <>Информационный сервис в MAX: новости, подписки, уведомления</>,
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Зачем он нужен
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              <Space size="small" wrap align="start">
                <span>
                  Сегодня важно не только размещать информацию, но и доставлять
                  ее до аудитории в удобном и привычном цифровом канале, в том
                  числе в мессенджере
                </span>
                <GlavMaxTag />
                <span>.</span>
              </Space>
            </Paragraph>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Что это даст Главархиву
            </Title>
            <List size="small">
              <List.Item>
                современную модель коммуникации с аудиторией
              </List.Item>
              <List.Item>возможность подписки на темы и рубрики</List.Item>
              <List.Item>адресную доставку новостей и анонсов</List.Item>
              <List.Item>
                <Space size="small" wrap align="start">
                  <span>push-уведомления в</span>
                  <GlavMaxTag />
                  <span>вместо SMS для доставки новостей и напоминаний</span>
                  <GlavAccentTag color="volcano">Push вместо SMS</GlavAccentTag>
                </Space>
              </List.Item>
              <List.Item>
                более живое и регулярное взаимодействие с пользователями
              </List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 15
  {
    id: 'max-audience',
    header: 'Что получает аудитория',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card style={{ height: '100%' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Пользователь получает
                </Title>
                <List size="small">
                  <List.Item>
                    <Space size="small" wrap align="start">
                      <span>удобный цифровой канал в мессенджере</span>
                      <GlavMaxTag />
                    </Space>
                  </List.Item>
                  <List.Item>
                    <Space size="small" wrap align="start">
                      <span>
                        новости и push-уведомления по интересующим темам
                      </span>
                      <GlavAccentTag color="volcano">
                        Push вместо SMS
                      </GlavAccentTag>
                    </Space>
                  </List.Item>
                  <List.Item>
                    меньше риска пропустить важную информацию
                  </List.Item>
                  <List.Item>
                    более современное взаимодействие с учреждением
                  </List.Item>
                </List>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card style={{ height: '100%' }}>
                <Title level={5} style={{ marginTop: 0 }}>
                  Главархив получает
                </Title>
                <List size="small">
                  <List.Item>прямой канал коммуникации</List.Item>
                  <List.Item>
                    более заметное присутствие в цифровой среде
                  </List.Item>
                  <List.Item>
                    возможность системно доносить важную информацию до аудитории
                  </List.Item>
                </List>
              </Card>
            </Col>
          </Row>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Section — outcome (outline slides 16–17)
  {
    id: 'section-outcome',
    header: undefined,
    content: <SectionTitleSlide imageIndex={6} title="Эффект и итог" />,
  },

  // Slide 16
  {
    id: 'overall-effect',
    header: 'Общий эффект проекта',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Для сотрудников
            </Title>
            <List size="small">
              <List.Item>удобные инструменты</List.Item>
              <List.Item>меньше ручной нагрузки</List.Item>
              <List.Item>быстрее и понятнее ежедневная работа</List.Item>
            </List>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Для пользователей
            </Title>
            <List size="small">
              <List.Item>современные цифровые сервисы</List.Item>
              <List.Item>прозрачные статусы</List.Item>
              <List.Item>удобное взаимодействие с Главархивом</List.Item>
            </List>
          </Card>
          <Card>
            <Title level={5} style={{ marginTop: 0 }}>
              Для Главархива
            </Title>
            <List size="small">
              <List.Item>единая цифровая экосистема</List.Item>
              <List.Item>последовательное развитие сервисов</List.Item>
              <List.Item>основа для масштабирования новых инициатив</List.Item>
            </List>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },

  // Slide 17 — final
  {
    id: 'final-thesis',
    header: 'Финальный тезис',
    content: (
      <ConstrainedContent>
        <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
          <Card>
            <Paragraph style={{ marginBottom: 12 }}>
              Проект дает Главархиву не набор отдельных доработок, а{' '}
              <Text strong>связанную цифровую экосистему</Text>.
            </Paragraph>
            <Paragraph style={{ marginBottom: 8 }}>Она объединяет:</Paragraph>
            <List size="small">
              <List.Item>
                удобные внутренние инструменты для сотрудников
              </List.Item>
              <List.Item>современные сервисы для пользователей</List.Item>
              <List.Item>
                прозрачное взаимодействие с юридическими лицами
              </List.Item>
              <List.Item>
                новые каналы коммуникации и доставки контента
              </List.Item>
            </List>
          </Card>
          <Card>
            <Paragraph style={{ marginBottom: 0 }}>
              <Text strong>Итог:</Text> Главархив получает основу для
              долгосрочного развития цифровых услуг, процессов и коммуникаций.
            </Paragraph>
          </Card>
        </Space>
      </ConstrainedContent>
    ),
  },
];
