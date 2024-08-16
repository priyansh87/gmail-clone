// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJQM5na3zJjUF1t5M2bKjkf2GJMWqWEAM",
  authDomain: "clone-b90d0.firebaseapp.com",
  projectId: "clone-b90d0",
  storageBucket: "clone-b90d0.appspot.com",
  messagingSenderId: "736628106029",
  appId: "1:736628106029:web:a1fefa8504bc742055a9a4",
  measurementId: "G-S1P3XRJ799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth() ;
export const db = getFirestore(app) ; 
export const  provider = new GoogleAuthProvider() ;