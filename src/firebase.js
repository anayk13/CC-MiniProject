// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "as",
    authDomain: "green-tech-blog-2024.firebaseapp.com",
    projectId: "green-tech-blog-2024",
    storageBucket: "green-tech-blog-2024.appspot.com",
    messagingSenderId: "971285753",
    appId: "1:971285753:web:3f4b5c8b9b0b0b0b0b0b0b"
};

let db;

try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    
    // Initialize with proper error handling
    console.log("Firebase initialized successfully");
    console.log("Current project ID:", firebaseConfig.projectId);
    
    // Uncomment the following line to use emulator during development
    // if (window.location.hostname === "localhost") {
    //   connectFirestoreEmulator(db, 'localhost', 8080);
    // }
} catch (error) {
    console.error("Error initializing Firebase:", error);
    throw error;
}

export { db };
