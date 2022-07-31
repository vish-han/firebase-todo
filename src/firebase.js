// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN3Hbs9bzHlcSk3YlNi8DLnzxjhAfgo-0",
  authDomain: "todoapp-7defc.firebaseapp.com",
  projectId: "todoapp-7defc",
  storageBucket: "todoapp-7defc.appspot.com",
  messagingSenderId: "233148588370",
  appId: "1:233148588370:web:d64b6b124d8919d14a5a8b",
  measurementId: "G-FC5ZHMRBLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export{db};