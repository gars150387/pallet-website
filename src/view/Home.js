import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { CarouselMain } from '../components/Carousel'
// import { ReviewFormat } from "../components/ReviewFormat";
import { CarouselReviews } from "../components/CarouselReviews";

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
				{/* <Col className="animate_animated animate__backInUp" md={{ span: 6, offset: 3 }} style={{marginTop: '2%', marginBottom: '2%'}}>
					<Col className="text-center">
						<h3 style={{color: 'white', fontSize: '25px', fontWeight: '500', fontFamily: 'fantasy'}}>These are a few comments from our customers</h3>
					</Col>
					<Col>
						<CarouselReviews/>
					</Col>
					
				</Col> */}
			</Row>
		</Container>
	)
};
