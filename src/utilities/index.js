import _ from 'lodash'

import * as Settings from '../constants/settings'

const all = _.times(Settings.NUMBER_SQUARES, i => i)

const generateMonsters = (currentMonsters = [], escaper = null, num) => {
  if (num === 0) {
    return currentMonsters
  }

  const rest = _.difference(
    all,
    escaper === null ? currentMonsters : currentMonsters.concat(escaper)
  )
  const newMonsters = _.concat(currentMonsters, rest[_.random(rest.length - 1)])
  return generateMonsters(newMonsters, escaper, num - 1)
}

const swapItemsInArray = (items, index1, index2) => {
  if (index1 < 0 || index2 < 0) {
    return
  }

  const firstPart = items.slice(0, index1)
  const secondPart = items.slice(index1 + 1, index2)
  const lastPart = items.slice(index2 + 1)

  return _.concat(firstPart, items[index2], secondPart, items[index1], lastPart)
}

const getNextMoveIndex = (currentIndex, direction) => {
  let newIndex

  switch (direction) {
    case 'left':
      // if hit left wall, stay and turn around next
      return currentIndex % Settings.BOARD_WIDTH === 0
        ? currentIndex
        : currentIndex - 1
    case 'right':
      // if hit right wall, stay and turn around next
      return currentIndex % (Settings.BOARD_WIDTH - 1) === 0
        ? currentIndex
        : currentIndex + 1
    case 'up':
      // if hit upper wall, stay and turn around next
      newIndex = currentIndex - Settings.BOARD_WIDTH
      return newIndex < 0 ? currentIndex : newIndex
    case 'down':
      newIndex = currentIndex + Settings.BOARD_WIDTH
      return newIndex >= Settings.NUMBER_SQUARES ? currentIndex : newIndex
    default:
      break
  }
}

const getOppositeDirection = direction => {
  switch (direction) {
    case 'left':
      return 'right'
    case 'right':
      return 'left'
    case 'up':
      return 'down'
    case 'down':
      return 'up'
    default:
      return direction
  }
}

export {
  generateMonsters,
  swapItemsInArray,
  getNextMoveIndex,
  getOppositeDirection
}
