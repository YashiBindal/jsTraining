import { combineReducers } from "redux";
import { employeeReducer } from "./employee/index";
import { departmentReducer } from "./department/index";
import { userReducer } from "./user";

export const reducer = combineReducers({
  departments: departmentReducer,
  employees: employeeReducer,
  users: userReducer,
});

export default reducer;
