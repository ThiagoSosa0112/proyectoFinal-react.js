// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQIMvSdCC6xY-SWaMYpf8Gj5olFb3T37o",
  authDomain: "e-commerce-37075.firebaseapp.com",
  projectId: "e-commerce-37075",
  storageBucket: "e-commerce-37075.appspot.com",
  messagingSenderId: "696774393670",
  appId: "1:696774393670:web:e1cfd20dbeb883e00e6f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)