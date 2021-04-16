import React from 'react'

function Home () {
    function handleClick(event) {

    }
    return (
        <>
        <div>
            <button onClick={handleClick}>Home</button>
        </div>
        <div className="align-text-bottom">
            <h2>Centre me at bottom of page©</h2>
        </div>
        </>
    )
}

export default Home