import {useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./styles/home.css";
import { Link } from "react-router-dom";
import NextFund from "../components/NextFund";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';

import DanHuma from '../assets/DanHuma.jpg';
import ChrisStubben from "../assets/ChrisStubben.jpg";
import DanRebel from "../assets/DanRebel.jpg";
import PaulAcin from "../assets/PaulAcin.jpeg";
import DarrenCrowdcube from "../assets/DarrenCrowdcube.png";
import JamesSensat from "../assets/JamesSensat.png";
import RyanVM from "../assets/RyanVM.png";
import AntonTaster from "../assets/AntonTaster.jpg";
import AaronKindred from "../assets/AaronKindred.png";
import balls1 from "../assets/balls1.png";
import balls2 from "../assets/balls2.png";
import balls3 from "../assets/balls3.png";

import { Bar } from 'react-chartjs-2';
import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
} from 'chart.js';

ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
);


function Home() {
        const [nextFund, setNextFund] = useState("none");

	return (
	<Container fluid id="main-content">
                <Container fluid className="vision-statement">
                        <h4>Our founders are trailblazers across:</h4>
                </Container>
                <Container fluid className="vision-banner">
                        <h4><h4><i>Tech</i> / Healthcare / <i>Consumer</i> / Financial Services / <i>Energy & Infrastructure</i> / Travel</h4></h4>
                </Container>
                <Container fluid className="success-stories">
                        <Carousel>
                                <Carousel.Item>
                                        <Row>
                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src={AaronKindred} />
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
                                        
                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src={ChrisStubben} />
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
                                                                <Card.Img className="success-card-img" variant="top" src={DanRebel} />
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
                                                                <Card.Img className="success-card-img" variant="top" src={DanHuma} />
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
                                                                <Card.Img className="success-card-img" variant="top" src={PaulAcin} />
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
                                                                <Card.Img className="success-card-img" variant="top" src={DarrenCrowdcube} />
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

                                        </Row>
                                </Carousel.Item>

                                <Carousel.Item>
                                        <Row>
                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src={JamesSensat} />
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
                                                <Col className="success-col">
                                                        <Card className="success-card">
                                                                <Card.Img className="success-card-img" variant="top" src={RyanVM} />
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
                                                                <Card.Img className="success-card-img" variant="top" src={AntonTaster} />
                                                                        <a>
                                                                                <div className="mask hide">
                                                                                        Read full bio
                                                                                </div>
                                                                        </a>
                                                                <Card.Body className="success-card-body">
                                                                        <Card.Title className="success-card-name">Anton Soullier</Card.Title>
                                                                        <Card.Text className="success-card-position">
                                                                                <i>Taster
                                                                                </i>
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
                                        3x Better than Secondaries
                                </h2>
                        </Container>

                        <p>
                                Collective Equity was born from the experience that founders have had from secondary offerings. For most founders, participating in traditional secondaries has a negative impact to their overall wealth and control within their startup, but it has been the only way to recognise liquid, material value from their entrepreneur endeavors before an IPO or sale.
                        </p>

                        <br/>

                        <p>
                                Collective Equity offers a superior alternative, which is value-preservative and founder friendly: 
                        </p>
                        <ol>
                                <li>
                                        <b>1x</b> Retain 100% of your share value in equity, in a diversified portfolio AND a partial cash payout, backed by debt
                                </li>
                                <li>
                                        <b>2x</b> Never takes arbitrary discounts, and doesn't trigger capital gains tax
                                </li>
                                <li>
                                        <b>3x</b> Founders retain their voting rights to shares held in a Collective Equity fund
                                </li>
                        </ol>
                        <br/>

                        <Bar options={{
                                scales: {
                                        x: {
                                                stacked: true,
                                        },
                                        y: {
                                                stacked: true,
                                        },
                                },

                        }} data={{
                                labels: ['Underlying value', 'Secondaries', 'Collective Equity'],
                                datasets: [
                                        {
                                                label: 'Equity Value',
                                                data: [100, 0, 100],
                                                backgroundColor: 'rgb(53, 162, 235)',
                                        },
                                        {
                                                label: 'Cash',
                                                data:[0,50,15],
                                                backgroundColor: 'rgb(75, 192, 192)',
                                        },
                                                                                
                                        {
                                                label: 'Debt',
                                                data:[0,0,-20],
                                                backgroundColor: 'rgb(255, 99, 132)',
                                        },
                                        {
                                                label: 'Discount',
                                                data:[0,-20,0],
                                                backgroundColor: 'rgb(245, 134, 150)'
                                        },
                                        {
                                                label: 'Capital Gains Tax',
                                                data:[0,-30,0],
                                                backgroundColor: 'rgb(252, 165, 175)'
                                        }

                                ]
                        }}/>



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
                                                        <Card.Img className="mechanism-card-img" variant="top" src={balls1} />
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
                                                        <Card.Img className="mechanism-card-img" variant="top" src={balls2} />
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
                                                        <Card.Img className="mechanism-card-img" variant="top" src={balls3} />
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
