'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query-client';

/**
 * Application Providers
 *
 * Wraps the app with necessary providers:
 * - QueryClientProvider (TanStack Query)
 *
 * Usage in layout.tsx:
 *   <Providers>{children}</Providers>
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
