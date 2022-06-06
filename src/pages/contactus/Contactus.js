import React from "react";
import Layout from "Layout/Layout";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";

const Contactus = () => {
  return (
    <>
      <Layout>
        <section style={{ marginTop: "5rem" }} className="section section-lg ">
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Contact Us at </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md="100" className="w-100">
                <Card>
                  <CardBody>
                    <CardText>
                      <h3>
                        Mail ID :{" "}
                        <a href="mailto:pranathi@jyothyit.ac.in">
                          pranathi@jyothyit.ac.in
                        </a>
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>
                        PhoneNo : <a href="tel:+919620403128">+919620403128</a>
                      </h3>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Contactus;
