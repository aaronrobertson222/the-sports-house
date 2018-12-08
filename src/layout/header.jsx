import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

	state = {
		isActive: false,
	}

	toggleNav = () => {
		this.setState(prevState => ({
			isActive: !prevState.isActive,
		}));
	}

	render() {
		const links = ['NFL', 'CFB', 'NBA', 'CBB', 'MLB'];
		return (
			<nav
				className='navbar is-light'
				role='navigation'
				aria-label='main navigation'
			>
				<div className="container is-widescreen">
					<div className="navbar-brand">
						<Link className="navbar-item" to={`${process.env.PUBLIC_URL}/`}>
							<img
								src={require('../assets/images/main_logo.png')}
								alt="The Sports House"
							/>
						</Link>
						<button className="button navbar-burger" onClick={this.toggleNav}>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
					<div className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
						<div className="navbar-start">
							{links.map(link => (
								<Link className="navbar-item has-text-weight-bold" to={`${process.env.PUBLIC_URL}/topic/${link}`} key={link}>
									<span>{link}</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;