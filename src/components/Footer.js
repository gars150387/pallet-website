import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { CgCopyright } from 'react-icons/cg'
import { SiTiktok } from 'react-icons/si'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";


import '../style/footer.css'

export const Footer = () => (
	<div className="footer">
		<Container className="mt-2" fluid>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Row>
						<Row style={{ height: "10px" }}></Row>
						<Col md={7}>
							<Link to="./">
								<h5>Home</h5>
							</Link>
							<Link to="./about">
								<h5>About</h5>
							</Link>
							<Link to="./design">
								<h5>Projects</h5>
							</Link>
						</Col>
						<Col>
							<Link to="./customer">
								<h5>Our Customers</h5>
							</Link>
							<Link to="./contact">
								<h5>Contact</h5>
							</Link>
						</Col>
					</Row>
					<Col md={4}>
						<Row style={{ height: "15px", color: "white", position: 'absolute', top: '28px' }}> <h5>Follow us</h5></Row>
						<Row xs={4} className="mt-3 align-justify">
							<Col className="justify-content-center" style={{ fontSize: "50px", marginRight: "-4px" }}>
								<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='iconsFooter' style={{ fontSize: "34px" }} /></a>
							</Col>
							<Col className="justify-content-center" style={{ fontSize: "50px", marginRight: "-3px" }}>
								<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='iconsFooter' style={{ fontSize: "35px" }} /></a>
							</Col>
							<Col className="justify-content-center" style={{ fontSize: "60px" }}>
								<a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pallet305?lang=en"><SiTiktok id='iconsFooter' style={{ fontSize: "37px" }} /></a>
							</Col>
							<Col className="justify-content-center" style={{ fontSize: "60px" }}>
								<a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='iconsFooter' style={{ fontSize: "37px" }} /></a>
							</Col>
						</Row>
						<br />
					</Col>
				</Container>
			</Navbar>
		</Container>
		<Container fluid>
			<Container>
				<Nav className="justify-content-center" collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Container className="justify-content-center">
						<Navbar.Text className="align-item-center">
							<Col md={{ span: 6, offset: 3 }} ><p><CgCopyright style={{ fontSize: "20px" }} /> 2022 Pallet305. All rights reserved. </p></Col>
						</Navbar.Text>
					</Container>
				</Nav>

			</Container>

		</Container>
	</div>
);
