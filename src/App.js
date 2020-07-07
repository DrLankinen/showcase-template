import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ReactGA from "react-ga";
import { txts, showVideoBackground } from "./utils/Config";
import Onboarding from "./components/Onboarding";

// const video = require("./assets/video.mp4");
const image = require("./assets/image.jpg");

function App() {
  useEffect(() => {
    ReactGA.initialize("");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Container fluid>
      <Row>
        {/*
        <video style={styles.video}
          autoPlay
          loop
          muted
          preload="auto"
          src={video}
        />
        */}
        <img alt="background" style={styles.video} src={image} />
        <p style={styles.title}>
          <span style={{ color: "white" }}>{txts.title}</span>
        </p>
      </Row>
      <Row style={styles.onboardingSection}>
        <Col xs={3} />
        <Col xs={6} style={{ textAlign: "center" }}>
          <Onboarding />
        </Col>
        <Col xs={3} />
      </Row>
      <Row style={styles.threeEmojisSection}>
        <Col xs={4}>
          <div style={styles.centerDiv}>
            <p style={styles.stepsText}>
              <span>{txts.firstEmoji}</span>
              <br />
              <br />
              {txts.firstSectionContent}
            </p>
          </div>
        </Col>
        <Col xs={4}>
          <div style={styles.centerDiv}>
            <p style={styles.stepsText}>
              <span>{txts.secondEmoji}</span>
              <br />
              <br />
              {txts.secondSectionContent}
            </p>
          </div>
        </Col>
        <Col xs={4}>
          <div style={styles.centerDiv}>
            <p style={styles.stepsText}>
              <span>{txts.thirdEmoji}</span>
              <br />
              <br />
              {txts.thirdSectionContent}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  video: {
    objectFit: "cover",
    filter: "brightness(80%)",
    width: "100%",
    maxHeight: 800,
  },
  title: {
    textAlign: "center",
    fontSize: "4vw",
    fontWeight: 900,
    position: "absolute",
    top: 250,
    left: 0,
    width: "100%",
  },
  onboardingSection: {
    minHeight: 200,
    alignItems: "center",
    backgroundColor: "tomato",
  },
  threeEmojisSection: {
    height: 500,
    alignItems: "center",
  },
  centerDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  stepsText: {
    width: 250,
    fontSize: "150%",
    textAlign: "center",
  },
  mobileStepsText: {
    width: 250,
    fontSize: "140%",
    textAlign: "center",
  },
  subheaderText: {
    color: "black",
    fontSize: "180%",
    padding: 20,
    borderBottom: "2px solid #FF8B7B",
  },
};

export default App;
