import _ from 'lodash'

import {
  SET_PLAYER,
  SET_MONSTERS,
  PICK_POSITION,
  UPDATE_BOARD,
  START,
  STOP,
  RESET,
  MOVE,
  TICK
} from './types'

import { GAME_STATUS, DIRECTIONS } from '../constants/settings'

const createPlayer = name => ({
  type: SET_PLAYER,
  payload: name
})

const createMonsters = monsters => ({
  type: SET_MONSTERS,
  payload: monsters
})

const pickPosition = position => ({
  type: PICK_POSITION,
  payload: position
})

const updateBoard = () => ({
  type: UPDATE_BOARD
})

const start = () => {
  return (dispatch, getState) => {
    // set game status to 'start'
    dispatch({ type: START })

    const intervalId = setInterval(() => {
      const { board, player, monsters } = getState()
      if (board.status === GAME_STATUS.running) {
        // check game end for each tick.
        // DEAD, if player's currentIndex is the same as one of monsters
        if (
          monsters.findIndex(m => m.currentIndex === player.currentIndex) >= 0
        ) {
          dispatch({ type: STOP, payload: player.currentIndex })
          return
        }

        // change monsters' direction randomly
        const changedMonsters = monsters.map(monster => {
          return { ...monster, direction: DIRECTIONS[_.random(0, 3)] }
        })
        dispatch({ type: TICK, payload: { player, monsters: changedMonsters } })
      } else {
        clearInterval(intervalId)
      }
    }, 1000)
  }
}

const reset = () => ({
  type: RESET
})

const movePlayer = direction => {
  return (dispatch, getState) => {
    const { board, player, monsters } = getState()
    if (board.status === GAME_STATUS.running) {
      // check game end for each move.
      // DEAD, if player's currentIndex is the same as one of monsters
      if (
        monsters.findIndex(m => m.currentIndex === player.currentIndex) >= 0
      ) {
        dispatch({ type: STOP, payload: player.currentIndex })
        return
      }
    }
    // dispatch player move action
    dispatch({
      type: MOVE,
      payload: direction
    })
  }
}

export {
  createPlayer,
  createMonsters,
  pickPosition,
  updateBoard,
  start,
  reset,
  movePlayer
}
