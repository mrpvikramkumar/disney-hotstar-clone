import firebase from "firebase";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBkPjjf0swdNI7pRRo3XsYds16mqKE9UtE",
    authDomain: "disney-hotstar-clone-ca3a4.firebaseapp.com",
    projectId: "disney-hotstar-clone-ca3a4",
    storageBucket: "disney-hotstar-clone-ca3a4.appspot.com",
    messagingSenderId: "818552502329",
    appId: "1:818552502329:web:9a6bc9233253f81ee3b5e8",
    measurementId: "G-VJVNREN0TD",
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;