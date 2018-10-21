export default class SpotifyWebApi {
  private baseUri = "https://api.spotify.com/v1";
  private accessToken = "";

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  public async getMe() {
    const response = await fetch(`${this.baseUri}/me`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    });
    return response.json();
  }
}
