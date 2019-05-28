const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
	let errors = {};
	// Convert all fields without character to empty fields
	data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
	data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
	data.pan = !isEmpty(data.pan) ? data.pan : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.password2 = !isEmpty(data.password2) ? data.password2 : "";
	// First name check
	if (Validator.isEmpty(data.firstName)) {
		errors.name = "First name is required";
	}
	// Last name check
	if (Validator.isEmpty(data.lastName)) {
		errors.name = "Last name is required";
	}
	// Email check
	if (Validator.isEmpty(data.pan)) {
		errors.pan = "Client card number is required";
	}
	// Password check
	if (Validator.isEmpty(data.password)) {
		errors.password = "Password is required";
	}
	if (Validator.isEmpty(data.password2)) {
		errors.password2 = "Confirm password is required";
	}
	if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
		errors.password = "Password must be at between 8 - 30 characters";
	}
	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = "Confirm password does not match";
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
