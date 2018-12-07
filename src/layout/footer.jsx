import React from 'react';

import './footer.scss';

const Footer = () => (
	<footer className="footer" sytle={{ padding: '2rem 1.5rem 2rem' }}>
		<div className="content has-text-centered">
			<div className="socials" style={{ padding: '20px 0' }}>
				<p className="has-text-weight-semibold is-uppercase">
					Follow Us.
				</p>
				<span className="icon is-medium">
					<a href="https://www.twitter.com/TheSports_House" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-twitter fa-2x"></i>
					</a>
				</span>
				<span className="icon is-medium">
					<a href="https://www.instagram.com/the_sportshouse" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-instagram fa-2x"></i>
					</a>
				</span>
				<span className="icon is-medium">
					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-facebook fa-2x"></i>
					</a>
				</span>
			</div>
			<figure style={{ width: '100px', height: 'auto', margin: '10px auto' }}>
				<img src={require('../assets/images/main_logo.png')} alt="" style={{ width: '100px' }} />
			</figure>
			<p>Site Development By <a href="https://github.com/aaronr5">Ron.</a></p>
		</div>
	</footer >
);

export default Footer;