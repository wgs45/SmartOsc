import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/Article/article-icon.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

const Banner = () => {

    return (
    <section className="banner" id="home">
        <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Current-Page: Article</span>
                <h1><span className="wrap">Our Articles</span></h1>
                    <p>
                        Feel free to explore our articles. If you have any questions, please dont hesitate to contact us
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