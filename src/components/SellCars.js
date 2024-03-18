import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SellCars = () => {
  return (
    <Container className="sellcars-con">
      <Row style={{ margin: "7rem 0" }}>
        <Col
          lg={4}
          md={4}
          sm={12}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1
            className="port-head"
            style={{
              textAlign: "center",
              fontSize: "2.7rem",
              fontWeight: "800",
              color: "var(--darkred)",
            }}
          >
            Sell Your Car & Get the Best Price
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.9rem",

              color: "var(--grey)",
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </Col>
        <Col
          lg={4}
          md={4}
          sm={12}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1
            className="port-head"
            style={{
              textAlign: "center",
              fontSize: "1.6rem",
              fontWeight: "800",
              color: "var(--peach)",
            }}
          >
            <span>01</span>Post your Ad on CarZone
          </h1>
          <hr style={{ width: "30%", margin: "auto" }} />
          <ul
            style={{
              fontSize: "0.9rem",

              color: "var(--grey)",
            }}
          >
            <li>Post your Ad for Free in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your car Fast at the Best Price</li>
          </ul>
        </Col>
        <Col
          lg={4}
          md={4}
          sm={12}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1
            className="port-head"
            style={{
              textAlign: "center",
              fontSize: "1.6rem",
              fontWeight: "800",
              color: "var(--peach)",
            }}
          >
            {" "}
            <span>02</span>Find Used Cars In Pakistan
          </h1>
          <hr style={{ width: "30%", margin: "auto" }} />

          <ul
            style={{
              fontSize: "0.9rem",

              color: "var(--grey)",
              listStyle: "none",
            }}
          >
            <li>Post your Ad for Free in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your car Fast at the Best Price</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SellCars;
