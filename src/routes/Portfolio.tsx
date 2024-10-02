import {useState} from 'react';
import {Container} from 'react-bootstrap';
import "./styles/portfolio.css"
import PortfolioLayout from "../components/PortfolioLayout"

import CELogo from "../assets/logo_black.jpg";

function Portfolio() {
	const [fund, setFund] = useState("fundTwo");

	return (
		<Container fluid className="portfolio-wrapper">
			<Container fluid className="fund-banner">
				<h1>Our funds back winning companies</h1>
			</Container>
			<Container fluid className="fund-overview">
				<div className="fund-selector">
					<button onClick={() => setFund("fundTwo")} className="fund-button">
						<img src={CELogo} className="fund-logo"/>
						<h4>Fund II</h4>
					</button>
					<button onClick={() => setFund("fundOne")} className="fund-button">
						<img src={CELogo} className="fund-logo"/>
						<h4>Fund I</h4>
					</button>
				</div>
				<div className="fund-details">
					<PortfolioLayout portfolioState={fund} />
				</div>
			</Container>
        </Container>
	);
}

export default Portfolio;
