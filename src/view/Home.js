import React from "react";
import { CarouselMain } from '../components/Carousel'
import { Col } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import 'animate.css';

export const Home = () => {

	return (
		<div>
			<Col md={{ span: 6, offset: 3 }}>
				<CarouselMain />
			</Col>

		</div>
	)
};
