const BOARD_WIDTH = 9
const BOARD_HEIGHT = 6
const NUMBER_SQUARES = BOARD_WIDTH * BOARD_HEIGHT

const [LEFT, UP, RIGHT, DOWN] = [37, 38, 39, 40]

const DIRECTIONS = ['left', 'right', 'up', 'down']

const GAME_STATUS = {
  running: 'running',
  end: 'end'
}

export {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  NUMBER_SQUARES,
  LEFT,
  UP,
  RIGHT,
  DOWN,
  DIRECTIONS,
  GAME_STATUS
}
