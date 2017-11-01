import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './GameBoard.css'

import * as actions from '../actions'

import { Player, Monster, Square } from '../components/'

class GameBoard extends Component {
  renderSquares = () => {
    return this.props.board.map(square => {
      const { player, monster, id } = square
      if (player) {
        const { avatar } = this.props.player
        return <Player key={id} id={id} avatar={avatar} />
      }
      if (monster) {
        return <Monster key={id} id={id} />
      }

      return <Square key={id} id={id} />
    })
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
  }

  render () {
    return (
      <section className='Board'>
        <div className='Board-wrapper' onClick={this.onBoardClick}>
          {this.renderSquares()}
        </div>
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
