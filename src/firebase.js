// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCq-U_v1J0oOjaUq572J5BON4a9tdSdA4",
  authDomain: "cityhospital-aacda.firebaseapp.com",
  projectId: "cityhospital-aacda",
  storageBucket: "cityhospital-aacda.appspot.com",
  messagingSenderId: "69238910260",
  appId: "1:69238910260:web:0d1553e228376544804961",
  measurementId: "G-VN4ZQV4PV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);