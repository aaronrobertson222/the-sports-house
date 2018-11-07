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
		return (
			<nav
				className='navbar is-light'
				role='navigation'
				aria-label='main navigation'
			>
				<div className="container is-widescreen">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
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
							<Link className="navbar-item" to="/cbb">
								<span>NCAAB</span>
							</Link>
							<Link className="navbar-item" to="cfb">
								<span>CFB</span>
							</Link>
							<Link className="navbar-item" to="nba">
								<span>NBA</span>
							</Link>
							<Link className="navbar-item" to="/other">
								<span>Other</span>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header;