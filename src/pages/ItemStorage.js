import firebase from "firebase/app";
import { authState } from "rxfire/auth";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../../todos";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const user = authState(auth);
const db = firebase.firestore();

export let darkmode = localStorage.getItem("darkmode") === "true";

export function getItems() {
  return user.subscribe((u) => {
    if (u !== null) {
      return db.collection("todos/" + u.uid + "/documents").orderBy("created");
    }
  });
}

export function updateItem(id, newStatus) {
  user.subscribe((u) => {
    if (u !== null) {
      db.collection("todos/" + u.uid + "/documents")
        .doc(id)
        .update({ complete: newStatus });
    }
  });
}

export function removeItem(id) {
  user.subscribe((u) => {
    if (u !== null) {
      db.collection("todos/" + u.uid + "/documents")
        .doc(id)
        .delete();
    }
  });
}

export function is_addItem(text) {
  user.subscribe((u) => {
    if (u !== null) {
      db.collection("todos/" + u.uid + "/documents").add({
        uid: u.uid,
        text,
        complete: false,
        created: Date.now(),
      });
    }
  });
}

export function setSettings(settings) {
  user.subscribe((u) => {
    if (u !== null) {
      db.doc("todos/" + u.uid + "/documents/settings").set(settings);

      localStorage.setItem("darkmode", darkmode);
    }
  });
}

export function loadSettings() {
  user.subscribe((u) => {
    if (u !== null) {
      db.doc("todos/" + u.uid + "/documents/settings")
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
  });
}

export function login() {
  auth.signInWithPopup(googleProvider);
}

export function logout() {
  auth.signOut();
}
