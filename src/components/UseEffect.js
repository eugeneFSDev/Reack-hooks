import React, {useState, useEffect} from 'react'


export default function UseEffect() {

    const [resourceType, setResourceType] = useState('posts');
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(res => res.json())
            .then(json => console.log(json));

            return () => {
                console.log("here I can cleanup before re-rendering ");
            }

    }, [resourceType])

    return (
        <>
            <div className="btn-group">
                <button className="btn btn-secondary" onClick={() => setResourceType('posts')}>Posts</button>
                <button className="btn btn-secondary" onClick={() => setResourceType('users')}>Users</button>
                <button className="btn btn-secondary" onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <p>The app is not calling the api if the state hasn't changed(check logs)</p>
        </>
    )
}
