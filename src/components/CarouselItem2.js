import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';

import '../img/A9927117-9F9A-44C2-9BEF-35876E24C7DF.jpg'
import '../img/2B3A74AF-F7FF-41C5-B435-E3EB2FF30C85.jpg'
import '../img/18A20FB2-818E-4B72-BE1E-BDECCC52134D.jpg'

export const CarouselItem2 = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col >
						<Carousel fade>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/A9927117-9F9A-44C2-9BEF-35876E24C7DF.jpg")}
										alt="" />

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/2B3A74AF-F7FF-41C5-B435-E3EB2FF30C85.jpg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/18A20FB2-818E-4B72-BE1E-BDECCC52134D.jpg")}
										alt="" />
								</Row>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	)
};
