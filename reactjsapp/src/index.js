import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Calculator from "./components/calculator";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import DepartmentComponent from "./components/day14/mernSpa/DepartmentComponent";
// import EmpDeptComponent from "./../src/components/day12/EmpDeptComponent";
// import ValidationComponent from "./components/day13/validationComponent";
import { BrowserRouter } from "react-router-dom";
// import MainComponent from "./../src/routingDay14/MainComponent";
// import { createStore } from "redux";

// import reducers from "./redux/reducers/reducer";

import { Provider } from "react-redux";

// import MainReduxComponent from "./redux/mainComponent";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
// import reducer from "./sagaApp/reducers/reducers";
// import rootSaga from "./sagaApp/sagas/sagaindex";
// import MainSagaComponent from "./sagaApp/mainSagaComponent";

import MainComponent from "./FinalProject/MainComponent.jsx";
import reducer from "./FinalProject/reducers/reducers";
import rootSaga from "./FinalProject/sagas/saga";
// let store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// );
// create a SagaMiddleware instance

const appSagaMiddlewareInstance = createSagaMiddleware();

// create a parameter enhancer object that will be used to configure the REDUX DEVTOOLS for the store (optional)

const parameterEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a store object and configure reducer and SAGA middleware to it
// let store = createStore(reducer, middleware, devtools); <-- depreciated
// react 16.8+ and the redux 4.0+
let store = createStore(
  reducer,
  parameterEnhancer(applyMiddleware(appSagaMiddlewareInstance))
);

// keep the middleware running so that all actions will be monitored
appSagaMiddlewareInstance.run(rootSaga);
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <MainComponent></MainComponent>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
