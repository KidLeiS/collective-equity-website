import React from "react";
import {Container, Form, Button} from 'react-bootstrap';
import "./contact.css";

function Contact() {
	return (
		<Container fluid className="contact-wrapper">
			<Container fluid className="contact-upper">
				<h1>Connect with Us</h1>
			</Container>
			<Container fluid className="contact-middle">
				<Container className="contact-middle-text">
					<h4>"Collective Equity is a brilliant way to foster collaboration and share the journey with your peers - it's a no brainer."</h4>
					<p>Rob O'Donovan, Charlie HR</p>
				</Container>
				<Container className="contact-middle-img">
					<img src="src/assets/Team.jpg"/>
				</Container>
				
			</Container>
				
				<Form className="contact-form">
					<h2>Start the conversation</h2>
					<div className="form-name-wrapper">
						<Form.Group className="mb-3 form-name-right" controlId="formFirstName">
							<Form.Control className="form-field" type="text" placeholder="First Name*" />
							<Form.Text className="text-primary">
							Please complete this required field.
							</Form.Text>
						</Form.Group>
							<Form.Group className="mb-3 form-name-left" controlId="formLastName">
							<Form.Control className="form-field" type="text" placeholder="Last Name*" />
						</Form.Group>
					</div>
					

					<Form.Group className="mb-3" controlId="formCompany">
						<Form.Control className="form-field" type="text" placeholder="Company Name*" />
						<Form.Text className="text-primary">
						Please complete this required field.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formEmail">
						<Form.Control className="form-field" type="email" placeholder="Email*" />
						<Form.Text className="text-primary">
						Please complete this required field.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formRole">
						<Form.Select className="form-field" aria-label="What best describes you?">
							<option>What best describes you?*</option>
							<option value="founder">I'm a Founder/CXO</option>
							<option value="shareholder">I'm a Shareholder</option>
							<option value="investor">I'm a VC or Investor</option>
							<option value="lender">I'm a Lender</option>
							<option value="other">Other</option>
    					</Form.Select>
						<Form.Text className="text-primary">
						Please complete this required field.
						</Form.Text>
					</Form.Group>


					<p>
					By ticking 'I accept', you are giving us consent to process your personal data in relation to Collective Equity products. For further details, including your rights around this data, please refer to our Privacy Notice <a href="">here</a>.
					</p>
					<Form.Group className="mb-3" controlId="formPrivacy">
						<Form.Check type="checkbox" label="I accept*" />
					</Form.Group>
					
					<Button className="form-button" variant="primary" type="submit">
						Submit
					</Button>
					<br/>
				</Form>

		</Container>
		
	);
}

export default Contact;
