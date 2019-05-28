const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Account = require("../models/Account");

router.get("/", function(req, res) {
	res.send("hello from route account");
});

// @route GET api/account/summary
// @desc get all accounts summary
// @access Public
router.get(
	"/summary",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		console.log("GET Account/Summary");
		Account.find({ userId: req.query.userId })
			.then(accounts => res.json(accounts))
			.catch(err => console.log(err));
	}
);

// @route POST api/account/create
// @desc get all accounts
// @access Public
router.post(
	"/create",
	// passport.authenticate("jwt", { session: false }),
	(req, res) => {
		console.log("POST Account/Create");
		const newAccount = new Account({
			userId: req.body.user.id,
			accountType: req.body.account.type,
			balance: req.body.account.balance
		});
		newAccount
			.save()
			.then(account => res.json(account))
			.catch(err => console.log(err));
	}
);

module.exports = router;
