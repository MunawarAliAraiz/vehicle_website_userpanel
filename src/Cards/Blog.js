import React from "react";
import { Row } from "react-bootstrap";
import {Link} from 'react-router-dom';


const Blog = (props) => {
  return (
    <Link to={`/blog/${props.id}`} style={{textDecoration:"none"}}>
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
    </Link>
  );
};

export default Blog;
