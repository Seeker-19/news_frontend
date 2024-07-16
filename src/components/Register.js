import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../index.js";
import toast from "react-hot-toast";
import { Context } from "../index.js";
export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event, setIsAuthenticated) => {
    event.preventDefault();

    const { name, email, password } = this.state;

    try {
      console.log(name, email, password);

      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
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
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      this.props.navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Context.Consumer>
        {(context) => (
          <div className="outer">
            <div className="inner">
              <header className="signup-header">
                <h1>Register</h1>
              </header>
              <main className="signup-body">
                <form
                  onSubmit={(event) =>
                    this.handleSubmit(event, context.setIsAuthenticated)
                  }
                >
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
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
                  <button type="submit">Register</button>
                </form>
              </main>
              <footer className="signup-footer">
                <p> Already have an account?</p>{" "}
                <Link to="/login">
                  <p className="link">Login here</p>
                </Link>
              </footer>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
