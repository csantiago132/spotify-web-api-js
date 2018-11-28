import { performRequest } from "../helpers";
import * as api from "./UsersProfileApi";

jest.mock("../helpers");

describe("UsersProfileApi", () => {
  const performRequestMock = performRequest as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("getMe", () => {
    it("should get information about the current user", async () => {
      api.getMe("token");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/me");
    });
  });

  describe("getUser", () => {
    it("should get information about a user", () => {
      api.getUser("token", "userId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/users/userId");
    });

    it('should get information about a user with a "#" character', async () => {
      api.getUser("token", "#userId");
      expect(performRequestMock).toBeCalledTimes(1);
      expect(performRequestMock).toBeCalledWith("token", "/users/%23userId");
    });
  });
});
