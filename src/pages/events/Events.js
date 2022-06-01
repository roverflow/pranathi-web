import React from "react";
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
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
import {
  EventsDataDance,
  EventsDataFinearts,
  EventsDataGaming,
  EventsDataLiterary,
  EventsDataMusic,
  EventsDataTheater,
} from "./EventsData";
// import Footer from "components/Footer/Footer";

const Events = () => {
  return (
    <>
      <div>
        <Layout>
          <section style={{ marginTop: "5rem" }} className="section section-lg">
            {/* <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          /> */}
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>Dance </h1>
                </Col>
              </Row>
              <Row>
                {EventsDataDance.map((data) => (
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
                            <h4 className="text-uppercase">{data.label}</h4>
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
                        <Button
                          className="btn-simple"
                          color="primary"
                          tag={Link}
                          to={"/event/" + data.id}
                        >
                          Register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>Music </h1>
                </Col>
              </Row>
              <Row>
                {EventsDataMusic.map((music) => (
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
                            <h4 className="text-uppercase">{music.label}</h4>
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
                        <Button
                          className="btn-simple"
                          color="success"
                          tag={Link}
                          to={"/event/" + music.id}
                        >
                          Register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>Theatre </h1>
                </Col>
              </Row>
              <Row>
                {EventsDataTheater.map((Theatre) => (
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
                            <h4 className="text-uppercase">{Theatre.label}</h4>
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
                        <Button
                          className="btn-simple"
                          color="info"
                          tag={Link}
                          to={"/event/" + Theatre.id}
                        >
                          Register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>Literary </h1>
                </Col>
              </Row>
              <Row>
                {EventsDataLiterary.map((data) => (
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
                            <h4 className="text-uppercase">{data.label}</h4>
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
                        <Button
                          className="btn-simple"
                          color="primary"
                          tag={Link}
                          to={"/event/" + data.id}
                        >
                          Register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>FineArts </h1>
                </Col>
              </Row>
              <Row>
                {EventsDataFinearts.map((data) => (
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
                            <h4 className="text-uppercase">{data.label}</h4>
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
                        <Button
                          className="btn-simple"
                          color="success"
                          tag={Link}
                          to={"/event/" + data.id}
                        >
                          Register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>Gaming </h1>
                </Col>
              </Row>
              <Row>
                {EventsDataGaming.map((data) => (
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
                            <h4 className="text-uppercase">{data.label}</h4>
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
                        <Button
                          className="btn-simple"
                          color="info"
                          tag={Link}
                          to={"/event/" + data.id}
                        >
                          Register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default Events;
