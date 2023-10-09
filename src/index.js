import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import TodoApp from "./Components/TodoApp";
import TodoAppContainer from "./Redux/Containers/TodoAppContainer";
import HomePage from "./Pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
