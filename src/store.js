import { createStore, compose, applyMiddleware } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { combineReducers } from 'redux'
import auth from './store/auth'
import kiosk from './store/kiosk'
import user_balances from './store/user_balances'
import transactions from './store/transactions'

const rootReducer = combineReducers({
  auth,
  kiosk,
  user_balances,
  transactions
})

const store = createStore(rootReducer, compose(
  applyMiddleware( ThunkMiddleware ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
