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
						<Row style={{height: "10px"}}></Row>
						<Col md={ 6 }>
							<Link to="./about">
								<h5 style={{borderBottom: "solid 1px white"}} >About</h5>
							</Link>
							<Link to="./design">
								<h5 style={{borderBottom: "solid 1px white"}} >Design</h5>
							</Link>
							<Link to="./contact">
								<h5 style={{borderBottom: "solid 1px white"}} >Contact</h5>
							</Link>
						</Col>
					</Row>
					<Col md={ 4 }>
						<br />
						<Row style={{ height: "15px", color: "white" }}> <h5>CONNECT TO US</h5></Row>
						<Row xs={6} className="mt-3 align-justify">
							<Col style={{border: "solid 2px white", borderRadius: "15px",marginRight: "3px", fontSize: "30px", padding: "auto"}}><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pallet305"><FaFacebookF id='iconsFooter' /></a></Col>
							<Col className="justify-content-center" style={{border: "solid 2px white", borderRadius: "15px",marginRight: "3px", fontSize: "35px"}}><a className="justify-content-center" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pallet_305/"><FaInstagram id='iconsFooter' /></a></Col>
							<Col className="justify-content-center" style={{border: "solid 2px white", borderRadius: "15px",marginRight: "3px",fontSize: "29px"}}><a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/SXDE7GX6G4OUF1"><ImWhatsapp id='iconsFooter' /></a></Col>
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
