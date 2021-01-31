import axios from "axios";

export class SecureHttpService {
  constructor() {
    this.url = "http://localhost:9091";
  }

  async createUser(user) {
    try {
      let response = await axios.post(`${this.url}/api/users/create`, user, {
        "Content-Type": "application/json",
      });
      return response.data;
    } catch (error) {
      console.log("error", error.response);
      return error.response.data;
    }
  }

  async authUser(user) {
    try {
      let response = await axios.post(`${this.url}/api/users/auth`, user, {
        "Content-Type": "application/json",
      });
      return response.data;
    } catch (error) {
      console.log("error", error.response);
      return error.response.data;
    }
  }

  getData(token) {
    let response = axios.get(`${this.url}/api/depts/all`, {
      headers: {
        AUTHORIZATION: `Bearer ${token}`,
      },
    });
    return response;
  }
}
