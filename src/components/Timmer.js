import React from 'react'
import _ from 'lodash'

import { BASE_LEVEL } from '../constants/settings'
import './Timmer.css'

const Timmer = props => {
  const { timmer } = props
  const minutes = _.floor(timmer / 60)
  const seconds = timmer % 60
  const showLevelUp =
    timmer >= BASE_LEVEL && timmer % BASE_LEVEL >= 0 && timmer % BASE_LEVEL <= 1

  return (
    <div className='Timmer'>
      <div className='Timmer-clock'>
        <label>{minutes < 10 ? `0${minutes}` : minutes}</label>
        <span>:</span>
        <label>{seconds < 10 ? `0${seconds}` : seconds}</label>
      </div>
      {showLevelUp &&
        <p className='Timmer-levelup'>
          <i className='fa fa-arrow-up fa-5x' />
          <label>level up</label>
        </p>}
    </div>
  )
}

export default Timmer
