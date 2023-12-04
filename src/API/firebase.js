import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo7huGqY_ZKRugPtFB6jn8BMI_uoHWy6w",
  authDomain: "jowi-portfolio.firebaseapp.com",
  projectId: "jowi-portfolio",
  storageBucket: "jowi-portfolio.appspot.com",
  messagingSenderId: "220863721792",
  appId: "1:220863721792:web:a153b36a165001401d8aa5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth() 
export const db = getFirestore()