
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6idVZd72HEX68mevXfCl_yxauTi3LTt4",
  authDomain: "fir-anime-accd8.firebaseapp.com",
  projectId: "fir-anime-accd8",
  storageBucket: "fir-anime-accd8.appspot.com",
  messagingSenderId: "908952455299",
  appId: "1:908952455299:web:842ea2c15bf932034cf3b6"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}