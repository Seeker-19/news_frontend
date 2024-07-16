import React, { Component } from "react";

export class Term extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div>
          <div className="card" style={{ width: "20rem" }}>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <img
              src={
                !imgUrl
                  ? "https://images.indianexpress.com/2023/04/What-is-Google-DeepMind.jpg?w=640"
                  : imgUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}... </h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>

              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Term;
