import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBHBLYA9K3vFBF3REBhwO8rHIFzEQMH5vE",
  authDomain: "cryptosnap-9001.firebaseapp.com",
  databaseURL: "https://cryptosnap-9001.firebaseio.com",
  projectId: "cryptosnap-9001",
  storageBucket: "cryptosnap-9001.appspot.com",
  messagingSenderId: "142780972813"
};
firebase.initializeApp(config)
export default firebase