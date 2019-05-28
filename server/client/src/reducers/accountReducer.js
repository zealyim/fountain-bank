import { GET_ACCOUNT_SUMMARY } from "../actions/types";

const initialState = {
	accounts: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ACCOUNT_SUMMARY:
			return {
				...state,
				accounts: action.payload
			};
		default:
			return state;
	}
}
