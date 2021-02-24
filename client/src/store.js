import { createStore, combineReducers } from "redux";

// import reducers
import { todos } from "./todos/reducers";

const reducers = {
    todos,
};

// combine reducers into 'rootReducer' variable
const rootReducer = combineReducers(reducers);

// export function that creates store using rootReducer
export const configureStore = () => createStore(rootReducer);