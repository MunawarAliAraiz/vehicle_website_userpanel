import React from "react";
import {Link} from 'react-router-dom';

const VehicleSlidingCard = (props) => {
  return (
    <Link to={`/review/${props.id}`} style={{textDecoration:"none"}}>
      <div className="bike-card">
        <img src={props.image} alt={props.name} style={{ width: "12rem" }} />
        <h5 style={{ color: "var(--maroon)", fontWeight: "600" }}>
          {props.name}
        </h5>
        <p style={{ color: "green", margin: "5px" }}>{props.price}</p>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < props.rating ? "filled-star" : "empty-star"}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default VehicleSlidingCard;
