import React from 'react'
import { Route } from 'react-router-dom'


import Text from './Text'

function Instructions() {
    function handleClick(e) {
        e.preventDefault();
        console.log('the link has been clicked')
    }
    return (
        <>
        <Text />
        <button onClick={handleClick}>Play!</button>
        </>
    )
}

export default Instructions
