import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1CQ8DejW4Y-hL3zUJGJbMeqzCTKOmEm4",
  authDomain: "goodwill-a5928.firebaseapp.com",
  projectId: "goodwill-a5928",
  storageBucket: "goodwill-a5928.firebasestorage.app",
  messagingSenderId: "278820130741",
  appId: "1:278820130741:web:875307ca57a5ebc64093fc",
  measurementId: "G-C7GV4TB08J",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage }
