import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import _ from 'lodash'

import reducers from './reducers'
import { NUMBER_SQUARES } from './constants/settings'

const squares = _.times(NUMBER_SQUARES, i => ({
  id: i
}))

const initState = {
  player: {
    name: '',
    avatar: '',
    id: -1,
    currentIndex: -1,
    preIndex: -1
  },
  monsters: [],
  board: {
    squares,
    status: ''
  },
  timmer: 0
}
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  initState,
  composeEnhancers(applyMiddleware(thunk))
)
/* eslint-enable */

export default store
