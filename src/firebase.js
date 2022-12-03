// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjzY4E8WzCBQjWh4GJfxbK5Xr1lL5JKxI",
    authDomain: "tallerfinal-firebase.firebaseapp.com",
    projectId: "tallerfinal-firebase",
    storageBucket: "tallerfinal-firebase.appspot.com",
    messagingSenderId: "984718207869",
    appId: "1:984718207869:web:284b5470d52be150363a14"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}