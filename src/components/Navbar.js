import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../favicon.png";
import Emoji from "../components/Emoji";
import { hostname } from "os";

class Navbar extends React.Component {
	state = {
		isActive: false
	};

	toggleNav = () => {
		this.setState(prevState => ({
			isActive: !prevState.isActive
		}));
		console.log("TOGGLE");
	};
	render() {
		return (
			<nav
				className="navbar"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item">
							<img
								src={logo}
								alt="Home"
								style={{ height: "50px" }}
							/>
						</Link>
						<a
							role="button"
							className="navbar-burger burger"
							onClick={this.toggleNav}
							aria-label="menu"
							aria-expanded="false"
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>

					<div
						className={
							this.state.isActive
								? "navbar-menu is-active"
								: "navbar-menu"
						}
					>
						<div className="navbar-start">
							<Link className="navbar-item" to="/about">
								About
							</Link>
							<Link className="navbar-item" to="/history">
								History
							</Link>
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								{/* Log in */}
								<a
									className="button"
									href="https://www.kayleeanddevin.com/admin"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
export default Navbar;
