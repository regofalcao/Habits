import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
