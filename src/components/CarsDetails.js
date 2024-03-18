import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import car1 from "../assets/car4.jpg";
import List from "../Cards/List";
const CarsDetails = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} sm={12}>
          <img src={car1} alt="" style={{ width: "100%", height: "100%" }} />
        </Col>
        <Col
          lg={6}
          sm={12}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2 className="heading">What We Offers</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.9rem",
              color: "var(--grey)",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            harum soluta minus cupiditate nihil.
          </p>
          <List />
        </Col>
      </Row>
    </Container>
  );
};

export default CarsDetails;
