// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDB8MQzM7fGKbme9_rfZINAQkKy9W5su9Y",
    authDomain: "whats-app-clone-4ca7d.firebaseapp.com",
    projectId: "whats-app-clone-4ca7d",
    storageBucket: "whats-app-clone-4ca7d.appspot.com",
    messagingSenderId: "649039424671",
    appId: "1:649039424671:web:9578d1f042d7a6988646aa",
    measurementId: "G-X6N3W6V5Q8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

