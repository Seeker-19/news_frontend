import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsRoutes from "./NewsRoutes.js";
import SignIn from "./components/Sign.js";
import toast, { Toaster } from "react-hot-toast";
import Register from "./components/Register.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { Context, server } from "./index.js";
import axios from "axios";
export default class App extends Component {
  componentDidMount() {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState === "true") {
      this.props.navigate("/");
    }
  }

  async componentDidMount() {
    this.getuser();
  }

  async getuser() {
    try {
      const { data } = await axios.get(`${server}/users/me`, {
        withCredentials: true,
      });
    

      console.log(data);

      localStorage.setItem("isAuthenticated", true);
    } catch (error) {
      console.log(error);
      localStorage.setItem("isAuthenticated", false);
      this.props.navigate("/login");
    }
  }

  render() {
    return (
      <Context.Consumer>
        {(context) => {
          const isAuthenticated =
            localStorage.getItem("isAuthenticated") === "true";
          return (
            <>
              <Routes>
                <Route
                  path="/"
                  element={
                    isAuthenticated ? (
                      <NewsRoutes navigate={this.props.navigate} />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/login"
                  element={<SignIn navigate={this.props.navigate} />}
                />
                <Route
                  path="/register"
                  element={<Register navigate={this.props.navigate} />}
                />
              </Routes>
              <Toaster />
            </>
          );
        }}
      </Context.Consumer>
    );
  }
}
