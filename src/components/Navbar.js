import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import { useRef, useState } from "react";
function Navbarr() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      expanded={expanded}
      style={{ position: "fixed", width: "100%", top: 0, zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
            src={logo}
            alt=""
            width="32px"
            style={{
              transform: "scale(2.6)",
              margin: "0 2rem",
              position: "relative",
              top: "5px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-items" navbarScroll>
            <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>
              Home
            </Nav.Link>{" "}
            {/* New Route */}
            <Nav.Link as={Link} to="/blogs" onClick={handleNavLinkClick}>
              Blogs
            </Nav.Link>{" "}
            {/* New Route */}
            <Nav.Link as={Link} to="/new-cars" onClick={handleNavLinkClick}>
              New Cars
            </Nav.Link>{" "}
            {/* Update Link to use Link */}
            <Nav.Link as={Link} to="/bikes" onClick={handleNavLinkClick}>
              Bikes
            </Nav.Link>{" "}
            {/* New Route */}
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ border: "2px solid var(--maroon)" }}
            />
            <Button
              variant=""
              style={{
                border: "2px solid var(--maroon)",
                color: "var(--maroon)",
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
