// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-XxAYpG_4JOM-zFmibzYFMNgdbjB_oB0",
  authDomain: "clone-70e56.firebaseapp.com",
  projectId: "clone-70e56",
  storageBucket: "clone-70e56.appspot.com",
  messagingSenderId: "884064309065",
  appId: "1:884064309065:web:22daef5a7dcc99503fd498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()