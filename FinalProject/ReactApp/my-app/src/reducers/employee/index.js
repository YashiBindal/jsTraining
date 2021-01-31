export const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_LOADING_STATE": {
      return { ...state, loadingState: action.payload };
    }
    case "SET_EDIT_STATE": {
      return { ...state, editState: action.payload };
    }
    case "SET_EDIT_EMPLOYEE": {
      return { ...state, editEmployee: action.payload };
    }
    case "GET_EMPLOYEES_SUCCESS": {
      const { response, status, rowCount } = action.payload;
      return {
        ...state,
        employeeArray: response,
        status,
        rowCount,
        message: "",
      };
    }
    case "GET_EMPLOYEES_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        status,
        message: response,
      };
    }
    case "ADD_EMPLOYEE": {
      return { ...state, employee: {}, loadingState: "creating" };
    }
    case "ADD_EMPLOYEE_SUCCESS": {
      const { response, status } = action.payload;
      return {
        ...state,
        employee: response,
        status,
        message: "",
        loadingState: "created",
      };
    }
    case "ADD_EMPLOYEE_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        status,
        message: response,
        loadingState: "failed",
      };
    }
    case "UPDATE_EMPLOYEE": {
      return { ...state, employee: {}, editState: "editing" };
    }
    case "UPDATE_EMPLOYEE_SUCCESS": {
      const { response, status } = action.payload;
      return {
        ...state,
        employee: response,
        status,
        message: "",
        editState: "edited",
      };
    }
    case "UPDATE_EMPLOYEE_FAIL": {
      const { response, status } = action.payload;
      return {
        ...state,
        status,
        message: response,
        editState: "failed",
      };
    }

    case "DELETE_EMPLOYEE_SUCCESS": {
      const { response, status } = action.payload.res;
      const { empNo } = action.payload;
      const newEmpArr = state.employeeArray.filter((val) => {
        return val.EmpNo !== empNo;
      });

      return { ...state, status, message: response, employeeArray: newEmpArr };
    }
    case "DELETE_EMPLOYEE_FAIL": {
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

export default employeeReducer;
