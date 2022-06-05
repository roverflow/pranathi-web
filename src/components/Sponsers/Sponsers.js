import React from "react";
import { Container, CardText, Card, CardBody, Row, Col } from "reactstrap";
import { SponserData } from "./SponsorData";
import "./sponsor.css";

const Sponsers = () => {
  return (
    <section style={{ marginTop: "5rem" }} className="section section-lg ">
      <Container>
        <Row>
          <Col md="4">
            <hr className="line-info" />
            <h1>Our Sponsors </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {SponserData.map((image) => (
            <Col md="4" className="gridx">
              <div className="cardx">
                <img src={image.img} alt=".."></img>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Sponsers;
