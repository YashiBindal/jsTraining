import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import reducers from "./redux/reducers/reducer";
import { Provider } from "react-redux";
import MainReduxComponent from "./redux/mainComponent";

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainReduxComponent></MainReduxComponent>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
