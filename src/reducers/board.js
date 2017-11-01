import { SET_MONSTERS, PICK_POSITION } from '../actions/types'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MONSTERS:
      const monsterIds = action.payload
      return state.map(square => ({
        ...square,
        monster: monsterIds.indexOf(square.id) >= 0
      }))
    case PICK_POSITION:
      const playerId = action.payload
      return state.map(square => ({
        ...square,
        player: square.id === playerId
      }))

    default:
      return state
  }
}
