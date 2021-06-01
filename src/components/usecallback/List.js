import React, {useEffect} from 'react'

export default function List({ getItems }) {

    useEffect(() => {
        console.log("but not here");
    }, [getItems])
    console.log("called again");
    return (
        <div>
            {getItems().map(number => {
                return <p key={number}>{number}</p>
            })}
        </div>
    )
}

