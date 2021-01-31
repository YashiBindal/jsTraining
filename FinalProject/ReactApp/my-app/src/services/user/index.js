import { instance } from "services";

export const createUser = async (user) => {
  console.log("user", user);
  try {
    let response = await instance.post(`/signup`, user, {
      "Content-Type": "application/json",
    });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error.response);

    return error.response.data;
  }
};

export const verifyUser = async (credentials) => {
  try {
    let response = await instance.post(`/login`, credentials, {
      "Content-Type": "application/json",
    });

    return response.data;
  } catch (error) {
    console.log("error", error.response);
    return error.response.data;
  }
};
