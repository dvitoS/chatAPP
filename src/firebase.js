import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRnebgoR_rTadHf0TGG4wlMpiuCakNuH8",
  authDomain: "verychat-ec3e6.firebaseapp.com",
  projectId: "verychat-ec3e6",
  storageBucket: "verychat-ec3e6.appspot.com",
  messagingSenderId: "996817046436",
  appId: "1:996817046436:web:c7ef9b39724ec227ab8f31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();