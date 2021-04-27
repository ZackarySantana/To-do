import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../../todos";

firebase.initializeApp(firebaseConfig);
console.log(firebase);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export function is_addItem(uid, text) {
  if (db !== undefined) {
    db.collection("todos/" + uid + "/documents").add({
      uid,
      text,
      complete: false,
      created: Date.now(),
    });
  }
}
