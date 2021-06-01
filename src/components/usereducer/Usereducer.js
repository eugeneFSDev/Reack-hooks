import React, { useReducer, useState } from 'react';
import Todo from './todo';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE: 'delete'
}

function reducer(todos, action) {
    switch (action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.params.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.params.id) return {...todo, complete: !todo.complete}
                return todo
            })
        case ACTIONS.DELETE:
            return todos.filter(todo => todo.id !== action.params.id)
    default:
        return
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

export default function Usereducer() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, params: {name: name} });
        setName("");
    }
    
    console.log(todos);

    return (
        <>  
            <h3>ToDo List</h3>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-2" type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map((todo, index) => {
                return <Todo key={todo.id} todo={todo} index={index} dispatch={dispatch} />
            })}
        </>
    )
}
