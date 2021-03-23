import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBKlI_P8Xl7mlP09bKaVw6ioEzcbPqJk3E',
  authDomain: 'slack-clone-c49be.firebaseapp.com',
  projectId: 'slack-clone-c49be',
  storageBucket: 'slack-clone-c49be.appspot.com',
  messagingSenderId: '1027392500572',
  appId: '1:1027392500572:web:e43102e6b2cf151ecf8799',
  measurementId: 'G-SEQT0HWM0L',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { db, googleAuthProvider, firebase, githubAuthProvider };
