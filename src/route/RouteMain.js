import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "../view/About";
import { Contact } from "../view/Contact";
import { Design } from "../view/Design";
import { Home } from "../view/Home";
import { Footer } from "../components/Footer";
import { NavbarWebsite } from "../components/Navbar";
import { Error404 } from "../view/Error404";
import { Header } from "../components/Header";


export const RouteMain = () => {
	return (
		<div>
			<BrowserRouter>
			<Header/>
					<NavbarWebsite />
					<Routes>
						<Route exact path="/" element={ <Home /> } />
						<Route path="/about" element={ <About /> } />
						<Route path="/design" element={ <Design /> } />
						<Route path="/contact" element={ <Contact /> } />
						<Route path="/*" element={ <Error404 /> } />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};
