import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown, NavItem} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./ActiveNav.css";
import logoT from "../../assets/CE_transparent.png"

function ActiveNav() {
		return (
			<Navbar collapseOnSelect expand="lg" className="active-nav bg-body-tertiary">
				{/* <Container fluid className="navAlign">
					<Row>
						<Col> */}
							<Navbar.Brand as={Link} to="/">
								<img className="logo-active" src={logoT}/>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
						{/* </Col>
						<Col> */}
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto">
									<NavItem>
										<Nav.Link className="nav-link-thin" as={Link} to="/About">Vision + Mission</Nav.Link>
									</NavItem>
									
									<NavItem>
										<Nav.Link className="nav-link-thin" as={Link} to ="/Team">Team</Nav.Link>
									</NavItem>
									
									<NavItem>
										<Nav.Link className="nav-link-thin" as={Link} to="/Portfolio">Companies</Nav.Link>
									</NavItem>
									<NavItem>
										<Nav.Link className="nav-link-thin" as={Link} to="/Events">Events</Nav.Link>
									</NavItem>
								</Nav>
								<Nav className="nav-two">
									<NavItem>
										<Button className="search-btn-thin">
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

export default ActiveNav;
