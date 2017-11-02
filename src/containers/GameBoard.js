import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './GameBoard.css'
import * as actions from '../actions'

import { Player, Monster, Square, Dead } from '../components/'
import { LEFT, UP, RIGHT, DOWN, GAME_STATUS } from '../constants/settings'

class GameBoard extends Component {
  // ------------ Life cycle methods -----------//
  componentDidMount () {
    window.addEventListener('keydown', this.movePlayer)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.movePlayer)
  }

  movePlayer = e => {
    const { board, player, gameActions } = this.props
    if (board.status === GAME_STATUS.running) {
      let newDir = player.direction
      switch (e.which) {
        case UP:
          newDir = 'up'
          break
        case DOWN:
          newDir = 'down'
          break
        case LEFT:
          newDir = 'left'
          break
        case RIGHT:
          newDir = 'right'
          break
        default:
          return
      }
      gameActions.movePlayer(newDir)
    }
  }

  // ------------ Events handlers --------------//
  /**
   * Handler of clicking on a square of the board.
   * If player's ID is already set, return.
   * If picked the same spot with one of the monsters, return. //TODO: give warning
   * Otherwise, dispatch pickPosition action.
   */
  onBoardClick = e => {
    e.preventDefault()
    const { player, monsters, gameActions } = this.props

    if (player.id >= 0) {
      return
    }
    const pickedId = parseInt(e.target.id, 10)
    if (monsters.indexOf(pickedId) > -1) {
      return
    }

    gameActions.pickPosition(pickedId)
    gameActions.start()
  }

  /**
   * Handler of clicking on restart button.
   * Reload the page to start over.
   * TODO: add 'START, PAUSE, RESUME, STOP' buttons to control game process.
   */
  onRestartClick = e => {
    window.location.reload(false)
  }

  /**
   * Render squares on board based on the type: player, monster or regular sqaure.
   */
  renderSquares = () => {
    const { board, monsters, player } = this.props
    return board.squares.map((square, index) => {
      if (square.dead) {
        return <Dead key={index} id={square.id} />
      }
      if (monsters.findIndex(m => m.currentIndex === index) >= 0) {
        return <Monster key={index} id={square.id} />
      }
      if (index === player.currentIndex) {
        return <Player key={index} avatar={player.avatar} id={square.id} />
      }
      return <Square key={index} id={square.id} />
    })
  }

  renderStatusButton = () => {
    const gameStatus = this.props.board.status
    if (gameStatus.length) {
      const classes = classNames('Board-status-button', {
        running: gameStatus === GAME_STATUS.running,
        end: gameStatus === GAME_STATUS.end
      })
      return <button className={classes} onClick={this.onStatusClick} />
    }
  }

  renderGameover = () => {
    const gameStatus = this.props.board.status
    if (gameStatus === GAME_STATUS.end) {
      return (
        <div className='Board-gameover'>
          <p>GAME OVER! Happy Halloween!</p>
          <button onClick={this.onRestartClick} className='Board-reset-button'>
            <i className='fa fa-refresh' />
          </button>
        </div>
      )
    }
  }

  render () {
    return (
      <section className='Board'>
        <div className='Board-wrapper' onClick={this.onBoardClick}>
          {this.renderSquares()}
        </div>
        {this.renderGameover()}
      </section>
    )
  }
}

const mapStateToProps = ({ player, monsters, board }) => ({
  player,
  monsters,
  board
})

const mapDispatchToProps = dispatch => ({
  gameActions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)
