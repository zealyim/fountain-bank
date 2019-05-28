import React from "react";
import UserRegisterForm from "../components/UserRegisterForm";
import { connect } from "react-redux";
import { userRegister } from "../actions/index";

class Register extends React.Component {
	constructor() {
		super();
		this.state = { errors: null };
	}
	onSubmit = formValues => {
		this.props.userRegister(formValues);
	};
	render() {
		return (
			<div name="ui center aligned grid">
				<h2 className="ui image header">
					<div className="content">Enroll to online banking</div>
				</h2>
				<h3>{this.props.errors.errors}</h3>
				<UserRegisterForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { errors: state.errors };
};

export default connect(
	mapStateToProps,
	{ userRegister }
)(Register);
