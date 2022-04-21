import React from "react";
import { Carousel, Row, Col, Container, Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';

import '../img/WhatsApp Image 2022-04-20 at 11.14.45 AM (4).jpeg'
import '../img/WhatsApp Image 2022-04-20 at 11.14.45 AM (5).jpeg'
import '../img/WhatsApp Image 2022-04-20 at 11.16.52 AM (1).jpeg'
import '../img/WhatsApp Image 2022-04-20 at 11.16.52 AM (3).jpeg'


export const CarouselMain = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col >
						<Carousel fade>
							<Carousel.Item>
								<Row>
									<Card.Img
										className="d-block"
										src={require("../img/WhatsApp Image 2022-04-20 at 11.14.45 AM (4).jpeg")}
										alt="" />

								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<Card.Img 
										className="d-block"
										src={require("../img/WhatsApp Image 2022-04-20 at 11.14.45 AM (5).jpeg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<Card.Img 
										className="d-block"
										src={require("../img/WhatsApp Image 2022-04-20 at 11.16.52 AM (1).jpeg")}
										alt="" />
								</Row>
							</Carousel.Item><Carousel.Item>
								<Row>
									<Card.Img 
										className="d-block"
										src={require("../img/WhatsApp Image 2022-04-20 at 11.16.52 AM (3).jpeg")}
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
