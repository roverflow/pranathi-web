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
                        3. No of Teams allowed per institution for this event:
                        {result.NoTeams}
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>4. Other Rules: {result.rules}</h3>
                    </CardText>
                  </CardBody>
                  <CardFooter className="d-flex justify-content-center flex-column">
                    <CardText>
                      <h2>Event Amount : 100</h2>
                    </CardText>
                    <Button className="text-success">
                      Register & Make Payment
                    </Button>
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
