import React, { useState, useEffect } from 'react'
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
        <p>{result}</p>
            <form>
                <label>
                    Please Type Here:
                    <input type="text" name="name"></input>
                </label>
                <button>Submit</button>
            </form>  
        </>
    )
}

export default Play