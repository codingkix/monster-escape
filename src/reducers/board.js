import _ from 'lodash'
import { RESET, START, STOP } from '../actions/types'
import { GAME_STATUS, NUMBER_SQUARES } from '../constants/settings'

const initialState = _.times(NUMBER_SQUARES, i => ({
  id: i
}))

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return { ...state, status: GAME_STATUS.running }
    case STOP:
      const { squares } = state
      const newSquares = squares.map((s, index) => {
        return index === action.payload ? { ...s, dead: true } : s
      })
      return { squares: newSquares, status: GAME_STATUS.end }
    case RESET:
      return { squares: initialState, status: GAME_STATUS.end }
    default:
      return state
  }
}
