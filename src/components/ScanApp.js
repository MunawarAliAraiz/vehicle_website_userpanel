import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import scan from "../assets/scan.svg";
import mobile from "../assets/app4.jpg";

import app1 from "../assets/app1.svg";
import app2 from "../assets/app2.svg";
import app3 from "../assets/app3.svg";

const ScanApp = () => {
  return (
    <Container>
      <Row style={{ padding: "5rem 0" }}>
        <Col lg={7} md={6} sm={12}>
          <h4 style={{ fontWeight: "600", color: "var(--maroon)" }}>
            Get The PakWheels App
          </h4>
          <p
            style={{
              fontWeight: "300",
              color: "var(--grey)",
              fontSize: "12px",
            }}
          >
            Buy & Sell Cars, Bikes and Auto Parts faster and better using our
            App
          </p>
          <Row style={{ display: "flex" }}>
            <img src={app1} alt="" style={{ width: "11rem", height: "3rem" }} />
            <img src={app2} alt="" style={{ width: "11rem", height: "3rem" }} />
            <img src={app3} alt="" style={{ width: "11rem", height: "3rem" }} />
          </Row>
        </Col>
        <Col lg={5} md={6} sm={12}>
          <img src={scan} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default ScanApp;
