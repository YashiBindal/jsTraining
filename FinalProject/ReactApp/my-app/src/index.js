import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "../src/Components/MainComponent.jsx";
import reducer from "../src/reducers";
import rootSaga from "../src/sagas";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const appSagaMiddlewareInstance = createSagaMiddleware();

const parameterEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer,
  parameterEnhancer(applyMiddleware(appSagaMiddlewareInstance))
);

appSagaMiddlewareInstance.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
