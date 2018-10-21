/**
 * Album Object (Full)
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#album-object-full
 */
export interface AlbumObjectFull {
  album_type: "album_type" | "single" | "compilation";
  artists: ArtistObjectSimplified[];
  available_markets: string[];
  copyrights: CopyrightObject[];
  external_ids: ExternalIdObject;
  external_urls: ExternalUrlObject;
  genres: string[];
  href: string;
  id: string;
  images: ImageObject[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions: RestrictionsObject;
  tracks: PagingObject<TrackObjectSimplified>;
  type: "album";
  uri: string;
}

/**
 * Album Object (Simplified)
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#album-object-simplified
 */
export interface AlbumObjectSimplified {
  album_group?: "album" | "single" | "compilation" | "appears_on";
  album_type: "album" | "single" | "compilation";
  artists: ArtistObjectSimplified[];
  available_markets: string[];
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: RestrictionsObject;
  type: "album";
  uri: string;
}

/**
 * Artist Object (Full)
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#artist-object-full
 */
export interface ArtistObjectFull {
  external_urls: ExternalUrlObject;
  followers: FollowersObject;
  genres: string[];
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
}

/**
 * Artist Object (Simplified)
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#artist-object-simplified
 */
export interface ArtistObjectSimplified {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

/**
 * Audio Features Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#audio-features-object
 */
export interface AudioFeaturesObject {
  acousticness: number;
  analysis_url: string;
  danceability: number;
  duration_ms: number;
  energy: number;
  id: string;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  track_href: string;
  type: "audio_features";
  uri: string;
  valence: number;
}

/**
 * Category Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#category-object
 */
export interface CategoryObject {
  href: string;
  icons: ImageObject[];
  id: string;
  name: string;
}

/**
 * Context Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#context-object
 */
export interface ContextObject {
  type: "artist" | "playlist" | "album";
  href: string;
  external_urls: ExternalUrlObject;
  uri: string;
}

/**
 * Copyright Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#copyright-object
 */
export interface CopyrightObject {
  text: string;
  type: "C" | "P";
}

/**
 * Cursor Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#cursor-object
 */
export interface CursorObject {
  after: string;
}

/**
 * Error Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#error-object
 */
export interface ErrorObject {
  status: number;
  message: string;
}

/**
 * External ID Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#external-id-object
 */
export interface ExternalIdObject {
  isrc?: string;
  ean?: string;
  upc?: string;
}

/**
 * External URL Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#external-url-object
 */
export interface ExternalUrlObject {
  spotify: string;
}

/**
 * Followers Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#followers-object
 */
export interface FollowersObject {
  href: string | null;
  total: number;
}

/**
 * Image Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#image-object
 */
export interface ImageObject {
  height?: number | null;
  url: string;
  width?: number | null;
}

/**
 * Paging Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#paging-object
 */
export interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

/**
 * Cursor-Based Paging Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#cursor-based-paging-object
 */
export interface CursorBasedPagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  cursors: CursorObject;
  total: number;
}

/**
 * Play History Object
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#play-history-object
 */
export interface PlayHistoryObject {
  track: TrackObjectSimplified;
  played_at: string;
  context: ContextObject;
}

/**
 * Playlist Object (Full)
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#playlist-object-full
 */
export interface PlaylistObjectFull {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalUrlObject;
  followers: FollowersObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  owner: UserObjectPublic;
  public: boolean | null;
  snapshot_id: string;
  tracks: PagingObject<PlaylistTrackObject>;
  type: "playlist";
  uri: string;
}

export interface PlaylistObjectSimplified {}

export interface PlaylistTrackObject {}

export interface RecommendationsObject {}

export interface RecommendationsSeedObject {}

export interface RestrictionsObject {
  reason: string;
}

export interface SavedTrackObject {}

export interface SavedAlbumObject {}

export interface TrackObjectFull {}

export interface TrackObjectSimplified {}

export interface TrackLinkObject {}

export interface UserObjectPrivate {}

export interface UserObjectPublic {}
