/**
 * Album Object (Full)
 * https://developer.spotify.com/documentation/web-api/reference/object-model/#album-object-full
 */
export interface AlbumObjectFull {
  album_type: "album" | "single" | "compilation";
  artists: ArtistObjectSimplified[];
  available_markets?: string[];
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
  restrictions?: {
    reason: string;
  };
  total_tracks?: number;
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
  available_markets?: string[];
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  restrictions?: {
    reason: string;
  };
  total_tracks?: number;
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
  primary_color?: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: PagingObject<PlaylistTrackObject>;
  type: "playlist";
  uri: string;
}

export interface PlaylistObjectSimplified {
  collaborative: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  owner: UserObjectPublic;
  primary_color?: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: "playlist";
  uri: string;
}

export interface PlaylistTrackObject {
  added_at: string | null;
  added_by: UserObjectPublic | null;
  is_local: boolean;
  track: TrackObjectFull;
}

export interface RecommendationsObject {
  seeds: RecommendationsSeedObject[];
  tracks: TrackObjectSimplified[];
}

export interface RecommendationsSeedObject {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string | null;
  id: string;
  initialPoolSize: number;
  type: "artist" | "track" | "genre";
}

export interface SavedTrackObject {
  added_at: string;
  track: TrackObjectFull;
}

export interface SavedAlbumObject {
  added_at: string;
  album: AlbumObjectFull;
}

export interface TrackObjectFull {
  album: AlbumObjectSimplified;
  artists: ArtistObjectSimplified[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIdObject;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: TrackLinkObject;
  restrictions?: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

export interface TrackObjectSimplified {
  artists: ArtistObjectSimplified[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: TrackLinkObject;
  restrictions?: {
    reason: string;
  };
  name: string;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

export interface TrackLinkObject {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  type: "track";
  uri: string;
}

export interface UserObjectPrivate {
  birthdate?: string;
  country?: string;
  display_name: string | null;
  email?: string;
  external_urls: ExternalUrlObject;
  followers?: FollowersObject;
  href: string;
  id: string;
  images?: ImageObject[];
  product?: string;
  type: "user";
  uri: string;
}

export interface UserObjectPublic {
  display_name: string | null;
  external_urls: ExternalUrlObject;
  followers?: FollowersObject;
  href: string;
  id: string;
  images?: ImageObject[];
  type: "user";
  uri: string;
}
