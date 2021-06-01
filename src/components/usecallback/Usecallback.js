import React, { useState, useCallback } from 'react';
import List from './List';

export default function Usecallback() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {  //use memo return a value but usecallback return a function so getItems is a function
        return  [number, number + 1, number + 2] 
    }, [number]);

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333' 
    }

    return (
        <div style={theme}>
            <input
            className="form-control w-75 d-inline"
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button className="btn btn-secondary" onClick={() => setDark(prevDark => !prevDark)}>
                Toggle
            </button>
            <List getItems={getItems} />
        </div>
    )
}
