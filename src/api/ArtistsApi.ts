import { performRequest } from "../helpers";
import * as model from "../model";

export async function getArtist(accessToken: string, artistId: string) {
  return performRequest<model.GetArtistResponse>(
    accessToken,
    `/artists/${artistId}`
  );
}

export async function getArtistAlbums(
  accessToken: string,
  artistId: string,
  options?: model.GetArtistAlbumsOptions
) {
  return performRequest<model.GetArtistAlbumsResponse>(
    accessToken,
    `/artists/${artistId}/albums`,
    options ? { queryParams: options } : undefined
  );
}

export async function getArtistTopTracks(
  accessToken: string,
  artistId: string,
  options?: model.GetArtistTopTracksOptions
) {
  return performRequest<model.GetArtistTopTracksResponse>(
    accessToken,
    `/artists/${artistId}/top-tracks`,
    options ? { queryParams: options } : undefined
  );
}

export async function getRelatedArtists(accessToken: string, artistId: string) {
  return performRequest<model.GetRelatedArtistsResponse>(
    accessToken,
    `/artists/${artistId}/related-artists`
  );
}

export async function getArtists(accessToken: string, artistIds: string[]) {
  return performRequest<model.GetArtistsResponse>(accessToken, `/artists`, {
    queryParams: {
      ids: artistIds
    }
  });
}
