

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "yuvaintern-aedf4.firebaseapp.com",
  projectId: "yuvaintern-aedf4",
  storageBucket: "yuvaintern-aedf4.firebasestorage.app",
  messagingSenderId: "722958967052",
  appId: "1:722958967052:web:8151c199bc9197b5fe6929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider };