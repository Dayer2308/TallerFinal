// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeZ5vF7KzxrfXJLFVCWTHruiXcLIsHtK0",
  authDomain: "tallerfinal-5d612.firebaseapp.com",
  projectId: "tallerfinal-5d612",
  storageBucket: "tallerfinal-5d612.appspot.com",
  messagingSenderId: "789800065816",
  appId: "1:789800065816:web:8f8aaee9fdf99fa9405c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}