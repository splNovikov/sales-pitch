/**
 * Telegram Bot API endpoint for sending notifications
 * Vercel Serverless Function
 * Documentation: https://core.telegram.org/bots/api#sendmessage
 */

import type { EnrichedTelegramNotificationPayload } from '../../../src/shared/lib/telegram';
import {
  formatNotificationMessage,
  getLocationFromIP,
  sendTelegramNotification,
  type TelegramNotificationPayload,
} from '../../../src/shared/lib/telegram';

/**
 * Extracts client IP from request headers (considering proxies)
 * @param headers - Request headers
 * @returns Client IP address or 'unknown'
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
 * @param payload - Payload to validate
 * @returns Validation error message or null if valid
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
 * POST handler for Telegram notifications
 * Validates request and sends notification to Telegram
 */
export async function POST(request: Request): Promise<Response> {
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
    } catch (error) {
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
    await sendTelegramNotification(message, { botToken, chatId });

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

/**
 * GET handler - returns configuration status (for debugging)
 */
export async function GET(): Promise<Response> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  return Response.json({
    configured: !!(botToken && chatId),
    hasBotToken: !!botToken,
    hasChatId: !!chatId,
  });
}

