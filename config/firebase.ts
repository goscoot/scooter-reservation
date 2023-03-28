import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDQzY199cPs0wChs4Dr-hYdSEk5voOtr08",
  authDomain: "scooter-reservation-bcda2.firebaseapp.com",
  projectId: "scooter-reservation-bcda2",
  storageBucket: "scooter-reservation-bcda2.appspot.com",
  messagingSenderId: "34359124842",
  appId: "1:34359124842:web:35cbc6fc8c7d8f57d8bb13",
  measurementId: "G-NRGTE3FDLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
