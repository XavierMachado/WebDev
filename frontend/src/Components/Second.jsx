import React, { Component } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:8000/api/users'
})

export class Second extends Component {
    constructor(){
        super();
        api.get('./').then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <h1>The Second</h1>
            </div>
        )
    }
}

export default Second