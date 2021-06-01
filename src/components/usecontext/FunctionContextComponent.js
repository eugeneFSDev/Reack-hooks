import React, { useContext }from 'react'
import { ThemeContext } from "./Usecontext";

export default function FunctionContextComponent() {

    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }

    return (
        <div className="w-75" style={themeStyles}>Function theme</div>
    )
}