import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./sagaApp/reducers/reducers";
import rootSaga from "./sagaApp/sagas/sagaindex";
import MainSagaComponent from "./sagaApp/mainSagaComponent";

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
  <React.StrictMode>
    <Provider store={store}>
      <MainSagaComponent></MainSagaComponent>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
