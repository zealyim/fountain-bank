const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const user = require("./routes/user");
const account = require("./routes/account");
const cors = require("cors");
const path = require('path');

app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, 'client/build')));
// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
// Cors middleware
app.use(cors());
// passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Mongo Database configuration
const db = require("./config/keys").mongoDbURI;
// Connect to MongoDb
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB successfully connected"))
	.catch(err => console.log(err));

// Routes
app.use("/api/user", user);
app.use("/api/account", account);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
