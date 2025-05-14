import { Provider } from "./components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter> {/* for create more pages, need router */}
        <App />  {/* our entire application here */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);