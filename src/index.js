import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
// import News from './News';
import MainRoute from "./MainRoute";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "unistore/react";
import { store } from "./store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  <Provider store={store}>
    <MainRoute />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
