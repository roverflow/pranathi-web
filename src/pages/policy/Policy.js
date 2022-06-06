import React from "react";
import Layout from "Layout/Layout";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";

const Policy = () => {
  return (
    <>
      <Layout>
        <section style={{ marginTop: "5rem" }} className="section section-lg ">
          <Container id="terms">
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Terms and Conditions </h1>
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
                        1. Event.
                        <br /> You may only register for and attend the Event in
                        accordance with these Terms. To register for the Event,
                        you must complete the Event registration process and pay
                        any registration fee. Event registration is subject to
                        availability and may close earlier than the posted
                        deadline, as determined in our sole discretion. We may
                        also change the Event program at any time in our sole
                        discretion. You will at all times comply with the rules
                        specified on the website.
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>
                        2. Safety and Security.
                        <br /> Your safety and security is important to us. You
                        understand that you and your property may be subject to
                        a reasonable search upon entry to the Event and you may
                        be asked to provide photo identification. If you refuse
                        to participate in these security measures, we may deny
                        you entry. We also reserve the right to ask you to leave
                        the Event if your behavior causes us concern for the
                        safety or security of Event attendees. If we deny you
                        entry or require you to leave, you will not receive a
                        refund.
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>
                        3. Recordings and Your Materials.
                        <br /> You grant us the right to record, film,
                        photograph, and capture your voice and image in any
                        media at the Event (the “Recordings”). You grant to
                        Jyothy and its affiliates, agents, employees, and
                        assigns an irrevocable, nonexclusive, perpetual,
                        worldwide, royalty-free right and license to use,
                        reproduce, modify, distribute, and translate, for any
                        purpose relating to our business, all or any part of the
                        Recordings and Your Materials. We may edit the
                        Recordings and Your Materials, use them alone or
                        together with other information, and allow others to use
                        and disseminate them. To the maximum extent permitted by
                        law, you waive any moral rights you may have in the
                        Recordings and Your Materials. You represent and warrant
                        that (a) Your Materials are true and accurate to the
                        best of your knowledge, (b) you have the necessary
                        rights and permissions to grant the license in this
                        Section 4, and (c) Your Materials do not violate or
                        infringe any copyright, trademark, or other proprietary
                        rights of any person or entity.
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>
                        3. Cancellation.
                        <br /> By Us. We may cancel the Event at any time for
                        reasons including, for example, availability or
                        suitability of venue or speakers or on security, health,
                        or safety grounds, and we may deny, limit, or cancel
                        your Event registration at any time. We are not
                        responsible for any damages, direct or indirect,
                        resulting from such cancellation.we will not issue any
                        refund for any Events
                      </h3>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container id="privacy">
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Privacy and Policy </h1>
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
                        1. Processing Personal Information
                        <br /> We will only collect such Personal Information
                        that is relevant for the purposes described in this
                        Privacy Policy. We will process Your Personal
                        Information for the purposes of providing the Services,
                        including organizing the events and facilitating
                        participant networking using the Events websit. We will
                        process Your Personal Information to provide customer
                        service and other services at your request, to send You
                        information, including confirmations, invoices, and
                        other communications, as well as communicate with You
                        about promotions and other news about services offered
                        by Events. We commits to adhere to the applicable laws
                        and regulations pertaining to processing of Personal
                        Information, as well as to process Personal Information
                        in compliance with good processing practices. All
                        Pranathi personnel processing Personal Information are
                        obliged to keep such information strictly confidential.
                      </h3>
                    </CardText>
                    <CardText>
                      <h3>
                        2. Information We Collect and Sources of Information
                        <br /> Information You give to us, Technically gathered
                        information when You use our Services, Information from
                        third parties in relation to our service.
                      </h3>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container id="refund">
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Refund Policy </h1>
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
                        There will be no refund of any of the events under any
                        circumstances
                      </h3>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Policy;
