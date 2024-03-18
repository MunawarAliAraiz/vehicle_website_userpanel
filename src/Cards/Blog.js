import React from "react";
import { Row } from "react-bootstrap";

const Blog = (props) => {
  return (
    <Row>
      <div
        className="blog-det"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="left-blog-det">
          <h5
            style={{
              fontSize: "1.2rem",

              color: "var(--darkred)",
            }}
          >
            {props.head}
          </h5>
          <p
            style={{
              fontSize: "0.9rem",

              color: "var(--grey)",
            }}
          >
            {props.det}
          </p>
        </div>
        <div className="right-blog-det">
          <img src={props.image} alt="" />
        </div>
      </div>
    </Row>
  );
};

export default Blog;
