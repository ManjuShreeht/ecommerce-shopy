import  firebase,{initializeApp} from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBgA8dF7kAEzgXO4NRCUmdZ6W_D5jg6a7c",
    authDomain: "shopy-9200b.firebaseapp.com",
    projectId: "shopy-9200b",
    storageBucket: "shopy-9200b.appspot.com",
    messagingSenderId: "752685575208",
    appId: "1:752685575208:web:e9d1409c3c6d586016d91d",
    measurementId: "G-DP7F2YWL2T"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();


export  {db,auth};