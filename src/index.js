import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import { Provider } from "react-redux";
import { myReducer } from "./reducers";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const depo = createStore(
  myReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <Provider store={depo}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
