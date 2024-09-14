import React from 'react'
import {Container} from 'react-bootstrap'
import "./styles/about.css"

function About() {
	return (
		<Container fluid style={{padding:"0 0 6rem 0",}}>
			<Container fluid className="about-jumbo">
				<img src="src/assets/logo_white.png"/>
				<p>Offering Liquidity and Diversification to Ambitious Founders </p>
			</Container>

			<Container fluid className="vis-statement">
				<h4>
					As founders, we know that accepting and embracing risk is inherent to build a game-changing company. While we follow our passion for problem-solving, entrepreneurial wealth is built almost exclusively in the form of trapped equity.
				</h4>

				<h4>
					At Collective Equity, we believe that founders should be presented with more opportunities on their path to success as they achieve significant milestones. That is why we have designed a new innovative structure 
					to unlock the power of equity, by founders and for founders.
				</h4>

			</Container>

			<Container fluid className="redefining-secondaries">
				<h3>
					Redefining secondaries - a new opportunity for founders
				</h3>

				<p>
					<b>No investor would contemplate investing in just one company</b> – whether in private or public markets, even if it’s Apple!  Diversification is investing 101. And yet everyone expects a founder to depend, for their entire success, on a single company.
				</p>
				<p>
					As founders ourselves, we know that accepting and embracing risk is inherent in building a game-changing company but, while we follow our passion for problem-solving, entrepreneurial wealth is built almost exclusively in the form of trapped equity. Secondaries often only become available post-Series B and generally entail deep discounts, loss of voting, and disruption to the cap table rendering them, in many cases, impossible.
				</p>
				<br/>
				<h4 className="founders-deserve-better">
					<u>Founders deserve better</u>
				</h4>

				<br/>
				<p>
					<b>To solve this problem</b>, Collective Equity has created an innovative fund alongside one of the world’s largest asset managers to reshape the secondary landscape - providing founders and early investors with the opportunity to both extract cash AND own a share in a portfolio mirroring that of a top-tier VC fund.
				</p>
				<p>
					Founders (and their associates) join our fund by contributing a small portion of their equity, receiving in exchange immediate partial liquidity, together with a stake in 15-25 high-growth businesses backed by some of the most reputable VCs globally. Each investee company undergoes rigorous due diligence by Collective Equity, with approval from our Investment Advisory Committee consisting of partners at top VC firms.
				</p>

				<p>
					<b>And it’s much more than a portfolio</b>. Participation in the fund creates an exclusive network where the most accomplished founders have a vested interest in helping each other succeed.
				</p>
				

			</Container>
			<Container fluid className="redefining-secondaries-quote">
					<h1>
						"As a founder and investor, I was truly impressed by the Collective Equity model. They have developed a powerful mechanism that encourages founders to remain committed to their work and also allows them to diversify a small portion of their eventual net worth through strategic investments in similar ventures led by other brilliant founders.
					</h1>

					<br/>
					
					<h1>
						 This additional opportunity for liquidity through Collective Equity significantly enhances founders' resilience and bolsters their prospects for success."
					</h1>
					<p>Harel Kodesh, former Silver Lake</p>
			</Container>
			
        </Container>
	);
}

export default About;
