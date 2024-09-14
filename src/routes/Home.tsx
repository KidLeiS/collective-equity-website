import React, {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./styles/home.css";
import { Link } from "react-router-dom";
import NextFund from "../components/NextFund";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
        const [nextFund, setNextFund] = useState("none");

	return (
	<Container fluid id="main-content">
            <Container fluid className="vision-statement">
                    <h4>We create <i>liquidity and diversification,</i></h4>
                    <h4>so you can build what matters.</h4>
            </Container>

            <Container fluid className="success-stories">
            <Carousel>
                <Carousel.Item>
                        <Row>
                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/DanHuma.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Dan Vahdat</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Huma</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        
                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/ChrisStubben.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Chris Kenning</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Stubben Edge</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>

                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/DanRebel.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Dan Bates</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Rebel Energy</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </Carousel.Item>
                        
                <Carousel.Item>
                <Row>
                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/DanHuma.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Dan Vahdat</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Huma</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        
                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/ChrisStubben.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Chris Kenning</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Stubben Edge</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>

                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/DanRebel.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Dan Bates</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Rebel Energy</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row>
                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/DanHuma.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Dan Vahdat</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Huma</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        
                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/ChrisStubben.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Chris Kenning</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Stubben Edge</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>

                                <Col className="success-col">
                                        <Card className="success-card">
                                                <Card.Img className="success-card-img" variant="top" src="src/assets/DanRebel.jpg" />
                                                        <a>
                                                                <div className="mask hide">
                                                                        Read full bio
                                                                </div>
                                                        </a>
                                                <Card.Body className="success-card-body">
                                                        <Card.Title className="success-card-name">Dan Bates</Card.Title>
                                                        <Card.Text className="success-card-position">
                                                                <i>Rebel Energy</i>
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </Carousel.Item>
                </Carousel>
                
            </Container>

            <Container fluid className="success-stories-footer">
                <h4>Our philosophy since day one has been to get excellent founders to sit together at the same table. At Collective Equity, we believe in the power of putting exceptional people in one place, all invested in each others success.</h4>
                <br/>
                <Link to="/About">
                        <Button className="philosophy-button">
                                See our Philosophy
                        </Button>
                </Link>
                <br/>
            </Container>
            <Container fluid className="next-fund">
                <div className="next-fund-title">
                        <h4>
                                Get involved in our flagship fund
                        </h4>
                </div>
                
                <div className="next-fund-body">
                        <button onClick={() => (nextFund == "founder")? setNextFund("none") : setNextFund("founder")} className="founders-segment">
                                <h3>Founders and CXOs <FontAwesomeIcon icon={faCaretDown} /></h3>
                        </button>
                        <button onClick={() => (nextFund == "nonactive")? setNextFund("none") : setNextFund("nonactive")} className="non-active-segment">
                                <h3>Investors and ex-employees <FontAwesomeIcon icon={faCaretDown} /></h3>
                        </button>
                </div>
                <NextFund nextFundState={nextFund}/>
            </Container>
        </Container>
	);
}

export default Home;
