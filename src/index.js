import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Provider } from "react-router-dom";
import { FilterProvider, CartProvider } from "./context";

import { ScrollToTop } from "./components";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <CartProvider>
        <FilterProvider>
          <ToastContainer
            closeOnClick
            theme="colored"
            position="bottom-right"
          />
          <ScrollToTop />
          <App />
        </FilterProvider>
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
