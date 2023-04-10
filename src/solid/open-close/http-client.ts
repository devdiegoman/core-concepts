import axios from "axios";

export class HttpClient {
  constructor() {}

  async get(url: string) {
    // Here you can remove axios by fetch 
    const { data, status } = await axios.get(url);
    return { data, status };
  }

  public async getUtl(): Promise<boolean> {
    return false;
  }
}
