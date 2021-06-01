import React, { useState, useMemo } from 'react';

export default function Usememo() {
    
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => { //not calling slowfunction if number havent changed
       return slowFunction(number);
    }, [number])

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark])

    return (
        <>
            <input className="form-control" type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button className="btn btn-secondary my-2" onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div className="w-50 text-center" style={themeStyles}>Double the input: {doubleNumber}</div>
        </>
    )
}

function slowFunction(num) {
    console.log("call slowfunction");
    for (let i = 0; i <= 10; i++) {} //make it 1000000000 to slow your code
    return num*2;
}
