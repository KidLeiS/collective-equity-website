import { Container, Row, Col, Card} from 'react-bootstrap'
import "./styles/team.css"
import Brian from "../assets/Brian.jpg";
import Mike from "../assets/Mike.jpg";
import Tristan from "../assets/Tristan.jpeg";
import Eric from "../assets/Eric.jpeg";
import Charles from "../assets/Charles.jpg";
import Guy from "../assets/Guy.jpeg";
import David from "../assets/David.jpeg";
import Ornit from "../assets/Ornit.jpeg";
import Harel from "../assets/Harel.jpeg";
import Sanjin from "../assets/Sanjin.jpeg";
import Ziyi from "../assets/Ziyi.jpeg";
import TeamPic from "../assets/Team.jpg";

import CitiVentures from "../assets/CitiVentures.png"
import Lenovo from "../assets/Lenovo.png"
import Illusive from "../assets/Illusive.jpg"

import SilverLake from "../assets/SilverLake.png"
import Dell from "../assets/Dell.png"
import GE from "../assets/GE.png"
import Microsoft from "../assets/Microsoft.png"

import Vitruvian from "../assets/Vitruvian.png"
import Barclays from "../assets/Barclays.png"
import McKinsey from "../assets/McKinsey.png"


function Team() {
	return (
		<Container fluid className="team-page">

		<Container fluid className="team-cards-title">

			Our trusted Investment Committee
		</Container>

		<Container fluid="lg" className="team-cards">		
			<Row>
				<Col>
					<Card className="team-card">
						<Card.Img className="team-card-img" variant="top" src={Ornit} />
						<Card.Body className="team-card-body">
							<Card.Title className="team-card-name">Ornit Shinar</Card.Title>
							<Card.Text className="team-card-position ornit">
								<img src={CitiVentures}/>
								<img src={Lenovo}/>
								<img src={Illusive}/>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={8} className="team-profile">
					<p>A passionate leader, team builder, investor and mentor, Ornit Shinar has spent the past 2 decades fostering successful innovation.  From 2017 to 2023, Ornit Shinar lead Citi Venture's venture investment activities in data analytics & machine learning, cybersecurity, and fintech. As part of her role she also managed Citi Venture's Tel Aviv Accelerator.</p>
					<br/>
					<p>Prior to this role, Ornit ran External Innovation and Business Development for Lenovo in Europe. In this capacity she invested in Cloud technologies as well as Artificial Intelligence and biometric authentication. She has also founded and served in managerial roles in several companies.</p>
					<br/>
					<p>Ornit has led, co-invested and syndicated deals with financial and strategic investors around the globe her marquee investments include <b>Honeybook</b>, <b>Silverfort</b>, <b>Biocatch (acq.)</b>, <b>Forter</b>, <b>Access Fintech</b>, <b>Sharegain</b>, <b>Fundguard</b>, <b>Illusive (acq.)</b>, <b>Unbound (acq.)</b>, <b>Eigen (acq.)</b>, <b>Elastifile (acq.)</b>, <b>Neura (acq.)</b>, <b>Contguard (acq.)</b>.</p>
				</Col>
			</Row>
			<Row>
				<Col xs={8} className="team-profile">
					<p>Harel Kodesh was an Operating Partner at Silver Lake Partners, a global leader in technology investments from 2017 to 2020, where he managed the firm's portfolio companies, taking interim CTO roles at SoFi and Blackhawk Network. Prior to Silver Lake, Harel was responsible for driving the technical strategy behind Predix, GE’s cloud platform for the Industrial Internet, and the applications developed by GE for the industrial sector and was GE Digital’s CTO. In 2015, he was named to GE’s Corporate Executive Council.</p>
					<br/>
					<p>Harel has co-founded and served as CEO at Nurego, a spinoff of EMC Corp. At EMC, he acted as Executive VP for Cloud Business Systems and as CEO of Mozy, its wholly-owned subsidiary dedicated to Backup as a Service. From 2003 to 2008, Harel served as Chief Product Officer at Amdocs, transforming the organization from a professional services company to product driven. Harel served for 10 years as a VP in Microsoft’s Information Appliance Division.
					</p>
					<br/>
					<p>Harel has invested in numerous tech businesses over the years, with notable investments including <b>Excelero (acq. by Nvidia)</b>, <b>Applitools (acq. by Thoma Bravo)</b>, <b>Privya.AI</b>, <b>Tokenproof</b>, <b>ShapeCI</b>, <b>Automattic</b>, <b>Veto</b>, <b>Equalum</b>, <b>Hailo</b>, <b>Affogata</b>, and <b>Buildots</b>.</p>
				</Col>
				<Col>
					<Card className="team-card">
						<Card.Img className="team-card-img" variant="top" src={Harel} />
						<Card.Body className="team-card-body">
							<Card.Title className="team-card-name">Harel Kodesh</Card.Title>
							<Card.Text className="team-card-position">
								<img className="harelL" src={SilverLake}/>
								<img className="harelS" src={GE}/>
								<img className="harelS" src={Dell}/>
								<img className="harelL" src={Microsoft}/>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				
			</Row>
			<Row>
				<Col>
					<Card className="team-card">
						<Card.Img className="team-card-img" variant="top" src={Sanjin}/>
						<Card.Body className="team-card-body">
							<Card.Title className="team-card-name">Sanjin Beloberk</Card.Title>
							<Card.Text className="team-card-position sanjin">
								<img src={Vitruvian}/>
								<img src={Barclays}/>
								<img src={McKinsey}/>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={8} className="team-profile">
					<p>Sanjin Beloberk is currently founder and owner of Pexfin, an investment and capital markets firm that specialises in FinTech businesses. He is also a successful entrepreneur, having successfully exited Ecurie25, a luxury car-rental company, in 2011.</p>
					<br/>
					<p>Sanjin's experience includes executive-level roles at several firms, including Vitruvian Partners, where he still holds a senior advisory role, and Barclays, where he served as chief operating officer for the financial institutions group and interim head of strategy and operations for new markets. Throughout his career, Sanjin has been a sought-after advisor, bringing his expertise in strategy, operations, and financial institutions to bear on a wide range of challenges. His passion for entrepreneurship and financial innovation has made him a valuable contributor to the fintech industry.</p>
					<br/>
					<p>Sanjin serves on the board of directors for Plum Fintech and as an advisor for a range of companies, including HintMD and Dicopay. Sanjin has led, co-invested and syndicated deals across the US and Europe with key investments into <b>One (acq. by Walmart)</b>, <b>HintMD (acq. by Revance)</b>, <b>Plum</b>, <b>Credit Key</b>, <b>Matic</b>, <b>Alpaca</b>, <b>Veem</b>, <b>Aduro</b>, <b>Marqeta</b>, and <b>Enfuce</b>.</p>
				</Col>
			</Row>
		</Container>


			<Container fluid className="team-intro">
				<p className="team-title">Meet the Collective</p>
				<div className="team-intro-body">
					<h3 className="team-text">At the core of what we do, we are a community of innovators and risk takers. Our firm was born in a London cafe in 2017, when our founding partners reflected on how crazy it was for founders to <i>risk losing 100% of their net worth</i> for a plethora of potential reasons. We spent the next 7 years transforming the UK funding ecosystem through the creation of pools of similar, high growth start-ups.</h3>
					<br/>
					<h4 className="team-text-smaller">We see the human side of being a founder, and while we're obsessed with offering the best tool for founders to diversify their exposure, we care immensely about the businesses and people we partner with. We foster a collaborative and close-knit community, not just within our team but also with all of our founder partners.</h4>
					<br/>
					<br/>
					<img className="team-img" src={TeamPic}/>
					<p className="team-img-caption">Mike Royston, Brian Pallas & Tristan Schnegg, Founding Partners at Collective Equity </p>
				</div>	
				
			</Container>

			<Container fluid className="team-cards-title">

						Collective Team
			</Container>

			<Container fluid="lg" className="team-cards">		
				<Row>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Brian} />
							<a>
								<div className="mask hide">
									Read full bio
								</div>
							</a>
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Brian Pallas</Card.Title>
								<Card.Text className="team-card-position">
									General Partner
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Mike}/>
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Mike Royston</Card.Title>
								<Card.Text className="team-card-position">
									General Partner
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Tristan} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Tristan Schnegg</Card.Title>
								<Card.Text className="team-card-position">
									General Partner
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<br/>
				<Row>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={David} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">David Carr</Card.Title>
								<Card.Text className="team-card-position">
									Chief Compliance Officer
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Eric} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Eric Shen</Card.Title>
								<Card.Text className="team-card-position">
									Investment Analyst
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Ziyi} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Ziyi Yap</Card.Title>
								<Card.Text className="team-card-position">
									Investment Analyst
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>


			<Container fluid className="team-cards-title">

						Advisors
			</Container>

			<Container fluid="lg" className="team-cards">		
				<Row>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Charles} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Charles Nahum</Card.Title>
								<Card.Text className="team-card-position">
									Advisor
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Guy} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Guy Rigby</Card.Title>
								<Card.Text className="team-card-position">
									Advisor
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
					</Col>
				</Row>
			</Container>
			<br/>
			<br/>
			<br/>
		</Container>
	);
}

export default Team;
