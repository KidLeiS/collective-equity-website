import {Container, Card} from 'react-bootstrap'
import "./styles/news.css"

import Forbes from '../assets/Forbes.png'
import TheTimes from '../assets/TheTimes.svg'
import Sifted from '../assets/Sifted.png'

function News() {
	return (
		<Container className="news-wrapper">
			<Container fluid className="news-banner">
				<h1>Collective Equity launches </h1>
				<h1>£36m second fund</h1>
				<p>Distributing £10m in cash to founders</p>
				<br/>
				<a href="https://www.collectiveequity.com/collective-equity-launches-second-36m-fund" className="news-button"><p>Read more</p></a>
        	</Container>
			<Container fluid className="news-tiles">
					<Card className="news-card">
									<Card.Img className="news-card-img" variant="top" src={Forbes} />
									<Card.Body className="news-card-body">
										<Card.Title className="news-card-title">Togetherness: Can A Collective Investment Fund Help Founders Solve Their Liquidity Problems?</Card.Title>
										<Card.Text className="news-card-text">
											As a general rule, founders don’t get a lot of sympathy from the public at large. We live in an era where entrepreneurs are celebrated and even lionized while their success stories are widely covered in the media…
										</Card.Text>
									</Card.Body>
									
					</Card>
					<Card className="news-card">
                                <Card.Img className="news-card-img" variant="top" src={TheTimes} />
                                <Card.Body className="news-card-body">
                                    <Card.Title className="news-card-title">Founders team up to pool their equity</Card.Title>
                                    <Card.Text className="news-card-text">
										Mike Royston and Tristan Schnegg, co-founders of Collective Equity, say the fund is a first for those hoping to enter a legally binding limited partnership to pool equity and risk…                                    </Card.Text>
                                </Card.Body>
                                
                </Card>
					<Card className="news-card">
                                <Card.Img className="news-card-img" variant="top" src={Sifted} />
                                <Card.Body className="news-card-body">
                                    <Card.Title className="news-card-title">Should founders pool their equity with other founders?</Card.Title>
                                    <Card.Text className="news-card-text">
									In the past few years, Europe’s tech ecosystem has been tweaking its model.

First-generation founders are raising their own VC funds. There’s been a rise in VC-backed angel networks. Tech has been developed to make giving employees ownership easier….                                   </Card.Text>
                                </Card.Body>
                                
                	</Card>
				
			</Container>
		</Container>
	);
}

export default News;
