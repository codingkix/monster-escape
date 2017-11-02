import { RESET, MOVE, TICK, SET_PLAYER, PICK_POSITION } from '../actions/types'
import { getNextMoveIndex, getOppositeDirection } from '../utilities'

const initialState = {
  name: '',
  avatar: '',
  id: -1,
  currentIndex: -1,
  preIndex: -1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER:
      const name = action.payload
      const avatar = `https://api.adorable.io/avatars/64/${name}`
      return { ...state, name, avatar }
    case PICK_POSITION:
      return { ...state, id: action.payload, currentIndex: action.payload }
    case TICK:
      const { player } = action.payload
      if (!player.direction) {
        return state
      }
      const newIndex = getNextMoveIndex(player.currentIndex, player.direction)
      if (newIndex === player.currentIndex) {
        return {
          ...player,
          direction: getOppositeDirection(player.direction),
          preIndex: player.currentIndex
        }
      }
      return {
        ...player,
        preIndex: player.currentIndex,
        currentIndex: newIndex
      }
    case MOVE:
      const newDir = action.payload
      const nextIndex = getNextMoveIndex(state.currentIndex, newDir)
      return {
        ...state,
        preIndex: state.currentIndex,
        currentIndex: nextIndex,
        direction: newDir
      }
    case RESET:
      return initialState
    default:
      return state
  }
}
