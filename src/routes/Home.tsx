import React from 'react'
import { Container } from 'react-bootstrap'
import "../assets/font-size.css"
import "./styles/home.css"


function Home() {
	return (
		<Container fluid id="main-content">
            <Container className="vision-statement">
                    <h4>We create <i>personal financial stability,</i></h4>
                    <h4>so you can focus on building what matters.</h4>
            </Container>
        </Container>
	);
}

export default Home;
