import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CarouselItem1 } from './CarouselItem1'
// import { CarouselItem2 } from './CarouselItem2'
// import { CarouselItem3 } from './CarouselItem3'
import { CarouselItem4 } from './CarouselItem4'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import 'animate.css'

export const CarouselElement = () => {
	return (
		<>
			<Container id="container-fluid" fluid>
				<Row id="homeRow">
					<Col></Col>
					<Col id="item1" className="imgDiv animate__animated animate__backInLeft">
						<CarouselItem1 />
					</Col>
					{/* <Col id="item2" className="imgDiv animate__animated animate__backInLeft">
						<CarouselItem2 />
					</Col> */}
					{/* <Col id="item3" className="imgDiv animate__animated animate__backInRight">
						<CarouselItem3 />
					</Col> */}
					<Col id="item4" className="imgDiv animate__animated animate__backInRight">
						<CarouselItem4 />
					</Col>

					<Col></Col>
				</Row>
			</Container>
		</>
	)
};
