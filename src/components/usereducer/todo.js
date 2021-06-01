import React from 'react';

export default function Todo({ todo, dispatch, index }) {

    return (
        <div> 
            <span className="me-3" style={{color: todo.complete ? '#0A0' : '#A00' }}>{index+1}:{todo.name}</span>
            <button className="btn btn-secondary btn-sm" onClick={() => dispatch({ type: 'toggle-todo', params: { id: todo.id }})}>Toggle</button>
            <button className="btn btn-secondary btn-sm" onClick={()=> dispatch({ type: 'delete', params: {id: todo.id} })}>Delete</button>
        </div>
    )
}