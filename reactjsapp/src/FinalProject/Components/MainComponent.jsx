import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import LoginComponent from "../views/login/LoginComponent";
import LoginSignUpComponent from "../views/LoginSignUpComponent";
import SignUpComponent from "../views/signUp/SignUpComponent";
import SignUpResponseComponent from "../views/signUp/SignUpResponse";

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
        {/* <Route exact path="/createEmp" component={CreateEmpComponent}></Route>
        <Route exact path="/createEmp" component={CreateEmpComponent}></Route>
        <Route exact path="/editEmpNo/:id" component={EditEmpComponent}></Route> */}

        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
};

export default MainSagaComponent;
