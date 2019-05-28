const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateUserRegister = require("../validation/register");
const validateUserLogin = require("../validation/login");
const User = require("../models/User");
const Account = require("../models/Account");
const saltRounds = 12;

router.get("/", function (req, res) {
	res.send("hello from route user");
});

// @route POST api/user/register
// @desc register a user
// @access Public
router.post("/register", (req, res) => {
	console.log("POST User/Register");
	// Validate user info from form
	const {
		errors,
		isValid
	} = validateUserRegister(req.body);
	// User info is not valid
	if (!isValid) {
		return res.status(400).json(errors);
	}
	// User info is valid
	// Check if user already exist
	User.findOne({
		pan: req.body.pan
	}).then(isExist => {
		if (isExist) {
			return res
				.status(400)
				.json({
					errors: "Client card number already enrolled"
				});
		} else {
			const newUser = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				pan: req.body.pan,
			});
			// Hash password before saving in database
			bcrypt.genSalt(saltRounds, async (err, salt) => {
				bcrypt.hash(req.body.password, salt, async (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					console.log(hash)
					newUser
						.save()
						.then(async user => {

							const data = [{
									userId: user._id,
									accountType: "Chequing",
									balance: 0
								},
								{
									userId: user._id,
									accountType: "Savings",
									balance: 0
								}
							];

							const Chequing = new Account(data[0]);
							const Savings = new Account(data[1]);
							await Chequing.save();
							await Savings.save();
							res.json(user)

						})
						.catch(err => console.log(err));
				});
			});
		}
	});
});

// @route POST api/user/login
// @desc Log user in and return JWT token
// @access Public
router.post("/login", (req, res) => {
	console.log("POST User/Login");
	// Validate user info from form
	const {
		errors,
		isValid
	} = validateUserLogin(req.body);
	// User info is not valid
	if (!isValid) {
		return res.status(400).json(errors);
	}
	// User info is valid
	const pan = req.body.pan;
	const password = req.body.password;
	// Find user by email
	User.findOne({
		pan
	}).then(user => {
		// User does not exist
		if (!user) {
			return res.status(404).json({
				errors: "Client card not enrolled"
			});
		}
		// Validate password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// Password matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					firstName: user.firstName,
					lastName: user.lastName
				};
				// return signed token
				jwt.sign(
					payload,
					keys.secretOrKey, {
						expiresIn: 1800 // 30 minutes
					},
					(err, token) => {
						res.json({
							user: payload,
							success: true,
							token: "Bearer " + token
						});
					}
				);
				// Return error for mismatch password
			} else {
				return res.status(400).json({
					errors: "Password incorrect"
				});
			}
		});
	});
});

module.exports = router;