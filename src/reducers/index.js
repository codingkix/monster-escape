import { combineReducers } from 'redux'
import player from './player'
import monsters from './monsters'
import board from './board'

export default combineReducers({
  player,
  monsters,
  board
})
