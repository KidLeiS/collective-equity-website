import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer/index";
import Contact from "./components/Contact/index";
import Home from "./routes/Home";
import About from "./routes/About";
import Team from "./routes/Team";
import Events from "./routes/Events";
import Portfolio from "./routes/Portfolio";
import "./App.css";


function App() {
	return (
		<Router>
			<Navbar />
			<Wrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/team" element={<Team />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/events" element={<Events />} />
				</Routes>
			</Wrapper>
			<Contact />
			<Footer />
		</Router>
	);
}

export default App;

