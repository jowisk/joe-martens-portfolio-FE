import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3qYViDpTqkjpMAARTg6mUTdihXSPgCd4",
  authDomain: "my-portfolio-mail-react.firebaseapp.com",
  projectId: "my-portfolio-mail-react",
  storageBucket: "my-portfolio-mail-react.appspot.com",
  messagingSenderId: "295279789674",
  appId: "1:295279789674:web:15b76cf8f6a04f012f2c13"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;