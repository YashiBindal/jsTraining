export const addUser = (user) => {
  console.log("user info created is ", user);
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const login = (cred) => {
  return {
    type: "LOGIN_USER",
    payload: cred,
  };
};
