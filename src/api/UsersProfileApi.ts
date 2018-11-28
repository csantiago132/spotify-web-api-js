import { performRequest } from "../helpers";
import * as model from "../model";

export async function getMe(accessToken: string) {
  return performRequest<model.GetMeResponse>(accessToken, "/me");
}

export async function getUser(accessToken: string, userId: string) {
  return performRequest<model.GetUserResponse>(
    accessToken,
    `/users/${encodeURIComponent(userId)}`
  );
}
