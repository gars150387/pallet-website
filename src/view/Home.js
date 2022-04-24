import React from "react";
import { Col, Container, Row} from "react-bootstrap";
// import { CarouselItem1 } from "../components/CarouselItem1";

import { CarouselMain } from '../components/Carousel'

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
			{/* <Col>
				<CarouselItem1/>
				</Col> */}
				</Row>
		</Container>
	)
};
