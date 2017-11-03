import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { BASE_MONSTERS } from '../constants/settings'
import { generateMonsters } from '../utilities'

import './PlayerSetup.css'
class PlayerSetup extends Component {
  state = {
    name: ''
  }

  /**
   * Clear inputbox and state
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
   */
  onSubmit = e => {
    e.preventDefault()
    const name = this.state.name.trim()
    const { player, gameActions: { createPlayer, createMonsters } } = this.props
    if (name.length) {
      createPlayer(name)
      // initial monsters' positions at board
      const monsters = generateMonsters([], player, BASE_MONSTERS)
      createMonsters(monsters)
      this.clearInput()
    }
  }

  renderSetup = player => {
    const { name, avatar } = player
    if (!name) {
      return (
        <form className='Player-info' onSubmit={this.onSubmit} noValidate>
          <input
            className='Player-info_input'
            type='text'
            placeholder='Enter a name'
            autoComplete='off'
            autoFocus
            maxLength='16'
            onChange={this.onNameChange}
            onBlur={this.onSubmit}
            value={this.state.name}
          />
        </form>
      )
    }

    return (
      <p className='Player-info'>
        <img src={avatar} alt={name} className='Player-info_img' />
        <label className='Player-info_name'>I'm {name}</label>
      </p>
    )
  }

  render () {
    return (
      <div className='Player-wrapper'>
        {this.renderSetup(this.props.player)}
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
