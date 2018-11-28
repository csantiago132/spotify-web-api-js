import { performRequest } from "../helpers";
import * as api from "./BrowseApi";

jest.mock("../helpers");

describe("BrowseApi", () => {
  const performRequestMock = performRequest as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getCategory", () => {
    it("should get a single category (without options)", () => {
      api.getCategory("token", "categoryId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/categories/categoryId",
        undefined
      );
    });

    it("should get a single category (with options)", () => {
      api.getCategory("token", "categoryId", { country: "US" });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/categories/categoryId",
        { queryParams: { country: "US" } }
      );
    });
  });

  describe("getCategoryPlaylists", () => {
    it("should get playlists from a category (without options)", () => {
      api.getCategoryPlaylists("token", "categoryId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/categories/categoryId/playlists",
        undefined
      );
    });

    it("should get playlists from a category (with options)", () => {
      api.getCategoryPlaylists("token", "categoryId", { limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/categories/categoryId/playlists",
        { queryParams: { limit: 2 } }
      );
    });
  });

  describe("getCategories", () => {
    it("should get a list of categories (without options)", () => {
      api.getCategories("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/categories",
        undefined
      );
    });

    it("should get a list of categories (with options)", () => {
      api.getCategories("token", { limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/browse/categories", {
        queryParams: { limit: 2 }
      });
    });
  });

  describe("getFeaturedPlaylists", () => {
    it("should get featured playlists (without options)", () => {
      api.getFeaturedPlaylists("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/featured-playlists",
        undefined
      );
    });

    it("should get featured playlists (with options)", () => {
      api.getFeaturedPlaylists("token", { limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/featured-playlists",
        { queryParams: { limit: 2 } }
      );
    });
  });

  describe("getNewReleases", () => {
    it("should get new releases (without options)", () => {
      api.getNewReleases("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/new-releases",
        undefined
      );
    });

    it("should get new releases (with options)", () => {
      api.getNewReleases("token", { limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/browse/new-releases",
        { queryParams: { limit: 2 } }
      );
    });
  });

  describe("getRecommendations", () => {
    it("should get recommendations (without options)", () => {
      api.getRecommendations("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/recommendations",
        undefined
      );
    });

    it("should get recommendations (with options)", () => {
      api.getRecommendations("token", { seed_artists: ["artist"], limit: 2 });
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/recommendations", {
        queryParams: { seed_artists: ["artist"], limit: 2 }
      });
    });
  });

  describe("getAvailableGenreSeeds", () => {
    it("should get a list of available genre seeds", () => {
      api.getAvailableGenreSeeds("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith(
        "token",
        "/recommendations/available-genre-seeds"
      );
    });
  });
});
