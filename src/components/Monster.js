import React from 'react'

import './Monster.css'

const Monster = props => {
  const { id } = props
  return (
    <div {...props} className='Monster'>
      <i id={id} className='fa fa-optin-monster' />
    </div>
  )
}

export default Monster
