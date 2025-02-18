import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDstCS9j8L3fZwHqbL6CDLa67VbiIwVBxA",
  authDomain: "virtualroom-f6a57.firebaseapp.com",
  projectId: "virtualroom-f6a57",
  storageBucket: "virtualroom-f6a57.firebasestorage.app",
  messagingSenderId: "184027486946",
  appId: "1:184027486946:web:0aee27aa05f0182e811cbb",
  measurementId: "G-G99BFM8G04"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);