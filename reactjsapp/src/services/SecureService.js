import axios from "axios";

export class SecureHttpService {
  constructor() {
    this.url = "http://localhost:9091";
  }

  createUser(user) {
    let response = axios.post(`${this.url}/api/users/create`, user, {
      "Content-Type": "application/json",
    });
    return response;
  }

  authUser(user) {
    let response = axios.post(`${this.url}/api/users/auth`, user, {
      "Content-Type": "application/json",
    });
    return response;
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
