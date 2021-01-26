import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

//Firebase secrets whcih come from the .env file (not commited)
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Create a reference to our firebase functions
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const firebaseAppAuth = firebase.auth(); //Not in use yet.
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  //Provider for google sign in authentication
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };

  export { projectStorage, projectFirestore, firebaseAppAuth, providers, timestamp };