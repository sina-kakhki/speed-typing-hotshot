import React from 'react'
import { Route, Link } from 'react-router-dom'


function Home () {
    function handleClick(event) {

    }
    return (
        <>
        <container className="flex">
          <Link to="/" >
            <button className="m-7 p-7 border-4 text-6xl hover:bg-red-700 sm:text-green-400 md:text-yellow-400 lg:text-red-400">Home</button>
          </Link>
          <div className="ml-72">
          <img src='./images/Speed-movie-logo.png' alt='logo'></img>
          </div>
        </container>
        <div className="absolute bottom-0 left-0 p-11 align-text-bottom text-6xl sm:text-green-400 md:text-yellow-400 lg:text-red-400">
            <h2>Team Speed 2021 ©</h2>
        </div>
        </>
    )
}

            // sm:text-green-100 md:bg-blue-500 lg:bg-yellow-600 
            // sm:text-yellow-300 md:text-red-400 lg:text-blue-500"

export default Home