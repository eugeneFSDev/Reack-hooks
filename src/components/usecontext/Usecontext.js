import React, {useState } from 'react';
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

export default function Usecontext() {

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }
 

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button className="btn btn-secondary" onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeContext.Provider>
        </>
    )
}
