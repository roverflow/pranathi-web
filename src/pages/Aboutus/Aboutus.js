import React from "react";
import Layout from "Layout/Layout";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";

export const Aboutus = () => {
  return (
    <>
      <Layout>
        <section style={{ marginTop: "5rem" }} className="section section-lg ">
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>About Us </h1>
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
                        Jyothy Institute of Technology under the governance of
                        Jyothy Charitable Trust which is headquartered at
                        Bengaluru mainly focuses on delivering quality education
                        that equips students for life and career. We offer
                        Undergraduate, Postgraduate and Research Programmes in
                        various disciplines. Focused teaching facilities coupled
                        with practical and forward-thinking programmes lend a
                        hand to students throughout their academic period. A
                        significant amount of emphasis is given for
                        extracurricular activities through various clubs,
                        technical chapters, sports, and cultural activities.
                      </h3>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>About Pranathi </h1>
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
                        Pranathi is JIT's inter-collegiate fest that takes place
                        annually. We have had many cultural events and
                        competitions under this label as well as unfading
                        concerts by famous bodies. In 2019, Pranathi was
                        conducted for the noble cause of rebuilding Coorg, which
                        was a victim of heavy floods. The event trended
                        #runforcoorg and was supported by the public. This event
                        remains a memorable one to this day. JIT takes pride in
                        hosting Pranathi every year with more and more students
                        from many colleges participating every year and bagging
                        prizes for their talents. It still is the most
                        anticipated event for JITians.
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
