import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/banner-icon1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    return (
    <section className="banner" id="home">
        <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Current-Page: Home</span>
                <h1><span className="wrap">Your Trusted Digital Partner</span></h1>
                    <p>
                        Helping you to grow business and create impact using digital technology.
                    </p>
                    <HashLink to = "/connect">
                        <button>Contact Us<ArrowRightCircle size={25} /></button>
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