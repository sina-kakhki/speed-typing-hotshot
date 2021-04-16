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
        <div className= 'flex flex-col items-center'>
        <Text />
<<<<<<< HEAD
        <button>Play</button>
        </div>
=======
        <button onClick={handleClick}>Play!</button>
>>>>>>> b108f28b6ab565cc91c358ac518c06db6f168c81
        </>
    )
}

export default Instructions
