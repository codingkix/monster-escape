import React from 'react'
import _ from 'lodash'

import {
  BASE_LEVEL,
  BASE_MONSTERS,
  LEVEL_UP_MONSTERS
} from '../constants/settings'

import './Levels.css'

const Levels = props => {
  const { timmer } = props
  const levels = _.floor(timmer / BASE_LEVEL) + 1

  const num = BASE_MONSTERS + LEVEL_UP_MONSTERS * (levels - 1)
  return (
    <div className='Levels'>
      <p className='Levels-num'>{levels}</p>
      <p className='Levels-monster'>
        {num} <i className='fa fa-optin-monster' /> are chasing
      </p>
    </div>
  )
}

export default Levels
