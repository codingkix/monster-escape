import _ from 'lodash'

import * as Settings from '../constants/settings'

const all = _.times(Settings.NUMBER_SQUARES, i => i)

// generate random new monsters' id from available spots only
const generateNewMonsterIDs = (monsterIds = [], rest = [], num) => {
  if (num === 0) {
    return monsterIds
  }
  rest = _.difference(rest, monsterIds)

  const newMonsterIds = _.concat(monsterIds, rest[_.random(rest.length - 1)])
  return generateNewMonsterIDs(newMonsterIds, rest, num - 1)
}

// generate new monsters with random spot and directions
const generateMonsters = (currentMonsters = [], player = {}, num) => {
  const currentMonsterIDs = currentMonsters.map(m => m.id)
  const playerId = player.id

  // remove current monsters and player
  const rest = _.difference(
    all,
    playerId === -1 ? currentMonsterIDs : currentMonsterIDs.concat(playerId)
  )

  const ids = generateNewMonsterIDs([], rest, num)

  const newMonsters = _.times(ids.length, i => ({
    id: ids[i],
    direction: Settings.DIRECTIONS[_.random(3)],
    preIndex: -1,
    currentIndex: ids[i]
  }))

  return newMonsters
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

/**
 * Return the next move index based on currentIndex and direction
 * @param {*Num} currentIndex
 * @param {*String} direction
 */
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
      return (currentIndex + 1) % Settings.BOARD_WIDTH === 0
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

/**
 * return the opposite direction from the input
 * @param {*String} direction
 */
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

/**
 * A simple throttle function.
 * To prevent key press event fires too many times.
 * Within the threshold, the fn will only fire once.
 * @param {*function} fn the function to throttle
 * @param {*Object} options
 * @param {*Number} threshold the max fire rate of the fn
 * @param {Object} context 'this' value for fn
 * @returns {function}
 */
const throttle = (fn, { threshold = 250, context = window }) => {
  let last
  return () => {
    const now = +new Date()

    if (!last || now >= last + threshold) {
      last = now
      console.log(now)
      fn.apply(context, arguments)
    }
  }
}

export {
  generateMonsters,
  swapItemsInArray,
  getNextMoveIndex,
  getOppositeDirection,
  throttle
}
