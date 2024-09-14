import {useState} from 'react';
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
                                                                <Card.Img className="success-card-img" variant="top" src="src/assets/PaulAcin.jpeg" />
                                                                        <a>
                                                                                <div className="mask hide">
                                                                                        Read full bio
                                                                                </div>
                                                                        </a>
                                                                <Card.Body className="success-card-body">
                                                                        <Card.Title className="success-card-name">Paul Ford</Card.Title>
                                                                        <Card.Text className="success-card-position">
                                                                                <i>Acin</i>
                                                                        </Card.Text>
                                                                </Card.Body>
                                                        </Card>
                                                </Col>
                                        
                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src="src/assets/DarrenCrowdcube.png" />
                                                                        <a>
                                                                                <div className="mask hide">
                                                                                        Read full bio
                                                                                </div>
                                                                        </a>
                                                                <Card.Body className="success-card-body">
                                                                        <Card.Title className="success-card-name">Darren Westlake</Card.Title>
                                                                        <Card.Text className="success-card-position">
                                                                                <i>Crowdcube</i>
                                                                        </Card.Text>
                                                                </Card.Body>
                                                        </Card>
                                                </Col>

                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src="src/assets/JamesSensat.png" />
                                                                        <a>
                                                                                <div className="mask hide">
                                                                                        Read full bio
                                                                                </div>
                                                                        </a>
                                                                <Card.Body className="success-card-body">
                                                                        <Card.Title className="success-card-name">James Dean</Card.Title>
                                                                        <Card.Text className="success-card-position">
                                                                                <i>Sensat</i>
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
                                                                <Card.Img className="success-card-img" variant="top" src="src/assets/RyanVM.png" />
                                                                        <a>
                                                                                <div className="mask hide">
                                                                                        Read full bio
                                                                                </div>
                                                                        </a>
                                                                <Card.Body className="success-card-body">
                                                                        <Card.Title className="success-card-name">Ryan Shaw</Card.Title>
                                                                        <Card.Text className="success-card-position">
                                                                                <i>VerifyMy</i>
                                                                        </Card.Text>
                                                                </Card.Body>
                                                        </Card>
                                                </Col>
                                        
                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src="src/assets/RishiSafi.jpeg" />
                                                                        <a>
                                                                                <div className="mask hide">
                                                                                        Read full bio
                                                                                </div>
                                                                        </a>
                                                                <Card.Body className="success-card-body">
                                                                        <Card.Title className="success-card-name">Rishi Stocker</Card.Title>
                                                                        <Card.Text className="success-card-position">
                                                                                <i>Safi</i>
                                                                        </Card.Text>
                                                                </Card.Body>
                                                        </Card>
                                                </Col>

                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src="src/assets/AaronKindred.png" />
                                                                        <a>
                                                                                <div className="mask hide">
                                                                                        Read full bio
                                                                                </div>
                                                                        </a>
                                                                <Card.Body className="success-card-body">
                                                                        <Card.Title className="success-card-name">Aaron Simpson</Card.Title>
                                                                        <Card.Text className="success-card-position">
                                                                                <i>Kindred</i>
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

                <Container fluid className="vs-secondaries">
                        <Container className="vs-secondaries-title">
                                <h2>
                                        Better than Secondaries
                                </h2>
                        </Container>

                        <p>
                                Collective Equity was born from the experience that founders have had from secondary offerings. For most founders, participating in traditional secondaries is the only way to recognise liquid, material value from their entrepreneur endeavors before an IPO or sale. However, in over 90% of cases today, there are a plethora of detriments to taking a secondaries transaction.
                        </p>



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

                <Container fluid className="mechanism">
                        <h2>How it works</h2>
                        <Container>
                                <Row>
                                        <Col>
                                                <Card className="mechanism-card">
                                                        <Card.Img className="mechanism-card-img" variant="top" src="src/assets/balls1.png" />
                                                        <Card.Body className="mechanism-card-body">
                                                                <br/>
                                                                <Card.Title className="mechanism-card-title">Fund Structure</Card.Title>
                                                                <br/>
                                                                <Card.Text className="mechanism-card-text">
                                                                        Collective Equity sets up the General Partner (GP) vehicle that manages the distributions of the exits. The shareholders of the portfolio companies contribute the beneficial ownership of their shares to the Fund, to become Limited Partners (LPs) creating the Portfolio.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                        <Col>
                                                <Card className="mechanism-card">
                                                        <Card.Img className="mechanism-card-img" variant="top" src="src/assets/balls2.png" />
                                                        <Card.Body className="mechanism-card-body">
                                                                <br/>
                                                                <Card.Title className="mechanism-card-title">Initial Distributions</Card.Title>
                                                                <br/>
                                                                <Card.Text className="mechanism-card-text">
                                                                        The fund takes out a loan against the Portfolio at a 20% LTV ratio. Collective Equity ringfences £50k p.a. over 10 years to cover expenses of the fund. The remaining cash is then distributed to the Limited Partners pro-rata to the market value of their contributions.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                        <Col>
                                                <Card className="mechanism-card">
                                                        <Card.Img className="mechanism-card-img" variant="top" src="src/assets/balls3.png" />
                                                        <Card.Body className="mechanism-card-body">
                                                                <br/>
                                                                <Card.Title className="mechanism-card-title">Exit Proceeds</Card.Title>
                                                                <br/>
                                                                <Card.Text className="mechanism-card-text">
                                                                        The principal and interest are repaid from the liquidity events (exits) of the underlying portfolio companies. Once the debt is repaid, the proceeds from liquidity events are distributed pro-rata. Collective Equity participates in 15% of any liquidity distributions through the fund.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                </Row>
                        </Container>
                </Container>


                <div className="home-padding-bottom"> 
                        <br/>
                </div>
        </Container>
	);
}

export default Home;
