import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'

import Result from './Result'
const dbapi = require('../apiClient')

function Play() {
    const [ result, setResult ] = useState([])

    function getQuoteFromDB() {
        dbapi.getQuote()
        .then(quote => {
            return quote
        })
    }

    useEffect(() => {
        dbapi.getQuote()
        .then(res => {
            console.log(res)
            setResult(res)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <>
        <p className="text-5xl flex flex-col items-center pb-7">{result}</p>
            <form className="text-6xl flex flex-col items-center">
                <label>
                    Please Type Here:
                    <input type="text" name="name"></input>
                </label>
                <Link to="/Result" >
                <button className = "m-1 p-3 border-4 bg-black-500 hover:bg-red-700">Submit</button>
          </Link>
            </form>  
        </>
    )
}

export default Play