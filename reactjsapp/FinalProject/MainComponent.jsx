import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import LoginSignUpComponent from "./views/LoginSignUpComponent";

const MainSagaComponent = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Switch>
        <Route exact path="/" component={LoginSignUpComponent}></Route>
        <Route exact path="/login" component={ListEmpComponent}></Route>

        <Route exact path="/signup" component={ListDeptComponent}></Route>
        <Route exact path="/createDept" component={CreateDeptComponent}></Route>
        <Route exact path="/createEmp" component={CreateEmpComponent}></Route>
        <Route exact path="/createEmp" component={CreateEmpComponent}></Route>
        <Route exact path="/editEmpNo/:id" component={EditEmpComponent}></Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
};

export default MainSagaComponent;
