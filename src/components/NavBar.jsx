import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import navIcon4 from '../assets/images/nav-icon4.svg';
import navIcon5 from '../assets/images/nav-icon5.svg';
import logo from '../assets/images/logo-icon1.png';

import { HashLink } from 'react-router-hash-link';

const NavBar = () => {

	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
	const onScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}

	window.addEventListener("scroll", onScroll);

	return () => window.removeEventListener("scroll", onScroll);
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	}

	return (
		<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="/">
					<img src = {logo} alt = "SmartOsc Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
						</Navbar.Toggle>
							<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto">
							<Nav.Link href="/services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
							<Nav.Link href="/solutions" className={activeLink === 'solutions' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('solutions')}>Solutions</Nav.Link>
							<Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About us</Nav.Link>
							<Nav.Link href="/article" className={activeLink === 'article' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('article')}>Article</Nav.Link>
						</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href=""><img src={navIcon4} alt="whatsapp" /></a>
							<a href=""><img src={navIcon5} alt="line" /></a>
							<a href=""><img src={navIcon3} alt="instagram" /></a>
							<a href=""><img src={navIcon1} alt="facebook" /></a>
						</div>
						<HashLink to='/connect'>
							<button className="vvd"><span>Let's Connect</span></button>
						</HashLink>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar
