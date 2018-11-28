import * as SpotifyObjects from "./SpotifyObjects";

// +--------+
// | Albums |
// +--------+

export type GetAlbumResponse = SpotifyObjects.AlbumObjectFull;

export type GetAlbumTracksResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.TrackObjectSimplified
>;

export interface GetAlbumsResponse {
  albums: SpotifyObjects.AlbumObjectFull[];
}

// +---------+
// | Artists |
// +---------+

export type GetArtistResponse = SpotifyObjects.ArtistObjectFull;

export type GetArtistAlbumsResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.AlbumObjectSimplified
>;

export interface GetArtistTopTracksResponse {
  tracks: SpotifyObjects.TrackObjectFull[];
}

export interface GetRelatedArtistsResponse {
  artists: SpotifyObjects.ArtistObjectFull[];
}

export interface GetArtistsResponse {
  artists: SpotifyObjects.ArtistObjectFull[];
}

// +--------+
// | Browse |
// +--------+

export type GetCategoryResponse = SpotifyObjects.CategoryObject;

export interface GetCategoryPlaylistsResponse {
  playlists: SpotifyObjects.PagingObject<
    SpotifyObjects.PlaylistObjectSimplified
  >;
}

export interface GetCategoriesResponse {
  categories: SpotifyObjects.PagingObject<SpotifyObjects.CategoryObject>;
}

export interface GetFeaturedPlaylistsResponse {
  message: string;
  playlists: SpotifyObjects.PagingObject<
    SpotifyObjects.PlaylistObjectSimplified
  >;
}

export interface GetNewReleasesResponse {
  message?: string;
  albums: SpotifyObjects.PagingObject<SpotifyObjects.AlbumObjectSimplified>;
}

export type GetRecommendationsResponse = SpotifyObjects.RecommendationsObject;

export interface GetAvailableGenreSeedsResponse {
  genres: string[];
}

// +--------+
// | Follow |
// +--------+

export type GetFollowedArtistsResponse = SpotifyObjects.CursorBasedPagingObject<
  SpotifyObjects.ArtistObjectFull
>;

// +---------+
// | Library |
// +---------+

export type GetMySavedAlbumsResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SavedAlbumObject
>;

export type GetMySavedTracksResponse = SpotifyObjects.PagingObject<
  SpotifyObjects.SavedTrackObject
>;

// +---------------+
// | Users Profile |
// +---------------+

export type GetMeResponse = SpotifyObjects.UserObjectPrivate;

export type GetUserResponse = SpotifyObjects.UserObjectPublic;
