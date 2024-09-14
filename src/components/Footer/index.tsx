import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

const faq = {
	pathname: '/about',
	hash: '#faq'
}

function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer">
				
					<div className="footer-main">
						<div className="footer-left">
							<div className="footer-upper">
								<Link to="./">
									<img src='src/assets/logo_white.png'/>
								</Link>
							</div>
							<div className="footer-caption">
								<p>Funds by Collective Equity Ownership Limited are operated by Khepri Fund Management Limited, who is authorised and regulated by the Financial Conduct Authority (FRN 193171)</p>
								<br/>
								<p>London © 2024, Collective Equity Ownership Limited </p>
							</div>

					
						</div>
						<div className="footer-body">
							<ul className="footer-panel-list">
									<li>
										<ul>
											<li>
												<Link to='/about' className="footer-link">Our History</Link>
											</li>
											<li>
												<Link to='/portfolio' className="footer-link">Track Record</Link>
											</li>
											<li>
												<Link to={faq} className="footer-link">FAQs</Link>
											</li>
											<li>
												<a href="https://uk.linkedin.com/company/collective-equity-ownership" className="footer-link">LinkedIn</a>
											</li>
										</ul>
									</li>

									<li>
										<ul>
											<li>
												<Link to='/' className="footer-link">Privacy</Link>
											</li>
											<li>
												<Link to='/' className="footer-link">Cookies</Link>
											</li>
											<li>
												<Link to="/" className="footer-link">Terms</Link>
											</li>
										</ul>
									</li>

							</ul>
						</div>
							
					</div>

				

			</div>
		</footer>
	);
}

export default Footer;
