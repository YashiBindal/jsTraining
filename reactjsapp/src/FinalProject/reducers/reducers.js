const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DEPARTMENTS":
      // return initial action
      return { ...state };
    case "GET_DEPARTMENTS_SUCCESS":
      // mutate the state from the received departments
      // from the response action
      return { ...state, departments: action.departments };
    case "ADD_DEPARTMENT":
      return { ...state };
    case "ADD_DEPARTMENT_SUCCESS":
      // mutate the state by adding new department in it
      console.log(
        `Received data in state in reducers = ${JSON.stringify(
          action.department
        )}`
      );
      return { ...state, department: action.department };
    case "UPDATE_DEPARTMENT":
      return { ...state };
    case "UPDATE_DEPARTMENT_SUCCESS":
      console.log(
        `Received data in reducer for update =${JSON.stringify(
          action.department
        )}`
      );
      return { ...state, department: action.department };
    case "DELETE_DEPARTMENT":
      return { ...state };
    case "DELETE_DEPARTMENT_SUCCESS":
      console.log(
        `Received data in reducer for delete =${JSON.stringify(
          action.department
        )}`
      );
      return { ...state, department: action.department };
    // case "ADD_USER":
    //   return { ...state };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        user: action.payload.response,
        status: action.payload.status,
        message: "",
        success: true,
      };
    // return { ...state, user : action.createdUser.response, status: action.createdUser.status };
    case "ADD_USER_FAIL":
      console.log(`new user is ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        user: {},
        status: action.payload.status,
        message: action.payload.response,
        success: false,
      };

    default:
      return state;
  }
};

export default reducer;
