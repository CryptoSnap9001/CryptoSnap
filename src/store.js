import { createStore, compose, applyMiddleware } from 'redux'
import cryptoSnapApp9001 from './reducers'
import ThunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(cryptoSnapApp9001, compose(
  applyMiddleware( ThunkMiddleware ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
