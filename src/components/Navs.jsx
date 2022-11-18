import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ABOUT,
  ACITIVTY,
  DONATE,
  HOME,
  LOGIN,
  MEDIA,
  REGISTER,
} from "../routes";

const Navs = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink
            href="#home"
            className="navbar-brand"
            style={{ color: "green" }}
          >
            KALPATARU
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={HOME} className="nav-link">
                Home
              </NavLink>
              <NavLink to={ABOUT} className="nav-link">
                About Us
              </NavLink>
              <NavLink to={ACITIVTY} className="nav-link">
                What We Do
              </NavLink>
              <NavLink to={DONATE} className="nav-link">
                Donate
              </NavLink>
              <NavLink to={MEDIA} className="nav-link">
                Media
              </NavLink>
              <NavLink to={LOGIN}>
                <Button
                  variant="outline-success"
                  style={{
                    marginRight: "10px",
                  }}
                >
                  Login
                </Button>{" "}
              </NavLink>
              <NavLink to={REGISTER}>
                <Button variant="success">Sign Up</Button>{" "}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
