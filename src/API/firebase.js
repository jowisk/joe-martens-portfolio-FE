
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYIrQPCMJMC66-AnWgup8bitQaS4bAHjI",
  authDomain: "jowi-image-upload.firebaseapp.com",
  projectId: "jowi-image-upload",
  storageBucket: "jowi-image-upload.appspot.com",
  messagingSenderId: "666131326277",
  appId: "1:666131326277:web:0b9d1837a9a3da61110a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)