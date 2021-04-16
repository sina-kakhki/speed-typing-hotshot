import React from 'react'
import { Route, Link } from 'react-router-dom'
import Play from './Play'
import Text from './Text'

function Instructions() {
    return (
        <>
        <Text />
        <div className="text-6xl flex flex-col items-center">
          <Link to="/Play" >
            <button className = "m-1 p-3 border-4 bg-black-500 hover:bg-red-700">Play!</button>
          </Link>
        </div>
        </>
    )
}

export default Instructions
