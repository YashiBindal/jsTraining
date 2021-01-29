import { combineReducers } from "redux";

// reducers functions
// pure functions accepting 'initialState' and 'action'
// as  input parameters and update state based on action received

// IMP NOTE: separate reducer function for each dispatched / output action
// we must combine all reducer functions into one 'combineReducers()' object
// so that the store can have all reducers ar once

// action.type: the 'type' from output of the 'action-creator' method
// see action.js, the addEmployee() action creator method, this return
// {type:ADD_EMPLOYEE, employee}
// action.employee, is the 'employee' payload returned by  addEmployee() action creator

export const addEmployeeReducer = (action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      // the state will be modified by adding newly added employee
      return action.employee;
    default:
      return; // original state
  }
};

// create a new reducer function that will return the newly added employee
// is a state and this employees list from the state will be shown in the view
// this reducer will also be executed on ADD_EMPLOYEE output action
// initialState is an empty array from the state
const initialState = {
  empList: [],
  currentEmp: { EmpNo: 0, EmpName: "", DeptName: "", Designation: "" },
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      // call the addEmployeeReducer() function
      // and received the newly created employee object and
      // mutate it in the state and return the list of employees from the state
      // the first parameter is 'undefined' because the employee is newly created

      //{ ...state,empList: [...state.empList, addEmployeeReducer(action)]},
      return {
        ...state,
        empList: [...state.empList, action.employee],
      };

    case "SHOW_EMPLOYEE":
      return { ...state, currentEmp: action.currentEmp };
    default:
      return state;
  }
};
// use 'combineReducers()' object from 'redux' module
// and make the listEmployeeReducer() function as reducer for the Redux application
// the 'combineReducers()' will monitor the store for any updates because of
// any React-component executing under the store, where these components are having
// subscription of this store
// each component inside the store may dispatch the action and the combineReducers()
// will monitor the action and accordingly update the store

const reducers = combineReducers({ employees: employeesReducer });

export const empListSelector = (state) => state.employees.empList;
export const currentEmpSelector = (state) => state.employees.currentEmp;

export default reducers;

// we can create single reducer constant object to update the store using
// switch case for each dispatched / output action
