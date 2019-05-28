import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ErrorNotFound from "./components/ErrorNotFound";
import AccountSummary from "./containers/AccountSummary";
import history from "./history";

function App() {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route path="/account" exact component={AccountSummary} />
						<Route path="/" exact component={Login} />
						<Route path="*" component={ErrorNotFound} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
