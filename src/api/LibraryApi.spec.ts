import { performRequest } from "../helpers";
import * as api from "./LibraryApi";

jest.mock("../helpers");

describe("LibraryApi", () => {
  const performRequestMock = performRequest as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("containsMySavedAlbums", () => {
    it("should check if specified albums are saved by the current user", () => {
      api.containsMySavedAlbums("token", ["albumId1", "albumId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/me/albums/contains",
        {
          queryParams: {
            ids: ["albumId1", "albumId2"]
          }
        }
      );
    });
  });

  describe("containsMySavedTracks", () => {
    it("should check if specified tracks are saved by the current user", () => {
      api.containsMySavedTracks("token", ["trackId1", "trackId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/me/tracks/contains",
        {
          queryParams: {
            ids: ["trackId1", "trackId2"]
          }
        }
      );
    });
  });

  describe("getMySavedAlbums", () => {
    it("should get the current user's saved albums (without options)", () => {
      api.getMySavedAlbums("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/me/albums",
        undefined
      );
    });

    it("should get the current user's saved albums (with options)", () => {
      api.getMySavedAlbums("token", { limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/albums", {
        queryParams: {
          limit: 2
        }
      });
    });
  });

  describe("getMySavedTracks", () => {
    it("should get the current user's saved tracks (without options)", () => {
      api.getMySavedTracks("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/me/tracks",
        undefined
      );
    });

    it("should get the current user's saved tracks (with options)", () => {
      api.getMySavedTracks("token", { limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/tracks", {
        queryParams: {
          limit: 2
        }
      });
    });
  });

  describe("removeFromMySavedAlbums", () => {
    it("should remove specified albums from the current user's saved albums", () => {
      api.removeFromMySavedAlbums("token", ["albumId1", "albumId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/albums", {
        bodyParams: {
          ids: ["albumId1", "albumId2"]
        },
        method: "DELETE"
      });
    });
  });

  describe("removeFromMySavedTracks", () => {
    it("should remove specified tracks from the current user's saved tracks", () => {
      api.removeFromMySavedTracks("token", ["trackId1", "trackId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/tracks", {
        bodyParams: {
          ids: ["trackId1", "trackId2"]
        },
        method: "DELETE"
      });
    });
  });

  describe("addToMySavedAlbums", () => {
    it("should add specified albums from the current user's saved albums", () => {
      api.addToMySavedAlbums("token", ["albumId1", "albumId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/albums", {
        bodyParams: {
          ids: ["albumId1", "albumId2"]
        },
        method: "PUT"
      });
    });
  });

  describe("addToMySavedTracks", () => {
    it("should add specified tracks from the current user's saved tracks", () => {
      api.addToMySavedTracks("token", ["trackId1", "trackId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me/tracks", {
        bodyParams: {
          ids: ["trackId1", "trackId2"]
        },
        method: "PUT"
      });
    });
  });
});
