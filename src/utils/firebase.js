import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzlL3SBseLG6ZideTzRl79Q-MjOFctaTs",
  authDomain: "netflixgpt-cc0b2.firebaseapp.com",
  projectId: "netflixgpt-cc0b2",
  storageBucket: "netflixgpt-cc0b2.appspot.com",
  messagingSenderId: "897941058337",
  appId: "1:897941058337:web:66e5a3483e4fb7ba364460",
  measurementId: "G-VYHNDLG30Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();