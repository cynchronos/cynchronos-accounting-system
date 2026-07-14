import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

/**
 * Create a database client instance.
 * Uses DATABASE_URL environment variable for connection.
 */
export function createDb(connectionString?: string) {
  const url = connectionString ?? process.env['DATABASE_URL'];

  if (!url) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  const queryClient = postgres(url);
  return drizzle(queryClient, { schema });
}

export type Database = ReturnType<typeof createDb>;

// Re-export schema for convenience
export * from './schema';
