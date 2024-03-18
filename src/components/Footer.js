
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer style={{backgroundColor:"var(--maroon)"}}>
    <div className="footer-con" style={{backgroundColor:"var(--peach)"}}>
      <Container >
        <Row>
            <Col lg={3} md={6} sm={12}>
            <img src={logo} alt="" width="32px" style={{transform: "scale(2.8)",margin:"0 2rem",position:"relative",bottom:"1px"}}/>
                  {/* <p style={{color:"var(--lightgrey"}}>Lorem ipsum dolor sit.</p> */}
            </Col>
            <Col  lg={3} md={6} sm={12} style={{color:"white"}}>
                <h5><b>CarZone</b></h5>
                <ul style={{
      
      fontSize:"0.9rem",
      listStyle:"none",
      paddingLeft:"0px"
     
     }}>
      <li>New Cars</li>
      <li>Used Cars</li>
      <li>Blogs</li>
      <li>Bikes</li>

     </ul>

            </Col>
        
            <Col  lg={3} md={6} sm={12} style={{color:"white"}}>
                <h5><b>Offers</b></h5>
                <ul style={{
      
      fontSize:"0.9rem",
      listStyle:"none",
      paddingLeft:"0px"
     
     }}>
      <li>Scan App</li>
      <li>Details</li>
      <li>Bikes</li>
      

     </ul>
            </Col>
           
            
            <Col  lg={3} md={6} sm={12} style={{color:"white"}}>
                <h5><b>Visit Us</b></h5>
           <div className="logo-social-media">
<FaFacebook style={{background:"var(--maroon",color:"var(--white)",fontSize:"33px",borderRadius:"50%",marginRight:"4px",padding:"6px"}}/>

<FaInstagram style={{background:"var(--maroon",color:"var(--white)",fontSize:"33px",borderRadius:"50%",marginRight:"4px",padding:"6px"}}/>

<FaYoutube style={{background:"var(--maroon",color:"var(--white)",fontSize:"33px",borderRadius:"50%",marginRight:"4px",padding:"6px"}}/>

<FaWhatsapp style={{background:"var(--maroon",color:"var(--white)",fontSize:"33px",borderRadius:"50%",marginRight:"4px",padding:"6px"}}/>
           </div>
            </Col>
            

        </Row>
      </Container>
    </div>
      <p style={{color:"white",marginBottom:"0px",textAlign:"center",fontSize:"16px",fontWeight:"500",backgroundColor:"var(--maroon"}}>Copyright © 2003 - 2024 CarZone(Pvt) Ltd. - All Rights Reserved.</p>
 
</footer>)
}

export default Footer
