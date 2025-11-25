/**
 * Telegram Bot API endpoint for sending notifications
 * Vercel Serverless Function
 * Documentation: https://core.telegram.org/bots/api#sendmessage
 */

// Types
interface LocationData {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
}

interface TelegramNotificationPayload {
  page: string;
  fullUrl?: string;
  timestamp: string;
  userAgent?: string;
  referer?: string;
  ip?: string;
  location?: LocationData;
}

interface EnrichedTelegramNotificationPayload
  extends Omit<TelegramNotificationPayload, 'ip' | 'location'> {
  ip: string;
  location: LocationData | null;
}

interface IpApiResponse {
  status: 'success' | 'fail';
  message?: string;
  country?: string;
  countryCode?: string;
  regionName?: string;
  city?: string;
}

// Utility functions
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function extractBrowserInfo(userAgent: string): string {
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome'))
    return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  return 'Unknown';
}

function isPrivateIp(ip: string): boolean {
  return (
    ip === 'unknown' ||
    ip.startsWith('127.') ||
    ip.startsWith('192.168.') ||
    ip.startsWith('10.') ||
    ip.startsWith('172.')
  );
}

function formatNotificationMessage(
  payload: EnrichedTelegramNotificationPayload
): string {
  const { page, fullUrl, timestamp, userAgent, referer, ip, location } =
    payload;

  let message = `🔔 <b>New Page Visit</b>\n\n`;

  message += `📄 <b>Page:</b> ${escapeHtml(page)}\n`;

  if (fullUrl) {
    message += `🌍 <b>Full URL:</b> ${escapeHtml(fullUrl)}\n`;
  }

  message += `🕐 <b>Time:</b> ${new Date(timestamp).toLocaleString('ru-RU')}\n`;

  if (ip && ip !== 'unknown') {
    message += `📍 <b>IP:</b> ${escapeHtml(ip)}\n`;
  }

  // Add location information
  if (location) {
    const locationParts: string[] = [];

    if (location.city) locationParts.push(location.city);
    if (location.region) locationParts.push(location.region);
    if (location.country) locationParts.push(location.country);

    if (locationParts.length > 0) {
      message += `🗺️ <b>Location:</b> ${escapeHtml(locationParts.join(', '))}\n`;
    }
  }

  if (referer) {
    message += `🔗 <b>Referer:</b> ${escapeHtml(referer)}\n`;
  }

  if (userAgent) {
    const browser = extractBrowserInfo(userAgent);
    message += `🌐 <b>Browser:</b> ${escapeHtml(browser)}\n`;
  }

  return message;
}

async function getLocationFromIP(ip: string): Promise<LocationData | null> {
  // Skip localhost and private IPs
  if (isPrivateIp(ip)) {
    return null;
  }

  try {
    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,regionName,city`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as IpApiResponse;

    // Check if request was successful
    if (data.status === 'success') {
      return {
        city: data.city,
        region: data.regionName,
        country: data.country,
        countryCode: data.countryCode,
      };
    }

    return null;
  } catch (error) {
    // Silently fail - don't break notifications if geolocation fails
    console.error('Failed to get location from IP:', error);
    return null;
  }
}

async function sendTelegramNotification(
  message: string,
  botToken: string,
  chatId: string
): Promise<void> {
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(telegramApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `Telegram API error: ${response.status} - ${JSON.stringify(errorData)}`
    );
  }
}

/**
 * Extracts client IP from request headers (considering proxies)
 */
function extractClientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    // Take the first IP from the chain
    return forwarded.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  return 'unknown';
}

/**
 * Validates notification payload
 */
function validatePayload(
  payload: unknown
): payload is TelegramNotificationPayload {
  if (!payload || typeof payload !== 'object') {
    return false;
  }

  const p = payload as Partial<TelegramNotificationPayload>;
  return !!(p.page && p.timestamp);
}

/**
 * Vercel Serverless Function handler
 * Handles POST and GET requests for Telegram notifications
 */
export default async function handler(
  request: Request
): Promise<Response> {
  // Handle GET requests
  if (request.method === 'GET') {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    return Response.json({
      configured: !!(botToken && chatId),
      hasBotToken: !!botToken,
      hasChatId: !!chatId,
    });
  }

  // Handle POST requests
  if (request.method !== 'POST') {
    return Response.json(
      { error: `Method ${request.method} not allowed` },
      { status: 405 }
    );
  }

  try {
    // Validate environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Missing Telegram configuration');
      return Response.json(
        { error: 'Telegram bot not configured' },
        { status: 500 }
      );
    }

    // Parse request body
    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return Response.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!validatePayload(payload)) {
      return Response.json(
        { error: 'Missing required fields: page, timestamp' },
        { status: 400 }
      );
    }

    // Get client IP (considering proxies)
    const ip = extractClientIp(request.headers);

    // Get location from IP (non-blocking - won't delay notification if it fails)
    let location = null;
    if (ip && ip !== 'unknown') {
      location = await getLocationFromIP(ip);
    }

    // Add IP and location to payload
    const enrichedPayload: EnrichedTelegramNotificationPayload = {
      ...payload,
      ip,
      location,
    };

    // Format and send notification
    const message = formatNotificationMessage(enrichedPayload);
    await sendTelegramNotification(message, botToken, chatId);

    return Response.json({ success: true, message: 'Notification sent' });
  } catch (error) {
    console.error('Error processing Telegram notification:', error);

    return Response.json(
      {
        error: 'Failed to send notification',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
