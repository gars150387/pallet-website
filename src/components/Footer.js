import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { CgCopyright } from 'react-icons/cg'
import { Navbar, Container, Row, Col } from "react-bootstrap";


import '../style/footer.css'

export const Footer = () => (
	<div className="footer">
		<Container fluid className="mt-2">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Row>
						<Row style={{ height: "10px" }}></Row>
						<Col md={6}>
						<Link to="./">
								<h5>Home</h5>
							</Link>
							<Link to="./about">
								<h5>About</h5>
							</Link>
							<Link to="./design">
								<h5>Projects</h5>
							</Link>
							<Link to="./contact">
								<h5>Contact</h5>
							</Link>
						</Col>
					</Row>
					<Col md={4}>
						<Row style={{ height: "15px", color: "white", position: 'absolute', top: '28px' }}> <h5>Follow us</h5></Row>
						<Row xs={4} className="mt-3 align-justify">
							<Col className="justify-content-center" style={{fontSize: "50px", marginRight: "-4px" }}>
								<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='iconsFooter' style={{ fontSize: "34px" }} /></a>
							</Col>
							<Col className="justify-content-center" style={{fontSize: "50px", marginRight: "-3px" }}>
								<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='iconsFooter' style={{ fontSize: "35px" }} /></a>
							</Col>
							<Col className="justify-content-center" style={{fontSize: "60px" }}>
								<a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='iconsFooter' style={{ fontSize: "37px" }} /></a>
							</Col>
						</Row>
						<br />
					</Col>
				</Container>
			</Navbar>
			<Row>
				<Col xs lg={12}>
					<Row className="justify-content-md-center">
						<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
							<Container className="justify-content-center">
								<Navbar.Text>
									<Col><p><CgCopyright /> 2022 Pallet305. All rights reserved. </p></Col>
								</Navbar.Text>
							</Container>
						</Navbar>
					</Row>
				</Col>
			</Row>
		</Container>
	</div>
);
