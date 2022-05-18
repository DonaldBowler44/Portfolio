import Firebase from 'firebase/compat/app'
import "firebase/compat/database";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "LOCATEDINPROJECT",
  authDomain: "LOCATEDINPROJECT"",
  databaseURL: "LOCATEDINPROJECT"",
  projectId: "LOCATEDINPROJECT",
  storageBucket: "LOCATEDINPROJECT",
  messagingSenderId: "LOCATEDINPROJECT",
  appId: "LOCATEDINPROJECT"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;
