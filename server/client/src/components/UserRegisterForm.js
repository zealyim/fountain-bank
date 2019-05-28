import React from "react";
import { Field, reduxForm } from "redux-form";

class UserRegisterForm extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			pan: "",
			password: "",
			password2: "",
			loginError: {}
		};
	}
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header" style={{
						color: 'red'
					}}>{error}</div>
				</div>
			);
		}
	}
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	};
	render() {
		return (
			<form className="ui form error" onSubmit={this.onSubmit}>
				<Field
					name="firstName"
					component={this.renderInput}
					type="text"
					label="First name:"
					placeholder="First name"
					onChange={this.onChange}
				/>
				<Field
					name="lastName"
					component={this.renderInput}
					type="text"
					label="Last name:"
					placeholder="Last name"
					onChange={this.onChange}
				/>
				<Field
					name="pan"
					component={this.renderInput}
					type="number"
					label="Client card number:"
					placeholder="Client card number"
					onChange={this.onChange}
				/>
				<Field
					name="password"
					component={this.renderInput}
					type="text"
					label="Password:"
					placeholder="Password"
					onChange={this.onChange}
				/>
				<Field
					name="password2"
					component={this.renderInput}
					type="text"
					label="Confirm password:"
					placeholder="Confirm password"
					onChange={this.onChange}
				/>
				<button className="ui button primary" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};

	if (!formValues.firstName) {
		errors.firstName = "You must enter a First Name";
	}
	if (!formValues.lastName) {
		errors.lastName = "You must enter a Last Name";
	}
	if (!formValues.pan) {
		errors.pan = "You must enter a client card number";
	}
	if (!formValues.password) {
		errors.password = "You must enter a password";
	}
	if (!formValues.password2) {
		errors.password2 = "You must enter a confirm password";
	}

	return errors;
};

export default reduxForm({
	form: "UserRegisterForm",
	validate
})(UserRegisterForm);
