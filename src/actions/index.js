import { SET_PLAYER, SET_MONSTERS, PICK_POSITION, UPDATE_BOARD } from './types'

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

export { createPlayer, createMonsters, pickPosition, updateBoard }
