// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN9scknb4kvRnyDN6MLnYjaHtre-M4Jxg",
  authDomain: "char-blog-88aa1.firebaseapp.com",
  projectId: "char-blog-88aa1",
  storageBucket: "char-blog-88aa1.appspot.com",
  messagingSenderId: "1044734896896",
  appId: "1:1044734896896:web:9da01aec366f5c51daa1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)