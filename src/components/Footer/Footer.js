import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            {/* <h3 className="title">Pranathi•2k22</h3> */}
            <h3 className="h1-seo font-face-nt">Pranathi•2k22</h3>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/events" tag={Link}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/events" tag={Link}>
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Gallerypage" tag={Link}>
                  Gallery
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/policy" tag={Link}>
                  Terms and Conditions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/policy" tag={Link}>
                  Privacy and Policy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/policy" tag={Link}>
                  Refund Policy
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.instagram.com/jyothyitofficial/"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://in.linkedin.com/school/jyothyit/"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
