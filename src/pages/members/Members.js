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

const Members = () => {
  return (
    <div>
      <Layout>
        <section style={{ marginTop: "5rem" }} className="section section-lg ">
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Our Core Members</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md="4">
                <Card>
                  <CardBody>
                    img
                    <CardText>name number</CardText>
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

export default Members;
