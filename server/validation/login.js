const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
	let errors = {};
	// Convert all fields without character to empty fields
	data.pan = !isEmpty(data.pan) ? data.pan : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	// Client card check
	if (Validator.isEmpty(data.pan)) {
		errors.errors = "Client card number is required";
	}
	// Password check
	if (Validator.isEmpty(data.password)) {
		errors.errors = "Password is required";
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
