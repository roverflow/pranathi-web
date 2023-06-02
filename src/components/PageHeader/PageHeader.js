import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Card, CardText } from "reactstrap";

export default function PageHeader() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("06/08/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
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
          <h1 className="h1-seo">
            <span className="font-face-nt">Pranathi</span>
            <br />2<span className="font-face-nt">k</span>23
          </h1>
          <h3 className="d-none d-sm-block">Ode to Euphoria</h3>
          {/* <h4>Content Coming Soon..</h4> */}
          <Button
            className="btn-round"
            color="primary"
            type="button"
            tag={Link}
            to="/events"
          >
            Register For Our Events Now!
          </Button>
          {partyTime ? (
            <h3 className="d-none d-sm-block m-5">Event Day!</h3>
          ) : (
            <div>
              <div className="d-flex flex-row m-5">
                <Card className="m-2" body>
                  <CardText>
                    <h3>{days}</h3>
                    Days
                  </CardText>
                </Card>
                <Card className="m-2" body>
                  <CardText>
                    <h3>{hours}</h3> hours
                  </CardText>
                </Card>
                <Card className="m-2" body>
                  <CardText>
                    <h3>{minutes}</h3> Min
                  </CardText>
                </Card>
                <Card className="m-2" body>
                  <CardText>
                    <h3>{seconds}</h3> Sec
                  </CardText>
                </Card>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
