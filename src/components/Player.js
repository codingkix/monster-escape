import React from 'react'
import './Player.css'

const Player = props => {
  const { avatar, ...otherProps } = props

  return (
    <div
      className='Player'
      style={{ backgroundImage: `url(${avatar})` }}
      {...otherProps}
    />
  )
}

export default Player
