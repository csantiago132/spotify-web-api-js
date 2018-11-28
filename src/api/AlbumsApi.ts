import { performRequest } from "../helpers";
import * as model from "../model";

export async function getAlbum(
  accessToken: string,
  albumId: string,
  options?: model.GetAlbumOptions
) {
  return performRequest<model.GetAlbumResponse>(
    accessToken,
    `/albums/${albumId}`,
    options ? { queryParams: options } : undefined
  );
}

export async function getAlbumTracks(
  accessToken: string,
  albumId: string,
  options?: model.GetAlbumTracksOptions
) {
  return performRequest<model.GetAlbumTracksResponse>(
    accessToken,
    `/albums/${albumId}/tracks`,
    options ? { queryParams: options } : undefined
  );
}

export async function getAlbums(
  accessToken: string,
  albumIds: string[],
  options?: model.GetAlbumsOptions
) {
  return performRequest<model.GetAlbumTracksResponse>(
    accessToken,
    "/albums",
    options
      ? { queryParams: { ...options, ids: albumIds } }
      : { queryParams: { ids: albumIds } }
  );
}
