import React from 'react'
import { Route, Link } from 'react-router-dom'


function Home () {
    function handleClick(event) {

    }
    return (
        <>
        <div className="flex items-center">
          <Link to="/" >
            <button>Home</button>
          </Link>
        </div>
        <div className="align-text-bottom">
            <h2>Team Speed 2020 ©</h2>
        </div>
        </>
    )
}

export default Home