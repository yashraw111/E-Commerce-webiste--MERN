// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBVYW7PQF0IAD0G5xSJUl6bApc2xSvTYts",
  authDomain: "commerce-web-tem.firebaseapp.com",
  projectId: "commerce-web-tem",
  storageBucket: "commerce-web-tem.firebasestorage.app",
  messagingSenderId: "38236907098",
  appId: "1:38236907098:web:8b8a694d1cc34e10e05a63",
  measurementId: "G-WBNGB3EPDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);