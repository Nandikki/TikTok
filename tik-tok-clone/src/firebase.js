import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBoaq9OHXg4HJ14DDZodItcpfxg2oCrQTQ",
    authDomain: "tik-tok-clone-nandikki.firebaseapp.com",
    projectId: "tik-tok-clone-nandikki",
    storageBucket: "tik-tok-clone-nandikki.appspot.com",
    messagingSenderId: "923905406089",
    appId: "1:923905406089:web:05fac387a7e2b7a516c258"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
