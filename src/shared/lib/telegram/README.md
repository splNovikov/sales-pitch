# Telegram Notification System

Система уведомлений через Telegram Bot API для отслеживания посещений страниц и других событий.

## Структура

- `telegram-types.ts` - TypeScript типы и интерфейсы
- `telegram-utils.ts` - Утилиты для форматирования сообщений
- `telegram-client.ts` - Клиент для работы с Telegram Bot API
- `location-service.ts` - Сервис геолокации по IP адресу
- `telegram-notification-client.ts` - Клиентская утилита для отправки уведомлений

## Настройка

### 1. Создание Telegram бота

1. Откройте [@BotFather](https://t.me/botfather) в Telegram
2. Отправьте команду `/newbot` и следуйте инструкциям
3. Сохраните полученный токен бота

### 2. Получение Chat ID

1. Начните диалог с вашим ботом
2. Отправьте любое сообщение
3. Откройте в браузере: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

### 3. Настройка переменных окружения

Добавьте в Vercel Dashboard или `.env.local`:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## Использование

### На клиенте (React компоненты)

```typescript
import { notifyPageVisit, sendNotification } from '~shared/lib/telegram';

// Простой способ - автоматически собирает данные о странице
await notifyPageVisit('/home');

// Расширенный способ - с дополнительными данными
await sendNotification(
  {
    page: '/products',
    fullUrl: window.location.href,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referer: document.referrer,
  },
  { silent: true }
); // silent: true - не выбрасывает ошибки
```

### На сервере (API routes)

API endpoint автоматически доступен по адресу `/api/telegram/notify`

**POST запрос:**

```typescript
const response = await fetch('/api/telegram/notify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    page: '/home',
    timestamp: new Date().toISOString(),
    // опционально:
    fullUrl: 'https://example.com/home',
    userAgent: 'Mozilla/5.0...',
    referer: 'https://google.com',
  }),
});
```

**GET запрос (проверка конфигурации):**

```typescript
const response = await fetch('/api/telegram/notify');
const status = await response.json();
// { configured: true, hasBotToken: true, hasChatId: true }
```

## Формат уведомлений

Уведомления отправляются в формате HTML с эмодзи:

```
🔔 New Page Visit

📄 Page: /home
🌍 Full URL: https://example.com/home
🕐 Time: 15.01.2024, 14:30:00
📍 IP: 192.168.1.1
🗺️ Location: Moscow, Moscow Oblast, Russia
🔗 Referer: https://google.com
🌐 Browser: Chrome
```

## Особенности

- **Геолокация**: Автоматически определяется местоположение по IP (используется ip-api.com, бесплатный тариф: 45 запросов/минуту)
- **Безопасность**: Токены бота хранятся только на сервере
- **Обработка ошибок**: Graceful degradation - уведомления не ломают приложение при ошибках
- **Типизация**: Полная поддержка TypeScript

## Архитектура

Система следует принципам Clean Architecture:

- **Domain Layer**: Типы и интерфейсы (`telegram-types.ts`)
- **Application Layer**: Бизнес-логика (`telegram-client.ts`, `location-service.ts`)
- **Presentation Layer**: Утилиты форматирования (`telegram-utils.ts`)
- **Infrastructure Layer**: API endpoint (`/api/telegram/notify/route.ts`)

## Ограничения

- Геолокация не работает для localhost и приватных IP адресов
- Бесплатный тариф ip-api.com: 45 запросов/минуту
- Vercel Serverless Functions: 10 секунд на Hobby плане, 60 секунд на Pro
