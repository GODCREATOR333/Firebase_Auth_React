// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDByqzr8SrwNasLXa1JhkCYl3SDqiz6lqA",
    authDomain: "authentication-practice-f059c.firebaseapp.com",
    projectId: "authentication-practice-f059c",
    storageBucket: "authentication-practice-f059c.appspot.com",
    messagingSenderId: "353809816939",
    appId: "1:353809816939:web:9b50a06f59344c46a9002e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;