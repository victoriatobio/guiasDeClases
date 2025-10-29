import app from 'firebase/app';
import 'firebase/auth'; //me lo tiró chat pero sin esto no puedo hacer nada
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDKBiSUQhIZLKz1u6ZLz-dtUlRSBReepLA",
    authDomain: "clase11-a3b02.firebaseapp.com",
    projectId: "clase11-a3b02",
    storageBucket: "clase11-a3b02.firebasestorage.app",
    messagingSenderId: "717127120285",
    appId: "1:717127120285:web:bb054142c4ea7ee5ae2b74",
    measurementId: "G-XWTXW50BRH"
  };


app.initializeApp(firebaseConfig);


export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();