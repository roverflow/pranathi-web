import React from "react";
import Layout from "Layout/Layout";
// import { Link } from "react-router-dom";
import {
  // Button,
  // CardHeader,
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
                        <ListGroupItem> Head of Cultural Dept.</ListGroupItem>
                        <ListGroupItem> CHIEF COORDINATOR</ListGroupItem>
                        <ListGroupItem> Dept. of ISE</ListGroupItem>
                        <ListGroupItem>
                          {" "}
                          Contact Number: 9538460697{" "}
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center"></CardFooter>
                </Card>
              </Col>{" "}
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
                        <h4 className="text-uppercase">Mr. Gurumurthy</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dyswgqiiz/image/upload/v1684392481/Mr.-Gurumurthy-M_wowtse.jpg`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> COORDINATOR</ListGroupItem>
                        <ListGroupItem> Dept. of Mech</ListGroupItem>
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
                        <h4 className="text-uppercase">Mr. Ganesh C R</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dyswgqiiz/image/upload/v1684390765/sr.jpg`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> COORDINATOR</ListGroupItem>
                        <ListGroupItem> Dept. of Civil</ListGroupItem>
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
                        <h4 className="text-uppercase">Dr. Manoj Kumar</h4>
                        <hr className="line-info" />
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
                        <ListGroupItem>COORDINATOR</ListGroupItem>
                        <ListGroupItem>Dept. of CSE</ListGroupItem>
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
                        <h4 className="text-uppercase">Mr. Nagaraj A</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dyswgqiiz/image/upload/v1684409878/nagaraj_A_wxzriq.jpg`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem> COORDINATOR</ListGroupItem>
                        <ListGroupItem> Dept. of CSE</ListGroupItem>
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
                        <h4 className="text-uppercase">
                          Mr. Srinidhi Kulkarni
                        </h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dyswgqiiz/image/upload/v1684391546/Mr.-Srinidhi-Kulkarni_ho5wor.jpg`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>COORDINATOR</ListGroupItem>
                        <ListGroupItem>Dept. of CSE</ListGroupItem>
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
                        <ListGroupItem>Dept. of AIML</ListGroupItem>
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
                        <h4 className="text-uppercase">Mr. Nagesh Kumar</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dyswgqiiz/image/upload/v1684391174/nageshk_hwjw8g.jpg`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>COORDINATOR</ListGroupItem>
                        <ListGroupItem>Dept. of ECE</ListGroupItem>
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
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Convener & Sponsorship</ListGroupItem>
                        <ListGroupItem>Phone No: 8660719686</ListGroupItem>
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
                      src={require("assets/img/bitcoin.png").default}
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Thanmay Bharadwaj</h4>
                        <hr className="line-primary" />
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
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Convener & Design</ListGroupItem>
                        <ListGroupItem>Phone No: 9108517396</ListGroupItem>
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
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Design & Hospitality</ListGroupItem>
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
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Decoration and stalls</ListGroupItem>
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
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Decoration and Stalls</ListGroupItem>
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
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Documentation</ListGroupItem>
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
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Dhanush S</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={`https://res.cloudinary.com/dfz0sly3m/image/upload/v1655050252/dhanush_cej5zl.jpg`}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Video Editing</ListGroupItem>
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
                        <h4 className="text-uppercase">Sampreeth</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/sampreeth.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Publicity Dept.</ListGroupItem>
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
                        <h4 className="text-uppercase">Amrutha Manjunath</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/amrutha.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Decoration Dept.</ListGroupItem>
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
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Documentation</ListGroupItem>
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
                        <h4 className="text-uppercase">Anirudh M R</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/anirudh.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Discipline Dept.</ListGroupItem>
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
                        <h4 className="text-uppercase">Abhishek</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/abhi2.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Discipline Dept.</ListGroupItem>
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
                        <h4 className="text-uppercase">Rakshith Gowda</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/rakshithg.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Poster Design</ListGroupItem>
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
                        <h4 className="text-uppercase">Shishira S Bayari</h4>
                        <hr className="line-primary" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/shishira.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Web & Events</ListGroupItem>
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
                        <h4 className="text-uppercase">Yashwanth B S</h4>
                        <hr className="line-success" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/yash.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Publicity Dept.</ListGroupItem>
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
                        <h4 className="text-uppercase">Prerana Sathish</h4>
                        <hr className="line-info" />
                      </Col>
                      <Col className="m-3">
                        {" "}
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/members/prerana.jpg").default}
                        />{" "}
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Role :</ListGroupItem>
                        <ListGroupItem>Decoration Dept.</ListGroupItem>
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
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
};

export default Members;
