import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown, NavItem} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

function Navigation() {
		return (
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbarouter">
				{/* <Container fluid className="navAlign">
					<Row>
						<Col> */}
							<Navbar.Brand as={Link} to="/">
								<img className="logo" src="src/assets/logo_black.jpg"/>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
						{/* </Col>
						<Col> */}
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto">
									<NavItem>
										<Nav.Link as={Link} to ="/Team">Team</Nav.Link>
									</NavItem>
									<NavItem>
										<Nav.Link as={Link} to="/About">Philosophy</Nav.Link>
									</NavItem>
									<NavItem>
										<Nav.Link as={Link} to="/Portfolio">Companies</Nav.Link>
									</NavItem>
									<NavItem>
										<Nav.Link as={Link} to="/Events">Events</Nav.Link>
									</NavItem>
								</Nav>
								<Nav className="nav-two">
									<NavItem>
										<Button>
											<FontAwesomeIcon icon={faMagnifyingGlass} />
										</Button>
									</NavItem>
									<NavItem>
											<NavDropdown title={<FontAwesomeIcon icon={faBarsStaggered} />} id="basic-nav-dropdown">
												<NavDropdown.Item as={Link} to ="/About">Why Collective</NavDropdown.Item>
												<NavDropdown.Item as={Link} to ="/Team">Our team</NavDropdown.Item>
												<NavDropdown.Item as={Link} to ="/Portfolio">Track record</NavDropdown.Item>
												<NavDropdown.Item as={Link} to ="/Events">Get connected</NavDropdown.Item>
											</NavDropdown>
									</NavItem>
								</Nav>
							</Navbar.Collapse>
						{/* </Col> */}
					{/* </Row>			 */}
				{/* </Container> */}
			</Navbar>
	);
}

export default Navigation;
