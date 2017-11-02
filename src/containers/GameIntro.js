import React, { PureComponent } from 'react'
import './GameIntro.css'
import PlayerSetup from './PlayerSetup'

class GameIntro extends PureComponent {
  render () {
    return (
      <section className='Intro'>
        <div className='Intro-panel'>
          <PlayerSetup />
        </div>
        <div className='Intro-panel'>
          <div className='Intro-text'>
            Click on board to pick your position to start the Game.
          </div>
        </div>
        <div className='Intro-panel'>
          <div className='Intro-text'>
            Press arrow keys to escape from monsters chasing.
          </div>
        </div>
      </section>
    )
  }
}

export default GameIntro
