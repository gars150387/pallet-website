import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavbarEspanol } from "../componentes/Navbar";
import { Inicio } from "../vista/Inicio";
import { Nosotros } from "../vista/Nosotros";
import { Design } from "../view/Design";
import { Contacto } from "../vista/Contacto";
import { FooterEspanol } from "../componentes/Footer";
import { Error404 } from "../view/Error404";


export const RouteAlternaEspanol = () => {
	return (
		<div>
			<BrowserRouter>
					<NavbarEspanol />
					<Routes>
						<Route exact path="/es/inicio" element={ <Inicio /> } />
						<Route path="/es/nosotros" element={ <Nosotros /> } />
						<Route path="/es/diseno" element={ <Design /> } />
						<Route path="/es/contacto" element={ <Contacto /> } />
						<Route path="/*" element={ <Error404 /> } />
					</Routes>
					<FooterEspanol />
			</BrowserRouter>
		</div>
	);
};