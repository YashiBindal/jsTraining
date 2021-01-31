import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import ViewEmployees from "views/employee/viewEmployee";
import HomeComponent from "views/HomeComponent";
import { EditEmployee } from "../views/employee/editEmployee/index";
import LoginComponent from "../views/login/LoginComponent";
import LoginSignUpComponent from "../views/LoginSignUpComponent";
import SignUpComponent from "../views/signUp/SignUpComponent";
import SignUpResponseComponent from "../views/signUp/SignUpResponse";
import { CreateEmployee } from "./../views/employee/createEmployee/index";
const MainSagaComponent = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Switch>
        <Route exact path="/" component={LoginSignUpComponent}></Route>
        <Route exact path="/login" component={LoginComponent}></Route>

        <Route exact path="/signUp" component={SignUpComponent}></Route>
        <Route
          exact
          path="/signUpResponse"
          component={SignUpResponseComponent}
        ></Route>
        <Route exact path="/createEmp" component={CreateEmployee}></Route>
        <Route exact path="/homePage" component={HomeComponent}></Route>
        <Route exact path="/emps" component={ViewEmployees}></Route>
        <Route exact path="/editEmp" component={EditEmployee}></Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
};

export default MainSagaComponent;
