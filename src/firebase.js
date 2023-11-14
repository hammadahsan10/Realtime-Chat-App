import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD0-bsiPc4i3lmzQbElfjXWHO-01WXj0c",
    authDomain: "firechat-5d0ed.firebaseapp.com",
    projectId: "firechat-5d0ed",
    storageBucket: "firechat-5d0ed.appspot.com",
    messagingSenderId: "507545484932",
    appId: "1:507545484932:web:b31dc5588620de4a73ccd1",
    measurementId: "G-FWJPBB6GDX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };