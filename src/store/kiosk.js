import firebase from '../firebase'
const db = firebase.database()

const SET_USER = 'SET_USER_KIOSK'
const SET_RECEIPT_URL = 'SET_RECEIPT_URL'

const INITIAL_STATE = {
  user: null,
  receipt_url: null
}

export function fetchUser(userid) {
  return dispatch => {
    db.ref(`users/${userid}`).once('value').then(snapshot => {
      const theUser = snapshot.val()
      dispatch({
        type: SET_USER,
        payload: {
          ...theUser,
          uid: userid
        }
      })
    }).catch(err => {
      alert('Invalide kiosk'+err)
    })
  }
}

export function setReceiptURL(url) {
  return {type: SET_RECEIPT_URL, payload: url}
}

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    case SET_RECEIPT_URL:
      return { ...state, receipt_url: action.payload }
    default:
      return state
  }
}