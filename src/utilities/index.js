import _ from 'lodash'

import * as Settings from '../constants/settings'

const all = _.times(Settings.NUMBER_SQUARES, i => i)

const generateMonsters = (currentMonsters = [], escaper = null, num) => {
  console.log('num', num)
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

export { generateMonsters }
