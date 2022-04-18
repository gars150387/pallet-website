import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import '../img/E2F7BDFE-FE72-48E0-B12F-441DEFEA0DC9.jpg'
import '../img/IMG_7808.jpg'
import '../img/61556755-B9B9-4DB0-8162-B38A736A693D.jpg'

export const CarouselItem1 = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col >
						<Carousel fade>
							<Carousel.Item id="carouselItem">
								<Row>
									<img
										className="d-block"
										src={require("../img/E2F7BDFE-FE72-48E0-B12F-441DEFEA0DC9.jpg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/IMG_7808.jpg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/61556755-B9B9-4DB0-8162-B38A736A693D.jpg")}
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
