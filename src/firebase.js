import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import serviceAccount from "../todos.js";

console.log(firebase);

firebase.initializeApp(serviceAccount);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
