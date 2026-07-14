import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// CORS middleware
app.use('/*', cors());

// Health check endpoint
const route = app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'cynchronos-backend',
  });
});

// Export app type for Hono RPC client (used by frontend)
export type AppType = typeof route;

export default {
  port: 3001,
  fetch: app.fetch,
};
