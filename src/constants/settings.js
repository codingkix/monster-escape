const BOARD_WIDTH = 9
const BOARD_HEIGHT = 6
const NUMBER_SQUARES = BOARD_WIDTH * BOARD_HEIGHT

const [LEFT, UP, RIGHT, DOWN] = [37, 38, 39, 40]

const DIRECTIONS = ['left', 'right', 'up', 'down']

const GAME_STATUS = {
  running: 'running',
  end: 'end'
}

// base level is keeping alive for 10 seconds
const BASE_LEVEL = 10
// initial monsters number is 3
const BASE_MONSTERS = 3
// increase 2 monsters by each level
const LEVEL_UP_MONSTERS = 2

export {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  NUMBER_SQUARES,
  LEFT,
  UP,
  RIGHT,
  DOWN,
  DIRECTIONS,
  GAME_STATUS,
  BASE_LEVEL,
  BASE_MONSTERS,
  LEVEL_UP_MONSTERS
}
