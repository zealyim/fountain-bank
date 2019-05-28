import axios from "axios";

const setAuthToken = token => {
	if (token) {
		// Add token to header
		axios.defaults.headers.common["Authorization"] = token;
	} else {
		// Delete auth header
		delete axios.defaults.headers.common["Authorization"];
	}
};
export default setAuthToken;
