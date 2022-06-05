import React from "react";
import Layout from "Layout/Layout";
import { Link } from "react-router-dom";
import {
  Button,
  CardHeader,
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
                      className="rounded-circle"
                      src={require("assets/img/bitcoin.png").default}
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Dr. Kishore G R</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/kishoresir.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> CHIEF COORDINATOR</ListGroupItem>
                        <ListGroupItem>
                          {" "}
                          Contact Number: 9538460697{" "}
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
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
                        <h4 className="text-uppercase">Dr. Manoj Kumar M</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/manojsir.jpeg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> CHIEF COORDINATOR</ListGroupItem>
                        <ListGroupItem>
                          {" "}
                          Contact Number: 9880210123{" "}
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
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
                        <h4 className="text-uppercase">Mr. Rakesh B K</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/rakeshsir.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>COORDINATOR</ListGroupItem>
                        {/* <ListGroupItem> Contact Number: 9538460697 </ListGroupItem> */}
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
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
                        <h4 className="text-uppercase">Mr. Madhukar</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={
                            require("assets/members/madhukarsir.jpg").default
                          }
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> COORDINATOR</ListGroupItem>
                        {/* <ListGroupItem> Contact Number: 9538460697 </ListGroupItem> */}
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>
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
                        <h4 className="text-uppercase">Ms. Deepthi Das</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={
                            require("assets/members/deepthidasmaam.jpg").default
                          }
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>COORDINATOR</ListGroupItem>
                        {/* <ListGroupItem> Contact Number: 9538460697 </ListGroupItem> */}
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654444962/keerthana_qgsfvm.png`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>
                          {" "}
                          Contact Number: 9620403128
                        </ListGroupItem>
                        <ListGroupItem>
                          {" "}
                          Assigned Work: Convener & Decoration{" "}
                        </ListGroupItem>
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/praveena.jpeg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>
                          Contact Number: 8660719686
                        </ListGroupItem>
                        {/* <ListGroupItem></ListGroupItem> */}
                        <ListGroupItem>
                          Assigned Work: Convener & Sponsorship
                        </ListGroupItem>
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/abhi.jpg").default}
                        />{" "}
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/yashas.jpg").default}
                        />{" "}
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654444974/rakesh_ptm42m.png`}
                        />{" "}
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/megha.jpeg").default}
                        />{" "}
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
                        <h4 className="text-uppercase">Nidhisha Rao</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/nidhisha.jpeg").default}
                        />{" "}
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/nahid.jpeg").default}
                        />{" "}
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
                        <h4 className="text-uppercase">K Chethan</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654444962/cheatan_tog3vk.png`}
                        />{" "}
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
                        <h4 className="text-uppercase">P Sanjay</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/sanjay.jpeg").default}
                        />{" "}
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
                        <h4 className="text-uppercase">
                          Thanmay Bharadwaj J S
                        </h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654444968/thanmay_lqlkug.jpg`}
                        />{" "}
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

                  </CardHeader> */}
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Inchara J A</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/inchara.jpeg").default}
                        />{" "}
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/sanjana.JPG").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Hospitality & Events</ListGroupItem>
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
                        <h4 className="text-uppercase">Harshith Gowda S</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654445106/harshith_xdqzh4.jpg`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Stalls and Sponsorship</ListGroupItem>
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654444970/varun_xd1kuc.png`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Security and Stalls</ListGroupItem>
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
                        <h4 className="text-uppercase">Krutharth M</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/krutharth.jpg").default}
                        />{" "}
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
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654444968/Vinay_jy2o4p.png`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Tech & Hospitality</ListGroupItem>
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
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Vaibhavi S</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1654444970/viab_tlqv8l.png`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Assigned Work:</ListGroupItem>
                        <ListGroupItem>Tech & Events</ListGroupItem>
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
