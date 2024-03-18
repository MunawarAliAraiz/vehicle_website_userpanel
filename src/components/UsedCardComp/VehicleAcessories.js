import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const VehicleAccessories = ({ logos }) => {
  return (
    <Container>
      <h2 className="heading">Auto Store Car Parts & Accessories</h2>
      <Row>
        <Col
          lg={12}
          className="veh-access-categ"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="veh-access-box">
              <img src={logo.image} alt={logo.alt} />
              <h6 style={{ color: "var(--grey)" }}>{logo.title}</h6>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleAccessories;
