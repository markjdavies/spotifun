import { PrismaClient } from "@prisma/client";
import { VercelRequest, VercelResponse } from "@vercel/node";

const prisma = new PrismaClient();

const chooseFeaturedAlbum = async (
  _req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  const spotify = await prisma.spotifun_config.findFirst();

  res.status(200).json(spotify?.user_id);
};

export default chooseFeaturedAlbum;

// Refresh token
// https://accounts.spotify.com/api/token

// tests["Status code is 200"] = responseCode.code === 200;

// if (responseCode.code === 200) {
//   var jsonData = JSON.parse(responseBody);
//   postman.setEnvironmentVariable("access_token", jsonData.access_token);
// }

// Get today's artists
// https://api.spotify.com/v1/playlists/{{featured_artist_playlist_id}}/tracks

// tests["Status code is 200"] = responseCode.code === 200;

// if (responseCode.code === 200) {
//   var jsonData = JSON.parse(responseBody);
//   var thisHour = new Date().getHours() - 1;
//   postman.setEnvironmentVariable(
//     "featured_artist_id",
//     jsonData.items[thisHour].track.artists[0].id
//   );
// }

// Get albums by the featured artist (country code `GB`)
// https://api.spotify.com/v1/artists/{{featured_artist_id}}/albums?include_groups=album&market={{country_code}}

// tests["Status code is 200"] = responseCode.code === 200;

// if (responseCode.code === 200) {
//   var jsonData = JSON.parse(responseBody);
//   var albumCount = jsonData.items.length;
//   if (albumCount > 0) {
//     var randomAlbumIndex = Math.floor(Math.random() * albumCount);
//     postman.setEnvironmentVariable(
//       "featured_album_id",
//       jsonData.items[randomAlbumIndex].id
//     );
//   }
// }

// Get the tracks from album
// https://api.spotify.com/v1/albums/{{featured_album_id}}/tracks?market={{country_code}}

// tests["Status code is 200"] = responseCode.code === 200;

// if (responseCode.code === 200) {
//   var tracks = _(JSON.parse(responseBody).items).pluck("id").value();

//   // Store the track ids in the Environment, to be used in the next request
//   postman.setEnvironmentVariable("tracks", JSON.stringify(tracks));
// }

// Put the tracks into the playlist

// var tracks = JSON.parse(environment.tracks);
// // As required by Spotify API
// var uris = _.map(tracks, function (track) {
//   return "spotify:track:" + track;
// }).join(",");

// postman.setEnvironmentVariable("uris", uris);

// https://api.spotify.com/v1/users/{{user_id}}/playlists/{{playlist_id}}/tracks?uris={{uris}}

// tests["Status code is 201"] = responseCode.code === 201;
