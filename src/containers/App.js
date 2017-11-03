import React, { Component } from 'react'
import fscreen from 'fscreen'

import './App.css'
import { Header } from '../components'
import GameIntro from './GameIntro'
import GameBoard from './GameBoard'

class App extends Component {
  state = {
    isFullScreen: false
  }

  toggleFullScreen = () => {
    if (fscreen.fullscreenElement) {
      fscreen.exitFullscreen()
      this.setState({ isFullScreen: false })
    } else {
      this.setState({ isFullScreen: true })
      fscreen.requestFullscreen(document.getElementById('root'))
    }
  }
  render () {
    return (
      <main className='App'>
        <Header
          isFullScreen={this.state.isFullScreen}
          toggleFullScreen={this.toggleFullScreen}
        />
        <GameIntro />
        <GameBoard />
      </main>
    )
  }
}

export default App
