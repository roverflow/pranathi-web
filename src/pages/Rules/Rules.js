import React from "react";
import Layout from "Layout/Layout";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";

const Rules = () => {
  return (
    <>
      <Layout>
        <section style={{ marginTop: "5rem" }} className="section section-lg ">
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Rules for the Event </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md="100" className="w-100">
                <Card>
                  <CardBody>
                    <CardText>
                      <h3>1. Must be Covid-19 vaccinated (both the doses).</h3>
                    </CardText>
                    <CardText>
                      <h3>
                        2. Follow Covid-19 guidelines (wear a mask, carry a
                        sanitizer).
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>3. ID Card compulsory.</h3>
                    </CardText>
                    <CardText>
                      <h3>4. You are responsible for your own belongings</h3>
                    </CardText>
                    <CardText>
                      <h3>
                        5. If four teams are not registered event ill be called
                        off.
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

export default Rules;
