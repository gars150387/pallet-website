import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { CarouselMain } from '../components/Carousel'
import '../img/iran/logo/white-logo-transparent-background.png'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import 'animate.css';

export const Home = () => {

	return (
		<Container className="homePage" id="container-fluid" fluid>
			<Row>
				<Col md={{span: 8, offset: 2}} id='col-home' className="animate_animated animate__backInDown">
					<CarouselMain className='carousel-home' />
				</Col>
			</Row>
		</Container>
	)
};
