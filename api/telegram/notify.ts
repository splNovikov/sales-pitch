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
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,regionName,city`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

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

  // Add timeout to prevent hanging
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

  try {
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
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Telegram API error: ${response.status} - ${JSON.stringify(errorData)}`
      );
    }
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Telegram API request timeout');
    }
    throw error;
  }
}

/**
 * Extracts client IP from request headers (considering proxies)
 */
function extractClientIp(
  headers: Record<string, string | string[] | undefined>
): string {
  const forwarded = headers['x-forwarded-for'];
  if (forwarded) {
    const ip = Array.isArray(forwarded) ? forwarded[0] : forwarded;
    return ip.split(',')[0].trim();
  }

  const realIp = headers['x-real-ip'];
  if (realIp) {
    return Array.isArray(realIp) ? realIp[0] : realIp;
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
 * Standard Vercel format with req/res
 */
export default async function handler(req: any, res: any): Promise<void> {
  console.log('[Telegram Notify] Handler called', {
    method: req?.method,
    url: req?.url,
    hasBody: !!req?.body,
    timestamp: new Date().toISOString(),
  });

  const method = req?.method || 'GET';

  // Handle GET requests
  if (method === 'GET') {
    console.log('[Telegram Notify] GET request');
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    res.status(200).json({
      configured: !!(botToken && chatId),
      hasBotToken: !!botToken,
      hasChatId: !!chatId,
    });
    return;
  }

  // Handle POST requests
  if (method !== 'POST') {
    console.log('[Telegram Notify] Method not allowed:', method);
    res.status(405).json({ error: `Method ${method} not allowed` });
    return;
  }

  console.log('[Telegram Notify] POST request received');

  try {
    // Validate environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log('[Telegram Notify] Environment check', {
      hasBotToken: !!botToken,
      hasChatId: !!chatId,
    });

    if (!botToken || !chatId) {
      console.error('[Telegram Notify] Missing Telegram configuration');
      res.status(500).json({ error: 'Telegram bot not configured' });
      return;
    }

    // Parse request body
    let payload: unknown;
    try {
      payload = req.body ? (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) : null;
      console.log('[Telegram Notify] Body parsed', {
        hasPayload: !!payload,
        page: (payload as { page?: string })?.page,
      });
    } catch (error) {
      console.error('[Telegram Notify] JSON parse error:', error);
      res.status(400).json({ error: 'Invalid JSON in request body' });
      return;
    }

    // Validate required fields
    if (!validatePayload(payload)) {
      console.error('[Telegram Notify] Validation failed', payload);
      res.status(400).json({ error: 'Missing required fields: page, timestamp' });
      return;
    }

    // Get client IP (considering proxies)
    const headers = req.headers || {};
    const ip = extractClientIp(headers);
    console.log('[Telegram Notify] Client IP:', ip);

    // Get location from IP (non-blocking - won't delay notification if it fails)
    // Use Promise.race to ensure we don't wait too long
    let location = null;
    if (ip && ip !== 'unknown') {
      try {
        console.log('[Telegram Notify] Getting location for IP:', ip);
        location = await Promise.race([
          getLocationFromIP(ip),
          new Promise<null>(resolve => setTimeout(() => resolve(null), 2000)),
        ]);
        console.log('[Telegram Notify] Location result:', location);
      } catch (error) {
        console.error('[Telegram Notify] Location error:', error);
        location = null;
      }
    }

    // Add IP and location to payload
    const enrichedPayload: EnrichedTelegramNotificationPayload = {
      ...payload,
      ip,
      location,
    };

    // Format and send notification
    console.log('[Telegram Notify] Formatting message');
    const message = formatNotificationMessage(enrichedPayload);
    console.log('[Telegram Notify] Sending to Telegram');
    await sendTelegramNotification(message, botToken, chatId);
    console.log('[Telegram Notify] Notification sent successfully');

    res.status(200).json({ success: true, message: 'Notification sent' });
  } catch (error) {
    console.error('[Telegram Notify] Error:', error);
    console.error('[Telegram Notify] Error stack:', error instanceof Error ? error.stack : 'No stack');

    res.status(500).json({
      error: 'Failed to send notification',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
