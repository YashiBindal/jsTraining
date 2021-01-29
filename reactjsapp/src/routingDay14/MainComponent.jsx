import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ListDeptComponent from "./ListDeptComponent";
import ListEmpComponent from "./ListEmpComponent";
import HomeComponent from "./HomeComponent";
import CreateDeptComponent from "./CreateDeptComponent";
import CreateEmpComponent from "./CreateEmpComponent";
import EditDeptComponent from "./EditDeptComponent";
import EditEmpComponent from "./EditEmpComponent";
import DeptDeleteComponent from "./DeptDeleteComponent";
import EmpDeleteComponent from "./EmpDeleteComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/"></Link>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/empList" component={ListEmpComponent}></Route>

          <Route exact path="/deptList" component={ListDeptComponent}></Route>
          <Route
            exact
            path="/createDept"
            component={CreateDeptComponent}
          ></Route>
          <Route exact path="/createEmp" component={CreateEmpComponent}></Route>
          <Route exact path="/createEmp" component={CreateEmpComponent}></Route>
          <Route
            exact
            path="/editEmpNo/:id"
            component={EditEmpComponent}
          ></Route>
          <Route
            exact
            path="/editDeptNo/:id"
            render={(props) => <EditDeptComponent {...props} />}
          ></Route>
          <Route
            exact
            path="/deleteEmpNo/:id"
            render={(props) => <EmpDeleteComponent {...props} />}
          ></Route>
          <Route
            exact
            path="/deleteDeptNo/:id"
            component={DeptDeleteComponent}
          ></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default MainComponent;
