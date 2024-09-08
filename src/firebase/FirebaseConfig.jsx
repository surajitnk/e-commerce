// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw1D0RzOyAY8NJ2PRJlDiSy-0CMhV6dk4",
  authDomain: "ecomprjct1.firebaseapp.com",
  projectId: "ecomprjct1",
  storageBucket: "ecomprjct1.appspot.com",
  messagingSenderId: "815348857542",
  appId: "1:815348857542:web:4afd696b7cc7ad0844b5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app)
const auth = getAuth(app)
export {fireDb, auth} ;