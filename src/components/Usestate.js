import React, {useState} from 'react';

export default function Usestate() {
    
    const [state, setState] = useState({count: 0, name: "Counter"});
    const count = state.count;
    const name = state.name;

    function increment() {
        setState(prevState => { 
            return {...prevState, count: prevState.count + 1}
        });
    }

    function decrement() {
        setState(prevState => { 
            return {...prevState, count: prevState.count - 1}
        });
    }
    
    return (
        <div>
            <button className="btn btn-secondary me-2" onClick={decrement}>-</button>
            <span>{name}: </span>
            <span>{count}</span>
            <button className="btn btn-secondary ms-2" onClick={increment}>+</button>
        </div>
    )
}
