import React, { Component } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { server } from "../index.js";
import axios from "axios";
import { Context } from "../index.js";
export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event,setIsAuthenticated) => {
    event.preventDefault();
    // Add your login logic here, e.g., call an authentication function
    // Example:
    // authenticateUser(this.state.login, this.state.password);
    const { name, email, password } = this.state;
    try {
      console.log(email, password);

      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      //this.context.setIsAuthenticated(true);
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      this.props.navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <Context.Consumer>
        {(context) => (
          <div className="outer">
            <div className="inner">
              <header className="signup-header">
                <h1>Login</h1>
              </header>
              <main className="signup-body">
                <form
                  onSubmit={(event) =>
                    this.handleSubmit(event, context.setIsAuthenticated)
                  }
                >
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit">Sign In</button>
                </form>
              </main>
              <footer className="signup-footer">
                <p> Don't have an account?</p>{" "}
                <Link to="/register">
                  <p className="link">Register here</p>
                </Link>
              </footer>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
