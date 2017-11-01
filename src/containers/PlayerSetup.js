import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { generateMonsters } from '../utilities'

class PlayerSetup extends Component {
  state = {
    name: ''
  }

  /**
   * Clear inputbox and state
   *
   * @memberof Player
   */
  clearInput = () => {
    this.setState({ name: '' })
  }

  // ------------ Events handlers --------------//
  onNameChange = e => {
    this.setState({ name: e.target.value })
  }

  /**
   * Submit player name and dispatch createPlayer and createMonsters actions
   *
   * @memberof Player
   */
  onSubmit = e => {
    e.preventDefault()
    const name = this.state.name.trim()
    const { createPlayer, createMonsters } = this.props.gameActions
    if (name.length) {
      createPlayer(name)
      // init 4 monsters' positions at board
      const monsters = generateMonsters([], null, 4)
      createMonsters(monsters)
      this.clearInput()
    }
  }

  renderPlayer = player => {
    const { name, avatar } = player
    if (!name) {
      return (
        <form className='Player-form' onSubmit={this.onSubmit} noValidate>
          <input
            type='text'
            placeholder='Type a name'
            autoComplete='off'
            autoFocus
            maxLength='16'
            onChange={this.onNameChange}
            value={this.state.name}
          />
        </form>
      )
    }

    return (
      <p>
        <img src={avatar} alt={name} />
        <label>{name}</label>
      </p>
    )
  }

  render () {
    return (
      <div className='Player-wrapper'>
        {this.renderPlayer(this.props.player)}
      </div>
    )
  }
}

const mapStateToProps = ({ player }) => ({
  player
})

const mapDispatchToProps = dispatch => ({
  gameActions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSetup)
