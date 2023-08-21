import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBcULPByaACy20UNlb3XCG0BjLSvu55FlI",
    authDomain: "disneyplus-clone-9aa38.firebaseapp.com",
    projectId: "disneyplus-clone-9aa38",
    storageBucket: "disneyplus-clone-9aa38.appspot.com",
    messagingSenderId: "325682821161",
    appId: "1:325682821161:web:7db67ba2fb9f706865c438",
    measurementId: "G-1M9WVP8335"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;