import React from "react";
import { Carousel, Row, Col, Container, Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';

import '../img/furnitures/furnitures (12).jpeg'
import '../img/furnitures/furnitures (26).jpeg'
import '../img/furnitures/furnitures (4).jpeg'
// import '../img/furnitures/furnitures (6).jpeg'



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
										src={require("../img/furnitures/furnitures (12).jpeg")}
										alt="" />
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<Card.Img 
										className="d-block"
										src={require("../img/furnitures/furnitures (26).jpeg")}
										alt="" />
								</Row>
							</Carousel.Item>
							{/* <Carousel.Item>
								<Row>
									<Card.Img
										className="d-block"
										src={require("../img/furnitures/furnitures (6).jpeg")}
										alt="" />

								</Row>
							</Carousel.Item> */}
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	)
};
