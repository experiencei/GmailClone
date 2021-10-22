import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwiFzeFi4fUEUTZRMNJfhIJqltHDUwiDk",
    authDomain: "clone-7d120.firebaseapp.com",
    projectId: "clone-7d120",
    storageBucket: "clone-7d120.appspot.com",
    messagingSenderId: "477155898217",
    appId: "1:477155898217:web:7e8b9b005c0e08068543f8"
  };

firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

