import React from "react";
// import IndexNavbar from "components/Navbars/IndexNavbar";
// import Footer from "components/Footer/Footer";
import Layout from "Layout/Layout";
import { Row, Col, Container } from "reactstrap";
import ImageCarousel from "components/Carousel/ImageCarousel";

const GalleryPage = () => {
  return (
    <>
      <div>
        <Layout>
          <section
            style={{ marginTop: "5rem" }}
            className="section section-lg "
          >
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>Gallery </h1>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>
                  <ImageCarousel></ImageCarousel>
                </Col>
              </Row>
            </Container>
          </section>
        </Layout>
      </div>
    </>
  );
};

export default GalleryPage;
