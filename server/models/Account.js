const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	accountType: {
		type: String,
		require: true
	},
	balance: {
		type: Number,
		required: true
	}
});
module.exports = Account = mongoose.model("account", AccountSchema);
