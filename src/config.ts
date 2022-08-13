import { parseEnv } from 'znv';
import { z } from 'zod';

export const config = parseEnv(process.env, {
	SCOPES: z.string().default('playlist-read-private playlist-modify-private'),
	AUTH_URL: z.string().default('https://accounts.spotify.com'),
	API_URL: z.string().default('https://api.spotify.com/v1/'),
	REFRESH_TOKEN: z.string(),
	CLIENT_ID: z.string(),
	CLIENT_SECRET: z.string(),
	FEATURED_ARTISTS_PLAYLIST: z.string(),
	FEATURED_ALBUM_PLAYLIST_ID: z.string(),
});
