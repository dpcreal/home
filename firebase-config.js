import { getApp, getApps, initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyChRzNJs4XyLxliSVSFNb8rsmcXFDw5XIo",
  authDomain: "woodpecker-e4c85.firebaseapp.com",
  projectId: "woodpecker-e4c85",
  storageBucket: "woodpecker-e4c85.firebasestorage.app",
  messagingSenderId: "1039525973528",
  appId: "1:1039525973528:web:a836bb3172767aa104fd6d"
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
