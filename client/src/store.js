// STEP 4: create store w/ reducers
// go to index.js

import { createStore, combineReducers } from "redux";

// making redux store persist through refreshes
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// import reducers
import { todos } from "./todos/reducers";

const reducers = {
    todos,
};

// object that tells redux-persist how and where to save data
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

// combine reducers into 'rootReducer' variable
const rootReducer = combineReducers(reducers);

// wrap rootReducer in persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export function that creates store using rootReducer
export const configureStore = () => 
    createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

// make it persist in index.js as well