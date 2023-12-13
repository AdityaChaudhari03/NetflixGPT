// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6ewtvz3uwWBMYsSrKnFeZo2NSFqv24Ao",
  authDomain: "netflixgpt-53758.firebaseapp.com",
  projectId: "netflixgpt-53758",
  storageBucket: "netflixgpt-53758.appspot.com",
  messagingSenderId: "29773908667",
  appId: "1:29773908667:web:5cc896123666ed1c7fb79e",
  measurementId: "G-MW6GGFHK9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();