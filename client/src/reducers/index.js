import { combineReducers } from "redux";
import isLoggedReducer from "./isLogged";

const rootReducer = combineReducers({
  isLoggedReducer
});

export default rootReducer;
