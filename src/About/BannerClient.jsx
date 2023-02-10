import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from  "../assets/images/About/Clients.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

const BannerClient = () => {

    return (
    <section className="banner" id="solutions">
        <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">About Clients</span>
                <h1><span className="wrap">Our Portfolio</span></h1>
                    <p>
                    Managed more than 1,000+ projects, hear out our worldwide clients story about SmartOSC. Find out more in our case study
                    </p>
                    <HashLink to = "#">
                        <button>Case Study<ArrowRightCircle size={25} /></button>
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

export default BannerClient