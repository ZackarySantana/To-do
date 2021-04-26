import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../../todos";

firebase.initializeApp(firebaseConfig);
console.log(firebase);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export function addItem(uid, text) {}
