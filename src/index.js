import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createContext } from "react";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, useNavigate } from "react-router-dom";

export const Context = createContext();

export const server = "https://mynewsapp-wmcb.onrender.com/api/v1";
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <App navigate={navigate} />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppWrapper />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
