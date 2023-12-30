import React from "react";
import { createRoot } from "react-dom/client"; // Import from react-dom/client
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import './index.css'
const store = configureStore({ reducer: reducers });

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default store;
