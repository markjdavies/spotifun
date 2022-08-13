import { VercelRequest, VercelResponse } from '@vercel/node';
import { spotify } from '../src/spotify';

const pickRandomAlbum = (albumIds: string[]) =>
	albumIds[Math.floor(Math.random() * albumIds.length)];

const chooseFeaturedAlbum = async (
	_req: VercelRequest,
	res: VercelResponse,
): Promise<void> => {
	const {
		getFeaturedArtistId,
		getArtistsAlbumIds,
		getAlbumTracks,
		setPlaylistTracks,
	} = await spotify();

	const featuredArtistId = await getFeaturedArtistId();
	if (featuredArtistId) {
		const albumIds = await getArtistsAlbumIds(featuredArtistId);
		if (albumIds?.length > 0) {
			const chosenAlbumId = pickRandomAlbum(albumIds);
			const tracks = await getAlbumTracks(chosenAlbumId);
			await setPlaylistTracks(tracks);
			res.status(200).json(tracks);
		}
	}
};

export default chooseFeaturedAlbum;
