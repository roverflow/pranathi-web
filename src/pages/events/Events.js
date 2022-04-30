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
                        <h4 className="text-uppercase">Dance</h4>
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
                    <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Music</h4>
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
                    <Button className="btn-simple" color="success" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Fashion Show</h4>
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
                    <Button className="btn-simple" color="info" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">MadAds</h4>
                        <hr className="line-primary" />
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
                    <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Skit</h4>
                        <hr className="line-success" />
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
                    <Button className="btn-simple" color="success" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">StandUp Comedy</h4>
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
                    <Button className="btn-simple" color="info" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">JAM</h4>
                        <hr className="line-primary" />
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
                    <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Debate</h4>
                        <hr className="line-success" />
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
                    <Button className="btn-simple" color="success" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Dumb Charades</h4>
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
                    <Button className="btn-simple" color="info" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Quiz</h4>
                        <hr className="line-primary" />
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
                    <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Face Painting</h4>
                        <hr className="line-success" />
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
                    <Button className="btn-simple" color="success" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Collage</h4>
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
                    <Button className="btn-simple" color="info" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Creative Photography</h4>
                        <hr className="line-primary" />
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
                    <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Dubsmash</h4>
                        <hr className="line-success" />
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
                    <Button className="btn-simple" color="success" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">Treasure Hunt</h4>
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
                    <Button className="btn-simple" color="info" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">CounterStrike</h4>
                        <hr className="line-primary" />
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
                    <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
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
                        <h4 className="text-uppercase">BGMI</h4>
                        <hr className="line-success" />
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
                    <Button className="btn-simple" color="success" tag={Link} to="/register-page">
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
