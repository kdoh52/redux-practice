// STEP 3: Create reducers for each action type, export
// go to store.js

// actions call reducers

// import actions
import { CREATE_TODO, REMOVE_TODO } from './actions'

// current state of array/var AND action type & payload
export const todos = (state = [], action) => {
    // action.type and action.payload
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            // payload.text
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            // return state with newTodo object
            return state.concat(newTodo)
        }
        case REMOVE_TODO: {
            const { text } = payload;
            // return state that filters out todos w/ matching text
            return state.filter(todo => todo.text !== text);
        }
        default: {
            // return state otherwise it will return as undefined
            return state;
        }
    }
}