import React from "react";
import { CarouselMain } from '../components/Carousel'
import { Col, Container, Row} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import 'animate.css';

export const Home = () => {

	return (
		<Container id="container-fluid" fluid>
			<Row>
			<Col className="animate_animated animate__backInDown" md={{ span: 6, offset: 3 }}>
				<CarouselMain />
			</Col>	
			</Row>
			<Row></Row>
		</Container>
	)
};
