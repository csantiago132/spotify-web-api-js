import { performRequest } from "../helpers";
import * as api from "./ArtistsApi";

jest.mock("../helpers");

describe("ArtistsApi", () => {
  const performRequestMock = performRequest as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getArtist", () => {
    it("should get an artist", () => {
      api.getArtist("token", "artistId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/artists/artistId");
    });
  });

  describe("getArtistAlbums", () => {
    it("should get an artist's albums (without options)", () => {
      api.getArtistAlbums("token", "artistId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/artists/artistId/albums",
        undefined
      );
    });

    it("should get an artist's albums (with options)", () => {
      api.getArtistAlbums("token", "artistId", {
        limit: 2,
        market: "US"
      });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/artists/artistId/albums",
        { queryParams: { limit: 2, market: "US" } }
      );
    });
  });

  describe("getArtistTopTracks", () => {
    it("should get an artist's top tracks (without options)", () => {
      api.getArtistTopTracks("token", "artistId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/artists/artistId/top-tracks",
        undefined
      );
    });

    it("should get an artist's top tracks (with options)", () => {
      api.getArtistTopTracks("token", "artistId", {
        market: "US"
      });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/artists/artistId/top-tracks",
        { queryParams: { market: "US" } }
      );
    });
  });

  describe("getRelatedArtists", () => {
    it("should get related artists", () => {
      api.getRelatedArtists("token", "artistId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/artists/artistId/related-artists"
      );
    });
  });

  describe("getArtists", () => {
    it("should get several artists", () => {
      api.getArtists("token", ["artistId1", "artistId2"]);
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/artists", {
        queryParams: { ids: ["artistId1", "artistId2"] }
      });
    });
  });
});
