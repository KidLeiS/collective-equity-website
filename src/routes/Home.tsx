import React from 'react'
import { Container } from 'react-bootstrap'
import "./styles/home.css"


function Home() {
	return (
	<Container fluid id="main-content">
            <Container fluid className="vision-statement">
                    <h4>We <i>create liquidity and diversify risk</i></h4>
                    <h4>so you can focus on building what matters.</h4>
            </Container>
            <Container className="success-stories">
                <div>
                        <h4>Success Stories Placeholder</h4>
                        <p>We need stories of successful founders, such as Rebel Energy, with a portrait of the Founder and some quote endorsing Collective Equity</p>
                </div>
            </Container>
            <Container fluid className="next-fund">
                <div className="next-fund-title">
                        <h4>
                                Get involved in our $500m flagship fund
                        </h4>
                </div>
                
                <div className="next-fund-body">
                        <div className="founders-segment">
                                <h4>Calling all Founders (and Co-founders) who:</h4>
                                <ul>
                                        <li>
                                                Run a US or UK headquartered private business
                                        </li>
                                        <li>
                                                Which has just raised funding since March 2023
                                        </li>
                                        <li>
                                                Owns a $10m minimum stake in the business
                                        </li>
                                        <li>
                                                Would like to participate in the success of other similar businesses
                                        </li>
                                </ul>
                        </div>
                        <div className="non-active-segment">
                                <h4>Calling all shareholders & ex-employees who:</h4>
                                <ul>
                                        <li>
                                                Own shares in a US or UK headquartered private business
                                        </li>
                                        <li>
                                                Which has just raised funding since March 2023
                                        </li>
                                        <li>
                                                Owns a $2m minimum stake in the business
                                        </li>
                                        <li>
                                                Is interested in liquidating or diversifying their stake into other similar investments
                                        </li>
                                </ul>
                        </div>
                </div>
            </Container>
        </Container>
	);
}

export default Home;
