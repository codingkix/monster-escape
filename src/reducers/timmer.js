import { TICK } from '../actions/types'

export default (state = 0, action) => {
  switch (action.type) {
    case TICK:
      return state + 1
    default:
      return state
  }
}
