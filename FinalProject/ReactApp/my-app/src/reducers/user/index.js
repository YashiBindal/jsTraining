export const userReducer = (state = {}, action) => {
  console.log("action in reducer", action);

  switch (action.type) {
    case "ADD_USER_SUCCESS": {
      const { response, status } = action.payload;
      return {
        ...state,
        user: response,
        status,
        message: "",
        success: true,
        authenticated: false,
      };
    }
    case "ADD_USER_FAIL": {
      const { response, status } = action.payload;
      console.log(`new user is ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        user: {},
        status,
        message: response,
        success: false,
      };
    }

    case "LOGIN_SUCCESS": {
      console.log(`login success ${JSON.stringify(action.payload)}`);
      const { response, token, authenticated, status } = action.payload;
      return {
        ...state,
        message: response,
        status,
        authenticated: true,
        token,
        success: true,
      };
    }
    case "LOGIN_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        message: response,
        status,
        success: false,
        authenticated: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
