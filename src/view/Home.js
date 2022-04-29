import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { CarouselMain } from '../components/Carousel'
// import { ReviewFormat } from "../components/ReviewFormat";
// import { CarouselReviews } from "../components/CarouselReviews";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import 'animate.css';

export const Home = () => {

	return (
		<Container className="homePage" id="container-fluid" fluid>
			<Row>
				<Col className="animate_animated animate__backInDown" md={{ span: 6, offset: 3 }}>
					<CarouselMain />
				</Col>
			</Row>
		</Container>
	)
};
