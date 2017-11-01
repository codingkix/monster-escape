import _ from 'lodash'

import { SET_MONSTERS } from '../actions/types'
import { DIRECTIONS } from '../constants/settings'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MONSTERS:
      const ids = action.payload
      const monsters = _.times(ids.length, i => ({
        id: ids[i],
        direction: DIRECTIONS[_.random(3)]
      }))
      return state.concat(monsters)
    default:
      return state
  }
}
