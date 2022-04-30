import React from "react";
import Layout from "Layout/Layout";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  ListGroupItem,
  ListGroup,
  CardFooter,
  Button,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
const Rules = () => {
  return (
    <div>
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
              <Col md="100">
                <Card>
                  <CardBody>
                    <CardText>
                      <h4>1. Must be Covid-19 vaccinated (both the doses).</h4>
                    </CardText>
                    <CardText>
                      <h4>2. Please follow Covid-19 guidelines (wear a mask, carry a sanitizer).</h4>
                    </CardText>
                    <CardText>
                      <h4>3. ID Card compulsory.</h4> 
                    </CardText>
                      
                    
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
};

export default Rules;
