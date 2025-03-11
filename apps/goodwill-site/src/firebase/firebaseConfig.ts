import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsxoe2Ple9AQcDGgXONQ_Tvfjb_hwMJgY",
  authDomain: "goodwill-4e203.firebaseapp.com",
  projectId: "goodwill-4e203",
  storageBucket: "goodwill-4e203.firebasestorage.app",
  messagingSenderId: "178401533923",
  appId: "1:178401533923:web:1ffb6b88e0ea613a638ad6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage }
