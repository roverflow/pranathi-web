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
// import { EventsData } from "./EventsData";
// import Footer from "components/Footer/Footer";

const Members = () => {
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
                <h1>Faculty Members </h1>
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
                        <h4 className="text-uppercase">Keerthana B</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> Contact Number: 9620403128</ListGroupItem>
                        <ListGroupItem> Assigned Wok: Convener & Decoration </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    
                  </CardFooter>
                </Card>
              </Col>
              </Row>
            
            </Container>
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Our Core Members </h1>
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
                        <h4 className="text-uppercase">Keerthana B</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> Contact Number: 9620403128</ListGroupItem>
                        <ListGroupItem> Assigned Wok: Convener & Decoration </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Praveena</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Contact Number: 7204556446</ListGroupItem>
                        {/* <ListGroupItem></ListGroupItem> */}
                        <ListGroupItem>Assigned Work: Convener & Stalls</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="success" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Abhishek Bharadwaj</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Events & Security</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="info" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Yashas G</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Publicity & Photography</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Rakesh S</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Publicity & Photography</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="success" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Megha Pavan Kumar</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Events & Hospitality</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="info" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Nidhisha D Rao</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Events & Hospitality</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Syed Nahid</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Events & Security</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="success" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Chetan K</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Publicity & Hospitality</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="info" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Sanjay</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Hygiene Maintenance</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Thanmay Bharadwaj J S</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Design & Publicity</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="success" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Inchara J A</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Decoration & Design</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="info" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Sanjana Harish</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Hospitality/Hygiene & Events</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Harshith Gowda</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Security</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="success" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Varun Gowda</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Security</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="info" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Krutarth M</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Security & Stalls</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="primary" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Vinay M</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Tech & Hygiene</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="success" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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
                        <h4 className="text-uppercase">Vaibhavi S</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Tech & Decoration</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="success" tag={Link} to="/register-page">
                      Register
                    </Button> */}
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

export default Members;
