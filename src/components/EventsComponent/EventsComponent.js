import Layout from "Layout/Layout";
import React from "react";
import { withRouter } from "react-router-dom";
import { EventsData } from "pages/events/EventsData";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardFooter,
  Button,
} from "reactstrap";

const EventsComponent = (props) => {
  const result = EventsData.find(
    ({ id }) => id === parseInt(props.match.params.id)
  );
  return (
    <>
      <Layout>
        <section style={{ marginTop: "5rem" }} className="section section-lg ">
          <Container>
            <Row>
              <Col md="8">
                <hr className="line-info" />
                <h1>Event Details: {result.label} </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md="100" className="w-100">
                <Card>
                  <CardBody>
                    <CardText>
                      <h3>
                        1. No of participants for this event allowed is:{" "}
                        {result.participants}
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>2. Time Limit for this event: {result.timeLimit}</h3>
                    </CardText>
                    <CardText>
                      <h3>
                        3. Maximum no. of Teams allowed per institution for this
                        event: {result.NoTeams}
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>4. When : {result.Time}</h3>
                    </CardText>

                    <CardText>
                      <h3>
                        5. Other Rules: <br />
                        <ul>
                          <li>ID Card is Compulsory</li>
                          <li>
                            Minimum 4 registrations compulsory for the event to
                            be conducted
                          </li>
                          {result.rules.length ? (
                            <div>
                              {result.rules.map((rule) => (
                                <li>{rule}</li>
                              ))}
                            </div>
                          ) : (
                            ""
                          )}
                        </ul>
                      </h3>
                    </CardText>

                    <CardText>
                      <h2>
                        Note : Upload payment receipt sent to your Mail ID in
                        <a
                          href="https://forms.gle/d3omPWPNmc8dT5p16"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Google Forms link
                        </a>
                      </h2>
                    </CardText>
                  </CardBody>
                  <CardFooter className="d-flex justify-content-center flex-column">
                    <CardText>
                      <h2>Event Amount : {result.EntryFee}</h2>
                    </CardText>
                    <a
                      href={result.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="text-success">
                        Register & Make Payment
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default withRouter(EventsComponent);
