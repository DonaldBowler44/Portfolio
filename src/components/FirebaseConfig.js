import Firebase from 'firebase/compat/app'
import "firebase/compat/database";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg5YtL7b8Avq8bXTmT6mbXSBR82fZ_Tz8",
  authDomain: "portfolio-3cd71.firebaseapp.com",
  databaseURL: "https://portfolio-3cd71-default-rtdb.firebaseio.com",
  projectId: "portfolio-3cd71",
  storageBucket: "portfolio-3cd71.appspot.com",
  messagingSenderId: "515644651030",
  appId: "1:515644651030:web:eb7c2a6cf064653e9da737"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;