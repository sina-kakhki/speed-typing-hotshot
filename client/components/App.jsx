import React, {useState, useEffect} from 'react'
import {getGreeting} from '../apiClient'

import Instructions from './Instructions'
import Play from './Play'
import Result from './Result'

const App = () => {

  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
      })
  }, [count])

  return (
    <>
    <h1>Speed touch Typing</h1>
    <Instructions />
    
    </>
  )
}

export default App
