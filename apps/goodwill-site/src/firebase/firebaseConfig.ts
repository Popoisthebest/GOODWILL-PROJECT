import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1CQ8DejW4Y-hL3zUJGJbMeqzCTKOmEm4",
    authDomain: "goodwill-a5928.firebaseapp.com",
    projectId: "goodwill-a5928",
    storageBucket: "goodwill-a5928.firebasestorage.app",
    messagingSenderId: "278820130741",
    appId: "1:278820130741:web:875307ca57a5ebc64093fc",
    measurementId: "G-C7GV4TB08J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // 🔥 Storage 추가
const db = getFirestore(app); // 🔥 Firestore 추가

export { app, storage, db };