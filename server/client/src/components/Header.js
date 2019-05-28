import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const renderLoggedInHeader = () => {
	return (
		<div className="ui red labeled inverted large menu">
			<Link className="item" to="/account">
				<i className="paper plane icon" />
				Fountain Bank
			</Link>
			<div className="right menu">
				<Link className=" item" to="/account">
					<i className="list alternate icon" />
					Account Summary
				</Link>
			</div>
		</div>
	);
};
const renderNormalHeader = () => {
	return (
		<div className="ui labeled red inverted  large menu">
			<Link className="item" to="/">
				<i className="paper plane icon" />
				Fountain Bank
			</Link>
			<div className="right menu">
				<Link className=" item" to="/login">
					<i className="lock icon" />
					Login
				</Link>
				<Link className=" item" to="/register">
					<i className="user plus icon" />
					Register
				</Link>
			</div>
		</div>
	);
};
const Header = props => {
	return (
		<div>
			{props.auth.isAuthenticated
				? renderLoggedInHeader()
				: renderNormalHeader()}
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
