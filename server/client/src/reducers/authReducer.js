import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const initialState = {
	isAuthenticated: false,
	user: {},
	loading: false,
	error: null
};
export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: action.payload.isAuthenticated,
				user: action.payload.user,
				error: null
			};
		case USER_LOADING:
			return {
				...state,
				loading: true,
				error: null
			};
		default:
			return state;
	}
}
