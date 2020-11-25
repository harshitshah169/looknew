import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBIK5XHWcnn6y_SqtZHufX6r3N-3vH4juI",
    authDomain: "looknew-af73d.firebaseapp.com",
    databaseURL: "https://looknew-af73d.firebaseio.com",
    projectId: "looknew-af73d",
    storageBucket: "looknew-af73d.appspot.com",
    messagingSenderId: "823269304698",
    appId: "1:823269304698:web:0b05da531c4579bbbfcec3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};