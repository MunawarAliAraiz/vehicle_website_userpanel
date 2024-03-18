import React from "react";

const List = () => {
  const tickStyle = {
    color: "var(--maroon)",
    borderRadius: "50%",
    fontSize: "24px",
    position: "relative",
    top: "4px",
    marginRight: "6px",
  };

  const listStyle = {
    fontSize: "0.9rem",
    listStyleType: "none",
    paddingLeft: "0rem", // This removes the bullet/dot
  };
  const list = {
    margin: "10px 0",
  };
  return (
    <ul style={listStyle}>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i> Post your Ad for
        Free in 3 Easy Steps
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i> Get Genuine offers
        from Verified Buyers
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i>Sell your car Fast
        at the Best Price
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i>Post your Ad for
        Free in 3 Easy Steps
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i>Get Genuine offers
        from Verified Buyers
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i>Sell your car Fast
        at the Best Price
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i>Post your Ad for
        Free in 3 Easy Steps
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i>Get Genuine offers
        from Verified Buyers
      </li>
      <li style={{ margin: "10px 0", color: "var(--grey)" }}>
        <i class="fa fa-check-circle" style={tickStyle}></i>Sell your car Fast
        at the Best Price
      </li>
    </ul>
  );
};

export default List;
