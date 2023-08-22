import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAmjuCQcJsgRsoArQ_G4wrt0nohz-7-7Jo",
  authDomain: "linkedin-clone-6be14.firebaseapp.com",
  projectId: "linkedin-clone-6be14",
  storageBucket: "linkedin-clone-6be14.appspot.com",
  messagingSenderId: "790413671007",
  appId: "1:790413671007:web:187e21b9f0a466976939ea",
  measurementId: "G-T3R51RJN4X"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth =firebase.auth();
const Provider= new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();
export {auth, Provider, storage};
export default db;