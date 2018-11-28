import * as fetch from "jest-fetch-mock";
import { performRequest, PerformRequestOptions } from "./performRequest";

describe("performRequest", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("GET requests", () => {
    it("should perform a GET request with no query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint");
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith("https://api.spotify.com/v1/endpoint", {
        headers: {
          Authorization: "Bearer token"
        }
      });
    });

    it("should perform a GET request with query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint", {
        queryParams: {
          first: "hello"
        }
      });
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith(
        "https://api.spotify.com/v1/endpoint/?first=hello",
        {
          headers: {
            Authorization: "Bearer token"
          }
        }
      );
    });
  });

  describe("POST requests", () => {
    it("should perform a POST request with no query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint", {
        bodyParams: {
          ids: ["id1", "id2"]
        },
        method: "POST"
      });
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith("https://api.spotify.com/v1/endpoint", {
        body: JSON.stringify({
          ids: ["id1", "id2"]
        }),
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json"
        },
        method: "POST"
      });
    });

    it("should perform a POST request with query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint", {
        bodyParams: {
          ids: ["id1", "id2"]
        },
        method: "POST",
        queryParams: {
          first: "hello"
        }
      });
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith(
        "https://api.spotify.com/v1/endpoint/?first=hello",
        {
          body: JSON.stringify({
            ids: ["id1", "id2"]
          }),
          headers: {
            Authorization: "Bearer token",
            "Content-Type": "application/json"
          },
          method: "POST"
        }
      );
    });
  });

  describe("PUT requests", () => {
    it("should perform a PUT request with no query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint", {
        bodyParams: {
          ids: ["id1", "id2"]
        },
        method: "PUT"
      });
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith("https://api.spotify.com/v1/endpoint", {
        body: JSON.stringify({
          ids: ["id1", "id2"]
        }),
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json"
        },
        method: "PUT"
      });
    });

    it("should perform a PUT request with query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint", {
        bodyParams: {
          ids: ["id1", "id2"]
        },
        method: "PUT",
        queryParams: {
          first: "hello"
        }
      });
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith(
        "https://api.spotify.com/v1/endpoint/?first=hello",
        {
          body: JSON.stringify({
            ids: ["id1", "id2"]
          }),
          headers: {
            Authorization: "Bearer token",
            "Content-Type": "application/json"
          },
          method: "PUT"
        }
      );
    });
  });

  describe("DELETE requests", () => {
    it("should perform a DELETE request with no query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint", {
        method: "DELETE"
      });
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith("https://api.spotify.com/v1/endpoint", {
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      });
    });

    it("should perform a DELETE request with query parameters", () => {
      fetch.mockResponse("{}");
      performRequest("token", "/endpoint", {
        method: "DELETE",
        queryParams: {
          first: "hello"
        }
      });
      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith(
        "https://api.spotify.com/v1/endpoint/?first=hello",
        {
          headers: {
            Authorization: "Bearer token",
            "Content-Type": "application/json"
          },
          method: "DELETE"
        }
      );
    });
  });

  describe("Error handling", () => {
    it("should throw an error after a failed request (without options)", () => {
      fetch.mockResponse(
        JSON.stringify({
          message: "Resource not found",
          status: 404
        }),
        {
          status: 404
        }
      );
      return performRequest("token", "/endpoint").catch((err: Error) =>
        expect(err.message).toBe("404: Resource not found")
      );
    });

    it("should throw an error after a failed request (with options)", () => {
      fetch.mockResponse(
        JSON.stringify({
          message: "Resource not found",
          status: 404
        }),
        {
          status: 404
        }
      );
      return performRequest("token", "/endpoint", {
        queryParams: {
          first: "hello"
        }
      }).catch((err: Error) =>
        expect(err.message).toBe("404: Resource not found")
      );
    });
  });
});
