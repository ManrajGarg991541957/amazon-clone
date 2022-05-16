import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAizUSIOlHpEPkxZHKA48bFBds1khswC3s",
  authDomain: "clone-42f14.firebaseapp.com",
  projectId: "clone-42f14",
  storageBucket: "clone-42f14.appspot.com",
  messagingSenderId: "907145952767",
  appId: "1:907145952767:web:45afc73ce8f3c62240bbca",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
