import { createStore, combineReducers } from "redux";

const reducers = {};

// combine reducers into 'rootReducer' variable
const rootReducer = combineReducers(reducers);

// export function that creates store using rootReducer
export const configureStore = () => createStore(rootReducer);