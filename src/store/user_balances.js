import axios from 'axios'

const SET_USER_BALANCE = 'SET_USER_BALANCE'

export function getBalance(user_id) {
  console.log('SET_USER_BALANCE before: ' + SET_USER_BALANCE)
  return dispatch => {
    axios.post('https://us-central1-cryptosnap-9001.cloudfunctions.net/balance', {
      user_id
    }).then(result => {
      console.log('SET_USER_BALANCE here: ' + SET_USER_BALANCE)
      dispatch({
        type: SET_USER_BALANCE,
        payload: { [user_id]: result.data.balance }
      })
    })
  }
}

const INITIAL_STATE = {

}

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_BALANCE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}