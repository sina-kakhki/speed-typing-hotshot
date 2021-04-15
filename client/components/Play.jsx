import React from 'react'

//import api data
//import useState hook

function Play() {
    function handleClick(e) {
        e.preventDefault();
        console.log('the link has been clicked')
    }

    return (
        <>
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