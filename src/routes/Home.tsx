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
import curvedArrow from "../assets/curveArrow.png";

import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
        const [nextFund, setNextFund] = useState("founder");

	return (
	<Container fluid id="main-content">
                <Container fluid className="vision-statement">
                        <h4>Our founders are trailblazers across</h4>
                </Container>
                <Container fluid className="vision-banner">
                        <h4><i>AI & ML</i> / HealthTech / <i>Consumer</i> / FinTech / <i>Energy & Infrastructure</i> / FemTech / <i>RestaurantTech</i> / TravelTech</h4>
                </Container>
                <Container fluid className="what-we-do">
                        <span className="whiteBar"></span>
                        <h1>We are the founder diversification & liquidity fund</h1>
                        <br/>
                        <p>Collective Equity offers high performing founders the opportunity to invest into other high performing startups & receive partial liquidity, in exchange for a small part of your equity stake.</p>
                </Container>

                <Container fluid className="past-disclaimer">
                        <p>✱✱<b>Past fund composition not representative of future funds</b></p>
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
                        <Link to="/About" reloadDocument={true}>
                                <Button className="philosophy-button">
                                        See our Philosophy
                                </Button>
                        </Link>
                </Container>

                <Container fluid className="vs-secondaries-title">
                                <h2>
                                        3x Better than Secondaries
                                </h2>
                </Container>

                <Container fluid className="vs-secondaries">
                        

                        <p>
                                Collective Equity was born from the experience that founders have had from secondary offerings. For most founders, participating in traditional secondaries has a negative impact to their overall wealth and control within their startup, but it has been the only way to recognise liquid, material value from their entrepreneur endeavors before an IPO or sale.
                        </p>

                        <br/>

                        <p>
                                Collective Equity offers a superior alternative, which is value-preservative and founder friendly: 
                        </p>
                        <ol>
                                <li>
                                        <b>1x</b> Retain 100% of your share value in <b>high growth equity</b>, in a diversified portfolio <b>AND</b> a partial cash payout, backed by debt
                                </li>
                                <li>
                                        <b>2x</b> Never takes arbitrary discounts, and doesn't trigger capital gains tax
                                </li>
                                <li>
                                        <b>3x</b> Founders retain their voting rights to shares held in a Collective Equity fund
                                </li>
                        </ol>

                        <Bar className="barChart" plugins={[ChartDataLabels]} options={{
                                scales: {
                                        x: {
                                                stacked: true,
                                                position: "top",
                                                ticks: {
                                                        color:"#000000",
                                                        font: {
                                                                size: 18,
                                                                weight: 600,
                                                        }
                                                },
                                        },
                                        y: {
                                                stacked: true,
                                                ticks: {
                                                        callback: value => `${value}%`,
                                                        color:"#000000",
                                                        stepSize: 30
                                                        },
                                                beginAtZero: true,
                                                min: -60
                                        },
                                        
                                },
                                plugins: {
                                        title: {
                                                display: true,
                                                text: "Value dilution of traditional secondaries vs Collective Equity",
                                                font: {
                                                        size: 30,
                                                        family: 'Space Grotesk, sans-serif',
                                                        weight: 500

                                                },
                                                color: '#000000',
                                                padding: 30,
                                        },
                                        legend: {
                                                display: false,
                                                position: 'bottom',
                                        },
                                        datalabels: {
                                                
                                        }
                                },

                        }} data={{
                                labels: ['Traditional secondaries', 'Collective Equity'],
                                datasets: [
                                        {
                                                label: 'Equity Value',
                                                data: [0, 100],
                                                backgroundColor: 'rgb(53, 162, 235)',
                                                datalabels: {
                                                        labels: {
                                                                title: {
                                                                        color: '#FFFFFF',
                                                                        formatter: value => value? `Equity Value\n${value}%`: "",
                                                                        textAlign: 'center',
                                                                        font: {
                                                                                lineHeight: 1.5,
                                                                        }
                                                                }
                                                        }
                                                }
                                        },
                                        {
                                                label: 'Cash',
                                                data:[50,15],
                                                backgroundColor: 'rgb(75, 192, 192)',
                                                datalabels: {
                                                        labels: {
                                                                title: {
                                                                        color: '#FFFFFF',
                                                                        formatter: value => value? `Cash\n${value}%`: "",
                                                                        textAlign: 'center',
                                                                        font: {
                                                                                lineHeight: 1.2,
                                                                        }
                                                                }
                                                        }
                                                }
                                        },
                                                                                
                                        {
                                                label: 'Debt',
                                                data:[0,-20],
                                                backgroundColor: 'rgb(255, 99, 132)',
                                                datalabels: {
                                                        labels: {
                                                                title: {
                                                                        color: '#FFFFFF',
                                                                        formatter: value => value? `Debt\n${value}%`: "",
                                                                        textAlign: 'center',
                                                                        font: {
                                                                                lineHeight: 1.2,
                                                                        }
                                                                }
                                                        }
                                                }
                                        },
                                        {
                                                label: 'Discount',
                                                data:[-20,0],
                                                backgroundColor: 'rgb(245, 134, 150)',
                                                datalabels: {
                                                        labels: {
                                                                title: {
                                                                        color: '#FFFFFF',
                                                                        formatter: value => value? `Discount\n${value}%`: "",
                                                                        textAlign: 'center',
                                                                        font: {
                                                                                lineHeight: 1.2,
                                                                        }
                                                                }
                                                        }
                                                }
                                        },
                                        {
                                                label: 'Capital Gains Tax',
                                                data:[-30,0],
                                                backgroundColor: 'rgb(252, 165, 175)',
                                                datalabels: {
                                                        labels: {
                                                                title: {
                                                                        color: '#FFFFFF',
                                                                        formatter: value => value? `Capital Gains Tax\n${value}%`: "",
                                                                        textAlign: 'center',
                                                                        font: {
                                                                                lineHeight: 1.4,
                                                                        }
                                                                }
                                                        }
                                                }
                                        }

                                ]
                        }}/>



                </Container>

                <div className="curvedArrow">
                        <img src={curvedArrow}/>
                </div>
                        

                <Container fluid className="mechanism">
                        <h2>How we select for top founders</h2>
                        <Container>
                                <Row>
                                        <Col>
                                                <Card className="mechanism-card">
                                                        <Card.Img className="mechanism-card-img" variant="top" src={balls1} />
                                                        <Card.Body className="mechanism-card-body">
                                                                <br/>
                                                                <Card.Title className="mechanism-card-title">Selective screeners</Card.Title>
                                                                <br/>
                                                                <Card.Text className="mechanism-card-text">
                                                                        Collective Equity identifies fast growing companies who have raised a sizable upround from top tier VCs, within the past 2 years. Less than 5% of VC backed startups in the US & UK meet our basic criteria.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                        <Col>
                                                <Card className="mechanism-card">
                                                        <Card.Img className="mechanism-card-img" variant="top" src={balls2} />
                                                        <Card.Body className="mechanism-card-body">
                                                                <br/>
                                                                <Card.Title className="mechanism-card-title">Rigourous due diligence</Card.Title>
                                                                <br/>
                                                                <Card.Text className="mechanism-card-text">
                                                                        We conduct a comprehensive due diligence of each company, ensuring that each compmany has performed strongly since their last fundraising. On average, we have at least 3 meetings with management and an expert in the industry before taking a company.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                        <Col>
                                                <Card className="mechanism-card">
                                                        <Card.Img className="mechanism-card-img" variant="top" src={balls3} />
                                                        <Card.Body className="mechanism-card-body">
                                                                <br/>
                                                                <Card.Title className="mechanism-card-title">World class investors</Card.Title>
                                                                <br/>
                                                                <Card.Text className="mechanism-card-text">
                                                                        The final company approval is conducted by our IC, which is composed of 3 highly accomplished investors from top funds such as Silverlake, Citi Ventures, and Vitruvian. They have a combined 60+ years in venture and many more years leading successful businesses.
                                                                </Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                </Row>
                        </Container>
                        <Link to="/Team" reloadDocument={true}>
                                <Button className="philosophy-button">
                                        See our Investment Committee
                                </Button>
                        </Link>
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
                                        <h3>Referral programme <FontAwesomeIcon icon={faCaretDown} /></h3>
                                </button>
                        </div>
                        <NextFund nextFundState={nextFund}/>
                </Container>


                <div className="home-padding-bottom"> 
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                </div>
        </Container>
	);
}

export default Home;
