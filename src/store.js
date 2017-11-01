import { createStore } from 'redux'
import _ from 'lodash'

import reducers from './reducers'
import { NUMBER_SQUARES } from './constants/settings'

const board = _.times(NUMBER_SQUARES, i => ({
  id: i,
  player: false,
  monster: false
}))

const initState = {
  player: {
    name: '',
    avatar: '',
    id: -1
  },
  monsters: [],
  board
}
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

export default store
