import history from "../history";
import bankHost from "../apis/bankHost";
import SetAuthToken from "../utils/SetAuthToken";
import {
	GET_ERRORS,
	USER_LOADING,
	SET_CURRENT_USER,
	GET_ACCOUNT_SUMMARY
} from "./types";

// Login - request user token
export const logUserIn = userData => async (dispatch, getState) => {
	bankHost
		.post("https://stormy-scrubland-62926.herokuapp.com/api/user/login", userData)
		.then(res => {
			// Save to localStorage
			localStorage.setItem("Authorization", res.data.token);

			SetAuthToken(localStorage.getItem("Authorization"));
			dispatch({
				type: SET_CURRENT_USER,
				payload: { isAuthenticated: true, user: res.data.user }
			});
			history.push("/account");
		})
		.catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Get all Accounts Summary
export const getAccountSummary = userId => async (dispatch, getState) => {
	SetAuthToken(localStorage.getItem("Authorization"));
	bankHost
		.get(`https://stormy-scrubland-62926.herokuapp.com/api/account/summary?userId=${userId}`)
		.then(res => dispatch({ type: GET_ACCOUNT_SUMMARY, payload: res.data }))
		.catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Register User
export const userRegister = userData => (dispatch, getState) => {
	bankHost
		.post("https://stormy-scrubland-62926.herokuapp.com/api/user/register", userData)
		.then(res => history.push("/login"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
