import React, { Component } from 'react'
import './App.css'
import { Header } from '../components'
import GameIntro from './GameIntro'
import GameBoard from './GameBoard'

class App extends Component {
  render () {
    return (
      <main className='App'>
        <Header />
        <GameIntro />
        <GameBoard />
      </main>
    )
  }
}

export default App
