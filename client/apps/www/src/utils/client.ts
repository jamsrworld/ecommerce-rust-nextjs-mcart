import { createClient } from "@hey-api/client-fetch";

export const client = createClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  cache: "force-cache",
  next: {
    revalidate: 60 * 60,
  },
});
