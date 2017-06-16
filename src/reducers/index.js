import {combineReducers} from "redux";
import ReducerUser from "./reducerUser";

const rootReducer = combineReducers ({
  users: ReducerUser
});

export default rootReducer;
