import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo font-face-nt">Pranathi 2k22</h1>
          <h3 className="d-none d-sm-block">
            Sit back while we create the experience of a lifetime
          </h3>
          <h4>Content Coming Soon..</h4>
        </div>
      </Container>
    </div>
  );
}
