import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//COMPONENTS
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//STYLES
import GlobalStyle from "./components/GlobalStyle";

//ANIMATION
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation()

	return (
		<div className="App">
			<Nav />
			<AnimatePresence >
				<GlobalStyle/>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<AboutUs/>}/>
					<Route path="/work" element={<OurWork/>}/>
					<Route path="/work/:id" element={<MovieDetail/>}/>
					<Route path="/contact" element={<ContactUs/>}/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
