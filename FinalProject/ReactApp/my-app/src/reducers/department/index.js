export const departmentReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DEPARTMENTS_SUCCESS": {
      const { response, status, rowCount } = action.payload;
      return {
        ...state,
        departmentArray: response,
        status,
        rowCount,
        message: "",
      };
    }
    case "GET_DEPARTMENTS_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        status,
        message: response,
      };
    }

    case "ADD_DEPARTMENT_SUCCESS": {
      const { response, status } = action.payload;
      return { ...state, department: response, status, message: "" };
    }
    case "ADD_DEPARTMENT_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        status,
        message: response,
      };
    }

    case "UPDATE_DEPARTMENT_SUCCESS": {
      const { response, status } = action.payload;
      return { ...state, department: response, status, message: "" };
    }
    case "UPDATE_DEPARTMENT_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        status,
        message: response,
      };
    }

    case "DELETE_DEPARTMENT_SUCCESS": {
      const { response, status } = action.payload;
      return { ...state, status, message: response };
    }
    case "DELETE_DEPARTMENT_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        status,
        message: response,
      };
    }
    default:
      return state;
  }
};

export default departmentReducer;
