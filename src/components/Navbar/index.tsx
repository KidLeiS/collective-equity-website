import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown, NavItem} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import logoT from "../../assets/CE_transparent.png"

function Navigation() {
		return (
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				{/* <Container fluid className="navAlign">
					<Row>
						<Col> */}
							<Navbar.Brand as={Link} to="/">
								<img className="logo" src={logoT}/>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
						{/* </Col>
						<Col> */}
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto">
								<NavItem>
										<Nav.Link className="nav-link-wide" as={Link} to="/About" reloadDocument={true}>Vision + Mission</Nav.Link>
									</NavItem>
									
									<NavItem>
										<Nav.Link className="nav-link-wide" as={Link} to ="/Team" reloadDocument={true}>Team</Nav.Link>
									</NavItem>
									
									<NavItem>
										<Nav.Link className="nav-link-wide" as={Link} to="/Portfolio" reloadDocument={true}>Companies</Nav.Link>
									</NavItem>
									<NavItem>
										<Nav.Link className="nav-link-wide" as={Link} to="/News" reloadDocument={true}>News</Nav.Link>
									</NavItem>
								</Nav>
								<Nav className="nav-two">
									<NavItem>
										<Button>
											<FontAwesomeIcon icon={faMagnifyingGlass} />
										</Button>
									</NavItem>
									<NavItem className="nav-dropdown-btn-wide">
											<NavDropdown title={<FontAwesomeIcon icon={faBarsStaggered} />} id="basic-nav-dropdown">
												<NavDropdown.Item as={Link} to ="/About">Why Collective</NavDropdown.Item>
												<NavDropdown.Item as={Link} to ="/Team">Our team</NavDropdown.Item>
												<NavDropdown.Item as={Link} to ="/Portfolio">Track record</NavDropdown.Item>
												<NavDropdown.Item as={Link} to ="/News">Get connected</NavDropdown.Item>
												<NavDropdown.Item id='nav-overlay-mask'></NavDropdown.Item>
											</NavDropdown>
											
									</NavItem>
								</Nav>
							</Navbar.Collapse>
						{/* </Col> */}
					{/* </Row>			 */}
				{/* </Container> */}
				{/* <div id='nav-overlay-mask'></div> */}
			</Navbar>
	);
}

export default Navigation;
