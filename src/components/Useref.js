import React, { useState, useRef, useEffect } from 'react';

export default function Useref() {
    
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef();

    useEffect(() => {
        renderCount.current = renderCount.current + 1; //now it wont call itself auto from return function
        prevName.current = name;
    }, [name])


    function focus() {
        inputRef.current.focus();
        inputRef.current.value= "some value";
    }
 
    return (
        <>
            <input className="form-control" ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is "{name}" and it used to be "{prevName.current}"</div>
            <div>It was rendered <strong>{renderCount.current}</strong> times</div>
            <button className="btn btn-secondary" onClick={focus}>Focus on input</button>
        </>
    )
}

