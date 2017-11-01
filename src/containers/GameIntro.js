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
          2. click on board to pick a start point.
        </div>
        <div className='Intro-panel'>
          3. press arrow keys to escape from monsters chasing
        </div>
      </section>
    )
  }
}

export default GameIntro
