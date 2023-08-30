// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxtUkQLWGLYHRhlrgy6WUIt1hwtJRBLe4",
  authDomain: "keeping-tabs-62074.firebaseapp.com",
  projectId: "keeping-tabs-62074",
  storageBucket: "keeping-tabs-62074.appspot.com",
  messagingSenderId: "483249990530",
  appId: "1:483249990530:web:2f3df325f657799d3a3d9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);