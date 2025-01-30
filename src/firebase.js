import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwNl67srpAwV_1TXxlfdPBKSsVsabt1nY",
    authDomain: "little-robin-library.firebaseapp.com",
    projectId: "little-robin-library",
    storageBucket: "little-robin-library.firebasestorage.app",
    messagingSenderId: "225893382229",
    appId: "1:225893382229:web:182b587e06b0068da47cdc",
    measurementId: "G-L8HHJ35CPJ"
  };

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
