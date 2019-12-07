import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

// import styling
import "./Header.scss";

class Header extends Component {
	render() {
		return (
			<div className="header-wrapper">
				<Link to="/" className="header-logo">
					<h3>H3rra</h3>
				</Link>
				<div className="header-links">
					<HashLink to="#services" className="link">
						Services
					</HashLink>
					<HashLink to="#faq" className="link">
						FAQ
					</HashLink>
					<HashLink to="#about-us" className="link">
						About Us
					</HashLink>
					<HashLink
						to="#"
						className="link"
						onClick={this.props.toggleAuthModal}
					>
						Login/Signup
					</HashLink>
				</div>
			</div>
		);
	}
}

export default Header;