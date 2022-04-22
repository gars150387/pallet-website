import React from "react";
import { Carousel, Row, Col, Container, Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';

import '../img/furnitures/furnitures (4).jpeg'
import '../img/furnitures/furnitures (5).jpeg'
import '../img/furnitures/furnitures (6).jpeg'
import '../img/furnitures/furnitures (7).jpeg'



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
										src={require("../img/furnitures/furnitures (4).jpeg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<Card.Img 
										className="d-block"
										src={require("../img/furnitures/furnitures (5).jpeg")}
										alt="" />
								</Row>
							</Carousel.Item><Carousel.Item>
								<Row>
									<Card.Img 
										className="d-block"
										src={require("../img/furnitures/furnitures (6).jpeg")}
										alt="" />
								</Row>
							</Carousel.Item><Carousel.Item>
								<Row>
									<Card.Img
										className="d-block"
										src={require("../img/furnitures/furnitures (7).jpeg")}
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
