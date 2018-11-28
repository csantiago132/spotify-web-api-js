import { performRequest } from "../helpers";
import * as api from "./AlbumsApi";

jest.mock("../helpers");

describe("AlbumsApi", () => {
  const performRequestMock = performRequest as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getAlbum", () => {
    it("should get an album (without options)", () => {
      api.getAlbum("token", "albumId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/albums/albumId",
        undefined
      );
    });

    it("should get an album (with options)", () => {
      api.getAlbum("token", "albumId", { market: "US" });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/albums/albumId", {
        queryParams: { market: "US" }
      });
    });
  });

  describe("getAlbumTracks", () => {
    it("should get an album's tracks (without options)", () => {
      api.getAlbumTracks("token", "albumId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/albums/albumId/tracks",
        undefined
      );
    });

    it("should get an album's tracks (with options)", () => {
      api.getAlbumTracks("token", "albumId", {
        limit: 2,
        market: "US"
      });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/albums/albumId/tracks",
        { queryParams: { limit: 2, market: "US" } }
      );
    });
  });

  describe("getAlbums", () => {
    it("should get multiple albums (without options)", () => {
      api.getAlbums("token", ["albumId1", "albumId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/albums", {
        queryParams: {
          ids: ["albumId1", "albumId2"]
        }
      });
    });

    it("should get multiple albums (with options)", () => {
      api.getAlbums("token", ["albumId1", "albumId2"], { market: "US" });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/albums", {
        queryParams: {
          ids: ["albumId1", "albumId2"],
          market: "US"
        }
      });
    });
  });
});
