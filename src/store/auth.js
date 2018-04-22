import firebase from '../firebase'
const db = firebase.database()

const SET_USER = 'SET_USER'

const INITIAL_STATE = {
  user: null
}

export function fetchUser(user) {
  return dispatch => {
    db.ref(`users/${user.uid}`).once('value').then(snapshot => {
      const theUser = snapshot.val()
      dispatch({
        type: SET_USER,
        payload: {
          ...theUser,
          uid: user.uid
        }
      })
    }).catch(err => {
      alert('Invalid login')
    })
  }
}

export function login(email, password) {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      dispatch(fetchUser(user))
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