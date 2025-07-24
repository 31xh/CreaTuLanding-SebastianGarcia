import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAovnbNd97FnC4Sef9WHQ2NfVJKoOV3xc",
  authDomain: "asus-db-b8231.firebaseapp.com",
  projectId: "asus-db-b8231",
  storageBucket: "asus-db-b8231.firebasestorage.app",
  messagingSenderId: "368097753480",
  appId: "1:368097753480:web:606bd7f6ecc3c1255c623d",
  measurementId: "G-1FV1H2LXW9"
};

export const app = initializeApp(firebaseConfig)