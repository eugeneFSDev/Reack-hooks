import React from 'react';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

export default function Customhook() {

    const [name, setName] = useLocalStorage("name", '');

    useUpdateLogger(name);

    return (
        <>  
            <input
                className="form-control"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p>Input value: {name}</p>
        </>
    )
}
