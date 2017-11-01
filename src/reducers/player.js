import { SET_PLAYER, PICK_POSITION } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER:
      const name = action.payload
      const avatar = `https://api.adorable.io/avatars/64/${name}`
      return { ...state, name, avatar }
    case PICK_POSITION:
      return { ...state, id: action.payload }
    default:
      return state
  }
}
