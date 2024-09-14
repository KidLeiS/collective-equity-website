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

function Team() {
	return (
		<Container fluid className="team-page">
			<Container fluid className="team-intro">
				<p className="team-title">Meet the Collective</p>
				<div className="team-intro-body">
					<h3 className="team-text">At the core of what we do, we are a community of innovators and risk takers. Our firm was born in a London cafe in 2017, when our founding partners reflected on how crazy it was for founders to <i>risk losing 100% of their net worth</i> for a plethora of potential reasons. We spent the next 7 years transforming the UK funding ecosystem through the creation of pools of similar, high growth start-ups.</h3>
					<br/>
					<h4 className="team-text-smaller">We see the human side of being a founder, and while we're obsessed with offering the best tool for founders to diversify their exposure, we care immensely about the businesses and people we partner with. We foster a collaborative and close-knit community, not just within our team but also with all of our founder partners.</h4>
					<br/>
					<br/>
					<img className="team-img" src="src/assets/Team.jpg"/>
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

						Investment Committee
			</Container>

			<Container fluid="lg" className="team-cards">		
				<Row>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Ornit} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Ornit Shinar</Card.Title>
								<Card.Text className="team-card-position">
									Investment Committee
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Harel} />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Harel Kodesh</Card.Title>
								<Card.Text className="team-card-position">
									Investment Committee
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src={Sanjin}/>
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Sanjin Beloberk</Card.Title>
								<Card.Text className="team-card-position">
									Investment Committee
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
