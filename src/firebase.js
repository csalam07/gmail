import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPqJA2nbWw5Y4IMSGueo1pANi9xrBovhE",
    authDomain: "fir-843dc.firebaseapp.com",
    projectId: "fir-843dc",
    storageBucket: "fir-843dc.appspot.com",
    messagingSenderId: "383086576996",
    appId: "1:383086576996:web:486397baf13819524de671",
    measurementId: "G-3G610F6S1Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };