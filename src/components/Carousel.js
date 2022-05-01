import React from "react";
import { Carousel, Row, Card } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/carousel.css'


import '../img/furnitures/furnitures (12).jpeg'
import '../img/furnitures/furnitures (26).jpeg'
import '../img/furnitures/furnitures (4).jpeg'



export const CarouselMain = () => {
	return (
		<>
			<Carousel fade>
				<Carousel.Item >
					<Row>
						<Card.Img
							src={require("../img/furnitures/furnitures (4).jpeg")}
							alt=""
							/>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row>
						<Card.Img

							src={require("../img/furnitures/furnitures (12).jpeg")}
							alt="" />
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row>
						<Card.Img

							src={require("../img/furnitures/furnitures (26).jpeg")}
							alt="" />
					</Row>
				</Carousel.Item>
			</Carousel>

		</>
	)
};
