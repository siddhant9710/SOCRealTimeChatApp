import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxHsN5jWPXHUEmS6WwY9MqccX6C2M79Sc",
  authDomain: "socrealtimechatapp.firebaseapp.com",
  projectId: "socrealtimechatapp",
  storageBucket: "socrealtimechatapp.firebasestorage.app",
  messagingSenderId: "716929677564",
  appId: "1:716929677564:web:8f687f76a84cf95e053f79",
  measurementId: "G-0ML9ENXWTN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;