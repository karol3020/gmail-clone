import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-XxAYpG_4JOM-zFmibzYFMNgdbjB_oB0",
  authDomain: "clone-70e56.firebaseapp.com",
  projectId: "clone-70e56",
  storageBucket: "clone-70e56.appspot.com",
  messagingSenderId: "884064309065",
  appId: "1:884064309065:web:22daef5a7dcc99503fd498"
};

// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };