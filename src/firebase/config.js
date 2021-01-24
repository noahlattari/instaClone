import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCrXVRhVEs0Lu9ifjmxZJiYDF-k6wfiND8",
    authDomain: "noah-instaclone.firebaseapp.com",
    projectId: "noah-instaclone",
    storageBucket: "noah-instaclone.appspot.com",
    messagingSenderId: "515618444821",
    appId: "1:515618444821:web:614937d3b5a3582d74601c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };