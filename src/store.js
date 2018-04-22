import { createStore, compose, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { combineReducers } from 'redux'
import auth from './store/auth'

const rootReducer = combineReducers({
  auth
})

const store = createStore(rootReducer, compose(
  applyMiddleware( ThunkMiddleware ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
