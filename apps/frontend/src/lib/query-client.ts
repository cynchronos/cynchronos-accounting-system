import { QueryClient } from '@tanstack/react-query';

/**
 * TanStack Query Client Configuration
 *
 * Shared QueryClient instance for the application.
 * Used as the single source of truth for API data caching.
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Data is considered fresh for 60 seconds
        staleTime: 60 * 1000,
        // Retry failed queries up to 2 times
        retry: 2,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

/**
 * Get or create QueryClient.
 * On the server, always create a new QueryClient.
 * On the browser, reuse the same QueryClient instance.
 */
export function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  }

  // Browser: use singleton pattern
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
