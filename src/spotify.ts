import SpotifyWebApi from 'spotify-web-api-node';
import { config } from './config';

const thisHour = () => new Date().getHours() - 1;

type AlbumSummary = {
	uri: string;
	artist: string;
	title: string;
};

export const spotify = async () => {
	const spotifyApi = new SpotifyWebApi();
	spotifyApi.setCredentials({
		refreshToken: config.REFRESH_TOKEN,
		clientId: config.CLIENT_ID,
		clientSecret: config.CLIENT_SECRET,
	});

	spotifyApi.setAccessToken(
		(await spotifyApi.refreshAccessToken()).body.access_token,
	);

	const getFeaturedArtistId = async () =>
		(await spotifyApi.getPlaylistTracks(config.FEATURED_ARTISTS_PLAYLIST))
			.body.items[thisHour()].track?.artists[0].id;

	const getArtistsAlbumIds = async (artistId: string) =>
		(
			await spotifyApi.getArtistAlbums(artistId, {
				country: 'GB',
			})
		).body.items
			.filter((album) => album.album_type === 'album')
			.map((album) => album.id);

	const getAlbumTracks = async (albumId: string): Promise<AlbumSummary[]> =>
		(await spotifyApi.getAlbumTracks(albumId)).body.items.map((track) => ({
			uri: track.uri,
			artist: track.artists[0].name,
			title: track.name,
		}));

	const setPlaylistTracks = (tracks: AlbumSummary[]) =>
		spotifyApi.replaceTracksInPlaylist(
			config.FEATURED_ALBUM_PLAYLIST_ID,
			tracks.map((t) => t.uri),
		);

	return {
		getFeaturedArtistId,
		getArtistsAlbumIds,
		getAlbumTracks,
		setPlaylistTracks,
	};
};
