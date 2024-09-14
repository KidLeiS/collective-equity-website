import { Container, Row, Col, Card} from 'react-bootstrap'
import "./styles/team.css"

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

						Investment
			</Container>

			<Container fluid="lg" className="team-cards">		
				<Row>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src="src/assets/Brian.jpg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Mike.jpg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Tristan.jpeg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Eric.jpeg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Ziyi.jpeg" />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Ziyi Yap</Card.Title>
								<Card.Text className="team-card-position">
									Investment Analyst
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Ornit.jpeg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Harel.jpeg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Sanjin.jpeg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/David.jpeg" />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">David Carr</Card.Title>
								<Card.Text className="team-card-position">
									Compliance Officer
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="team-card">
							<Card.Img className="team-card-img" variant="top" src="src/assets/Charles.jpg" />
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
							<Card.Img className="team-card-img" variant="top" src="src/assets/Guy.jpeg" />
							<Card.Body className="team-card-body">
								<Card.Title className="team-card-name">Guy Rigby</Card.Title>
								<Card.Text className="team-card-position">
									Advisor
								</Card.Text>
							</Card.Body>
						</Card>
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
