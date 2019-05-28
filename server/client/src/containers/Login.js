import React from "react";
import { Link } from "react-router-dom";
import UserLoginForm from "../components/UserLoginForm";
import { connect } from "react-redux";
import { logUserIn } from "../actions";

class Login extends React.Component {
	constructor() {
		super();
		this.state = { errors: null };
	}
	onSubmit = formValues => {
		this.props.logUserIn(formValues);
	};
	render() {
		return (
			<div className="ui placeholder segment">
				<div className="ui two column very relaxed stackable grid">
					<div className="column" style={{
							textAlign: "center",
						}}>
						<h2 className="ui header" >
							<div className="content">Log-in to your account</div>
						</h2>
						<h5 style={{
							color: "red"
						}}>{this.props.errors.errors}</h5>
						<UserLoginForm onSubmit={this.onSubmit} />
					</div>
					<div className="middle aligned column">
						<Link className="ui big button" to="/register">
							Enroll Now
						</Link>
					</div>
				</div>
				<div className="ui vertical divider">Or</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { errors: state.errors };
};

export default connect(
	mapStateToProps,
	{ logUserIn }
)(Login);
