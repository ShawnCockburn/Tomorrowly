import { createStore, combineReducers } from "redux";

import todos from "./reducers/todos";

const rootReducer = combineReducers({
  todos: todos
});

export default createStore(rootReducer);


