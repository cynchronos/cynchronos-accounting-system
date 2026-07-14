import { hc } from 'hono/client';
import type { AppType } from '@cynchronos/backend';

/**
 * Hono RPC Client
 *
 * Provides end-to-end type safety between Frontend and Backend
 * via hono/rpc. All API calls should use this client.
 *
 * Usage:
 *   const res = await api.health.$get();
 *   const data = await res.json();
 */
export const api = hc<AppType>(
  process.env['NEXT_PUBLIC_API_URL'] ?? 'http://localhost:3001',
);
