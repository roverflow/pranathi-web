import React, { useState } from "react";
import classnames from "classnames";
import {
  FaPhoneAlt,
  FaUserAlt,
  FaMailBulk,
  FaUserGraduate,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Badge,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import { EventsData } from "pages/events/EventsData";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import Layout from "Layout/Layout";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import Footer from "components/Footer/Footer.js";

export default function Register() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [value, setValue] = React.useState(EventsData[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [usn, setUsn] = useState("");

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <div
        style={{
          display: "block",
          width: 700,
          padding: 30,
        }}
      >
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader>
          <ModalBody>Sample Modal Body Text to display...</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Okay
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <Layout>
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={
                            require("assets/img/square-purple-1.png").default
                          }
                        />
                        <CardTitle tag="h3" style={{ margin: "5px" }}>
                          Register
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": fullNameFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <FaUserAlt />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Full Name"
                              type="text"
                              onFocus={(e) => setFullNameFocus(true)}
                              onBlur={(e) => setFullNameFocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": emailFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <FaMailBulk />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={(e) => setEmailFocus(true)}
                              onBlur={(e) => setEmailFocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": passwordFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <FaPhoneAlt />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone Number"
                              type="text"
                              onFocus={(e) => setPasswordFocus(true)}
                              onBlur={(e) => setPasswordFocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": passwordFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <FaUserGraduate />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="USN"
                              type="text"
                              onFocus={(e) => setPasswordFocus(true)}
                              onBlur={(e) => setPasswordFocus(false)}
                            />
                          </InputGroup>
                          <div className="d-flex justify-content-center p-5">
                            <Autocomplete
                              style={{ color: "white" }}
                              disablePortal
                              id="combo-box-demo"
                              renderOption={(props, option) => {
                                const { label } = option;
                                return (
                                  <span
                                    {...props}
                                    style={{ backgroundColor: "purple" }}
                                  >
                                    {label}
                                  </span>
                                );
                              }}
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                              inputValue={inputValue}
                              onInputChange={(event, newInputValue) => {
                                setInputValue(newInputValue);
                              }}
                              options={EventsData}
                              groupBy={(option) => option.Category}
                              getOptionLabel={(option) => option.label}
                              sx={{ width: 300 }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Pick your Event"
                                  style={{ color: "white" }}
                                />
                              )}
                            />
                          </div>
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />I agree to the
                              {"  "}
                              <Badge
                                color="primary"
                                tag={Link}
                                to="/rules"
                                style={{ marginLeft: "3px" }}
                              >
                                Rules Mentioned
                              </Badge>
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        {/* <Button
                          className="btn-round"
                          color="primary"
                          size="lg"
                          onClick={toggle}
                        >
                          Register Now
                        </Button> */}
                        <form>
                          <script
                            src="https://checkout.razorpay.com/v1/payment-button.js"
                            data-payment_button_id="pl_JTQDQin78sqP4n"
                            async
                          >
                            {" "}
                          </script>{" "}
                        </form>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: squares1to6 }}
                />
              </Container>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
