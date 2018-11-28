import * as api from "./api";
import SpotifyWebApi from "./SpotifyWebApi";

jest.mock("./api");

describe("SpotifyWebApi", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return the access token", () => {
    const spotify = new SpotifyWebApi("token");
    expect(spotify.getAccessToken()).toBe("token");
  });

  it("should set the access token", () => {
    const spotify = new SpotifyWebApi("token");
    spotify.setAccessToken("another token");
    expect(spotify.getAccessToken()).toBe("another token");
  });

  describe("Albums endpoints", () => {
    it("should call getAlbum", () => {
      const getAlbumMock = api.getAlbum as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getAlbum("albumId");
      expect(getAlbumMock).toBeCalledWith("token", "albumId", undefined);
    });

    it("should call getAlbumTracks", () => {
      const getAlbumTracksMock = api.getAlbumTracks as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getAlbumTracks("albumId");
      expect(getAlbumTracksMock).toBeCalledWith("token", "albumId", undefined);
    });

    it("should call getAlbums", () => {
      const getAlbumsMock = api.getAlbums as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getAlbums(["firstAlbum", "secondAlbum"]);
      expect(getAlbumsMock).toBeCalledWith(
        "token",
        ["firstAlbum", "secondAlbum"],
        undefined
      );
    });
  });

  describe("Artists endpoints", () => {
    it("should call getArtist", () => {
      const getArtistMock = api.getArtist as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getArtist("Band of Horses");
      expect(getArtistMock).toBeCalledWith("token", "Band of Horses");
    });

    it("should call getArtistAlbums", () => {
      const getArtistAlbumsMock = api.getArtistAlbums as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getArtistAlbums("Band of Horses");
      expect(getArtistAlbumsMock).toBeCalledWith(
        "token",
        "Band of Horses",
        undefined
      );
    });

    it("should call getArtistTopTracks", () => {
      const getArtistTopTracksMock = api.getArtistTopTracks as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getArtistTopTracks("Band of Horses");
      expect(getArtistTopTracksMock).toBeCalledWith(
        "token",
        "Band of Horses",
        undefined
      );
    });

    it("should call getRelatedArtists", () => {
      const getRelatedArtistsMock = api.getRelatedArtists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getRelatedArtists("Band of Horses");
      expect(getRelatedArtistsMock).toBeCalledWith("token", "Band of Horses");
    });

    it("should call getArtists", () => {
      const getArtistsMock = api.getArtists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getArtists(["Band of Horses", "Fleet Foxes"]);
      expect(getArtistsMock).toBeCalledWith("token", [
        "Band of Horses",
        "Fleet Foxes"
      ]);
    });
  });

  describe("Browse endpoints", () => {
    it("should call getCategory", () => {
      const getCategoryMock = api.getCategory as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getCategory("dinner");
      expect(getCategoryMock).toBeCalledWith("token", "dinner", undefined);
    });

    it("should call getCategoryPlaylists", () => {
      const getCategoryPlaylistsMock = api.getCategoryPlaylists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getCategoryPlaylists("dinner");
      expect(getCategoryPlaylistsMock).toBeCalledWith(
        "token",
        "dinner",
        undefined
      );
    });

    it("should call getCategories", () => {
      const getCategoriesMock = api.getCategories as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getCategories();
      expect(getCategoriesMock).toBeCalledWith("token", undefined);
    });

    it("should call getFeaturedPlaylists", () => {
      const getFeaturedPlaylistsMock = api.getFeaturedPlaylists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getFeaturedPlaylists();
      expect(getFeaturedPlaylistsMock).toBeCalledWith("token", undefined);
    });

    it("should call getNewReleases", () => {
      const getNewReleasesMock = api.getNewReleases as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getNewReleases();
      expect(getNewReleasesMock).toBeCalledWith("token", undefined);
    });

    it("should call getRecommendations", () => {
      const getRecommendationsMock = api.getRecommendations as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getRecommendations({ seed_artists: ["artistId1", "artistId2"] });
      expect(getRecommendationsMock).toBeCalledWith("token", {
        seed_artists: ["artistId1", "artistId2"]
      });
    });

    it("should call getAvailableGenreSeeds", () => {
      const getAvailableGenreSeedsMock = api.getAvailableGenreSeeds as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getAvailableGenreSeeds();
      expect(getAvailableGenreSeedsMock).toBeCalledWith("token");
    });
  });

  describe("Follow endpoints", () => {
    it("should call isFollowingUsers", () => {
      const isFollowingUsersMock = api.isFollowingUsers as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.isFollowingUsers(["userId1", "userId2"]);
      expect(isFollowingUsersMock).toBeCalledWith("token", [
        "userId1",
        "userId2"
      ]);
    });

    it("should call isFollowingArtists", () => {
      const isFollowingArtistsMock = api.isFollowingArtists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.isFollowingArtists(["artistId1", "artistId2"]);
      expect(isFollowingArtistsMock).toBeCalledWith("token", [
        "artistId1",
        "artistId2"
      ]);
    });

    it("should call areFollowingPlaylist", () => {
      const areFollowingPlaylistMock = api.areFollowingPlaylist as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.areFollowingPlaylist("playlistId", ["userId1", "userId2"]);
      expect(areFollowingPlaylistMock).toBeCalledWith("token", "playlistId", [
        "userId1",
        "userId2"
      ]);
    });

    it("should call followUsers", () => {
      const followUsersMock = api.followUsers as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.followUsers(["userId1", "userId2"]);
      expect(followUsersMock).toBeCalledWith("token", ["userId1", "userId2"]);
    });

    it("should call followArtists", () => {
      const followArtistsMock = api.followArtists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.followArtists(["artistId1", "artistId2"]);
      expect(followArtistsMock).toBeCalledWith("token", [
        "artistId1",
        "artistId2"
      ]);
    });

    it("should call followPlaylist", () => {
      const followPlaylistMock = api.followPlaylist as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.followPlaylist("playlistId");
      expect(followPlaylistMock).toBeCalledWith(
        "token",
        "playlistId",
        undefined
      );
    });

    it("should call getFollowedArtists", () => {
      const getFollowedArtistsMock = api.getFollowedArtists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getFollowedArtists();
      expect(getFollowedArtistsMock).toBeCalledWith("token", undefined);
    });

    it("should call unfollowUsers", () => {
      const unfollowUsersMock = api.unfollowUsers as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.unfollowUsers(["userId1", "userId2"]);
      expect(unfollowUsersMock).toBeCalledWith("token", ["userId1", "userId2"]);
    });

    it("should call unfollowArtists", () => {
      const unfollowArtistsMock = api.unfollowArtists as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.unfollowArtists(["artistId1", "artistId2"]);
      expect(unfollowArtistsMock).toBeCalledWith("token", [
        "artistId1",
        "artistId2"
      ]);
    });

    it("should call unfollowPlaylist", () => {
      const unfollowPlaylistMock = api.unfollowPlaylist as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.unfollowPlaylist("playlistId");
      expect(unfollowPlaylistMock).toBeCalledWith("token", "playlistId");
    });
  });

  describe("Users Profile endpoints", () => {
    it("should call getMe", () => {
      const getMeMock = api.getMe as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getMe();
      expect(getMeMock).toBeCalledWith("token");
    });

    it("should call getUser", () => {
      const getUserMock = api.getUser as jest.Mock;
      const spotify = new SpotifyWebApi("token");
      spotify.getUser("tuggareutangranser");
      expect(getUserMock).toBeCalledWith("token", "tuggareutangranser");
    });
  });
});
