import React from 'react'
import { Route } from 'react-router-dom'


import Text from './Text'

function Instructions() {
    return (
        <>
        <div className= 'flex flex-col items-center'>
        <Text />
        <button>Play</button>
        </div>
        </>
    )
}

export default Instructions
