import React, {useState} from "react";
import axios from 'axios'

function test() {
    cost [message, setMessage] = useState('')
    const getMessage =()=> {
        axios.get('http://localhost:8000').then(
            res=>{
                console.log(res)
                setMessage(res.data)
            }
        )
    }
    return (
        <>
        <button onClick={getMessage}>Press Here</button>
        {message && <h1>{message}</h1>}
        </>
    )
}

export default Test