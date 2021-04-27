import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../../todos";

firebase.initializeApp(firebaseConfig);
console.log(firebase);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const user = authState(auth);

const db = firebase.firestore();

console.log(db);

export function getItems() {
  return user.subscribe(({ uid }) => {
    db.collection("todos/" + uid + "/documents").orderBy("created");
  });
}

export function updateItem(id, newStatus) {
  user.subscribe(({ uid }) => {
    db.collection("todos/" + uid + "/documents")
      .doc(id)
      .update({ complete: newStatus });
  });
}

export function is_addItem(text) {
  if (db !== undefined) {
    user.subscribe(({ uid }) => {
      db.collection("todos/" + uid + "/documents").add({
        uid,
        text,
        complete: false,
        created: Date.now(),
      });
    });
  }
}

export function setSettings(settings) {
  user.subscribe(({ uid }) => {
    db.doc("todos/" + uid + "/documents/settings").set(settings);
  });
}

export function loadSettings(modeChange) {
  user.subscribe(({ uid }) => {
    db.doc("todos/" + uid + "/documents/settings")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          modeChange({ detail: data.darkmode });
        } else {
          db.doc("todos/" + uid + "/documents/settings").set({
            darkmode: false,
          });
        }
      });
  });
}

export function login() {
  auth.signInWithPopup(googleProvider);
}

export function logout() {
  auth.signOut();
}
