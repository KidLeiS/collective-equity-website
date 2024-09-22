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
import {Container} from 'react-bootstrap';

function App() {
	return (
		<Router>
			<div className="everythingWrapper">
				<Container fluid style={{height:"170px"}}></Container>
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
			</div>
			
		</Router>
	);
}

export default App;

