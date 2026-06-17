// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeOkbLdFCI_35aldSHTGcXh7OLfMFVsko",
  authDomain: "kodo-scholarship-1da4f.firebaseapp.com",
  projectId: "kodo-scholarship-1da4f",
  storageBucket: "kodo-scholarship-1da4f.firebasestorage.app",
  messagingSenderId: "907983623209",
  appId: "1:907983623209:web:7d9b5899ed041c7f23b838",
  measurementId: "G-J2LXKQKWWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);