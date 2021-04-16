import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'

import {getGreeting} from '../apiClient'

import Instructions from './Instructions'
import Play from './Play'
import Result from './Result'
import Text from './Text'
import Home from './Home'
import Footer from './footer'

const App = () => {

  return (
    <>
    <div className='bg-gray-800'>
    <Home />
    <h1>Speed Touch Typing</h1>
    <Route exact path='/' component={Instructions} />
    <Route exact path ='/Play' component={Play} />
    <Footer />
    </div>
    </>
  )
}

export default App
