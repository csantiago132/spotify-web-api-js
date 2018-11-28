// +--------+
// | Albums |
// +--------+

export interface GetAlbumOptions {
  market?: string;
}

export interface GetAlbumTracksOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

export type GetAlbumsOptions = GetAlbumOptions;

// +---------+
// | Artists |
// +---------+

export interface GetArtistAlbumsOptions {
  include_groups?: Array<"album" | "single" | "appears_on" | "compilation">;
  market?: string;
  limit?: number;
  offset?: number;
}

export interface GetArtistTopTracksOptions {
  market?: string;
}

// +--------+
// | Browse |
// +--------+

export interface GetCategoryOptions {
  country?: string;
  locale?: string;
}

export interface GetCategoryPlaylistsOptions {
  country?: string;
  limit?: number;
  offset?: number;
}

export interface GetCategoriesOptions {
  country?: string;
  locale?: string;
  limit?: number;
  offset?: number;
}

export interface GetFeaturedPlaylistsOptions {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

export interface GetNewReleasesOptions {
  country?: string;
  limit?: number;
  offset?: number;
}

export interface GetRecommendationsOptions {
  limit?: number;
  market?: string;
  max_acousticness?: number;
  max_danceability?: number;
  max_duration_ms?: number;
  max_energy?: number;
  max_instrumentalness?: number;
  max_key?: number;
  max_liveness?: number;
  max_loudness?: number;
  max_mode?: number;
  max_popularity?: number;
  max_speechiness?: number;
  max_tempo?: number;
  max_time_signature?: number;
  max_valence?: number;
  min_acousticness?: number;
  min_danceability?: number;
  min_duration_ms?: number;
  min_energy?: number;
  min_instrumentalness?: number;
  min_key?: number;
  min_liveness?: number;
  min_loudness?: number;
  min_mode?: number;
  min_popularity?: number;
  min_speechiness?: number;
  min_tempo?: number;
  min_time_signature?: number;
  min_valence?: number;
  seed_artists?: string[];
  seed_genres?: string[];
  seed_tracks?: string[];
  target_acousticness?: number;
  target_danceability?: number;
  target_duration_ms?: number;
  target_energy?: number;
  target_instrumentalness?: number;
  target_key?: number;
  target_liveness?: number;
  target_loudness?: number;
  target_mode?: number;
  target_popularity?: number;
  target_speechiness?: number;
  target_tempo?: number;
  target_time_signature?: number;
  target_valence?: number;
}

// +--------+
// | Follow |
// +--------+

export interface FollowPlaylistOptions {
  public?: boolean;
}

export interface GetFollowedArtistsOptions {
  limit?: number;
  after?: string;
}

// +---------+
// | Library |
// +---------+

export interface GetMySavedAlbumsOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

export interface GetMySavedTracksOptions {
  limit?: number;
  offset?: number;
  market?: string;
}
