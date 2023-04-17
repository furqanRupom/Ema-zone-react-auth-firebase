// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJzJ-ZCUNgcocp7ngUC48ui_YnX6lSN4w",
  authDomain: "ema-zone-auth-firebase-ba176.firebaseapp.com",
  projectId: "ema-zone-auth-firebase-ba176",
  storageBucket: "ema-zone-auth-firebase-ba176.appspot.com",
  messagingSenderId: "926930586510",
  appId: "1:926930586510:web:fb9369b25917a12fe6f2df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;