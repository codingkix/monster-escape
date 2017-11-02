import { combineReducers } from 'redux'
import player from './player'
import monsters from './monsters'
import board from './board'
import timmer from './timmer'

export default combineReducers({
  player,
  monsters,
  board,
  timmer
})
