import firebase from '../firebase'
const db = firebase.database()

const SET_USER = 'SET_USER_KIOSK'

const INITIAL_STATE = {
  user: null
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


export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}