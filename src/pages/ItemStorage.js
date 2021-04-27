import firebase from "firebase/app";
import { authState } from "rxfire/auth";
import { concatMap } from "rxjs/operators";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../../todos";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const user = authState(auth);
const db = firebase.firestore();

export let darkmode = localStorage.getItem("darkmode") === "true";

let uid;

export async function getItems() {
  await user.subscribe((u) => {
    uid = u.uid;
  });

  const query = await db
    .collection("todos/" + uid + "/documents")
    .orderBy("created")
    .get()
    .then((ret) => {
      loadSettings();
      return ret;
    });

  return query.docs;
}

export function updateItem(id, newStatus) {
  db.doc("todos/" + uid + "/documents/" + id).update({ complete: newStatus });
}

export function removeItem(id) {
  db.doc("todos/" + uid + "/documents/" + id).delete();
}

export function is_addItem(text) {
  db.collection("todos/" + uid + "/documents").add({
    text,
    complete: false,
    created: Date.now(),
  });
}

export function setSettings(settings) {
  db.doc("todos/" + uid + "/documents/settings").set(settings);

  localStorage.setItem("darkmode", darkmode);
}

function loadSettings() {
  db.doc("todos/" + uid + "/documents/settings")
    .get()
    .then((doc) => {
      if (doc.exists) {
        darkmode = doc.data().darkmode;
      } else {
        db.doc("todos/" + uid + "/documents/settings").set({
          darkmode: false,
        });
      }
    });
}

export function login() {
  auth.signInWithPopup(googleProvider);
}

export function logout() {
  auth.signOut();
}
