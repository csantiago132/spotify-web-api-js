import "core-js";
import "isomorphic-fetch";
import * as api from "./api";
import * as model from "./model";

export default class SpotifyWebApi {
  private accessToken = "";

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  // +--------+
  // | Albums |
  // +--------+

  public async getAlbum(albumId: string, options?: model.GetAlbumOptions) {
    return api.getAlbum(this.accessToken, albumId, options);
  }

  public async getAlbumTracks(
    albumId: string,
    options?: model.GetAlbumTracksOptions
  ) {
    return api.getAlbumTracks(this.accessToken, albumId, options);
  }

  public async getAlbums(albumIds: string[], options?: model.GetAlbumsOptions) {
    return api.getAlbums(this.accessToken, albumIds, options);
  }

  // +---------+
  // | Artists |
  // +---------+

  public async getArtist(artistId: string) {
    return api.getArtist(this.accessToken, artistId);
  }

  public async getArtistAlbums(
    artistId: string,
    options?: model.GetArtistAlbumsOptions
  ) {
    return api.getArtistAlbums(this.accessToken, artistId, options);
  }

  public async getArtistTopTracks(
    artistId: string,
    options?: model.GetArtistTopTracksOptions
  ) {
    return api.getArtistTopTracks(this.accessToken, artistId, options);
  }

  public async getRelatedArtists(artistId: string) {
    return api.getRelatedArtists(this.accessToken, artistId);
  }

  public async getArtists(artistIds: string[]) {
    return api.getArtists(this.accessToken, artistIds);
  }

  // +--------+
  // | Browse |
  // +--------+

  public async getCategory(
    categoryId: string,
    options?: model.GetCategoryOptions
  ) {
    return api.getCategory(this.accessToken, categoryId, options);
  }

  public async getCategoryPlaylists(
    categoryId: string,
    options?: model.GetCategoryPlaylistsOptions
  ) {
    return api.getCategoryPlaylists(this.accessToken, categoryId, options);
  }

  public async getCategories(options?: model.GetCategoriesOptions) {
    return api.getCategories(this.accessToken, options);
  }

  public async getFeaturedPlaylists(
    options?: model.GetFeaturedPlaylistsOptions
  ) {
    return api.getFeaturedPlaylists(this.accessToken, options);
  }

  public async getNewReleases(options?: model.GetNewReleasesOptions) {
    return api.getNewReleases(this.accessToken, options);
  }

  public async getRecommendations(options: model.GetRecommendationsOptions) {
    return api.getRecommendations(this.accessToken, options);
  }

  public async getAvailableGenreSeeds() {
    return api.getAvailableGenreSeeds(this.accessToken);
  }

  // +--------+
  // | Follow |
  // +--------+

  public async isFollowingUsers(userIds: string[]) {
    return api.isFollowingUsers(this.accessToken, userIds);
  }

  public async isFollowingArtists(artistIds: string[]) {
    return api.isFollowingArtists(this.accessToken, artistIds);
  }

  public async areFollowingPlaylist(playlistId: string, userIds: string[]) {
    return api.areFollowingPlaylist(this.accessToken, playlistId, userIds);
  }

  public async followUsers(userIds: string[]) {
    return api.followUsers(this.accessToken, userIds);
  }

  public async followArtists(artistIds: string[]) {
    return api.followArtists(this.accessToken, artistIds);
  }

  public async followPlaylist(
    playlistId: string,
    options?: model.FollowPlaylistOptions
  ) {
    return api.followPlaylist(this.accessToken, playlistId, options);
  }

  public async getFollowedArtists(options?: model.GetFollowedArtistsOptions) {
    return api.getFollowedArtists(this.accessToken, options);
  }

  public async unfollowUsers(userIds: string[]) {
    return api.unfollowUsers(this.accessToken, userIds);
  }

  public async unfollowArtists(artistIds: string[]) {
    return api.unfollowArtists(this.accessToken, artistIds);
  }

  public async unfollowPlaylist(playlistId: string) {
    return api.unfollowPlaylist(this.accessToken, playlistId);
  }

  // +---------------+
  // | Users Profile |
  // +---------------+

  public async getMe() {
    return api.getMe(this.accessToken);
  }

  public async getUser(userId: string) {
    return api.getUser(this.accessToken, userId);
  }
}
