import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBHdD7jE04wAunVl03MxmcbBBYn5mbcoCk",
    authDomain: "shopping-kart-a2576.firebaseapp.com",
    projectId: "shopping-kart-a2576",
    storageBucket: "shopping-kart-a2576.appspot.com",
    messagingSenderId: "457665795030",
    appId: "1:457665795030:web:368539d4671cc9b0ed4a77",
    measurementId: "G-QYLHGDY2KZ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };