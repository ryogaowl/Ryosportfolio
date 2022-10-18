import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ryoblog-eng",
  apiKey: process.env.API_KEY,
});
