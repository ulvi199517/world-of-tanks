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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
     if(!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch(error){
            console.log('error creating user', error.message);
          }
      }
      return userRef;
  }
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef =firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    })
    return await batch.commit();
  }
export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(docSnapshot => {
        const {title, items} = docSnapshot.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
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

const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);

export default firebase;