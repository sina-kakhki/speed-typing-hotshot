import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'

import {getGreeting} from '../apiClient'

import Instructions from './Instructions'
import Play from './Play'
import Result from './Result'
import Text from './Text'
import Home from './Home'

const App = () => {

  return (
    <>
    <Home />
    <h1>Speed Touch Typing</h1>
    <Route exact path='/' component={Instructions} />
    
    </>
  )
}

export default App
