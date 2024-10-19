import { createClient, createConfig } from "@hey-api/client-fetch";
import { cookies } from "next/headers";

export const client = createClient(
  createConfig({
    baseUrl: "http://localhost:5003",
    credentials: "include",
  }),
);

export const authedClient = async () => {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();
  const client = createClient({
    baseUrl: "http://localhost:5003",
    credentials: "include",
    headers: {
      Cookie: cookieString,
    },
  });
  return client;
};
