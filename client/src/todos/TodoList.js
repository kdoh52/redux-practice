import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

// connect component to redux
import { connect } from "react-redux";
import { removeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
    </div>
);


// connecting todolist component to store
const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);