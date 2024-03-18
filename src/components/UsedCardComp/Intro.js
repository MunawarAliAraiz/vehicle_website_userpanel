import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Intro = (props) => {
  return (
    <header>
      <Container className="bg-red">
        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              className="port-head "
              style={{
                textAlign: "center",

                fontWeight: "800",
                color: "var(--white)",
                margin: "0.4rem 0",
              }}
            >
              Find Used <span>{props.vehicle}</span> In Pakistan
            </h1>
            <h6
              style={{
                textAlign: "center",
                color: "var(--lightgrey)",
              }}
            >
              {props.text}
            </h6>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img
              src={props.image}
              alt=""
              style={{ width: "90%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Intro;
