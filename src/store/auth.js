import firebase from '../firebase'
const db = firebase.database()

const SET_USER = 'SET_USER'

const INITIAL_STATE = {
  user: null
}

function login(email, password) {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      db.ref(`users/${user.uid}`).once('value').then(snapshot => {
        const theUser = snapshot.val()
        dispatch({type: SET_USER, payload: theUser})
        // const {type} = theUser
        // type 10 = government
        // type 20 = beneficiary
        // type 30 = store employee
      }).catch(err => {
        alert('Invalid login')
      })
    })
  }
}

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.password }
  }
}