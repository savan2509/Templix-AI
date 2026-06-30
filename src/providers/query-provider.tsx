"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,   // 5 min — no refetch on quick re-visits
            gcTime: 10 * 60 * 1000,     // 10 min — keep data in memory longer
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 1,                   // only retry once on failure
          },
        },
      })
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
