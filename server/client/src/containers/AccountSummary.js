import React from "react";
import history from "../history";
import { connect } from "react-redux";
import { getAccountSummary } from "../actions/index";

class AccountSummary extends React.Component {
	constructor() {
		super();
		this.headings = ['Account', 'Balance'];
	}
	
	componentWillMount(){
		if(!this.props.auth.isAuthenticated){
			history.push('/login');
		}
	}
	componentDidMount() {
		this.props.getAccountSummary(this.props.auth.user.id);
	}

	renderAccounts = accounts => {
		return accounts.map((account,index) => {
			return <tr><td key={index}>
				{account.accountType} - <span style={{
					color: "grey"
				}}>{account._id}</span>
			</td>
			<td key={index}>
			$ {account.balance}
		</td></tr>;

		});
	};
	render() {
		const accounts = this.props.accounts.accounts;

		return (
			<div>
				<table className="ui celled table">
				<thead>
				<tr>
					<th>{this.headings[0]}</th>
					<th>{this.headings[1]}</th>
				</tr>
				</thead>
					{accounts.length === 0
					? "No Accounts"
					: this.renderAccounts(accounts)}
					<tr>
						<td>
							Total Balance
						</td>
						<td>
							$ {accounts[0] && accounts[1] && accounts[0].balance + accounts[1].balance}
						</td>
						</tr>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return { accounts: state.accounts, auth: state.auth };
};
export default connect(
	mapStateToProps,
	{ getAccountSummary }
)(AccountSummary);
