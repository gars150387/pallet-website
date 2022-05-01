import React from "react";
import { Carousel, Row } from "react-bootstrap";

import { VideoWorkResult } from "../components/Video";
import { VideoWorkResul2 } from "./VideoPool";

import 'bootstrap/dist/css/bootstrap.min.css';

export const CarouselItem1 = () => {
	return (
		<>
			<Carousel fade>
				<Carousel.Item id="carouselItem">
					<Row>
						<VideoWorkResult />
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row>
						<VideoWorkResul2 />
					</Row>
				</Carousel.Item>
			</Carousel>
		</>
	)
};
