import { Routes, Route } from "react-router-dom";
import News from "./components/News";
import { Component } from "react";
import Navbar from "./components/Navbar.js";
import LoadingBar from "react-top-loading-bar";
export default class NewsRoutes extends Component {
  pageSize = 20;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Navbar navigate={this.props.navigate} />
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                setProgress={this.setProgress}
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                setProgress={this.setProgress}
                country="in"
                category="business"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            }
          />

          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                country="in"
                category="health"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                country="in"
                category="science"
                pageSize={this.pageSize}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                country="in"
                category="sports"
                pageSize={this.pageSize}
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                country="in"
                category="technology"
                pageSize={this.pageSize}
              />
            }
          />
        </Routes>
      </>
    );
  }
}
