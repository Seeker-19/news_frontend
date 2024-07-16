import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../index.js";
import toast from "react-hot-toast";
import { Context } from "../index.js";
export default class Navbar extends Component {
  logoutHandler = async (setIsAuthenticated) => {
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged out successfully");
      setIsAuthenticated(false);
      localStorage.setItem("isAuthenticated", false);
      this.props.navigate("/login");

      //setUser({});
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
    }
  };
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  NewsApp
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="grid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/business">
                          business
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">
                          entertainment
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/general">
                          general
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/health">
                          health
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/science">
                          {" "}
                          science
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/sports">
                          sports
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/technology">
                          technology
                        </Link>
                      </li>
                    </ul>
                    <button
                      className="btndf"
                      onClick={() =>
                        this.logoutHandler(context.setIsAuthenticated)
                      }
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
