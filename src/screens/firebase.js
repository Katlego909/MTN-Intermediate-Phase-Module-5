import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4MQY0vr_yreLoLT99TmY6SzJ4cVajcr4",
  authDomain: "intermediatemodule-5.firebaseapp.com",
  projectId: "intermediatemodule-5",
  storageBucket: "intermediatemodule-5.appspot.com",
  messagingSenderId: "458938553174",
  appId: "1:458938553174:web:aac60c1764d60d62a1fcf7",
  measurementId: "G-1790BRHY5D"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();

export const getTasks = () => {
 return db.collection('tasks')
  .get() 
  .then(result => result.docs)
  .then(docs => docs.map(doc => ({
    id: doc.id, 
    name: doc.data().name, 
    createdAt: doc.data().createdAt,
    completedAt: doc.data().completedAt
  })))
}

export { auth, db };
