import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXHKKWo8BEojnhDeTY5S2scAPj2JSzaCs",
  authDomain: "teaching-assistance.firebaseapp.com",
  projectId: "teaching-assistance",
  storageBucket: "teaching-assistance.firebasestorage.app",
  messagingSenderId: "737251739590",
  appId: "1:737251739590:web:630a41d2310aa8619294c7",
  measurementId: "G-NBZRJ9NTDC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
