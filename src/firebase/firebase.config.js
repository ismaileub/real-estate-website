// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoKEqda8r60NkJBmooYB0zLflbghVNLmM",
  authDomain: "estate-haven.firebaseapp.com",
  projectId: "estate-haven",
  storageBucket: "estate-haven.appspot.com",
  messagingSenderId: "948238298308",
  appId: "1:948238298308:web:506e7234156c750643ed91"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;