import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtXcsrZjqR-Us5Gt1unfUO1ZOyEwBYQkk",
    authDomain: "todo-qwyzex.firebaseapp.com",
    projectId: "todo-qwyzex",
    storageBucket: "todo-qwyzex.appspot.com",
    messagingSenderId: "444113056981",
    appId: "1:444113056981:web:31a9eb4b221af483d39e5c",
    measurementId: "G-XZ3PLJ6J8Y",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const user = auth.currentUser;
export const db = getFirestore(app);
