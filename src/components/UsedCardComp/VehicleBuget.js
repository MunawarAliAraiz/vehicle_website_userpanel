// import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'

// const VehicleBuget = () => {
//   return (
//     <Container>
//     <Row style={{padding:"22px",margin:"3rem 0"}}>
//         <Col lg={4} md={4} sm={12} className='cars-det'>

// <p>Hyderabad</p>
// <p>Sukkar</p>
// <p>Peshawar</p>
// <p>Karachi</p>
// <p>Umerkot</p>

//         </Col>
//         <Col  lg={4} md={4} sm={12} className="cars-det">
//         <p>Hyderabad</p>
// <p>Sukkar</p>
// <p>Peshawar</p>
// <p>Karachi</p>
// <p>Umerkot</p>
//         </Col>
//         <Col  lg={4} md={4} sm={12} className="cars-det">
//         <p>Hyderabad</p>
// <p>Sukkar</p>
// <p>Peshawar</p>
// <p>Karachi</p>
// <p>Umerkot</p>
//         </Col>
//     </Row>

//     </Container>
//   )
// }

// export default VehicleBuget

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const VehicleBuget = ({ data }) => {
  return (
    <Container>
      <Row style={{ padding: "22px", margin: "3rem 0" }}>
        {data.map((columnData, index) => (
          <Col key={index} lg={4} md={4} sm={12} className="cars-det">
            {columnData.map((location, idx) => (
              <p key={idx}>{location}</p>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VehicleBuget;
