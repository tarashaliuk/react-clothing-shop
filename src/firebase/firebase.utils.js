import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAZWRa27Lgk1sefA4zvjP8cGN8IZ8zb9po",
  authDomain: "crwn-db-93c5d.firebaseapp.com",
  databaseURL: "https://crwn-db-93c5d.firebaseio.com",
  projectId: "crwn-db-93c5d",
  storageBucket: "crwn-db-93c5d.appspot.com",
  messagingSenderId: "912205128473",
  appId: "1:912205128473:web:40054945a88cc98e68db88",
  measurementId: "G-NHWY39259Y"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
