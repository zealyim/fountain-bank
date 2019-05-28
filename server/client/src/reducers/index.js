import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import accountReducer from "./accountReducer";

export default combineReducers({
	form: formReducer,
	auth: authReducer,
	errors: errorReducer,
	accounts: accountReducer
});
