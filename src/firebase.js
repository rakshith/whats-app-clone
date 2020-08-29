import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArc4d8dJV8hc_kntzYd9T5nZhooHt-ddk",
  authDomain: "whats-app-clone-95337.firebaseapp.com",
  databaseURL: "https://whats-app-clone-95337.firebaseio.com",
  projectId: "whats-app-clone-95337",
  storageBucket: "whats-app-clone-95337.appspot.com",
  messagingSenderId: "38450742601",
  appId: "1:38450742601:web:d49659807c943868d3c698",
  measurementId: "G-45H1MC3FMZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;