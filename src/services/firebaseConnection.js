import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB-3-GfISbyrV0Pqd_NNp7lgMfY5nMBlNI",
  authDomain: "devlinks-388b4.firebaseapp.com",
  projectId: "devlinks-388b4",
  storageBucket: "devlinks-388b4.appspot.com",
  messagingSenderId: "1040780261327",
  appId: "1:1040780261327:web:6bf9f44a2d7c032e4e04ba",
  measurementId: "G-FF550YPD49"
};


const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }
