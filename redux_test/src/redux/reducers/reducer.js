import { combineReducers } from "redux";
import filter from "./filter";
import todos from "./todos";

const reducer = combineReducers({
    todos: todos,
    filter: filter,
})

export default reducer