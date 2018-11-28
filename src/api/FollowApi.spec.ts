import { performRequest } from "../helpers";
import * as api from "./FollowApi";

jest.mock("../helpers");

describe("FollowApi", () => {
  const performRequestMock = performRequest as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("isFollowingUsers", () => {
    it("should check if the current user is following specified users", () => {
      api.isFollowingUsers("token", ["userId1", "userId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/me/following/contains",
        {
          queryParams: {
            ids: ["userId1", "userId2"],
            type: "user"
          }
        }
      );
    });
  });

  describe("isFollowingArtists", () => {
    it("should check if the current user is following specified artists", () => {
      api.isFollowingArtists("token", ["artistId1", "artistId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/me/following/contains",
        {
          queryParams: {
            ids: ["artistId1", "artistId2"],
            type: "artist"
          }
        }
      );
    });
  });

  describe("areFollowingPlaylist", () => {
    it("should check if users are following a playlist", () => {
      api.areFollowingPlaylist("token", "playlistId", ["userId1", "userId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/playlists/playlistId/followers/contains",
        {
          queryParams: {
            ids: ["userId1", "userId2"]
          }
        }
      );
    });
  });

  describe("followUsers", () => {
    it("should follow specified users", () => {
      api.followUsers("token", ["userId1", "userId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/following", {
        bodyParams: {
          ids: ["userId1", "userId2"]
        },
        method: "PUT",
        queryParams: {
          type: "user"
        }
      });
    });
  });

  describe("followArtists", () => {
    it("should follow specified artists", () => {
      api.followArtists("token", ["artistId1", "artistId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/following", {
        bodyParams: {
          ids: ["artistId1", "artistId2"]
        },
        method: "PUT",
        queryParams: {
          type: "artist"
        }
      });
    });
  });

  describe("followPlaylist", () => {
    it("should follow a specified playlist (without options)", () => {
      api.followPlaylist("token", "playlistId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/playlists/playlistId/followers",
        {
          method: "PUT"
        }
      );
    });

    it("should follow a specified playlist (with options)", () => {
      api.followPlaylist("token", "playlistId", { public: false });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/playlists/playlistId/followers",
        {
          bodyParams: {
            public: false
          },
          method: "PUT"
        }
      );
    });
  });

  describe("getFollowedArtists", () => {
    it("should get the current user's followed artists (without options)", () => {
      api.getFollowedArtists("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/following", {
        queryParams: {
          type: "artist"
        }
      });
    });

    it("should get the current user's followed artists (with options)", () => {
      api.getFollowedArtists("token", { limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/following", {
        queryParams: {
          limit: 2,
          type: "artist"
        }
      });
    });
  });

  describe("unfollowUsers", () => {
    it("should unfollow specified users", () => {
      api.unfollowUsers("token", ["userId1", "userId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/following", {
        bodyParams: {
          ids: ["userId1", "userId2"]
        },
        method: "DELETE",
        queryParams: {
          type: "user"
        }
      });
    });
  });

  describe("unfollowArtists", () => {
    it("should unfollow specified artists", () => {
      api.unfollowArtists("token", ["artistId1", "artistId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/following", {
        bodyParams: {
          ids: ["artistId1", "artistId2"]
        },
        method: "DELETE",
        queryParams: {
          type: "artist"
        }
      });
    });
  });

  describe("unfollowPlaylist", () => {
    it("should unfollow a specified playlist", () => {
      api.unfollowPlaylist("token", "playlistId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/playlists/playlistId/followers",
        {
          method: "DELETE"
        }
      );
    });
  });
});
