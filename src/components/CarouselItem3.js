import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

import '../img/58E5E329-E64F-4972-9392-A6CEAC17A913.jpg'
import '../img/66B913C7-B3DC-4FE5-93CC-D4AD67EB9379.jpg'
import '../img/29D529C0-9834-4926-A781-C6C881C0A2DE.jpg'


export const CarouselItem3 = () => {
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
										src={require("../img/58E5E329-E64F-4972-9392-A6CEAC17A913.jpg")}
										alt="" />

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/66B913C7-B3DC-4FE5-93CC-D4AD67EB9379.jpg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<img
										className="d-block"
										src={require("../img/29D529C0-9834-4926-A781-C6C881C0A2DE.jpg")}
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
