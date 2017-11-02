import { SET_MONSTERS, TICK, RESET } from '../actions/types'
import { getNextMoveIndex, getOppositeDirection } from '../utilities'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MONSTERS:
      return state.concat(action.payload)
    case TICK:
      const { monsters } = action.payload
      return monsters.map(monster => {
        const { currentIndex, direction } = monster
        const newIndex = getNextMoveIndex(currentIndex, direction)
        // if newIndex stays the same, turn the opporsite direction
        if (newIndex === currentIndex) {
          return {
            ...monster,
            direction: getOppositeDirection(direction),
            preIndex: currentIndex
          }
        }

        return { ...monster, preIndex: currentIndex, currentIndex: newIndex }
      })

    case RESET:
      return initialState
    default:
      return state
  }
}
