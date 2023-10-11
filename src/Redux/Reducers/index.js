import { combineReducers } from "redux";
import todoReducer from "../Ducks/TodoDuck";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
