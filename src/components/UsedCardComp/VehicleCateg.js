import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const VehicleCateg = ({ images }) => {
  return (
    <Container>
      <Row style={{ margin: "3rem 0" }}>
        <Col
          lg={12}
          className="cars-logo-categ"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="cars-logo-box">
              <img src={image} alt="" />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleCateg;
