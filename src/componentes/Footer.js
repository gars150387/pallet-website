import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { CgCopyright } from 'react-icons/cg'
import { Navbar, Container, Row, Col } from "react-bootstrap";

import { FaCcVisa, FaCcDiscover, FaCcMastercard } from 'react-icons/fa';
import { SiChase } from 'react-icons/si';

import '../style/footer.css'

export const FooterEspanol = () => (
	<div className="footer">
		<Container fluid className="mt-2">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Row>
						<Row></Row>
						<Col md={ 6 }>
							<Link to="./about">
								<h5 >Sobre</h5>
							</Link>
							<Link to="./design">
								<h5>Diseno</h5>
							</Link>
							<Link to="./contact">
								<h5>Contacto</h5>
							</Link>
						</Col>
						{/* <Col></Col> */}
					</Row>
					<Col md={ 4 }>
						<Row xs="auto">
							<Col xs lg=""><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='iconsFooter' /></a></Col>
							<Col xs lg=""><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='iconsFooter' /></a></Col>
							<Col xs lg=""><a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='iconsFooter' /></a></Col>
						</Row>
						<br />
						<Row style={{ height: "15px", color: "white" }}> <h5>We Accept:</h5></Row>
						<Row className="mt-3 align-justify">
							<Col><FaCcVisa id="iconsFooterPayment"  style={{ color: "white"}} /></Col>
							<Col><FaCcDiscover id="iconsFooterPayment"  style={{ color: "white"}} /></Col>
							<Col><FaCcMastercard id="iconsFooterPayment"  style={{ color: "white"}} /></Col>
							<Col><SiChase id="iconsFooterPayment"  style={{ color: "white"}} /></Col>
							{/* <Col xs={2} ><FaMoneyBillAlt style={{ color: "white"}} /></Col> */}
						</Row>
						<br />


					</Col>
				</Container>
			</Navbar>
			<Row></Row>
			<Row>
				<Col></Col>
				<Col xs={5}>
					<Row className="justify-content-md-center">
						<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
							<Container className="justify-content-center">
								<Navbar.Text>
										<Col><p><CgCopyright /> 2022 Pallet305. All rights reserved. </p></Col>
									</Navbar.Text>
							</Container>
						</Navbar>
					</Row>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	</div>
);
