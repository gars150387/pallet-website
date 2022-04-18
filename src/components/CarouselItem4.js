import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import '../img/FE859BF3-BE14-4E3F-A83C-5D4163248E01.jpg'
import '../img/142B2076-642E-4451-8A54-F00F6822324A.jpg'
import '../img/567F3275-1455-4384-ABCC-53263531A3E1.jpg'

export const CarouselItem4 = () => {
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
										src={require("../img/FE859BF3-BE14-4E3F-A83C-5D4163248E01.jpg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/142B2076-642E-4451-8A54-F00F6822324A.jpg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/567F3275-1455-4384-ABCC-53263531A3E1.jpg")}
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
