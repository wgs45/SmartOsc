import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import navIcon4 from '../assets/images/nav-icon4.svg';
import navIcon5 from '../assets/images/nav-icon5.svg';
import logo from '../assets/images/logo-icon1.png';

const Footer = () => {
    return (
        <footer className = "footer" id = "info">
            <Container>
                <Row className = "align-items-center">
                    <Col size = {12} sm = {6}>
                    <Navbar.Brand href="/">
					    <img src = {logo} alt = "SmartOsc Logo" />
				    </Navbar.Brand>
                    </Col>
                    <Col size = {12} sm = {6} className = "text-center text-sm-end">
                        <div className = "social-icon">
                            <a href = ""><img src = {navIcon4} alt = "Icon" /></a>
                            <a href = ""><img src = {navIcon5} alt = "Icon" /></a>
                            <a href = ""><img src = {navIcon3} alt = "Icon" /></a>
                            <a href = ""><img src = {navIcon1} alt = "Icon" /></a>
                        </div>
                        <p>2023 SmartOSC Indonesia All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer