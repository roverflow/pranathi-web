import React from "react";
import Layout from "Layout/Layout";
import {
  Button,
  Card,
  //   CardHeader,
  CardBody,
  CardFooter,
  //   CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { EventsData } from "./EventsData";
// import Footer from "components/Footer/Footer";

const Events = () => {
  return (
    <div>
      <Layout>
        <section style={{ marginTop: "5rem" }} className="section section-lg ">
          {/* <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          /> */}
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Pick Your Event </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  {/* <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png").default}
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Dancing</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Entry Fee:</ListGroupItem>
                        <ListGroupItem>100</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  {/* <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png").default}
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Singing</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Entry Fee:</ListGroupItem>
                        <ListGroupItem>100</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  {/* <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png").default}
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Bright Coin</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Entry Fee:</ListGroupItem>
                        <ListGroupItem>300</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  {/* <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png").default}
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Bright Coin</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Entry Fee:</ListGroupItem>
                        <ListGroupItem>300</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
};

export default Events;
