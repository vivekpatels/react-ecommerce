import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import  {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCDJ2d0VzPWeH9ygo3MYmErKyeCdp0HdGI",
  authDomain: "react-ecommerce-816f6.firebaseapp.com",
  projectId: "react-ecommerce-816f6",
  storageBucket: "react-ecommerce-816f6.appspot.com",
  messagingSenderId: "71782438820",
  appId: "1:71782438820:web:cb90033bdcd58affccd331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}