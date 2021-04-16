import React from 'react'
import { Route, Link } from 'react-router-dom'


function Home () {
    function handleClick(event) {

    }
    return (
        <>
        <div className="flex items-center">
          <Link to="/" >
            <button className="m-7 p-7 border-4  text-6xl">Home</button>
          </Link>
        </div>
        <div>
          <img src='./images/Speed-movie-logo.png' alt='logo'></img>
        </div>
        <div className="absolute bottom-0 left-0 p-11 align-text-bottom text-6xl ">
            <h2>Team Speed 2021 ©</h2>
        </div>
        </>
    )
}

export default Home