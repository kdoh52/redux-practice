// STEP 1: Create a var equal to it's own name
// STEP 2: Create partnering var equal to function that creates type & payload
// next go to reducers.js

export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
})