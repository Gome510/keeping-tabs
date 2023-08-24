// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByXQ1wi6PAIYSslGDh1eUsRFxLD1am1b8",
  authDomain: "keeping-tabs-1b8f6.firebaseapp.com",
  projectId: "keeping-tabs-1b8f6",
  storageBucket: "keeping-tabs-1b8f6.appspot.com",
  messagingSenderId: "69206371619",
  appId: "1:69206371619:web:8c6722a320ef4c0afbb096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);