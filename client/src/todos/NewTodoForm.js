import React, { useState } from 'react';
import './NewTodoForm.css';

// connect component to redux
import { connect } from "react-redux";
import { createTodo } from "./actions";


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    // use redux todos state to check if duplicate
                    const isDuplicateText = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button"
                >
                    Create Todo
            </button>
        </div>
    );
};

// maps through state of entire application to provide props needed
// aka it allows access to the data in the store
const mapStateToProps = state => ({
    // set todos as props
    todos: state.todos,
});

// dispatch triggers a redux action
// aka it allows you to change the data in the store
const mapDispatchToProps = dispatch => ({
    // set onCreatePressed as props
    onCreatePressed: text => dispatch(createTodo(text)),
});

// connect () to ()
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
