import { performRequest } from "../helpers";
import * as model from "../model";

export async function getCategory(
  accessToken: string,
  categoryId: string,
  options?: model.GetCategoryOptions
) {
  return performRequest<model.GetCategoryResponse>(
    accessToken,
    `/browse/categories/${categoryId}`,
    options ? { queryParams: options } : undefined
  );
}

export async function getCategoryPlaylists(
  accessToken: string,
  categoryId: string,
  options?: model.GetCategoryPlaylistsOptions
) {
  return performRequest<model.GetCategoryPlaylistsResponse>(
    accessToken,
    `/browse/categories/${categoryId}/playlists`,
    options ? { queryParams: options } : undefined
  );
}

export async function getCategories(
  accessToken: string,
  options?: model.GetCategoriesOptions
) {
  return performRequest<model.GetCategoriesResponse>(
    accessToken,
    "/browse/categories",
    options ? { queryParams: options } : undefined
  );
}

export async function getFeaturedPlaylists(
  accessToken: string,
  options?: model.GetFeaturedPlaylistsOptions
) {
  return performRequest<model.GetFeaturedPlaylistsResponse>(
    accessToken,
    "/browse/featured-playlists",
    options ? { queryParams: options } : undefined
  );
}

export async function getNewReleases(
  accessToken: string,
  options?: model.GetNewReleasesOptions
) {
  return performRequest<model.GetNewReleasesResponse>(
    accessToken,
    "/browse/new-releases",
    options ? { queryParams: options } : undefined
  );
}

export async function getRecommendations(
  accessToken: string,
  options?: model.GetRecommendationsOptions
) {
  return performRequest<model.GetRecommendationsResponse>(
    accessToken,
    "/recommendations",
    options ? { queryParams: options } : undefined
  );
}

export async function getAvailableGenreSeeds(accessToken: string) {
  return performRequest<model.GetAvailableGenreSeedsResponse>(
    accessToken,
    "/recommendations/available-genre-seeds"
  );
}
