import React from 'react'
import { Route, Link } from 'react-router-dom'
import Play from './Play'
import Text from './Text'

function Instructions() {
    return (
        <>
        <Text />
        <div className="flex items-center">
          <Link to="/Play" >
            <button>Play!</button>
          </Link>
        </div>
        </>
    )
}

export default Instructions
