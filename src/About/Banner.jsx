import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from  "../assets/images/About/About.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

const Banner = () => {

    return (
    <section className="banner" id="solutions">
        <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Current-Page: About us</span>
                <h1><span className="wrap">About us & Clients</span></h1>
                    <p>
                    Democratizing Growth Hacking with Trusted Digital Transformation Partner.
                    </p>
                    <HashLink to = "#">
                        <button>Learn More<ArrowRightCircle size={25} /></button>
                    </HashLink>
                </div>}
            </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            </Col>
        </Row>
        </Container>
    </section>
    )
}

export default Banner