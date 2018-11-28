import { performRequest } from "../helpers";
import * as model from "../model";

export async function containsMySavedAlbums(
  accessToken: string,
  albumIds: string[]
) {
  return performRequest<boolean[]>(accessToken, "/me/albums/contains", {
    queryParams: {
      ids: albumIds
    }
  });
}

export async function containsMySavedTracks(
  accessToken: string,
  artistIds: string[]
) {
  return performRequest<boolean[]>(accessToken, "/me/tracks/contains", {
    queryParams: {
      ids: artistIds
    }
  });
}

export async function getMySavedAlbums(
  accessToken: string,
  options?: model.GetMySavedAlbumsOptions
) {
  return performRequest<model.GetMySavedAlbumsResponse>(
    accessToken,
    "/me/albums",
    options ? { queryParams: options } : undefined
  );
}

export async function getMySavedTracks(
  accessToken: string,
  options?: model.GetMySavedTracksOptions
) {
  return performRequest<model.GetMySavedTracksResponse>(
    accessToken,
    "/me/tracks",
    options ? { queryParams: options } : undefined
  );
}

export async function removeFromMySavedAlbums(
  accessToken: string,
  albumIds: string[]
) {
  return performRequest<void>(accessToken, "/me/albums", {
    bodyParams: {
      ids: albumIds
    },
    method: "DELETE"
  });
}

export async function removeFromMySavedTracks(
  accessToken: string,
  trackIds: string[]
) {
  return performRequest<void>(accessToken, "/me/tracks", {
    bodyParams: {
      ids: trackIds
    },
    method: "DELETE"
  });
}

export async function addToMySavedAlbums(
  accessToken: string,
  albumIds: string[]
) {
  return performRequest<void>(accessToken, "/me/albums", {
    bodyParams: {
      ids: albumIds
    },
    method: "PUT"
  });
}

export async function addToMySavedTracks(
  accessToken: string,
  trackIds: string[]
) {
  return performRequest<void>(accessToken, "/me/tracks", {
    bodyParams: {
      ids: trackIds
    },
    method: "PUT"
  });
}
