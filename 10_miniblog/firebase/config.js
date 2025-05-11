import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjT8znA-WurpzKciRDpJedo1i4CuAYt8E",
  authDomain: "miniblog-c8d53.firebaseapp.com",
  projectId: "miniblog-c8d53",
  storageBucket: "miniblog-c8d53.firebasestorage.app",
  messagingSenderId: "958197109981",
  appId: "1:958197109981:web:51febd6843a9c488a03734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};