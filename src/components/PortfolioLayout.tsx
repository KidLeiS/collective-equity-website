import { Container, Row, Col ,Card } from 'react-bootstrap';

import Circa5000 from '../assets/CEOI/Circa5000.png'
import Crowdcube from '../assets/CEOI/Crowdcube.png'
import ON from '../assets/CEOI/ON.png'
import AndSisters from '../assets/CEOI/AndSisters.png'
import CatchApp from '../assets/CEOI/CatchApp.png'
import InvestEngine from '../assets/CEOI/InvestEngine.png'
import JustMoveIn from '../assets/CEOI/JustMoveIn.png'
import RebelEnergy from '../assets/CEOI/RebelEnergy.png'
import Zzish from '../assets/CEOI/Zzish.png'
import BorrowBoat from "../assets/CEOI/BorrowBoat.png"
import Magway from "../assets/CEOI/Magway.png"

import Acin from "../assets/CEOIII/Acin.jpg"
import Algbra from "../assets/CEOIII/Algbra.png"
import Huma from "../assets/CEOIII/Huma.png"
import Kindred from "../assets/CEOIII/Kindred.png"
import OB from "../assets/CEOIII/OceanBottle.png"
import Safi from "../assets/CEOIII/Safi.png"
import Sensat from "../assets/CEOIII/Sensat.png"
import SE from "../assets/CEOIII/StubbenEdge.png"
import Taster from "../assets/CEOIII/Taster.png"
import TradeLedger from "../assets/CEOIII/TradeLedger.png"
import TravelLocal from "../assets/CEOIII/TravelLocal.png"
import VM from "../assets/CEOIII/VM.png"

function PortfolioLayout(props: { portfolioState: string; }) {
    const fund = props.portfolioState
    if (fund == "fundOne") {
        return(
            <Container fluid className="fund-wrapper">
                <h2>Fund I Overview</h2>
                <Container fluid className="fund-states">
                    <div className="fund-metrics">
                        <div className="launch-date">
                            <h3>Launch date</h3>
                            <h1>Nov 2022</h1>
                        </div>
                        <div className="companies">
                            <h3>Companies</h3>
                            <h1>11</h1>
                        </div>
                        <div className="exits">
                            <h3>AuM</h3>
                            <h1>£3.7m</h1>
                        </div>
                        <div className="exits">
                            <h3>TVPI</h3>
                            <h1>120%</h1>
                        </div>
                        <div className="exits">
                            <h3>IRR</h3>
                            <h1>20%</h1>
                        </div>
                    </div>
                    
                </Container>
                <br/>
                <br/>
                <h2>Portfolio Companies</h2>
                <Container fluid className="fund-composition">
                    
                    <Row>
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={RebelEnergy} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Rebel Energy</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Rebel Energy is the UK's fastest growing retail energy provider
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                         
                            
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={Crowdcube} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Crowdcube</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Crowdcube is the go-to equity crowdfunding platform
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={ON} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">ON</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Opportunity Network is a social network for CEOs & decision makers
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>

                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={Circa5000} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">Circa5000</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Circa5000 is Europe's first dedicated impacted ETF issuer
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={AndSisters} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">&Sisters</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            &Sisters offers sustainable menstrual health products
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>

                         <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={JustMoveIn} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">Just Move In</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Just Move In is an end-to-end home moving service
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={Magway} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Magway</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Magway is enabling zero emissions logistics
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                            
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={InvestEngine} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">InvestEngine</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            InvestEngine is an ETF focused retail investment platform
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                        
                        
                    </Row>

                    <Row>
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={Zzish} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Zzish</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Zzish is an AI-powered online education platform
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={CatchApp} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">CatchApp</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        CatchApp is a smart scheduling and organisation tool
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={BorrowBoat} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">Borrow a Boat</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Borrow a Boat is a online yacht rental marketplace
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                            
                        
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
                
            </Container>
        );
    } else if (fund == "fundTwo") {
        return(
            <Container fluid className="fund-wrapper">
                <h2>Fund II Overview</h2>
                <Container fluid className="fund-states">
                    <div className="fund-metrics">
                        <div className="launch-date">
                            <h3>Launch date</h3>
                            <h1>Mar 2024</h1>
                        </div>
                        <div className="companies">
                            <h3>Companies</h3>
                            <h1>12</h1>
                        </div>
                        <div className="exits">
                            <h3>AuM</h3>
                            <h1>£36m</h1>
                        </div>
                        <div className="exits">
                            <h3>TVPI</h3>
                            <h1>120%</h1>
                        </div>
                        <div className="exits">
                            <h3>IRR</h3>
                            <h1>20%</h1>
                        </div>
                    </div>
                    
                </Container>
                <br/>
                <br/>
                <h2>Portfolio Companies</h2>
                <Container fluid className="fund-composition">
                    
                    <Row>
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={SE} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Rebel Energy</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Stubben Edge powers thousands of insurance brokers with tech and product
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                         
                            
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={Huma} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Crowdcube</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Huma is a digital healthcare pioneer, creating the first FDA class 2 medical app
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={Kindred} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">ON</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Kindred is transforming the rewards affiliate marketing landscape
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>

                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={Sensat} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">Circa5000</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Sensat is revolutionising industrial projects with its visualisation platform
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={Acin} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">&Sisters</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Acin is selling digital Ops Risk solutions into the world's largest banks
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>

                         <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={Taster} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">Just Move In</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Taster is a tech-enabled end-to-end franchise as a service provider
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={Algbra } />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Magway</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Algbra is a banking as a service provider with expertise in Islamic finance
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                            
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={VM} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">InvestEngine</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            VerifyMy is enabling enhanced age verification for digital businesses
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                        
                        
                    </Row>

                    <Row>
                        <Col>
                            <Card className="fund-card">
                                    <Card.Img className="fund-card-img" variant="top" src={TravelLocal} />
                                    <Card.Body className="fund-card-body">
                                        {/* <Card.Title className="fund-card-title">Zzish</Card.Title> */}
                                        <Card.Text className="fund-card-text">
                                            Travel Local is a custom holiday platform empowering independent guides
                                        </Card.Text>
                                    </Card.Body>
                                        
                            </Card>
                        </Col>
                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={TradeLedger} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">CatchApp</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Trade Ledger is a commercial lending SaaS solution automating lending workflows
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={Safi} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">Borrow a Boat</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Safi is facilitating access to recycled materials trade through its marketplace
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                            
                        
                        <Col>
                            <Card className="fund-card">
                                <Card.Img className="fund-card-img" variant="top" src={OB} />
                                <Card.Body className="fund-card-body">
                                    {/* <Card.Title className="fund-card-title">Borrow a Boat</Card.Title> */}
                                    <Card.Text className="fund-card-text">
                                        Ocean Bottle is an ocean plastic recycling consumer goods business
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </Container>
        );
    } else {
        return (<div></div>)
    }
}

export default PortfolioLayout;