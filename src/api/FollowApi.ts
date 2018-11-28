import { performRequest } from "../helpers";
import * as model from "../model";

export async function isFollowingUsers(accessToken: string, userIds: string[]) {
  return performRequest<boolean[]>(accessToken, "/me/following/contains", {
    queryParams: {
      ids: userIds,
      type: "user"
    }
  });
}

export async function isFollowingArtists(
  accessToken: string,
  artistIds: string[]
) {
  return performRequest<boolean[]>(accessToken, "/me/following/contains", {
    queryParams: {
      ids: artistIds,
      type: "artist"
    }
  });
}

export async function areFollowingPlaylist(
  accessToken: string,
  playlistId: string,
  userIds: string[]
) {
  return performRequest<boolean[]>(
    accessToken,
    `/playlists/${playlistId}/followers/contains`,
    {
      queryParams: {
        ids: userIds
      }
    }
  );
}

export async function followUsers(accessToken: string, userIds: string[]) {
  return performRequest<void>(accessToken, "/me/following", {
    bodyParams: {
      ids: userIds
    },
    method: "PUT",
    queryParams: {
      type: "user"
    }
  });
}

export async function followArtists(accessToken: string, artistIds: string[]) {
  return performRequest<void>(accessToken, "/me/following", {
    bodyParams: {
      ids: artistIds
    },
    method: "PUT",
    queryParams: {
      type: "artist"
    }
  });
}

export async function followPlaylist(
  accessToken: string,
  playlistId: string,
  options?: model.FollowPlaylistOptions
) {
  return performRequest<void>(
    accessToken,
    `/playlists/${playlistId}/followers`,
    {
      ...(options && {
        bodyParams: {
          public: options.public
        }
      }),
      method: "PUT"
    }
  );
}

export async function getFollowedArtists(
  accessToken: string,
  options?: model.GetFollowedArtistsOptions
) {
  return performRequest<model.GetFollowedArtistsResponse>(
    accessToken,
    "/me/following",
    {
      queryParams: {
        ...options,
        type: "artist"
      }
    }
  );
}

export async function unfollowUsers(accessToken: string, userIds: string[]) {
  return performRequest<void>(accessToken, "/me/following", {
    bodyParams: {
      ids: userIds
    },
    method: "DELETE",
    queryParams: {
      type: "user"
    }
  });
}

export async function unfollowArtists(
  accessToken: string,
  artistIds: string[]
) {
  return performRequest<void>(accessToken, "/me/following", {
    bodyParams: {
      ids: artistIds
    },
    method: "DELETE",
    queryParams: {
      type: "artist"
    }
  });
}

export async function unfollowPlaylist(
  accessToken: string,
  playlistId: string
) {
  return performRequest<void>(
    accessToken,
    `/playlists/${playlistId}/followers`,
    {
      method: "DELETE"
    }
  );
}
