import { parseEnv } from "znv";
import { z } from "zod";

export const config = parseEnv(process.env, {
  SCOPES: z.string().default("playlist-read-private playlist-modify-private"),
  CALLBACK_URL: z
    .string()
    .default("https://www.getpostman.com/oauth2/callback"),
  TOKEN_ENDPOINT: z.string().default("https://accounts.spotify.com/api/token"),
  AUTH_ENDPOINT: z.string().default("https://accounts.spotify.com/authorize"),
});
