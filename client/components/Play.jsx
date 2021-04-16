import React, { useState, useEffect } from 'react'
import Result from './Result'
const dbapi = require('../apiClient')

function Play() {
    const [ result, setResult ] = useState([])

    useEffect(() => {
        dbapi.getQuote()
        .then(res => {
            console.log(res)
            setResult(res)
            return null
        })
        .catch(err => console.error(err))
    }, [])

    function handleClick(e) {
        e.preventDefault();
        console.log('the link has been clicked')
    }

    return (
        <>
            <p>{result}</p>
            <form>
                <label>
                    Please Type Here:
                    <input type="text" name="name"></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>

            <button onClick={handleClick} type="submit">Submit</button>
        </>
    )
}

export default Play