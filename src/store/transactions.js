import firebase from '../firebase'
const db = firebase.database()

const SET_TRANSACTIONS = 'SET_TRANSACTIONS'

export function fetchTransactions() {
  return dispatch => {
    db.ref('transactions').once('value').then(snapshot => {
      dispatch({
        type: SET_TRANSACTIONS,
        payload: snapshot.val()
      })
    })
  }
}

// no transactions initially
const INITIAL_STATE = {
  
}

export default function (state = INITIAL_STATE, action) {
  switch (action.payload) {
    case SET_TRANSACTIONS:
      return action.payload
    default:
      return state
  }
}