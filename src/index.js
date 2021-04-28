import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import ReduxLogger from "redux-logger";

import "./index.css";
import Navigator from "./navigation";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk, ReduxLogger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
