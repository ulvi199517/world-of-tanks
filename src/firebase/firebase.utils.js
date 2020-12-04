import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyChjbn6FV0MPru3mNc-XRJ6lBDR0viCA5s",
    authDomain: "world-of-tanks-a5175.firebaseapp.com",
    projectId: "world-of-tanks-a5175",
    storageBucket: "world-of-tanks-a5175.appspot.com",
    messagingSenderId: "639890363705",
    appId: "1:639890363705:web:ddef4bb88cf379c9c9c4e8",
    measurementId: "G-52V79C2MJM"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;